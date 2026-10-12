FAVORITEDEX — MEJORAS GENERALES (rendimiento, organización y funciones nuevas)
===============================================================================

RENDIMIENTO
- La imagen principal de cada ficha ahora carga en diferido (loading="lazy"), salvo la primera
  (fetchpriority="high"). Antes el navegador pedía ~600 imágenes al abrir; ahora solo la visible.
- Todos los scripts (incluido Supabase desde el CDN, que bloqueaba la página) usan "defer".
- Service worker (sw.js): la web abre más rápido, funciona sin conexión con lo ya visto y guarda
  sprites/gritos vistos. Para tus archivos usa "red primero", así siempre ves tu última versión.
  Si cambias mucho el proyecto y algo se ve viejo, sube el número de VERSION en sw.js.

ERRORES ARREGLADOS
- 369 Pokémon mostraban "undefined" en "¿Por qué es mi favorito?". Ahora muestran un texto por defecto
  hasta que escribas el tuyo en pokemon-data.js (campo "fav").

COMPARTIR / INSTALAR
- Favicon, meta description, etiquetas Open Graph (vista previa al compartir por WhatsApp, etc.),
  color de tema, manifest.webmanifest e iconos (carpeta icons/). Se puede instalar como app.

ORGANIZACIÓN
- Todos los README pasaron a la carpeta docs/.
- Sin cambios en el CSS ni en pokemon-data.js a propósito (ver "Pendiente").

FUNCIONES NUEVAS
1) Respaldo de progreso: menú "Más opciones" → "Respaldo de mi progreso". Descarga/restaura un .json
   con favoritos, apodos, cuentas locales, comentarios y logros (js/respaldo.js).
2) Ficha extra: botón "Ver estadísticas, habilidades y evolución" en cada ficha. Radar de estadísticas
   base, habilidades (con la oculta marcada) y cadena evolutiva, en español, desde PokeAPI
   (js/ficha-extra.js, css/extras.css). Usa la forma base del Pokémon.
3) Peticiones y reportes a Supabase (opcional): además de guardarse en el navegador, se envía una copia
   a tu proyecto para que TÚ la recibas. Ejecuta sql_envios_supabase.sql (js/envios-supabase.js).

PARA CONECTAR SUPABASE (pendiente de tus datos)
1. Crea el proyecto en supabase.com.
2. Pega Project URL y anon key en supabase-config.js.
3. Ejecuta en el SQL Editor: comunidad_supabase.sql, votacion_semanal_supabase.sql y sql_envios_supabase.sql.
4. Verás las peticiones/reportes en Table Editor → peticiones / reportes.

PENDIENTE (no lo toqué para no arriesgar que algo se rompa sin poder probarlo en un navegador real)
- Dividir app-core.js (150 KB) y pokemon-data.js (721 KB) en módulos/por generación.
- Unificar los 4 CSS (reglas repetidas o que se pisan).
- Tier list personal.
- Panel Admin con seguridad real (requiere Supabase Auth).

FONDOS NUEVOS (legendarios y singulares que faltaban)
------------------------------------------------------
Revisé los legendarios y singulares (míticos) registrados en la web y 23 no tenían escenario.
Cada uno recibió el suyo, con diseño y partículas propios (css/fondos-nuevos.css,
js/fondos-particulas.js y la lista FONDOS_POR_ID de js/app-core.js):

Legendarios: Uxie (anillos de memoria dorados), Mesprit (pétalos y corazones rosas),
Azelf (retícula de diamantes y picos de cristal azul), Tornadus (ciclón de viento),
Thundurus (tormenta violeta con rayo que cae), Landorus (colinas de cultivo doradas),
Silvally (aro arcoíris de Memorias RKS), Urshifu (sol naciente y tinta en el dojo;
Estilo Lluvia Rauda y su Gigantamax: olas y agua), Regieleki (circuito y líneas de velocidad),
Wo-Chien (bosque marchito y talismanes), Chien-Pao (ventisca y filos de hielo),
Ting-Lu (tierra agrietada con fisuras al rojo), Chi-Yu (dos esferas de fuego y lava),
Okidogi (cadenas y charco tóxico), Munkidori (espiral hipnótica rosa), Fezandipiti (abanico de plumas),
Ogerpon (festival del bosque con farolillos), Terapagos (cristal Teracristal hexagonal).
Singulares: Phione (aguas soleadas y arena), Meloetta (pentagrama, foco de luz y notas musicales),
Melmetal (engranaje gigante; Gigantamax en naranja de forja), Zarude (selva con lianas y ojos),
Pecharunt (hilos de marioneta y mochis venenosos).
Arceus ya tenía su fondo divino propio.

