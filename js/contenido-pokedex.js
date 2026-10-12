/* =========================================================
   📚 CONTENIDO DE POKÉDEX — Curiosidades + Comparador
   No modifica ninguna función existente: solo añade.
   ========================================================= */
(function () {
    'use strict';

    const esc = t => String(t ?? '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const hayDatos = () => typeof pokemonData !== 'undefined' && Array.isArray(pokemonData) && pokemonData.length > 0;

    /* ---------------------------------------------------------
       1) 🔎 CURIOSIDADES POR POKÉMON
       Curadas a mano para los más icónicos. Los que todavía no
       tienen una escrita muestran un mensaje genérico (no rompe
       nada y queda listo para seguir ampliándose).
       --------------------------------------------------------- */
    const CURIOSIDADES = {
        1: "Bulbasaur es el único inicial de la primera generación que es a la vez tipo Planta y Veneno.",
        3: "La flor de Venusaur libera un aroma que, según los juegos, calma los ánimos de quienes pelean cerca.",
        6: "Charizard no es de tipo Dragón, aunque lo parezca: sigue siendo Fuego/Volador incluso en su Megaevolución X.",
        9: "Los cañones del caparazón de Blastoise pueden disparar agua con fuerza suficiente para perforar acero, según su Pokédex.",
        25: "Pikachu fue elegido como mascota de la franquicia por su diseño redondeado y sus mejillas, pensadas para transmitir ternura en pantallas pequeñas.",
        26: "Raichu de Alola es de tipo Eléctrico/Psíquico porque surfea sobre su propia cola gracias a ondas cerebrales.",
        38: "Ninetales de Alola es de tipo Hielo/Hada y está inspirado en leyendas de zorros de nueve colas del folclore japonés.",
        39: "Jigglypuff duerme mientras canta para hipnotizar a su público, un chiste recurrente del anime.",
        59: "Arcanine estaba pensado originalmente como un Pokémon legendario antes de convertirse en la evolución de Growlithe.",
        65: "Alakazam tiene un cerebro que, según la Pokédex, nunca deja de crecer, lo que le da un coeficiente intelectual altísimo.",
        68: "Machamp tiene tantos brazos que puede lanzar mil puñetazos en dos segundos, según su descripción oficial.",
        80: "Slowbro obtiene sus poderes psíquicos gracias a la mordedura de un Shellder en su cola.",
        94: "Gengar es, según una leyenda popular del fandom, la sombra de Clefable; ambos comparten curva de estadísticas.",
        123: "Scyther tiene hojas afiladas en lugar de brazos y puede cortar troncos de un solo tajo.",
        130: "Gyarados era conocido en leyendas antiguas por destruir pueblos enteros cuando se enfurecía.",
        131: "Lapras casi fue extinguido por la caza excesiva; en los juegos se le considera un Pokémon protegido.",
        133: "Eevee tiene un ADN inestable que le permite evolucionar en más formas que casi cualquier otro Pokémon.",
        134: "Vaporeon puede disolver su estructura celular hasta parecer transparente en el agua.",
        135: "Jolteon eriza su pelaje para acumular electricidad estática antes de liberarla.",
        136: "Flareon almacena aire caliente en su bolsa interna, alcanzando temperaturas de más de 900 grados.",
        143: "Snorlax come cerca de 400 kilos de comida al día y luego duerme para hacer la digestión.",
        149: "Dragonite es tan amable que ayuda a marineros perdidos a llegar a tierra firme, según su Pokédex.",
        150: "Mewtwo fue creado en un laboratorio a partir del ADN de Mew, buscando ser el Pokémon más fuerte posible.",
        196: "Espeon percibe el aire con su pelaje y puede predecir el clima o los movimientos del rival.",
        197: "Umbreon segrega una sustancia toxica por sus poros cuando siente miedo o se pone tenso.",
        208: "Steelix puede vivir a más de mil metros bajo tierra y su cuerpo se endurece con la presión.",
        212: "Scizor regula la temperatura de sus alas para poder volar a máxima velocidad sin sobrecalentarse.",
        214: "Heracross usa su cuerno para lanzar rivales mucho más grandes que él, se alimenta de savia de árboles.",
        229: "Houndoom es apodado el 'Pokémon de la Guía' porque su aullido anuncia la llegada del invierno.",
        244: "Entei es uno de los tres perros legendarios nacidos de las cenizas de la Torre Quemada.",
        248: "Tyranitar es tan pesado y fuerte que un paso suyo puede provocar un pequeño terremoto.",
        249: "Lugia es conocido como 'el guardián de los mares' y suele vivir en las profundidades para no destruir todo con su aleteo.",
        250: "Ho-Oh está asociado a la felicidad: se dice que quien lo ve alcanzará la dicha eterna.",
        254: "Sceptile puede lanzar semillas desde las hojas de sus brazos para atacar a distancia.",
        255: "Torchic tiene una bolsa de fuego dentro del cuerpo que nunca se apaga mientras esté sano.",
        257: "Blaziken es tan veloz que puede saltar sobre un edificio de 30 pisos.",
        258: "Mudkip percibe los cambios de presión del agua gracias a la aleta en su cabeza.",
        260: "Swampert tiene tanta fuerza en los brazos que puede mover rocas gigantes sin esfuerzo.",
        282: "Gardevoir es capaz de crear un campo de distorsión para proteger a su entrenador, incluso a costa de su propia vida.",
        286: "Breloom libera esporas venenosas de las bolsas de su cola antes de atacar con sus puños.",
        306: "Aggron considera todo su territorio, incluidas montañas enteras, como propio y las reconstruye si se dañan.",
        319: "Sharpedo puede nadar a 120 km/h gracias a su cuerpo con forma de torpedo.",
        321: "Wailord es el Pokémon más largo conocido, con más de 14 metros de longitud.",
        330: "Flygon agita sus alas para generar tormentas de arena que ocultan a su presa, ganándose el apodo de 'espíritu del desierto'.",
        334: "Altaria tiene plumas hechas de auténticas nubes, tan suaves que dan ganas de dormir sobre ellas.",
        350: "Milotic es considerado el Pokémon más hermoso, capaz de calmar corazones con solo mirarlo.",
        359: "Absol aparece antes de un desastre natural, por lo que la gente lo confundía erróneamente con la causa de las catástrofes.",
        362: "Glalie puede congelar el aire a su alrededor para crear cristales de hielo con solo exhalar.",
        373: "Salamence rompe su propio capullo interno al evolucionar por el ansia de volar libremente.",
        376: "Metagross tiene cuatro cerebros conectados que le permiten resolver ecuaciones más rápido que una supercomputadora.",
        382: "Kyogre expandió los mares en tiempos antiguos al enfrentarse a Groudon, según la mitología de Hoenn.",
        383: "Groudon puede evaporar el agua a su alrededor y expandir los continentes con su poder.",
        384: "Rayquaza vive en la capa de ozono y desciende a tierra solo para calmar las peleas entre Kyogre y Groudon.",
        389: "Torterra lleva un ecosistema completo sobre su caparazón, con árboles y hasta pequeños Pokémon.",
        392: "Infernape combina artes marciales con su cabeza en llamas, un homenaje al Rey Mono de la mitología china.",
        395: "Empoleon tiene alas en forma de cuchillas doradas capaces de cortar icebergs.",
        405: "Luxray puede ver a través de obstáculos gracias a sus ojos, que funcionan casi como rayos X.",
        407: "Roserade sostiene dos ramos: uno esconde una potente toxina y el otro un antídoto.",
        430: "Honchkrow dirige bandadas de Murkrow como si fuera su jefe indiscutible.",
        445: "Garchomp puede volar a la velocidad de un caza de combate gracias a las alas de sus brazos.",
        448: "Lucario puede leer las emociones y pensamientos de los demás percibiendo el aura que emiten.",
        464: "Rhyperior dispara rocas comprimidas dentro de los agujeros de sus palmas como si fueran cañones.",
        468: "Togekiss reparte buena fortuna allá donde vuela, según la leyenda popular de los juegos.",
        470: "Leafeon mantiene siempre una temperatura corporal fresca gracias a la fotosíntesis en sus hojas.",
        471: "Glaceon puede congelar el vello de su cuerpo para crear diamantes de hielo afilados.",
        475: "Gallade es la única evolución de Kirlia exclusiva para ejemplares macho, obtenida con una Piedra Alba.",
        478: "Froslass nace cuando una Snorunt hembra es alcanzada por una energía misteriosa proveniente de una montaña helada.",
        483: "Dialga puede controlar el flujo del tiempo y se dice que nació al mismo tiempo que el universo.",
        484: "Palkia puede distorsionar el espacio para viajar entre dimensiones distintas.",
        487: "Giratina fue desterrado a un mundo distorsionado por su comportamiento violento.",
        491: "Darkrai provoca pesadillas involuntariamente con solo estar cerca de alguien dormido.",
        493: "Arceus, según el mito, dio forma al universo desde un huevo y creó a Dialga, Palkia y Giratina.",
        503: "Samurott ataca con la hoja curva que sale de su armadura, tan afilada que puede cortar aceite.",
        571: "Zoroark puede crear ilusiones tan realistas que engañan tanto a personas como a otros Pokémon.",
        612: "Haxorus es apodado 'el as' entre los Pokémon dragón por la fuerza destructiva de sus colmillos.",
        635: "Hydreigon devora todo lo que puede con sus tres cabezas, incluso rocas, sin ningún tipo de piedad.",
        637: "Volcarona surgió, según la leyenda, para reemplazar al sol tras una gran erupción que oscureció el cielo.",
        643: "Reshiram puede generar calor abrasador con la energía que libera de su cola.",
        644: "Zekrom genera electricidad tan potente que puede oscurecer el cielo con nubes negras.",
        646: "Kyurem es considerado un dragón incompleto: le falta la energía que Reshiram y Zekrom poseen.",
        658: "Greninja puede crear estrellas de agua comprimida tan afiladas que cortan como cuchillas de acero.",
        681: "Aegislash reparte su fuerza entre ataque y defensa según cambie entre su forma de escudo o de espada.",
        700: "Sylveon calma a su oponente agitando sus lazos, que emiten ondas tranquilizadoras.",
        722: "Rowlet puede girar la cabeza casi 180 grados, como un búho real.",
        724: "Decidueye dispara plumas afiladas con precisión de francotirador desde la distancia.",
        745: "Lycanroc cambia de forma según la hora del día en que evoluciona Rockruff.",
        768: "Golisopod se retira a pelear cuerpo a cuerpo solo si no le queda más opción, a pesar de tener una armadura letal.",
        778: "Mimikyu se disfraza de Pikachu con una tela vieja para intentar hacer amigos, con resultados poco afortunados.",
        791: "Solgaleo es apodado 'la bestia solar' y puede abrir portales hacia otras dimensiones con su melena.",
        792: "Lunala es apodada 'la ala lunar' y absorbe luz para desaparecer casi por completo en la oscuridad.",
        800: "Necrozma es un Pokémon que perdió su luz original y busca recuperarla absorbiendo la de otros.",
        823: "Corviknight es usado como medio de transporte aéreo en la región de Galar por su fuerza y resistencia.",
        849: "Toxtricity libera descargas eléctricas al ritmo de la música que genera con su propio cuerpo.",
        887: "Dragapult dispara a sus propias crías, Dreepy, como si fueran misiles guiados desde sus colas.",
        888: "Zacian empuña una espada hecha de la misma energía que emana su melena.",
        895: "Regidrago está hecho de una energía dracónica antigua condensada en forma de cristal.",
        936: "Armarouge lleva una armadura psíquica creada a partir de energía concentrada por su entrenador.",
        937: "Ceruledge blande dos espadas de fuego fantasmal que arden sin consumirse jamás.",
        959: "Tinkaton construye su martillo con los restos de herraduras y objetos de metal que encuentra.",
        151: "Mew posee el ADN de todos los Pokémon existentes, por lo que en teoría puede aprender cualquier movimiento.",
        385: "Jirachi solo despierta durante siete días cada mil años para conceder un deseo.",
        144: "Articuno puede congelar la humedad del aire con solo batir las alas.",
        145: "Zapdos aparece únicamente durante tormentas eléctricas, cargándose con cada rayo que cae cerca.",
        146: "Moltres es conocido como el Pokémon de fuego que anuncia la llegada de la primavera con su vuelo.",
        243: "Raikou corre a la velocidad de un rayo y se dice que representa la furia de una tormenta.",
        245: "Suicune purifica el agua allá por donde corre, según las leyendas de Johto.",
        251: "Celebi viaja en el tiempo y se le considera un guardián de los bosques.",
        380: "Latias puede doblar la luz para volverse casi invisible cuando quiere esconderse.",
        381: "Latios puede volar a velocidades cercanas a las de un avión comercial.",
        494: "Victini comparte con su entrenador la victoria en cualquier batalla en la que participe, según su leyenda.",
        716: "Xerneas puede otorgar vida eterna a otros seres liberando energía de sus cuernos.",
        717: "Yveltal, al morir, libera toda su energía vital de golpe, absorbiendo la vida de lo que le rodea.",
        718: "Zygarde recolecta fragmentos de energía para vigilar el equilibrio del ecosistema de Kalos.",
        802: "Marshadow se esconde en las sombras de otros seres y solo aparece durante la noche de luna nueva.",
        807: "Zeraora puede correr sobre el agua acumulando electricidad estática en las patas.",
        889: "Zamazenta porta un escudo hecho de la misma energía de su melena para proteger a sus aliados.",
        890: "Eternatus absorbió energía de Galar durante siglos hasta crecer a un tamaño colosal.",
        1007: "Koraidon libera la energía almacenada en su cuerpo para alcanzar velocidades explosivas.",
        1008: "Miraidon genera electrones en su cuerpo que le permiten transformarse en una moto para viajar.",
        497: "Serperior es tan sereno que puede controlar a otros Pokémon con solo mirarlos fijamente.",
        500: "Emboar golpea con los puños ardientes al ritmo de una danza tradicional antes de atacar.",
        727: "Incineroar disfruta humillar a sus rivales antes de rematarlos con movimientos de lucha libre.",
        730: "Primarina canta melodías con burbujas que pueden tanto sanar como noquear a su oponente.",
        242: "Blissey produce un huevo nutritivo capaz de restaurar la energía de cualquiera que lo coma, sin importar la edad.",
        784: "Kommo-o hace vibrar las escamas de su cola para producir un sonido que aturde a los rivales.",
        865: "Sirfetch'd defiende con honor el puerro que lleva desde que era Farfetch'd, tratándolo casi como una espada de samurái.",
        706: "Goodra es tan resbaladizo por su baba que apenas puede sujetarlo alguien sin experiencia.",
        15: "Beedrill ataca en enjambre clavando sus aguijones venenosos a gran velocidad.",
        303: "Mawile parece tener dos caras, pero en realidad la 'boca' extra son cuernos con forma de mandíbula gigante.",
        115: "Kangaskhan lleva a su cría en la bolsa del vientre y jamás pelea sin ella cerca.",
        142: "Aerodactyl fue revivido a partir de ADN fosilizado hallado en ámbar, según la leyenda de los juegos.",
        127: "Pinsir puede partir troncos gruesos con sus tenazas con la misma facilidad que un movimiento de tijeras.",
        181: "Ampharos brilla tanto en la oscuridad que solía usarse como faro para guiar a los barcos."
    };

    function textoCuriosidad(id) {
        return CURIOSIDADES[id] || 'Todavía no hemos agregado una curiosidad para este Pokémon, ¡pero pronto la tendrá!';
    }

    function inyectarCuriosidades(soloSlide, soloIdx) {
        const cont = document.getElementById('contenedor-slides');
        if (!cont || !hayDatos()) return;
        const procesar = (slide, idx) => {
            if (slide.querySelector('.seccion-curiosidad')) return;
            const pkmn = pokemonData[idx];
            if (!pkmn) return;
            const secciones = slide.querySelectorAll('section');
            const secDesc = secciones[0];
            if (!secDesc) return;
            const div = document.createElement('section');
            div.className = 'seccion-curiosidad';
            div.innerHTML = `<h3>🔎 Curiosidad</h3><p>${esc(textoCuriosidad(pkmn.id))}</p>`;
            secDesc.insertAdjacentElement('afterend', div);

            // Botón "Comparar" junto al resto de controles del Pokémon.
            const figure = slide.querySelector('figure');
            if (figure && !figure.querySelector('.btn-comparar-pokemon')) {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'btn-comparar-pokemon';
                btn.textContent = '🆚 Comparar';
                btn.onclick = () => window.abrirComparador(pkmn.id);
                figure.appendChild(btn);
            }
        };
        if (soloSlide) procesar(soloSlide, soloIdx);
        else [...cont.children].forEach(procesar);
    }

    const observer = new MutationObserver(() => inyectarCuriosidades());
    document.addEventListener('DOMContentLoaded', () => {
        const cont = document.getElementById('contenedor-slides');
        if (cont) observer.observe(cont, { childList: true });
        if (cont) cont.addEventListener('slide-hidratado', e => inyectarCuriosidades(e.detail.slide, e.detail.idx));
        inyectarCuriosidades();
    });

    /* ---------------------------------------------------------
       2) 🆚 COMPARADOR DE POKÉMON
       Compara tipos, descripción y debilidades/resistencias
       de dos Pokémon lado a lado. No usa datos de stats porque
       la Pokédex actual no los guarda.
       --------------------------------------------------------- */
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
    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    function tiposDe(p) {
        return String(p.tipo || '').replace(/\([^)]*\)/g, '').split('/').map(t => norm(t)).filter(Boolean);
    }

    function multiplicador(ataque, tiposDefensor) {
        return tiposDefensor.reduce((acc, def) => {
            const m = TABLA[ataque] && TABLA[ataque][def];
            return acc * (m === undefined ? 1 : m);
        }, 1);
    }

    function analizarDebilidades(p) {
        const defensor = tiposDe(p);
        const debil = [], resiste = [], inmune = [];
        TIPOS.forEach(t => {
            const m = multiplicador(t, defensor);
            if (m === 0) inmune.push(t);
            else if (m > 1) debil.push(t);
            else if (m < 1) resiste.push(t);
        });
        return { debil, resiste, inmune };
    }

    function chip(tipo) {
        return `<span class="chip-comparador chip-${tipo}">${tipo}</span>`;
    }

    function tarjetaComparador(p) {
        if (!p) return '<div class="comparador-vacio">Selecciona un Pokémon</div>';
        const forma = p.formas[0];
        const { debil, resiste, inmune } = analizarDebilidades(p);
        return `
            <div class="comparador-tarjeta">
                <img src="${forma.png}" alt="${esc(p.nombre)}" loading="lazy">
                <h4>#${String(p.id).padStart(4, '0')} ${esc(p.nombre)}</h4>
                <p class="comparador-tipo">${esc(p.tipo)}</p>
                <p class="comparador-desc">${esc(p.desc)}</p>
                <div class="comparador-bloque"><strong>⚔️ Débil contra</strong><div>${debil.length ? debil.map(chip).join('') : '<em>Ninguno</em>'}</div></div>
                <div class="comparador-bloque"><strong>🛡️ Resiste</strong><div>${resiste.length ? resiste.map(chip).join('') : '<em>Ninguno</em>'}</div></div>
                ${inmune.length ? `<div class="comparador-bloque"><strong>🚫 Inmune a</strong><div>${inmune.map(chip).join('')}</div></div>` : ''}
            </div>
        `;
    }

    function renderComparador() {
        const selA = document.getElementById('comparador-a');
        const selB = document.getElementById('comparador-b');
        const out = document.getElementById('comparador-resultado');
        if (!selA || !selB || !out) return;
        const idA = Number(selA.value), idB = Number(selB.value);
        const pA = pokemonData.find(p => p.id === idA);
        const pB = pokemonData.find(p => p.id === idB);
        out.innerHTML = tarjetaComparador(pA) + tarjetaComparador(pB);
    }

    function llenarSelectoresComparador() {
        const selA = document.getElementById('comparador-a');
        const selB = document.getElementById('comparador-b');
        if (!selA || !selB || selA.options.length || !hayDatos()) return;
        const opciones = pokemonData.map(p => `<option value="${p.id}">#${String(p.id).padStart(4, '0')} ${esc(p.nombre)}</option>`).join('');
        selA.innerHTML = opciones;
        selB.innerHTML = opciones;
        selA.addEventListener('change', renderComparador);
        selB.addEventListener('change', renderComparador);
    }

    window.abrirComparador = function (idPreseleccionado) {
        try { localStorage.setItem('pokedex_uso_comparador', 'true'); } catch (_) {}
        llenarSelectoresComparador();
        const selA = document.getElementById('comparador-a');
        const selB = document.getElementById('comparador-b');
        if (idPreseleccionado && selA) {
            selA.value = String(idPreseleccionado);
            if (selB && (!selB.value || selB.value === selA.value)) {
                const otro = pokemonData.find(p => p.id !== idPreseleccionado);
                if (otro) selB.value = String(otro.id);
            }
        } else if (selA && selB && !selA.value) {
            selA.value = String(pokemonData[0].id);
            selB.value = String((pokemonData[1] || pokemonData[0]).id);
        }
        renderComparador();
        window.abrirModal('modal-comparador');
    };
})();
