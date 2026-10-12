/* =========================================================
   🎮 MINIJUEGO: ¿QUIÉN ES ESTE POKÉMON?
   Usa directamente las descripciones de pokemonData.
   ========================================================= */
(function () {
    let minijuegoPokemonActual = null;
    let minijuegoAciertos = 0;
    let minijuegoIntentos = 0;
    let minijuegoFallos = 0;

    function normalizarTexto(texto) {
        return String(texto || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    }

    function obtenerPokemonMinijuego() {
        if (typeof pokemonData === "undefined" || !pokemonData.length) return null;

        // Evita repetir el mismo Pokémon consecutivamente.
        let pokemon;
        do {
            pokemon = pokemonData[Math.floor(Math.random() * pokemonData.length)];
        } while (
            pokemonData.length > 1 &&
            minijuegoPokemonActual &&
            pokemon.id === minijuegoPokemonActual.id
        );

        return pokemon;
    }

    function iniciarMinijuego() {
        const descripcion = document.getElementById("minijuego-descripcion");
        const respuesta = document.getElementById("minijuego-respuesta");
        const resultado = document.getElementById("minijuego-resultado");
        const verPokemon = document.getElementById("minijuego-ver-pokemon");

        if (!descripcion || !respuesta || !resultado) return;

        minijuegoPokemonActual = obtenerPokemonMinijuego();
        minijuegoFallos = 0;
        if (!minijuegoPokemonActual) return;

        descripcion.textContent =
            minijuegoPokemonActual.desc ||
            "Este Pokémon tiene una historia misteriosa... ¡intenta descubrirlo!";

        respuesta.value = "";
        respuesta.disabled = false;
        resultado.textContent = "";
        resultado.className = "minijuego-resultado";
        if (verPokemon) verPokemon.hidden = true;

        respuesta.focus();
    }

    function comprobarRespuesta() {
        const respuesta = document.getElementById("minijuego-respuesta");
        const resultado = document.getElementById("minijuego-resultado");
        const verPokemon = document.getElementById("minijuego-ver-pokemon");

        if (!respuesta || !resultado || !minijuegoPokemonActual) return;

        const intento = normalizarTexto(respuesta.value);

        if (!intento) {
            resultado.textContent = "✏️ Escribe el nombre de un Pokémon primero.";
            resultado.className = "minijuego-resultado aviso";
            respuesta.focus();
            return;
        }

        minijuegoIntentos++;
        document.getElementById("minijuego-intentos").textContent = minijuegoIntentos;

        const nombreCorrecto = normalizarTexto(minijuegoPokemonActual.nombre);
        const numeroCorrecto = String(minijuegoPokemonActual.id);

        if (intento === nombreCorrecto || intento === numeroCorrecto) {
            minijuegoAciertos++;
            document.getElementById("minijuego-aciertos").textContent = minijuegoAciertos;
            if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("descripcion", true);

            resultado.innerHTML =
                "🎉 <strong>¡CORRECTO!</strong> Era " +
                escaparMinijuego(minijuegoPokemonActual.nombre) +
                ".";

            resultado.className = "minijuego-resultado correcto";
            respuesta.disabled = true;

            if (verPokemon) {
                verPokemon.hidden = false;
                verPokemon.onclick = function () {
                    if (typeof irAPokemon === "function") {
                        irAPokemon(pokemonData.indexOf(minijuegoPokemonActual));
                    } else if (typeof abrirPokedex === "function") {
                        abrirPokedex();
                    }
                };
            }
        } else {
            minijuegoFallos++;

            if (minijuegoFallos >= 3) {
                if (window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("descripcion", false);
                resultado.innerHTML =
                    "😵 <strong>¡SE ACABARON LOS INTENTOS!</strong><br>" +
                    "El Pokémon era <strong>" +
                    escaparMinijuego(minijuegoPokemonActual.nombre) +
                    "</strong>.";
                resultado.className = "minijuego-resultado incorrecto revelado";
                respuesta.disabled = true;

                if (verPokemon) {
                    verPokemon.hidden = false;
                    verPokemon.onclick = function () {
                        if (typeof irAPokemon === "function") {
                            irAPokemon(pokemonData.indexOf(minijuegoPokemonActual));
                        } else if (typeof abrirPokedex === "function") {
                            abrirPokedex();
                        }
                    };
                }
            } else {
                const restantes = 3 - minijuegoFallos;
                resultado.textContent =
                    "❌ No es ese Pokémon. ¡Vuelve a intentarlo! Te quedan " +
                    restantes + (restantes === 1 ? " intento." : " intentos.");
                resultado.className = "minijuego-resultado incorrecto";
                respuesta.select();
            }
        }
    }

    function escaparMinijuego(texto) {
        return String(texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    document.addEventListener("DOMContentLoaded", function () {
        const btnAdivinar = document.getElementById("minijuego-adivinar");
        const btnNuevo = document.getElementById("minijuego-nueva-pista");
        const input = document.getElementById("minijuego-respuesta");

        if (btnAdivinar) btnAdivinar.addEventListener("click", comprobarRespuesta);
        if (btnNuevo) btnNuevo.addEventListener("click", iniciarMinijuego);

        if (input) {
            input.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    comprobarRespuesta();
                }
            });
        }

        // Esperamos a que pokemonData ya esté disponible.
        setTimeout(iniciarMinijuego, 0);
    });
})();
