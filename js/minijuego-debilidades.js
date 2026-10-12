/* =========================================================
   🛡️ MINIJUEGO: DEBILIDADES Y RESISTENCIAS DE TIPOS
   Se muestra un tipo defensor y un tipo atacante al azar; hay que
   adivinar el efecto (débil / resiste / neutral / inmune) pulsando
   el botón correcto. Solo se permite UN intento por ronda.
   ========================================================= */
(function () {
    'use strict';

    /* Tabla de tipos (ataque -> defensa). Solo se listan los casos
       distintos de x1 (igual que en el análisis del equipo de gimnasio). */
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

    const OPCIONES = [
        { clave: 'debil',    texto: '⚠️ Es débil',        prueba: m => m > 1 },
        { clave: 'resiste',  texto: '🛡️ Resiste',         prueba: m => m > 0 && m < 1 },
        { clave: 'neutral',  texto: '⚪ Neutral (x1)',     prueba: m => m === 1 },
        { clave: 'inmune',   texto: '🚫 Es inmune',        prueba: m => m === 0 }
    ];

    let rondaActual = null; // { defensor, atacante, multiplicador, correcta }
    let resuelto = false;
    let aciertos = 0, intentos = 0;

    function nombreTipo(clave) {
        return (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[clave]) ? TIPO_INFO[clave].nombre : clave;
    }
    function colorTipo(clave) {
        return (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[clave]) ? TIPO_INFO[clave].color : '#888';
    }
    function iconoTipo(clave) {
        return (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[clave]) ? TIPO_INFO[clave].icono : 'normal';
    }
    function baseIconos() {
        return (typeof BASE_ICONOS_TIPO !== 'undefined') ? BASE_ICONOS_TIPO : 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/';
    }
    function badgeTipo(clave) {
        return `<span class="badge-tipo" style="--color-tipo:${colorTipo(clave)}">` +
            `<img src="${baseIconos()}${iconoTipo(clave)}.svg" alt="${nombreTipo(clave)}" class="icono-tipo" loading="lazy" decoding="async">` +
            `<span>${nombreTipo(clave)}</span></span>`;
    }

    function multiplicador(ataque, defensa) {
        const m = TABLA[ataque] && TABLA[ataque][defensa];
        return m === undefined ? 1 : m;
    }

    function respuestaCorrecta(m) {
        return OPCIONES.find(o => o.prueba(m)).clave;
    }

    function stats() {
        const a = document.getElementById('minijuego-debilidades-aciertos');
        const i = document.getElementById('minijuego-debilidades-intentos');
        if (a) a.textContent = aciertos;
        if (i) i.textContent = intentos;
    }

    function resultado(html, clase) {
        const r = document.getElementById('minijuego-debilidades-resultado');
        if (r) { r.innerHTML = html; r.className = 'minijuego-resultado ' + clase; }
    }

    function marcarBotones(claveElegida) {
        const cont = document.getElementById('minijuego-debilidades-opciones');
        if (!cont) return;
        cont.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.clave === rondaActual.correcta) btn.classList.add('opcion-correcta');
            else if (btn.dataset.clave === claveElegida) btn.classList.add('opcion-incorrecta');
        });
    }

    function elegir(clave) {
        if (!rondaActual || resuelto) return;
        resuelto = true;

        intentos++;
        const acierto = clave === rondaActual.correcta;
        if (acierto) aciertos++;
        stats();
        if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego('debilidades', acierto);
        marcarBotones(clave);

        const explicacion = `${badgeTipo(rondaActual.atacante)} contra ${badgeTipo(rondaActual.defensor)} → multiplicador x${rondaActual.multiplicador}`;

        if (acierto) {
            resultado('🎉 <strong>¡CORRECTO!</strong><br>' + explicacion, 'correcto');
        } else {
            const opcionCorrecta = OPCIONES.find(o => o.clave === rondaActual.correcta);
            resultado('😵 <strong>¡ERA TU ÚNICO INTENTO!</strong><br>La respuesta correcta era: <strong>' + opcionCorrecta.texto + '</strong><br>' + explicacion, 'incorrecto revelado');
        }
    }

    function nuevaRonda() {
        const cont = document.getElementById('minijuego-debilidades-opciones');
        const defensorEl = document.getElementById('minijuego-debilidades-defensor');
        const atacanteEl = document.getElementById('minijuego-debilidades-atacante');
        if (!cont || !defensorEl || !atacanteEl) return;

        const defensor = TIPOS[(Math.random() * TIPOS.length) | 0];
        const atacante = TIPOS[(Math.random() * TIPOS.length) | 0];
        const m = multiplicador(atacante, defensor);

        rondaActual = { defensor, atacante, multiplicador: m, correcta: respuestaCorrecta(m) };
        resuelto = false;

        defensorEl.innerHTML = badgeTipo(defensor);
        atacanteEl.innerHTML = badgeTipo(atacante);

        cont.innerHTML = OPCIONES.map(o =>
            `<button type="button" class="minijuego-btn minijuego-btn-secundario opcion-debilidad" data-clave="${o.clave}">${o.texto}</button>`
        ).join('');

        cont.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => elegir(btn.dataset.clave));
        });

        resultado('', '');
        stats();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const btnNuevo = document.getElementById('minijuego-debilidades-nuevo');
        if (btnNuevo) btnNuevo.addEventListener('click', nuevaRonda);
        setTimeout(nuevaRonda, 0);
    });
})();
