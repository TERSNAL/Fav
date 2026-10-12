FAVORITEDEX — CORRECCIÓN: FORMAS NUEVAS EN ARTE OFICIAL Y GIGANTAMAX
========================================================================

QUÉ ESTABA PASANDO (causa real)
------------------------------------
Tu web calcula el "Arte Oficial" y el tamaño visual (el que hace que
Gigantamax se vea gigante) leyendo el número de la Pokédex directamente
del nombre del archivo del sprite normal (por ejemplo, ".../26.png" para
Raichu). Las 6 formas que agregué la vez pasada (Urshifu Lluvia Rauda,
Genesect con sus 4 Drives, Gourgeist en sus 3 tamaños, Basculin Raya
Azul y Sawsbuck/Oricorio en sus formas restantes) usaban imágenes de
Pokémon Showdown con nombre en vez de número (".../urshifu-gmax.png"),
así que ese cálculo fallaba en silencio y la web terminaba mostrando el
arte oficial y el tamaño del Pokémon BASE en lugar de los de la forma.
En pixel art no se notaba porque ese modo sí usa directamente la imagen
de la forma, sin pasar por ese cálculo.

QUÉ ARREGLÉ
---------------
A esas mismas 6 formas les agregué los dos campos que tu propio código
ya sabe leer para estos casos exactos:
- "altura": con la estatura real de cada forma (por ejemplo, Urshifu
  Gigantamax mide 25 m según los juegos), para que el tamaño en pantalla
  y el efecto de "crecimiento" del Gigantamax se calculen bien sin
  depender de ningún número de archivo.
- "oficial" / "oficialShiny": para que el modo Arte Oficial muestre la
  forma correcta en vez de la normal.

UNA ACLARACIÓN HONESTA
---------------------------
Para el modo "Arte Oficial" de estas 6 formas en particular, usé la
misma imagen de Pokémon Showdown como respaldo (en vez del render 3D
tipo caja que ves en Megas/Gigantamax más antiguos), porque no quise
arriesgarme a poner un número de sprite adivinado y que se viera una
imagen rota o equivocada. El contenido ya es 100% correcto (se ve la
forma que corresponde), pero el estilo visual es un poco distinto al
del resto del arte oficial. Si quieres que busque el render oficial
"de verdad" para estas 6 formas específicas, dímelo y lo hago con calma
verificando cada una.

ARCHIVO TOCADO
------------------
- js/pokemon-data.js (únicamente, agregando esos campos a las 15 formas
  nuevas de la entrega anterior). Nada más se modificó.
