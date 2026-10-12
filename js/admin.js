/* =========================================================
   🛠️ ADMINISTRADOR — EDITOR LOCAL DE LA POKÉDEX
   Nota: el control de contraseña en frontend NO es seguridad real.
   Para proteger un sitio público debe sustituirse por Supabase Auth/RLS.
   ========================================================= */
(() => {
    const ADMIN_PASSWORD_HASH = '288e5075658067d0709b55d3a8d5bc2908f26976ae031305980d8c30910eb417';
    const STORAGE_KEY = 'favoritedex_admin_config_v1';
    const SESSION_KEY = 'favoritedex_admin_session';

    // El total se calcula con los datos reales para que nunca quede desactualizado.
    const TOTAL_POKEMON = (typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length) || 0;
    const TEXTO_TOTAL = TOTAL_POKEMON ? String(TOTAL_POKEMON) : '';

    const defaults = {
        tituloPortada: 'MI POKÉDEX DE FAVORITOS',
        subtituloPortada: 'Explora, descubre y disfruta de tus Pokémon favoritos.',
        botonPokedex: 'VER POKÉMONES',
        infoPortada: `◈ ${TEXTO_TOTAL} Pokémon · ◈ Formas especiales · ◈ Gritos y sprites`.replace('◈  Pokémon', '◈ Pokémon'),
        tituloPokedex: 'Mi Pokédex de Favoritos',
        descripcionPokedex: TEXTO_TOTAL ? `Una colección de mis ${TEXTO_TOTAL} Pokémon preferidos.` : 'Una colección de mis Pokémon preferidos.',
        footer: 'Página creada sobre mis Pokémon favoritos.',
        colorPrincipal: '#3f63ff',
        arceusFondo: true
    };

    function sha256(texto) {
        const data = new TextEncoder().encode(texto);
        return crypto.subtle.digest('SHA-256', data).then(buffer =>
            Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('')
        );
    }

    // Textos por defecto de versiones anteriores (con el total escrito a mano). Si no fueron personalizados, se actualizan.
    const DEFAULTS_ANTIGUOS = {
        infoPortada: '◈ 200 Pokémon · ◈ Formas especiales · ◈ Gritos y sprites',
        descripcionPokedex: 'Una colección de mis 200 Pokémon preferidos.'
    };

    function cargarConfig() {
        try {
            const guardada = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
            Object.keys(DEFAULTS_ANTIGUOS).forEach(k => {
                if (guardada[k] === DEFAULTS_ANTIGUOS[k]) delete guardada[k];
            });
            return {...defaults, ...guardada};
        } catch {
            return {...defaults};
        }
    }

    function guardarConfig(config) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    }

    function esAdmin() {
        return sessionStorage.getItem(SESSION_KEY) === '1';
    }

    window.abrirAdmin = function() {
        const modal = document.getElementById('modal-admin');
        if (!modal) return;
        modal.classList.add('visible');
        modal.setAttribute('aria-hidden', 'false');
        if (esAdmin()) mostrarEditor();
        else mostrarLogin();
    };

    window.cerrarAdmin = function() {
        // Cada salida del área administrativa obliga a volver a introducir la contraseña.
        sessionStorage.removeItem(SESSION_KEY);
        const modal = document.getElementById('modal-admin');
        if (!modal) return;
        modal.classList.remove('visible');
        modal.setAttribute('aria-hidden', 'true');
        mostrarLogin();
    };

    function mostrarLogin() {
        const login = document.getElementById('admin-login-panel');
        const editor = document.getElementById('admin-editor-panel');
        if (login) login.hidden = false;
        if (editor) editor.hidden = true;
        const pass = document.getElementById('admin-password');
        if (pass) { pass.value = ''; setTimeout(() => pass.focus(), 50); }
    }

    function mostrarEditor() {
        const login = document.getElementById('admin-login-panel');
        const editor = document.getElementById('admin-editor-panel');
        if (login) login.hidden = true;
        if (editor) editor.hidden = false;
        cargarCampos();
    }

    window.iniciarAdmin = async function() {
        const input = document.getElementById('admin-password');
        const mensaje = document.getElementById('admin-login-mensaje');
        const password = input?.value || '';
        if (!password) {
            if (mensaje) mensaje.textContent = 'Introduce la contraseña.';
            return;
        }
        const hash = await sha256(password);
        if (hash === ADMIN_PASSWORD_HASH) {
            sessionStorage.setItem(SESSION_KEY, '1');
            if (mensaje) mensaje.textContent = '';
            mostrarEditor();
        } else if (mensaje) {
            mensaje.textContent = '❌ Contraseña incorrecta.';
        }
    };

    window.cerrarSesionAdmin = function() {
        sessionStorage.removeItem(SESSION_KEY);
        mostrarLogin();
    };

    function cargarCampos() {
        const c = cargarConfig();
        const valores = {
            'admin-titulo-portada': c.tituloPortada,
            'admin-subtitulo-portada': c.subtituloPortada,
            'admin-boton-pokedex': c.botonPokedex,
            'admin-info-portada': c.infoPortada,
            'admin-titulo-pokedex': c.tituloPokedex,
            'admin-descripcion-pokedex': c.descripcionPokedex,
            'admin-footer': c.footer,
            'admin-color': c.colorPrincipal,
            'admin-arceus-fondo': c.arceusFondo
        };
        Object.entries(valores).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (!el) return;
            if (el.type === 'checkbox') el.checked = Boolean(value);
            else el.value = value ?? '';
        });
    }

    function valor(id) { return document.getElementById(id)?.value?.trim() || ''; }

    window.guardarCambiosAdmin = function() {
        if (!esAdmin()) return;
        const config = {
            tituloPortada: valor('admin-titulo-portada'),
            subtituloPortada: valor('admin-subtitulo-portada'),
            botonPokedex: valor('admin-boton-pokedex'),
            infoPortada: valor('admin-info-portada'),
            tituloPokedex: valor('admin-titulo-pokedex'),
            descripcionPokedex: valor('admin-descripcion-pokedex'),
            footer: valor('admin-footer'),
            colorPrincipal: document.getElementById('admin-color')?.value || defaults.colorPrincipal,
            arceusFondo: Boolean(document.getElementById('admin-arceus-fondo')?.checked)
        };
        guardarConfig(config);
        aplicarConfig(config);
        const mensaje = document.getElementById('admin-editor-mensaje');
        if (mensaje) mensaje.textContent = '✅ Cambios guardados en este navegador.';
    };

    window.restaurarCambiosAdmin = function() {
        if (!esAdmin()) return;
        guardarConfig({...defaults});
        aplicarConfig({...defaults});
        cargarCampos();
        const mensaje = document.getElementById('admin-editor-mensaje');
        if (mensaje) mensaje.textContent = '↩ Se restauraron los valores originales.';
    };

    function aplicarConfig(c) {
        const titulo = document.querySelector('.titulo-lateral.titulo-izquierdo');
        const tituloDerecho = document.querySelector('.titulo-lateral.titulo-derecho');
        const partes = String(c.tituloPortada || defaults.tituloPortada).split(/\s+DE\s+/i);
        if (titulo) titulo.textContent = partes[0] || 'MI POKÉDEX';
        if (tituloDerecho) tituloDerecho.textContent = partes[1] ? `DE ${partes[1]}` : 'DE FAVORITOS';
        const subtitulo = document.querySelector('.inicio-marca p');
        if (subtitulo) subtitulo.textContent = c.subtituloPortada;
        const boton = document.querySelector('.btn-entrar-pokedex .menu-texto');
        if (boton) boton.textContent = c.botonPokedex;
        const info = document.querySelector('.inicio-pie-info');
        if (info) info.textContent = c.infoPortada;
        const h1 = document.querySelector('#pokedex-app > header h1');
        if (h1) h1.textContent = c.tituloPokedex;
        const desc = document.querySelector('#pokedex-app > header > p');
        if (desc) desc.textContent = c.descripcionPokedex;
        const footer = document.querySelector('#pokedex-app > footer p');
        if (footer) footer.textContent = c.footer;
        document.documentElement.style.setProperty('--admin-color-principal', c.colorPrincipal);
        document.body.classList.toggle('admin-sin-fondo-arceus', !c.arceusFondo);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    }

    document.addEventListener('DOMContentLoaded', () => {
        aplicarConfig(cargarConfig());
        const pass = document.getElementById('admin-password');
        pass?.addEventListener('keydown', e => {
            if (e.key === 'Enter') window.iniciarAdmin();
        });
    });
})();
