/* =========================================================
   ⌨️ PERSONALIZAR ATAJOS DE TECLADO
   Permite reasignar cualquiera de las teclas usadas en la
   Pokédex (anterior/siguiente, Mega, Gigantamax, Paradoja,
   forma derivada, entrar y salir) sin tocar código.
   No modifica ninguna función existente: solo añade.
   ========================================================= */
(function () {
    'use strict';

    const CLAVE = 'pokedex_atajos_teclado';
    const DEFECTO = {
        anterior: 'ArrowLeft',
        siguiente: 'ArrowRight',
        mega: 'm',
        gigantamax: 'g',
        paradoja: 'p',
        derivada: 'f',
        entrar: 'Enter',
        salir: 'Escape'
    };
    const ETIQUETAS = {
        anterior: { icono: '⬅️', nombre: 'Pokémon anterior' },
        siguiente: { icono: '➡️', nombre: 'Pokémon siguiente' },
        mega: { icono: '🔷', nombre: 'Megaevolución' },
        gigantamax: { icono: '🟥', nombre: 'Gigantamax' },
        paradoja: { icono: '⏳', nombre: 'Forma Paradoja' },
        derivada: { icono: '🌍', nombre: 'Forma derivada (Alola/Galar/Hisui...)' },
        entrar: { icono: '🚪', nombre: 'Entrar a la Pokédex' },
        salir: { icono: '↩️', nombre: 'Salir / volver' }
    };
    const NOMBRES_TECLA = { ' ': 'Espacio', 'ArrowLeft': '←', 'ArrowRight': '→', 'ArrowUp': '↑', 'ArrowDown': '↓', 'Enter': 'Enter ⏎', 'Escape': 'Esc' };

    const leer = () => {
        try { return Object.assign({}, DEFECTO, JSON.parse(localStorage.getItem(CLAVE) || '{}')); }
        catch (_) { return Object.assign({}, DEFECTO); }
    };
    const guardar = (obj) => { try { localStorage.setItem(CLAVE, JSON.stringify(obj)); } catch (_) {} };

    function nombreTecla(valor) {
        if (NOMBRES_TECLA[valor]) return NOMBRES_TECLA[valor];
        return String(valor || '').length === 1 ? String(valor).toUpperCase() : valor;
    }

    let escuchandoAccion = null;

    function renderAtajos() {
        const cont = document.getElementById('atajos-lista');
        if (!cont) return;
        const actuales = leer();
        cont.innerHTML = Object.keys(ETIQUETAS).map(accion => {
            const et = ETIQUETAS[accion];
            const esperando = escuchandoAccion === accion;
            return `
                <div class="atajo-fila ${esperando ? 'atajo-esperando' : ''}">
                    <span class="atajo-info"><span class="atajo-icono">${et.icono}</span>${et.nombre}</span>
                    <span class="atajo-tecla">${esperando ? 'Pulsa una tecla…' : nombreTecla(actuales[accion])}</span>
                    <button type="button" class="btn-modal-secundario atajo-btn-cambiar" onclick="escucharNuevaTecla('${accion}')">✏️ Cambiar</button>
                </div>`;
        }).join('');
    }

    window.escucharNuevaTecla = function (accion) {
        escuchandoAccion = accion;
        renderAtajos();
    };

    window.restablecerAtajos = function () {
        guardar({});
        escuchandoAccion = null;
        renderAtajos();
    };

    window.abrirAtajosTeclado = function () {
        escuchandoAccion = null;
        window.abrirModal('modal-atajos');
        renderAtajos();
    };

    // Captura en fase de "captura" para adelantarse al listener principal
    // de app-core.js mientras se está esperando una tecla nueva.
    document.addEventListener('keydown', (event) => {
        if (!escuchandoAccion) return;
        event.preventDefault();
        event.stopPropagation();
        if (event.key === 'Escape' && escuchandoAccion !== 'salir') {
            // Esc cancela la escucha sin asignar nada, salvo que se esté
            // configurando justo la tecla de "salir".
            escuchandoAccion = null;
            renderAtajos();
            return;
        }
        const actuales = leer();
        const accion = escuchandoAccion;
        const nuevaTecla = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(event.key)
            ? event.key
            : event.key.length === 1 ? event.key.toLowerCase() : event.key;

        // Si otra acción ya usaba esa tecla, se las intercambian para que
        // nunca queden dos atajos duplicados.
        const otraAccion = Object.keys(actuales).find(a => a !== accion &&
            String(actuales[a]).toLowerCase() === String(nuevaTecla).toLowerCase());
        if (otraAccion) actuales[otraAccion] = actuales[accion];
        actuales[accion] = nuevaTecla;

        guardar(actuales);
        escuchandoAccion = null;
        renderAtajos();
    }, true);
})();
