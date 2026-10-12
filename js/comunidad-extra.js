/* =========================================================
   👤 PERFIL DE USUARIO + 🗳️ VOTACIÓN SEMANAL
   No modifica ninguna función existente: solo añade.
   La votación semanal necesita Supabase (usa la misma
   configuración de supabase-config.js que la Comunidad).
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
        return (localStorage.getItem('pokedex_usuario_actual') || '').trim();
    }

    /* ---------------------------------------------------------
       🧑 AVATARES DE ENTRENADOR
       Ilustraciones propias (estilo "busto" de entrenador) en
       varios arquetipos inspirados en los protagonistas clásicos
       de los juegos principales, para no depender de imágenes
       externas que podrían dejar de cargar o tener derechos de
       autor de terceros. También se puede subir un avatar propio.
       --------------------------------------------------------- */
    const AVATARES = [
        { nombre: 'Investigador de campo', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#eef4fa"/>
            <path d="M40 200c4-46 30-72 60-72s56 26 60 72Z" fill="#ffffff"/>
            <path d="M40 200c4-46 30-72 60-72s56 26 60 72" fill="none" stroke="#c7d3e0" stroke-width="4"/>
            <circle cx="100" cy="92" r="40" fill="#f6c39a"/>
            <path d="M60 84c0-30 20-46 40-46s40 16 40 46c-10-8-24-12-40-12s-30 4-40 12Z" fill="#2b2018"/>
            <rect x="72" y="86" width="18" height="8" rx="4" fill="#2b2018"/>
            <rect x="110" y="86" width="18" height="8" rx="4" fill="#2b2018"/>
            <path d="M52 150c14-14 34-20 48-20s34 6 48 20l-10 22H62Z" fill="#3f63ff"/></svg>` },
        { nombre: 'Explorador clásico', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#fdeee0"/>
            <path d="M38 200c5-44 30-70 62-70s57 26 62 70Z" fill="#e6412c"/>
            <circle cx="100" cy="90" r="38" fill="#f6c39a"/>
            <path d="M62 78c4-24 20-38 38-38s34 14 38 38c-10-16-24-24-38-24s-28 8-38 24Z" fill="#1c1c1c"/>
            <path d="M56 74a44 26 0 0 1 88 0c-14-10-30-14-44-14s-30 4-44 14Z" fill="#e6412c"/>
            <circle cx="100" cy="60" r="7" fill="#fff"/>
            <path d="M46 150c16-12 34-18 54-18s38 6 54 18l-8 24H54Z" fill="#2a4dd0"/></svg>` },
        { nombre: 'Exploradora aventurera', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#eaf7f0"/>
            <path d="M40 200c4-44 30-70 60-70s56 26 60 70Z" fill="#ffffff"/>
            <circle cx="100" cy="92" r="39" fill="#f6c39a"/>
            <path d="M61 84c-2-30 16-50 39-50s41 20 39 50c-6-20-20-30-39-30s-33 10-39 30Z" fill="#5b3a22"/>
            <path d="M61 84c-10 18-8 44 4 54" fill="none" stroke="#5b3a22" stroke-width="10" stroke-linecap="round"/>
            <path d="M139 84c10 18 8 44-4 54" fill="none" stroke="#5b3a22" stroke-width="10" stroke-linecap="round"/>
            <path d="M100 60c-20 0-24 14-16 20 6-8 12-10 16-10s10 2 16 10c8-6 4-20-16-20Z" fill="#ff8fb3"/>
            <path d="M50 152c15-14 32-20 50-20s35 6 50 20l-9 22H59Z" fill="#2fae7a"/></svg>` },
        { nombre: 'Élite oscuro', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#e7e6f5"/>
            <path d="M36 200c5-50 32-78 64-78s59 28 64 78Z" fill="#1c1730"/>
            <circle cx="100" cy="90" r="37" fill="#f1c19a"/>
            <path d="M64 80c-4-28 14-46 36-46s40 18 36 46c-8-14-22-22-36-22s-28 8-36 22Z" fill="#141018"/>
            <path d="M44 150c17-16 36-24 56-24s39 8 56 24l-10 26H54Z" fill="#5b3fa8"/></svg>` },
        { nombre: 'Ranger de la naturaleza', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#eefaf1"/>
            <path d="M40 200c4-44 30-70 60-70s56 26 60 70Z" fill="#ffffff"/>
            <circle cx="100" cy="94" r="38" fill="#f6c39a"/>
            <path d="M56 82c8-30 26-30 44-30s36 0 44 30c-14-10-30-12-44-12s-30 2-44 12Z" fill="#3c7a3e"/>
            <ellipse cx="100" cy="66" rx="52" ry="12" fill="#3c7a3e"/>
            <path d="M50 152c16-14 33-20 50-20s34 6 50 20l-9 22H59Z" fill="#e7a53c"/></svg>` },
        { nombre: 'Campeón de la liga', svg: `
            <svg viewBox="0 0 200 200"><circle cx="100" cy="100" r="100" fill="#fff3e0"/>
            <path d="M38 200c5-48 31-76 62-76s57 28 62 76Z" fill="#241f3a"/>
            <circle cx="100" cy="88" r="38" fill="#f6c39a"/>
            <path d="M62 78c0-28 18-44 38-44s38 16 38 44c-10-14-24-20-38-20s-28 6-38 20Z" fill="#3a2a1a"/>
            <path d="M52 150c15-16 33-24 48-24s33 8 48 24l-8 24H60Z" fill="#d4af37"/>
            <path d="M100 118c-16 0-26 8-26 8l6 16h40l6-16s-10-8-26-8Z" fill="#d4af37"/></svg>` }
    ];

    function claveAvatarIndice() { return 'pokedex_avatar_indice_' + usuarioActivo(); }
    function claveAvatarPropio() { return 'pokedex_avatar_propio_' + usuarioActivo(); }

    function datosAvatarPropio() {
        try {
            const bruto = JSON.parse(localStorage.getItem(claveAvatarPropio()) || 'null');
            if (bruto && bruto.img) return bruto;
        } catch (_) {}
        return null;
    }

    function avatarActualHTML() {
        const propio = datosAvatarPropio();
        if (propio) {
            const x = Number(propio.x) || 0, y = Number(propio.y) || 0, s = Number(propio.scale) || 1;
            return `<img src="${propio.img}" alt="Mi avatar" class="perfil-avatar-img" style="transform: translate(${x}%, ${y}%) scale(${s});">`;
        }
        const idx = Math.abs(Number(leer(claveAvatarIndice(), 0)) || 0) % AVATARES.length;
        return AVATARES[idx].svg;
    }

    window.cambiarAvatarPerfil = function () {
        // Si hay un avatar propio subido, un click sobre "cambiar" vuelve a los ilustrados.
        if (datosAvatarPropio()) {
            try { localStorage.removeItem(claveAvatarPropio()); } catch (_) {}
        } else {
            const actual = Math.abs(Number(leer(claveAvatarIndice(), 0)) || 0) % AVATARES.length;
            guardar(claveAvatarIndice(), (actual + 1) % AVATARES.length);
        }
        construirPerfil();
    };

    /* ---------------------------------------------------------
       ✏️ EDITOR DE POSICIÓN DEL AVATAR (arrastrar + zoom)
       El usuario puede mover y acercar su foto dentro del círculo
       antes de guardarla, y reabrir el editor cuando quiera.
       --------------------------------------------------------- */
    const editorEstado = { imgOriginal: '', x: 0, y: 0, scale: 1, arrastrando: false, inicioX: 0, inicioY: 0 };
    const LIMITE_ESCALA_MIN = 1, LIMITE_ESCALA_MAX = 2.5;

    function limiteDesplazamiento() {
        return 15 + (editorEstado.scale - 1) * 35;
    }

    function aplicarTransformEditor() {
        const img = document.getElementById('editor-avatar-img');
        const slider = document.getElementById('editor-avatar-zoom');
        if (!img) return;
        img.style.transform = `translate(${editorEstado.x}%, ${editorEstado.y}%) scale(${editorEstado.scale})`;
        if (slider) slider.value = editorEstado.scale;
    }

    function iniciarArrastreEditor(clientX, clientY) {
        editorEstado.arrastrando = true;
        editorEstado.inicioX = clientX;
        editorEstado.inicioY = clientY;
        editorEstado.xInicial = editorEstado.x;
        editorEstado.yInicial = editorEstado.y;
    }

    function moverArrastreEditor(clientX, clientY) {
        if (!editorEstado.arrastrando) return;
        const cont = document.getElementById('editor-avatar-circulo');
        if (!cont) return;
        const ancho = cont.getBoundingClientRect().width || 220;
        const dx = ((clientX - editorEstado.inicioX) / ancho) * 100;
        const dy = ((clientY - editorEstado.inicioY) / ancho) * 100;
        const lim = limiteDesplazamiento();
        editorEstado.x = Math.max(-lim, Math.min(lim, editorEstado.xInicial + dx));
        editorEstado.y = Math.max(-lim, Math.min(lim, editorEstado.yInicial + dy));
        aplicarTransformEditor();
    }

    function terminarArrastreEditor() { editorEstado.arrastrando = false; }

    function conectarEditorEventos() {
        const img = document.getElementById('editor-avatar-img');
        const slider = document.getElementById('editor-avatar-zoom');
        if (!img || img.dataset.conectado) return;
        img.dataset.conectado = '1';
        img.addEventListener('pointerdown', e => { e.preventDefault(); iniciarArrastreEditor(e.clientX, e.clientY); img.setPointerCapture(e.pointerId); });
        img.addEventListener('pointermove', e => moverArrastreEditor(e.clientX, e.clientY));
        img.addEventListener('pointerup', terminarArrastreEditor);
        img.addEventListener('pointercancel', terminarArrastreEditor);
        slider.addEventListener('input', () => {
            editorEstado.scale = Number(slider.value);
            const lim = limiteDesplazamiento();
            editorEstado.x = Math.max(-lim, Math.min(lim, editorEstado.x));
            editorEstado.y = Math.max(-lim, Math.min(lim, editorEstado.y));
            aplicarTransformEditor();
        });
    }

    function abrirEditorAvatar(dataUrlImagen, previo) {
        editorEstado.imgOriginal = dataUrlImagen;
        editorEstado.x = previo && Number.isFinite(previo.x) ? previo.x : 0;
        editorEstado.y = previo && Number.isFinite(previo.y) ? previo.y : 0;
        editorEstado.scale = previo && Number.isFinite(previo.scale) ? previo.scale : 1;
        window.abrirModal('modal-editor-avatar');
        const img = document.getElementById('editor-avatar-img');
        if (img) img.src = dataUrlImagen;
        conectarEditorEventos();
        aplicarTransformEditor();
    }

    window.ajustarAvatarPropio = function () {
        const propio = datosAvatarPropio();
        if (!propio) return;
        abrirEditorAvatar(propio.img, propio);
    };

    window.guardarEdicionAvatar = function () {
        guardar(claveAvatarPropio(), { img: editorEstado.imgOriginal, x: editorEstado.x, y: editorEstado.y, scale: editorEstado.scale });
        window.cerrarModal('modal-editor-avatar');
        construirPerfil();
    };

    window.centrarEdicionAvatar = function () {
        editorEstado.x = 0; editorEstado.y = 0; editorEstado.scale = 1;
        aplicarTransformEditor();
    };

    function comprimirImagenArchivo(file) {
        return new Promise((resolve, reject) => {
            const lector = new FileReader();
            lector.onerror = () => reject(new Error('No se pudo leer el archivo'));
            lector.onload = () => {
                const img = new Image();
                img.onload = () => {
                    // Se conserva la proporción original (sin recortar) para que el
                    // usuario decida qué parte de la foto mostrar en el editor.
                    const maxLado = 700;
                    const factor = Math.min(1, maxLado / Math.max(img.width, img.height));
                    const w = Math.round(img.width * factor), h = Math.round(img.height * factor);
                    const canvas = document.createElement('canvas');
                    canvas.width = w; canvas.height = h;
                    canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                    resolve(canvas.toDataURL('image/jpeg', 0.88));
                };
                img.onerror = () => reject(new Error('Imagen no válida'));
                img.src = lector.result;
            };
            lector.readAsDataURL(file);
        });
    }

    window.subirAvatarPropio = async function (input) {
        const file = input.files && input.files[0];
        if (!file) return;
        try {
            const dataUrl = await comprimirImagenArchivo(file);
            abrirEditorAvatar(dataUrl, null);
        } catch (e) {
            alert('No se pudo usar esa imagen como avatar.');
        }
        input.value = '';
    };

    /* ---------------------------------------------------------
       🐾 POKÉMON COMPAÑERO (elegido entre los favoritos)
       --------------------------------------------------------- */
    function claveCompanero() { return 'pokedex_companero_' + usuarioActivo(); }

    function companeroActual() {
        if (!hayDatos()) return null;
        const id = Number(leer(claveCompanero(), 0));
        return id ? pokemonData.find(p => p.id === id) || null : null;
    }

    function llenarSelectorCompanero() {
        const sel = document.getElementById('perfil-companero-select');
        if (!sel || !hayDatos()) return;
        const favoritos = typeof obtenerFavoritos === 'function' ? obtenerFavoritos() : [];
        if (!favoritos.length) {
            sel.innerHTML = '<option value="">Marca un favorito primero ⭐</option>';
            return;
        }
        const actual = Number(leer(claveCompanero(), 0));
        sel.innerHTML = '<option value="">Sin compañero</option>' + favoritos.map(id => {
            const p = pokemonData.find(x => x.id === id);
            return p ? `<option value="${p.id}" ${p.id === actual ? 'selected' : ''}>#${String(p.id).padStart(4, '0')} ${esc(p.nombre)}</option>` : '';
        }).join('');
        sel.onchange = () => { guardar(claveCompanero(), Number(sel.value) || 0); construirPerfil(); };
    }

    function fondoParaCompanero(p) {
        if (!p || !hayDatos()) return { clase: '', estilo: '' };
        const forma = p.formas[0];
        if (p.id === (typeof ID_ARCEUS_FONDO !== 'undefined' ? ID_ARCEUS_FONDO : -1)) {
            return { clase: 'fondo-legendario fondo-arceus', estilo: '' };
        }
        if (typeof IDS_FONDOS_CINEMATICOS !== 'undefined' && IDS_FONDOS_CINEMATICOS.has(p.id) && typeof obtenerClaseFondoCinematico === 'function') {
            return { clase: 'fondo-legendario-dinamico ' + obtenerClaseFondoCinematico(p, forma), estilo: '' };
        }
        return { clase: '', estilo: '' };
    }

    /* ---------------------------------------------------------
       🏅 NIVEL DE ENTRENADOR (cosmético, combina el progreso
       ya guardado en distintos módulos de la web).
       --------------------------------------------------------- */
    async function calcularNivel() {
        const vistos = typeof obtenerVistosPokedex === 'function' ? obtenerVistosPokedex().length : 0;
        const favoritos = typeof obtenerFavoritos === 'function' ? obtenerFavoritos().length : 0;
        const logros = typeof obtenerLogrosGuardados === 'function' ? obtenerLogrosGuardados().length : 0;
        let dibujos = 0;
        try { dibujos = typeof obtenerDibujosDeBD === 'function' ? (await obtenerDibujosDeBD()).length : 0; } catch (_) {}
        const puntos = vistos + favoritos * 2 + dibujos * 5 + logros * 4;
        return Math.max(1, Math.floor(puntos / 12) + 1);
    }

    /* ---------------------------------------------------------
       👤 CONSTRUCCIÓN DEL PERFIL
       --------------------------------------------------------- */
    async function construirPerfil() {
        const usuario = usuarioActivo();
        const cont = document.getElementById('perfil-contenido');
        if (!cont) return;

        if (!usuario) {
            cont.innerHTML = `<p class="perfil-sin-cuenta">🔐 Inicia sesión para ver tu perfil completo.
                <button type="button" class="btn-modal-principal" onclick="cerrarModal('modal-perfil');abrirModal('modal-cuenta')">Iniciar sesión</button></p>`;
            return;
        }

        const favoritos = typeof obtenerFavoritos === 'function' ? obtenerFavoritos() : [];
        const vistos = typeof obtenerVistosPokedex === 'function' ? obtenerVistosPokedex() : [];
        const logros = typeof obtenerLogrosGuardados === 'function' ? obtenerLogrosGuardados() : [];
        const totalLogros = window.TOTAL_LOGROS || 0;
        const equipo = leer('pokedex_equipo_gimnasio', []).filter(id => hayDatos() && pokemonData.some(p => p.id === Number(id)));
        const totalPokedex = hayDatos() ? pokemonData.length : 0;

        let dibujos = [];
        try { dibujos = typeof obtenerDibujosDeBD === 'function' ? await obtenerDibujosDeBD() : []; } catch (_) {}
        const misDibujos = dibujos.filter(d => (d.autor || '').trim().toLowerCase() === usuario.toLowerCase());

        const companero = companeroActual();
        const nombreCompanero = companero ? (window.obtenerApodo ? (window.obtenerApodo(companero.id) || companero.nombre) : companero.nombre) : null;
        const { clase: claseFondo } = fondoParaCompanero(companero);
        const nivel = await calcularNivel();

        const claveDesde = 'pokedex_perfil_desde_' + usuario;
        let desde = localStorage.getItem(claveDesde);
        if (!desde) { desde = new Date().toLocaleDateString('es-DO'); try { localStorage.setItem(claveDesde, desde); } catch (_) {} }

        cont.innerHTML = `
            <div class="perfil-portada">
                ${claseFondo ? `<div class="${esc(claseFondo)}" aria-hidden="true"></div>` : '<div class="perfil-portada-fondo-defecto" aria-hidden="true"></div>'}
                <div class="perfil-portada-capa">
                    <div class="perfil-identidad">
                        <h3>${esc(usuario)}</h3>
                        ${companero ? `<p>con ${esc(nombreCompanero)}</p>` : '<p class="perfil-sin-companero">Elige un Pokémon compañero abajo</p>'}
                    </div>
                    <div class="perfil-figuras">
                        ${companero ? `<img class="perfil-companero-img" src="${companero.formas[0].png}" alt="${esc(companero.nombre)}">` : ''}
                        <div class="perfil-avatar-circulo">${avatarActualHTML()}</div>
                    </div>
                    <div class="perfil-nivel"><strong>${nivel}</strong><span>NIVEL</span></div>
                </div>
            </div>

            <div class="perfil-acciones-avatar">
                <button type="button" class="btn-modal-secundario" onclick="cambiarAvatarPerfil()">🔀 Cambiar avatar</button>
                ${datosAvatarPropio() ? `<button type="button" class="btn-modal-secundario" onclick="ajustarAvatarPropio()">✏️ Ajustar imagen</button>` : ''}
                <label class="btn-modal-secundario perfil-upload-label">
                    📤 Subir mi propio avatar
                    <input type="file" accept="image/png,image/jpeg,image/webp" hidden onchange="subirAvatarPropio(this)">
                </label>
            </div>

            <div class="perfil-campo-companero">
                <label for="perfil-companero-select">🐾 Pokémon compañero (elige entre tus favoritos)</label>
                <select id="perfil-companero-select" class="campo-sitio"></select>
            </div>

            <div class="perfil-iconos-rapidos">
                <button type="button" onclick="cerrarModal('modal-perfil');mostrarFavoritos()"><span>⭐</span>Favoritos</button>
                <button type="button" onclick="cerrarModal('modal-perfil');abrirCentroEntrenador()"><span>🏟️</span>Equipo</button>
                <button type="button" onclick="cerrarModal('modal-perfil');abrirProgreso()"><span>🏆</span>Logros</button>
                <button type="button" onclick="cerrarModal('modal-perfil');abrirComparador()"><span>🆚</span>Comparar</button>
            </div>

            <h4 class="perfil-resumen-titulo">🎒 Resumen del Entrenador</h4>
            <div class="perfil-resumen-lista">
                <div class="perfil-resumen-fila"><span>📖 Pokémon vistos</span><strong>${vistos.length}/${totalPokedex}</strong></div>
                <div class="perfil-resumen-fila"><span>⭐ Favoritos guardados</span><strong>${favoritos.length}</strong></div>
                <div class="perfil-resumen-fila"><span>🎨 Fan arts subidos</span><strong>${misDibujos.length}</strong></div>
                <div class="perfil-resumen-fila"><span>🏟️ Equipo de gimnasio</span><strong>${equipo.length}/4</strong></div>
                <div class="perfil-resumen-fila"><span>🏆 Logros desbloqueados</span><strong>${logros.length}/${totalLogros}</strong></div>
                <div class="perfil-resumen-fila"><span>📅 Perfil desde</span><strong>${esc(desde)}</strong></div>
            </div>
        `;
        llenarSelectorCompanero();
    }

    window.abrirPerfil = function () {
        window.abrirModal('modal-perfil');
        construirPerfil();
    };

    /* ---------------------------------------------------------
       🗳️ VOTACIÓN SEMANAL: "Pokémon favorito de la semana"
       Usa la tabla comunidad_voto_semana (ver
       votacion_semanal_supabase.sql). Reutiliza la misma
       configuración de supabase-config.js que la Comunidad.
       --------------------------------------------------------- */
    let clienteVotos = null;
    function configuradoSupabase() {
        const cfg = window.SUPABASE_CONFIG || {};
        return !!(cfg.url && cfg.key && !String(cfg.url).includes('PEGA_AQUI') && !String(cfg.key).includes('PEGA_AQUI') && window.supabase);
    }
    function obtenerClienteVotos() {
        if (clienteVotos) return clienteVotos;
        if (!configuradoSupabase()) return null;
        try { clienteVotos = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.key); }
        catch (_) { clienteVotos = null; }
        return clienteVotos;
    }

    function semanaActual() {
        const ahora = new Date();
        const inicioAno = new Date(ahora.getFullYear(), 0, 1);
        const dias = Math.floor((ahora - inicioAno) / 86400000);
        const semana = Math.ceil((dias + inicioAno.getDay() + 1) / 7);
        return `${ahora.getFullYear()}-W${String(semana).padStart(2, '0')}`;
    }

    function llenarSelectorVotacion() {
        const sel = document.getElementById('votacion-select');
        if (!sel || sel.options.length || !hayDatos()) return;
        sel.innerHTML = '<option value="">Elige un Pokémon…</option>' +
            pokemonData.map(p => `<option value="${p.id}">#${String(p.id).padStart(4, '0')} ${esc(p.nombre)}</option>`).join('');
    }

    async function cargarVotacion() {
        const estado = document.getElementById('votacion-estado');
        const ranking = document.getElementById('votacion-ranking');
        llenarSelectorVotacion();
        const cliente = obtenerClienteVotos();
        if (!cliente) {
            estado.className = 'comunidad-estado comunidad-configuracion';
            estado.innerHTML = '☁️ <strong>La votación semanal está lista.</strong><br>Falta conectar Supabase y ejecutar <code>votacion_semanal_supabase.sql</code>.';
            ranking.innerHTML = '';
            return;
        }
        estado.className = 'comunidad-estado';
        estado.textContent = `Semana actual: ${semanaActual()}. ¡Un voto por cuenta!`;
        const { data, error } = await cliente.from('comunidad_voto_semana').select('pokemon_id').eq('semana', semanaActual());
        if (error) { ranking.innerHTML = '<p class="perfil-vacio">No se pudo cargar el ranking.</p>'; return; }
        const conteo = {};
        (data || []).forEach(v => { conteo[v.pokemon_id] = (conteo[v.pokemon_id] || 0) + 1; });
        const top = Object.entries(conteo).sort((a, b) => b[1] - a[1]).slice(0, 5);
        if (!top.length) { ranking.innerHTML = '<p class="perfil-vacio">Todavía no hay votos esta semana. ¡Sé el primero!</p>'; return; }
        ranking.innerHTML = '<ol class="votacion-lista">' + top.map(([id, votos]) => {
            const p = hayDatos() ? pokemonData.find(x => x.id === Number(id)) : null;
            return `<li><img src="${p ? p.formas[0].png : ''}" alt=""><span>${p ? esc(p.nombre) : 'Pokémon #' + id}</span><strong>${votos} voto${votos === 1 ? '' : 's'}</strong></li>`;
        }).join('') + '</ol>';
    }

    window.abrirVotacionSemanal = function () {
        window.abrirModal('modal-votacion');
        cargarVotacion();
    };

    window.enviarVotoSemanal = async function () {
        const sel = document.getElementById('votacion-select');
        const msg = document.getElementById('votacion-mensaje');
        const usuario = usuarioActivo();
        if (!usuario) { msg.textContent = '🔐 Inicia sesión para votar.'; msg.className = 'comunidad-form-mensaje error'; return; }
        const id = Number(sel.value);
        if (!id) { msg.textContent = 'Elige un Pokémon primero.'; msg.className = 'comunidad-form-mensaje error'; return; }
        const cliente = obtenerClienteVotos();
        if (!cliente) { msg.textContent = 'Supabase no está conectado todavía.'; msg.className = 'comunidad-form-mensaje error'; return; }
        const { error } = await cliente.from('comunidad_voto_semana')
            .upsert({ semana: semanaActual(), usuario, pokemon_id: id }, { onConflict: 'semana,usuario' });
        if (error) { msg.textContent = 'No se pudo registrar tu voto.'; msg.className = 'comunidad-form-mensaje error'; return; }
        msg.textContent = '¡Voto registrado! Gracias por participar.';
        msg.className = 'comunidad-form-mensaje ok';
        cargarVotacion();
    };
})();

