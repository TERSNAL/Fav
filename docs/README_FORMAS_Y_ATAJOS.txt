FAVORITEDEX — ANÁLISIS DE FORMAS + ATAJOS DE TECLADO PERSONALIZABLES
========================================================================

PARTE 1: ANÁLISIS DE FORMAS FALTANTES
------------------------------------------
Antes de tocar nada, revisé los 598 Pokémon que ya tenías y comparé
contra las listas reales de Mega, Gigantamax y formas regionales
(incluyendo las Megas nuevas y confirmadas de Pokémon Leyendas Z-A que
ya habías agregado en tandas anteriores — esas ya estaban completas,
no encontré ningún hueco ahí salvo uno).

LO QUE FALTABA Y YA AGREGUÉ:

Mega (1 hueco encontrado):
- Manectric (era la única Mega "clásica" de las 48 originales que
  faltaba en toda tu colección).

Gigantamax (15 Pokémon, todos de los que agregamos en las últimas
tandas — por eso no tenían la forma, ya que en su momento las dejé
pendientes a propósito):
Butterfree, Kingler, Garbodor, Orbeetle, Drednaw, Coalossal, Flapple,
Appletun, Sandaconda, Centiskorch, Hatterene, Alcremie, Copperajah,
Duraludon, y Melmetal (a este último tuve que agregarle también la
ficha base completa, porque se me había pasado por completo en la
ampliación de Galar — es el único "olvido" real que encontré).

Formas regionales (19 en total):
- Alola: Raticate, Sandslash, Ninetales, Dugtrio, Persian, Golem, Muk,
  Exeggutor, Marowak.
- Galar: Slowbro, Slowking, Weezing, Stunfisk, Rapidash, Darmanitan.
- Hisui: Electrode, Lilligant, Avalugg.
- Paldea: Tauros (agregué la variante de Combate; existen también las
  de Fuego y Agua, que puedo sumar si las quieres).

Además agregué la ficha de Meowth (no estaba porque solo tenías a su
evolución Persian) para poder incluirle Gigantamax, forma de Alola y
forma de Galar, ya que canónicamente le corresponden las tres.

SOBRE LOS SPRITES DE ESTAS FORMAS NUEVAS
--------------------------------------------
Para estas formas usé el servidor oficial de Pokémon Showdown
(play.pokemonshowdown.com), que nombra sus sprites por el nombre del
Pokémon en vez de un número (por ejemplo "manectric-mega.png"). Lo
preferí sobre adivinar números de PokeAPI porque así no arriesgo
mostrar una imagen rota o equivocada. Si al revisar la web encuentras
alguna imagen que no cargó, dímelo con el nombre del Pokémon y la
reviso puntualmente — con más de 30 formas nuevas es posible que algún
nombre puntual no coincida exactamente con el que usa Showdown.

PARTE 2: ATAJOS DE TECLADO
------------------------------
Se agregaron, tal como pediste:
- ENTER: entra a la Pokédex desde la portada (equivale a pulsar
  "VER POKÉMONES").
- ESC: sale del apartado actual, en este orden — cierra un modal
  abierto, o cierra Comunidad/Centro de Entrenador/Fan Arts/el menú
  desplegable si alguno está abierto, o vuelve a la portada si estás
  dentro de la Pokédex.
- Nuevo botón "⌨️ Personalizar teclas" en el menú "☰ Más opciones":
  abre una ventana donde puedes reasignar CUALQUIER tecla (anterior,
  siguiente, Mega, Gigantamax, Paradoja, forma derivada, entrar y
  salir). Si eliges una tecla que ya estaba en uso, se intercambian
  automáticamente entre las dos acciones. Hay un botón para
  restablecer todo a los valores originales.

Un pequeño efecto secundario honesto: antes, las flechas ↑ y ↓
también servían como alterno de ← y → para cambiar de Pokémon; ahora,
al ser todo personalizable, solo funciona la tecla exacta asignada a
cada acción (por defecto ← y →). Si quieres que ↑/↓ sigan funcionando
también, dímelo y se lo agrego como alterno fijo.

ARCHIVOS TOCADOS
--------------------
- js/pokemon-data.js (formas nuevas + Meowth y Melmetal)
- js/app-core.js (sistema de teclado hecho configurable + ENTER/ESC)
- js/atajos-teclado.js (nuevo: pantalla de personalización de teclas)
- FavoriteDex.html (botón nuevo + modal de atajos)
- css/contenido-nuevo.css (estilos del modal de atajos)
