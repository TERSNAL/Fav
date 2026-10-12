FAVORITEDEX — CORRECCIÓN GENERAL: ARTE OFICIAL Y TAMAÑO EN TODAS LAS FORMAS
============================================================================

QUÉ ESTABA PASANDO (la causa real, esta vez completa)
------------------------------------------------------
La corrección anterior (README_CORRECCION_FORMAS.txt) arregló 6 grupos de
formas a mano, pero el problema de fondo seguía sin tocarse: tu web calcula
el Arte Oficial y la altura (la que hace crecer a Gigantamax) leyendo el
número de Pokédex directamente del nombre del archivo del sprite normal.

Eso funciona con sprites tipo ".../26.png", pero NO con los sprites de
Pokémon Showdown que usan un nombre en vez de un número, como
".../raticate-alola.png" o ".../melmetal-gmax.png". Revisé tu
pokemon-data.js completo y encontré 38 formas en ese caso (formas de Alola,
Galar, Hisui y Paldea, Gigantamax y algunas Megas) que NO estaban en la
lista de las 6 ya corregidas. En todas ellas, el cálculo fallaba en
silencio y la web mostraba el arte oficial y el tamaño del Pokémon BASE en
vez de los de la forma. En pixel art no se notaba, igual que antes, porque
ese modo sí usa la imagen de la forma directamente.

QUÉ ARREGLÉ (esta vez en el propio código, no forma por forma)
----------------------------------------------------------------
En vez de seguir agregando a mano el arte y la altura de cada forma nueva
(lo cual iba a repetirse cada vez que agregues una Mega o un Gigantamax
más), arreglé la causa: ahora, cuando la web detecta una forma con sprite
de Showdown que todavía no tiene su propio arte oficial, consulta
automáticamente a PokeAPI por el NOMBRE de esa forma (ej. "raticate-alola")
y de ahí saca tanto el arte oficial real como la altura real, y los
guarda en la propia forma para no volver a consultarlos.

Esto corrige de una sola vez el Arte Oficial y el tamaño de Gigantamax de
las 38 formas que faltaban, y además queda resuelto para cualquier forma
nueva que agregues en el futuro con este mismo estilo de sprite: no hará
falta que te vuelva a tocar el código ni que le agregue los campos a mano.

Dos casos especiales que sí necesitaban ayuda extra:
- "Basculin Raya Azul" y el "Tauros de Paldea (Combate)" usan un nombre de
  archivo distinto al que usa PokeAPI para esa misma forma, así que agregué
  una pequeña lista interna que traduce esos dos nombres.
- "Mega-Froslass" no existe oficialmente en los juegos (es un toque propio
  de fan, como ya tenías con Mega-Victreebel o Mega-Starmie), así que
  PokeAPI no tiene ningún dato de ella. Para esa, se sigue usando su propio
  sprite de Showdown como arte de respaldo, tal como se hizo con las 6
  formas de la corrección anterior.

UNA ACLARACIÓN HONESTA
-----------------------
Un par de formas con modos "Standard/Zen" (como Darmanitan de Galar) podrían
usar en PokeAPI un nombre con un sufijo que no pude confirmar sin acceso a
internet en este momento; dejé un intento adicional automático para ese
caso, pero si al probar la web ves alguna forma puntual que todavía no
muestra su arte oficial, dime cuál es exactamente y la reviso con calma.

ARCHIVO TOCADO
------------------
- js/app-core.js (únicamente). No toqué js/pokemon-data.js ni nada más de
  tu zip.
