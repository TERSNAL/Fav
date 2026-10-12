let indiceSlide = 0;
    let esShiny = false;
    // 👤 Sesión activa. Se declara aquí (al inicio) porque actualizarCuentaUI() se ejecuta durante la carga,
    // antes de llegar a la sección de cuentas; declararla más abajo provocaba un error que detenía el resto del script.
    let usuarioActual = localStorage.getItem('pokedex_usuario_actual') || '';
    const reproductorAudio = new Audio();

// 🔊 Audios personalizados
// Se admiten archivos en /audio/ y, como respaldo, junto al HTML.
function crearAudioConFallback(nombreArchivo) {
    const audio = new Audio();
    audio.preload = "auto";
    const rutas = [`./audio/${nombreArchivo}`, `./${nombreArchivo}`];
    let indiceRuta = 0;

    const intentarSiguienteRuta = () => {
        if (indiceRuta >= rutas.length) return;
        audio.src = new URL(rutas[indiceRuta], document.baseURI).href;
        indiceRuta += 1;
        audio.load();
    };

    audio.addEventListener('error', () => {
        if (indiceRuta < rutas.length) intentarSiguienteRuta();
    });

    intentarSiguienteRuta();
    return audio;
}

const audioPlink = crearAudioConFallback("plink.mp3");
const audioMega = crearAudioConFallback("mega-evolution.mp3");

