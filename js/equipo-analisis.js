/* =========================================================
   🏟️ ANÁLISIS DEL EQUIPO DE GIMNASIO + COMPARTIR EQUIPO
   - Debilidades / resistencias combinadas del equipo (por tipo base)
   - Cobertura ofensiva según los tipos de los Pokémon
   - Copiar enlace del equipo y descargar imagen PNG
   No modifica el funcionamiento del equipo: solo lo lee.
   ========================================================= */
(function () {
    'use strict';

    const CLAVE_EQUIPO = 'pokedex_equipo_gimnasio';
    const CLAVE_MEGA_EQUIPO = 'pokedex_mega_equipo';
    const CLAVE_APODOS = 'pokedex_apodos';

    const esc = t => String(t ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(d)); } catch { return d; } };
    const hayDatos = () => typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length > 0;

    /* Tabla de tipos (ataque -> defensa). Solo se listan los casos distintos de x1. */
    const TABLA = {
        normal:    { roca: .5, acero: .5, fantasma: 0 },
        fuego:     { fuego: .5, agua: .5, planta: 2, hielo: 2, bicho: 2, roca: .5, dragon: .5, acero: 2 },
        agua:      { fuego: 2, agua: .5, planta: .5, tierra: 2, roca: 2, dragon: .5 },
        electrico: { agua: 2, electrico: .5, planta: .5, tierra: 0, volador: 2, dragon: .5 },
        planta:    { fuego: .5, agua: 2, planta: .5, veneno: .5, tierra: 2, volador: .5, bicho: .5, roca: 2, dragon: .5, acero: .5 },
        hielo:     { fuego: .5, agua: .5, planta: 2, hielo: .5, tierra: 2, volador: 2, dragon: 2, acero: .5 },
        lucha:     { normal: 2, hielo: 2, veneno: .5, volador: .5, psiquico: .5, bicho: .5, roca: 2, fantasma: 0, siniestro: 2, acero: 2, hada: .5 },
        veneno:    { planta: 2, veneno: .5, tierra: .5, roca: .5, fantasma: .5, acero: 0, hada: 2 },
        tierra:    { fuego: 2, electrico: 2, planta: .5, veneno: 2, volador: 0, bicho: .5, roca: 2, acero: 2 },
        volador:   { electrico: .5, planta: 2, lucha: 2, bicho: 2, roca: .5, acero: .5 },
        psiquico:  { lucha: 2, veneno: 2, psiquico: .5, siniestro: 0, acero: .5 },
        bicho:     { fuego: .5, planta: 2, lucha: .5, veneno: .5, volador: .5, psiquico: 2, fantasma: .5, siniestro: 2, acero: .5, hada: .5 },
        roca:      { fuego: 2, hielo: 2, lucha: .5, tierra: .5, volador: 2, bicho: 2, acero: .5 },
        fantasma:  { normal: 0, psiquico: 2, fantasma: 2, siniestro: .5 },
        dragon:    { dragon: 2, acero: .5, hada: 0 },
        siniestro: { lucha: .5, psiquico: 2, fantasma: 2, siniestro: .5, hada: .5 },
        acero:     { fuego: .5, agua: .5, electrico: .5, hielo: 2, roca: 2, acero: .5, hada: 2 },
        hada:      { fuego: .5, lucha: 2, veneno: .5, dragon: 2, siniestro: 2, acero: .5 }
    };
    const TIPOS = Object.keys(TABLA);

    function multiplicador(ataque, tiposDefensor) {
        return tiposDefensor.reduce((acc, def) => {
            const m = TABLA[ataque] && TABLA[ataque][def];
            return acc * (m === undefined ? 1 : m);
        }, 1);
    }

    function tiposDesdeTexto(tipoStr) {
        const limpio = String(tipoStr || '').replace(/\([^)]*\)/g, '');
        return limpio.split('/').map(t => norm(t)).filter(t => TABLA[t]);
    }
    function tiposDe(p) { return tiposDesdeTexto(p.tipo); }
    // Tipos de un miembro del equipo TAL COMO ESTÁ en la vitrina: si tiene una Mega
    // activa (equipoActual la adjunta en .forma) y ya se conoce su tipo real por
    // PokeAPI, se usa ese; si no, se usa el tipo base del Pokémon. Antes el análisis
    // ignoraba por completo la Mega elegida en el equipo (Mega Charizard X contaba
    // como Fuego/Volador en vez de Fuego/Dragón).
    function tiposDeMiembro(par) {
        if (par.forma && par.forma.tipos) return tiposDesdeTexto(par.forma.tipos);
        return tiposDe(par.p);
    }

    function nombreTipo(clave) {
        return (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[clave]) ? TIPO_INFO[clave].nombre : clave;
    }
    function colorTipo(clave) {
        return (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[clave]) ? TIPO_INFO[clave].color : '#888';
    }
    function chipTipo(clave, extra) {
        return `<span class="chip-tipo" style="--color-tipo:${colorTipo(clave)}">${esc(nombreTipo(clave))}${extra ? ` <b>${extra}</b>` : ''}</span>`;
    }

    /* Equipo actual (misma validación que usa el equipo de gimnasio). */
    function formaMegaDe(p, megas) {
        const idx = megas[String(p.id)];
        return (idx !== undefined && idx !== null && Array.isArray(p.formas) && p.formas[idx]) ? p.formas[idx] : null;
    }
    // Cada miembro se devuelve como { p, forma }: "forma" es su Mega activa en el
    // equipo (la misma que ya usa la imagen para compartir), o null si está en su
    // forma normal. tiposDeMiembro() y statsDeMiembro() la usan para reflejar el
    // tipo/estadísticas reales en vez de asumir siempre el Pokémon base.
    function equipoActual() {
        if (!hayDatos()) return [];
        const bruto = leer(CLAVE_EQUIPO, []);
        if (!Array.isArray(bruto)) return [];
        const megas = leer(CLAVE_MEGA_EQUIPO, {});
        const vistos = new Set();
        const miembros = [];
        bruto.forEach(id => {
            const n = Number(id);
            if (!Number.isFinite(n) || n <= 0 || vistos.has(n)) return;
            const p = pokemonData.find(x => Number(x.id) === n);
            if (!p) return;
            vistos.add(n);
            miembros.push({ p, forma: formaMegaDe(p, megas) });
        });
        return miembros.slice(0, 4);
    }
    // Pide a PokeAPI el tipo/estadísticas reales de las Megas activas que aún no se
    // conocen, y vuelve a dibujar el análisis cuando llegan (evita bloquear el
    // primer dibujado, que mientras tanto usa el tipo base como aproximación).
    function asegurarTiposDelEquipo(miembros) {
        if (typeof resolverDatosFormaPokeApi !== 'function') return;
        miembros.forEach(({ p, forma }) => {
            if (forma && forma.tipos === undefined) {
                resolverDatosFormaPokeApi(p, forma).then(() => renderAnalisis()).catch(() => {});
            }
        });
    }

    /* ---------------------------------------------------------
       Análisis
       --------------------------------------------------------- */
    function analizar(miembros) {
        const defensa = TIPOS.map(ataque => {
            let debiles = 0, resisten = 0;
            miembros.forEach(par => {
                const m = multiplicador(ataque, tiposDeMiembro(par));
                if (m > 1) debiles++;
                else if (m < 1) resisten++;
            });
            return { tipo: ataque, debiles, resisten };
        });

        const tiposEquipo = new Set();
        miembros.forEach(par => tiposDeMiembro(par).forEach(t => tiposEquipo.add(t)));
        const conVentaja = [], sinVentaja = [];
        TIPOS.forEach(defensor => {
            const golpea = [...tiposEquipo].some(t => multiplicador(t, [defensor]) >= 2);
            (golpea ? conVentaja : sinVentaja).push(defensor);
        });

        return { defensa, conVentaja, sinVentaja };
    }

    function renderAnalisis() {
        const cont = document.getElementById('equipo-analisis');
        if (!cont) return;
        const miembros = equipoActual();
        if (!miembros.length) {
            cont.innerHTML = '<p class="analisis-vacio">📊 Agrega Pokémon a tu equipo para ver sus debilidades y su cobertura de tipos.</p>';
            return;
        }
        asegurarTiposDelEquipo(miembros);

        const { defensa, conVentaja, sinVentaja } = analizar(miembros);
        const conMega = miembros.filter(m => m.forma);
        const notaMega = conMega.length
            ? `<p class="analisis-nota-mega">🌟 Con Mega activa: ${conMega.map(m => esc((m.forma.cap || m.p.nombre))).join(', ')} (se usa su tipo real).</p>`
            : '';
        const compartidas = defensa.filter(d => d.debiles >= 2 && d.debiles > d.resisten)
            .sort((a, b) => (b.debiles - b.resisten) - (a.debiles - a.resisten));
        const sinResistente = defensa.filter(d => d.resisten === 0 && d.debiles >= 1 && !compartidas.includes(d));

        const celdas = defensa.map(d => {
            let clase = 'neutro';
            if (d.debiles >= 2 && d.debiles > d.resisten) clase = 'peligro';
            else if (d.debiles > d.resisten) clase = 'atencion';
            else if (d.resisten > d.debiles) clase = 'seguro';
            return `<div class="analisis-celda ${clase}" title="${esc(nombreTipo(d.tipo))}: ${d.debiles} débil(es), ${d.resisten} resiste(n)">` +
                `<span class="analisis-tipo" style="--color-tipo:${colorTipo(d.tipo)}">${esc(nombreTipo(d.tipo))}</span>` +
                `<span class="analisis-numeros">⚠️ ${d.debiles} · 🛡️ ${d.resisten}</span></div>`;
        }).join('');

        const linea = (icono, titulo, lista) =>
            `<p class="analisis-linea"><strong>${icono} ${titulo}</strong> ${lista}</p>`;

        cont.innerHTML =
            '<h3 class="analisis-titulo">📊 Análisis de tipos del equipo</h3>' +
            `<div class="analisis-grid" role="list">${celdas}</div>` +
            '<p class="analisis-leyenda">⚠️ = Pokémon débiles a ese tipo · 🛡️ = Pokémon que lo resisten o son inmunes</p>' +
            (compartidas.length
                ? linea('🔴', 'Puntos débiles compartidos:', compartidas.map(d => chipTipo(d.tipo, `${d.debiles}⚠️`)).join(' '))
                : linea('✅', 'Puntos débiles compartidos:', 'ningún tipo golpea con ventaja a la mayoría del equipo sin que alguien lo resista.')) +
            (sinResistente.length
                ? linea('🟠', 'Nadie lo resiste:', sinResistente.map(d => chipTipo(d.tipo)).join(' '))
                : '') +
            linea('⚔️', 'Golpeas con ventaja a:', conVentaja.length ? conVentaja.map(t => chipTipo(t)).join(' ') : 'ningún tipo.') +
            (sinVentaja.length
                ? linea('🚫', 'Sin ventaja contra:', sinVentaja.map(t => chipTipo(t)).join(' '))
                : linea('🌟', 'Cobertura ofensiva:', '¡tus tipos cubren todos los demás con ventaja!')) +
            '<p class="analisis-nota">Basado en los tipos base de cada Pokémon (no incluye cambios de tipo por Megaevolución ni movimientos concretos).</p>';
    }
    window.actualizarAnalisisEquipo = renderAnalisis;

    /* ---------------------------------------------------------
       Mensajes en el panel del equipo
       --------------------------------------------------------- */
    function mensajeEquipo(texto, clase) {
        const m = document.getElementById('equipo-mensaje');
        if (m) { m.textContent = texto; m.className = 'equipo-mensaje ' + (clase || ''); }
    }

    /* ---------------------------------------------------------
       🔗 Enlace del equipo
       --------------------------------------------------------- */
    function enlaceEquipo() {
        const ids = equipoActual().map(par => par.p.id);
        if (!ids.length) return '';
        return location.href.split('#')[0] + '#equipo=' + ids.join(',');
    }

    async function copiarEnlace() {
        const url = enlaceEquipo();
        if (!url) return mensajeEquipo('⚠️ Agrega al menos un Pokémon para compartir tu equipo.', 'error');
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(url);
            } else {
                const t = document.createElement('textarea');
                t.value = url; t.style.position = 'fixed'; t.style.opacity = '0';
                document.body.appendChild(t); t.select();
                const ok = document.execCommand('copy');
                document.body.removeChild(t);
                if (!ok) throw new Error('copy falló');
            }
            mensajeEquipo('🔗 Enlace copiado. Quien lo abra podrá cargar tu equipo.', 'exito');
        } catch (e) {
            console.warn(e);
            window.prompt('Copia este enlace de tu equipo:', url);
        }
    }

    function importarDesdeEnlace() {
        if (!hayDatos()) return;
        const m = location.hash.match(/^#equipo=([\d,]+)$/);
        if (!m) return;
        const ids = [...new Set(m[1].split(',').map(Number))]
            .filter(n => pokemonData.some(p => Number(p.id) === n)).slice(0, 4);
        const limpiarHash = () => { try { history.replaceState(null, '', location.pathname + location.search); } catch (_) {} };
        if (!ids.length) return limpiarHash();

        const nombres = ids.map(id => pokemonData.find(p => Number(p.id) === id).nombre).join(', ');
        if (confirm(`Este enlace contiene un equipo compartido:\n${nombres}\n\n¿Quieres cargarlo? (reemplaza tu equipo actual)`)) {
            try {
                localStorage.setItem(CLAVE_EQUIPO, JSON.stringify(ids));
                localStorage.setItem(CLAVE_MEGA_EQUIPO, '{}');
            } catch (e) { console.warn(e); }
            if (typeof window.renderEquipo === 'function') window.renderEquipo();
            if (typeof abrirCentroEntrenador === 'function') abrirCentroEntrenador();
            mensajeEquipo('✅ Equipo compartido cargado.', 'exito');
        }
        limpiarHash();
    }

    /* ---------------------------------------------------------
       🖼️ Imagen PNG del equipo
       --------------------------------------------------------- */
    function cargarImagen(url) {
        return new Promise(resolve => {
            if (!url) return resolve(null);
            const img = new Image();
            img.crossOrigin = 'anonymous';
            const t = setTimeout(() => resolve(null), 9000);
            img.onload = () => { clearTimeout(t); resolve(img); };
            img.onerror = () => { clearTimeout(t); resolve(null); };
            img.src = url;
        });
    }

    function rectRedondeado(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }

    async function descargarImagen() {
        const miembros = equipoActual();
        if (!miembros.length) return mensajeEquipo('⚠️ Agrega al menos un Pokémon para crear la imagen.', 'error');
        mensajeEquipo('⏳ Creando imagen del equipo...', '');

        const apodos = leer(CLAVE_APODOS, {});
        const megas = leer(CLAVE_MEGA_EQUIPO, {});
        const datos = await Promise.all(miembros.map(async p => {
            let forma = Array.isArray(p.formas) ? p.formas[0] : null;
            let nombre = apodos[String(p.id)] || p.nombre;
            const idxMega = megas[String(p.id)];
            if (idxMega !== undefined && idxMega !== null && p.formas && p.formas[idxMega]) {
                forma = p.formas[idxMega];
                nombre = forma.cap || nombre;
            }
            const url = (forma && typeof obtenerImagenUrl === 'function') ? obtenerImagenUrl(forma, 'oficial', p.id) : '';
            return { p, nombre, img: await cargarImagen(url) };
        }));

        const W = 1000, H = 560;
        const canvas = document.createElement('canvas');
        canvas.width = W; canvas.height = H;
        const ctx = canvas.getContext('2d');

        const fondo = ctx.createLinearGradient(0, 0, W, H);
        fondo.addColorStop(0, '#0a1140'); fondo.addColorStop(1, '#050510');
        ctx.fillStyle = fondo; ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(255,215,64,.75)'; ctx.lineWidth = 4;
        rectRedondeado(ctx, 10, 10, W - 20, H - 20, 24); ctx.stroke();

        ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
        ctx.font = '800 38px "Baloo 2", Arial, sans-serif';
        ctx.fillText('🏟️ MI EQUIPO DE GIMNASIO', W / 2, 68);

        const anchoCarta = 210, alto = 380, sep = 20;
        const total = datos.length * anchoCarta + (datos.length - 1) * sep;
        let x = (W - total) / 2;
        const y = 108;

        datos.forEach(d => {
            ctx.fillStyle = 'rgba(255,255,255,.07)';
            rectRedondeado(ctx, x, y, anchoCarta, alto, 18); ctx.fill();
            ctx.strokeStyle = 'rgba(255,215,64,.5)'; ctx.lineWidth = 2; ctx.stroke();

            if (d.img) {
                const max = 170;
                const escala = Math.min(max / d.img.width, max / d.img.height);
                const w = d.img.width * escala, h = d.img.height * escala;
                ctx.drawImage(d.img, x + (anchoCarta - w) / 2, y + 22 + (max - h) / 2, w, h);
            } else {
                ctx.fillStyle = '#2a2d3a';
                ctx.beginPath(); ctx.arc(x + anchoCarta / 2, y + 107, 60, 0, Math.PI * 2); ctx.fill();
            }

            ctx.fillStyle = '#fff'; ctx.textAlign = 'center';
            let tam = 24;
            ctx.font = `800 ${tam}px "Baloo 2", Arial, sans-serif`;
            while (ctx.measureText(d.nombre).width > anchoCarta - 20 && tam > 13) {
                tam -= 1; ctx.font = `800 ${tam}px "Baloo 2", Arial, sans-serif`;
            }
            ctx.fillText(d.nombre, x + anchoCarta / 2, y + 232);

            ctx.fillStyle = '#b8c0d8'; ctx.font = '600 16px Arial, sans-serif';
            ctx.fillText('#' + String(d.p.id).padStart(4, '0'), x + anchoCarta / 2, y + 258);

            const tipos = tiposDe(d.p);
            tipos.forEach((t, i) => {
                const ty = y + 282 + i * 36;
                ctx.fillStyle = colorTipo(t);
                rectRedondeado(ctx, x + 30, ty, anchoCarta - 60, 28, 14); ctx.fill();
                ctx.fillStyle = '#111'; ctx.font = '800 15px Arial, sans-serif';
                ctx.fillText(nombreTipo(t).toUpperCase(), x + anchoCarta / 2, ty + 20);
            });
            x += anchoCarta + sep;
        });

        ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.font = '600 15px Arial, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('Creado en FavoriteDex — Mi Pokédex de Favoritos', W / 2, H - 26);

        try {
            const blob = await new Promise((res, rej) => canvas.toBlob(b => b ? res(b) : rej(new Error('toBlob vacío')), 'image/png'));
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url; a.download = 'mi-equipo-favoritedex.png';
            document.body.appendChild(a); a.click(); document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(url), 4000);
            mensajeEquipo('🖼️ Imagen del equipo descargada.', 'exito');
        } catch (e) {
            console.warn('No se pudo exportar la imagen:', e);
            mensajeEquipo('⚠️ El navegador bloqueó la exportación de la imagen (imágenes externas). Prueba de nuevo o desde otro navegador.', 'error');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('btn-equipo-enlace')?.addEventListener('click', copiarEnlace);
        document.getElementById('btn-equipo-imagen')?.addEventListener('click', descargarImagen);
        renderAnalisis();
        setTimeout(importarDesdeEnlace, 250);
    });
})();
