/* =========================================================
   🧬 MINIJUEGO: ¿QUIÉN TIENE ESTA COMBINACIÓN DE TIPOS?
   Se otorgan 2 tipos al azar (pueden repetirse, lo que indica
   un Pokémon monotipo). Solo se permite UN intento.
   ========================================================= */
(function () {
    let combinacionActual = null; // { clave, tipos:[a,b], candidatos:[...] }
    let tiposResuelto = false;
    let tiposAciertos = 0, tiposIntentos = 0;

    const norm = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    const esc = t => String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");

    // Tipos normalizados de un Pokémon (ignora notas entre paréntesis).
    function tiposDe(pkmn) {
        const limpio = String(pkmn.tipo || "").replace(/\([^)]*\)/g, "");
        return limpio.split("/").map(t => norm(t)).filter(Boolean);
    }

    // Agrupa los Pokémon registrados según su combinación EXACTA de tipos.
    // Los monotipo se guardan como "tipo|tipo" para poder pedir, p. ej., "Fuego + Fuego".
    function construirCombinaciones() {
        const mapa = new Map();
        if (typeof pokemonData === "undefined") return mapa;

        pokemonData.forEach(p => {
            const tipos = tiposDe(p);
            if (!tipos.length || tipos.length > 2) return;
            const ordenados = [...tipos].sort();
            const clave = ordenados.length === 1 ? `${ordenados[0]}|${ordenados[0]}` : ordenados.join("|");
            if (!mapa.has(clave)) mapa.set(clave, []);
            mapa.get(clave).push(p);
        });
        return mapa;
    }

    function obtenerCombinacionAleatoria() {
        const combinaciones = construirCombinaciones();
        const claves = Array.from(combinaciones.keys());
        if (!claves.length) return null;

        let clave;
        do {
            clave = claves[Math.floor(Math.random() * claves.length)];
        } while (claves.length > 1 && combinacionActual && clave === combinacionActual.clave);

        const [a, b] = clave.split("|");
        return { clave, tipos: [a, b], candidatos: combinaciones.get(clave) };
    }

    function badgeTipo(clave) {
        const info = (typeof TIPO_INFO !== "undefined" && TIPO_INFO[clave]) || null;
        const nombre = info ? info.nombre : clave;
        const color = info ? info.color : "#A8A878";
        const icono = info ? info.icono : "normal";
        const base = (typeof BASE_ICONOS_TIPO !== "undefined") ? BASE_ICONOS_TIPO : "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/";
        return `<span class="badge-tipo" style="--color-tipo:${color}">` +
            `<img src="${base}${icono}.svg" alt="${nombre}" class="icono-tipo" loading="lazy" decoding="async">` +
            `<span>${nombre}</span></span>`;
    }

    function stats() {
        const a = document.getElementById("minijuego-tipos-aciertos"), i = document.getElementById("minijuego-tipos-intentos");
        if (a) a.textContent = tiposAciertos;
        if (i) i.textContent = tiposIntentos;
    }

    function resultado(html, clase) {
        const r = document.getElementById("minijuego-tipos-resultado");
        if (r) { r.innerHTML = html; r.className = "minijuego-resultado " + clase; }
    }

    function verPokemon(pkmn) {
        const b = document.getElementById("minijuego-tipos-ver");
        if (!b || !pkmn) return;
        b.hidden = false;
        b.onclick = () => {
            if (typeof irAPokemon === "function") irAPokemon(pokemonData.indexOf(pkmn));
            else if (typeof abrirPokedex === "function") abrirPokedex();
        };
    }

    function nuevaCombinacion() {
        const badges = document.getElementById("minijuego-tipos-badges");
        const input = document.getElementById("minijuego-tipos-respuesta");
        const ver = document.getElementById("minijuego-tipos-ver");
        if (!badges || !input) return;

        combinacionActual = obtenerCombinacionAleatoria();
        tiposResuelto = false;

        if (!combinacionActual) {
            badges.textContent = "No hay suficientes Pokémon registrados para este minijuego todavía.";
            input.disabled = true;
            return;
        }

        const [a, b] = combinacionActual.tipos;
        badges.innerHTML = badgeTipo(a) + (a === b ? "" : badgeTipo(b));

        input.value = "";
        input.disabled = false;
        resultado("", "");
        if (ver) ver.hidden = true;
        stats();
        input.focus();
    }

    function adivinar() {
        const input = document.getElementById("minijuego-tipos-respuesta");
        if (!input || !combinacionActual || tiposResuelto) return;

        const intento = norm(input.value);
        if (!intento) {
            resultado("✏️ Escribe el nombre de un Pokémon primero.", "aviso");
            input.focus();
            return;
        }

        tiposIntentos++;
        stats();
        tiposResuelto = true;
        input.disabled = true;

        const coincidencia = combinacionActual.candidatos.find(
            p => norm(p.nombre) === intento || String(p.id) === intento
        );

        if (coincidencia) {
            tiposAciertos++;
            stats();
            if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("tipos", true);
            resultado("🎉 <strong>¡CORRECTO!</strong> " + esc(coincidencia.nombre) + " tiene esa combinación de tipos.", "correcto");
            verPokemon(coincidencia);
        } else {
            if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("tipos", false);
            const nombres = combinacionActual.candidatos.map(p => esc(p.nombre)).join(", ");
            resultado(
                "😵 <strong>¡ERA TU ÚNICO INTENTO!</strong><br>Pokémon válido(s): <strong>" + nombres + "</strong>.",
                "incorrecto revelado"
            );
            verPokemon(combinacionActual.candidatos[0]);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        const btnAdivinar = document.getElementById("minijuego-tipos-adivinar");
        const btnNuevo = document.getElementById("minijuego-tipos-nuevo");
        const input = document.getElementById("minijuego-tipos-respuesta");

        if (btnAdivinar) btnAdivinar.addEventListener("click", adivinar);
        if (btnNuevo) btnNuevo.addEventListener("click", nuevaCombinacion);
        if (input) {
            input.addEventListener("keydown", ev => {
                if (ev.key === "Enter") { ev.preventDefault(); adivinar(); }
            });
        }
        setTimeout(nuevaCombinacion, 0);
    });
})();