// 🔊 El sonido "plink" suena en TODOS los botones de la página.
document.addEventListener('click', function (e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    try {
        const clon = audioPlink.cloneNode();
        clon.volume = 0.45;
        clon.play().catch(() => {});
    } catch (err) {
        console.log("No se pudo reproducir plink.mp3:", err);
    }
}, true);

    // =========================================================
    // 🏠 PANTALLA DE INICIO DINÁMICA Y ALEATORIA
    // El fondo elige cualquiera de los Pokémon registrados al azar.
    // Cada aparición tiene una pequeña probabilidad de ser Shiny.
    // =========================================================

    let ultimoPokemonFondo = -1;
    let capaFondoInicio = 1;
    let temporizadorFondoInicio = null;

    // ✨ 5% de probabilidad de que el Pokémon del fondo sea Shiny.
    const PROBABILIDAD_SHINY_FONDO = 0.05;

    // 🎲 Elige un Pokémon aleatorio sin repetir el anterior.
    function obtenerPokemonAleatorio() {
        if (pokemonData.length === 0) return null;

        let nuevoIndice;

        do {
            nuevoIndice = Math.floor(Math.random() * pokemonData.length);
        } while (
            pokemonData.length > 1 &&
            nuevoIndice === ultimoPokemonFondo
        );

        ultimoPokemonFondo = nuevoIndice;

        return pokemonData[nuevoIndice];
    }

    // ✨ Decide si esta aparición será normal o Shiny.
    function obtenerImagenFondoAleatoria(pokemon) {
        const esShinyFondo = Math.random() < PROBABILIDAD_SHINY_FONDO;

        if (esShinyFondo && pokemon.formas[0].pngShiny) {
            return pokemon.formas[0].pngShiny;
        }

        return pokemon.formas[0].png;
    }

    // 🔄 Cambia el Pokémon del fondo mediante crossfade.
    function actualizarFondoInicio() {
        const capaActual = document.getElementById(
            `fondo-inicio-${capaFondoInicio}`
        );

        const capaSiguiente = document.getElementById(
            `fondo-inicio-${capaFondoInicio === 1 ? 2 : 1}`
        );

        if (!capaActual || !capaSiguiente || pokemonData.length === 0) return;

        // 🎲 Pokémon completamente aleatorio.
        const pokemon = obtenerPokemonAleatorio();

        if (!pokemon) return;

        // ✨ Puede ser normal o Shiny.
        const imagen = obtenerImagenFondoAleatoria(pokemon);

        // Preparamos el nuevo patrón en la capa que está oculta.
        capaSiguiente.style.backgroundImage = `url("${imagen}")`;

        // Aparece suavemente mientras desaparece el anterior.
        capaSiguiente.classList.add('visible');
        capaActual.classList.remove('visible');

        // 🔄 Intercambiamos las capas.
        capaFondoInicio = capaFondoInicio === 1 ? 2 : 1;
    }

    // ▶️ Inicia/reinicia el fondo de la pantalla principal.
    function iniciarFondoInicio() {
        if (temporizadorFondoInicio) {
            clearInterval(temporizadorFondoInicio);
        }

        const primeraCapa = document.getElementById('fondo-inicio-1');
        const segundaCapa = document.getElementById('fondo-inicio-2');

        if (
            !primeraCapa ||
            !segundaCapa ||
            pokemonData.length === 0
        ) {
            return;
        }

        // Reiniciamos el estado visual de ambas capas.
        primeraCapa.classList.remove('visible');
        segundaCapa.classList.remove('visible');
        segundaCapa.style.backgroundImage = 'none';

        // 🎲 Primer Pokémon aleatorio.
        const pokemon = obtenerPokemonAleatorio();

        if (!pokemon) return;

        // ✨ También puede aparecer Shiny desde el inicio.
        const imagen = obtenerImagenFondoAleatoria(pokemon);

        primeraCapa.style.backgroundImage = `url("${imagen}")`;
        primeraCapa.classList.add('visible');

        capaFondoInicio = 1;

        // ⏱️ Cambia cada 3.5 segundos.
        temporizadorFondoInicio = setInterval(
            actualizarFondoInicio,
            3500
        );
    }

    function abrirPokedex() {
        document.body.classList.remove('en-inicio');
        document.body.classList.add('en-pokedex');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // 🔊 Al entrar al apartado de Pokémon, el que esté visible hace su grito solo.
        reproducirGrito();
    }

    function volverInicio() {
        document.body.classList.remove('en-pokedex');
        document.body.classList.add('en-inicio');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        iniciarFondoInicio();
    }

    // Por defecto inicia en 'oficial' (Arte Oficial)
    const estadoVisual = new Array(pokemonData.length).fill('oficial'); // 'oficial', '3d', 'pixel'
    const estadoFormas = new Array(pokemonData.length).fill(0);

    // =========================================================
    // 🏷️ LOGOS DE TIPO (en vez de texto plano)
    // =========================================================
    const BASE_ICONOS_TIPO = 'https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/';

    const TIPO_INFO = {
        normal:    { nombre: 'Normal',    color: '#A8A878', icono: 'normal'    },
        fuego:     { nombre: 'Fuego',     color: '#F08030', icono: 'fire'      },
        agua:      { nombre: 'Agua',      color: '#6890F0', icono: 'water'     },
        electrico: { nombre: 'Eléctrico', color: '#F8D030', icono: 'electric'  },
        planta:    { nombre: 'Planta',    color: '#78C850', icono: 'grass'     },
        hielo:     { nombre: 'Hielo',     color: '#98D8D8', icono: 'ice'       },
        lucha:     { nombre: 'Lucha',     color: '#C03028', icono: 'fighting'  },
        veneno:    { nombre: 'Veneno',    color: '#A040A0', icono: 'poison'    },
        tierra:    { nombre: 'Tierra',    color: '#E0C068', icono: 'ground'    },
        volador:   { nombre: 'Volador',   color: '#A890F0', icono: 'flying'    },
        psiquico:  { nombre: 'Psíquico',  color: '#F85888', icono: 'psychic'   },
        bicho:     { nombre: 'Bicho',     color: '#A8B820', icono: 'bug'       },
        roca:      { nombre: 'Roca',      color: '#B8A038', icono: 'rock'      },
        fantasma:  { nombre: 'Fantasma',  color: '#705898', icono: 'ghost'     },
        dragon:    { nombre: 'Dragón',    color: '#7038F8', icono: 'dragon'    },
        siniestro: { nombre: 'Siniestro', color: '#705848', icono: 'dark'      },
        acero:     { nombre: 'Acero',     color: '#B8B8D0', icono: 'steel'     },
        hada:      { nombre: 'Hada',      color: '#EE99AC', icono: 'fairy'     }
    };

    // Inglés (como lo da PokeAPI) -> Español, reutilizando el "icono" de arriba.
    const MAPA_TIPO_INGLES_ESPANOL = Object.fromEntries(Object.values(TIPO_INFO).map(t => [t.icono, t.nombre]));

    function normalizarTexto(txt) {
        return txt
            .trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ''); // quita acentos
    }

    // Convierte "Planta / Veneno" o "Normal (Divino)" en insignias con logo por tipo
    function renderTipos(tipoStr) {
        if (!tipoStr) return '';

        const notaMatch = tipoStr.match(/\(([^)]+)\)/);
        const nota = notaMatch ? notaMatch[1] : '';
        const limpio = tipoStr.replace(/\([^)]*\)/g, '').trim();

        const badges = limpio
            .split('/')
            .map(p => p.trim())
            .filter(Boolean)
            .map(parte => {
                const clave = normalizarTexto(parte);
                const info = TIPO_INFO[clave];
                const color = info ? info.color : '#A8A878';
                const icono = info ? info.icono : 'normal';
                const nombre = info ? info.nombre : parte;
                return `<span class="badge-tipo" role="button" tabindex="0" title="Ver Pokémon de tipo ${nombre}" style="--color-tipo:${color}" onclick="filtrarPorTipo('${clave}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();filtrarPorTipo('${clave}');}">` +
                    `<img src="${BASE_ICONOS_TIPO}${icono}.svg" alt="${nombre}" class="icono-tipo" loading="lazy" decoding="async">` +
                    `<span>${nombre}</span>` +
                `</span>`;
            })
            .join('');

        return `<span class="tipos-badges">${badges}</span>` +
            (nota ? ` <em class="tipo-nota">(${nota})</em>` : '');
    }

    // =========================================================
    // 🌟 ICONOS PARA BOTONES DE TRANSFORMACIÓN
    // (Megaevolución, Gigantamax y Regresión Primigenia)
    // =========================================================
    const ICONO_MEGA = 'data:image/png;base64,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'; // Logo propio subido por el usuario
    const ICONO_GIGANTAMAX = 'data:image/png;base64,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'; // Logo propio subido por el usuario
    const ICONO_PRIMAL_GROUDON = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/red-orb.png';
    const ICONO_PRIMAL_KYOGRE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/blue-orb.png';

    // =========================================================
    // 🔴✨ AURA DE TRANSFORMACIÓN (Gigantamax / Megaevolución)
    // Un aura de color rodea el sprite dentro de su propio marco.
    // - Gigantamax: aura roja (el color de la energía Gigantamax).
    // - Mega: aura con los colores de su Mega Piedra / logo de Mega
    //   Evolución, distinta para cada Pokémon.
    // Excepciones pedidas: Mega-Rayquaza y las Mega de Mewtwo (X/Y)
    // no reciben esta aura de color (conservan su propio efecto).
    // =========================================================
    const COLOR_AURA_GIGANTAMAX = '#ff2d2d';
    const IDS_SIN_AURA_MEGA = new Set([384, 150, 380, 381, 719, 485, 491, 718, 801, 807]); // Rayquaza, Mewtwo, Latias, Latios, Diancie, Heatran, Darkrai, Zygarde, Magearna y Zeraora (legendarios/míticos con Mega: conservan su propio fondo, que se intensifica en vez de recibir el aura genérica)

    // Colores aproximados de la Mega Piedra / símbolo de Mega Evolución
    // de cada Pokémon Mega presente en esta Pokédex.
    const COLOR_MEGA_POR_ID = {
        3: '#5fb257',              // Venusaurita — verde
        6: '#ff8a1f',              // Charizardita (por defecto Y — naranja); X se ajusta abajo
        9: '#4f8fe0',              // Blastoisinita — azul
        18: '#8fa3b8',             // Pidgeotita — gris azulado
        65: '#e8c74a',             // Alakazamita — dorado
        80: '#ff9ac4',             // Slowbronita — rosa
        94: '#8a4fd6',             // Gengarita — morado
        130: '#3f7fd6',            // Gyaradosita — azul
        149: '#f0a35a',            // "Dragonita" (forma especial de esta Pokédex) — ámbar
        208: '#9fb89a',            // Steelixita — gris verdoso
        212: '#d64f4f',            // Scizorita — rojo acero
        214: '#7fae4a',            // Heracronita — verde
        229: '#a83232',            // Houndoominita — rojo oscuro
        248: '#5a6b3a',            // Tyranitarita — verde musgo
        254: '#3fae5a',            // Sceptilita — verde
        257: '#e0522a',            // Blazikenita — rojo anaranjado
        260: '#3f6fae',            // Swampertita — azul
        282: '#6fdba0',            // Gardevoirita — verde agua
        306: '#9aa0a8',            // Aggronita — gris acero
        319: '#5a7a9a',            // Sharpedonita — azul grisáceo
        334: '#e07fc0',            // Altarianita — rosa
        359: '#4a4a52',            // Absolita — gris oscuro
        362: '#a8e0ff',            // Glalitita — celeste
        373: '#4a6fd6',            // Salamencita — azul
        376: '#9fb8d6',            // Metagrossita — plateado azulado
        428: '#ff9ac0',            // Lopunnita — rosa
        445: '#4a7fc0',            // Garchompita — azul
        448: '#3a5a8a',            // Lucarionita — azul acero
        475: '#4fae7a',            // Galladita — verde
        478: '#a0e8ff',            // Froslassita — celeste hielo
        398: '#c0392b',            // "Staraptorita" (Legends Z-A) — rojo intenso, la agresividad de Staraptor potenciada

        // --- Legends Z-A: color propio para cada Mega nueva (antes compartían el lila genérico) ---
        26:  '#e8b52f',            // "Raichunita" Y — dorado eléctrico clásico; la X se ajusta abajo
        36:  '#ff8fc4',            // Clefablita — rosa hada
        71:  '#6a9e2f',            // Victreebelita — verde venenoso
        121: '#e63950',            // Starmielita — rojo del núcleo
        154: '#2f9e6b',            // Meganiumita — verde hoja intenso
        160: '#1f6fae',            // Feraligatrita — azul profundo
        227: '#7d8fa3',            // Skarmorynita — acero azulado
        358: '#7fc4d6',            // Chimechonita — celeste campanita
        500: '#d9541f',            // Emboarita — naranja fuego
        530: '#8a5a2f',            // Excadrillita — marrón tierra
        545: '#7a2f8a',            // Scolipedita — púrpura venenoso
        560: '#8a3a3a',            // Scraftynita — rojo tosco
        604: '#e8d23a',            // Eelektrossita — amarillo eléctrico
        609: '#7a3fae',            // Chandelurita — violeta llama fantasma
        623: '#5a6a7a',            // Golurkita — gris piedra
        652: '#3f6b2f',            // Chesnaughtita — verde bosque
        655: '#e0672f',            // Delphoxita — naranja zorro
        658: '#2f4f6a',            // Greninjita — azul ninja
        668: '#e0a52f',            // Pyroarita — dorado melena
        670: '#e0aacb',            // Floettita (Flor Eterna) — rosa flor
        678: '#4a3f8a',            // Meowsticita — índigo psíquico
        687: '#5a2f8a',            // Malamarita — púrpura oscuro
        689: '#3f8a8a',            // Barbaraclita — verde azulado roca
        691: '#4a8a6a',            // Dragalgita — verde tóxico alga
        701: '#c93f3f',            // Hawluchita — rojo luchador
        740: '#7fc4e0',            // Crabominablita — celeste hielo
        768: '#2f4a5a',            // Golisopodita — azul acorazado
        780: '#9a8ac0',            // Drampita — lavanda nube
        870: '#4a6a3a',            // Falinksita — verde militar
        952: '#c9422f',            // Scovillainita — rojo picante
        970: '#c93fae',            // Glimmorita — magenta cristal
        978: '#4fae9a',            // Tatsugirinita — turquesa coral
        998: '#2f6fae',             // Baxcaliburita — azul dragón helado

        // --- Tanda 5: 12 Megas clásicas de X/Y y ORAS que faltaban ---
        15:  '#3a3a8a',            // Beedrillita — morado/azul avispa
        303: '#e0c93a',            // Mawilita — dorado (color de sus colmillos)
        115: '#d68a3a',            // Kangaskhanita — marrón cálido, maternal
        142: '#8a7a5a',            // Aerodactylita — marrón ámbar fósil
        354: '#4a2f5a',            // Banettita — púrpura oscuro, fantasmal
        308: '#e04fae',            // Medichamita — rosa/magenta, energía psíquica
        302: '#6a2fae',            // Sableynita — púrpura joya
        323: '#c9522f',            // Cameruptita — rojo/naranja volcánico
        127: '#8a5a2f',            // Pinsirita — marrón exoesqueleto
        181: '#4fc9d6',            // Ampharosita — celeste eléctrico brillante
        531: '#ff7fae',            // Audinoita — rosa suave, ternura
        460: '#8ad6d0'             // Abomasnowita — celeste hielo/verde nieve
    };

    // Devuelve el aura de transformación de la forma actual (o null si no aplica).
    function obtenerAuraForma(pkmn, forma) {
        if (!pkmn || !forma) return null;
        const capOriginal = String(forma.cap || '').trim();
        const cap = capOriginal.toLowerCase();

        if (cap.includes('gigantamax')) {
            return { clase: 'aura-gigantamax', color: COLOR_AURA_GIGANTAMAX };
        }

        if (/^mega-/i.test(capOriginal) && !IDS_SIN_AURA_MEGA.has(pkmn.id)) {
            let color = COLOR_MEGA_POR_ID[pkmn.id] || '#c9a8ff';
            if (pkmn.id === 6 && cap.includes(' x')) color = '#8f2e2e'; // Charizardita X
            if (pkmn.id === 26 && cap.includes(' x')) color = '#2f6fae'; // "Raichunita" X — azul eléctrico (Y usa el dorado por defecto)
            return { clase: 'aura-mega', color };
        }

        return null;
    }

    // Genera el HTML del aura (vive dentro del marco, alrededor del sprite).
    function renderAuraForma(pkmn, forma) {
        const aura = obtenerAuraForma(pkmn, forma);
        const clase = aura ? ` ${aura.clase}` : '';
        const color = aura ? aura.color : 'transparent';
        return `<div id="aura-${pkmn.id}" class="aura-transformacion${clase}" style="--color-aura:${color}" aria-hidden="true"></div>`;
    }

    // Aplica (o quita) el aura sobre el sprite ya renderizado.
    function actualizarAuraForma(pkmn, forma) {
        const auraEl = document.getElementById(`aura-${pkmn.id}`);
        if (!auraEl) return;
        const aura = obtenerAuraForma(pkmn, forma);
        auraEl.className = `aura-transformacion${aura ? ` ${aura.clase}` : ''}`;
        auraEl.style.setProperty('--color-aura', aura ? aura.color : 'transparent');
    }

    // =========================================================
    // ✨ FONDOS CINEMÁTICOS DENTRO DEL MARCO DE CADA POKÉMON
    // Arceus mantiene su fondo divino y, además, algunos legendarios
    // usan ahora los escenarios cinematográficos creados para ellos.
    // El fondo vive DENTRO del <figure>, como una capa visual detrás
    // del Pokémon, igual que el fondo especial de Arceus.
    // =========================================================
    const ID_ARCEUS_FONDO = 493;

    // id de Pokédex → nombre del escenario (clase CSS "fondo-<nombre>").
    const FONDOS_POR_ID = {
        150: 'mewtwo',   151: 'mew',      244: 'entei',    249: 'lugia',
        250: 'hooh',     382: 'kyogre',   383: 'groudon',  384: 'rayquaza',
        385: 'jirachi',  483: 'dialga',   484: 'palkia',   487: 'giratina',
        491: 'darkrai',  643: 'reshiram', 644: 'zekrom',   646: 'kyurem',
        791: 'solgaleo', 792: 'lunala',   800: 'necrozma', 888: 'zacian',
        895: 'regidrago'
    ,
        // --- Ampliación 2026: nuevos legendarios y míticos con fondo propio ---
        144: 'articuno', 145: 'zapdos', 146: 'moltres', 243: 'raikou', 245: 'suicune', 251: 'celebi', 380: 'latias', 381: 'latios', 377: 'regirock', 378: 'regice', 379: 'registeel', 386: 'deoxys', 485: 'heatran', 486: 'regigigas', 488: 'cresselia', 490: 'manaphy', 492: 'shaymin', 494: 'victini', 638: 'cobalion', 639: 'terrakion', 640: 'virizion', 647: 'keldeo', 649: 'genesect', 716: 'xerneas', 717: 'yveltal', 718: 'zygarde', 719: 'diancie', 720: 'hoopa', 721: 'volcanion', 785: 'tapukoko', 801: 'magearna', 802: 'marshadow', 807: 'zeraora', 889: 'zamazenta', 890: 'eternatus', 898: 'calyrex', 1007: 'koraidon', 1008: 'miraidon',
        // --- Ampliación 2026 (v3): Tapus restantes, Glastrier/Spectrier y Ultraentes ---
        786: 'tapulele', 787: 'tapubulu', 788: 'tapufini', 896: 'glastrier', 897: 'spectrier',
        793: 'nihilego', 794: 'buzzwole', 795: 'pheromosa', 796: 'xurkitree', 797: 'celesteela',
        798: 'kartana', 799: 'guzzlord', 803: 'poipole', 804: 'naganadel', 805: 'stakataka', 806: 'blacephalon',
        // --- Ampliación 2026 (v4): legendarios y singulares que faltaban ---
        480: 'uxie', 481: 'mesprit', 482: 'azelf', 641: 'tornadus', 642: 'thundurus', 645: 'landorus',
        773: 'silvally', 892: 'urshifu', 894: 'regieleki', 1001: 'wochien', 1002: 'chienpao', 1003: 'tinglu',
        1004: 'chiyu', 1014: 'okidogi', 1015: 'munkidori', 1016: 'fezandipiti', 1017: 'ogerpon', 1024: 'terapagos',
        489: 'phione', 648: 'meloetta', 809: 'melmetal', 893: 'zarude', 1025: 'pecharunt'
    };
    const IDS_FONDOS_CINEMATICOS = new Set(Object.keys(FONDOS_POR_ID).map(Number));

    // =========================================================
    // 🎨 PARTÍCULAS POR TIPO PRINCIPAL
    // Todos los Pokémon SIN fondo legendario muestran, dentro de su marco,
    // partículas que representan su tipo principal (el primero de la lista;
    // el tipo secundario no influye). Los legendarios con escenario propio
    // y Arceus conservan su fondo tal como está, sin partículas de tipo.
    // El dibujo de las partículas vive en js/fondos-particulas.js (tipo-<tipo>).
    // =========================================================
    function obtenerTipoPrincipal(tipoStr) {
        if (!tipoStr) return '';
        const primero = String(tipoStr).replace(/\([^)]*\)/g, '').split('/')[0];
        const clave = normalizarTexto(primero);
        return TIPO_INFO[clave] ? clave : '';
    }

    function renderParticulasTipo(pkmn) {
        if (pkmn.id === ID_ARCEUS_FONDO || IDS_FONDOS_CINEMATICOS.has(pkmn.id)) return '';
        const clave = obtenerTipoPrincipal(pkmn.tipo);
        return clave
            ? `<div class="fondo-tipo-particulas tipo-${clave}" aria-hidden="true"></div>`
            : '';
    }

    // Algunas formas cambian la paleta del escenario (clase "fondo-var-<x>").
    function obtenerVarianteFondo(id, cap) {
        if (id === 150) {
            if (cap.includes('mewtwo x')) return 'x';
            if (cap.includes('mewtwo y')) return 'y';
        }
        if (id === 646) {
            if (cap.includes('negro')) return 'negro';
            if (cap.includes('blanco')) return 'blanco';
        }
        if (id === 800) {
            if (cap.includes('melena')) return 'melena';
            if (cap.includes('alas')) return 'alas';
            if (cap.includes('ultra')) return 'ultra';
        }
        if (id === 888 && cap.includes('suprema')) return 'suprema';
        // 🌋🌊🐉 Groudon / Kyogre / Rayquaza: la forma Primigenia o Mega
        // recibe su propio escenario ("fondo-var-primal" / "fondo-var-mega"),
        // distinto del escenario de su forma normal.
        if (id === 383 || id === 382) { if (cap.includes('primigen')) return 'primal'; }
        if (id === 384) { if (cap.includes('mega')) return 'mega'; }

        // --- Ampliación 2026: variantes de fondo para las nuevas formas ---
        if (id === 144 && cap.includes('galar')) return 'galar';
        if (id === 145 && cap.includes('galar')) return 'galar';
        if (id === 146 && cap.includes('galar')) return 'galar';
        if (id === 381 && cap.includes('mega')) return 'mega';
        if (id === 380 && cap.includes('mega')) return 'mega';
        if (id === 719 && cap.includes('mega')) return 'mega';
        if (id === 720 && cap.includes('desatado')) return 'unbound';
        if (id === 492 && cap.includes('cielo')) return 'cielo';
        if (id === 647 && cap.includes('resoluci')) return 'resolute';
        if (id === 718) {
            if (cap.includes('10%')) return '10';
            if (cap.includes('completa')) return '100';
        }
        // --- Legendarios/singulares con Mega (Legends Z-A): el fondo propio
        // se intensifica con una variante "mega" en vez de la aura genérica.
        if (id === 491 && cap.includes('mega')) return 'mega'; // Darkrai
        if (id === 485 && cap.includes('mega')) return 'mega'; // Heatran
        if (id === 807 && cap.includes('mega')) return 'mega'; // Zeraora
        if (id === 801 && cap.includes('mega')) return 'mega'; // Magearna
        if (id === 718 && cap.includes('mega')) return 'mega'; // Zygarde (Mega-Zygarde, más allá de su forma Completa)
        if (id === 890 && cap.includes('eternamax')) return 'eternamax';
        if (id === 892 && cap.includes('lluvia')) return 'lluvia';        // Urshifu Estilo Lluvia Rauda
        // --- Formas nuevas: cada una cambia el escenario de su Pokémon ---
        if ((id === 641 || id === 642 || id === 645) && cap.includes('tótem')) return 'totem'; // Forma Tótem (Therian)
        if (id === 648 && cap.includes('danza')) return 'danza';                              // Meloetta Forma Danza
        if (id === 1017) {                                                                     // Máscaras de Ogerpon
            if (cap.includes('pozo')) return 'pozo';
            if (cap.includes('hogar')) return 'hogar';
            if (cap.includes('cimiento')) return 'cimiento';
        }
        if (id === 1024) {                                                                     // Terapagos
            if (cap.includes('astral')) return 'astral';
            if (cap.includes('teracristal')) return 'teracristal';
        }
        if (id === 809 && cap.includes('gigantamax')) return 'gmax';      // Melmetal Gigantamax
        if (id === 889 && cap.includes('supremo')) return 'crowned';
        if (id === 898) {
            if (cap.includes('glaciar')) return 'jinete-glaciar';
            if (cap.includes('espectral')) return 'jinete-espectral';
        }
        return '';
    }

    // Devuelve las clases del escenario. Todas las formas muestran el fondo;
    // en Mega / Primigenia / Origen / formas especiales se agrega
    // "fondo-forma-especial", que solo intensifica el escenario.
    function obtenerClaseFondoCinematico(pkmn, forma) {
        if (!pkmn || !forma) return '';

        const tema = FONDOS_POR_ID[pkmn.id];
        if (!tema) return '';

        const cap = String(forma.cap || '').toLowerCase();
        const variante = obtenerVarianteFondo(pkmn.id, cap);
        const esFormaEspecial = Boolean(variante)
            || cap.includes('primigen') || cap.includes('mega') || cap.includes('origen');

        return `fondo-activo fondo-${tema}`
            + (variante ? ` fondo-var-${variante}` : '')
            + (esFormaEspecial ? ' fondo-forma-especial' : '');
    }

    function textoBotonPorDefecto(forma) {
        return String(forma.cap || '').toLowerCase().includes('mega')
            ? '🔄 Revertir Megaevolución'
            : '🔄 Cambiar forma';
    }

    // Genera el HTML del botón de cambio de forma, agregando el icono
    // correspondiente (Mega, Mega X/Y, Gigantamax o Primigenia) cuando aplica.
    function formatearBotonForma(pkmn, forma) {
        const textoBase = forma.btn || textoBotonPorDefecto(forma);
        const textoLower = normalizarTexto(textoBase);
        // Quitamos el emoji/símbolo inicial (si lo hay) para dejar solo el texto.
        const textoSinEmoji = textoBase.replace(/^[^\p{L}\p{N}]+/u, '').trim();

        // 💥 Gigantamax
        if (textoLower.includes('gigantamax')) {
            return `<img src="${ICONO_GIGANTAMAX}" alt="Gigantamax" class="icono-boton-forma" loading="lazy" onerror="this.style.display='none'" decoding="async">` +
                ` ${textoSinEmoji}`;
        }

        // 🌟 Activar Megaevolución (incluye Mega X / Mega Y)
        if (textoLower.includes('megaevolucionar')) {
            let letra = '';
            if (/\bx\b/i.test(textoBase)) letra = 'X';
            else if (/\by\b/i.test(textoBase)) letra = 'Y';

            return `<img src="${ICONO_MEGA}" alt="Mega Evolución" class="icono-boton-forma" loading="lazy" onerror="this.style.display='none'" decoding="async">` +
                (letra ? `<span class="letra-mega">${letra}</span>` : '') +
                ` ${textoSinEmoji}`;
        }

        // 🌊🌋 Activar Regresión Primigenia
        if (textoLower.includes('regresion primigenia')) {
            const nombreLower = normalizarTexto(pkmn.nombre || '');
            const icono = nombreLower.includes('kyogre') ? ICONO_PRIMAL_KYOGRE : ICONO_PRIMAL_GROUDON;
            return `<img src="${icono}" alt="Forma Primigenia" class="icono-boton-forma" loading="lazy" onerror="this.style.display='none'" decoding="async">` +
                ` ${textoSinEmoji}`;
        }

        // Cualquier otro botón (revertir, cambiar forma, etc.) se muestra igual que antes.
        return textoBase;
    }

    function inicializarSlides() {
        const contenedor = document.getElementById('contenedor-slides');
        contenedor.innerHTML = '';

        // ⚡ Carga bajo demanda: se crean 600 cascarones vacíos y el contenido de cada
        // ficha se construye SOLO cuando se va a mostrar (ver hidratarSlide).
        pokemonData.forEach(() => {
            const slide = document.createElement('article');
            slide.className = 'slide';
            slide.style.display = 'none';
            contenedor.appendChild(slide);
        });
        if (contenedor.firstElementChild) contenedor.firstElementChild.style.display = 'block';
        hidratarSlide(0);
    }

    // Construye el contenido de UNA ficha la primera vez que se muestra.
    // Avisa con el evento "slide-hidratado" para que otros módulos la completen
    // (curiosidades, apodos, estadísticas extra...).
    function hidratarSlide(idx) {
        const contenedor = document.getElementById('contenedor-slides');
        const slide = contenedor && contenedor.children[idx];
        const pkmn = pokemonData[idx];
        if (!slide || !pkmn || slide.dataset.listo) return slide;

            const numPokedex = String(pkmn.id).padStart(4, '0');
            const formaActual = pkmn.formas[0];

            slide.innerHTML = `
                <header>
                    <h2 id="nombre-pokemon-${pkmn.id}">#${numPokedex} - ${pkmn.nombre}</h2>
                    <p class="tipos" id="tipos-${pkmn.id}"><strong>Tipo:</strong> ${renderTipos(pkmn.tipo)}</p>
                </header>
                <figure id="fig-${pkmn.id}">
                    ${pkmn.id === ID_ARCEUS_FONDO ? `<div class="fondo-legendario fondo-arceus" aria-hidden="true"></div>` : ''}
                    ${IDS_FONDOS_CINEMATICOS.has(pkmn.id) ? `<div class="fondo-legendario fondo-legendario-dinamico ${obtenerClaseFondoCinematico(pkmn, formaActual)}" aria-hidden="true"></div>` : ''}
                    ${renderParticulasTipo(pkmn)}
                    <span class="contenedor-pokemon-img">
                        ${renderAuraForma(pkmn, formaActual)}
                        <img id="img-${pkmn.id}" src="${obtenerImagenUrl(formaActual, 'oficial', pkmn.id)}" alt="${pkmn.nombre}" width="140" ${idx === 0 ? 'fetchpriority="high"' : ''} class="img-pokemon-clicable" title="Pulsa para escuchar su grito" onclick="reproducirGrito()" decoding="async">
                    </span>
                    <figcaption id="cap-${pkmn.id}">${formaActual.cap}</figcaption>
                    <button type="button" id="btn-favorito-${pkmn.id}" class="btn-favorito" onclick="alternarFavorito(${pkmn.id})" title="Marcar como favorito" aria-label="Marcar como favorito">☆</button>
                    <div class="zona-apodo">
                        <label for="apodo-${pkmn.id}">🏷️ Apodo</label>
                        <div class="controles-apodo">
                            <input type="text" id="apodo-${pkmn.id}" class="input-apodo" maxlength="20" placeholder="Ponle un apodo...">
                            <button type="button" class="btn-apodo" onclick="guardarApodo(${pkmn.id})">💾 Guardar</button>
                        </div>
                        <small id="apodo-guardado-${pkmn.id}" class="apodo-guardado"></small>
                    </div>
                    
                    <div class="controles-pokemon">
                        <button id="btn-3d-${pkmn.id}" class="btn-3d" title="Doble clic: aplicar a todos los Pokémon" onclick="toggleVisual(${idx}, '3d')">🎮 Ver Sprite 3D</button>
                        <button id="btn-pixel-${pkmn.id}" class="btn-pixel" title="Doble clic: aplicar a todos los Pokémon" onclick="toggleVisual(${idx}, 'pixel')">👾 Pixel Art</button>
                        ${pkmn.formas.length > 1 ? `<button class="btn-forma" onclick="cambiarForma(${idx}, event)">${formatearBotonForma(pkmn, formaActual)}</button>` : ''}
                    </div>
                <button type="button" class="btn-fanarts-pokemon" onclick="abrirGaleriaDibujo(${pkmn.id})">🎨 VER DIBUJOS / FAN ARTS</button>
                </figure>
                <section>
                    <h3>Descripción</h3>
                    <p>${pkmn.desc}</p>
                </section>
                <section class="seccion-favorito">
                    <h3>⭐ ¿Por qué es mi favorito?</h3>
                    <div class="comentario-creador">
                        <strong>🧑‍💻 Comentario del creador</strong>
                        <p>${pkmn.fav ? pkmn.fav : 'Este Pokémon forma parte de mi colección de favoritos. ⭐'}</p>
                    </div>

                    <div class="zona-comentarios">
                        <h4>💬 Comentarios sobre ${pkmn.nombre}</h4>
                        <small class="nota-local">Los comentarios se guardan solo en este navegador.</small>

                        <input
                            type="text"
                            id="nombre-comentario-${pkmn.id}"
                            class="input-comentario"
                            maxlength="30"
                            placeholder="Tu nombre (obligatorio)" required
                        >

                        <textarea
                            id="texto-comentario-${pkmn.id}"
                            class="textarea-comentario"
                            maxlength="500"
                            rows="4"
                            placeholder="¿Por qué ${pkmn.nombre} es tu favorito? Escribe tu comentario..."
                        ></textarea>

                        <button
                            type="button"
                            class="btn-publicar-comentario"
                            onclick="publicarComentario(${pkmn.id})"
                        >
                            💬 Publicar comentario
                        </button>

                        <div id="lista-comentarios-${pkmn.id}" class="lista-comentarios"></div>
                    </div>
                </section>
            `;
            slide.dataset.listo = '1';
            try { mostrarComentarios(pkmn.id); } catch (_) {}
            try { actualizarEstrellasFavoritos(pkmn.id); } catch (_) {}
            try { if (typeof actualizarCuentaUI === 'function') actualizarCuentaUI(); } catch (_) {}
            contenedor.dispatchEvent(new CustomEvent('slide-hidratado', { detail: { idx: idx, slide: slide } }));
            return slide;
    }

    // Muestra solo la ficha indicada (construyéndola si hace falta).
    function mostrarSoloSlide(indice) {
        hidratarSlide(indice);
        document.querySelectorAll('.slide').forEach((s, i) => s.style.display = i === indice ? 'block' : 'none');
    }

    // =========================================================
    // 📏 TAMAÑO VISUAL SEGÚN LA ALTURA REAL DEL POKÉMON
    // PokéAPI entrega la altura en decímetros.
    // La convertimos a un tamaño visual moderado para la Pokédex.
    // =========================================================
    const cacheAlturasPokemon = new Map();

    function calcularTamanoVisual(alturaMetros) {
        const h = Number(alturaMetros) || 1;

        // No hacemos una escala lineal exagerada: usamos tramos suaves.
        if (h <= 0.4) return 190;
        if (h <= 0.9) return 220;
        if (h <= 1.4) return 250;
        if (h <= 1.9) return 280;
        if (h <= 2.9) return 320;
        if (h <= 4.9) return 360;
        if (h <= 7.9) return 400;
        return 440;
    }

    async function obtenerAlturaPokemon(forma, pkmnId) {
        // Si en el futuro queremos fijar una altura manual, se puede poner
        // forma.altura o pkmn.altura sin tocar el resto del sistema.
        if (forma && Number.isFinite(Number(forma.altura))) {
            return Number(forma.altura);
        }

        if (Number.isFinite(Number(pkmnId)) && pokemonData.find(p => p.id === Number(pkmnId))?.altura) {
            return Number(pokemonData.find(p => p.id === Number(pkmnId)).altura);
        }

        const idForma = obtenerIdFormaActual(forma) || pkmnId;
        const clave = String(idForma);

        if (cacheAlturasPokemon.has(clave)) {
            return cacheAlturasPokemon.get(clave);
        }

        try {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idForma}`);
            if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);

            const datos = await respuesta.json();
            // PokéAPI: height está expresada en decímetros.
            const alturaMetros = Number(datos.height) / 10;
            cacheAlturasPokemon.set(clave, alturaMetros);
            return alturaMetros;
        } catch (error) {
            console.warn(`No se pudo obtener la altura de ${idForma}. Se usará tamaño base.`, error);
            return 1;
        }
    }

    async function actualizarTamanoPokemon(index) {
        const pkmn = pokemonData[index];
        if (!pkmn) return;

        const indiceForma = estadoFormas[index] || 0;
        const formaActual = pkmn.formas[indiceForma] || pkmn.formas[0];
        const imgEl = document.getElementById(`img-${pkmn.id}`);
        const figEl = document.getElementById(`fig-${pkmn.id}`);

        if (!imgEl) return;

        // Tamaño provisional para evitar un salto visual mientras llega la API.
        imgEl.style.setProperty('--pokemon-visual-height', '280px');
        if (figEl) figEl.dataset.alturaPokemon = 'cargando';

        // Resuelve, para ESTA forma, su arte oficial/altura (si usa un sprite
        // con nombre de Showdown y no tiene los suyos propios) y su tipo y
        // estadísticas base reales ante PokeAPI. Antes esto se limitaba al
        // arte; ahora corrige también el tipo mostrado y las estadísticas
        // de la ficha extra cuando la forma cambia uno o los dos tipos
        // (Mega Evolución, formas regionales, Primigenias, Ogerpon...).
        await resolverDatosFormaPokeApi(pkmn, formaActual);

        // Si mientras se resolvía todo seguimos en la misma forma...
        if ((estadoFormas[index] || 0) === indiceForma) {
            // ...y en modo Arte Oficial, refrescamos la imagen (antes se estaba
            // mostrando de respaldo la del Pokémon base).
            if (estadoVisual[index] === 'oficial') {
                imgEl.src = obtenerImagenUrl(formaActual, 'oficial', pkmn.id);
            }
            // ...actualizamos el tipo visible y avisamos a quien le interese
            // (p. ej. la ficha extra, si ya estaba abierta) de que esta forma
            // tiene datos nuevos.
            actualizarTipoVisible(pkmn, formaActual);
            document.dispatchEvent(new CustomEvent('forma-actualizada', { detail: { index, pkmn, forma: formaActual } }));
        }

        const altura = await obtenerAlturaPokemon(formaActual, pkmn.id);
        const tamano = calcularTamanoVisual(altura);

        imgEl.style.setProperty('--pokemon-visual-height', `${tamano}px`);
        imgEl.dataset.alturaMetros = String(altura);
        if (figEl) figEl.dataset.alturaPokemon = `${altura}m`;
    }

    function obtenerIdFormaActual(forma) {
        const match = forma.png.match(/\/(\d+)\.png$/);
        return match ? match[1] : null;
    }

    // =========================================================
    // 🖼️ ARTE OFICIAL Y ALTURA PARA FORMAS SIN NÚMERO DE SPRITE
    // Varias formas (regionales, Gigantamax, Megas, drives de Genesect,
    // estaciones de Sawsbuck, etc.) usan sprites de Pokémon Showdown con
    // NOMBRE en vez de número (ej. "raticate-alola.png"), así que
    // obtenerIdFormaActual() no puede sacarles ningún número de Pokédex.
    // Antes, eso hacía que en silencio se usara el arte oficial y la
    // altura del Pokémon BASE en vez de los de la forma real.
    // Aquí resolvemos esas formas consultando PokeAPI por su nombre, y
    // guardamos el resultado en la propia forma para no repetir la
    // consulta ni para las formas que ya vengan con "oficial" propio.
    // =========================================================
    const cacheDatosFormaPokeApi = new Map();

    // Formas cuyo nombre de archivo (estilo Showdown) no coincide con el
    // nombre que usa PokeAPI para esa misma forma.
    const MAPA_SLUGS_POKEAPI = {
        'basculin-bluestriped': 'basculin-blue-striped',
        'tauros-paldea-combat': 'tauros-paldea-combat-breed'
    };

    // Megas creadas como toque propio de fan (no existen en los juegos,
    // así que PokeAPI no tiene ningún dato de ellas): se usa su propio
    // sprite de Showdown como arte de respaldo, en vez de intentar
    // consultarlas.
    const RESPALDO_MANUAL_FORMAS = {
        'froslass-mega': { altura: 1.3 }
    };

    function obtenerSlugShowdown(forma) {
        const match = forma?.png?.match(/play\.pokemonshowdown\.com\/sprites\/gen5\/([a-z0-9-]+)\.png$/i);
        return match ? match[1] : null;
    }

    async function intentarObtenerDatosPokeApi(slugsAIntentar) {
        for (const slug of slugsAIntentar) {
            try {
                const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
                if (respuesta.ok) return await respuesta.json();
            } catch (_) {
                // seguimos probando el siguiente nombre candidato
            }
        }
        return null;
    }

    // ⚔️🔤 TIPO Y ESTADÍSTICAS POR FORMA
    // Mega Evolución, formas regionales, Primigenias, Necrozma, Ogerpon...
    // muchas formas cambian el tipo (uno o los dos) y siempre tienen sus
    // propias estadísticas base. Antes la web mostraba SIEMPRE el tipo y
    // (en la ficha extra) las estadísticas del Pokémon BASE, sin importar
    // la forma activa. Esta función resuelve, para la forma dada, su
    // identificador ante PokeAPI (número de forma o nombre de Showdown) y
    // pide sus datos reales UNA sola vez (se guardan en la propia forma
    // y en caché, igual que ya se hacía con el arte oficial).
    function identificadorPokeApiForma(pkmn, forma) {
        const idForma = obtenerIdFormaActual(forma);
        if (idForma && Number(idForma) === pkmn.id) return null; // es la forma base: no hace falta pedir nada
        if (idForma) return idForma;
        const slugShowdown = obtenerSlugShowdown(forma);
        return slugShowdown ? (MAPA_SLUGS_POKEAPI[slugShowdown] || slugShowdown) : null;
    }

    async function resolverDatosFormaPokeApi(pkmn, forma) {
        if (!forma || forma.tipos !== undefined) return; // ya resuelto (incluye null = "usa los datos del Pokémon base")

        const idForma = obtenerIdFormaActual(forma);
        if (idForma && Number(idForma) === pkmn.id) { forma.tipos = null; forma.statsBase = null; return; }

        const slugShowdown = obtenerSlugShowdown(forma);
        const clave = idForma || (slugShowdown ? (MAPA_SLUGS_POKEAPI[slugShowdown] || slugShowdown) : null);
        if (!clave) { forma.tipos = null; forma.statsBase = null; return; } // no hay forma de identificarla ante PokeAPI

        // Megas creadas como toque propio de fan: no existen en los juegos, así
        // que PokeAPI no tiene tipo ni estadísticas reales para ellas.
        if (slugShowdown && RESPALDO_MANUAL_FORMAS[slugShowdown]) {
            const respaldo = RESPALDO_MANUAL_FORMAS[slugShowdown];
            if (!forma.oficial) { forma.oficial = forma.png; forma.oficialShiny = forma.pngShiny || forma.png; }
            if (forma.altura === undefined) forma.altura = respaldo.altura;
            forma.tipos = null; forma.statsBase = null;
            return;
        }

        if (cacheDatosFormaPokeApi.has(clave)) { Object.assign(forma, cacheDatosFormaPokeApi.get(clave)); return; }

        const candidatos = [clave];
        if (!idForma && slugShowdown && !MAPA_SLUGS_POKEAPI[slugShowdown]) candidatos.push(`${slugShowdown}-standard`);

        const datos = await intentarObtenerDatosPokeApi(candidatos);
        if (!datos) {
            console.warn(`No se pudieron resolver tipo/estadísticas de la forma "${forma.cap}" en PokeAPI (${clave}). Se mantienen los del Pokémon base.`);
            forma.tipos = null; forma.statsBase = null;
            return;
        }

        const resuelto = {
            tipos: (datos.types || []).map(t => MAPA_TIPO_INGLES_ESPANOL[t.type.name] || t.type.name).join(' / ') || null,
            statsBase: Object.fromEntries((datos.stats || []).map(s => [s.stat.name, s.base_stat]))
        };
        if (!forma.oficial) {
            const arteOficial = datos.sprites?.other?.['official-artwork'] || {};
            resuelto.oficial = arteOficial.front_default || forma.png;
            resuelto.oficialShiny = arteOficial.front_shiny || forma.pngShiny || forma.png;
        }
        if (forma.altura === undefined) resuelto.altura = (Number(datos.height) || 0) / 10 || 1;

        cacheDatosFormaPokeApi.set(clave, resuelto);
        Object.assign(forma, resuelto);
    }

    // Identificador listo para usar en un fetch (nunca null: cae de vuelta al Pokémon base).
    function idPokeApiParaFicha(pkmn, forma) { return identificadorPokeApiForma(pkmn, forma) || pkmn.id; }

    // Igual que idPokeApiParaFicha, pero para código async que puede esperar a que la
    // forma termine de resolverse: si ya se determinó que esta forma no tiene datos
    // propios en PokeAPI (fan-made, o la consulta falló), usa el Pokémon BASE en vez
    // de repetir para siempre la misma consulta que ya sabemos que no funciona
    // (evita que la Ficha Extra se quede en "No se pudieron cargar los datos" cuando
    // en realidad el tipo y las estadísticas ya cayeron de vuelta a los del Pokémon base).
    async function idPokeApiEfectivo(pkmn, forma) {
        if (forma.tipos === undefined) await resolverDatosFormaPokeApi(pkmn, forma);
        return forma.tipos === null ? pkmn.id : idPokeApiParaFicha(pkmn, forma);
    }

    // Refresca en pantalla el tipo (texto + partículas de fondo) de la ficha visible.
    function actualizarTipoVisible(pkmn, forma) {
        const tipoAMostrar = forma.tipos || pkmn.tipo;
        const elTipo = document.getElementById(`tipos-${pkmn.id}`);
        if (elTipo) elTipo.innerHTML = `<strong>Tipo:</strong> ${renderTipos(tipoAMostrar)}`;

        const particulas = document.querySelector(`#fig-${pkmn.id} .fondo-tipo-particulas`);
        if (particulas) {
            const clave = obtenerTipoPrincipal(tipoAMostrar);
            particulas.className = 'fondo-tipo-particulas' + (clave ? ` tipo-${clave}` : '');
        }
    }

    function obtenerFormaVisible(index) {
        const pkmn = pokemonData[index];
        return pkmn ? pkmn.formas[estadoFormas[index] || 0] : null;
    }

    function obtenerImagenUrl(forma, tipoVisual, pkmnId) {
        const idForma = obtenerIdFormaActual(forma) || pkmnId;
        
        if (tipoVisual === '3d') {
            return esShiny ? forma.gifShiny : forma.gif;
        } else if (tipoVisual === 'pixel') {
            // Sprite 2D en Pixel Art
            return esShiny ? forma.pngShiny : forma.png;
        } else {
            // Arte Oficial personalizado cuando la forma lo proporciona;
            // si no, usa el arte oficial de PokeAPI como respaldo.
            if (esShiny && forma.oficialShiny) return forma.oficialShiny;
            if (!esShiny && forma.oficial) return forma.oficial;
            const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
            return esShiny ? `${baseUrl}shiny/${idForma}.png` : `${baseUrl}${idForma}.png`;
        }
    }

    function actualizarColores() {
        const pkmn = pokemonData[indiceSlide];
        const formaActual = pkmn.formas[estadoFormas[indiceSlide]];
        const root = document.documentElement;

        const urlPattern = esShiny ? formaActual.pngShiny : formaActual.png;
        root.style.setProperty('--bg-pokemon-pattern', `url("${urlPattern}")`);

        const imgEl = document.getElementById(`img-${pkmn.id}`);
        if (imgEl) {
            imgEl.src = obtenerImagenUrl(formaActual, estadoVisual[indiceSlide], pkmn.id);
        }
        actualizarBotonesVisual(indiceSlide);

        // 🎬 Cambia el escenario cinematográfico dentro del mismo marco.
        const figEl = document.getElementById(`fig-${pkmn.id}`);
        const fondoDinamico = figEl?.querySelector('.fondo-legendario-dinamico');
        if (fondoDinamico) {
            const claseFondo = obtenerClaseFondoCinematico(pkmn, formaActual);
            fondoDinamico.className = `fondo-legendario fondo-legendario-dinamico${claseFondo ? ` ${claseFondo}` : ''}`;
            fondoDinamico.setAttribute('aria-hidden', 'true');
        }

        actualizarAuraForma(pkmn, formaActual);
        actualizarTamanoPokemon(indiceSlide);
    }

    // Refresca texto/estado de los botones 3D y Pixel de UNA ficha según su modo visual.
    function actualizarBotonesVisual(index) {
        const pkmn = pokemonData[index];
        if (!pkmn) return;
        const btn3d = document.getElementById(`btn-3d-${pkmn.id}`);
        const btnPixel = document.getElementById(`btn-pixel-${pkmn.id}`);

        if (btn3d) {
            const activo = estadoVisual[index] === '3d';
            btn3d.textContent = activo ? '🎨 Arte Oficial' : '🎮 Ver Sprite 3D';
            btn3d.classList.toggle('activo', activo);
        }
        if (btnPixel) {
            const activo = estadoVisual[index] === 'pixel';
            btnPixel.textContent = activo ? '🎨 Arte Oficial' : '👾 Pixel Art';
            btnPixel.classList.toggle('activo', activo);
        }
    }

    // Un clic: alterna solo ESTE Pokémon (3D/Pixel <-> Arte Oficial).
    // Recuerda el modo que tenía antes del primer clic, para que el doble clic
    // (que dispara dos clics seguidos) sepa desde dónde partía.
    let clicVisualInicial = { index: -1, tipo: '', previo: 'oficial', t: 0 };

    function toggleVisual(index, tipo) {
        const ahora = Date.now();
        if (!(clicVisualInicial.index === index && clicVisualInicial.tipo === tipo && ahora - clicVisualInicial.t < 600)) {
            clicVisualInicial = { index, tipo, previo: estadoVisual[index], t: ahora };
        } else {
            clicVisualInicial.t = ahora;
        }

        estadoVisual[index] = (estadoVisual[index] === tipo) ? 'oficial' : tipo;
        actualizarBotonesVisual(index);
        actualizarColores();
    }

    // Doble clic: aplica el modo a TODOS los Pokémon.
    //  - Botón "Ver Sprite 3D"  -> todos en 3D
    //  - Botón "Pixel Art"      -> todos en Pixel Art
    //  - Botón "Arte Oficial"   -> todos vuelven a la normalidad (Arte Oficial)
    function aplicarVisualATodos(modo) {
        estadoVisual.fill(modo);
        // Fichas ya construidas: sincronizar sus botones (las demás se sincronizan al hidratarse).
        pokemonData.forEach((_, i) => actualizarBotonesVisual(i));
        actualizarColores();

        const nombres = { '3d': 'Sprite 3D', 'pixel': 'Pixel Art', 'oficial': 'Arte Oficial' };
        mostrarAvisoVisual(modo === 'oficial'
            ? '🎨 Todos los Pokémon vuelven al Arte Oficial'
            : `✨ Todos los Pokémon ahora en ${nombres[modo]}`);
    }

    function mostrarAvisoVisual(texto) {
        let el = document.getElementById('aviso-visual-global');
        if (!el) {
            el = document.createElement('div');
            el.id = 'aviso-visual-global';
            el.setAttribute('role', 'status');
            el.setAttribute('aria-live', 'polite');
            document.body.appendChild(el);
        }
        el.textContent = texto;
        el.classList.add('visible');
        clearTimeout(mostrarAvisoVisual._t);
        mostrarAvisoVisual._t = setTimeout(() => el.classList.remove('visible'), 2200);
    }

    // Delegación de eventos: funciona también con fichas que se construyen después (carga diferida).
    document.addEventListener('dblclick', (e) => {
        const btn = e.target.closest && e.target.closest('.btn-3d, .btn-pixel');
        if (!btn) return;
        e.preventDefault();
        const tipo = btn.classList.contains('btn-3d') ? '3d' : 'pixel';
        const previo = (clicVisualInicial.tipo === tipo && Date.now() - clicVisualInicial.t < 800)
            ? clicVisualInicial.previo
            : estadoVisual[indiceSlide];
        // Si el botón decía "Arte Oficial" (ese modo ya estaba activo), el doble clic restaura todo.
        aplicarVisualATodos(previo === tipo ? 'oficial' : tipo);
    });

    function reproducirGrito() {
        const pkmnActual = pokemonData[indiceSlide];
        const indiceForma = estadoFormas[indiceSlide];
        const formaActual = pkmnActual.formas[indiceForma];
        
        const idForma = obtenerIdFormaActual(formaActual) || pkmnActual.id;

        if (formaActual.grito) {
            reproductorAudio.src = formaActual.grito;
        } else {
            reproductorAudio.src = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${idForma}.ogg`;
        }
        reproductorAudio.volume = 0.5;
        reproductorAudio.play().catch(err => console.log("Audio bloqueado:", err));
    }

    function irAFormaIndice(index, nuevoIndice) {
        const pkmn = pokemonData[index];
        if (!pkmn || !pkmn.formas[nuevoIndice] || nuevoIndice === estadoFormas[index]) return;

        const figEl = document.getElementById(`fig-${pkmn.id}`);
        const capEl = document.getElementById(`cap-${pkmn.id}`);
        const slideEl = document.querySelectorAll('.slide')[index];
        const btnEl = slideEl ? slideEl.querySelector('.btn-forma') : null;

        const siguienteIndice = nuevoIndice;
        const nombreSiguienteForma = pkmn.formas[siguienteIndice].cap.toLowerCase();
        const esMega = nombreSiguienteForma.includes("mega");
        const esPrimigenia = nombreSiguienteForma.includes("primigenio") || nombreSiguienteForma.includes("primigenia");
        const esTransformacionEspecial = esMega || esPrimigenia;

        // 🟣 MEGA / 🔥🌊 REGRESIÓN PRIMIGENIA: ambas usan la misma animación y el MP3 de Mega.
        if (esTransformacionEspecial && figEl) {
            audioMega.pause();
            audioMega.currentTime = 0;
            audioMega.volume = 0.7;

            const iniciarMega = () => {
                const duracion = (
                    isFinite(audioMega.duration) &&
                    audioMega.duration > 0
                )
                    ? audioMega.duration * 1000
                    : 5040;

                figEl.style.setProperty("--mega-duration", `${duracion}ms`);

                figEl.classList.remove("efecto-mega");
                void figEl.offsetWidth;
                figEl.classList.add("efecto-mega");

                audioMega.play().catch(err => {
                    console.log("No se pudo reproducir mega-evolution.mp3:", err);
                });

                // Cambia a la forma Mega a mitad del sonido.
                setTimeout(() => {
                    estadoFormas[index] = siguienteIndice;

                    const nuevaForma = pkmn.formas[estadoFormas[index]];
                    if (capEl) capEl.textContent = nuevaForma.cap;
                    if (btnEl) btnEl.innerHTML = formatearBotonForma(pkmn, nuevaForma);
                    actualizarColores();
                }, duracion * 0.5);

                // El efecto termina exactamente cuando termina el MP3.
                setTimeout(() => {
                    figEl.classList.remove("efecto-mega");
                    figEl.style.removeProperty("--mega-duration");
                    // 🔊 Al terminar la animación, suena el grito de la nueva forma.
                    reproducirGrito();
                }, duracion);
            };

            // La transformación NO depende de que el MP3 exista o pueda reproducirse.
            // Si el sonido está disponible se reproduce; si no, la animación y el cambio
            // de imagen continúan igualmente usando la duración de respaldo.
            iniciarMega();

        } else {
            // 🔄 Cambio normal de forma.
            estadoFormas[index] = siguienteIndice;

            const nuevaForma = pkmn.formas[estadoFormas[index]];
            if (capEl) capEl.textContent = nuevaForma.cap;
            if (btnEl) btnEl.innerHTML = formatearBotonForma(pkmn, nuevaForma);

            actualizarColores();
        }
    }

    // Wrapper que conserva la firma original usada por el botón "Cambiar forma"
    // (avanza siempre a la SIGUIENTE forma en el array, cíclicamente).
    function cambiarForma(index, ev) {
        const pkmn = pokemonData[index];
        if (!pkmn || pkmn.formas.length <= 1) return;
        const siguienteIndice = (estadoFormas[index] + 1) % pkmn.formas.length;
        irAFormaIndice(index, siguienteIndice);
    }

    // =========================================================
    // ⌨️ ATAJOS DE TECLADO PARA SALTAR DIRECTO A UNA CATEGORÍA
    // DE FORMA: M = Mega, G = Gigantamax, P = Paradoja, F = Forma
    // derivada (Hisui / Galar / Alola). Cada tecla cicla entre las
    // formas de esa categoría (si hay varias, como Mega X / Mega Y)
    // y, al llegar a la última, vuelve a la forma base.
    // =========================================================
    function formaEsDeCategoria(cap, categoria) {
        const capOriginal = String(cap || '').trim();
        const c = capOriginal.toLowerCase();
        switch (categoria) {
            case 'mega': return /^mega-/i.test(capOriginal);
            case 'gigantamax': return c.includes('gigantamax');
            case 'paradoja': return c.includes('paradoja');
            case 'derivada':
                // Cualquier forma que NO sea Mega, Gigantamax ni Paradoja
                // (incluye la forma base, regionales, fusiones, Eternamax, etc.)
                return !formaEsDeCategoria(cap, 'mega') &&
                       !formaEsDeCategoria(cap, 'gigantamax') &&
                       !formaEsDeCategoria(cap, 'paradoja');
        }
        return false;
    }

    function activarFormaPorCategoria(categoria) {
        const index = indiceSlide;
        const pkmn = pokemonData[index];
        if (!pkmn || pkmn.formas.length <= 1) return;

        const indices = pkmn.formas
            .map((f, i) => i)
            .filter(i => formaEsDeCategoria(pkmn.formas[i].cap, categoria));
        if (!indices.length) return; // este Pokémon no tiene esa categoría de forma

        const actual = estadoFormas[index];
        const posActual = indices.indexOf(actual);
        let destino;
        if (posActual === -1) {
            destino = indices[0];
        } else if (posActual < indices.length - 1) {
            destino = indices[posActual + 1];
        } else {
            destino = 0; // volver a la forma base
        }
        irAFormaIndice(index, destino);
    }

    // =========================================================
    // 💬 SISTEMA DE COMENTARIOS
    // Los comentarios se guardan localmente en el navegador.
    // Cada Pokémon tiene su propia lista de comentarios.
    // =========================================================

    function obtenerComentarios(pokemonId) {
        const clave = `comentariosPokemon_${pokemonId}`;

        try {
            const guardados = localStorage.getItem(clave);
            return guardados ? JSON.parse(guardados) : [];
        } catch (error) {
            console.log("No se pudieron leer los comentarios:", error);
            return [];
        }
    }

    function guardarComentarios(pokemonId, comentarios) {
        const clave = `comentariosPokemon_${pokemonId}`;

        try {
            localStorage.setItem(clave, JSON.stringify(comentarios));
        } catch (error) {
            console.log("No se pudieron guardar los comentarios:", error);
        }
    }

    function escaparHTML(texto) {
        return String(texto)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function mostrarComentarios(pokemonId) {
        const contenedor = document.getElementById(`lista-comentarios-${pokemonId}`);
        if (!contenedor) return;

        const comentarios = obtenerComentarios(pokemonId);

        if (comentarios.length === 0) {
            contenedor.innerHTML = `
                <p class="sin-comentarios">
                    Aún no hay comentarios. ¡Sé el primero en dejar uno!
                </p>
            `;
            return;
        }

        contenedor.innerHTML = comentarios.map((comentario, indice) => `
            <article class="comentario">
                <div class="comentario-cabecera">
                    <strong>👤 ${escaparHTML(comentario.nombre)}</strong>
                    <button
                        type="button"
                        class="btn-eliminar-comentario"
                        onclick="eliminarComentario(${pokemonId}, ${indice})"
                        title="Eliminar comentario"
                    >
                        🗑️
                    </button>
                </div>

                <p>${escaparHTML(comentario.texto).replace(/\n/g, "<br>")}</p>

                <small>${escaparHTML(comentario.fecha)}</small>
            </article>
        `).join("");
    }

    function publicarComentario(pokemonId) {
        const inputNombre = document.getElementById(`nombre-comentario-${pokemonId}`);
        const inputTexto = document.getElementById(`texto-comentario-${pokemonId}`);

        if (!inputTexto) return;

        const nombre = inputNombre.value.trim();
        const texto = inputTexto.value.trim();

        if (!nombre) {
            alert("Escribe tu nombre antes de publicar el comentario.");
            inputNombre.focus();
            return;
        }

        if (!texto) {
            alert("Escribe un comentario antes de publicarlo.");
            inputTexto.focus();
            return;
        }

        if (texto.length > 500) {
            alert("El comentario no puede superar los 500 caracteres.");
            return;
        }

        const comentarios = obtenerComentarios(pokemonId);

        comentarios.push({
            nombre: nombre.slice(0, 30),
            texto: texto.slice(0, 500),
            fecha: new Date().toLocaleString("es-DO")
        });

        guardarComentarios(pokemonId, comentarios);

        inputNombre.value = "";
        inputTexto.value = "";

        mostrarComentarios(pokemonId);
    }

    function eliminarComentario(pokemonId, indice) {
        const comentarios = obtenerComentarios(pokemonId);

        if (!comentarios[indice]) return;

        comentarios.splice(indice, 1);
        guardarComentarios(pokemonId, comentarios);
        mostrarComentarios(pokemonId);
    }

    function cambiarSlide(direccion) {
        const slides = document.querySelectorAll('.slide');
        // Sonido de navegación del slider. Solo se reproduce tras un clic del usuario.
        try {
            const audioNavegacion = window.__audioNavegacion || (window.__audioNavegacion = crearAudioConFallback("tmpq91k5v_6.mp3"));
            audioNavegacion.currentTime = 0;
            audioNavegacion.volume = 0.55;
            audioNavegacion.play().catch(() => {});
        } catch (_) {}
        slides[indiceSlide].style.display = 'none';
        
        indiceSlide += direccion;
        
        if (indiceSlide >= slides.length) indiceSlide = 0;
        else if (indiceSlide < 0) indiceSlide = slides.length - 1;
        
        hidratarSlide(indiceSlide);
        slides[indiceSlide].style.display = 'block';
        actualizarColores();
        // 🔊 Cada Pokémon hace su grito automáticamente al mostrarse.
        reproducirGrito();
    }

    inicializarSlides();

    // Red de seguridad: si algún otro código muestra una ficha aún vacía, se construye al instante.
    (function () {
        const cont = document.getElementById('contenedor-slides');
        if (!cont) return;
        new MutationObserver(muts => muts.forEach(m => {
            const el = m.target;
            if (el.classList && el.classList.contains('slide') && el.style.display !== 'none' && !el.dataset.listo) {
                hidratarSlide(Array.prototype.indexOf.call(cont.children, el));
            }
        })).observe(cont, { attributes: true, attributeFilter: ['style'], subtree: true });
    })();

    // 💬 Cargar los comentarios guardados para cada Pokémon.
    pokemonData.forEach(pkmn => {
        mostrarComentarios(pkmn.id);
    });

    actualizarColores();
    actualizarCuentaUI();
    actualizarEstrellasFavoritos();

    // =========================================================
    // ⌨️ NAVEGACIÓN CON TECLADO (personalizable)
    // Flechas = anterior/siguiente · M/G/P/F = categorías de forma
    // ENTER = entrar a la Pokédex · ESC = salir del apartado actual.
    // El usuario puede reasignar cualquiera de estas teclas desde
    // "Más opciones → ⌨️ Personalizar teclas" (ver js/atajos-teclado.js).
    // =========================================================
    const TECLAS_ATAJOS_DEFECTO = {
        anterior: 'ArrowLeft',
        siguiente: 'ArrowRight',
        mega: 'm',
        gigantamax: 'g',
        paradoja: 'p',
        derivada: 'f',
        entrar: 'Enter',
        salir: 'Escape'
    };

    function obtenerTeclasAtajos() {
        try {
            const guardadas = JSON.parse(localStorage.getItem('pokedex_atajos_teclado') || '{}');
            return Object.assign({}, TECLAS_ATAJOS_DEFECTO, guardadas);
        } catch (_) {
            return Object.assign({}, TECLAS_ATAJOS_DEFECTO);
        }
    }

    function teclaCoincide(event, valorConfigurado) {
        if (!valorConfigurado) return false;
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(valorConfigurado)) {
            return event.key === valorConfigurado;
        }
        return event.key.toLowerCase() === String(valorConfigurado).toLowerCase();
    }

    function salirDelApartadoActual() {
        const modalAbierto = document.querySelector('.modal-sitio[aria-hidden="false"]');
        if (modalAbierto) { cerrarModal(modalAbierto.id); return; }
        if (document.body.classList.contains('en-comunidad') && typeof window.cerrarComunidad === 'function') { window.cerrarComunidad(); return; }
        if (document.body.classList.contains('en-centro') && typeof cerrarCentroEntrenador === 'function') { cerrarCentroEntrenador(); return; }
        const galeria = document.getElementById('seccion-dibujos');
        if (galeria && !galeria.hidden) { cerrarGaleriaDibujo(); return; }
        const menuDesplegable = document.getElementById('menu-inicio-lista');
        if (menuDesplegable && !menuDesplegable.hidden && typeof window.alternarMenuInicio === 'function') { window.alternarMenuInicio(); return; }
        if (document.body.classList.contains('en-pokedex')) { volverInicio(); return; }
    }

    document.addEventListener('keydown', (event) => {
        const tecla = event.key;
        const teclas = obtenerTeclasAtajos();

        const activo = document.activeElement;
        const enCampoDeTexto = activo && (
            activo.tagName === 'INPUT' ||
            activo.tagName === 'TEXTAREA' ||
            activo.tagName === 'SELECT' ||
            activo.isContentEditable
        );

        // ESC y ENTER funcionan incluso con un campo de texto enfocado
        // (salvo que un editor de atajos esté esperando la próxima tecla,
        // ver js/atajos-teclado.js, que intercepta antes de llegar aquí).
        if (teclaCoincide(event, teclas.salir)) {
            const hayModalAbierto = document.querySelector('.modal-sitio[aria-hidden="false"]');
            if (enCampoDeTexto && !hayModalAbierto) return;
            event.preventDefault();
            salirDelApartadoActual();
            return;
        }
        if (teclaCoincide(event, teclas.entrar)) {
            if (enCampoDeTexto) return;
            if (document.body.classList.contains('en-inicio') && !document.querySelector('.modal-sitio[aria-hidden="false"]')) {
                event.preventDefault();
                abrirPokedex();
            }
            return;
        }

        const esFlecha = teclaCoincide(event, teclas.anterior) || teclaCoincide(event, teclas.siguiente);
        let teclaCategoria = null;
        if (teclaCoincide(event, teclas.mega)) teclaCategoria = 'mega';
        else if (teclaCoincide(event, teclas.gigantamax)) teclaCategoria = 'gigantamax';
        else if (teclaCoincide(event, teclas.paradoja)) teclaCategoria = 'paradoja';
        else if (teclaCoincide(event, teclas.derivada)) teclaCategoria = 'derivada';

        if (!esFlecha && !teclaCategoria) return;
        if (!document.body.classList.contains('en-pokedex')) return;
        if (enCampoDeTexto) return;

        const hayModalAbierto = document.querySelector('.modal-sitio[aria-hidden="false"]');
        if (hayModalAbierto) return;

        event.preventDefault();
        if (esFlecha) {
            if (teclaCoincide(event, teclas.anterior)) {
                cambiarSlide(-1);
            } else {
                cambiarSlide(1);
            }
        } else {
            activarFormaPorCategoria(teclaCategoria);
        }
    });

// =========================================================
// ✨ AUDIO Y ANIMACIÓN DEL MODO SHINY
// =========================================================

// ✨ Sonido del modo Shiny. Se usa el archivo original de la Pokédex.
const audioShiny = crearAudioConFallback("shiny(1).mp3");
const audioShinyRespaldo = crearAudioConFallback("shiny.mp3");


function animarEstrellitasShiny() {
    const pkmn = pokemonData[indiceSlide];
    const figura = document.getElementById(`fig-${pkmn.id}`);
    const imagen = document.getElementById(`img-${pkmn.id}`);
    if (!figura) return;

    // 📏 La explosión de estrellas se adapta al tamaño visual del Pokémon
    // (mega, gigantamax u otras formas más grandes tendrán una animación mayor).
    const TAMANO_REFERENCIA = 280; // px, tamaño "normal" usado para calibrar la animación original
    let tamanoActual = TAMANO_REFERENCIA;

    if (imagen) {
        const alturaVisual = parseFloat(
            getComputedStyle(imagen).getPropertyValue('--pokemon-visual-height')
        );
        if (!Number.isNaN(alturaVisual) && alturaVisual > 0) {
            tamanoActual = alturaVisual;
        }
    }

    // Limitamos la escala para que no se vuelva minúscula ni descomunal.
    const escala = Math.min(Math.max(tamanoActual / TAMANO_REFERENCIA, 0.6), 2.2);

    const cantidadEstrellas = 12;

    for (let i = 0; i < cantidadEstrellas; i++) {
        const estrella = document.createElement('span');
        estrella.className = 'estrellita-shiny';

        // Las estrellas nacen alrededor del Pokémon y salen disparadas,
        // con una distancia proporcional al tamaño del Pokémon.
        const angulo = Math.random() * Math.PI * 2;
        const distancia = (70 + Math.random() * 100) * escala;
        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;

        // Posición inicial aleatoria alrededor del centro de la imagen.
        const inicioX = (Math.random() - 0.5) * 90 * escala;
        const inicioY = (Math.random() - 0.5) * 90 * escala;

        estrella.style.setProperty('--start-x', `${inicioX}px`);
        estrella.style.setProperty('--start-y', `${inicioY}px`);
        estrella.style.setProperty('--dest-x', `${x}px`);
        estrella.style.setProperty('--dest-y', `${y}px`);
        estrella.style.setProperty('--escala-estrella', escala.toFixed(2));

        figura.appendChild(estrella);

        // Eliminamos la estrella al terminar la animación.
        setTimeout(() => estrella.remove(), 900);
    }
}

function toggleShiny() {
    esShiny = !esShiny;
    const btn = document.getElementById('btn-toggle-shiny');

    if (esShiny) {
        btn.textContent = '✨ Desactivar Modo Shiny';
        btn.classList.add('activo');

        // Primero cambiamos al Pokémon Shiny.
        actualizarColores();

        // Después lanzamos las estrellas desde la imagen.
        animarEstrellitasShiny();

        // El clic del usuario permite al navegador reproducir este audio.
        audioShiny.currentTime = 0;
        audioShiny.volume = 0.6;
        audioShiny.play().catch(() => {
            audioShinyRespaldo.currentTime = 0;
            audioShinyRespaldo.volume = 0.6;
            audioShinyRespaldo.play().catch(err => console.log("No se pudo reproducir el sonido shiny:", err));
        });

    } else {
        btn.textContent = '✨ Activar Modo Shiny';
        btn.classList.remove('activo');

        actualizarColores();
    }
}


    // =========================================================
    // 🎨 GALERÍA DE DIBUJOS
    // Usa IndexedDB para guardar las imágenes localmente en el
    // navegador, incluso después de cerrar y volver a abrir la web.
    // No requiere servidor ni cuenta.
    // =========================================================

    const NOMBRE_BD_DIBUJOS = 'PokedexFavoritosDibujos';
    const VERSION_BD_DIBUJOS = 1;
    const NOMBRE_STORE_DIBUJOS = 'dibujos';
    let bdDibujos = null;

    function abrirBaseDatosDibujos() {
        return new Promise((resolve, reject) => {
            if (bdDibujos) {
                resolve(bdDibujos);
                return;
            }

            if (!window.indexedDB) {
                reject(new Error('Tu navegador no permite almacenamiento local de imágenes.'));
                return;
            }

            const solicitud = indexedDB.open(
                NOMBRE_BD_DIBUJOS,
                VERSION_BD_DIBUJOS
            );

            solicitud.onupgradeneeded = function(evento) {
                const bd = evento.target.result;

                if (!bd.objectStoreNames.contains(NOMBRE_STORE_DIBUJOS)) {
                    const almacen = bd.createObjectStore(
                        NOMBRE_STORE_DIBUJOS,
                        { keyPath: 'id', autoIncrement: true }
                    );

                    almacen.createIndex('fecha', 'fecha', { unique: false });
                }
            };

            solicitud.onsuccess = function(evento) {
                bdDibujos = evento.target.result;
                resolve(bdDibujos);
            };

            solicitud.onerror = function() {
                reject(solicitud.error);
            };
        });
    }

    function guardarDibujoEnBD(dibujo) {
        return abrirBaseDatosDibujos().then(bd => {
            return new Promise((resolve, reject) => {
                const transaccion = bd.transaction(
                    [NOMBRE_STORE_DIBUJOS],
                    'readwrite'
                );

                transaccion.objectStore(NOMBRE_STORE_DIBUJOS).add(dibujo);

                transaccion.oncomplete = resolve;
                transaccion.onerror = () => reject(transaccion.error);
            });
        });
    }

    function obtenerDibujosDeBD() {
        return abrirBaseDatosDibujos().then(bd => {
            return new Promise((resolve, reject) => {
                const transaccion = bd.transaction(
                    [NOMBRE_STORE_DIBUJOS],
                    'readonly'
                );

                const solicitud = transaccion
                    .objectStore(NOMBRE_STORE_DIBUJOS)
                    .getAll();

                solicitud.onsuccess = () => {
                    const dibujos = solicitud.result || [];
                    dibujos.sort((a, b) => b.fecha - a.fecha);
                    resolve(dibujos);
                };

                solicitud.onerror = () => reject(solicitud.error);
            });
        });
    }

    function eliminarDibujoDeBD(id) {
        return abrirBaseDatosDibujos().then(bd => {
            return new Promise((resolve, reject) => {
                const transaccion = bd.transaction(
                    [NOMBRE_STORE_DIBUJOS],
                    'readwrite'
                );

                transaccion.objectStore(NOMBRE_STORE_DIBUJOS).delete(id);

                transaccion.oncomplete = resolve;
                transaccion.onerror = () => reject(transaccion.error);
            });
        });
    }

    function eliminarTodosLosDibujosDeBD() {
        return abrirBaseDatosDibujos().then(bd => {
            return new Promise((resolve, reject) => {
                const transaccion = bd.transaction(
                    [NOMBRE_STORE_DIBUJOS],
                    'readwrite'
                );

                transaccion.objectStore(NOMBRE_STORE_DIBUJOS).clear();

                transaccion.oncomplete = resolve;
                transaccion.onerror = () => reject(transaccion.error);
            });
        });
    }

    function cargarPokemonesEnSelectorDibujos() {
        const selector = document.getElementById('pokemon-dibujo');

        if (!selector || !Array.isArray(pokemonData)) return;

        pokemonData.forEach((pokemon, indice) => {
            const opcion = document.createElement('option');
            opcion.value = String(indice);
            opcion.textContent = `#${String(pokemon.id).padStart(4, '0')} - ${pokemon.nombre}`;
            selector.appendChild(opcion);
        });
    }

    function mostrarVistaPreviaDibujo() {
        const input = document.getElementById('archivo-dibujo');
        const preview = document.getElementById('vista-previa-dibujo');

        if (!input || !preview) return;

        const archivo = input.files[0];

        if (!archivo) {
            preview.innerHTML = '<span>🖼️ Aquí aparecerá una vista previa</span>';
            return;
        }

        if (!archivo.type.startsWith('image/')) {
            preview.innerHTML = '<span>⚠️ Selecciona un archivo de imagen.</span>';
            input.value = '';
            return;
        }

        const lector = new FileReader();

        lector.onload = function(evento) {
            preview.innerHTML = `
                <img src="${evento.target.result}" alt="Vista previa del dibujo" decoding="async">
                <span>${archivo.name}</span>
            `;
        };

        lector.readAsDataURL(archivo);
    }

    async function agregarDibujo() {
        const selector = document.getElementById('pokemon-dibujo');
        const inputArchivo = document.getElementById('archivo-dibujo');
        const inputAutor = document.getElementById('autor-dibujo');
        const mensaje = document.getElementById('mensaje-dibujo');
        const boton = document.getElementById('btn-agregar-dibujo');

        if (!selector || !inputArchivo || !inputAutor || !mensaje || !boton) return;

        const indicePokemon = Number(selector.value);
        const archivo = inputArchivo.files[0];
        const autor = inputAutor.value.trim() || 'Artista anónimo';

        if (selector.value === '') {
            mensaje.textContent = '⚠️ Selecciona qué Pokémon aparece en el dibujo.';
            mensaje.className = 'mensaje-dibujo error';
            return;
        }

        if (!archivo) {
            mensaje.textContent = '⚠️ Selecciona una imagen para subir.';
            mensaje.className = 'mensaje-dibujo error';
            return;
        }

        if (!archivo.type.startsWith('image/')) {
            mensaje.textContent = '⚠️ El archivo seleccionado no es una imagen.';
            mensaje.className = 'mensaje-dibujo error';
            return;
        }

        if (archivo.size > 8 * 1024 * 1024) {
            mensaje.textContent = '⚠️ La imagen supera los 8 MB. Elige una más pequeña.';
            mensaje.className = 'mensaje-dibujo error';
            return;
        }

        const pokemon = pokemonData[indicePokemon];

        if (!pokemon) {
            mensaje.textContent = '⚠️ No se pudo encontrar ese Pokémon.';
            mensaje.className = 'mensaje-dibujo error';
            return;
        }

        boton.disabled = true;
        boton.textContent = '⏳ Guardando...';

        try {
            await guardarDibujoEnBD({
                nombrePokemon: pokemon.nombre,
                numeroPokemon: pokemon.id,
                autor: autor,
                nombreArchivo: archivo.name,
                tipoArchivo: archivo.type,
                imagen: archivo,
                fecha: Date.now()
            });

            mensaje.textContent = '✅ ¡Dibujo agregado a la galería!';
            mensaje.className = 'mensaje-dibujo exito';

            selector.value = '';
            inputArchivo.value = '';
            inputAutor.value = '';

            document.getElementById('vista-previa-dibujo').innerHTML =
                '<span>🖼️ Aquí aparecerá una vista previa</span>';

            await cargarGaleriaDibujos();

        } catch (error) {
            console.error('Error guardando dibujo:', error);
            mensaje.textContent =
                '❌ No se pudo guardar la imagen en este navegador.';
            mensaje.className = 'mensaje-dibujo error';
        }

        boton.disabled = false;
        boton.textContent = '➕ Agregar dibujo';
    }

    async function cargarGaleriaDibujos() {
        const galeria = document.getElementById('galeria-dibujos');

        if (!galeria) return;

        try {
            const dibujosTodos = await obtenerDibujosDeBD();
            const dibujos = filtroGaleriaPokemonId === null
                ? dibujosTodos
                : dibujosTodos.filter(d => Number(d.numeroPokemon) === Number(filtroGaleriaPokemonId));

            if (dibujos.length === 0) {
                galeria.innerHTML = filtroGaleriaPokemonId === null
                    ? '<p class="galeria-vacia">Todavía no hay dibujos guardados. ¡Sube el primero! ✨</p>'
                    : '<p class="galeria-vacia">Todavía no hay fan arts guardados de este Pokémon. ¡Sube el primero! ✨</p>';
                return;
            }

            galeria.innerHTML = '';

            dibujos.forEach(dibujo => {
                const tarjeta = document.createElement('article');
                tarjeta.className = 'tarjeta-dibujo';

                const imagen = document.createElement('img');
                imagen.className = 'imagen-dibujo';
                imagen.alt = `Dibujo de ${dibujo.nombrePokemon}`;
                imagen.src = URL.createObjectURL(dibujo.imagen);

                const informacion = document.createElement('div');
                informacion.className = 'info-dibujo';

                const titulo = document.createElement('h4');
                titulo.textContent =
                    `#${String(dibujo.numeroPokemon).padStart(4, '0')} - ${dibujo.nombrePokemon}`;

                const artista = document.createElement('p');
                artista.innerHTML =
                    `🎨 Dibujado por <strong>${escapeHtmlDibujo(dibujo.autor)}</strong>`;

                const fecha = document.createElement('small');
                fecha.textContent = new Date(dibujo.fecha).toLocaleString('es-DO');

                const botonEliminar = document.createElement('button');
                botonEliminar.type = 'button';
                botonEliminar.className = 'btn-eliminar-dibujo';
                botonEliminar.textContent = '🗑️ Eliminar';
                botonEliminar.onclick = () => eliminarDibujo(dibujo.id);

                informacion.appendChild(titulo);
                informacion.appendChild(artista);
                informacion.appendChild(fecha);
                informacion.appendChild(botonEliminar);

                tarjeta.appendChild(imagen);
                tarjeta.appendChild(informacion);

                galeria.appendChild(tarjeta);
            });

        } catch (error) {
            console.error('Error cargando la galería:', error);
            galeria.innerHTML =
                '<p class="galeria-vacia">⚠️ No se pudo cargar la galería en este navegador.</p>';
        }
    }

    function escapeHtmlDibujo(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    }

    async function eliminarDibujo(id) {
        const confirmar = confirm(
            '¿Quieres eliminar este dibujo de la galería de este navegador?'
        );

        if (!confirmar) return;

        try {
            await eliminarDibujoDeBD(id);
            await cargarGaleriaDibujos();
        } catch (error) {
            console.error('Error eliminando dibujo:', error);
        }
    }

    async function borrarTodosLosDibujos() {
        const confirmar = confirm(
            '¿Seguro que quieres borrar todos los dibujos guardados en este navegador?'
        );

        if (!confirmar) return;

        try {
            await eliminarTodosLosDibujosDeBD();
            await cargarGaleriaDibujos();

            const mensaje = document.getElementById('mensaje-dibujo');
            if (mensaje) {
                mensaje.textContent = '🗑️ Se borraron todos los dibujos guardados.';
                mensaje.className = 'mensaje-dibujo exito';
            }
        } catch (error) {
            console.error('Error borrando dibujos:', error);
        }
    }

    let filtroGaleriaPokemonId = null;

    // Abre la galería desde el Pokémon actual y deja seleccionado ese Pokémon.
    function abrirGaleriaDibujo(pokemonId) {
        document.body.classList.add('en-pokedex');
        document.body.classList.remove('en-inicio', 'en-comunidad', 'en-centro');
        const seccion = document.getElementById('seccion-dibujos');
        const selector = document.getElementById('pokemon-dibujo');
        const pokemon = pokemonData.find(p => Number(p.id) === Number(pokemonId));
        if (!seccion || !pokemon) return;

        filtroGaleriaPokemonId = Number(pokemonId);
        seccion.hidden = false;
        if (selector) selector.value = String(pokemonId);

        const titulo = seccion.querySelector('.cabecera-dibujos h2');
        const descripcion = seccion.querySelector('.cabecera-dibujos p');
        if (titulo) titulo.textContent = `Fan Arts de ${pokemon.nombre}`;
        if (descripcion) descripcion.textContent = `Dibujos guardados de ${pokemon.nombre} en este navegador. También puedes subir uno propio.`;

        cargarGaleriaDibujos();
        requestAnimationFrame(() => seccion.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }

    window.abrirGaleriaDibujo = abrirGaleriaDibujo;

    function cerrarGaleriaDibujo() {
        const seccion = document.getElementById('seccion-dibujos');
        if (!seccion) return;
        filtroGaleriaPokemonId = null;
        seccion.hidden = true;
        const titulo = seccion.querySelector('.cabecera-dibujos h2');
        const descripcion = seccion.querySelector('.cabecera-dibujos p');
        if (titulo) titulo.textContent = 'Galería de Dibujos';
        if (descripcion) descripcion.textContent = 'Guarda un dibujo hecho por ti de tu Pokémon favorito. Se conserva solo en este navegador.';
    }

    window.cerrarGaleriaDibujo = cerrarGaleriaDibujo;

    function inicializarGaleriaDibujos() {
        cargarPokemonesEnSelectorDibujos();

        const input = document.getElementById('archivo-dibujo');

        if (input) {
            input.addEventListener('change', mostrarVistaPreviaDibujo);
        }

        cargarGaleriaDibujos();
    }

    // =========================================================
    // 👤 CUENTAS, ⭐ FAVORITOS, 📩 PETICIONES Y 🚨 REPORTES
    // Versión local: usa localStorage para conservar los datos en este navegador.
    // =========================================================

    // (usuarioActual se declara al inicio del archivo para que esté disponible desde la carga.)

    function obtenerUsuarios() {
        try { return JSON.parse(localStorage.getItem('pokedex_usuarios') || '{}'); }
        catch { return {}; }
    }

    function guardarUsuarios(usuarios) {
        localStorage.setItem('pokedex_usuarios', JSON.stringify(usuarios));
    }

    // 🔐 CONTRASEÑAS CON HASH
    // La contraseña nunca se guarda en texto plano: se guarda un hash PBKDF2-SHA256 con sal aleatoria.
    // (Sigue siendo una cuenta local del navegador; para cuentas reales usa Supabase Auth.)
    const ITERACIONES_CLAVE = 100000;

    function bytesAHex(buffer) {
        return Array.from(new Uint8Array(buffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    function hexABytes(hex) {
        const pares = String(hex).match(/.{1,2}/g) || [];
        return new Uint8Array(pares.map(h => parseInt(h, 16)));
    }

    function generarSal() {
        return bytesAHex(crypto.getRandomValues(new Uint8Array(16)));
    }

    // Devuelve el hash en hexadecimal, o null si el navegador no ofrece crypto.subtle (p. ej. http sin localhost).
    async function derivarClave(clave, saltHex, iteraciones) {
        if (!(window.crypto && crypto.subtle)) return null;
        const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(clave), 'PBKDF2', false, ['deriveBits']);
        const bits = await crypto.subtle.deriveBits(
            { name: 'PBKDF2', salt: hexABytes(saltHex), iterations: iteraciones || ITERACIONES_CLAVE, hash: 'SHA-256' },
            material, 256
        );
        return bytesAHex(bits);
    }

    function existeUsuario(usuarios, nombre) {
        return Object.prototype.hasOwnProperty.call(usuarios, nombre);
    }

    // Convierte una cuenta antigua (contraseña en texto plano) a hash y borra el texto plano.
    async function migrarCuentaAntigua(nombre, clave) {
        const salt = generarSal();
        const hash = await derivarClave(clave, salt);
        if (!hash) return false;
        const usuarios = obtenerUsuarios();
        if (!existeUsuario(usuarios, nombre)) return false;
        usuarios[nombre] = { salt, hash, iter: ITERACIONES_CLAVE, creado: usuarios[nombre].creado || new Date().toLocaleString('es-DO') };
        guardarUsuarios(usuarios);
        return true;
    }

    async function migrarClavesAntiguas() {
        const usuarios = obtenerUsuarios();
        for (const nombre of Object.keys(usuarios)) {
            const cuenta = usuarios[nombre];
            if (cuenta && typeof cuenta.clave === 'string') {
                if (!(await migrarCuentaAntigua(nombre, cuenta.clave))) return;
            }
        }
    }

    async function registrarCuenta() {
        const usuario = document.getElementById('cuenta-usuario').value.trim();
        const clave = document.getElementById('cuenta-clave').value;
        if (usuario.length < 2) return alert('El nombre debe tener al menos 2 caracteres.');
        if (clave.length < 4) return alert('La contraseña debe tener al menos 4 caracteres.');
        if (existeUsuario(obtenerUsuarios(), usuario)) return alert('Ese nombre de usuario ya existe.');
        const salt = generarSal();
        const hash = await derivarClave(clave, salt);
        if (!hash) return alert('Tu navegador no permite proteger la contraseña en este contexto. Abre la web desde https o desde localhost.');
        const usuarios = obtenerUsuarios();
        if (existeUsuario(usuarios, usuario)) return alert('Ese nombre de usuario ya existe.');
        usuarios[usuario] = { salt, hash, iter: ITERACIONES_CLAVE, creado: new Date().toLocaleString('es-DO') };
        guardarUsuarios(usuarios);
        usuarioActual = usuario;
        localStorage.setItem('pokedex_usuario_actual', usuarioActual);
        actualizarCuentaUI();
        alert('¡Cuenta creada correctamente!');
    }

    async function iniciarSesion() {
        const usuario = document.getElementById('cuenta-usuario').value.trim();
        const clave = document.getElementById('cuenta-clave').value;
        const usuarios = obtenerUsuarios();
        const cuenta = existeUsuario(usuarios, usuario) ? usuarios[usuario] : null;
        let valida = false;
        if (cuenta && cuenta.hash && cuenta.salt) {
            const hash = await derivarClave(clave, cuenta.salt, cuenta.iter);
            valida = hash !== null && hash === cuenta.hash;
        } else if (cuenta && typeof cuenta.clave === 'string') {
            // Cuenta creada con la versión anterior: se valida y se convierte a hash.
            valida = cuenta.clave === clave;
            if (valida) await migrarCuentaAntigua(usuario, clave);
        }
        if (!valida) return alert('Usuario o contraseña incorrectos.');
        usuarioActual = usuario;
        localStorage.setItem('pokedex_usuario_actual', usuarioActual);
        actualizarCuentaUI();
        alert(`¡Bienvenido, ${usuarioActual}!`);
    }

    // Las cuentas antiguas guardadas en texto plano se convierten a hash apenas carga la web.
    migrarClavesAntiguas().catch(err => console.warn('No se pudieron migrar las contraseñas antiguas:', err));

    function cerrarSesion() {
        usuarioActual = '';
        localStorage.removeItem('pokedex_usuario_actual');
        actualizarCuentaUI();
    }

    function actualizarCuentaUI() {
        const activo = document.getElementById('cuenta-activa');
        const form = document.getElementById('formulario-cuenta');
        const btnCerrar = document.getElementById('btn-cerrar-sesion');
        const estado = document.getElementById('estado-cuenta-inicio');
        if (usuarioActual) {
            if (activo) activo.innerHTML = `✅ Sesión iniciada como <strong>${escaparHTML(usuarioActual)}</strong>`;
            if (form) form.style.display = 'none';
            if (btnCerrar) btnCerrar.style.display = 'block';
            if (estado) estado.innerHTML = `👤 Sesión: <strong>${escaparHTML(usuarioActual)}</strong>`;
            document.querySelectorAll('[id^="nombre-comentario-"]').forEach(input => {
                if (!input.value) input.value = usuarioActual;
            });
            ['peticion-nombre','reporte-nombre'].forEach(id => {
                const el = document.getElementById(id);
                if (el && !el.value) el.value = usuarioActual;
            });
        } else {
            if (activo) activo.textContent = 'No has iniciado sesión.';
            if (form) form.style.display = 'block';
            if (btnCerrar) btnCerrar.style.display = 'none';
            if (estado) estado.textContent = '👤 Navegando como visitante';
        }
        actualizarEstrellasFavoritos();
    }

    function abrirModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.add('visible');
        modal.setAttribute('aria-hidden', 'false');
        if (id === 'modal-cuenta') actualizarCuentaUI();
        if (id === 'modal-peticiones') mostrarPeticiones();
        if (id === 'modal-reportes') mostrarReportes();
    }

    function cerrarModal(id) {
        const modal = document.getElementById(id);
        if (!modal) return;
        modal.classList.remove('visible');
        modal.setAttribute('aria-hidden', 'true');
    }

    document.addEventListener('click', event => {
        if (event.target.classList.contains('modal-sitio')) {
            event.target.classList.remove('visible');
            event.target.setAttribute('aria-hidden', 'true');
        }
    });

    // ⭐ FAVORITOS: se guardan de forma persistente en localStorage.
    // Cada cuenta tiene su propia lista; el visitante también puede guardar favoritos.
    function claveFavoritos() {
        return usuarioActual ? `pokedex_favoritos_${usuarioActual}` : 'pokedex_favoritos_visitante';
    }

    function obtenerFavoritos() {
        try {
            const guardados = JSON.parse(localStorage.getItem(claveFavoritos()) || '[]');
            return Array.isArray(guardados) ? guardados.map(Number).filter(Number.isFinite) : [];
        } catch (error) {
            console.log('No se pudieron leer los favoritos:', error);
            return [];
        }
    }

    function guardarFavoritos(lista) {
        try {
            localStorage.setItem(claveFavoritos(), JSON.stringify([...new Set(lista.map(Number))]));
            return true;
        } catch (error) {
            console.log('No se pudieron guardar los favoritos:', error);
            alert('No se pudieron guardar los favoritos en este navegador.');
            return false;
        }
    }

    function alternarFavorito(id) {
        id = Number(id);
        const favoritos = obtenerFavoritos();
        const pos = favoritos.indexOf(id);

        if (pos >= 0) {
            favoritos.splice(pos, 1);
        } else {
            favoritos.push(id);
        }

        if (guardarFavoritos(favoritos)) {
            actualizarEstrellasFavoritos();
        }
    }

    function actualizarEstrellasFavoritos(soloId) {
        const favoritos = obtenerFavoritos();
        if (!Array.isArray(pokemonData)) return;

        (typeof soloId === 'number' ? pokemonData.filter(p => p.id === soloId) : pokemonData).forEach(pkmn => {
            const btn = document.getElementById(`btn-favorito-${pkmn.id}`);
            if (!btn) return;

            const esFavorito = favoritos.includes(Number(pkmn.id));
            btn.textContent = esFavorito ? '★' : '☆';
            btn.classList.toggle('activo', esFavorito);
            btn.dataset.favorito = esFavorito ? 'true' : 'false';
            btn.title = esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito';
            btn.setAttribute('aria-label', btn.title);
        });
    }

    function mostrarFavoritos() {
        const cont = document.getElementById('lista-favoritos');
        if (!cont) return;
        const favoritos = obtenerFavoritos();
        if (!favoritos.length) {
            cont.innerHTML = '<p class="sin-datos">Todavía no tienes Pokémon favoritos. Pulsa ☆ en cualquier Pokémon.</p>';
        } else {
            cont.innerHTML = favoritos.map(id => {
                const p = pokemonData.find(x => x.id === id);
                return p ? `<button class="item-favorito" onclick="irAPokemon(${pokemonData.indexOf(p)})">★ #${String(p.id).padStart(4,'0')} - ${escaparHTML(p.nombre)}</button>` : '';
            }).join('');
        }
        abrirModal('modal-favoritos');
    }

    function irAPokemon(indice) {
        cerrarModal('modal-favoritos');
        document.body.classList.add('en-pokedex');
        document.body.classList.remove('en-inicio');
        mostrarSoloSlide(indice);
        indiceSlide = indice;
        actualizarColores();
        reproducirGrito();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // =========================================================
    // 🏷️ FILTRO DE POKÉMON POR TIPO
    // Al pulsar el logo de un tipo se abre un apartado con todos
    // los Pokémon que compartan ese tipo.
    // =========================================================
    function filtrarPorTipo(claveTipo) {
        const cont = document.getElementById('lista-tipo');
        const titulo = document.getElementById('titulo-tipo');
        if (!cont) return;

        const info = TIPO_INFO[claveTipo];
        const nombreTipo = info ? info.nombre : claveTipo;
        if (titulo) titulo.textContent = `🏷️ Pokémon de tipo ${nombreTipo}`;

        const coincidentes = pokemonData.filter(p => {
            const limpio = String(p.tipo || '').replace(/\([^)]*\)/g, '');
            const tiposPkmn = limpio.split('/').map(t => normalizarTexto(t.trim()));
            return tiposPkmn.includes(claveTipo);
        });

        if (!coincidentes.length) {
            cont.innerHTML = '<p class="sin-datos">No hay Pokémon de este tipo en la colección todavía.</p>';
        } else {
            cont.innerHTML = coincidentes.map(p => {
                const forma = p.formas[0];
                const imagen = obtenerImagenUrl(forma, 'oficial', p.id);
                return `<button type="button" class="item-tipo" onclick="irAPokemonDesdeTipo(${pokemonData.indexOf(p)})">` +
                    `<img src="${imagen}" alt="${escaparHTML(p.nombre)}" loading="lazy" decoding="async">` +
                    `<span>#${String(p.id).padStart(4, '0')} ${escaparHTML(p.nombre)}</span>` +
                `</button>`;
            }).join('');
        }

        abrirModal('modal-tipo');
    }

    function irAPokemonDesdeTipo(indice) {
        cerrarModal('modal-tipo');
        document.body.classList.add('en-pokedex');
        document.body.classList.remove('en-inicio');
        mostrarSoloSlide(indice);
        indiceSlide = indice;
        actualizarColores();
        reproducirGrito();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // =========================================================
    // 🌟💥 EXPLORAR POR MEGAEVOLUCIÓN / GIGANTAMAX
    // Dos botones con solo el logo (junto a "Explorar") que muestran
    // la lista de Pokémon que tienen esa forma especial. Al elegir uno,
    // se abre directamente en su forma Mega o Gigantamax (sin pasar
    // primero por la forma base).
    // =========================================================
    function filtrarPorCategoriaForma(categoria) {
        const cont = document.getElementById('lista-forma-especial');
        const titulo = document.getElementById('titulo-forma-especial');
        if (!cont) return;

        if (titulo) {
            titulo.textContent = categoria === 'gigantamax'
                ? '💥 Pokémon con Gigantamax'
                : '🌟 Pokémon con Megaevolución';
        }

        const coincidentes = pokemonData.filter(p =>
            p.formas.some(f => formaEsDeCategoria(f.cap, categoria))
        );

        if (!coincidentes.length) {
            cont.innerHTML = '<p class="sin-datos">Todavía no hay Pokémon con esta forma en la colección.</p>';
        } else {
            cont.innerHTML = coincidentes.map(p => {
                const forma = p.formas[0];
                const imagen = obtenerImagenUrl(forma, 'oficial', p.id);
                return `<button type="button" class="item-tipo" onclick="irAPokemonEnCategoria(${pokemonData.indexOf(p)}, '${categoria}')">` +
                    `<img src="${imagen}" alt="${escaparHTML(p.nombre)}" loading="lazy" decoding="async">` +
                    `<span>#${String(p.id).padStart(4, '0')} ${escaparHTML(p.nombre)}</span>` +
                `</button>`;
            }).join('');
        }

        abrirModal('modal-forma-especial');
    }

    // Navega directo al Pokémon elegido y lo deja ya transformado
    // (Mega o Gigantamax), sin necesidad de tocar el botón de cambio de forma.
    function irAPokemonEnCategoria(indice, categoria) {
        cerrarModal('modal-forma-especial');
        document.body.classList.add('en-pokedex');
        document.body.classList.remove('en-inicio');
        mostrarSoloSlide(indice);
        indiceSlide = indice;

        const pkmn = pokemonData[indice];
        const indicesCategoria = pkmn.formas
            .map((f, i) => i)
            .filter(i => formaEsDeCategoria(pkmn.formas[i].cap, categoria));

        if (indicesCategoria.length) {
            estadoFormas[indice] = indicesCategoria[0];
            const nuevaForma = pkmn.formas[estadoFormas[indice]];
            hidratarSlide(indice);
            const capEl = document.getElementById(`cap-${pkmn.id}`);
            const slideEl = document.querySelectorAll('.slide')[indice];
            const btnEl = slideEl ? slideEl.querySelector('.btn-forma') : null;
            if (capEl) capEl.textContent = nuevaForma.cap;
            if (btnEl) btnEl.innerHTML = formatearBotonForma(pkmn, nuevaForma);
        }

        actualizarColores();
        reproducirGrito();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function obtenerListaLocal(clave) {
        try { return JSON.parse(localStorage.getItem(clave) || '[]'); }
        catch { return []; }
    }
    function guardarListaLocal(clave, lista) { localStorage.setItem(clave, JSON.stringify(lista)); }

    function enviarPeticion() {
        const nombre = document.getElementById('peticion-nombre').value.trim();
        const texto = document.getElementById('peticion-pokemon').value.trim();
        if (!nombre) return alert('El nombre es obligatorio para enviar una petición.');
        if (!texto) return alert('Indica qué Pokémon quieres solicitar.');
        const lista = obtenerListaLocal('pokedex_peticiones');
        lista.unshift({ nombre: nombre.slice(0,30), pokemon: texto.slice(0,300), fecha: new Date().toLocaleString('es-DO'), estado: 'Pendiente' });
        guardarListaLocal('pokedex_peticiones', lista);
        document.getElementById('peticion-pokemon').value = '';
        mostrarPeticiones();
        alert('¡Petición guardada en este navegador!');
    }

    function mostrarPeticiones() {
        const cont = document.getElementById('lista-peticiones');
        if (!cont) return;
        const lista = obtenerListaLocal('pokedex_peticiones');
        cont.innerHTML = lista.length ? lista.map(p => `<article class="item-sitio"><strong>👤 ${escaparHTML(p.nombre)}</strong><span>📅 ${escaparHTML(p.fecha)}</span><p>${escaparHTML(p.pokemon)}</p><small>Estado: ${escaparHTML(p.estado)}</small></article>`).join('') : '<p class="sin-datos">Todavía no hay peticiones.</p>';
    }

    function enviarReporte() {
        const nombre = document.getElementById('reporte-nombre').value.trim();
        const pokemon = document.getElementById('reporte-pokemon').value.trim();
        const descripcion = document.getElementById('reporte-descripcion').value.trim();
        if (!nombre) return alert('El nombre es obligatorio para enviar un reporte.');
        if (!descripcion) return alert('Describe el error antes de enviarlo.');
        const lista = obtenerListaLocal('pokedex_reportes');
        lista.unshift({ nombre: nombre.slice(0,30), pokemon: pokemon.slice(0,80), descripcion: descripcion.slice(0,500), fecha: new Date().toLocaleString('es-DO'), estado: 'Pendiente' });
        guardarListaLocal('pokedex_reportes', lista);
        document.getElementById('reporte-descripcion').value = '';
        mostrarReportes();
        alert('¡Reporte guardado en este navegador!');
    }

    function mostrarReportes() {
        const cont = document.getElementById('lista-reportes');
        if (!cont) return;
        const lista = obtenerListaLocal('pokedex_reportes');
        cont.innerHTML = lista.length ? lista.map(r => `<article class="item-sitio"><strong>👤 ${escaparHTML(r.nombre)}</strong><span>📅 ${escaparHTML(r.fecha)}</span>${r.pokemon ? `<b>🎯 ${escaparHTML(r.pokemon)}</b>` : ''}<p>${escaparHTML(r.descripcion)}</p><small>Estado: ${escaparHTML(r.estado)}</small></article>`).join('') : '<p class="sin-datos">Todavía no hay reportes.</p>';
    }

    // 🌟💥 Rellena los botones de "Buscar Megaevoluciones" / "Buscar Gigantamax"
    // del header con los mismos logos que ya usan los botones de transformación.
    document.querySelectorAll('img[data-icono="mega"]').forEach(img => { img.src = ICONO_MEGA; });
    document.querySelectorAll('img[data-icono="gigantamax"]').forEach(img => { img.src = ICONO_GIGANTAMAX; });

    // La página abre primero en la pantalla principal.
    document.body.classList.add('en-inicio');
    iniciarFondoInicio();
    inicializarGaleriaDibujos();
