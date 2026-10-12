/* =========================================================
   📅 RETO DIARIO: ¿QUIÉN ES EL POKÉMON DEL DÍA?
   Cada día hay UN Pokémon misterioso (el mismo para todos los que
   abren la web ese día). Tienes 6 intentos: cada fallo abre una pista
   nueva (generación → tipo → letras → descripción → silueta → grito).
   Se guarda la racha de días seguidos y se puede compartir el resultado.
   Todo vive en este navegador (entra también en el respaldo del progreso).
   ========================================================= */
(function () {
    'use strict';

    const CLAVE = 'favoritedex_reto_diario_v1';
    const MAX_INTENTOS = 6;
    const ID_CONTENEDOR = 'contenido-minijuegos-equipo';

    // Generaciones por número de Pokédex nacional.
    const GENERACIONES = [
        [151, 'I · Kanto'], [251, 'II · Johto'], [386, 'III · Hoenn'], [493, 'IV · Sinnoh'],
        [649, 'V · Teselia'], [721, 'VI · Kalos'], [809, 'VII · Alola'], [905, 'VIII · Galar/Hisui'],
        [1025, 'IX · Paldea']
    ];

    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

    let estado = null;      // { hoy: {fecha, intentos:[nombres], terminado, resuelto}, racha, mejorRacha, ultimoResuelto, totalResueltos }
    let secreto = null;     // Pokémon del día
    let temporizador = null;

    /* ---------- utilidades de fecha y azar determinista ---------- */
    function fechaHoy() {
        // Permite probar otro día: window.__retoDiarioFecha = '2026-10-01'
        if (window.__retoDiarioFecha) return String(window.__retoDiarioFecha);
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    }
    function diaAnterior(fecha) {
        const [a, m, d] = fecha.split('-').map(Number);
        const f = new Date(a, m - 1, d - 1);
        return f.getFullYear() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2, '0');
    }
    // Hash de texto (cyrb53): mismo texto → mismo número, para elegir el Pokémon del día.
    function hash(texto) {
        let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
        for (let i = 0; i < texto.length; i++) {
            const c = texto.charCodeAt(i);
            h1 = Math.imul(h1 ^ c, 2654435761);
            h2 = Math.imul(h2 ^ c, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }
    // Azar con semilla (mulberry32): misma semilla → misma secuencia.
    function azarConSemilla(semilla) {
        let a = semilla >>> 0;
        return function () {
            a = (a + 0x6D2B79F5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    // El orden de los retos es una "baraja" de todos tus Pokémon: no se repite ninguno
    // hasta haber pasado por todos (después se vuelve a barajar).
    function pokemonDelDia(fecha) {
        const n = pokemonData.length;
        const [a, m, d] = fecha.split('-').map(Number);
        const dia = Math.floor(Date.UTC(a, m - 1, d) / 86400000);
        const ciclo = Math.floor(dia / n);
        const posicion = ((dia % n) + n) % n;
        const orden = Array.from({ length: n }, (_, i) => i);
        const azar = azarConSemilla(hash('favoritedex-baraja-' + ciclo + '-' + n));
        for (let i = n - 1; i > 0; i--) {
            const j = Math.floor(azar() * (i + 1));
            const tmp = orden[i]; orden[i] = orden[j]; orden[j] = tmp;
        }
        return pokemonData[orden[posicion]];
    }

    /* ---------- almacenamiento ---------- */
    function leer() {
        try {
            const d = JSON.parse(localStorage.getItem(CLAVE) || '{}');
            return (d && typeof d === 'object') ? d : {};
        } catch (_) { return {}; }
    }
    function guardar() {
        try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch (_) { /* almacenamiento lleno o bloqueado */ }
    }
    function cargarEstado() {
        const g = leer();
        const hoy = fechaHoy();
        estado = {
            racha: Number(g.racha) || 0,
            mejorRacha: Number(g.mejorRacha) || 0,
            ultimoResuelto: g.ultimoResuelto || '',
            totalResueltos: Number(g.totalResueltos) || 0,
            totalJugados: Number(g.totalJugados) || 0,
            hoy: (g.hoy && g.hoy.fecha === hoy && Array.isArray(g.hoy.intentos))
                ? g.hoy
                : { fecha: hoy, intentos: [], terminado: false, resuelto: false }
        };
    }
    // La racha mostrada se corta si ayer no se resolvió el reto.
    function rachaVigente() {
        const hoy = fechaHoy();
        if (estado.ultimoResuelto === hoy || estado.ultimoResuelto === diaAnterior(hoy)) return estado.racha;
        return 0;
    }

    /* ---------- pistas ---------- */
    function generacionDe(id) {
        const g = GENERACIONES.find(x => id <= x[0]);
        return g ? g[1] : '¿?';
    }
    function imagenDe(p) {
        const f = Array.isArray(p.formas) ? p.formas[0] : null;
        if (f && f.oficial) return f.oficial;
        return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + p.id + '.png';
    }
    function gritoDe(p) {
        const f = Array.isArray(p.formas) ? p.formas[0] : null;
        if (f && f.grito) return f.grito;
        return 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/' + p.id + '.ogg';
    }
    function descripcionOculta(p) {
        const patron = new RegExp(String(p.nombre).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        return String(p.desc || '').replace(patron, '＿＿＿');
    }
    function tipoLimpio(p) { return String(p.tipo || '').replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim(); }

    // Cada pista se abre con un fallo (la primera está abierta desde el inicio).
    function listaPistas(p) {
        const letras = String(p.nombre).replace(/[^\p{L}]/gu, '').length;
        return [
            { icono: '🗺️', titulo: 'Generación', html: () => esc(generacionDe(p.id)) },
            { icono: '🔥', titulo: 'Tipo', html: () => esc(tipoLimpio(p)) },
            { icono: '🔤', titulo: 'Nombre', html: () => 'Empieza por <strong>' + esc(String(p.nombre).charAt(0).toUpperCase()) + '</strong> y tiene <strong>' + letras + '</strong> letras' },
            { icono: '📖', titulo: 'Descripción', html: () => '«' + esc(descripcionOculta(p)) + '»' },
            { icono: '🌑', titulo: 'Silueta', html: () => '<img class="minijuego-silueta-img reto-silueta" src="' + esc(imagenDe(p)) + '" alt="Silueta del Pokémon del día" decoding="async">' },
            { icono: '🔊', titulo: 'Grito', html: () => '<button type="button" class="minijuego-btn minijuego-btn-escuchar reto-escuchar">🔊 Escuchar grito</button>' }
        ];
    }

    /* ---------- interfaz ---------- */
    function el(id) { return document.getElementById(id); }

    function crearTarjeta() {
        const cont = el(ID_CONTENEDOR);
        if (!cont || el('reto-diario')) return;
        const tarjeta = document.createElement('div');
        tarjeta.id = 'reto-diario';
        tarjeta.className = 'minijuego-pokemon reto-diario';
        tarjeta.setAttribute('aria-label', 'Reto diario: adivina el Pokémon del día');
        tarjeta.innerHTML =
            '<div class="minijuego-cabecera">' +
                '<span class="minijuego-icono">📅</span>' +
                '<div><h3>RETO DIARIO</h3><p>Un Pokémon misterioso al día. Cada fallo abre una pista nueva.</p></div>' +
            '</div>' +
            '<div class="reto-resumen" id="reto-resumen" aria-live="polite"></div>' +
            '<ol class="reto-pistas" id="reto-pistas"></ol>' +
            '<div class="minijuego-controles" id="reto-controles">' +
                '<input type="text" id="reto-respuesta" class="minijuego-input" list="reto-lista" maxlength="40" autocomplete="off" placeholder="Escribe un Pokémon…" aria-label="Tu respuesta del reto diario">' +
                '<button type="button" id="reto-adivinar" class="minijuego-btn minijuego-btn-adivinar">🎯 ADIVINAR</button>' +
            '</div>' +
            '<datalist id="reto-lista"></datalist>' +
            '<div id="reto-resultado" class="minijuego-resultado" aria-live="polite"></div>' +
            '<div class="reto-intentos" id="reto-intentos" aria-label="Intentos usados"></div>' +
            '<div class="minijuego-acciones" id="reto-acciones" hidden>' +
                '<button type="button" id="reto-compartir" class="minijuego-btn minijuego-btn-secundario">📤 Compartir resultado</button>' +
                '<button type="button" id="reto-ver" class="minijuego-btn minijuego-btn-ver">👁️ Ver ficha</button>' +
            '</div>' +
            '<p class="reto-proximo" id="reto-proximo"></p>';
        cont.insertBefore(tarjeta, cont.firstChild);

        const lista = el('reto-lista');
        lista.innerHTML = pokemonData.map(p => '<option value="' + esc(p.nombre) + '"></option>').join('');

        el('reto-adivinar').addEventListener('click', adivinar);
        el('reto-respuesta').addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); adivinar(); } });
        el('reto-compartir').addEventListener('click', compartir);
        el('reto-ver').addEventListener('click', () => {
            if (typeof irAPokemon === 'function') irAPokemon(pokemonData.indexOf(secreto));
        });
        tarjeta.addEventListener('click', ev => {
            const b = ev.target.closest('.reto-escuchar');
            if (!b) return;
            try {
                if (!window.__retoAudio) window.__retoAudio = new Audio();
                window.__retoAudio.src = gritoDe(secreto);
                window.__retoAudio.volume = .8;
                window.__retoAudio.play().catch(() => {});
            } catch (_) { /* sin audio */ }
        });
    }

    function pistasAbiertas() {
        const fallos = estado.hoy.intentos.filter(n => norm(n) !== norm(secreto.nombre)).length;
        return Math.min(listaPistas(secreto).length, 1 + fallos);
    }

    function dibujar() {
        if (!secreto || !el('reto-diario')) return;
        const hoy = estado.hoy;
        const abiertas = hoy.terminado ? listaPistas(secreto).length : pistasAbiertas();

        el('reto-pistas').innerHTML = listaPistas(secreto).map((pista, i) => i < abiertas
            ? '<li class="reto-pista abierta"><span class="reto-pista-icono">' + pista.icono + '</span><div><strong>' + pista.titulo + '</strong><div>' + pista.html() + '</div></div></li>'
            : '<li class="reto-pista cerrada"><span class="reto-pista-icono">🔒</span><div><strong>' + pista.titulo + '</strong><div>Se abre con un fallo</div></div></li>'
        ).join('');

        const r = rachaVigente();
        el('reto-resumen').innerHTML =
            '<span>🔥 Racha: <strong>' + r + '</strong></span>' +
            '<span>🏅 Mejor: <strong>' + Math.max(estado.mejorRacha, r) + '</strong></span>' +
            '<span>✅ Resueltos: <strong>' + estado.totalResueltos + '</strong></span>';

        // cuadritos de intentos
        let cuadros = '';
        for (let i = 0; i < MAX_INTENTOS; i++) {
            const n = hoy.intentos[i];
            if (n === undefined) cuadros += '<span class="reto-cuadro vacio" aria-hidden="true"></span>';
            else if (norm(n) === norm(secreto.nombre)) cuadros += '<span class="reto-cuadro acierto" title="' + esc(n) + '">✔</span>';
            else cuadros += '<span class="reto-cuadro fallo" title="' + esc(n) + '">✖</span>';
        }
        el('reto-intentos').innerHTML = cuadros + '<span class="reto-intentos-texto">' + hoy.intentos.length + '/' + MAX_INTENTOS + '</span>';

        const input = el('reto-respuesta');
        const fin = hoy.terminado;
        input.disabled = fin;
        el('reto-adivinar').disabled = fin;
        el('reto-acciones').hidden = !fin;

        if (fin) {
            const res = el('reto-resultado');
            res.className = 'minijuego-resultado ' + (hoy.resuelto ? 'correcto' : 'incorrecto revelado');
            res.innerHTML = hoy.resuelto
                ? '🎉 <strong>¡CORRECTO!</strong> Era ' + esc(secreto.nombre) + ' (' + hoy.intentos.length + '/' + MAX_INTENTOS + ').'
                : '😵 <strong>Se acabaron los intentos.</strong> El Pokémon del día era <strong>' + esc(secreto.nombre) + '</strong>.';
            iniciarCuentaAtras();
        }
    }

    function iniciarCuentaAtras() {
        const p = el('reto-proximo');
        if (!p) return;
        clearInterval(temporizador);
        const actualizar = () => {
            const ahora = new Date();
            const manana = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate() + 1);
            const seg = Math.max(0, Math.floor((manana - ahora) / 1000));
            const h = String(Math.floor(seg / 3600)).padStart(2, '0');
            const m = String(Math.floor((seg % 3600) / 60)).padStart(2, '0');
            const s = String(seg % 60).padStart(2, '0');
            p.textContent = '⏳ Próximo reto en ' + h + ':' + m + ':' + s;
            if (fechaHoy() !== estado.hoy.fecha) { clearInterval(temporizador); iniciar(true); }
        };
        actualizar();
        temporizador = setInterval(() => { if (!document.hidden) actualizar(); }, 1000);
    }

    function mensaje(html, clase) {
        const r = el('reto-resultado');
        if (r) { r.innerHTML = html; r.className = 'minijuego-resultado ' + (clase || ''); }
    }

    function adivinar() {
        if (!secreto || estado.hoy.terminado) return;
        const input = el('reto-respuesta');
        const texto = input.value.trim();
        if (!texto) { mensaje('✏️ Escribe el nombre de un Pokémon primero.', 'aviso'); input.focus(); return; }

        const candidato = pokemonData.find(p => norm(p.nombre) === norm(texto));
        if (!candidato) { mensaje('🤔 «' + esc(texto) + '» no está en tu Pokédex. Elige uno de la lista (no gasta intento).', 'aviso'); input.focus(); return; }
        if (estado.hoy.intentos.some(n => norm(n) === norm(candidato.nombre))) {
            mensaje('↩️ Ya probaste con ' + esc(candidato.nombre) + '. Prueba con otro.', 'aviso'); input.focus(); return;
        }

        estado.hoy.intentos.push(candidato.nombre);
        input.value = '';
        const acierto = candidato.id === secreto.id;

        if (acierto || estado.hoy.intentos.length >= MAX_INTENTOS) {
            estado.hoy.terminado = true;
            estado.hoy.resuelto = acierto;
            estado.totalJugados += 1;
            if (acierto) {
                const hoy = fechaHoy();
                estado.racha = (estado.ultimoResuelto === diaAnterior(hoy)) ? estado.racha + 1 : 1;
                estado.ultimoResuelto = hoy;
                estado.mejorRacha = Math.max(estado.mejorRacha, estado.racha);
                estado.totalResueltos += 1;
            } else {
                estado.racha = 0;
            }
            try { if (typeof window.registrarResultadoMinijuego === 'function') window.registrarResultadoMinijuego('reto-diario', acierto); } catch (_) { /* logros opcionales */ }
        } else {
            mensaje('❌ No es ' + esc(candidato.nombre) + '. ¡Se abrió una pista nueva!', 'incorrecto');
        }
        guardar();
        dibujar();
        if (!estado.hoy.terminado) input.focus();
    }

    function textoCompartir() {
        const h = estado.hoy;
        const fila = h.intentos.map(n => norm(n) === norm(secreto.nombre) ? '🟩' : '🟥').join('');
        const marcador = h.resuelto ? h.intentos.length + '/' + MAX_INTENTOS : 'X/' + MAX_INTENTOS;
        return 'FavoriteDex · Reto diario ' + h.fecha + '\n' + fila + ' ' + marcador + '\n🔥 Racha: ' + rachaVigente();
    }
    function compartir() {
        const texto = textoCompartir();
        const ok = () => mensaje('📋 Resultado copiado. ¡Pégalo donde quieras!', 'correcto');
        const respaldo = () => {
            const ta = document.createElement('textarea');
            ta.value = texto; ta.style.position = 'fixed'; ta.style.opacity = '0';
            document.body.appendChild(ta); ta.select();
            try { document.execCommand('copy'); ok(); } catch (_) { mensaje('No se pudo copiar automáticamente:<br><pre>' + esc(texto) + '</pre>', 'aviso'); }
            ta.remove();
        };
        if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
            navigator.share({ text: texto }).catch(() => {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(ok).catch(respaldo);
        } else { respaldo(); }
    }

    function iniciar(redibujar) {
        if (typeof pokemonData === 'undefined' || !pokemonData.length) return;
        cargarEstado();
        secreto = pokemonDelDia(estado.hoy.fecha);
        crearTarjeta();
        if (redibujar) mensaje('', '');
        dibujar();
    }

    // Para probar/depurar desde la consola del navegador.
    window.retoDiario = { iniciar: () => iniciar(true), secretoDeHoy: () => (secreto ? secreto.nombre : null), delDia: fecha => pokemonDelDia(fecha).nombre };

    document.addEventListener('DOMContentLoaded', () => { setTimeout(() => iniciar(false), 0); });
})();
