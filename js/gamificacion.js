/* =========================================================
   🏆 GAMIFICACIÓN — Progreso de la Pokédex + Logros/Insignias
   No modifica ninguna función existente: solo añade y lee
   datos que ya existen en localStorage.
   ========================================================= */
(function () {
    'use strict';

    const esc = t => String(t ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(d)); } catch { return d; } };
    const guardar = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (_) {} };
    const hayDatos = () => typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length > 0;

    function usuarioActivo() {
        return (localStorage.getItem('pokedex_usuario_actual') || '').trim() || 'visitante';
    }

    /* ---------------------------------------------------------
       📖 REGISTRO DE POKÉMON VISTOS (progreso de la Pokédex)
       Se detecta por sondeo del slide visible: cubre cualquier
       forma de navegación (flechas, explorador, tipos, favoritos).
       --------------------------------------------------------- */
    function claveVistos() { return 'pokedex_vistos_' + usuarioActivo(); }
    function obtenerVistos() {
        const v = leer(claveVistos(), []);
        return Array.isArray(v) ? v.map(Number) : [];
    }
    function marcarVisto(id) {
        const vistos = new Set(obtenerVistos());
        if (vistos.has(Number(id))) return;
        vistos.add(Number(id));
        guardar(claveVistos(), [...vistos]);
        actualizarProgresoUI();
        revisarLogros();
    }

    function detectarSlideActual() {
        if (!hayDatos()) return;
        const cont = document.getElementById('contenedor-slides');
        if (!cont) return;
        const hijos = [...cont.children];
        const idx = hijos.findIndex(s => s.style.display && s.style.display !== 'none');
        if (idx >= 0 && pokemonData[idx]) marcarVisto(pokemonData[idx].id);
    }
    setInterval(detectarSlideActual, 1500);

    /* ---------------------------------------------------------
       🎮 CONTADORES DE MINIJUEGOS (envuelve la función existente
       sin quitarle nada de lo que ya hace).
       --------------------------------------------------------- */
    function claveMinijuegos() { return 'pokedex_minijuegos_totales_' + usuarioActivo(); }
    function obtenerTotalesMinijuegos() {
        return Object.assign({ aciertos: 0, rondas: 0, mejorRacha: 0 }, leer(claveMinijuegos(), {}));
    }
    const _origRegistrar = window.registrarResultadoMinijuego;
    window.registrarResultadoMinijuego = function (juego, acierto) {
        if (typeof _origRegistrar === 'function') _origRegistrar(juego, acierto);
        const t = obtenerTotalesMinijuegos();
        t.rondas += 1;
        if (acierto) {
            t.aciertos += 1;
            t._racha = (t._racha || 0) + 1;
            if (t._racha > t.mejorRacha) t.mejorRacha = t._racha;
        } else {
            t._racha = 0;
        }
        guardar(claveMinijuegos(), t);
        revisarLogros();
    };

    /* ---------------------------------------------------------
       🎨 CONTADOR DE DIBUJOS (envuelve agregarDibujo)
       --------------------------------------------------------- */
    const _origAgregarDibujo = window.agregarDibujo;
    if (typeof _origAgregarDibujo === 'function') {
        window.agregarDibujo = async function () {
            const antes = (await safeDibujos()).length;
            await _origAgregarDibujo.apply(this, arguments);
            const despues = (await safeDibujos()).length;
            if (despues > antes) revisarLogros();
        };
    }
    async function safeDibujos() {
        try {
            if (typeof obtenerDibujosDeBD === 'function') return await obtenerDibujosDeBD();
        } catch (_) {}
        return [];
    }

    /* ---------------------------------------------------------
       🏟️ EQUIPO DE GIMNASIO (lee la misma clave que usa el
       módulo de equipo, sin depender de sus funciones internas).
       --------------------------------------------------------- */
    function equipoCompleto() {
        const bruto = leer('pokedex_equipo_gimnasio', []);
        if (!Array.isArray(bruto)) return false;
        return bruto.filter(x => Number.isFinite(Number(x))).length >= 4;
    }

    /* ---------------------------------------------------------
       🏅 LOGROS
       --------------------------------------------------------- */
    const LOGROS = [
        { id: 'primer_vistazo', nombre: 'Primeros pasos', icono: '👣', desc: 'Mira tu primer Pokémon.', check: () => obtenerVistos().length >= 1 },
        { id: 'explorador', nombre: 'Explorador', icono: '🧭', desc: 'Mira 25 Pokémon distintos.', check: () => obtenerVistos().length >= 25 },
        { id: 'explorador_experto', nombre: 'Explorador experto', icono: '🗺️', desc: 'Mira 100 Pokémon distintos.', check: () => obtenerVistos().length >= 100 },
        { id: 'maestro_pokedex', nombre: 'Maestro Pokédex', icono: '👑', desc: 'Mira todos los Pokémon disponibles.', check: () => hayDatos() && obtenerVistos().length >= pokemonData.length },
        { id: 'coleccionista', nombre: 'Coleccionista', icono: '⭐', desc: 'Guarda 10 favoritos.', check: () => (typeof obtenerFavoritos === 'function' ? obtenerFavoritos().length : 0) >= 10 },
        { id: 'fan_definitivo', nombre: 'Fan definitivo', icono: '💫', desc: 'Guarda 50 favoritos.', check: () => (typeof obtenerFavoritos === 'function' ? obtenerFavoritos().length : 0) >= 50 },
        { id: 'artista', nombre: 'Artista', icono: '🎨', desc: 'Sube tu primer dibujo o fan art.', check: () => (window.__dibujosCache || 0) >= 1 },
        { id: 'galeria_propia', nombre: 'Galería propia', icono: '🖼️', desc: 'Sube 5 dibujos o fan arts.', check: () => (window.__dibujosCache || 0) >= 5 },
        { id: 'jugador', nombre: 'Jugador constante', icono: '🎮', desc: 'Consigue 10 aciertos en los minijuegos.', check: () => obtenerTotalesMinijuegos().aciertos >= 10 },
        { id: 'racha_oro', nombre: 'Racha de oro', icono: '🔥', desc: 'Consigue una racha de 10 aciertos seguidos.', check: () => obtenerTotalesMinijuegos().mejorRacha >= 10 },
        { id: 'entrenador_gimnasio', nombre: 'Entrenador de gimnasio', icono: '🏟️', desc: 'Completa tu equipo de 4 Pokémon.', check: () => equipoCompleto() },
        { id: 'comparador', nombre: 'Analista', icono: '🆚', desc: 'Usa el comparador de Pokémon.', check: () => leer('pokedex_uso_comparador', false) === true }
    ];

    function claveLogros() { return 'pokedex_logros_' + usuarioActivo(); }
    function obtenerLogrosGuardados() { return leer(claveLogros(), []); }

    function revisarLogros() {
        actualizarCacheDibujos();
        const previos = new Set(obtenerLogrosGuardados());
        const actuales = LOGROS.filter(l => { try { return l.check(); } catch (_) { return false; } }).map(l => l.id);
        const nuevos = actuales.filter(id => !previos.has(id));
        guardar(claveLogros(), actuales);
        renderLogros();
        actualizarProgresoUI();
        nuevos.forEach(id => {
            const l = LOGROS.find(x => x.id === id);
            if (l) mostrarToastLogro(l);
        });
    }

    function actualizarCacheDibujos() {
        safeDibujos().then(lista => { window.__dibujosCache = lista.length; });
    }

    function mostrarToastLogro(logro) {
        const toast = document.createElement('div');
        toast.className = 'toast-logro';
        toast.innerHTML = `<span class="toast-logro-icono">${logro.icono}</span><div><strong>¡Logro desbloqueado!</strong><br>${esc(logro.nombre)}</div>`;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('visible'));
        setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 500); }, 3500);
    }

    function renderLogros() {
        const cont = document.getElementById('logros-grid');
        if (!cont) return;
        const conseguidos = new Set(obtenerLogrosGuardados());
        cont.innerHTML = LOGROS.map(l => `
            <div class="logro-tarjeta ${conseguidos.has(l.id) ? 'logro-conseguido' : 'logro-bloqueado'}">
                <span class="logro-icono">${conseguidos.has(l.id) ? l.icono : '🔒'}</span>
                <strong>${esc(l.nombre)}</strong>
                <p>${esc(l.desc)}</p>
            </div>
        `).join('');
    }

    /* ---------------------------------------------------------
       📊 BARRA DE PROGRESO
       --------------------------------------------------------- */
    function actualizarProgresoUI() {
        const cont = document.getElementById('progreso-contenido');
        if (!cont || !hayDatos()) return;
        const total = pokemonData.length;
        const vistos = obtenerVistos().length;
        const favoritos = typeof obtenerFavoritos === 'function' ? obtenerFavoritos().length : 0;
        const pctVistos = Math.round((vistos / total) * 100);
        cont.innerHTML = `
            <p class="progreso-usuario">👤 Progreso de: <strong>${esc(usuarioActivo())}</strong></p>
            <div class="progreso-barra-bloque">
                <div class="progreso-etiqueta"><span>📖 Pokédex vista</span><span>${vistos}/${total} (${pctVistos}%)</span></div>
                <div class="progreso-barra"><div class="progreso-barra-relleno" style="width:${pctVistos}%"></div></div>
            </div>
            <div class="progreso-barra-bloque">
                <div class="progreso-etiqueta"><span>⭐ Favoritos guardados</span><span>${favoritos}/${total}</span></div>
                <div class="progreso-barra"><div class="progreso-barra-relleno progreso-barra-fav" style="width:${Math.round((favoritos / total) * 100)}%"></div></div>
            </div>
        `;
    }

    // Exponer datos de logros para que el módulo de Perfil los pueda mostrar.
    window.obtenerLogrosGuardados = obtenerLogrosGuardados;
    window.TOTAL_LOGROS = LOGROS.length;
    window.obtenerVistosPokedex = obtenerVistos;

    window.abrirProgreso = function () {
        actualizarCacheDibujos();
        setTimeout(() => { revisarLogros(); actualizarProgresoUI(); }, 50);
        window.abrirModal('modal-progreso');
    };

    document.addEventListener('DOMContentLoaded', () => {
        actualizarCacheDibujos();
        setTimeout(revisarLogros, 800);
    });
})();
