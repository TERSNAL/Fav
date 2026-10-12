/* =========================================================
   ✨ MEJORAS GENERALES DE FAVORITEDEX
   1) Botón de silencio global
   2) Imágenes de respaldo cuando un sprite externo falla
   3) Pokémon del día (portada)
   4) Explorador con filtros (nombre, tipo, generación, favoritos)
   5) Récords y rachas de los minijuegos
   Este archivo NO reemplaza ninguna función existente: solo añade.
   ========================================================= */
(function () {
    'use strict';

    const esc = t => String(t ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(d)); } catch { return d; } };
    const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { console.warn('No se pudo guardar', k, e); } };
    const hayDatos = () => typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length > 0;

    function tiposDe(p) {
        const limpio = String(p.tipo || '').replace(/\([^)]*\)/g, '');
        return limpio.split('/').map(t => norm(t)).filter(Boolean);
    }

    /* ---------------------------------------------------------
       1) 🔇 SONIDO GLOBAL (activar / silenciar)
       Silencia efectos, gritos automáticos y sonidos de la Pokédex.
       El minijuego del grito sigue funcionando: su botón
       "ESCUCHAR GRITO" siempre puede reproducir el audio.
       --------------------------------------------------------- */
    const CLAVE_SILENCIO = 'pokedex_silencio';
    let silencio = false;
    try { silencio = localStorage.getItem(CLAVE_SILENCIO) === '1'; } catch (_) {}
    let permitirAudioJuego = false;

    const playOriginal = HTMLMediaElement.prototype.play;
    HTMLAudioElement.prototype.play = function () {
        if (silencio && !permitirAudioJuego) {
            try { this.pause(); } catch (_) {}
            return Promise.resolve();
        }
        return playOriginal.apply(this, arguments);
    };

    // El botón del minijuego del grito es una acción explícita: siempre suena.
    document.addEventListener('click', ev => {
        if (ev.target.closest && ev.target.closest('#minijuego-grito-escuchar')) {
            permitirAudioJuego = true;
            setTimeout(() => { permitirAudioJuego = false; }, 0);
        }
    }, true);

    function actualizarBotonesSonido() {
        document.querySelectorAll('.btn-sonido-toggle').forEach(b => {
            b.textContent = silencio ? '🔇 Sonido: silenciado' : '🔊 Sonido: activado';
            b.setAttribute('aria-pressed', silencio ? 'true' : 'false');
        });
    }

    window.alternarSonido = function () {
        silencio = !silencio;
        try { localStorage.setItem(CLAVE_SILENCIO, silencio ? '1' : '0'); } catch (_) {}
        if (silencio) {
            try { if (typeof reproductorAudio !== 'undefined') reproductorAudio.pause(); } catch (_) {}
            try { if (window.__audioNavegacion) window.__audioNavegacion.pause(); } catch (_) {}
        }
        actualizarBotonesSonido();
    };

    /* ---------------------------------------------------------
       2) 🖼️ IMÁGENES DE RESPALDO
       Si un sprite/arte de un servidor externo falla, se intenta
       una alternativa y, si no, se muestra una Poké Ball gris.
       --------------------------------------------------------- */
    const PLACEHOLDER = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="#2a2d3a" stroke="#6b7390" stroke-width="5"/>' +
        '<path d="M6 50h88" stroke="#6b7390" stroke-width="5"/><circle cx="50" cy="50" r="13" fill="#1a1c26" stroke="#6b7390" stroke-width="5"/></svg>'
    );
    const BASE_SPRITES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    document.addEventListener('error', ev => {
        const img = ev.target;
        if (!(img instanceof HTMLImageElement)) return;
        const src = img.currentSrc || img.src || '';
        if (!src || src.startsWith('data:') || src.startsWith('blob:')) return;
        if (img.classList.contains('icono-tipo')) return;   // los iconos de tipo son diminutos
        const intento = img.dataset.fallbackIntento || '0';
        if (intento === '2') return;

        if (intento === '0') {
            let m = src.match(/sprites\/pokemon\/other\/showdown\/(shiny\/)?(\d+)\.gif/);
            if (!m) m = src.match(/sprites\/pokemon\/other\/official-artwork\/(shiny\/)?(\d+)\.png/);
            if (m) {
                img.dataset.fallbackIntento = '1';
                img.src = `${BASE_SPRITES}${m[1] || ''}${m[2]}.png`;
                return;
            }
        }
        img.dataset.fallbackIntento = '2';
        img.classList.add('img-sin-imagen');
        img.src = PLACEHOLDER;
    }, true);

    /* ---------------------------------------------------------
       3) 🌟 POKÉMON DEL DÍA
       Cambia cada día y es el mismo para todos los visitantes.
       --------------------------------------------------------- */
    function indiceDelDia() {
        const d = new Date();
        const semilla = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
        return (Math.imul(semilla, 2654435761) >>> 0) % pokemonData.length;
    }

    function iniciarPokemonDelDia() {
        const caja = document.getElementById('pokemon-del-dia');
        if (!caja || !hayDatos()) return;
        const indice = indiceDelDia();
        const p = pokemonData[indice];
        const forma = (p.formas && p.formas[0]) || null;
        const img = document.getElementById('pdd-img');
        const nombre = document.getElementById('pdd-nombre');
        const tipos = document.getElementById('pdd-tipos');
        const ver = document.getElementById('pdd-ver');
        if (img && forma && typeof obtenerImagenUrl === 'function') {
            img.src = obtenerImagenUrl(forma, 'oficial', p.id);
            img.alt = p.nombre;
        }
        if (nombre) nombre.textContent = `#${String(p.id).padStart(4, '0')} ${p.nombre}`;
        if (tipos) tipos.textContent = String(p.tipo || '');
        if (ver) ver.onclick = () => {
            if (typeof irAPokemon === 'function') irAPokemon(indice);
            else if (typeof abrirPokedex === 'function') abrirPokedex();
        };
        caja.hidden = false;
    }

    /* ---------------------------------------------------------
       4) 🧭 EXPLORADOR CON FILTROS
       --------------------------------------------------------- */
    const GENERACIONES = [
        { n: 1, nombre: 'I · Kanto',   desde: 1,   hasta: 151 },
        { n: 2, nombre: 'II · Johto',  desde: 152, hasta: 251 },
        { n: 3, nombre: 'III · Hoenn', desde: 252, hasta: 386 },
        { n: 4, nombre: 'IV · Sinnoh', desde: 387, hasta: 493 },
        { n: 5, nombre: 'V · Teselia', desde: 494, hasta: 649 },
        { n: 6, nombre: 'VI · Kalos',  desde: 650, hasta: 721 },
        { n: 7, nombre: 'VII · Alola', desde: 722, hasta: 809 },
        { n: 8, nombre: 'VIII · Galar', desde: 810, hasta: 905 },
        { n: 9, nombre: 'IX · Paldea', desde: 906, hasta: 1025 }
    ];

    function generacionDe(id) {
        const g = GENERACIONES.find(x => id >= x.desde && id <= x.hasta);
        return g ? g.n : 0;
    }

    function llenarSelectoresExplorador() {
        const selTipo = document.getElementById('explorar-tipo');
        const selGen = document.getElementById('explorar-gen');
        if (selTipo && !selTipo.options.length) {
            selTipo.innerHTML = '<option value="">Todos los tipos</option>';
            if (typeof TIPO_INFO !== 'undefined') {
                Object.keys(TIPO_INFO).forEach(k => {
                    const o = document.createElement('option');
                    o.value = k; o.textContent = TIPO_INFO[k].nombre;
                    selTipo.appendChild(o);
                });
            }
        }
        if (selGen && !selGen.options.length) {
            selGen.innerHTML = '<option value="">Todas las generaciones</option>';
            GENERACIONES.forEach(g => {
                const o = document.createElement('option');
                o.value = String(g.n); o.textContent = `Gen ${g.nombre}`;
                selGen.appendChild(o);
            });
        }
    }

    function renderExplorador() {
        const lista = document.getElementById('explorar-lista');
        const contador = document.getElementById('explorar-contador');
        if (!lista || !hayDatos()) return;

        const texto = norm(document.getElementById('explorar-texto')?.value);
        const tipo = document.getElementById('explorar-tipo')?.value || '';
        const gen = document.getElementById('explorar-gen')?.value || '';
        const soloFavs = !!document.getElementById('explorar-favs')?.checked;
        const favoritos = (soloFavs && typeof obtenerFavoritos === 'function') ? obtenerFavoritos().map(Number) : [];

        const resultados = pokemonData.filter(p => {
            if (texto && !(norm(p.nombre).includes(texto) || String(p.id) === texto)) return false;
            if (tipo && !tiposDe(p).includes(tipo)) return false;
            if (gen && String(generacionDe(p.id)) !== gen) return false;
            if (soloFavs && !favoritos.includes(Number(p.id))) return false;
            return true;
        });

        if (contador) {
            contador.textContent = resultados.length
                ? `${resultados.length} Pokémon encontrado${resultados.length === 1 ? '' : 's'} de ${pokemonData.length}.`
                : 'Ningún Pokémon coincide con esos filtros.';
        }

        lista.innerHTML = resultados.map(p => {
            const forma = p.formas && p.formas[0];
            const imagen = (forma && typeof obtenerImagenUrl === 'function') ? obtenerImagenUrl(forma, 'oficial', p.id) : '';
            return `<button type="button" class="item-tipo" data-indice="${pokemonData.indexOf(p)}">` +
                `<img src="${esc(imagen)}" alt="${esc(p.nombre)}" loading="lazy" decoding="async">` +
                `<span>#${String(p.id).padStart(4, '0')} ${esc(p.nombre)}</span></button>`;
        }).join('');
    }

    /* ---------------------------------------------------------
       ☰ MENÚ DESPLEGABLE DE INICIO
       Muestra/oculta la lista de accesos secundarios (Login,
       Comunidad, Favoritos, Minijuegos, etc.) para mantener la
       portada limpia y organizada.
       --------------------------------------------------------- */
    window.alternarMenuInicio = function () {
        const lista = document.getElementById('menu-inicio-lista');
        const boton = document.getElementById('toggle-menu-inicio');
        if (!lista || !boton) return;
        const abierto = lista.hasAttribute('hidden');
        if (abierto) {
            lista.removeAttribute('hidden');
        } else {
            lista.setAttribute('hidden', '');
        }
        boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
        boton.classList.toggle('abierto', abierto);
    };

    window.abrirExplorador = function () {
        llenarSelectoresExplorador();
        if (typeof abrirModal === 'function') abrirModal('modal-explorar');
        renderExplorador();
        setTimeout(() => document.getElementById('explorar-texto')?.focus(), 60);
    };

    /* ---------------------------------------------------------
       5) 🏅 RÉCORDS Y RACHAS DE LOS MINIJUEGOS
       Se guardan por cuenta (o "visitante") en este navegador.
       --------------------------------------------------------- */
    const PREFIJO_RECORDS = 'pokedex_records_';
    const JUEGOS = {
        descripcion: { nombre: '❓ ¿Quién es? (descripción)', contenedor: 'minijuego-pokemon' },
        grito:       { nombre: '🔊 ¿Quién es? (grito)',       contenedor: 'minijuego-grito' },
        tipos:       { nombre: '🧬 Combinación de tipos',     contenedor: 'minijuego-tipos' },
        altura:      { nombre: '📏 ¿Cuál es más alto?',       contenedor: 'minijuego-altura' },
        debilidades: { nombre: '🛡️ Debilidades y resistencias', contenedor: 'minijuego-debilidades' },
        silueta:     { nombre: '🌑 ¿Quién es ese Pokémon?',   contenedor: 'minijuego-silueta' }
    };

    function usuarioRecords() {
        return (localStorage.getItem('pokedex_usuario_actual') || '').trim() || 'visitante';
    }
    function claveRecords(usuario) { return PREFIJO_RECORDS + (usuario || usuarioRecords()); }
    function recordsDe(usuario) {
        const r = leer(claveRecords(usuario), {});
        return (r && typeof r === 'object') ? r : {};
    }
    function datosJuego(records, juego) {
        return Object.assign({ rondas: 0, aciertos: 0, racha: 0, mejorRacha: 0 }, records[juego] || {});
    }

    window.registrarResultadoMinijuego = function (juego, acierto) {
        if (!JUEGOS[juego]) return;
        const records = recordsDe();
        const d = datosJuego(records, juego);
        d.rondas += 1;
        if (acierto) {
            d.aciertos += 1;
            d.racha += 1;
            if (d.racha > d.mejorRacha) d.mejorRacha = d.racha;
        } else {
            d.racha = 0;
        }
        records[juego] = d;
        guardar(claveRecords(), records);
        actualizarRachasVisibles();
        renderRecords();
    };

    function actualizarRachasVisibles() {
        const records = recordsDe();
        Object.keys(JUEGOS).forEach(juego => {
            const cont = document.getElementById(JUEGOS[juego].contenedor);
            const estad = cont && cont.querySelector('.minijuego-estadisticas');
            if (!estad) return;
            let span = estad.querySelector('[data-racha-juego]');
            if (!span) {
                span = document.createElement('span');
                span.setAttribute('data-racha-juego', juego);
                span.innerHTML = '🔥 Racha: <strong>0</strong>';
                estad.appendChild(span);
            }
            span.querySelector('strong').textContent = datosJuego(records, juego).racha;
        });
    }

    function renderRecords() {
        const cont = document.getElementById('records-contenido');
        if (!cont) return;
        const records = recordsDe();

        let filas = '';
        let totalAciertos = 0, totalRondas = 0;
        Object.keys(JUEGOS).forEach(juego => {
            const d = datosJuego(records, juego);
            totalAciertos += d.aciertos; totalRondas += d.rondas;
            const pct = d.rondas ? Math.round((d.aciertos / d.rondas) * 100) + '%' : '—';
            filas += `<tr><th scope="row">${JUEGOS[juego].nombre}</th>` +
                `<td>${d.aciertos}/${d.rondas}</td><td>${pct}</td><td>${d.racha}</td><td>${d.mejorRacha}</td></tr>`;
        });

        let html = `<p class="records-usuario">👤 Récords de: <strong>${esc(usuarioRecords())}</strong></p>` +
            `<div class="records-tabla-wrap"><table class="records-tabla"><thead><tr>` +
            `<th scope="col">Minijuego</th><th scope="col">Aciertos</th><th scope="col">%</th>` +
            `<th scope="col">Racha</th><th scope="col">Mejor racha</th></tr></thead><tbody>${filas}</tbody></table></div>`;

        // Ranking de las cuentas guardadas en este dispositivo.
        const ranking = [];
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (!k || !k.startsWith(PREFIJO_RECORDS)) continue;
            const usuario = k.slice(PREFIJO_RECORDS.length);
            const r = recordsDe(usuario);
            let aciertos = 0, mejor = 0;
            Object.keys(JUEGOS).forEach(j => { const d = datosJuego(r, j); aciertos += d.aciertos; mejor = Math.max(mejor, d.mejorRacha); });
            if (aciertos > 0) ranking.push({ usuario, aciertos, mejor });
        }
        ranking.sort((a, b) => b.aciertos - a.aciertos || b.mejor - a.mejor);
        if (ranking.length > 1) {
            html += '<h3 class="records-subtitulo">🏆 Ranking de este dispositivo</h3><ol class="records-ranking">' +
                ranking.slice(0, 10).map(r =>
                    `<li><strong>${esc(r.usuario)}</strong> — ${r.aciertos} aciertos · mejor racha ${r.mejor}</li>`
                ).join('') + '</ol>';
        }
        cont.innerHTML = html;
    }

    function reiniciarRecords() {
        if (!confirm('¿Seguro que quieres reiniciar los récords de ' + usuarioRecords() + ' en este navegador?')) return;
        try { localStorage.removeItem(claveRecords()); } catch (_) {}
        actualizarRachasVisibles();
        renderRecords();
    }

    /* ---------------------------------------------------------
       Arranque
       --------------------------------------------------------- */
    document.addEventListener('DOMContentLoaded', () => {
        actualizarBotonesSonido();
        iniciarPokemonDelDia();
        // El total de Pokémon se calcula con los datos reales (nunca queda desactualizado).
        if (hayDatos()) document.querySelectorAll('[data-total-pokemon]').forEach(el => { el.textContent = pokemonData.length; });

        ['explorar-texto', 'explorar-tipo', 'explorar-gen', 'explorar-favs'].forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            el.addEventListener(el.tagName === 'INPUT' && el.type !== 'checkbox' ? 'input' : 'change', renderExplorador);
        });
        document.getElementById('explorar-lista')?.addEventListener('click', ev => {
            const b = ev.target.closest('.item-tipo');
            if (!b) return;
            const indice = Number(b.dataset.indice);
            if (typeof cerrarModal === 'function') cerrarModal('modal-explorar');
            if (typeof irAPokemonDesdeTipo === 'function') irAPokemonDesdeTipo(indice);
        });

        document.getElementById('records-reiniciar')?.addEventListener('click', reiniciarRecords);
        setTimeout(() => { actualizarRachasVisibles(); renderRecords(); }, 60);
    });

    // Al abrir el Centro de Entrenamiento se refrescan rachas y récords (por si cambió la cuenta).
    if (typeof window.abrirCentroEntrenador === 'function') {
        const abrirOriginal = window.abrirCentroEntrenador;
        window.abrirCentroEntrenador = function () {
            const r = abrirOriginal.apply(this, arguments);
            actualizarRachasVisibles();
            renderRecords();
            return r;
        };
    }
})();
