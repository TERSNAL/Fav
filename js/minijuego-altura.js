/* =========================================================
   📏 MINIJUEGO: ¿CUÁL ES MÁS ALTO?
   Se muestran dos Pokémon al azar y hay que elegir el más alto.
   Solo hay un intento por duelo. Las alturas se consultan a
   PokeAPI (si no hay conexión, se avisa y se puede reintentar).
   ========================================================= */
(function () {
    'use strict';

    const esc = t => String(t ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

    const cacheAlturas = new Map();
    let duelo = null;          // { a, b, alturaA, alturaB, resuelto }
    let rondaActual = 0;       // evita que una respuesta lenta pise un duelo nuevo
    let aciertos = 0, intentos = 0;

    const hayDatos = () => typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length > 1;

    function idParaApi(p) {
        const forma = Array.isArray(p.formas) ? p.formas[0] : null;
        const m = forma && forma.png ? String(forma.png).match(/\/(\d+)\.png$/) : null;
        return m ? m[1] : String(p.id);
    }

    async function alturaDe(p) {
        if (Number.isFinite(Number(p.altura))) return Number(p.altura);
        const id = idParaApi(p);
        if (cacheAlturas.has(id)) return cacheAlturas.get(id);
        const r = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const datos = await r.json();
        const metros = Number(datos.height) / 10;   // PokeAPI: decímetros
        if (!Number.isFinite(metros)) throw new Error('Altura inválida');
        cacheAlturas.set(id, metros);
        return metros;
    }

    function elegirDosAlAzar() {
        const i = Math.floor(Math.random() * pokemonData.length);
        let j;
        do { j = Math.floor(Math.random() * pokemonData.length); } while (j === i);
        return [pokemonData[i], pokemonData[j]];
    }

    function imagenDe(p) {
        const forma = Array.isArray(p.formas) ? p.formas[0] : null;
        if (forma && typeof obtenerImagenUrl === 'function') return obtenerImagenUrl(forma, 'oficial', p.id);
        return '';
    }

    function stats() {
        const a = document.getElementById('minijuego-altura-aciertos');
        const i = document.getElementById('minijuego-altura-intentos');
        if (a) a.textContent = aciertos;
        if (i) i.textContent = intentos;
    }

    function resultado(html, clase) {
        const r = document.getElementById('minijuego-altura-resultado');
        if (r) { r.innerHTML = html; r.className = 'minijuego-resultado ' + (clase || ''); }
    }

    function formatoMetros(m) {
        return (Math.round(m * 10) / 10).toLocaleString('es-DO', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' m';
    }

    function pintarCartas() {
        const cont = document.getElementById('altura-opciones');
        if (!cont || !duelo) return;
        const carta = (p, i) =>
            `<button type="button" class="altura-carta" data-lado="${i}" aria-label="Elegir ${esc(p.nombre)}">` +
            `<img src="${esc(imagenDe(p))}" alt="${esc(p.nombre)}" loading="lazy" decoding="async">` +
            `<strong>${esc(p.nombre)}</strong><span class="altura-dato" aria-hidden="true">? m</span></button>`;
        cont.innerHTML = carta(duelo.a, 0) + '<span class="altura-vs" aria-hidden="true">VS</span>' + carta(duelo.b, 1);
        cont.querySelectorAll('.altura-carta').forEach(b => b.addEventListener('click', () => elegir(Number(b.dataset.lado))));
    }

    async function nuevoDuelo() {
        const cont = document.getElementById('altura-opciones');
        const ver = document.getElementById('minijuego-altura-ver');
        if (!cont) return;
        if (!hayDatos()) { cont.innerHTML = '<p class="nota-sitio">No hay suficientes Pokémon registrados para este minijuego.</p>'; return; }

        const ronda = ++rondaActual;
        duelo = null;
        if (ver) ver.hidden = true;
        resultado('', '');
        cont.innerHTML = '<p class="nota-sitio">⏳ Buscando alturas...</p>';

        try {
            let elegido = null;
            for (let intento = 0; intento < 8 && !elegido; intento++) {
                const [a, b] = elegirDosAlAzar();
                const [alturaA, alturaB] = await Promise.all([alturaDe(a), alturaDe(b)]);
                if (ronda !== rondaActual) return;
                if (Math.abs(alturaA - alturaB) > 0.05) elegido = { a, b, alturaA, alturaB, resuelto: false };
            }
            if (ronda !== rondaActual) return;
            if (!elegido) throw new Error('Sin pareja con alturas distintas');
            duelo = elegido;
            pintarCartas();
        } catch (error) {
            if (ronda !== rondaActual) return;
            console.warn('Minijuego de altura:', error);
            cont.innerHTML = '<p class="nota-sitio">⚠️ No se pudieron cargar las alturas (¿sin conexión?). Pulsa «NUEVO DUELO» para reintentar.</p>';
        }
    }

    function elegir(lado) {
        if (!duelo || duelo.resuelto) return;
        duelo.resuelto = true;
        intentos++;

        const ganadorLado = duelo.alturaA > duelo.alturaB ? 0 : 1;
        const ganador = ganadorLado === 0 ? duelo.a : duelo.b;
        const acierto = lado === ganadorLado;
        if (acierto) aciertos++;
        stats();

        document.querySelectorAll('#altura-opciones .altura-carta').forEach((b, i) => {
            b.disabled = true;
            const dato = b.querySelector('.altura-dato');
            if (dato) dato.textContent = formatoMetros(i === 0 ? duelo.alturaA : duelo.alturaB);
            b.classList.add(i === ganadorLado ? 'altura-correcta' : 'altura-incorrecta');
        });

        resultado(
            acierto
                ? `🎉 <strong>¡CORRECTO!</strong> ${esc(ganador.nombre)} es más alto.`
                : `😵 <strong>¡FALLASTE!</strong> El más alto era <strong>${esc(ganador.nombre)}</strong>.`,
            acierto ? 'correcto' : 'incorrecto revelado'
        );

        const ver = document.getElementById('minijuego-altura-ver');
        if (ver) {
            ver.hidden = false;
            ver.onclick = () => {
                if (typeof irAPokemon === 'function') irAPokemon(pokemonData.indexOf(ganador));
                else if (typeof abrirPokedex === 'function') abrirPokedex();
            };
        }
        if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego('altura', acierto);
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('minijuego-altura-nuevo')?.addEventListener('click', nuevoDuelo);
        stats();
        // Se carga el primer duelo al abrir el Centro de Entrenamiento (evita peticiones innecesarias en la portada).
        let cargado = false;
        const cargarUnaVez = () => { if (!cargado) { cargado = true; nuevoDuelo(); } };
        if (typeof window.abrirCentroEntrenador === 'function') {
            const original = window.abrirCentroEntrenador;
            window.abrirCentroEntrenador = function () {
                const r = original.apply(this, arguments);
                cargarUnaVez();
                return r;
            };
        } else {
            cargarUnaVez();
        }
    });
})();