Dos estilos de partícula nuevos: "corazon" (Mesprit) y "nota" (Meloetta, notas musicales).
Los Pokémon con fondo propio no muestran las partículas de tipo genéricas.

NOTA: los legendarios que la web todavía no tiene registrados (Type: Null, Cosmog/Cosmoem, Kubfu,
Enamorus, Meltan) no tienen fondo porque no están en pokemon-data.js. Si los agregas, solo hay que
sumarlos a FONDOS_POR_ID y crear su escenario.


CARGA BAJO DEMANDA DE LAS FICHAS (rendimiento)
-----------------------------------------------
Antes, al abrir la web se construían los 600 slides completos (miles de elementos e imágenes).
Ahora se crean 600 cascarones vacíos y el contenido de cada ficha se construye SOLO la primera vez que se
muestra (función hidratarSlide en js/app-core.js). Al abrir se construye 1 ficha en vez de 600.
- Navegar (flechas, buscador, favoritos, atajos de forma) construye la ficha justo antes de mostrarla.
- Una vez construida, la ficha se conserva (no se vuelve a crear al regresar a ella).
- Red de seguridad: si algún código muestra una ficha vacía, se construye al instante.
- Al construirse, cada ficha lanza el evento "slide-hidratado" en #contenedor-slides. Los módulos que
  completan la ficha (curiosidades, apodos, estadísticas extra, favoritos, comentarios) lo escuchan y
  trabajan solo sobre esa ficha. Si creas un módulo nuevo que agregue cosas a las fichas, escucha ese
  evento en vez de recorrer todas las fichas al inicio.
- El resto de la web no cambia: mismos textos, fondos, formas y minijuegos.


FORMAS NUEVAS (con su propio fondo)
------------------------------------
Agregadas a pokemon-data.js, con arte oficial, sprite, grito y altura de PokeAPI:
- Tornadus, Thundurus y Landorus: Forma Tótem (Therian). Fondo: tormenta más violenta en cada uno.
- Meloetta: Forma Danza (escenario rojo de combate).
- Ogerpon: Máscara del Pozo (azul/agua), del Hogar (rojo/fuego) y del Cimiento (gris/piedra).
- Terapagos: Forma Teracristal (cueva de cristal) y Forma Astral (cosmos arcoíris con estrellas).
Cada forma tiene partículas propias (variantes en js/fondos-particulas.js) y su escenario en css/fondos-nuevos.css.
Los nombres en español de las formas (p. ej. "Máscara del Pozo") son descriptivos; si prefieres otros,
cámbialos en el campo "cap" y en obtenerVarianteFondo (js/app-core.js) usa el mismo texto en minúsculas.
Ogerpon y Terapagos no tienen animación 3D en PokeAPI: en "Ver Sprite 3D" muestran la imagen fija.

📅 RETO DIARIO (Centro de Entrenamiento, primera tarjeta)
----------------------------------------------------------
Un Pokémon misterioso por día, el mismo para todos los que abran la web ese día.
- 6 intentos. Cada fallo abre una pista: generación, tipo, inicial y letras, descripción (sin el nombre),
  silueta y grito. Solo cuentan nombres que existan en tu Pokédex (con lista de sugerencias).
- Racha de días seguidos, mejor racha y total resuelto. Si un día no se juega, la racha vuelve a 0.
- Botón "Compartir resultado" (cuadritos 🟩🟥 + racha) y cuenta atrás al próximo reto.
- El orden es una baraja de todos tus Pokémon: no se repite ninguno hasta pasar por todos.
- Se guarda en este navegador (clave favoritedex_reto_diario_v1) y entra en el Respaldo de progreso.
- Suma a los logros de minijuegos. Módulo: js/reto-diario.js.
- Para probar otro día desde la consola del navegador: window.__retoDiarioFecha='2026-12-25'; retoDiario.iniciar()
  (borra ese valor o recarga para volver a la fecha real).


