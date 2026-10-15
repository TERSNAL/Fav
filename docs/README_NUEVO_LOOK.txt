FAVORITEDEX — NUEVO LOOK (lista de tarjetas + inicio rediseñado)
================================================================
ARCHIVOS NUEVOS
- css/nuevo-look.css  → estilos del inicio y de la lista (se carga al final).
- js/lista-pokedex.js → lógica de la lista (scroll, selección, grito, fondos).

CÓMO FUNCIONA LA LISTA ("VER POKÉMONES")
- Al hacer scroll (rueda, flechas ↑↓, o deslizando en el celular) las tarjetas se ordenan en arco.
- El Pokémon que queda en el centro se muestra a la izquierda: imagen, datos, descripción y tu comentario.
- Fondo: legendarios/singulares con escenario propio (FONDOS_POR_ID de app-core.js) muestran SU escenario;
  el resto muestra partículas de su tipo principal. Es el mismo sistema de las fichas.
- Al detenerte (~0.4 s) suena su grito. Respeta el botón "Sonido".
- Clic en una tarjeta (o Enter / botón "abrir") → abre su ficha completa. En la ficha, el botón "☰ Lista" (o ESC) vuelve.
- Filtros: todos / legendarios / singulares / con formas / favoritos, buscador y orden (pokédex, A–Z, inverso).
- Singulares = lista SINGULARES en lista-pokedex.js (edítala si quieres cambiar quién es "singular").

INICIO
- Mismo contenido de antes, reorganizado: título + botón grande a la izquierda, Pokémon del día, y los accesos
  como tarjetas en arco a la derecha. El menú "Más opciones" ya no hace falta (todo está visible).
- Los textos del panel Admin (título, subtítulo, botón, info) siguen funcionando.

OTROS CAMBIOS
- css/FavoriteDex.css: el estilo global azul de botones ahora excluye los botones con clase "nl-btn".
- js/fondos-particulas.js: también anima las partículas del fondo de la lista.
- sw.js: versión v10 (para que el navegador tome los archivos nuevos).


AJUSTES DE LA PORTADA (octubre 2026)
-------------------------------------
- Todo el bloque izquierdo (cinta, título, subtítulo, botón, Pokémon del día y pie) quedó centrado dentro de su columna.
- Botón "VER POKÉMONES": se quitó la clase antigua "btn-entrar-pokedex" del botón. Sus estilos viejos (borde, fondo azul
  y sombra con !important) se pintaban DEBAJO del botón nuevo y se veía el rectángulo anterior asomando. Ahora solo
  queda el diseño nuevo. (js/admin.js sigue pudiendo cambiar el texto del botón: busca también ".hm-entrar".)
- Pokébola rehecha en CSS puro y bien centrada (antes el botón central estaba desplazado unos píxeles): mitad roja, mitad
  blanca, banda y botón central oscuros. Gira ligeramente al pasar el cursor.
- Pokémon del día: tarjeta más pequeña, centrada y con la estética nueva (fondo en degradado violeta/rosa, botón
  "VER FICHA" en píldora con el mismo degradado del botón principal). Mismas funciones: muestra el Pokémon del día y
  "VER FICHA" abre su ficha. En celular se mantiene en una sola fila.
- Total de Pokémon: el texto del pie siempre usa el total real (600). Si el navegador tenía guardado un texto viejo
  con un número escrito a mano (como "124 Pokémon") se corrige solo al cargar (js/admin.js, cargarConfig).
  El valor de respaldo del HTML también pasó de 200 a 600.
- sw.js: versión v12 (para que el navegador tome los archivos nuevos).


AMPLIACIÓN v5 (octubre 2026): 6 Pokémon nuevos + formas
--------------------------------------------------------
Pokémon agregados (ahora son 606): Código Cero (#772), Cosmog (#789), Cosmoem (#790), Meltan (#808),
Kubfu (#891) y Enamorus (#905). Todos con sprite, gif animado, shiny, arte oficial y grito de PokeAPI.
- Cada uno tiene su propio escenario y partículas (css/fondos-nuevos.css, js/fondos-particulas.js, FONDOS_POR_ID):
  Código Cero (laboratorio con rejilla y barrido de escáner rojo), Cosmog (nebulosa con estrellas), Cosmoem
  (crisálida con órbitas), Meltan (metal fundido y chispas), Kubfu (torre de entrenamiento al amanecer) y
  Enamorus (vientos de primavera con pétalos y corazones).
- Enamorus tiene Forma Tótem (Therian), con escenario más intenso (violeta/magenta) y partículas más rápidas.
- Tauros de Paldea: se sumaron las razas de Fuego y Agua (la de Combate ya estaba). El tipo y las estadísticas de
  cada raza se piden a PokeAPI al cambiar de forma, igual que en las demás formas.
- En la lista nueva: Meltan cuenta como singular (ya estaba en SINGULARES); los demás cuentan como legendarios.
- Textos fijos con el total (descripción, vista previa al compartir, manifest) pasaron a 606; en pantalla el total
  siempre se calcula con los datos reales.
- sw.js: versión v13.
