(function () {
  function buscarPokemon() {
    const input = document.getElementById("pokemonSearchInput");
    if (!input || typeof pokemonData === "undefined") return;

    const termino = input.value.trim().toLowerCase();
    if (!termino) {
      alert("Escribe el nombre o número de un Pokémon.");
      input.focus();
      return;
    }

    const indice = pokemonData.findIndex(p =>
      String(p.id) === termino ||
      p.nombre.toLowerCase() === termino ||
      p.nombre.toLowerCase().includes(termino)
    );

    if (indice === -1) {
      alert("No se encontró ese Pokémon.");
      return;
    }

    // Navegación absoluta a ese Pokémon (irAPokemon). Antes se usaba cambiarSlide(indice), que es un
    // movimiento RELATIVO y solo acertaba cuando la búsqueda se hacía desde el primer Pokémon.
    if (typeof irAPokemon === "function") {
      irAPokemon(indice);
    } else if (typeof mostrarSlide === "function") {
      mostrarSlide(indice);
    } else if (typeof irASlide === "function") {
      irASlide(indice);
    } else if (typeof cambiarSlide === "function") {
      cambiarSlide(indice - (typeof indiceSlide !== "undefined" ? indiceSlide : 0));
    } else if (typeof currentSlide !== "undefined") {
      currentSlide = indice;
      if (typeof actualizarSlide === "function") actualizarSlide();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("pokemonSearchBtn");
    const input = document.getElementById("pokemonSearchInput");
    if (btn) btn.addEventListener("click", buscarPokemon);
    if (input) input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") buscarPokemon();
    });
  });
})();