TIPOS Y ESTADÍSTICAS AL CAMBIAR DE FORMA (Mega, regional, Primigenia...)
--------------------------------------------------------------------------
Ya tenías construida la base de este sistema (en js/app-core.js: identificadorPokeApiForma /
resolverDatosFormaPokeApi / actualizarTipoVisible): al cambiar de forma, la web consulta a
PokeAPI el tipo real y las estadísticas base de ESA forma (no siempre las del Pokémon base) y
actualiza el texto "Tipo:", el color de las partículas de fondo y la Ficha Extra. Lo probé a
fondo con casos reales (Mega Charizard X → Fuego/Dragón, Mega Gyarados → Agua/Siniestro, Mega
Diancie → mismo tipo pero stats distintas, Ninetales de Alola → Hielo/Hada) y funciona bien en
los tres: tipo, partículas y estadísticas.

Encontré y arreglé un caso que sí fallaba: unas pocas Megas de creación propia (no existen en
los juegos, así que PokeAPI no tiene ningún dato de ellas, por ejemplo Mega-Absol Z) se quedaban
mostrando para siempre "No se pudieron cargar los datos" en la Ficha Extra en vez de mostrar las
estadísticas del Pokémon base (el tipo sí caía bien de vuelta al base; solo la Ficha Extra se
quedaba atascada). Ahora, cuando ya se sabe que una forma no tiene datos propios en PokeAPI, la
Ficha Extra usa directamente las estadísticas del Pokémon base (función idPokeApiEfectivo).

NOTA: el análisis de debilidades del equipo de gimnasio (js/equipo-analisis.js) sigue usando a
propósito el tipo BASE de cada Pokémon del equipo, no el de la forma activa (así lo dice su
propio comentario). Si quieres que también tenga en cuenta Megas/formas del equipo, dímelo:
requiere guardar qué forma se agregó, no solo el Pokémon.


⚔️ COMBATE 1 CONTRA 1 (Centro de Entrenamiento, tercera tarjeta)
-------------------------------------------------------------------
Elige dos Pokémon de tu Pokédex (con la forma que quieras: Mega, regional, Gigantamax...) y
simula un combate por turnos:
- Usa el tipo y las estadísticas base REALES de cada forma (los mismos datos que ya corrige la
  Ficha Extra), pedidos a PokeAPI. El más rápido golpea primero.
- Cada golpe usa el mejor tipo/categoría (física o especial) del atacante contra el defensor,
  con ventaja/desventaja de tipo, bonificación STAB y una pizca de aleatoriedad y críticos.
- Barras de vida animadas y un registro de combate turno a turno.
- Si ninguno puede dañar al otro (p. ej. Normal contra Fantasma, inmunes entre sí), el combate
  termina en empate en vez de quedarse calculando para siempre.
- No guarda historial ni resultados: es solo para divertirse. Cuenta para los logros generales
  de minijuegos. Módulo: js/combate.js.
- Si algún Pokémon no tiene datos en PokeAPI (Mega de creación propia), el combate avisa que no
  se pudo preparar en vez de romperse.


✨ CONTADOR DE CAZA SHINY (en cada ficha + resumen en el Centro de Entrenamiento)
-----------------------------------------------------------------------------------
Ya tenías un botón para VER un Pokémon en shiny (interruptor general "Modo Shiny"); esto es
distinto: un contador personal de intentos, como llevar la cuenta real de tu cacería.
- En cada ficha, debajo de la Ficha Extra: sprite shiny, botones +/− de encuentros y un botón
  para marcarlo como "¡Conseguido!" (guarda la fecha). Botón para reiniciar ese Pokémon.
  El sprite shiny se actualiza si cambias de forma (Mega, regional...).
- Resumen en el Centro de Entrenamiento (tarjeta después del Combate 1 contra 1): total de
  shinies conseguidos, encuentros totales, y cuál es "el más buscado" (más encuentros).
- Se guarda en este navegador (clave favoritedex_caza_shiny) y entra en el Respaldo de progreso.
  Módulo: js/caza-shiny.js.

🖼️ COMPARTIR EL EQUIPO COMO IMAGEN
-------------------------------------
Ya la tenías construida (botón "🖼️ DESCARGAR IMAGEN" junto al equipo de gimnasio, en
js/equipo-analisis.js): genera una tarjeta con los 4 miembros, su forma/Mega, tipos y apodo, y
la descarga como PNG. La probé y funciona bien; no le hice cambios.
