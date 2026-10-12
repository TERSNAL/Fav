/* =========================================================
   ✨ CONTADOR DE CAZA SHINY
   Un contador personal de encuentros por Pokémon, para llevar la cuenta
   de tu cacería shiny (como el contador de combos del juego, pero para
   la vida real). Se agrega a cada ficha y hay un resumen en el Centro
   de Entrenamiento con tus totales y tu Pokémon con más encuentros.
   Todo vive en este navegador (entra en el Respaldo de progreso).
   ========================================================= */
(function () {
    'use strict';

    const CLAVE = 'favoritedex_caza_shiny';
    const ID_RESUMEN_CONTENEDOR = 'contenido-minijuegos-equipo';

    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const el = id => document.getElementById(id);
    const hoyISO = () => new Date().toISOString().slice(0, 10);

    function leer() {
        try {
            const d = JSON.parse(localStorage.getItem(CLAVE) || '{}');
            return (d && typeof d === 'object') ? d : {};
        } catch (_) { return {}; }
    }
    function guardar(datos) {
        try { localStorage.setItem(CLAVE, JSON.stringify(datos)); } catch (_) { /* almacenamiento lleno o bloqueado */ }
    }
    function registroDe(datos, id) {
        return Object.assign({ encuentros: 0, conseguido: false, fecha: '' }, datos[id] || {});
    }

    function avisar() {
        document.dispatchEvent(new CustomEvent('caza-shiny-actualizada'));
        actualizarResumen();
    }

    /* ---------- widget por ficha ---------- */
    function spriteShinyDe(pkmn, forma) {
        const f = forma || (Array.isArray(pkmn.formas) ? pkmn.formas[0] : null);
        if (!f) return '';
        return f.oficialShiny || f.pngShiny || f.oficial || f.png || '';
    }

    function dibujarWidget(slide, pkmn) {
        const cont = slide.querySelector('.caza-shiny-cuerpo');
        if (!cont) return;
        const datos = leer();
        const r = registroDe(datos, pkmn.id);
        const forma = (typeof obtenerFormaVisible === 'function') ? obtenerFormaVisible(pokemonData.indexOf(pkmn)) : pkmn.formas[0];
        cont.innerHTML = `
            <img class="caza-shiny-sprite" src="${esc(spriteShinyDe(pkmn, forma))}" alt="${esc(pkmn.nombre)} shiny" loading="lazy" decoding="async">
            <div class="caza-shiny-controles">
                <div class="caza-shiny-contador">
                    <button type="button" class="caza-shiny-btn" data-accion="restar" aria-label="Quitar un encuentro">−</button>
                    <span class="caza-shiny-numero">${r.encuentros}</span>
                    <button type="button" class="caza-shiny-btn" data-accion="sumar" aria-label="Sumar un encuentro">+</button>
                </div>
                <p class="caza-shiny-etiqueta">encuentro${r.encuentros === 1 ? '' : 's'} sin suerte</p>
                <button type="button" class="caza-shiny-conseguido ${r.conseguido ? 'activo' : ''}" data-accion="conseguido">
                    ${r.conseguido ? '🌟 ¡Conseguido!' : '☆ Marcar como conseguido'}
                </button>
                ${r.conseguido && r.fecha ? '<p class="caza-shiny-fecha">Conseguido el ' + esc(r.fecha) + '</p>' : ''}
                ${(r.encuentros > 0 || r.conseguido) ? '<button type="button" class="caza-shiny-reset" data-accion="reset">🗑️ Reiniciar</button>' : ''}
            </div>`;
    }

    function accion(pkmn, tipo) {
        const datos = leer();
        const r = registroDe(datos, pkmn.id);
        if (tipo === 'sumar') { r.encuentros += 1; }
        else if (tipo === 'restar') { r.encuentros = Math.max(0, r.encuentros - 1); }
        else if (tipo === 'conseguido') {
            r.conseguido = !r.conseguido;
            r.fecha = r.conseguido ? hoyISO() : '';
        } else if (tipo === 'reset') {
            if (!confirm('¿Reiniciar el contador de ' + pkmn.nombre + '? Se perderán sus encuentros registrados.')) return;
            datos[pkmn.id] = { encuentros: 0, conseguido: false, fecha: '' };
            guardar(datos); avisar(); return;
        }
        datos[pkmn.id] = r;
        guardar(datos);
        avisar();
    }

    function agregarSeccion(slide, pkmn) {
        if (!slide || slide.querySelector('.seccion-caza-shiny')) return;
        const seccion = document.createElement('section');
        seccion.className = 'seccion-caza-shiny';
        seccion.innerHTML = '<h3>✨ Caza Shiny</h3><div class="caza-shiny-cuerpo"></div>';
        const extra = slide.querySelector('.seccion-datos-extra');
        const primera = slide.querySelector(':scope > section');
        if (extra) extra.after(seccion); else if (primera) primera.after(seccion); else slide.appendChild(seccion);

        seccion.addEventListener('click', ev => {
            const b = ev.target.closest('[data-accion]');
            if (!b) return;
            accion(pkmn, b.dataset.accion);
            dibujarWidget(slide, pkmn);
        });
        dibujarWidget(slide, pkmn);
    }

    /* ---------- resumen en el Centro de Entrenamiento ---------- */
    function crearResumen() {
        const cont = el(ID_RESUMEN_CONTENEDOR);
        if (!cont || el('caza-shiny-resumen')) return;
        const tarjeta = document.createElement('div');
        tarjeta.id = 'caza-shiny-resumen';
        tarjeta.className = 'minijuego-pokemon caza-shiny-resumen';
        tarjeta.innerHTML =
            '<div class="minijuego-cabecera">' +
                '<span class="minijuego-icono">✨</span>' +
                '<div><h3>CAZA SHINY</h3><p>Tu resumen de caza. Suma encuentros y marca conseguidos desde la ficha de cada Pokémon.</p></div>' +
            '</div>' +
            '<div class="caza-shiny-resumen-cuerpo" id="caza-shiny-resumen-cuerpo"></div>';
        const combate = el('combate-1v1');
        if (combate) combate.after(tarjeta); else cont.appendChild(tarjeta);
        actualizarResumen();
    }

    function actualizarResumen() {
        const cuerpo = el('caza-shiny-resumen-cuerpo');
        if (!cuerpo) return;
        const datos = leer();
        const entradas = Object.entries(datos);
        const conseguidos = entradas.filter(([, r]) => r.conseguido).length;
        const totalEncuentros = entradas.reduce((a, [, r]) => a + (r.encuentros || 0), 0);
        let racha = null;
        entradas.forEach(([id, r]) => { if (r.encuentros > 0 && (!racha || r.encuentros > racha.encuentros)) racha = { id: Number(id), encuentros: r.encuentros }; });
        const pRacha = racha && Array.isArray(pokemonData) ? pokemonData.find(p => p.id === racha.id) : null;

        cuerpo.innerHTML =
            '<div class="caza-shiny-resumen-datos">' +
                '<span>🌟 Conseguidos: <strong>' + conseguidos + '</strong></span>' +
                '<span>🔁 Encuentros totales: <strong>' + totalEncuentros + '</strong></span>' +
                (pRacha ? '<span>😤 El más buscado: <strong>' + esc(pRacha.nombre) + '</strong> (' + racha.encuentros + ')</span>' : '') +
            '</div>' +
            (conseguidos === 0 && totalEncuentros === 0 ? '<p class="caza-shiny-vacio">Todavía no has registrado ningún encuentro. Ve a la ficha de un Pokémon y suma tu primero en «✨ Caza Shiny».</p>' : '');
    }

    function iniciar() {
        if (typeof pokemonData === 'undefined' || !pokemonData.length) return;
        crearResumen();
        const contSlides = document.getElementById('contenedor-slides');
        if (contSlides) {
            // Las fichas ya construidas antes de que este script terminara de cargar
            // (normalmente la primera) no disparan el evento para nosotros: se agregan a mano.
            [...contSlides.children].forEach((slide, idx) => { if (slide.dataset.listo) agregarSeccion(slide, pokemonData[idx]); });
            contSlides.addEventListener('slide-hidratado', e => agregarSeccion(e.detail.slide, pokemonData[e.detail.idx]));
        }
        // Si el sprite se cambia a otra forma después de construida la ficha, refresca el sprite shiny mostrado.
        document.addEventListener('forma-actualizada', e => {
            const { index, pkmn } = e.detail || {};
            const slide = document.querySelectorAll('#contenedor-slides > .slide')[index];
            if (slide && pkmn) dibujarWidget(slide, pkmn);
        });
    }
    document.addEventListener('DOMContentLoaded', () => { setTimeout(iniciar, 0); });
})();
