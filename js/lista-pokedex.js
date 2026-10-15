/* =========================================================
   📜 LISTA DE POKÉMON (nuevo look)
   - Tarjetas en arco: la que queda en el centro es la "seleccionada".
   - Al detenerte en una: imagen, datos, fondo (legendario / partículas
     de tipo) y su grito aparecen en el panel de la izquierda.
   - Clic en una tarjeta (o botón "abrir") → su ficha completa.
   Reutiliza funciones de app-core.js (irAPokemon, obtenerClaseFondo-
   Cinematico, renderParticulasTipo, etc.).
   ========================================================= */
(function () {
    'use strict';

    const raiz = document.getElementById('pokedex-lista');
    if (!raiz || typeof pokemonData === 'undefined') return;

    const $ = id => document.getElementById(id);
    const lista = $('dl-lista');
    const fondo = $('dl-fondo');
    const reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Singulares (míticos). Cualquier otro Pokémon con escenario propio cuenta como legendario.
    const SINGULARES = new Set([151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649,
        719, 720, 721, 801, 802, 807, 808, 809, 893, 1025]);
    const GENS = [151, 251, 386, 493, 649, 721, 809, 905, 1025];
    const ROMANOS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    const esSingular = p => SINGULARES.has(p.id);
    const esLegendario = p => !esSingular(p) && (p.id === ID_ARCEUS_FONDO || Boolean(FONDOS_POR_ID[p.id]));
    const tieneFondoPropio = p => p.id === ID_ARCEUS_FONDO || Boolean(FONDOS_POR_ID[p.id]);
    const generacion = id => { const i = GENS.findIndex(m => id <= m); return i < 0 ? 9 : i + 1; };
    const num = id => String(id).padStart(4, '0');
    const esc = t => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // ---------- estado ----------
    let vista = [];            // índices de pokemonData que se muestran
    let filtro = 'todos';
    let orden = 0;             // 0 pokédex · 1 A-Z · 2 inverso
    const ORDENES = ['pokédex', 'A–Z', 'inverso'];
    let texto = '';
    let pos = 0;               // posición fraccionaria (scrollTop / paso)
    let sel = -1;              // posición (en vista) seleccionada
    let paso = 100;
    let nodos = [];            // tarjetas (misma longitud que vista)
    let rango = [0, -1];
    let rafPendiente = false;
    let tDetalle = null, tFondo = null, tGrito = null;
    let capaFondo = 0;
    let programando = false;   // true mientras se hace scroll programático
    let ultimoClave = '';

    const audio = new Audio();
    audio.preload = 'none';

    function guardado() { try { return Number(sessionStorage.getItem('dl_ultimo')) || 0; } catch (_) { return 0; } }
    function guardar(idx) { try { sessionStorage.setItem('dl_ultimo', String(idx)); } catch (_) {} }

    function favoritos() { try { return new Set(obtenerFavoritos()); } catch (_) { return new Set(); } }

    // ---------- datos de cada Pokémon ----------
    function colorTipo(p) {
        const k = obtenerTipoPrincipal(p.tipo);
        return (TIPO_INFO[k] && TIPO_INFO[k].color) || '#6c8cff';
    }
    function iconoTipo(p) {
        const k = obtenerTipoPrincipal(p.tipo);
        return k ? `${BASE_ICONOS_TIPO}${TIPO_INFO[k].icono}.svg` : '';
    }
    function nombreTipo(p) {
        const k = obtenerTipoPrincipal(p.tipo);
        return k ? TIPO_INFO[k].nombre : 'Especial';
    }
    function etiquetaEspecial(p) {
        if (esSingular(p)) return 'SINGULAR';
        if (esLegendario(p)) return 'LEGENDARIO';
        return '';
    }
    function textoTipo(p) { return String(p.tipo || '').replace(/\([^)]*\)/g, '').trim(); }

    // ---------- construcción de la lista ----------
    function calcularVista() {
        const favs = favoritos();
        const q = normalizarTexto(texto);
        let v = [];
        pokemonData.forEach((p, i) => {
            if (filtro === 'legendarios' && !esLegendario(p)) return;
            if (filtro === 'singulares' && !esSingular(p)) return;
            if (filtro === 'formas' && !(p.formas && p.formas.length > 1)) return;
            if (filtro === 'favoritos' && !favs.has(p.id)) return;
            if (q) {
                const hay = normalizarTexto(`${p.nombre} ${p.id} ${num(p.id)} ${p.tipo}`);
                if (!hay.includes(q)) return;
            }
            v.push(i);
        });
        if (orden === 1) v.sort((a, b) => pokemonData[a].nombre.localeCompare(pokemonData[b].nombre, 'es'));
        else if (orden === 2) v.reverse();
        return v;
    }

    function htmlTarjeta(i, k) {
        const p = pokemonData[i];
        const forma = p.formas[0];
        const sprite = forma.png || obtenerImagenUrl(forma, 'oficial', p.id);
        const esp = etiquetaEspecial(p);
        const icono = iconoTipo(p);
        return `<button type="button" class="dl-card nl-btn${p.nombre.length > 15 ? ' dl-muy-largo' : p.nombre.length > 11 ? ' dl-largo' : ''}" role="option" data-k="${k}" data-i="${i}" style="--c:${colorTipo(p)}" aria-label="${esc(p.nombre)}, número ${p.id}">
            <span class="dl-badge">
                ${icono ? `<img class="dl-badge-ico icono-tipo" src="${icono}" alt="" loading="lazy" decoding="async">` : ''}
                <em>${esc(nombreTipo(p))}</em>
                <b>#${p.id}</b>
            </span>
            <span class="dl-card-txt">
                <strong>${esc(p.nombre)}</strong>
                <small>${esc(textoTipo(p))}</small>
                <span class="dl-card-meta"><i>gen ${ROMANOS[generacion(p.id) - 1]}</i>${p.formas.length > 1 ? `<i>${p.formas.length} formas</i>` : ''}${esp ? `<i class="dl-esp">${esp}</i>` : ''}<span class="dl-card-fav" data-fav="${p.id}"></span></span>
            </span>
            <span class="dl-card-art"><img src="${sprite}" alt="" loading="lazy" decoding="async"></span>
        </button>`;
    }

    function construir(mantenerIdx) {
        vista = calcularVista();
        $('dl-vacio').hidden = vista.length > 0;
        $('dl-contador').textContent = vista.length === pokemonData.length ? '' : `${vista.length}`;
        lista.innerHTML = vista.map((i, k) => htmlTarjeta(i, k)).join('');
        nodos = Array.from(lista.children);
        marcarFavoritosEnTarjetas();
        medir();
        rango = [0, -1];
        let k = 0;
        if (mantenerIdx != null) { const f = vista.indexOf(mantenerIdx); k = f >= 0 ? f : 0; }
        sel = -1;
        irA(k, false);
        actualizarPosicion();
    }

    function marcarFavoritosEnTarjetas() {
        const favs = favoritos();
        lista.querySelectorAll('.dl-card-fav').forEach(el => {
            el.textContent = favs.has(Number(el.dataset.fav)) ? '♥' : '';
        });
    }

    function medir() {
        const c = nodos[0];
        if (!c) return;
        const cs = getComputedStyle(lista);
        const gap = parseFloat(cs.getPropertyValue('--dl-gap')) || 8;
        paso = c.offsetHeight + gap;
        const alto = lista.clientHeight;
        const pad = Math.max(0, (alto - c.offsetHeight) / 2);
        lista.style.paddingTop = pad + 'px';
        lista.style.paddingBottom = pad + 'px';
        lista.style.setProperty('--dl-paso', paso + 'px');
    }

    // ---------- efecto de arco ----------
    function xDe(d) { // d = distancia (>=0) en tarjetas
        const a = Math.min(d, 8);
        return 15 * a + 3.2 * a * a;
    }

    function actualizarPosicion() {
        rafPendiente = false;
        if (!nodos.length) return;
        pos = lista.scrollTop / paso;
        const desde = Math.max(0, Math.floor(pos) - 9);
        const hasta = Math.min(nodos.length - 1, Math.ceil(pos) + 9);

        // limpia lo que salió del rango
        for (let k = rango[0]; k <= rango[1]; k++) {
            if ((k < desde || k > hasta) && nodos[k]) { nodos[k].style.transform = ''; nodos[k].style.opacity = ''; }
        }
        rango = [desde, hasta];

        for (let k = desde; k <= hasta; k++) {
            const d = Math.abs(k - pos);
            const x = xDe(d);
            const sc = 1 - Math.min(d, 4) * 0.012;
            const op = Math.max(0.28, 1 - d * 0.085);
            const n = nodos[k];
            n.style.transform = `translate3d(${x.toFixed(1)}px,0,0) scale(${sc.toFixed(3)})`;
            n.style.opacity = op.toFixed(2);
        }

        const nuevo = Math.max(0, Math.min(nodos.length - 1, Math.round(pos)));
        if (nuevo !== sel) seleccionar(nuevo);

        // el grito suena cuando el scroll se detiene
        clearTimeout(tGrito);
        tGrito = setTimeout(sonarGrito, 360);
    }

    function pedirFrame() {
        if (rafPendiente) return;
        rafPendiente = true;
        requestAnimationFrame(actualizarPosicion);
    }

    function irA(k, suave) {
        if (!nodos.length) return;
        k = Math.max(0, Math.min(nodos.length - 1, k));
        lista.scrollTo({ top: k * paso, behavior: suave && !reducir ? 'smooth' : 'auto' });
        if (!suave) { pedirFrame(); }
    }

    // ---------- selección / detalle ----------
    function seleccionar(k) {
        if (sel >= 0 && nodos[sel]) { nodos[sel].classList.remove('sel'); nodos[sel].setAttribute('aria-selected', 'false'); }
        sel = k;
        const n = nodos[k];
        if (!n) return;
        n.classList.add('sel');
        n.setAttribute('aria-selected', 'true');
        const idx = vista[k];
        guardar(idx);
        clearTimeout(tDetalle);
        tDetalle = setTimeout(() => pintarDetalle(idx), 40);
        clearTimeout(tFondo);
        tFondo = setTimeout(() => pintarFondo(idx), 170);
    }

    // El nombre siempre en una línea: se reduce solo lo necesario si es largo.
    function ajustarNombre() {
        const el = $('dl-nombre');
        if (!el) return;
        el.style.fontSize = '';
        const caja = el.parentElement;
        let tam = parseFloat(getComputedStyle(el).fontSize);
        let n = 0;
        while (el.scrollWidth > caja.clientWidth + 1 && tam > 22 && n++ < 60) {
            tam -= 2;
            el.style.fontSize = tam + 'px';
        }
    }

    function pintarDetalle(idx) {
        const p = pokemonData[idx];
        if (!p) return;
        const forma = p.formas[0];
        const col = colorTipo(p);
        const det = $('dl-detalle');
        det.style.setProperty('--c', col);
        raiz.style.setProperty('--c', col);

        $('dl-nombre').textContent = p.nombre;
        ajustarNombre();
        $('dl-sub').textContent = `#${num(p.id)} · Generación ${ROMANOS[generacion(p.id) - 1]}`;
        try { $('dl-tipos').innerHTML = renderTipos(p.tipo); } catch (_) { $('dl-tipos').textContent = p.tipo; }

        const esp = etiquetaEspecial(p);
        const favs = favoritos();
        $('dl-chips').innerHTML =
            (esp ? `<span class="dl-chip-i dl-chip-esp">★ ${esp}</span>` : '') +
            `<span class="dl-chip-i">◈ ${p.formas.length} ${p.formas.length === 1 ? 'forma' : 'formas'}</span>` +
            `<span class="dl-chip-i">${tieneFondoPropio(p) ? '🌌 escenario propio' : '✨ partículas de ' + esc(nombreTipo(p).toLowerCase())}</span>`;
        $('dl-desc').textContent = p.desc || '';
        $('dl-fav').textContent = p.fav || 'Este Pokémon forma parte de mi colección de favoritos. ⭐';
        const bf = $('dl-btn-fav');
        const es = favs.has(p.id);
        bf.textContent = es ? '♥ favorito' : '☆ favorito';
        bf.classList.toggle('activo', es);

        // imagen: se reinicia la animación de entrada
        const img = $('dl-img');
        const url = obtenerImagenUrl(forma, 'oficial', p.id);
        img.classList.remove('entra');
        img.dataset.fallbackIntento = '0';
        img.classList.remove('img-sin-imagen');
        img.alt = p.nombre;
        img.src = url;
        void img.offsetWidth;
        if (!reducir) img.classList.add('entra');
    }

    function pintarFondo(idx) {
        const p = pokemonData[idx];
        if (!p) return;
        const clave = String(p.id);
        if (clave === ultimoClave && fondo.firstElementChild) return;
        ultimoClave = clave;

        const forma = p.formas[0];
        let html = '';
        if (p.id === ID_ARCEUS_FONDO) {
            html = '<div class="fondo-legendario fondo-arceus"></div>';
        } else if (FONDOS_POR_ID[p.id]) {
            html = `<div class="fondo-legendario-dinamico ${obtenerClaseFondoCinematico(p, forma)}"></div>`;
        } else {
            html = renderParticulasTipo(p);
        }
        const capa = document.createElement('div');
        capa.className = 'dl-capa' + (tieneFondoPropio(p) ? ' dl-capa-legend' : ' dl-capa-tipo');
        capa.style.setProperty('--c', colorTipo(p));
        capa.innerHTML = html;
        fondo.appendChild(capa);
        requestAnimationFrame(() => requestAnimationFrame(() => capa.classList.add('visible')));

        // la capa anterior se desvanece y se elimina (así sus partículas se detienen)
        const previas = Array.from(fondo.children).filter(c => c !== capa);
        previas.forEach(c => c.classList.remove('visible'));
        setTimeout(() => previas.forEach(c => c.remove()), 700);
    }

    function urlGrito(p) {
        const forma = p.formas[0];
        if (forma.grito) return forma.grito;
        let id = p.id;
        try { id = obtenerIdFormaActual(forma) || p.id; } catch (_) {}
        return `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;
    }

    let ultimoGrito = -1;
    function sonarGrito(forzar) {
        if (!document.body.classList.contains('en-lista') || sel < 0) return;
        const idx = vista[sel];
        const p = pokemonData[idx];
        if (!p) return;
        if (forzar !== true && idx === ultimoGrito) return;   // no repetir al quedarse quieto
        ultimoGrito = idx;
        try {
            audio.pause();
            audio.src = urlGrito(p);
            audio.volume = 0.5;
            const r = audio.play();
            if (r && r.catch) r.catch(() => {});
        } catch (_) {}
    }

    // ---------- abrir ficha ----------
    function abrirFicha(idx) {
        if (idx == null || idx < 0) return;
        try { audio.pause(); } catch (_) {}
        guardar(idx);
        window.__vinoDeLista = true;
        document.body.classList.remove('en-lista');
        irAPokemon(idx);
    }

    // ---------- apertura / cierre de la pantalla ----------
    function abrirLista(idxPreferido) {
        window.__vinoDeLista = false;
        document.body.classList.remove('en-inicio', 'en-pokedex', 'en-comunidad', 'en-centro');
        document.body.classList.add('en-lista');
        window.scrollTo(0, 0);
        const quiero = idxPreferido != null ? idxPreferido : guardado();
        ultimoClave = '';
        ultimoGrito = -1;
        // si hay un filtro que oculta el Pokémon, se limpia
        if (!calcularVista().includes(quiero) && (filtro !== 'todos' || texto)) {
            filtro = 'todos'; texto = ''; $('dl-buscar').value = '';
            document.querySelectorAll('#dl-filtros .dl-chip[data-f]').forEach(b => b.classList.toggle('activo', b.dataset.f === 'todos'));
        }
        requestAnimationFrame(() => {
            construir(quiero);
            // primer sonido tras la apertura
            clearTimeout(tGrito);
            tGrito = setTimeout(() => sonarGrito(true), 450);
        });
    }

    window.abrirPokedex = function () { abrirLista(); };
    window.abrirLista = abrirLista;

    window.volverALista = function () {
        let idx = null;
        try { idx = indiceSlide; } catch (_) {}
        try { if (typeof reproductorAudio !== 'undefined') reproductorAudio.pause(); } catch (_) {}
        abrirLista(idx);
    };

    const volverInicioOrig = window.volverInicio;
    window.volverInicio = function () {
        document.body.classList.remove('en-lista');
        try { audio.pause(); } catch (_) {}
        if (typeof volverInicioOrig === 'function') volverInicioOrig.apply(this, arguments);
    };

    // ESC: ficha → lista → inicio
    const salirOrig = window.salirDelApartadoActual;
    window.salirDelApartadoActual = function () {
        const b = document.body.classList;
        const modal = document.querySelector('.modal-sitio[aria-hidden="false"]');
        if (!modal) {
            const galeria = document.getElementById('seccion-dibujos');
            const galeriaAbierta = galeria && !galeria.hidden;
            if (b.contains('en-lista')) { window.volverInicio(); return; }
            if (b.contains('en-pokedex') && window.__vinoDeLista && !galeriaAbierta) { window.volverALista(); return; }
        }
        if (typeof salirOrig === 'function') salirOrig.apply(this, arguments);
    };

    // ---------- eventos ----------
    lista.addEventListener('scroll', pedirFrame, { passive: true });

    lista.addEventListener('click', ev => {
        const c = ev.target.closest('.dl-card');
        if (!c) return;
        abrirFicha(Number(c.dataset.i));
    });

    $('dl-abrir').addEventListener('click', () => { if (sel >= 0) abrirFicha(vista[sel]); });
    $('dl-btn-ficha').addEventListener('click', () => { if (sel >= 0) abrirFicha(vista[sel]); });
    $('dl-btn-grito').addEventListener('click', () => sonarGrito(true));
    $('dl-img').addEventListener('click', () => sonarGrito(true));
    $('dl-btn-fav').addEventListener('click', () => {
        if (sel < 0) return;
        const p = pokemonData[vista[sel]];
        try { alternarFavorito(p.id); } catch (_) {}
        marcarFavoritosEnTarjetas();
        pintarDetalle(vista[sel]);
        if (filtro === 'favoritos') construir(vista[sel]);
    });
    $('dl-aleatorio').addEventListener('click', () => {
        if (!nodos.length) return;
        irA(Math.floor(Math.random() * nodos.length), true);
    });

    $('dl-filtros').addEventListener('click', ev => {
        const b = ev.target.closest('.dl-chip');
        if (!b) return;
        if (b.id === 'dl-orden') {
            orden = (orden + 1) % ORDENES.length;
            b.textContent = 'orden: ' + ORDENES[orden];
        } else if (b.dataset.f) {
            filtro = b.dataset.f;
            document.querySelectorAll('#dl-filtros .dl-chip[data-f]').forEach(x => x.classList.toggle('activo', x === b));
        }
        ultimoClave = '';
        construir(sel >= 0 ? vista[sel] : null);
    });

    let tBuscar = null;
    $('dl-buscar').addEventListener('input', ev => {
        clearTimeout(tBuscar);
        tBuscar = setTimeout(() => { texto = ev.target.value; construir(null); }, 160);
    });

    // teclado: ↑ ↓ (y ← →) mueven la selección; Enter abre; Re Pág / Av Pág saltan
    document.addEventListener('keydown', ev => {
        if (!document.body.classList.contains('en-lista')) return;
        if (document.querySelector('.modal-sitio[aria-hidden="false"]')) return;
        const a = document.activeElement;
        const enTexto = a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.tagName === 'SELECT');
        if (enTexto) {
            if (ev.key === 'Enter' && a.id === 'dl-buscar') { ev.preventDefault(); a.blur(); if (sel >= 0) abrirFicha(vista[sel]); }
            return;
        }
        const mover = d => { ev.preventDefault(); irA(Math.max(0, Math.min(nodos.length - 1, (sel < 0 ? 0 : sel) + d)), true); };
        switch (ev.key) {
            case 'ArrowDown': case 'ArrowRight': mover(1); break;
            case 'ArrowUp': case 'ArrowLeft': mover(-1); break;
            case 'PageDown': mover(8); break;
            case 'PageUp': mover(-8); break;
            case 'Home': ev.preventDefault(); irA(0, true); break;
            case 'End': ev.preventDefault(); irA(nodos.length - 1, true); break;
            case 'Enter':
                if (a && a.closest && a.closest('.dl-pie, .dl-filtros')) return;
                ev.preventDefault(); if (sel >= 0) abrirFicha(vista[sel]); break;
            case ' ': if (!(a && a.tagName === 'BUTTON')) { ev.preventDefault(); sonarGrito(true); } break;
        }
    }, true);

    // la rueda del ratón sobre el panel izquierdo también mueve la lista
    $('dl-detalle').addEventListener('wheel', ev => {
        ev.preventDefault();
        lista.scrollBy({ top: ev.deltaY, behavior: 'auto' });
    }, { passive: false });

    window.addEventListener('resize', () => {
        if (!document.body.classList.contains('en-lista') || !nodos.length) return;
        const k = Math.max(0, sel);
        ajustarNombre();
        medir();
        irA(k, false);
    });

    // al volver a la pestaña se detiene el audio si se está viendo otra cosa
    document.addEventListener('visibilitychange', () => { if (document.hidden) { try { audio.pause(); } catch (_) {} } });
})();
