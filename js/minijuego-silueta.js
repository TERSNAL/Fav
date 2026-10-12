/* =========================================================
   🌑 MINIJUEGO: ¿QUIÉN ES ESE POKÉMON? (SILUETA)
   Se muestra la silueta (en negro) de un Pokémon al azar y hay que
   adivinar su nombre. Solo se permite UN intento por ronda.
   ========================================================= */
(function () {
    'use strict';

    let pokemonActual = null;
    let resuelto = false;
    let aciertos = 0, intentos = 0;

    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');

    function pokemonAleatorio() {
        if (typeof pokemonData === 'undefined' || !pokemonData.length) return null;
        let p;
        do { p = pokemonData[Math.floor(Math.random() * pokemonData.length)]; }
        while (pokemonData.length > 1 && pokemonActual && p.id === pokemonActual.id);
        return p;
    }

    function imagenDe(p) {
        const forma = Array.isArray(p.formas) ? p.formas[0] : null;
        if (forma && forma.oficial) return forma.oficial;
        if (forma && forma.png) return forma.png;
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`;
    }

    function stats() {
        const a = document.getElementById('minijuego-silueta-aciertos');
        const i = document.getElementById('minijuego-silueta-intentos');
        if (a) a.textContent = aciertos;
        if (i) i.textContent = intentos;
    }

    function resultado(html, clase) {
        const r = document.getElementById('minijuego-silueta-resultado');
        if (r) { r.innerHTML = html; r.className = 'minijuego-resultado ' + clase; }
    }

    function verPokemon() {
        const b = document.getElementById('minijuego-silueta-ver');
        if (!b || !pokemonActual) return;
        b.hidden = false;
        b.onclick = () => {
            if (typeof irAPokemon === 'function') irAPokemon(pokemonData.indexOf(pokemonActual));
            else if (typeof abrirPokedex === 'function') abrirPokedex();
        };
    }

    function revelar() {
        const img = document.getElementById('minijuego-silueta-img');
        if (img) img.classList.add('silueta-revelada');
    }

    function nuevo() {
        const img = document.getElementById('minijuego-silueta-img');
        const input = document.getElementById('minijuego-silueta-respuesta');
        const ver = document.getElementById('minijuego-silueta-ver');
        if (!img || !input) return;

        pokemonActual = pokemonAleatorio();
        resuelto = false;
        if (!pokemonActual) return;

        img.classList.remove('silueta-revelada');
        img.src = imagenDe(pokemonActual);
        img.alt = 'Silueta de un Pokémon';

        input.value = '';
        input.disabled = false;
        resultado('', '');
        if (ver) ver.hidden = true;
        stats();
        input.focus();
    }

    function adivinar() {
        const input = document.getElementById('minijuego-silueta-respuesta');
        if (!input || !pokemonActual || resuelto) return;

        const intento = norm(input.value);
        if (!intento) {
            resultado('✏️ Escribe el nombre de un Pokémon primero.', 'aviso');
            input.focus();
            return;
        }

        intentos++;
        stats();
        resuelto = true;
        input.disabled = true;
        revelar();

        if (intento === norm(pokemonActual.nombre)) {
            aciertos++;
            stats();
            if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego('silueta', true);
            resultado('🎉 <strong>¡CORRECTO!</strong> Era ' + esc(pokemonActual.nombre) + '.', 'correcto');
        } else {
            if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego('silueta', false);
            resultado('😵 <strong>¡ERA TU ÚNICO INTENTO!</strong><br>El Pokémon era <strong>' + esc(pokemonActual.nombre) + '</strong>.', 'incorrecto revelado');
        }
        verPokemon();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const btnAdivinar = document.getElementById('minijuego-silueta-adivinar');
        const btnNuevo = document.getElementById('minijuego-silueta-nuevo');
        const input = document.getElementById('minijuego-silueta-respuesta');

        if (btnAdivinar) btnAdivinar.addEventListener('click', adivinar);
        if (btnNuevo) btnNuevo.addEventListener('click', nuevo);
        if (input) {
            input.addEventListener('keydown', ev => {
                if (ev.key === 'Enter') { ev.preventDefault(); adivinar(); }
            });
        }
        setTimeout(nuevo, 0);
    });
})();
