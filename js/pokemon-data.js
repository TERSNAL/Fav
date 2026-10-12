// Base de datos completa con los Pokémon
    const pokemonData = [
    {
        "id": 1,
        "nombre": "Bulbasaur",
        "tipo": "Planta / Veneno",
        "desc": "Desde que nace lleva una semilla en el lomo, que crece junto con él y le permite almacenar energía.",
        "fav": "Uno de los iniciales más icónicos y una excelente combinación entre ternura y naturaleza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif",
                "cap": "Bulbasaur, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 3,
        "nombre": "Venusaur",
        "tipo": "Planta / Veneno",
        "desc": "Su enorme flor absorbe energía solar y libera un aroma capaz de calmar los ánimos durante las batallas.",
        "fav": "Me encanta cómo evoluciona el concepto de Bulbasaur hasta convertirse en un Pokémon imponente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/3.gif",
                "cap": "Venusaur, el Pokémon Planta",
                "btn": "🌟 Megaevolucionar",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10033.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10033.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10033.gif",
                "cap": "Mega-Venusaur",
                "btn": "🔄 Revertir Megaevolución",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10033.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10195.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10195.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10195.gif",
                "cap": "Venusaur Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10195.ogg"
            }
        ]
    },
    {
        "id": 4,
        "nombre": "Charmander",
        "tipo": "Fuego",
        "desc": "Desde que nace, una llama arde en la punta de su cola y su intensidad indica su vitalidad.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/4.gif",
                "cap": "Charmander, el Pokémon Lagartija"
            }
        ]
    },
    {
        "id": 6,
        "nombre": "Charizard",
        "tipo": "Fuego / Volador",
        "desc": "Escupe llamas capaces de derretir rocas. Se dice que sus llamas arden más fuerte al enfrentar rivales poderosos.",
        "fav": "Un clásico indiscutible y uno de los dragones/fuego más icónicos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/6.gif",
                "cap": "Charizard, el Pokémon Llama",
                "btn": "🌟 Megaevolucionar X",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10034.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10034.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10034.gif",
                "cap": "Mega-Charizard X",
                "btn": "🌟 Megaevolucionar Y",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10034.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10035.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10035.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10035.gif",
                "cap": "Mega-Charizard Y",
                "btn": "🔄 Forma Base",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10035.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10196.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10196.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10196.gif",
                "cap": "Charizard Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10196.ogg"
            }
        ]
    },
    {
        "id": 7,
        "nombre": "Squirtle",
        "tipo": "Agua",
        "desc": "Su caparazón no solo le sirve de protección: su forma aerodinámica le permite nadar con gran velocidad.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/7.gif",
                "cap": "Squirtle, el Pokémon Tortuguita"
            }
        ]
    },
    {
        "id": 9,
        "nombre": "Blastoise",
        "tipo": "Agua",
        "desc": "Sus poderosos cañones de agua pueden disparar con gran precisión y son parte fundamental de su estilo de combate.",
        "fav": "Su diseño de tortuga acorazada con cañones es simplemente legendario.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/9.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/9.gif",
                "cap": "Blastoise, el Pokémon Agua",
                "btn": "🌟 Megaevolucionar",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10036.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10036.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10036.gif",
                "cap": "Mega-Blastoise",
                "btn": "🔄 Revertir Megaevolución",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10036.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10197.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10197.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10197.gif",
                "cap": "Blastoise Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10197.ogg"
            }
        ]
    },
    {
        "id": 12,
        "nombre": "Butterfree",
        "tipo": "Bicho / Volador",
        "desc": "Bate las alas cubiertas de un polvo que puede alterar el clima si lo agita con fuerza suficiente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/12.gif",
                "cap": "Butterfree, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg"
            },
            {
                "cap": "Butterfree Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/butterfree-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/butterfree-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/butterfree-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/butterfree-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 15,
        "nombre": "Beedrill",
        "tipo": "Bicho / Veneno",
        "desc": "Sus tres agudos aguijones están cargados de un veneno letal que usa para defender su territorio volando a toda velocidad.",
        "fav": "Uno de los pocos Pokémon del Kanto original con Mega Evolución; su velocidad y agresividad al Megaevolucionar son brutales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/15.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/15.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/15.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg",
                "cap": "Beedrill, el Pokémon Avispa",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10090.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10090.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10090.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10090.ogg",
                "cap": "Mega-Beedrill",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 18,
        "nombre": "Pidgeot",
        "tipo": "Normal / Volador",
        "desc": "Puede volar a una velocidad enorme y sus poderosas alas generan ráfagas capaces de derribar árboles.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/18.gif",
                "cap": "Pidgeot, el Pokémon Ave",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10073.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10073.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10073.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10073.png",
                "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/6/6c/latest/20141019151005/Grito_de_Mega-Pidgeot.ogg",
                "cap": "Mega-Pidgeot, el Pokémon Ave",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 20,
        "nombre": "Raticate",
        "tipo": "Normal",
        "desc": "Sus incisivos nunca dejan de crecer, así que los desgasta royendo piedras y troncos todo el día.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/20.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/20.gif",
                "cap": "Raticate, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg"
            },
            {
                "cap": "Raticate de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/raticate-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/raticate-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/raticate-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/raticate-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 24,
        "nombre": "Arbok",
        "tipo": "Veneno",
        "desc": "El patrón de su vientre varía según la región y sirve para intimidar a quien se acerque demasiado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/24.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/24.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/24.gif",
                "cap": "Arbok, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg"
            }
        ]
    },
    {
        "id": 25,
        "nombre": "Pikachu",
        "tipo": "Eléctrico",
        "desc": "Almacena electricidad en sus mejillas y puede descargarla con gran potencia cuando se siente amenazado.",
        "fav": "Es prácticamente el símbolo de Pokémon y resulta imposible no tenerle cariño.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/25.gif",
                "cap": "Pikachu, el Pokémon Eléctrico",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10199.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10199.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10199.gif",
                "cap": "Pikachu Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10199.ogg"
            }
        ]
    },
    {
        "id": 26,
        "nombre": "Raichu",
        "tipo": "Eléctrico",
        "desc": "Si acumula demasiada electricidad en sus mejillas, se vuelve agresivo. Usa su cola como polo a tierra para descargar el exceso de energía.",
        "fav": "Pikachu... ¡pero más GRANDE!",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/26.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/26.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/26.gif",
                "cap": "Raichu, el Pokémon Ratón",
                "btn": "🔄 Forma Alola"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10100.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10100.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10100.gif",
                "cap": "Raichu de Alola",
                "btn": "🌟 Mega Raichu X"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10304.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10304.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10304.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10304.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10304.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10304.png",
                "cap": "Mega-Raichu X",
                "btn": "🌟 Mega Raichu Y"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10305.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10305.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10305.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10305.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10305.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10305.png",
                "cap": "Mega-Raichu Y",
                "btn": "🔄 Forma Kanto"
            }
        ]
    },
    {
        "id": 28,
        "nombre": "Sandslash",
        "tipo": "Tierra",
        "desc": "Se enrosca y usa sus púas como escudo cuando algo lo amenaza en pleno desierto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/28.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/28.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/28.gif",
                "cap": "Sandslash, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg"
            },
            {
                "cap": "Sandslash de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/sandslash-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sandslash-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/sandslash-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/sandslash-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 31,
        "nombre": "Nidoqueen",
        "tipo": "Veneno / Tierra",
        "desc": "Sus escamas duras la protegen incluso de ataques que atravesarían una armadura común.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/31.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/31.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/31.gif",
                "cap": "Nidoqueen, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg"
            }
        ]
    },
    {
        "id": 34,
        "nombre": "Nidoking",
        "tipo": "Veneno / Tierra",
        "desc": "Usa su cola musculosa para derribar cualquier obstáculo, incluso torres de alta tensión.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/34.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/34.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/34.gif",
                "cap": "Nidoking, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg"
            }
        ]
    },
    {
        "id": 36,
        "nombre": "Clefable",
        "tipo": "Hada",
        "desc": "Sale las noches de luna llena a bailar en los prados, y es tan tímido que rara vez lo ven los humanos.",
        "fav": "Su elegancia y sus enormes orejas la convierten en una evolución entrañable de Clefairy.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/36.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/36.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/36.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg",
                "cap": "Clefable, el Pokémon Hada",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10278.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10278.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10278.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10278.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10278.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10278.png",
                "cap": "Mega-Clefable",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 38,
        "nombre": "Ninetales",
        "tipo": "Fuego",
        "desc": "Se dice que sus nueve colas contienen poderes misteriosos y que puede vivir durante muchos años.",
        "fav": "Elegante, misterioso y poderoso; es uno de los Pokémon de Kanto con más presencia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/38.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/38.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/38.gif",
                "cap": "Ninetales, el Pokémon Fuego"
            },
            {
                "cap": "Ninetales de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/ninetales-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/ninetales-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/ninetales-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/ninetales-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 39,
        "nombre": "Jigglypuff",
        "tipo": "Normal / Hada",
        "desc": "Canta una melodía hipnótica que hace dormir a quienes la escuchan.",
        "fav": "Su personalidad en el anime y sus ocurrencias con el micrófono lo hacen inolvidable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/39.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/39.gif",
                "cap": "Jigglypuff, el Pokémon Normal"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/985.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/985.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/985.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/985.ogg",
                "cap": "Scream Tail, paradoja del pasado de Jigglypuff",
                "btn": "🔄 Volver a Jigglypuff"
            }
        ]
    },
    {
        "id": 40,
        "nombre": "Wigglytuff",
        "tipo": "Normal / Hada",
        "desc": "Su piel es tan suave y elástica que se hincha muchísimo más de lo que parece posible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/40.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/40.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/40.gif",
                "cap": "Wigglytuff, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg"
            }
        ]
    },
    {
        "id": 45,
        "nombre": "Vileplume",
        "tipo": "Planta / Veneno",
        "desc": "Tiene el polen más pesado del mundo Pokémon; solo con sacudirlo provoca fuertes alergias a la redonda.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/45.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/45.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/45.gif",
                "cap": "Vileplume, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg"
            }
        ]
    },
    {
        "id": 47,
        "nombre": "Parasect",
        "tipo": "Bicho / Planta",
        "desc": "El hongo que crece en su lomo controla por completo su comportamiento desde que era Paras.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/47.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/47.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/47.gif",
                "cap": "Parasect, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg"
            }
        ]
    },
    {
        "id": 49,
        "nombre": "Venomoth",
        "tipo": "Bicho / Veneno",
        "desc": "El polvo tóxico de sus alas se dispersa cada vez que aletea cerca de un enemigo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/49.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/49.gif",
                "cap": "Venomoth, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg"
            }
        ]
    },
    {
        "id": 51,
        "nombre": "Dugtrio",
        "tipo": "Tierra",
        "desc": "Se cree que sus tres cabezas surgieron cuando un Diglett se dividió por culpa de la presión de la tierra.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/51.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/51.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/51.gif",
                "cap": "Dugtrio, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg"
            },
            {
                "cap": "Dugtrio de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/dugtrio-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/dugtrio-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/dugtrio-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/dugtrio-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 52,
        "nombre": "Meowth",
        "tipo": "Normal",
        "desc": "Sale de noche a recolectar monedas y objetos brillantes que guarda como si fueran su tesoro personal.",
        "formas": [
            {
                "cap": "Meowth, el Pokémon",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/52.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/52.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg"
            },
            {
                "cap": "Meowth de Alola",
                "btn": "🌺 Ver forma de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/meowth-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/meowth-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/meowth-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/meowth-alola.gif"
            },
            {
                "cap": "Meowth de Galar",
                "btn": "⚔️ Ver forma de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/meowth-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/meowth-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/meowth-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/meowth-galar.gif"
            },
            {
                "cap": "Meowth Gigantamax",
                "btn": "🔄 Revertir Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/meowth-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/meowth-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/meowth-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/meowth-gmax.gif"
            }
        ]
    },
    {
        "id": 53,
        "nombre": "Persian",
        "tipo": "Normal",
        "desc": "Es elegante y ágil, pero cuidado: puede sacar sus garras sin previo aviso ante el menor descuido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/53.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/53.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/53.gif",
                "cap": "Persian, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg"
            },
            {
                "cap": "Persian de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/persian-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/persian-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/persian-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/persian-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 55,
        "nombre": "Golduck",
        "tipo": "Agua",
        "desc": "Emite ondas cerebrales antes de tormentas, por lo que se cree que puede predecir el clima.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/55.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/55.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/55.gif",
                "cap": "Golduck, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg"
            }
        ]
    },
    {
        "id": 57,
        "nombre": "Primeape",
        "tipo": "Lucha",
        "desc": "Se enfurece con tanta facilidad que su ritmo cardíaco no deja de acelerarse mientras esté despierto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/57.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/57.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/57.gif",
                "cap": "Primeape, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg"
            }
        ]
    },
    {
        "id": 59,
        "nombre": "Arcanine",
        "tipo": "Fuego",
        "desc": "Conocido por su majestuosidad y velocidad. Puede correr miles de kilómetros en un solo día.",
        "fav": "El perro de fuego legendario por excelencia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/59.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/59.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/59.gif",
                "cap": "Arcanine, el Pokémon Legendario",
                "btn": "🔄 Forma Hisui"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10230.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10230.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10230.gif",
                "cap": "Arcanine de Hisui",
                "btn": "🔄 Forma Kanto"
            }
        ]
    },
    {
        "id": 62,
        "nombre": "Poliwrath",
        "tipo": "Agua / Lucha",
        "desc": "Sus músculos son tan densos que jamás se hunde, sin importar cuánto pese.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/62.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/62.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/62.gif",
                "cap": "Poliwrath, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg"
            }
        ]
    },
    {
        "id": 65,
        "nombre": "Alakazam",
        "tipo": "Psíquico",
        "desc": "Posee una inteligencia extraordinaria y utiliza sus cucharas para canalizar sus enormes poderes psíquicos.",
        "fav": "Siempre me han gustado los Pokémon que destacan por inteligencia además de fuerza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/65.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/65.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/65.gif",
                "cap": "Alakazam, el Pokémon Psíquico",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10037.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10037.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10037.gif",
                "cap": "Mega-Alakazam",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 68,
        "nombre": "Machamp",
        "tipo": "Lucha",
        "desc": "Sus cuatro brazos le permiten ejecutar ataques físicos desde múltiples direcciones y levantar enormes pesos.",
        "fav": "Es la representación perfecta de la fuerza bruta dentro de los Pokémon de Kanto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/68.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/68.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/68.gif",
                "cap": "Machamp, el Pokémon Lucha",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10201.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10201.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10201.gif",
                "cap": "Machamp Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10201.ogg"
            }
        ]
    },
    {
        "id": 71,
        "nombre": "Victreebel",
        "tipo": "Planta / Veneno",
        "desc": "Atrae a sus presas con un aroma dulce y las atrapa de un bocado; puede tragar animales de su propio tamaño.",
        "fav": "Una planta carnívora gigante con una boca aterradora; un diseño clásico e icónico de Kanto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/71.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/71.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/71.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg",
                "cap": "Victreebel, el Pokémon Atrapamoscas",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10279.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10279.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10279.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10279.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10279.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10279.png",
                "cap": "Mega-Victreebel",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 73,
        "nombre": "Tentacruel",
        "tipo": "Agua / Veneno",
        "desc": "Controla los movimientos de sus más de ochenta tentáculos con total independencia entre ellos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/73.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/73.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/73.gif",
                "cap": "Tentacruel, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg"
            }
        ]
    },
    {
        "id": 76,
        "nombre": "Golem",
        "tipo": "Roca / Tierra",
        "desc": "Cuando rueda cuesta abajo nada puede detenerlo, ni siquiera dinamita según cuenta su leyenda.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/76.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/76.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/76.gif",
                "cap": "Golem, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg"
            },
            {
                "cap": "Golem de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/golem-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/golem-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/golem-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/golem-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 78,
        "nombre": "Rapidash",
        "tipo": "Fuego",
        "desc": "Corre tan rápido que las llamas de su cuerpo parecen quedarse atrás mientras galopa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/78.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/78.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/78.gif",
                "cap": "Rapidash, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg"
            },
            {
                "cap": "Rapidash de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/rapidash-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/rapidash-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/rapidash-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/rapidash-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 80,
        "nombre": "Slowbro",
        "tipo": "Agua / Psíquico",
        "desc": "La criatura que se aferra a su cola modifica su comportamiento y le otorga capacidades psíquicas.",
        "fav": "Su personalidad despistada siempre me ha parecido muy divertida.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/80.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/80.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/80.gif",
                "cap": "Slowbro, el Pokémon Agua",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10071.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10071.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10071.gif",
                "cap": "Mega-Slowbro",
                "btn": "🔄 Revertir Megaevolución"
            },
            {
                "cap": "Slowbro de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/slowbro-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/slowbro-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/slowbro-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/slowbro-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 82,
        "nombre": "Magneton",
        "tipo": "Eléctrico / Acero",
        "desc": "Formado por tres Magnemite unidos entre sí, genera un potente campo magnético capaz de interferir con las brújulas cercanas.",
        "fav": "Su diseño geométrico y la conexión con su paradoja del pasado, Sandy Shocks, lo hacen más interesante todavía.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/82.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/82.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/82.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg",
                "cap": "Magneton, el Pokémon Eléctrico"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/989.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/989.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/989.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/989.ogg",
                "cap": "Sandy Shocks, paradoja del pasado de Magneton",
                "btn": "🔄 Volver a Magneton"
            }
        ]
    },
    {
        "id": 84,
        "nombre": "Dodrio",
        "tipo": "Normal / Volador",
        "desc": "Sus tres cabezas piensan de forma independiente y jamás duermen al mismo tiempo las tres.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/84.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/84.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/84.gif",
                "cap": "Dodrio, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg"
            }
        ]
    },
    {
        "id": 87,
        "nombre": "Dewgong",
        "tipo": "Agua / Hielo",
        "desc": "Su cuerpo brilla levemente bajo el agua helada, lo que lo hace parecer una joya en movimiento.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/87.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/87.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/87.gif",
                "cap": "Dewgong, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg"
            }
        ]
    },
    {
        "id": 89,
        "nombre": "Muk",
        "tipo": "Veneno",
        "desc": "Su cuerpo viscoso desprende un olor tan fuerte que hace llorar a cualquiera a varios metros.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/89.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/89.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/89.gif",
                "cap": "Muk, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg"
            },
            {
                "cap": "Muk de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/muk-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/muk-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/muk-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/muk-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 91,
        "nombre": "Cloyster",
        "tipo": "Agua / Hielo",
        "desc": "Su caparazón es tan duro que ni un misil podría romperlo, según cuenta su propia Pokédex.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/91.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/91.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/91.gif",
                "cap": "Cloyster, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg"
            }
        ]
    },
    {
        "id": 94,
        "nombre": "Gengar",
        "tipo": "Fantasma / Veneno",
        "desc": "Se oculta en las sombras de las personas para robar su calor corporal. Si sientes un escalofrío repentino, seguro hay un Gengar cerca.",
        "fav": "Su personalidad bromista, maliciosa y carismática lo convierte en el rey indiscutible de los tipos Fantasma.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/94.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/94.gif",
                "cap": "Gengar, el Pokémon Sombra",
                "btn": "🌟 Megaevolucionar",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10038.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10038.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10038.gif",
                "cap": "Mega-Gengar",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10038.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10202.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10202.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10202.gif",
                "cap": "Gengar Gigantamax",
                "btn": "🔄 Revertir a Forma Base",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10202.ogg"
            }
        ]
    },
    {
        "id": 97,
        "nombre": "Hypno",
        "tipo": "Psíquico",
        "desc": "Balancea su péndulo frente a la gente para hacerla dormir y, según los rumores, llevarse a los niños en sus sueños.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/97.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/97.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/97.gif",
                "cap": "Hypno, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg"
            }
        ]
    },
    {
        "id": 99,
        "nombre": "Kingler",
        "tipo": "Agua",
        "desc": "Su enorme pinza es tan pesada que a veces le cuesta manejarla con precisión.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/99.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/99.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/99.gif",
                "cap": "Kingler, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg"
            },
            {
                "cap": "Kingler Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/kingler-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/kingler-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/kingler-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/kingler-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 101,
        "nombre": "Electrode",
        "tipo": "Eléctrico",
        "desc": "Almacena tanta energía que puede explotar con la más mínima provocación.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/101.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/101.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/101.gif",
                "cap": "Electrode, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg"
            },
            {
                "cap": "Electrode de Hisui",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/electrode-hisui.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/electrode-hisui.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/electrode-hisui.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/electrode-hisui.gif",
                "btn": "🏔️ Ver forma de Hisui"
            }
        ]
    },
    {
        "id": 103,
        "nombre": "Exeggutor",
        "tipo": "Planta / Psíquico",
        "desc": "Cada una de sus tres cabezas piensa por su cuenta y a veces ni siquiera se ponen de acuerdo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/103.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/103.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/103.gif",
                "cap": "Exeggutor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg"
            },
            {
                "cap": "Exeggutor de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/exeggutor-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/exeggutor-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/exeggutor-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/exeggutor-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 105,
        "nombre": "Marowak",
        "tipo": "Tierra",
        "desc": "Lleva el hueso de su madre como arma y recuerdo, y lo blande con una técnica casi marcial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/105.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/105.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/105.gif",
                "cap": "Marowak, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg"
            },
            {
                "cap": "Marowak de Alola",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/marowak-alola.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/marowak-alola.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/marowak-alola.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/marowak-alola.gif",
                "btn": "🌺 Ver forma de Alola"
            }
        ]
    },
    {
        "id": 106,
        "nombre": "Hitmonlee",
        "tipo": "Lucha",
        "desc": "Sus piernas se extienden como resortes, permitiéndole patear desde ángulos imposibles.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/106.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/106.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/106.gif",
                "cap": "Hitmonlee, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg"
            }
        ]
    },
    {
        "id": 107,
        "nombre": "Hitmonchan",
        "tipo": "Lucha",
        "desc": "Sus puñetazos son tan veloces que parecen dejar una estela en el aire al golpear.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/107.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/107.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/107.gif",
                "cap": "Hitmonchan, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg"
            }
        ]
    },
    {
        "id": 110,
        "nombre": "Weezing",
        "tipo": "Veneno",
        "desc": "Mezcla gases distintos entre sus dos cabezas para crear combinaciones cada vez más tóxicas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/110.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/110.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/110.gif",
                "cap": "Weezing, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg"
            },
            {
                "cap": "Weezing de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/weezing-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/weezing-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/weezing-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/weezing-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 115,
        "nombre": "Kangaskhan",
        "tipo": "Normal",
        "desc": "Nunca se separa de su cría, a la que lleva protegida en la bolsa de su vientre mientras lucha con ferocidad.",
        "fav": "El vínculo materno que representa, sumado a que su Mega Evolución le permite golpear dos veces, la vuelve inolvidable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/115.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/115.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/115.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg",
                "cap": "Kangaskhan, el Pokémon Madre",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10039.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10039.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10039.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10039.ogg",
                "cap": "Mega-Kangaskhan",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 119,
        "nombre": "Seaking",
        "tipo": "Agua",
        "desc": "Cava huecos en el lecho del río con su cuerno para poner sus huevos a salvo de la corriente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/119.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/119.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/119.gif",
                "cap": "Seaking, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg"
            }
        ]
    },
    {
        "id": 121,
        "nombre": "Starmie",
        "tipo": "Agua / Psíquico",
        "desc": "El núcleo de su cuerpo brilla en siete colores, y se dice que emite señales misteriosas hacia el espacio exterior.",
        "fav": "Su forma de estrella y su núcleo brillante lo hacen uno de los diseños más elegantes de Kanto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/121.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/121.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/121.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg",
                "cap": "Starmie, el Pokémon Misterioso",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10280.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10280.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10280.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10280.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10280.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10280.png",
                "cap": "Mega-Starmie",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 123,
        "nombre": "Scyther",
        "tipo": "Bicho / Volador",
        "desc": "Se mueve tan rápido que crea la ilusión de múltiples copias. Sus guadañas cortan madera gruesa de un solo tajo.",
        "fav": "El diseño de mantis ninja voladora es genial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/123.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/123.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/123.gif",
                "cap": "Scyther, el Pokémon Mantis"
            }
        ]
    },
    {
        "id": 124,
        "nombre": "Jynx",
        "tipo": "Hielo / Psíquico",
        "desc": "Se mueve con pasos rítmicos que recuerdan a un baile, incluso en pleno combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/124.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/124.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/124.gif",
                "cap": "Jynx, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg"
            }
        ]
    },
    {
        "id": 127,
        "nombre": "Pinsir",
        "tipo": "Bicho",
        "desc": "Sus enormes tenazas pueden partir troncos gruesos por la mitad, y las usa para aplastar a sus rivales sin piedad.",
        "fav": "Su combinación de fuerza bruta y diseño de insecto imponente lo hace un clásico de Kanto muy subestimado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/127.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/127.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/127.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg",
                "cap": "Pinsir, el Pokémon Tenaza Ciervo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10040.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10040.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10040.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10040.ogg",
                "cap": "Mega-Pinsir",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 128,
        "nombre": "Tauros",
        "tipo": "Normal",
        "desc": "Ataca embistiendo sin parar; si falla el primer golpe, da media vuelta e insiste de inmediato.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/128.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/128.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/128.gif",
                "cap": "Tauros, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg"
            },
            {
                "cap": "Tauros de Paldea (Combate)",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/tauros-paldea-combat.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/tauros-paldea-combat.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/tauros-paldea-combat.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/tauros-paldea-combat.gif",
                "btn": "🐂 Ver forma de Paldea"
            }
        ]
    },
    {
        "id": 130,
        "nombre": "Gyarados",
        "tipo": "Agua / Volador",
        "desc": "Es conocido por su temperamento agresivo y puede destruir estructuras cuando entra en cólera.",
        "fav": "La transformación de Magikarp a Gyarados es una de las evoluciones más satisfactorias.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/130.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/130.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/130.gif",
                "cap": "Gyarados, el Pokémon Agua",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10041.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10041.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10041.gif",
                "cap": "Mega-Gyarados",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 131,
        "nombre": "Lapras",
        "tipo": "Agua / Hielo",
        "desc": "Le encanta transportar personas en su lomo a través de los mares cantando hermosas melodías.",
        "fav": "Nostálgico, pacífico y grandioso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/131.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/131.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/131.gif",
                "cap": "Lapras, el Pokémon Transporte",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10204.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10204.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10204.gif",
                "cap": "Lapras Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10204.ogg"
            }
        ]
    },
    {
        "id": 132,
        "nombre": "Ditto",
        "tipo": "Normal",
        "desc": "Su estructura celular es tan inestable que puede reorganizarse para copiar la forma de lo que observa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/132.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/132.gif",
                "cap": "Ditto, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg"
            }
        ]
    },
    {
        "id": 133,
        "nombre": "Eevee",
        "tipo": "Normal",
        "desc": "Un Pokémon con un código genético inestable que le permite evolucionar de muchas maneras diferentes según las condiciones que lo rodean.",
        "fav": "Eevee representa perfectamente la variedad de posibilidades que ofrece Pokémon.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/133.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/133.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/133.gif",
                "cap": "Eevee, el Pokémon Evolución",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10205.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10205.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10205.gif",
                "cap": "Eevee Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10205.ogg"
            }
        ]
    },
    {
        "id": 134,
        "nombre": "Vaporeon",
        "tipo": "Agua",
        "desc": "Su cuerpo se adapta al agua y puede disolverse parcialmente para moverse con facilidad en ambientes acuáticos.",
        "fav": "Es una de mis evoluciones de Eevee favoritas por su diseño acuático.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/134.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/134.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/134.gif",
                "cap": "Vaporeon, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 135,
        "nombre": "Jolteon",
        "tipo": "Eléctrico",
        "desc": "Su pelaje está formado por púas cargadas de electricidad que puede utilizar como proyectiles.",
        "fav": "Su diseño puntiagudo y su velocidad le dan una personalidad increíble.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/135.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/135.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/135.gif",
                "cap": "Jolteon, el Pokémon Eléctrico"
            }
        ]
    },
    {
        "id": 136,
        "nombre": "Flareon",
        "tipo": "Fuego",
        "desc": "Acumula aire en su cuerpo y lo combina con una llama interna para producir ataques de fuego muy intensos.",
        "fav": "Me encanta su aspecto de criatura de fuego y lo clásico que se siente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/136.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/136.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/136.gif",
                "cap": "Flareon, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 139,
        "nombre": "Omastar",
        "tipo": "Roca / Agua",
        "desc": "Se cree que su propia concha, demasiado pesada, terminó por llevarlo a la extinción hace millones de años.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/139.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/139.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/139.gif",
                "cap": "Omastar, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg"
            }
        ]
    },
    {
        "id": 141,
        "nombre": "Kabutops",
        "tipo": "Roca / Agua",
        "desc": "Corta a sus presas con sus filosas guadañas y luego les extrae los fluidos internos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/141.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/141.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/141.gif",
                "cap": "Kabutops, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg"
            }
        ]
    },
    {
        "id": 142,
        "nombre": "Aerodactyl",
        "tipo": "Roca / Volador",
        "desc": "Revivido a partir de ámbar fosilizado, es un feroz depredador prehistórico que domina los cielos antiguos.",
        "fav": "Un fósil viviente con una presencia salvaje; su Mega Evolución lo hace ver todavía más temible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/142.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/142.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/142.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg",
                "cap": "Aerodactyl, el Pokémon Fósil",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10042.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10042.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10042.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10042.ogg",
                "cap": "Mega-Aerodactyl",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 143,
        "nombre": "Snorlax",
        "tipo": "Normal",
        "desc": "Solo se despierta para comer más de 400 kg de comida al día y luego vuelve a dormirse.",
        "fav": "El rey del descanso y la fuerza bruta.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/143.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/143.gif",
                "cap": "Snorlax, el Pokémon Dormilón",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10206.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10206.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10206.gif",
                "cap": "Snorlax Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10206.ogg"
            }
        ]
    },
    {
        "id": 144,
        "nombre": "Articuno",
        "tipo": "Hielo / Volador",
        "desc": "Se dice que aparece ante quienes están perdidos en montañas nevadas, guiándolos con el batir de sus alas heladas.",
        "fav": "El trío legendario original de Kanto tenía que estar en la Dex, y su elegancia helada es innegable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/144.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/144.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/144.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg",
                "cap": "Articuno, el Pokémon Hielo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10169.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10169.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10169.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10169.ogg",
                "cap": "Articuno de Galar, el Pokémon Ave Gélida",
                "btn": "🔄 Volver a Articuno"
            }
        ]
    },
    {
        "id": 145,
        "nombre": "Zapdos",
        "tipo": "Eléctrico / Volador",
        "desc": "Vive entre las tormentas y se dice que un rayo cae siempre que aparece, anunciando su presencia.",
        "fav": "La energía y la furia de Zapdos entre nubes de tormenta son puro espectáculo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/145.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/145.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/145.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg",
                "cap": "Zapdos, el Pokémon Eléctrico"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10170.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10170.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10170.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10170.ogg",
                "cap": "Zapdos de Galar, el Pokémon Ave Furiosa",
                "btn": "🔄 Volver a Zapdos"
            }
        ]
    },
    {
        "id": 146,
        "nombre": "Moltres",
        "tipo": "Fuego / Volador",
        "desc": "Se cree que su fuego interior nace de un magma primigenio y que cada aleteo suyo prende llamas a su paso.",
        "fav": "El ave de fuego definitiva: majestuosa, ardiente e imposible de ignorar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/146.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/146.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/146.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg",
                "cap": "Moltres, el Pokémon Fuego"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10171.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10171.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10171.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10171.ogg",
                "cap": "Moltres de Galar, el Pokémon Ave Maligna",
                "btn": "🔄 Volver a Moltres"
            }
        ]
    },
    {
        "id": 149,
        "nombre": "Dragonite",
        "tipo": "Dragón / Volador",
        "desc": "Un Pokémon bondadoso que ayuda a los barcos perdidos en medio de tempestades en el mar.",
        "fav": "El dragón original, fuerte pero de aspecto muy amigable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/149.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/149.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/149.gif",
                "cap": "Dragonite, el Pokémon Dragón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10281.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10281.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10281.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10281.gif",
                "cap": "Mega-Dragonite",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 150,
        "nombre": "Mewtwo",
        "tipo": "Psíquico",
        "desc": "Creado mediante la manipulación del ADN de Mew. Su poder psíquico es formidable y es considerado una de las armas biológicas más fuertes.",
        "fav": "Su historia profunda, su búsqueda de propósito y su aura legendaria lo convierten en un personaje inolvidable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/150.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/150.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/150.gif",
                "cap": "Mewtwo, el Pokémon Genético",
                "btn": "🌟 Megaevolucionar X"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10043.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10043.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10043.gif",
                "cap": "Mega-Mewtwo X",
                "btn": "🌟 Megaevolucionar Y"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10044.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10044.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10044.gif",
                "cap": "Mega-Mewtwo Y",
                "btn": "🔄 Revertir a Forma Base"
            }
        ]
    },
    {
        "id": 151,
        "nombre": "Mew",
        "tipo": "Psíquico",
        "desc": "Se dice que contiene el ADN de todos los Pokémon, por lo que puede aprender casi cualquier movimiento.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/151.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/151.gif",
                "cap": "Mew, el Pokémon Nueva Especie"
            }
        ]
    },
    {
        "id": 152,
        "nombre": "Chikorita",
        "tipo": "Planta",
        "desc": "La hoja de su cabeza desprende un aroma dulce y refrescante que ayuda a calmar a quienes lo rodean.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/152.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/152.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/152.gif",
                "cap": "Chikorita, el Pokémon Hoja"
            }
        ]
    },
    {
        "id": 154,
        "nombre": "Meganium",
        "tipo": "Planta",
        "desc": "El aroma de sus pétalos tiene el poder de calmar las emociones agresivas de otros seres.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/154.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/154.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/154.gif",
                "cap": "Meganium, el Pokémon Hierba",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10282.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10282.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10282.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10282.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10282.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10282.png",
                "cap": "Mega-Meganium",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 155,
        "nombre": "Cyndaquil",
        "tipo": "Fuego",
        "desc": "Cuando se asusta, las llamas de su espalda arden con fuerza y le permiten protegerse.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/155.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/155.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/155.gif",
                "cap": "Cyndaquil, el Pokémon Ratón Fuego"
            }
        ]
    },
    {
        "id": 157,
        "nombre": "Typhlosion",
        "tipo": "Fuego",
        "desc": "Oculta su cuerpo entre un humo abrasador y puede generar explosiones de fuego con la espalda.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/157.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/157.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/157.gif",
                "cap": "Typhlosion, el Pokémon Volcán",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10233.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10233.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10233.gif",
                "cap": "Typhlosion de Hisui, el Pokémon Fuego Espíritu",
                "btn": "🔄 Volver a Typhlosion"
            }
        ]
    },
    {
        "id": 158,
        "nombre": "Totodile",
        "tipo": "Agua",
        "desc": "Aunque es pequeño, no puede controlar su mandíbula y muerde todo lo que encuentra.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/158.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/158.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/158.gif",
                "cap": "Totodile, el Pokémon Fauces"
            }
        ]
    },
    {
        "id": 160,
        "nombre": "Feraligatr",
        "tipo": "Agua",
        "desc": "Sus poderosas mandíbulas y sus fuertes patas traseras le permiten abalanzarse sobre sus presas.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/160.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/160.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/160.gif",
                "cap": "Feraligatr, el Pokémon Gran Mandíbula",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10283.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10283.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10283.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10283.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10283.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10283.png",
                "cap": "Mega-Feraligatr",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 162,
        "nombre": "Furret",
        "tipo": "Normal",
        "desc": "Su cuerpo alargado le permite deslizarse entre madrigueras estrechas sin perder velocidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/162.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/162.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/162.gif",
                "cap": "Furret, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/162.ogg"
            }
        ]
    },
    {
        "id": 164,
        "nombre": "Noctowl",
        "tipo": "Normal / Volador",
        "desc": "Puede girar la cabeza casi por completo para vigilar su territorio incluso de noche.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/164.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/164.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/164.gif",
                "cap": "Noctowl, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/164.ogg"
            }
        ]
    },
    {
        "id": 166,
        "nombre": "Ledian",
        "tipo": "Bicho / Volador",
        "desc": "Se dice que cuantas más manchas brillantes tiene en la espalda, más feliz se siente esa noche.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/166.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/166.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/166.gif",
                "cap": "Ledian, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/166.ogg"
            }
        ]
    },
    {
        "id": 168,
        "nombre": "Ariados",
        "tipo": "Bicho / Veneno",
        "desc": "Marca su territorio con hilos de seda que le avisan al instante si algo se acerca.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/168.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/168.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/168.gif",
                "cap": "Ariados, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/168.ogg"
            }
        ]
    },
    {
        "id": 169,
        "nombre": "Crobat",
        "tipo": "Veneno / Volador",
        "desc": "Cuando vuela largas distancias alterna qué par de alas usa para no cansarse nunca del todo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/169.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/169.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/169.gif",
                "cap": "Crobat, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/169.ogg"
            }
        ]
    },
    {
        "id": 171,
        "nombre": "Lanturn",
        "tipo": "Agua / Eléctrico",
        "desc": "La luz de su antena engaña a otros Pokémon de las profundidades, que se acercan pensando que es comida.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/171.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/171.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/171.gif",
                "cap": "Lanturn, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/171.ogg"
            }
        ]
    },
    {
        "id": 181,
        "nombre": "Ampharos",
        "tipo": "Eléctrico",
        "desc": "La luz de la punta de su cola puede verse desde muy lejos y se ha usado como faro para guiar a viajeros perdidos.",
        "fav": "Su cola luminosa y su llamativa evolución desde Mareep tienen un encanto muy especial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/181.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/181.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/181.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/181.ogg",
                "cap": "Ampharos, el Pokémon Luz",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10045.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10045.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10045.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10045.ogg",
                "cap": "Mega-Ampharos",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 182,
        "nombre": "Bellossom",
        "tipo": "Planta",
        "desc": "Baila agitando sus pétalos en cuanto siente la luz cálida del sol sobre ellos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/182.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/182.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/182.gif",
                "cap": "Bellossom, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/182.ogg"
            }
        ]
    },
    {
        "id": 184,
        "nombre": "Azumarill",
        "tipo": "Agua / Hada",
        "desc": "Los círculos de sus orejas están llenos de un líquido que le permite captar sonidos desde muy lejos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/184.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/184.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/184.gif",
                "cap": "Azumarill, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/184.ogg"
            }
        ]
    },
    {
        "id": 186,
        "nombre": "Politoed",
        "tipo": "Agua",
        "desc": "Se cree que el rizo en su frente es un símbolo de liderazgo entre las charcas donde vive.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/186.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/186.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/186.gif",
                "cap": "Politoed, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/186.ogg"
            }
        ]
    },
    {
        "id": 189,
        "nombre": "Jumpluff",
        "tipo": "Planta / Volador",
        "desc": "Flota llevado por el viento y solo aterriza cuando encuentra un lugar seguro para instalarse.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/189.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/189.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/189.gif",
                "cap": "Jumpluff, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/189.ogg"
            }
        ]
    },
    {
        "id": 192,
        "nombre": "Sunflora",
        "tipo": "Planta",
        "desc": "Gira su rostro para seguir siempre la posición exacta del sol durante todo el día.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/192.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/192.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/192.gif",
                "cap": "Sunflora, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/192.ogg"
            }
        ]
    },
    {
        "id": 195,
        "nombre": "Quagsire",
        "tipo": "Agua / Tierra",
        "desc": "Es tan despistado que puede chocar contra una roca y ni siquiera darse cuenta de lo ocurrido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/195.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/195.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/195.gif",
                "cap": "Quagsire, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/195.ogg"
            }
        ]
    },
    {
        "id": 196,
        "nombre": "Espeon",
        "tipo": "Psíquico",
        "desc": "Su fino pelaje le permite detectar cambios en el aire y anticipar los movimientos de sus rivales.",
        "fav": "Es elegante, misterioso y tiene uno de los mejores diseños entre las evoluciones de Eevee.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/196.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/196.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/196.gif",
                "cap": "Espeon, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 197,
        "nombre": "Umbreon",
        "tipo": "Siniestro",
        "desc": "Cuando se expone a la luz de la luna, los anillos de su cuerpo se iluminan y emite un aura misteriosa.",
        "fav": "El diseño siniestro nocturno perfecto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/197.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/197.gif",
                "cap": "Umbreon, el Pokémon Luz Lunar"
            }
        ]
    },
    {
        "id": 199,
        "nombre": "Slowking",
        "tipo": "Agua / Psíquico",
        "desc": "Sus ideas más brillantes solo le llegan cuando el Shellder de su cabeza le aprieta con fuerza el cerebro.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/199.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/199.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/199.gif",
                "cap": "Slowking, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/199.ogg"
            },
            {
                "cap": "Slowking de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/slowking-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/slowking-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/slowking-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/slowking-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 200,
        "nombre": "Misdreavus",
        "tipo": "Fantasma",
        "desc": "Asusta a la gente con gritos espeluznantes en plena noche y se alimenta del miedo que provoca en sus víctimas.",
        "fav": "Un fantasma travieso con un diseño elegante, y la base perfecta para conectar con su paradoja del pasado, Flutter Mane.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/200.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/200.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/200.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/200.ogg",
                "cap": "Misdreavus, el Pokémon Fantasma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/987.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/987.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/987.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/987.ogg",
                "cap": "Flutter Mane, paradoja del pasado de Misdreavus",
                "btn": "🔄 Volver a Misdreavus"
            }
        ]
    },
    {
        "id": 201,
        "nombre": "Unown",
        "tipo": "Psíquico",
        "desc": "Su cuerpo tiene la forma exacta de un símbolo o letra, y nadie sabe con certeza qué mensaje intenta transmitir.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/201.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/201.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/201.gif",
                "cap": "Unown, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/201.ogg"
            }
        ]
    },
    {
        "id": 202,
        "nombre": "Wobbuffet",
        "tipo": "Psíquico",
        "desc": "Prefiere aguantar los golpes en silencio antes que atacar primero, y luego devuelve todo el daño de golpe.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/202.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/202.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/202.gif",
                "cap": "Wobbuffet, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/202.ogg"
            }
        ]
    },
    {
        "id": 205,
        "nombre": "Forretress",
        "tipo": "Bicho / Acero",
        "desc": "Cierra su caparazón con fuerza ante cualquier peligro y se vuelve casi imposible de abrir.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/205.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/205.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/205.gif",
                "cap": "Forretress, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/205.ogg"
            }
        ]
    },
    {
        "id": 208,
        "nombre": "Steelix",
        "tipo": "Acero / Tierra",
        "desc": "Su cuerpo está compuesto por segmentos metálicos extremadamente resistentes y puede vivir bajo tierra durante largos periodos.",
        "fav": "Su apariencia de serpiente de acero y su Mega son simplemente brutales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/208.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/208.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/208.gif",
                "cap": "Steelix, el Pokémon Serpiente",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10072.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10072.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10072.gif",
                "cap": "Mega-Steelix",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 210,
        "nombre": "Granbull",
        "tipo": "Hada",
        "desc": "A pesar de su cara feroz, se cansa rápido y se le empiezan a doblar las mandíbulas al rugir.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/210.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/210.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/210.gif",
                "cap": "Granbull, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/210.ogg"
            }
        ]
    },
    {
        "id": 212,
        "nombre": "Scizor",
        "tipo": "Bicho / Acero",
        "desc": "Tiene una armadura dura como el acero. Levanta sus pinzas con ojos dibujados para intimidar a sus enemigos.",
        "fav": "Una evolución perfecta para Scyther con combinación tipo acero.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/212.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/212.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/212.gif",
                "cap": "Scizor, el Pokémon Tenaza",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10046.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10046.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10046.gif",
                "cap": "Mega-Scizor",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 213,
        "nombre": "Shuckle",
        "tipo": "Bicho / Roca",
        "desc": "Guarda bayas dentro de su caparazón hasta que se convierten en un jugo muy concentrado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/213.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/213.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/213.gif",
                "cap": "Shuckle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/213.ogg"
            }
        ]
    },
    {
        "id": 214,
        "nombre": "Heracross",
        "tipo": "Bicho / Lucha",
        "desc": "Un Pokémon dócil que adora la savia dulce. Sin embargo, posee una fuerza colosal capaz de arrojar objetos cien veces más pesados que él usando su gran cuerno.",
        "fav": "Su diseño me encantó, además de ser uno de los Pokémon que más me han acompañado en cada juego en el que aparece.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/214.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/214.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/214.gif",
                "cap": "Heracross, el Pokémon Cuerno",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10047.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10047.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10047.gif",
                "cap": "Mega-Heracross",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 219,
        "nombre": "Magcargo",
        "tipo": "Fuego / Roca",
        "desc": "Su caparazón es en realidad lava enfriada, tan frágil que se resquebraja con el más mínimo golpe.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/219.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/219.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/219.gif",
                "cap": "Magcargo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/219.ogg"
            }
        ]
    },
    {
        "id": 224,
        "nombre": "Octillery",
        "tipo": "Agua",
        "desc": "Dispara tinta con tanta puntería que puede apagar de un golpe la llama de una vela lejana.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/224.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/224.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/224.gif",
                "cap": "Octillery, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/224.ogg"
            }
        ]
    },
    {
        "id": 225,
        "nombre": "Delibird",
        "tipo": "Hielo / Volador",
        "desc": "Reparte comida entre los viajeros perdidos en la nieve, guardándola en la bolsa que lleva sujeta a la cola.",
        "fav": "Su espíritu generoso y festivo lo convierte en uno de los Pokémon más entrañables de Johto, y ahora tiene su paradoja del futuro, Iron Bundle.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/225.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/225.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/225.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/225.ogg",
                "cap": "Delibird, el Pokémon Hielo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/991.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/991.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/991.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/991.ogg",
                "cap": "Iron Bundle, paradoja del futuro de Delibird",
                "btn": "🔄 Volver a Delibird"
            }
        ]
    },
    {
        "id": 226,
        "nombre": "Mantine",
        "tipo": "Agua / Volador",
        "desc": "Suele nadar en compañía de un banco de Remoraid, que limpian su piel a cambio de protección.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/226.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/226.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/226.gif",
                "cap": "Mantine, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/226.ogg"
            }
        ]
    },
    {
        "id": 227,
        "nombre": "Skarmory",
        "tipo": "Acero / Volador",
        "desc": "Sus alas de acero, afiladas como cuchillas, pueden cortar árboles gruesos de un tajo mientras vuela a gran velocidad.",
        "fav": "Un ave completamente blindada con un diseño imponente; su defensa en combate es legendaria.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/227.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/227.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/227.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/227.ogg",
                "cap": "Skarmory, el Pokémon Blindado",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10284.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10284.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10284.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10284.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10284.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10284.png",
                "cap": "Mega-Skarmory",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 229,
        "nombre": "Houndoom",
        "tipo": "Siniestro / Fuego",
        "desc": "Su aliento contiene toxinas y sus rugidos pueden causar miedo incluso a otros Pokémon.",
        "fav": "Tiene una apariencia intimidante que encaja perfectamente con sus tipos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/229.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/229.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/229.gif",
                "cap": "Houndoom, el Pokémon Siniestro",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10048.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10048.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10048.gif",
                "cap": "Mega-Houndoom",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 230,
        "nombre": "Kingdra",
        "tipo": "Agua / Dragón",
        "desc": "Vive en cuevas submarinas profundas y se dice que provoca remolinos gigantescos con solo bostezar.",
        "fav": "Un dragón marino con un diseño precioso, evolución final de uno de los iniciales clásicos de Johto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/230.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/230.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/230.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/230.ogg",
                "cap": "Kingdra, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 232,
        "nombre": "Donphan",
        "tipo": "Tierra",
        "desc": "Se enrosca sobre sí mismo y rueda a gran velocidad para embestir a sus enemigos con su caparazón acorazado.",
        "fav": "Su fuerza bruta y sus dos paradojas, Great Tusk (pasado) e Iron Treads (futuro), lo convierten en un puente perfecto entre eras.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/232.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/232.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/232.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/232.ogg",
                "cap": "Donphan, el Pokémon Tierra"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/984.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/984.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/984.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/984.ogg",
                "cap": "Great Tusk, paradoja del pasado de Donphan",
                "btn": "🔄 Volver a Donphan"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/990.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/990.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/990.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/990.ogg",
                "cap": "Iron Treads, paradoja del futuro de Donphan",
                "btn": "🔄 Volver a Donphan"
            }
        ]
    },
    {
        "id": 235,
        "nombre": "Smeargle",
        "tipo": "Normal",
        "desc": "El líquido de su cola cambia de propiedades según su estado de ánimo al pintar con ella.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/235.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/235.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/235.gif",
                "cap": "Smeargle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/235.ogg"
            }
        ]
    },
    {
        "id": 237,
        "nombre": "Hitmontop",
        "tipo": "Lucha",
        "desc": "Gira sobre su cabeza para tomar impulso y lanzar patadas mientras da vueltas sin parar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/237.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/237.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/237.gif",
                "cap": "Hitmontop, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/237.ogg"
            }
        ]
    },
    {
        "id": 241,
        "nombre": "Miltank",
        "tipo": "Normal",
        "desc": "Su leche es tan nutritiva que se dice que hasta un enfermo grave mejora al beberla.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/241.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/241.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/241.gif",
                "cap": "Miltank, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/241.ogg"
            }
        ]
    },
    {
        "id": 242,
        "nombre": "Blissey",
        "tipo": "Normal",
        "desc": "Reparte el contenido de su bolsa de huevos a quien encuentre triste, y cuida de otros Pokémon heridos.",
        "fav": "Su ternura constante y su papel de enfermera del mundo Pokémon la hacen imposible de no querer.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/242.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/242.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/242.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/242.ogg",
                "cap": "Blissey, el Pokémon Normal"
            }
        ]
    },
    {
        "id": 243,
        "nombre": "Raikou",
        "tipo": "Eléctrico",
        "desc": "Corre a la velocidad del rayo por las llanuras, y se dice que nació de un incendio en la Torre Ardiente.",
        "fav": "El más veloz de las bestias legendarias, siempre en movimiento y difícil de alcanzar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/243.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/243.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/243.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/243.ogg",
                "cap": "Raikou, el Pokémon Eléctrico"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1021.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1021.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1021.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1021.ogg",
                "cap": "Raging Bolt, paradoja del pasado de Raikou",
                "btn": "🔄 Volver a Raikou"
            }
        ]
    },
    {
        "id": 244,
        "nombre": "Entei",
        "tipo": "Fuego",
        "desc": "Se dice que cada vez que nace un volcán aparece un Entei, cuya energía recuerda al fuego de la tierra.",
        "fav": "Su apariencia de bestia legendaria y su poder de fuego son espectaculares.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/244.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/244.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/244.gif",
                "cap": "Entei, el Pokémon Fuego"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1020.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1020.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1020.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1020.ogg",
                "cap": "Gouging Fire, paradoja del pasado de Entei",
                "btn": "🔄 Volver a Entei"
            }
        ]
    },
    {
        "id": 245,
        "nombre": "Suicune",
        "tipo": "Agua",
        "desc": "Se le considera la encarnación de la pureza de los manantiales, y purifica el agua allá por donde corre.",
        "fav": "Su carrera elegante junto a corrientes de agua cristalina es de las escenas más bonitas de Johto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/245.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/245.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/245.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/245.ogg",
                "cap": "Suicune, el Pokémon Agua"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1009.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1009.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1009.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1009.ogg",
                "cap": "Walking Wake, paradoja del pasado de Suicune",
                "btn": "🔄 Volver a Suicune"
            }
        ]
    },
    {
        "id": 248,
        "nombre": "Tyranitar",
        "tipo": "Roca / Siniestro",
        "desc": "Con su abrumadora fuerza puede derrumbar montañas enteras cambiando la geografía del paisaje.",
        "fav": "Es la definición pura de poder destructivo y resistencia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/248.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/248.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/248.gif",
                "cap": "Tyranitar, el Pokémon Coraza",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10049.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10049.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10049.gif",
                "cap": "Mega-Tyranitar",
                "btn": "🔄 Forma Base"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/995.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/995.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/995.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/995.ogg",
                "cap": "Iron Thorns, paradoja del futuro de Tyranitar",
                "btn": "🔄 Volver a Tyranitar"
            }
        ]
    },
    {
        "id": 249,
        "nombre": "Lugia",
        "tipo": "Psíquico / Volador",
        "desc": "Habita en las profundidades del océano y posee un poder enorme, aunque normalmente evita a los humanos.",
        "fav": "Su diseño majestuoso y su papel como guardián de los mares lo hacen inolvidable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/249.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/249.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/249.gif",
                "cap": "Lugia, el Pokémon Buceo"
            }
        ]
    },
    {
        "id": 250,
        "nombre": "Ho-Oh",
        "tipo": "Fuego / Volador",
        "desc": "Un legendario asociado al arcoíris que puede devolver la vida a quienes ya no están.",
        "fav": "Su diseño majestuoso y su relación con las leyendas de Johto son increíbles.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/250.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/250.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/250.gif",
                "cap": "Ho-Oh, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 251,
        "nombre": "Celebi",
        "tipo": "Psíquico / Planta",
        "desc": "Viaja a través del tiempo y se dice que solo aparece en bosques tranquilos cuando trae consigo la paz.",
        "fav": "Un mítico ligado al tiempo y a la naturaleza; siempre me pareció el más pacífico de todos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/251.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/251.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/251.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/251.ogg",
                "cap": "Celebi, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 252,
        "nombre": "Treecko",
        "tipo": "Planta",
        "desc": "Sus pequeños ganchos en las patas le permiten escalar paredes y superficies verticales.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/252.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/252.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/252.gif",
                "cap": "Treecko, el Pokémon Geco"
            }
        ]
    },
    {
        "id": 254,
        "nombre": "Sceptile",
        "tipo": "Planta",
        "desc": "Las hojas de sus brazos son afiladas como sables. Se mueve velozmente entre la vegetación de la jungla.",
        "fav": "El rey ágil de los bosques de la 3ra generación.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/254.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/254.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/254.gif",
                "cap": "Sceptile, el Pokémon Monte",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10065.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10065.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10065.gif",
                "cap": "Mega-Sceptile",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 255,
        "nombre": "Torchic",
        "tipo": "Fuego",
        "desc": "Guarda una pequeña llama en su cuerpo y es capaz de producir calor incluso cuando está tranquilo.",
        "fav": "Es uno de los iniciales más adorables y tiene una línea evolutiva muy buena.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/255.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/255.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/255.gif",
                "cap": "Torchic, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 257,
        "nombre": "Blaziken",
        "tipo": "Fuego / Lucha",
        "desc": "Puede saltar por encima de edificios altos. Sus patadas ígneas dejan a sus oponentes chamuscados.",
        "fav": "Uno de los iniciales tipo fuego más agresivos y divertidos de usar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/257.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/257.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/257.gif",
                "cap": "Blaziken, el Pokémon Flameante",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10050.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10050.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10050.gif",
                "cap": "Mega-Blaziken",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 258,
        "nombre": "Mudkip",
        "tipo": "Agua",
        "desc": "Las aletas de su cabeza detectan movimientos en el agua y puede desplazarse con facilidad por terrenos fangosos.",
        "fav": "Su cara es demasiado tierna y además termina convirtiéndose en Swampert.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/258.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/258.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/258.gif",
                "cap": "Mudkip, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 260,
        "nombre": "Swampert",
        "tipo": "Agua / Tierra",
        "desc": "Tiene tanta fuerza que puede arrastrar rocas que pesen más de una tonelada sin despeinarse.",
        "fav": "Una combinación de tipos excelente con solo una debilidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/260.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/260.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/260.gif",
                "cap": "Swampert, el Pokémon Pez Lodo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10064.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10064.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10064.gif",
                "cap": "Mega-Swampert",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 267,
        "nombre": "Beautifly",
        "tipo": "Bicho / Volador",
        "desc": "Extiende su larga probóscide para beber el polen de flores incluso en pleno vuelo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/267.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/267.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/267.gif",
                "cap": "Beautifly, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/267.ogg"
            }
        ]
    },
    {
        "id": 269,
        "nombre": "Dustox",
        "tipo": "Bicho / Veneno",
        "desc": "El polvo de sus alas es tan tóxico que ahuyenta a sus depredadores con solo agitarlas cerca de una luz.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/269.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/269.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/269.gif",
                "cap": "Dustox, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/269.ogg"
            }
        ]
    },
    {
        "id": 272,
        "nombre": "Ludicolo",
        "tipo": "Agua / Planta",
        "desc": "Se dice que baila y salta sin parar en cuanto escucha el ritmo de un tambor cercano.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/272.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/272.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/272.gif",
                "cap": "Ludicolo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/272.ogg"
            }
        ]
    },
    {
        "id": 275,
        "nombre": "Shiftry",
        "tipo": "Planta / Siniestro",
        "desc": "Controla ráfagas de viento con sus abanicos de hojas, capaces de derribar una casa entera.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/275.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/275.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/275.gif",
                "cap": "Shiftry, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/275.ogg"
            }
        ]
    },
    {
        "id": 277,
        "nombre": "Swellow",
        "tipo": "Normal / Volador",
        "desc": "Vuela en picada a gran velocidad para atrapar presas antes de que puedan reaccionar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/277.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/277.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/277.gif",
                "cap": "Swellow, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/277.ogg"
            }
        ]
    },
    {
        "id": 279,
        "nombre": "Pelipper",
        "tipo": "Agua / Volador",
        "desc": "Usa su enorme pico como nido flotante para transportar a sus crías de un lugar a otro.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/279.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/279.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/279.gif",
                "cap": "Pelipper, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/279.ogg"
            }
        ]
    },
    {
        "id": 282,
        "nombre": "Gardevoir",
        "tipo": "Psíquico / Hada",
        "desc": "Si su Entrenador está en peligro, usará toda su energía psíquica para crear un pequeño agujero negro de protección.",
        "fav": "Su lealtad y elegancia en combate son inigualables.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/282.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/282.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/282.gif",
                "cap": "Gardevoir, el Pokémon Envolvente",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10051.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10051.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10051.gif",
                "cap": "Mega-Gardevoir",
                "btn": "🔄 Forma Base"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1006.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1006.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1006.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1006.ogg",
                "cap": "Iron Valiant, paradoja del futuro de Gardevoir y Gallade",
                "btn": "🔄 Volver a Gardevoir"
            }
        ]
    },
    {
        "id": 284,
        "nombre": "Masquerain",
        "tipo": "Bicho / Volador",
        "desc": "Las manchas de sus antenas cambian de forma para imitar los ojos de un depredador más grande.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/284.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/284.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/284.gif",
                "cap": "Masquerain, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/284.ogg"
            }
        ]
    },
    {
        "id": 286,
        "nombre": "Breloom",
        "tipo": "Planta / Lucha",
        "desc": "Sus brazos pueden extenderse y utiliza esporas para debilitar a sus oponentes.",
        "fav": "La mezcla de hongo y luchador es muy original y su animación de combate me encanta.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/286.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/286.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/286.gif",
                "cap": "Breloom, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 289,
        "nombre": "Slaking",
        "tipo": "Normal",
        "desc": "Es tan perezoso que solo se mueve la mitad del tiempo, aunque su fuerza real es enorme.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/289.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/289.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/289.gif",
                "cap": "Slaking, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/289.ogg"
            }
        ]
    },
    {
        "id": 291,
        "nombre": "Ninjask",
        "tipo": "Bicho / Volador",
        "desc": "Vuela tan rápido y en silencio que apenas se nota su presencia hasta que ya pasó de largo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/291.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/291.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/291.gif",
                "cap": "Ninjask, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/291.ogg"
            }
        ]
    },
    {
        "id": 292,
        "nombre": "Shedinja",
        "tipo": "Bicho / Fantasma",
        "desc": "Surge de la muda vacía de Nincada y se dice que arrastra las almas de quienes miran por el hueco de su espalda.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/292.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/292.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/292.gif",
                "cap": "Shedinja, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/292.ogg"
            }
        ]
    },
    {
        "id": 297,
        "nombre": "Hariyama",
        "tipo": "Lucha",
        "desc": "Entrena a diario empujando camiones y lanzando embestidas de palma capaces de derribar a un toro.",
        "fav": "Su fuerza descomunal y personalidad amigable contrastan con la ferocidad de su paradoja del futuro, Iron Hands.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/297.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/297.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/297.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/297.ogg",
                "cap": "Hariyama, el Pokémon Lucha"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/992.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/992.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/992.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/992.ogg",
                "cap": "Iron Hands, paradoja del futuro de Hariyama",
                "btn": "🔄 Volver a Hariyama"
            }
        ]
    },
    {
        "id": 301,
        "nombre": "Delcatty",
        "tipo": "Normal",
        "desc": "Cambia de nido con frecuencia y jamás dos noches seguidas duerme en el mismo sitio.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/301.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/301.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/301.gif",
                "cap": "Delcatty, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/301.ogg"
            }
        ]
    },
    {
        "id": 302,
        "nombre": "Sableye",
        "tipo": "Siniestro / Fantasma",
        "desc": "Se alimenta de gemas y puede atravesar paredes sólidas; sus ojos parecen dos joyas brillando en la oscuridad.",
        "fav": "Un Pokémon travieso y misterioso que literalmente se convierte en una joya viviente al Megaevolucionar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/302.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/302.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/302.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/302.ogg",
                "cap": "Sableye, el Pokémon Oscuridad",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10066.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10066.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10066.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10066.ogg",
                "cap": "Mega-Sableye",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 303,
        "nombre": "Mawile",
        "tipo": "Acero / Hada",
        "desc": "Sus dos enormes fauces en la nuca en realidad son cuernos deformados con los que puede masticar incluso hierro.",
        "fav": "Su diseño engañoso, tierna por fuera y feroz por dentro, la hace única entre los Pokémon de tipo Acero.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/303.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/303.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/303.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/303.ogg",
                "cap": "Mawile, el Pokémon Colmillos",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10052.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10052.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10052.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10052.ogg",
                "cap": "Mega-Mawile",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 306,
        "nombre": "Aggron",
        "tipo": "Acero / Roca",
        "desc": "Reclama montañas enteras como su territorio. Si su hogar es destruido por un desastre, Aggron transporta tierra y planta árboles para restaurarlo.",
        "fav": "Siempre me han gustado los Pokémon intimidantes y con presencia imponente, verlo en el anime junto a su mega me hizo quererlo aún más.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/306.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/306.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/306.gif",
                "cap": "Aggron, el Pokémon Coraza Hierro",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10053.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10053.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10053.gif",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10053.png",
                "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/f/f5/latest/20240213102037/Grito_de_Mega-Aggron.ogg",
                "cap": "Mega-Aggron",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 308,
        "nombre": "Medicham",
        "tipo": "Lucha / Psíquico",
        "desc": "Gracias a un entrenamiento espiritual extremo, puede percibir hasta los movimientos más sutiles de sus rivales.",
        "fav": "La combinación de meditación y combate cuerpo a cuerpo le da una personalidad serena pero letal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/308.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/308.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/308.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/308.ogg",
                "cap": "Medicham, el Pokémon Meditador",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10054.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10054.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10054.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10054.ogg",
                "cap": "Mega-Medicham",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 310,
        "nombre": "Manectric",
        "tipo": "Eléctrico",
        "desc": "Almacena electricidad estática en su melena, que brilla con fuerza justo antes de atacar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/310.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/310.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/310.gif",
                "cap": "Manectric, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/310.ogg"
            },
            {
                "cap": "Mega-Manectric",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/manectric-mega.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/manectric-mega.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/manectric-mega.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/manectric-mega.gif",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 311,
        "nombre": "Plusle",
        "tipo": "Eléctrico",
        "desc": "Hace chispear su cuerpo para animar a sus aliados durante una batalla en equipo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/311.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/311.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/311.gif",
                "cap": "Plusle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/311.ogg"
            }
        ]
    },
    {
        "id": 312,
        "nombre": "Minun",
        "tipo": "Eléctrico",
        "desc": "Genera pequeñas descargas para levantar el ánimo de su compañero Plusle en pleno combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/312.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/312.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/312.gif",
                "cap": "Minun, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/312.ogg"
            }
        ]
    },
    {
        "id": 313,
        "nombre": "Volbeat",
        "tipo": "Bicho",
        "desc": "Enciende la luz de su cola para trazar patrones en el cielo nocturno junto a otros de su especie.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/313.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/313.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/313.gif",
                "cap": "Volbeat, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/313.ogg"
            }
        ]
    },
    {
        "id": 314,
        "nombre": "Illumise",
        "tipo": "Bicho",
        "desc": "Guía con su aroma a los Volbeat para que dibujen juntos formas luminosas en la oscuridad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/314.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/314.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/314.gif",
                "cap": "Illumise, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/314.ogg"
            }
        ]
    },
    {
        "id": 318,
        "nombre": "Swalot",
        "tipo": "Veneno",
        "desc": "Puede tragar objetos casi de su mismo tamaño gracias a su cuerpo extremadamente elástico.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/318.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/318.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/318.gif",
                "cap": "Swalot, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/318.ogg"
            }
        ]
    },
    {
        "id": 319,
        "nombre": "Sharpedo",
        "tipo": "Agua / Siniestro",
        "desc": "Su cuerpo está diseñado para nadar a gran velocidad y sus mandíbulas son capaces de causar enormes daños.",
        "fav": "Un tiburón Pokémon siempre es una idea genial y Sharpedo tiene mucha presencia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/319.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/319.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/319.gif",
                "cap": "Sharpedo, el Pokémon Agua",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10070.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10070.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10070.gif",
                "cap": "Mega-Sharpedo",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 321,
        "nombre": "Wailord",
        "tipo": "Agua",
        "desc": "Es uno de los Pokémon más grandes conocidos y puede desplazarse por el océano formando enormes salpicaduras.",
        "fav": "Su tamaño absurdo y su diseño de ballena lo hacen muy memorable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/321.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/321.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/321.gif",
                "cap": "Wailord, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 323,
        "nombre": "Camerupt",
        "tipo": "Fuego / Tierra",
        "desc": "Los volcanes que crecen en su lomo entran en erupción cuando se enoja, expulsando lava y rocas ardientes.",
        "fav": "Un camello volcánico andante es un concepto tan simple como espectacular, y su Mega lo hace aún más imponente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/323.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/323.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/323.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/323.ogg",
                "cap": "Camerupt, el Pokémon Volcán Andante",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10087.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10087.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10087.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10087.ogg",
                "cap": "Mega-Camerupt",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 324,
        "nombre": "Torkoal",
        "tipo": "Fuego",
        "desc": "Quema carbón dentro de su caparazón y expulsa una densa humareda negra cuando se siente amenazado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/324.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/324.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/324.gif",
                "cap": "Torkoal, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/324.ogg"
            }
        ]
    },
    {
        "id": 326,
        "nombre": "Grumpig",
        "tipo": "Psíquico",
        "desc": "Baila siguiendo un ritmo propio mientras usa ondas psíquicas para confundir a su oponente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/326.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/326.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/326.gif",
                "cap": "Grumpig, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/326.ogg"
            }
        ]
    },
    {
        "id": 327,
        "nombre": "Spinda",
        "tipo": "Normal",
        "desc": "El patrón de manchas de su rostro es único en cada ejemplar, casi como una huella digital.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/327.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/327.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/327.gif",
                "cap": "Spinda, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/327.ogg"
            }
        ]
    },
    {
        "id": 330,
        "nombre": "Flygon",
        "tipo": "Tierra / Dragón",
        "desc": "Genera tormentas de arena aleteando. El batir de sus alas suena como una bella melodía.",
        "fav": "El místico espíritu del desierto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/330.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/330.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/330.gif",
                "cap": "Flygon, el Pokémon Místico"
            }
        ]
    },
    {
        "id": 332,
        "nombre": "Cacturne",
        "tipo": "Planta / Siniestro",
        "desc": "Permanece inmóvil durante el día y solo comienza a moverse una vez que cae la noche en el desierto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/332.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/332.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/332.gif",
                "cap": "Cacturne, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/332.ogg"
            }
        ]
    },
    {
        "id": 334,
        "nombre": "Altaria",
        "tipo": "Dragón / Volador",
        "desc": "Sus alas parecen nubes y puede cantar melodías suaves mientras vuela por el cielo.",
        "fav": "Me encanta la combinación de dragón con un diseño tan tranquilo y elegante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/334.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/334.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/334.gif",
                "cap": "Altaria, el Pokémon Dragón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10067.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10067.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10067.gif",
                "cap": "Mega-Altaria",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 335,
        "nombre": "Zangoose",
        "tipo": "Normal",
        "desc": "Mantiene una rivalidad ancestral con los Seviper y afila sus garras a diario por si se cruzan.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/335.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/335.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/335.gif",
                "cap": "Zangoose, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/335.ogg"
            }
        ]
    },
    {
        "id": 336,
        "nombre": "Seviper",
        "tipo": "Veneno",
        "desc": "Su cola filosa como una cuchilla guarda un veneno peligroso, listo para usar contra Zangoose.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/336.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/336.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/336.gif",
                "cap": "Seviper, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/336.ogg"
            }
        ]
    },
    {
        "id": 337,
        "nombre": "Lunatone",
        "tipo": "Roca / Psíquico",
        "desc": "Se dice que cayó del cielo la noche de un meteorito y su actividad aumenta con la luna llena.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/337.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/337.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/337.gif",
                "cap": "Lunatone, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/337.ogg"
            }
        ]
    },
    {
        "id": 338,
        "nombre": "Solrock",
        "tipo": "Roca / Psíquico",
        "desc": "Gira sobre sí mismo como una rueda y emite un resplandor similar al del sol.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/338.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/338.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/338.gif",
                "cap": "Solrock, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/338.ogg"
            }
        ]
    },
    {
        "id": 340,
        "nombre": "Whiscash",
        "tipo": "Agua / Tierra",
        "desc": "Se dice que sus temblores bajo tierra son en realidad un anuncio de terremotos para la gente supersticiosa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/340.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/340.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/340.gif",
                "cap": "Whiscash, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/340.ogg"
            }
        ]
    },
    {
        "id": 342,
        "nombre": "Crawdaunt",
        "tipo": "Agua / Siniestro",
        "desc": "Sus pinzas son tan fuertes que pueden partir un tronco grueso de un solo apretón.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/342.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/342.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/342.gif",
                "cap": "Crawdaunt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/342.ogg"
            }
        ]
    },
    {
        "id": 344,
        "nombre": "Claydol",
        "tipo": "Tierra / Psíquico",
        "desc": "Flota en el aire gracias a un poder psíquico que desafía por completo su propio peso de barro.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/344.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/344.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/344.gif",
                "cap": "Claydol, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/344.ogg"
            }
        ]
    },
    {
        "id": 346,
        "nombre": "Cradily",
        "tipo": "Roca / Planta",
        "desc": "Atrapa a sus presas con los tentáculos de su cabeza y las disuelve lentamente con ácido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/346.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/346.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/346.gif",
                "cap": "Cradily, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/346.ogg"
            }
        ]
    },
    {
        "id": 348,
        "nombre": "Armaldo",
        "tipo": "Roca / Bicho",
        "desc": "Fue revivido a partir de un fósil antiguo y conserva un caparazón casi indestructible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/348.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/348.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/348.gif",
                "cap": "Armaldo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/348.ogg"
            }
        ]
    },
    {
        "id": 350,
        "nombre": "Milotic",
        "tipo": "Agua",
        "desc": "Se dice que su belleza puede calmar los corazones de las personas y los Pokémon que lo contemplan.",
        "fav": "Es una de las evoluciones más impresionantes visualmente de toda la franquicia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/350.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/350.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/350.gif",
                "cap": "Milotic, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 351,
        "nombre": "Castform",
        "tipo": "Normal",
        "desc": "Cambia de forma según el clima que lo rodea, adaptando su cuerpo a la lluvia, el sol o la nieve.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/351.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/351.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/351.gif",
                "cap": "Castform, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/351.ogg"
            }
        ]
    },
    {
        "id": 352,
        "nombre": "Kecleon",
        "tipo": "Normal",
        "desc": "Cambia el color de su piel para camuflarse a la perfección con cualquier superficie cercana.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/352.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/352.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/352.gif",
                "cap": "Kecleon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/352.ogg"
            }
        ]
    },
    {
        "id": 354,
        "nombre": "Banette",
        "tipo": "Fantasma",
        "desc": "Nació de un peluche abandonado que acumuló tanto rencor que cobró vida para buscar a su antiguo dueño.",
        "fav": "Su triste origen y su diseño de muñeco vengativo lo convierten en uno de los Pokémon Fantasma más originales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/354.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/354.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/354.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/354.ogg",
                "cap": "Banette, el Pokémon Marioneta",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10056.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10056.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10056.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10056.ogg",
                "cap": "Mega-Banette",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 357,
        "nombre": "Tropius",
        "tipo": "Planta / Volador",
        "desc": "Los racimos de fruta que crecen en su cuello son un manjar muy buscado por otros Pokémon.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/357.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/357.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/357.gif",
                "cap": "Tropius, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/357.ogg"
            }
        ]
    },
    {
        "id": 358,
        "nombre": "Chimecho",
        "tipo": "Psíquico",
        "desc": "Cuelga de las ramas de los árboles y se balancea con el viento, emitiendo un sonido relajante desde su cuerpo hueco.",
        "fav": "Su campanita de viento con cara sorprendida es de los diseños más tiernos y relajantes de Hoenn.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/358.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/358.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/358.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/358.ogg",
                "cap": "Chimecho, el Pokémon Campana",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10306.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10306.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10306.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10306.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10306.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10306.png",
                "cap": "Mega-Chimecho",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 359,
        "nombre": "Absol",
        "tipo": "Siniestro",
        "desc": "Aparece ante la gente cuando presiente una catástrofe inminente para intentar advertirles.",
        "fav": "Un Pokémon incomprendido con un diseño impecable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/359.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/359.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/359.gif",
                "cap": "Absol, el Pokémon Catástrofe",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10057.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10057.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10057.gif",
                "cap": "Mega-Absol",
                "btn": "🌟 Megaevolucionar Z"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10307.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10307.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10307.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10307.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10307.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10307.png",
                "cap": "Mega-Absol Z",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 362,
        "nombre": "Glalie",
        "tipo": "Hielo",
        "desc": "Puede congelar la humedad del aire y utilizarla para crear hielo alrededor de su cuerpo.",
        "fav": "Su aspecto de máscara helada y su actitud intimidante me gustan mucho.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/362.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/362.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/362.gif",
                "cap": "Glalie, el Pokémon Hielo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10074.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10074.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10074.gif",
                "cap": "Mega-Glalie",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 365,
        "nombre": "Walrein",
        "tipo": "Hielo / Agua",
        "desc": "Rompe el hielo grueso con sus colmillos para poder respirar bajo capas congeladas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/365.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/365.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/365.gif",
                "cap": "Walrein, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/365.ogg"
            }
        ]
    },
    {
        "id": 367,
        "nombre": "Huntail",
        "tipo": "Agua",
        "desc": "Su cola en forma de anzuelo atrae a presas curiosas en las profundidades más oscuras del mar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/367.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/367.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/367.gif",
                "cap": "Huntail, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/367.ogg"
            }
        ]
    },
    {
        "id": 368,
        "nombre": "Gorebyss",
        "tipo": "Agua",
        "desc": "Su hocico delgado le permite introducirse en huecos estrechos de los arrecifes de coral.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/368.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/368.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/368.gif",
                "cap": "Gorebyss, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/368.ogg"
            }
        ]
    },
    {
        "id": 369,
        "nombre": "Relicanth",
        "tipo": "Agua / Roca",
        "desc": "Apenas ha cambiado en millones de años y todavía vive tal como lo hacían sus ancestros.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/369.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/369.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/369.gif",
                "cap": "Relicanth, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/369.ogg"
            }
        ]
    },
    {
        "id": 370,
        "nombre": "Luvdisc",
        "tipo": "Agua",
        "desc": "Se dice que encontrar una pareja de Luvdisc junta trae buena suerte en el amor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/370.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/370.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/370.gif",
                "cap": "Luvdisc, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/370.ogg"
            }
        ]
    },
    {
        "id": 373,
        "nombre": "Salamence",
        "tipo": "Dragón / Volador",
        "desc": "Su constante deseo de volar hizo que sus células mutaran hasta que le brotaron alas rojas gigantes.",
        "fav": "Demuestra que la determinación puede cambiar la biología de un Pokémon.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/373.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/373.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/373.gif",
                "cap": "Salamence, el Pokémon Dragón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10089.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10089.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10089.gif",
                "cap": "Mega-Salamence",
                "btn": "🔄 Forma Base"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1005.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1005.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1005.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1005.ogg",
                "cap": "Roaring Moon, paradoja del pasado de Salamence",
                "btn": "🔄 Volver a Salamence"
            }
        ]
    },
    {
        "id": 376,
        "nombre": "Metagross",
        "tipo": "Acero / Psíquico",
        "desc": "Resultado de la fusión de dos Metang. Posee cuatro cerebros conectados que calculan tácticas de combate más rápido que una supercomputadora.",
        "fav": "Es mi Pseudo Legendario favorito y me encanta su mega, aparte cuento con su shiny en Pokémon GO y es de mis Pokémon más poderosos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/376.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/376.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/376.gif",
                "cap": "Metagross, el Pokémon Patas Hierro",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10076.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10076.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10076.gif",
                "cap": "Mega-Metagross",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 377,
        "nombre": "Regirock",
        "tipo": "Roca",
        "desc": "Su cuerpo está formado por rocas antiguas que se reconstruyen solas si llegan a romperse en combate.",
        "fav": "El primero de los gólems legendarios, con ese aire misterioso a estructura olvidada.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/377.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/377.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/377.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/377.ogg",
                "cap": "Regirock, el Pokémon Roca"
            }
        ]
    },
    {
        "id": 378,
        "nombre": "Regice",
        "tipo": "Hielo",
        "desc": "Su cuerpo, hecho de hielo de una era glacial, mantiene una temperatura tan baja que jamás llega a derretirse.",
        "fav": "Un bloque de hielo milenario con una presencia gélida y silenciosa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/378.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/378.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/378.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/378.ogg",
                "cap": "Regice, el Pokémon Hielo"
            }
        ]
    },
    {
        "id": 379,
        "nombre": "Registeel",
        "tipo": "Acero",
        "desc": "Su cuerpo metálico es más duro que cualquier metal conocido, y se dice que su interior es un misterio total.",
        "fav": "El más enigmático del trío de gólems, con un diseño metálico muy limpio.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/379.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/379.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/379.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/379.ogg",
                "cap": "Registeel, el Pokémon Acero"
            }
        ]
    },
    {
        "id": 380,
        "nombre": "Latias",
        "tipo": "Dragón / Psíquico",
        "desc": "Puede refractar la luz para volverse casi invisible y percibe los sentimientos de la gente a su alrededor.",
        "fav": "El dúo Latias/Latios es de los diseños más elegantes de Hoenn, y ella tiene un carisma especial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/380.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/380.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/380.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/380.ogg",
                "cap": "Latias, el Pokémon Dragón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10062.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10062.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10062.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10062.ogg",
                "cap": "Mega-Latias",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 381,
        "nombre": "Latios",
        "tipo": "Dragón / Psíquico",
        "desc": "Vuela a velocidades supersónicas y comparte un vínculo telepático profundo con su hermana Latias.",
        "fav": "Su silueta cortando el cielo a toda velocidad es icónica desde la película de Hoenn.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/381.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/381.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/381.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/381.ogg",
                "cap": "Latios, el Pokémon Dragón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10063.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10063.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10063.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10063.ogg",
                "cap": "Mega-Latios",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 382,
        "nombre": "Kyogre",
        "tipo": "Agua",
        "desc": "Kyogre puede expandir los océanos y es considerado una personificación del mar.",
        "fav": "Su Forma Primigenia y su rivalidad con Groudon hacen que sea uno de mis legendarios favoritos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/382.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/382.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/382.gif",
                "cap": "Kyogre, el Pokémon Cuenca Marina",
                "btn": "🌊 Activar Regresión Primigenia"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10077.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10077.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10077.gif",
                "cap": "Kyogre Primigenio",
                "btn": "🔄 Revertir Forma Primigenia"
            }
        ]
    },
    {
        "id": 383,
        "nombre": "Groudon",
        "tipo": "Tierra",
        "desc": "Groudon puede expandir los continentes y es considerado una personificación de la tierra firme.",
        "fav": "Su rivalidad con Kyogre y su Forma Primigenia lo convierten en uno de los legendarios más imponentes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/383.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/383.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/383.gif",
                "cap": "Groudon, el Pokémon Continente",
                "btn": "🌋 Activar Regresión Primigenia"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10078.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10078.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10078.gif",
                "cap": "Groudon Primigenio",
                "btn": "🔄 Revertir Forma Primigenia"
            }
        ]
    },
    {
        "id": 384,
        "nombre": "Rayquaza",
        "tipo": "Dragón / Volador",
        "desc": "Habita en la capa de ozono y no desciende a la superficie a menos que sea para detener el conflicto destructivo entre Groudon y Kyogre.",
        "fav": "Es el legendario más imponente. Su mega, sus habilidades y sus películas lo convierten, sin dudas, en el mejor legendario.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/384.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/384.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/384.gif",
                "cap": "Rayquaza, el Pokémon Cielo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10079.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10079.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10079.gif",
                "cap": "Mega-Rayquaza",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 385,
        "nombre": "Jirachi",
        "tipo": "Acero / Psíquico",
        "desc": "Solo despierta durante periodos muy breves y puede conceder deseos escritos en las etiquetas de su cabeza.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/385.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/385.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/385.gif",
                "cap": "Jirachi, el Pokémon Deseo"
            }
        ]
    },
    {
        "id": 386,
        "nombre": "Deoxys",
        "tipo": "Psíquico",
        "desc": "Nació de un virus del espacio mutado por un láser, y puede cambiar de forma para adaptarse al combate.",
        "fav": "Su origen extraterrestre y su capacidad de cambiar de forma lo hacen único entre los legendarios.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/386.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/386.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/386.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/386.ogg",
                "cap": "Deoxys, el Pokémon Psíquico",
                "btn": "🔄 Forma Ataque"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10001.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10001.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10001.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10001.ogg",
                "cap": "Deoxys Forma Ataque",
                "btn": "🔄 Forma Defensa"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10002.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10002.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10002.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10002.ogg",
                "cap": "Deoxys Forma Defensa",
                "btn": "🔄 Forma Velocidad"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10003.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10003.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10003.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10003.ogg",
                "cap": "Deoxys Forma Velocidad",
                "btn": "🔄 Volver a Deoxys"
            }
        ]
    },
    {
        "id": 387,
        "nombre": "Turtwig",
        "tipo": "Planta",
        "desc": "La hoja de su cabeza necesita luz solar y su caparazón está formado por tierra endurecida.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/387.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/387.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/387.gif",
                "cap": "Turtwig, el Pokémon Hojita"
            }
        ]
    },
    {
        "id": 389,
        "nombre": "Torterra",
        "tipo": "Planta / Tierra",
        "desc": "Pokémon pequeños a menudo se reúnen en su caparazón para construir sus nidos sobre su lomo.",
        "fav": "Un ecosistema entero viviente en un gigante ancestral.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/389.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/389.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/389.gif",
                "cap": "Torterra, el Pokémon Continente"
            }
        ]
    },
    {
        "id": 390,
        "nombre": "Chimchar",
        "tipo": "Fuego",
        "desc": "Su cola arde incluso cuando duerme y su agilidad le permite moverse con rapidez por las montañas.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/390.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/390.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/390.gif",
                "cap": "Chimchar, el Pokémon Mono"
            }
        ]
    },
    {
        "id": 392,
        "nombre": "Infernape",
        "tipo": "Fuego / Lucha",
        "desc": "Usa artes marciales únicas aprovechando las llamas de sus extremidades y cabeza.",
        "fav": "Agilidad e intensidad inspiradas en la leyenda del Rey Mono.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/392.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/392.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/392.gif",
                "cap": "Infernape, el Pokémon Llama"
            }
        ]
    },
    {
        "id": 393,
        "nombre": "Piplup",
        "tipo": "Agua",
        "desc": "Orgulloso y difícil de entrenar, es capaz de nadar durante mucho tiempo sin cansarse.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/393.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/393.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/393.gif",
                "cap": "Piplup, el Pokémon Pingüino"
            }
        ]
    },
    {
        "id": 395,
        "nombre": "Empoleon",
        "tipo": "Agua / Acero",
        "desc": "Las tres puntas de su pico demuestran su fuerza. Sus alas cortan témpanos de hielo fácilmente.",
        "fav": "Diseño señorial e imponente para un inicial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/395.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/395.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/395.gif",
                "cap": "Empoleon, el Pokémon Emperador"
            }
        ]
    },
    {
        "id": 398,
        "nombre": "Staraptor",
        "tipo": "Normal / Volador",
        "desc": "Es muy valiente y no duda en enfrentarse a rivales grandes, incluso si resulta herido.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/398.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/398.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/398.gif",
                "cap": "Staraptor, el Pokémon Ave Agresiva",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10308.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10308.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10308.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10308.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10308.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10308.png",
                "cap": "Mega-Staraptor",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 400,
        "nombre": "Bibarel",
        "tipo": "Normal / Agua",
        "desc": "Construye represas con troncos que corta él mismo para controlar el nivel del río.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/400.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/400.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/400.gif",
                "cap": "Bibarel, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/400.ogg"
            }
        ]
    },
    {
        "id": 402,
        "nombre": "Kricketune",
        "tipo": "Bicho",
        "desc": "Frota sus antenas como si fueran instrumentos para componer melodías propias.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/402.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/402.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/402.gif",
                "cap": "Kricketune, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/402.ogg"
            }
        ]
    },
    {
        "id": 405,
        "nombre": "Luxray",
        "tipo": "Eléctrico",
        "desc": "Sus ojos pueden atravesar objetos sólidos para detectar lo que hay al otro lado.",
        "fav": "Su diseño de felino eléctrico es uno de los más llamativos de Sinnoh.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/405.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/405.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/405.gif",
                "cap": "Luxray, el Pokémon Eléctrico"
            }
        ]
    },
    {
        "id": 407,
        "nombre": "Roserade",
        "tipo": "Planta / Veneno",
        "desc": "Utiliza aromas engañosos y látigos cubiertos de espinas venenosas para atacar.",
        "fav": "Tiene una mezcla perfecta entre elegancia y peligrosidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/407.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/407.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/407.gif",
                "cap": "Roserade, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 409,
        "nombre": "Rampardos",
        "tipo": "Roca",
        "desc": "Su cráneo es tan grueso y duro que puede embestir sin sentir apenas el impacto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/409.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/409.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/409.gif",
                "cap": "Rampardos, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/409.ogg"
            }
        ]
    },
    {
        "id": 411,
        "nombre": "Bastiodon",
        "tipo": "Roca / Acero",
        "desc": "Forma una muralla junto a otros de su especie para proteger a las crías de cualquier depredador.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/411.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/411.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/411.gif",
                "cap": "Bastiodon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/411.ogg"
            }
        ]
    },
    {
        "id": 413,
        "nombre": "Wormadam",
        "tipo": "Bicho / Planta",
        "desc": "El material que recogió de niño como Burmy queda fijo para siempre en su manto al evolucionar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/413.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/413.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/413.gif",
                "cap": "Wormadam, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/413.ogg"
            }
        ]
    },
    {
        "id": 414,
        "nombre": "Mothim",
        "tipo": "Bicho / Volador",
        "desc": "Vuela de noche en busca de la miel dulce que produce la colonia de Combee.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/414.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/414.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/414.gif",
                "cap": "Mothim, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/414.ogg"
            }
        ]
    },
    {
        "id": 416,
        "nombre": "Vespiquen",
        "tipo": "Bicho / Volador",
        "desc": "Dirige a toda la colonia de Combee liberando distintas feromonas según lo que necesite ordenar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/416.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/416.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/416.gif",
                "cap": "Vespiquen, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/416.ogg"
            }
        ]
    },
    {
        "id": 417,
        "nombre": "Pachirisu",
        "tipo": "Eléctrico",
        "desc": "Guarda bellotas cargadas de electricidad estática dentro de sus mejillas para el invierno.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/417.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/417.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/417.gif",
                "cap": "Pachirisu, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/417.ogg"
            }
        ]
    },
    {
        "id": 419,
        "nombre": "Floatzel",
        "tipo": "Agua",
        "desc": "La bolsa flotante de su cuello le permite rescatar a la gente en aguas con corrientes fuertes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/419.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/419.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/419.gif",
                "cap": "Floatzel, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/419.ogg"
            }
        ]
    },
    {
        "id": 421,
        "nombre": "Cherrim",
        "tipo": "Planta",
        "desc": "Sus pétalos se abren por completo en cuanto sienten la luz directa del sol.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/421.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/421.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/421.gif",
                "cap": "Cherrim, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/421.ogg"
            }
        ]
    },
    {
        "id": 423,
        "nombre": "Gastrodon",
        "tipo": "Agua / Tierra",
        "desc": "Su cuerpo blando se regenera con facilidad incluso si pierde un pedazo entero.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/423.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/423.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/423.gif",
                "cap": "Gastrodon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/423.ogg"
            }
        ]
    },
    {
        "id": 424,
        "nombre": "Ambipom",
        "tipo": "Normal",
        "desc": "Prefiere usar las colas de sus dos extremos en vez de las manos para casi cualquier tarea.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/424.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/424.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/424.gif",
                "cap": "Ambipom, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/424.ogg"
            }
        ]
    },
    {
        "id": 426,
        "nombre": "Drifblim",
        "tipo": "Fantasma / Volador",
        "desc": "Flota a la deriva llevado por el viento, y se dice que a veces se lleva consigo a niños pequeños.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/426.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/426.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/426.gif",
                "cap": "Drifblim, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/426.ogg"
            }
        ]
    },
    {
        "id": 428,
        "nombre": "Lopunny",
        "tipo": "Normal",
        "desc": "Sus orejas pueden ser suaves y sedosas, pero cuando las tensa pueden convertirse en poderosas armas.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/428.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/428.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/428.gif",
                "cap": "Lopunny, el Pokémon Conejo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10088.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10088.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10088.gif",
                "cap": "Mega-Lopunny, el Pokémon Conejo",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 429,
        "nombre": "Mismagius",
        "tipo": "Fantasma",
        "desc": "Sus murmullos suenan como un canto y pueden provocar dolores de cabeza a quien los escuche demasiado tiempo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/429.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/429.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/429.gif",
                "cap": "Mismagius, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/429.ogg"
            }
        ]
    },
    {
        "id": 430,
        "nombre": "Honchkrow",
        "tipo": "Siniestro / Volador",
        "desc": "Es conocido por liderar grupos de Murkrow y por aparecer principalmente durante la noche.",
        "fav": "Su apariencia de jefe de una banda de cuervos le da muchísimo estilo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/430.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/430.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/430.gif",
                "cap": "Honchkrow, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 432,
        "nombre": "Purugly",
        "tipo": "Normal",
        "desc": "Contrae los músculos del vientre para parecer más grande e intimidante frente a un rival.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/432.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/432.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/432.gif",
                "cap": "Purugly, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/432.ogg"
            }
        ]
    },
    {
        "id": 435,
        "nombre": "Skuntank",
        "tipo": "Veneno / Siniestro",
        "desc": "El líquido que dispara desde la cola tiene un hedor tan fuerte que tarda días en desaparecer.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/435.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/435.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/435.gif",
                "cap": "Skuntank, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/435.ogg"
            }
        ]
    },
    {
        "id": 437,
        "nombre": "Bronzong",
        "tipo": "Acero / Psíquico",
        "desc": "En la antigüedad se usaba en rituales para invocar la lluvia antes de la siembra.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/437.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/437.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/437.gif",
                "cap": "Bronzong, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/437.ogg"
            }
        ]
    },
    {
        "id": 441,
        "nombre": "Chatot",
        "tipo": "Normal / Volador",
        "desc": "Puede imitar casi cualquier sonido que escuche, incluyendo el habla humana.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/441.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/441.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/441.gif",
                "cap": "Chatot, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/441.ogg"
            }
        ]
    },
    {
        "id": 442,
        "nombre": "Spiritomb",
        "tipo": "Fantasma / Siniestro",
        "desc": "Se formó al unir 108 espíritus atrapados en una lápida hace quinientos años.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/442.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/442.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/442.gif",
                "cap": "Spiritomb, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/442.ogg"
            }
        ]
    },
    {
        "id": 445,
        "nombre": "Garchomp",
        "tipo": "Dragón / Tierra",
        "desc": "Vuela a velocidades sónicas arrollando a sus presas. Las escamas de sus alas reducen el rozamiento del aire permitiéndole planear sin esfuerzo.",
        "fav": "Un Tiburón Dragón de tierra, ¿qué más puedo pedir? Y aún tengo recuerdos intensos contra el Garchomp de Cynthia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/445.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/445.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/445.gif",
                "cap": "Garchomp, el Pokémon Mach",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10058.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10058.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10058.gif",
                "cap": "Mega-Garchomp",
                "btn": "🌟 Megaevolucionar Z"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10309.png",
                "cap": "Mega-Garchomp Z",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 448,
        "nombre": "Lucario",
        "tipo": "Lucha / Acero",
        "desc": "Puede percibir el aura de todos los seres vivos a más de un kilómetro de distancia.",
        "fav": "Uno de los guerreros más emblemáticos con un diseño épico.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/448.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/448.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/448.gif",
                "cap": "Lucario, el Pokémon Aura",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10059.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10059.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10059.gif",
                "cap": "Mega-Lucario",
                "btn": "🌟 Megaevolucionar Z"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10310.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10310.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10310.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10310.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10310.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10310.png",
                "cap": "Mega-Lucario Z",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 450,
        "nombre": "Hippowdon",
        "tipo": "Tierra",
        "desc": "Se entierra en la arena dejando solo la cabeza afuera para vigilar su territorio.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/450.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/450.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/450.gif",
                "cap": "Hippowdon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/450.ogg"
            }
        ]
    },
    {
        "id": 452,
        "nombre": "Drapion",
        "tipo": "Veneno / Siniestro",
        "desc": "Sus pinzas pueden girar 180 grados, lo que le permite atacar desde casi cualquier ángulo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/452.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/452.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/452.gif",
                "cap": "Drapion, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/452.ogg"
            }
        ]
    },
    {
        "id": 454,
        "nombre": "Toxicroak",
        "tipo": "Veneno / Lucha",
        "desc": "La bolsa venenosa de su garganta se hincha justo antes de clavar sus garras tóxicas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/454.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/454.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/454.gif",
                "cap": "Toxicroak, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/454.ogg"
            }
        ]
    },
    {
        "id": 455,
        "nombre": "Carnivine",
        "tipo": "Planta",
        "desc": "Atrae insectos con un aroma dulce y luego cierra sus fauces con fuerza sobre ellos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/455.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/455.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/455.gif",
                "cap": "Carnivine, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/455.ogg"
            }
        ]
    },
    {
        "id": 457,
        "nombre": "Lumineon",
        "tipo": "Agua",
        "desc": "Las líneas brillantes de su cuerpo se iluminan para comunicarse en las profundidades oscuras.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/457.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/457.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/457.gif",
                "cap": "Lumineon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/457.ogg"
            }
        ]
    },
    {
        "id": 460,
        "nombre": "Abomasnow",
        "tipo": "Planta / Hielo",
        "desc": "Vive en las cumbres nevadas y genera fuertes tormentas de nieve con solo agitar los brazos.",
        "fav": "El abominable hombre de las nieves vegetal es una de las fusiones de tipo más creativas de Sinnoh.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/460.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/460.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/460.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/460.ogg",
                "cap": "Abomasnow, el Pokémon Árbol Hielo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10060.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10060.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10060.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10060.ogg",
                "cap": "Mega-Abomasnow",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 461,
        "nombre": "Weavile",
        "tipo": "Siniestro / Hielo",
        "desc": "Talla marcas en árboles helados para coordinar cacerías en grupo con otros de su especie.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/461.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/461.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/461.gif",
                "cap": "Weavile, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/461.ogg"
            }
        ]
    },
    {
        "id": 463,
        "nombre": "Lickilicky",
        "tipo": "Normal",
        "desc": "Puede estirar la lengua tanto que la usa incluso para alcanzar objetos en estantes altos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/463.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/463.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/463.gif",
                "cap": "Lickilicky, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/463.ogg"
            }
        ]
    },
    {
        "id": 464,
        "nombre": "Rhyperior",
        "tipo": "Tierra / Roca",
        "desc": "Coloca rocas y Pokémon pequeños en las palmas de sus manos para dispararlos como proyectiles mediante la contracción de sus músculos.",
        "fav": "Se ve fuerte, es fuerte y es la evolución del primer Pokémon diseñado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/464.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/464.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/464.gif",
                "cap": "Rhyperior, el Pokémon Taladro"
            }
        ]
    },
    {
        "id": 465,
        "nombre": "Tangrowth",
        "tipo": "Planta",
        "desc": "Sus lianas nunca dejan de crecer, así que se enreda constantemente con lo que tenga alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/465.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/465.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/465.gif",
                "cap": "Tangrowth, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/465.ogg"
            }
        ]
    },
    {
        "id": 466,
        "nombre": "Electivire",
        "tipo": "Eléctrico",
        "desc": "Genera tanta electricidad que ilumina la noche a su alrededor sin proponérselo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/466.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/466.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/466.gif",
                "cap": "Electivire, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/466.ogg"
            }
        ]
    },
    {
        "id": 467,
        "nombre": "Magmortar",
        "tipo": "Fuego",
        "desc": "Los cañones de sus brazos alcanzan temperaturas capaces de fundir cualquier metal conocido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/467.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/467.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/467.gif",
                "cap": "Magmortar, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/467.ogg"
            }
        ]
    },
    {
        "id": 468,
        "nombre": "Togekiss",
        "tipo": "Hada / Volador",
        "desc": "Rara vez aparece en lugares donde hay conflictos y se relaciona con la paz y la buena fortuna.",
        "fav": "Su diseño es adorable y representa muy bien el lado más amable de Pokémon.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/468.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/468.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/468.gif",
                "cap": "Togekiss, el Pokémon Hada"
            }
        ]
    },
    {
        "id": 469,
        "nombre": "Yanmega",
        "tipo": "Bicho / Volador",
        "desc": "Sus alas generan ondas de choque capaces de aturdir a una presa antes de tocarla.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/469.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/469.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/469.gif",
                "cap": "Yanmega, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/469.ogg"
            }
        ]
    },
    {
        "id": 470,
        "nombre": "Leafeon",
        "tipo": "Planta",
        "desc": "Absorbe energía solar mediante las hojas de su cuerpo y desprende un aroma parecido al de la hierba fresca.",
        "fav": "Una de mis evoluciones de Eevee favoritas por su diseño natural y elegante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/470.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/470.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/470.gif",
                "cap": "Leafeon, el Pokémon Verdor"
            }
        ]
    },
    {
        "id": 471,
        "nombre": "Glaceon",
        "tipo": "Hielo",
        "desc": "Puede congelar el aire a su alrededor creando agujas de hielo para dispararle a sus presas.",
        "fav": "Estilo elegante de tipo Hielo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/471.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/471.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/471.gif",
                "cap": "Glaceon, el Pokémon Nieve Fresca"
            }
        ]
    },
    {
        "id": 472,
        "nombre": "Gliscor",
        "tipo": "Tierra / Volador",
        "desc": "Se cuelga de las ramas boca abajo y espera pacientemente a que su presa pase por debajo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/472.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/472.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/472.gif",
                "cap": "Gliscor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/472.ogg"
            }
        ]
    },
    {
        "id": 473,
        "nombre": "Mamoswine",
        "tipo": "Hielo / Tierra",
        "desc": "Sus colmillos crecieron durante la última era de hielo y todavía conserva ese pelaje grueso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/473.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/473.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/473.gif",
                "cap": "Mamoswine, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/473.ogg"
            }
        ]
    },
    {
        "id": 474,
        "nombre": "Porygon-Z",
        "tipo": "Normal",
        "desc": "Una modificación experimental en su programa le permite actuar de forma errática pero mucho más poderosa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/474.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/474.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/474.gif",
                "cap": "Porygon-Z, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/474.ogg"
            }
        ]
    },
    {
        "id": 475,
        "nombre": "Gallade",
        "tipo": "Lucha / Psíquico",
        "desc": "Un maestro de la esgrima. Lucha extendiendo las espadas de sus codos con cortes precisos.",
        "fav": "El caballero protector y contraparte de Gardevoir.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/475.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/475.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/475.gif",
                "cap": "Gallade, el Pokémon Cuchilla",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10068.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10068.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10068.gif",
                "cap": "Mega-Gallade",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 476,
        "nombre": "Probopass",
        "tipo": "Roca / Acero",
        "desc": "Controla tres mini-narices magnéticas que actúan como si fueran satélites a su alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/476.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/476.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/476.gif",
                "cap": "Probopass, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/476.ogg"
            }
        ]
    },
    {
        "id": 477,
        "nombre": "Dusknoir",
        "tipo": "Fantasma",
        "desc": "Se dice que la antena de su cabeza capta señales del más allá y guía a las almas perdidas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/477.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/477.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/477.gif",
                "cap": "Dusknoir, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/477.ogg"
            }
        ]
    },
    {
        "id": 478,
        "nombre": "Froslass",
        "tipo": "Hielo / Fantasma",
        "desc": "Se dice que aparece en noches frías y que utiliza el hielo para atrapar a sus presas.",
        "fav": "Su diseño inspirado en una figura tradicional japonesa es precioso y misterioso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/478.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/478.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/478.gif",
                "cap": "Froslass, el Pokémon Hielo",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://play.pokemonshowdown.com/sprites/gen5/froslass-mega.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/froslass-mega.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/froslass-mega.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/froslass-mega.gif",
                "oficial": "https://play.pokemonshowdown.com/sprites/dex/froslass-mega.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/dex-shiny/froslass-mega.png",
                "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/7/76/latest/20260412000834/Grito_de_Mega-Froslass.ogg",
                "cap": "Mega-Froslass",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 479,
        "nombre": "Rotom",
        "tipo": "Eléctrico / Fantasma",
        "desc": "Un Pokémon eléctrico travieso capaz de entrar en aparatos y poseerlos para cambiar su forma.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/479.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/479.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/479.gif",
                "cap": "Rotom, el Pokémon Plasma",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10008.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10008.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10008.gif",
                "cap": "Rotom Calor",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10009.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10009.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10009.gif",
                "cap": "Rotom Lavado",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10010.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10010.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10010.gif",
                "cap": "Rotom Frío",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10011.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10011.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10011.gif",
                "cap": "Rotom Ventilador",
                "btn": "🔄 Cambiar forma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10012.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10012.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10012.gif",
                "cap": "Rotom Corte",
                "btn": "🔄 Volver a Rotom"
            }
        ]
    },
    {
        "id": 480,
        "nombre": "Uxie",
        "tipo": "Psíquico",
        "desc": "Se dice que otorgó la sabiduría a la humanidad y puede borrar los recuerdos de quien mira sus ojos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/480.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/480.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/480.gif",
                "cap": "Uxie, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/480.ogg"
            }
        ]
    },
    {
        "id": 481,
        "nombre": "Mesprit",
        "tipo": "Psíquico",
        "desc": "Se dice que enseñó a la humanidad el valor de la emoción y duerme en el fondo de un lago.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/481.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/481.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/481.gif",
                "cap": "Mesprit, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/481.ogg"
            }
        ]
    },
    {
        "id": 482,
        "nombre": "Azelf",
        "tipo": "Psíquico",
        "desc": "Se dice que le dio a la humanidad la voluntad y guarda un poder capaz de hundir la tierra si despierta.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/482.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/482.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/482.gif",
                "cap": "Azelf, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/482.ogg"
            }
        ]
    },
    {
        "id": 483,
        "nombre": "Dialga",
        "tipo": "Acero / Dragón",
        "desc": "Puede controlar el tiempo y se considera una de las entidades fundamentales de la mitología de Sinnoh.",
        "fav": "Su diseño de dragón metálico y su poder sobre el tiempo son espectaculares.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/483.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/483.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/483.gif",
                "cap": "Dialga, Forma Adamas"
            }
        ]
    },
    {
        "id": 484,
        "nombre": "Palkia",
        "tipo": "Agua / Dragón",
        "desc": "Un Pokémon legendario capaz de controlar el espacio. Se dice que su existencia está ligada a una dimensión paralela y que puede deformar el espacio a voluntad.",
        "fav": "Me gusta por su diseño imponente, su temática espacial y su papel como uno de los grandes legendarios de Sinnoh.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/484.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/484.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/484.gif",
                "cap": "Palkia, el Pokémon Espacial"
            }
        ]
    },
    {
        "id": 485,
        "nombre": "Heatran",
        "tipo": "Fuego / Acero",
        "desc": "Vive en el interior de volcanes y usa sus cuatro patas de metal fundido para aferrarse a las paredes de magma.",
        "fav": "Un legendario que literalmente vive dentro de un volcán; el diseño transmite ese calor abrasador.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/485.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/485.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/485.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/485.ogg",
                "cap": "Heatran, el Pokémon Fuego",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10311.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10311.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10311.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10311.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10311.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10311.png",
                "cap": "Mega-Heatran",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 486,
        "nombre": "Regigigas",
        "tipo": "Normal",
        "desc": "La leyenda dice que arrastró continentes enteros con cuerdas, dando forma al mundo tal como lo conocemos.",
        "fav": "El más grande e imponente de los gólems, con esa aura de dios olvidado por el tiempo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/486.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/486.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/486.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/486.ogg",
                "cap": "Regigigas, el Pokémon Normal"
            }
        ]
    },
    {
        "id": 487,
        "nombre": "Giratina",
        "tipo": "Fantasma / Dragón",
        "desc": "Giratina fue desterrado al Mundo Distorsión debido a su naturaleza hostil. Arceus, el creador de todo, fue el responsable de su destierro y ahora vaga por esa dimensión.",
        "fav": "Por su historia parecida al destierro de Satanás del Reino de los Cielos y porque combina perfecto con el estilo de mi personaje.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/487.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/487.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/487.gif",
                "cap": "Giratina (Forma Alterada)",
                "btn": "🔄 Forma Origen"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10007.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10007.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10007.gif",
                "cap": "Giratina (Forma Origen)",
                "btn": "🔄 Forma Alterada"
            }
        ]
    },
    {
        "id": 488,
        "nombre": "Cresselia",
        "tipo": "Psíquico",
        "desc": "Se dice que aparece en las noches de luna llena, y su pluma dorada aleja las pesadillas de quien la lleve consigo.",
        "fav": "Cresselia y su contraparte Darkrai forman uno de los duelos día/noche más bonitos de la saga.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/488.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/488.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/488.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/488.ogg",
                "cap": "Cresselia, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 489,
        "nombre": "Phione",
        "tipo": "Agua",
        "desc": "Vive flotando en mares cálidos y jamás se aleja demasiado de la costa donde nació.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/489.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/489.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/489.gif",
                "cap": "Phione, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/489.ogg"
            }
        ]
    },
    {
        "id": 490,
        "nombre": "Manaphy",
        "tipo": "Agua",
        "desc": "Nace en huevo y forma un vínculo inquebrantable con el primer ser que lo cuida al eclosionar.",
        "fav": "El guardián del mar más tierno de todos los míticos, con ese diseño diminuto y adorable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/490.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/490.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/490.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/490.ogg",
                "cap": "Manaphy, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 491,
        "nombre": "Darkrai",
        "tipo": "Siniestro",
        "desc": "Mantiene alejados a personas y Pokémon de su territorio provocándoles pesadillas profundas.",
        "fav": "Apariencia sombría digna del señor de las pesadillas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/491.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/491.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/491.gif",
                "cap": "Darkrai, el Pokémon Oscuridad",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10312.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10312.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10312.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10312.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10312.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10312.png",
                "cap": "Mega-Darkrai",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 492,
        "nombre": "Shaymin",
        "tipo": "Planta",
        "desc": "Puede purificar el aire contaminado convirtiéndolo en flores, y cambia de forma al tocar una Gracidea.",
        "fav": "Su forma Cielo, ligera y llena de flores, es de los diseños más frescos entre los míticos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/492.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/492.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/492.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/492.ogg",
                "cap": "Shaymin, el Pokémon Planta",
                "btn": "🔄 Forma Cielo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10006.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10006.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10006.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10006.ogg",
                "cap": "Shaymin Forma Cielo",
                "btn": "🔄 Volver a Shaymin"
            }
        ]
    },
    {
        "id": 493,
        "nombre": "Arceus",
        "tipo": "Normal (Divino)",
        "desc": "Según la mitología de Sinnoh, emergió de un huevo y dio forma a todo lo existente en el universo.",
        "fav": "El Dios Pokémon creador de todo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/493.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/493.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/493.gif",
                "cap": "Arceus, el Pokémon Alfa"
            }
        ]
    },
    {
        "id": 494,
        "nombre": "Victini",
        "tipo": "Psíquico / Fuego",
        "desc": "Comparte su energía con los Entrenadores que conoce, y se dice que trae siempre la victoria consigo.",
        "fav": "Pequeño, carismático y siempre relacionado con la buena suerte antes de un combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/494.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/494.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/494.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/494.ogg",
                "cap": "Victini, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 495,
        "nombre": "Snivy",
        "tipo": "Planta",
        "desc": "Realiza la fotosíntesis con todo el cuerpo y se vuelve más ágil cuando recibe mucho sol.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/495.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/495.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/495.gif",
                "cap": "Snivy, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/495.ogg"
            }
        ]
    },
    {
        "id": 497,
        "nombre": "Serperior",
        "tipo": "Planta",
        "desc": "Se mueve sin apenas esfuerzo y basta con que lance una mirada fría para intimidar a cualquier rival.",
        "fav": "La elegancia reptiliana de Serperior es de las mejores evoluciones finales de iniciales que existen.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/497.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/497.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/497.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/497.ogg",
                "cap": "Serperior, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 498,
        "nombre": "Tepig",
        "tipo": "Fuego",
        "desc": "Expulsa fuego por la nariz cuando estornuda, así que hay que tener cuidado al acercarse mucho.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/498.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/498.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/498.gif",
                "cap": "Tepig, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/498.ogg"
            }
        ]
    },
    {
        "id": 500,
        "nombre": "Emboar",
        "tipo": "Fuego / Lucha",
        "desc": "La barba de fuego en su mentón se aviva cuando se emociona, y es un luchador feroz cuerpo a cuerpo.",
        "fav": "Un inicial de fuego enorme y musculoso, con muchísima personalidad en combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/500.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/500.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/500.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/500.ogg",
                "cap": "Emboar, el Pokémon Fuego",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10286.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10286.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10286.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10286.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10286.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10286.png",
                "cap": "Mega-Emboar",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 501,
        "nombre": "Oshawott",
        "tipo": "Agua",
        "desc": "Usa la vieira de su vientre como escudo y también como arma cortante en combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/501.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/501.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/501.gif",
                "cap": "Oshawott, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/501.ogg"
            }
        ]
    },
    {
        "id": 503,
        "nombre": "Samurott",
        "tipo": "Agua",
        "desc": "Inspirado en los samuráis, puede desenfundar las espadas ocultas en sus extremidades delanteras para derribar a sus enemigos velozmente.",
        "fav": "Oshawott siempre fue mi inicial favorito de Unova y verlo evolucionar a este samurái de agua fue espectacular.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/503.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/503.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/503.gif",
                "cap": "Samurott, el Pokémon Formidable",
                "btn": "🔄 Forma Hisui"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10236.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10236.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10236.gif",
                "cap": "Samurott de Hisui",
                "btn": "🔄 Forma Unova"
            }
        ]
    },
    {
        "id": 505,
        "nombre": "Watchog",
        "tipo": "Normal",
        "desc": "Las bolsas de su cuerpo brillan con fuerza para advertir o cegar momentáneamente a un intruso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/505.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/505.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/505.gif",
                "cap": "Watchog, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/505.ogg"
            }
        ]
    },
    {
        "id": 508,
        "nombre": "Stoutland",
        "tipo": "Normal",
        "desc": "Su largo pelaje lo protege del frío extremo y guía a viajeros perdidos en la nieve.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/508.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/508.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/508.gif",
                "cap": "Stoutland, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/508.ogg"
            }
        ]
    },
    {
        "id": 510,
        "nombre": "Liepard",
        "tipo": "Siniestro",
        "desc": "Se mueve en completo silencio y ataca desde las sombras sin dar ninguna advertencia previa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/510.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/510.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/510.gif",
                "cap": "Liepard, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/510.ogg"
            }
        ]
    },
    {
        "id": 512,
        "nombre": "Simisage",
        "tipo": "Planta",
        "desc": "La hoja de su cola crece frondosa y refleja lo bien alimentado que está.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/512.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/512.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/512.gif",
                "cap": "Simisage, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/512.ogg"
            }
        ]
    },
    {
        "id": 514,
        "nombre": "Simisear",
        "tipo": "Fuego",
        "desc": "El fuego que arde en la punta de su cola varía de intensidad según su estado de ánimo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/514.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/514.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/514.gif",
                "cap": "Simisear, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/514.ogg"
            }
        ]
    },
    {
        "id": 516,
        "nombre": "Simipour",
        "tipo": "Agua",
        "desc": "Controla el agua que brota de su cola como si fuera una manguera a presión.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/516.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/516.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/516.gif",
                "cap": "Simipour, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/516.ogg"
            }
        ]
    },
    {
        "id": 518,
        "nombre": "Musharna",
        "tipo": "Psíquico",
        "desc": "Expulsa una niebla hecha de los sueños que absorbió mientras la gente dormía.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/518.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/518.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/518.gif",
                "cap": "Musharna, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/518.ogg"
            }
        ]
    },
    {
        "id": 521,
        "nombre": "Unfezant",
        "tipo": "Normal / Volador",
        "desc": "El macho luce una cresta vistosa que usa para intimidar a posibles rivales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/521.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/521.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/521.gif",
                "cap": "Unfezant, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/521.ogg"
            }
        ]
    },
    {
        "id": 523,
        "nombre": "Zebstrika",
        "tipo": "Eléctrico",
        "desc": "Galopa dejando a su paso rayos y truenos que retumban por todo el campo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/523.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/523.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/523.gif",
                "cap": "Zebstrika, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/523.ogg"
            }
        ]
    },
    {
        "id": 526,
        "nombre": "Gigalith",
        "tipo": "Roca",
        "desc": "Almacena energía solar en los cristales de su cuerpo y la libera de golpe al atacar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/526.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/526.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/526.gif",
                "cap": "Gigalith, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/526.ogg"
            }
        ]
    },
    {
        "id": 528,
        "nombre": "Swoobat",
        "tipo": "Psíquico / Volador",
        "desc": "Emite ondas ultrasónicas con la nariz que pueden confundir por completo a un rival.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/528.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/528.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/528.gif",
                "cap": "Swoobat, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/528.ogg"
            }
        ]
    },
    {
        "id": 530,
        "nombre": "Excadrill",
        "tipo": "Tierra / Acero",
        "desc": "Sus garras de acero pueden perforar rocas a gran velocidad, dejando túneles perfectamente pulidos tras de sí.",
        "fav": "Un topo de combate imparable, favorito clásico de las batallas competitivas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/530.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/530.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/530.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/530.ogg",
                "cap": "Excadrill, el Pokémon Tierra",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10287.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10287.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10287.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10287.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10287.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10287.png",
                "cap": "Mega-Excadrill",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 531,
        "nombre": "Audino",
        "tipo": "Normal",
        "desc": "Sus orejas son tan sensibles que puede detectar hasta el más mínimo cambio en el estado de ánimo de otro ser.",
        "fav": "Su rol de enfermera Pokémon y su ternura la convierten en una de las Megas más inesperadas y encantadoras.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/531.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/531.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/531.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/531.ogg",
                "cap": "Audino, el Pokémon Oído",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10069.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10069.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10069.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10069.ogg",
                "cap": "Mega-Audino",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 534,
        "nombre": "Conkeldurr",
        "tipo": "Lucha",
        "desc": "Carga siempre dos pilares de concreto que usa como pesas de entrenamiento y como armas improvisadas.",
        "fav": "La fuerza bruta hecha Pokémon; ese aspecto de obrero musculoso es único.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/534.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/534.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/534.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/534.ogg",
                "cap": "Conkeldurr, el Pokémon Lucha"
            }
        ]
    },
    {
        "id": 537,
        "nombre": "Seismitoad",
        "tipo": "Agua / Tierra",
        "desc": "Golpea el suelo con las protuberancias de sus dedos para generar pequeños temblores.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/537.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/537.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/537.gif",
                "cap": "Seismitoad, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/537.ogg"
            }
        ]
    },
    {
        "id": 538,
        "nombre": "Throh",
        "tipo": "Lucha",
        "desc": "Lanza a su oponente usando el propio peso y el cinturón que lleva anudado a la cintura.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/538.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/538.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/538.gif",
                "cap": "Throh, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/538.ogg"
            }
        ]
    },
    {
        "id": 539,
        "nombre": "Sawk",
        "tipo": "Lucha",
        "desc": "Entrena en solitario durante días enteros para perfeccionar la velocidad de sus golpes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/539.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/539.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/539.gif",
                "cap": "Sawk, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/539.ogg"
            }
        ]
    },
    {
        "id": 542,
        "nombre": "Leavanny",
        "tipo": "Bicho / Planta",
        "desc": "Cose hojas con hilo de seda para construir una cuna protectora para las crías recién nacidas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/542.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/542.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/542.gif",
                "cap": "Leavanny, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/542.ogg"
            }
        ]
    },
    {
        "id": 545,
        "nombre": "Scolipede",
        "tipo": "Bicho / Veneno",
        "desc": "Embiste a toda velocidad clavando las púas venenosas de su cabeza, alcanzando velocidades sorprendentes para su tamaño.",
        "fav": "La evolución final más intimidante entre los ciempiés Pokémon: puro músculo y veneno.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/545.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/545.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/545.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/545.ogg",
                "cap": "Scolipede, el Pokémon Ciempiés",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10288.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10288.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10288.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10288.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10288.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10288.png",
                "cap": "Mega-Scolipede",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 547,
        "nombre": "Whimsicott",
        "tipo": "Planta / Hada",
        "desc": "Se cuela por pequeñas rendijas montado en su propio algodón llevado por el viento.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/547.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/547.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/547.gif",
                "cap": "Whimsicott, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/547.ogg"
            }
        ]
    },
    {
        "id": 549,
        "nombre": "Lilligant",
        "tipo": "Planta",
        "desc": "El aroma de su flor es tan agradable que se usa para calmar a otros Pokémon alterados.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/549.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/549.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/549.gif",
                "cap": "Lilligant, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/549.ogg"
            },
            {
                "cap": "Lilligant de Hisui",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/lilligant-hisui.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/lilligant-hisui.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/lilligant-hisui.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/lilligant-hisui.gif",
                "btn": "🏔️ Ver forma de Hisui"
            }
        ]
    },
    {
        "id": 550,
        "nombre": "Basculin",
        "tipo": "Agua",
        "desc": "Los ejemplares de banda roja y azul se enfrentan constantemente por simple rivalidad territorial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/550.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/550.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/550.gif",
                "cap": "Basculin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/550.ogg"
            },
            {
                "cap": "Basculin Raya Azul",
                "btn": "🐟 Ver Raya Azul",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/basculin-bluestriped.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/basculin-bluestriped.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/basculin-bluestriped.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/basculin-bluestriped.gif",
                "altura": 1,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/basculin-bluestriped.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/basculin-bluestriped.png"
            }
        ]
    },
    {
        "id": 553,
        "nombre": "Krookodile",
        "tipo": "Tierra / Siniestro",
        "desc": "Sus ojos actúan como gafas de sol naturales, perfectas para cazar en el desierto bajo el sol más fuerte.",
        "fav": "El estilo de matón de desierto de Krookodile tiene una personalidad enorme.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/553.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/553.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/553.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/553.ogg",
                "cap": "Krookodile, el Pokémon Tierra"
            }
        ]
    },
    {
        "id": 555,
        "nombre": "Darmanitan",
        "tipo": "Fuego",
        "desc": "Cuando se queda sin energía, entra en un estado de meditación total hasta recuperarla.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/555.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/555.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/555.gif",
                "cap": "Darmanitan, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/555.ogg"
            },
            {
                "cap": "Darmanitan de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/darmanitan-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/darmanitan-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/darmanitan-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/darmanitan-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 556,
        "nombre": "Maractus",
        "tipo": "Planta",
        "desc": "Agita los brazos como maracas y produce un sonido que anima a otros a bailar con él.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/556.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/556.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/556.gif",
                "cap": "Maractus, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/556.ogg"
            }
        ]
    },
    {
        "id": 558,
        "nombre": "Crustle",
        "tipo": "Bicho / Roca",
        "desc": "Carga sobre el lomo una roca enorme que también usa como arma al embestir.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/558.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/558.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/558.gif",
                "cap": "Crustle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/558.ogg"
            }
        ]
    },
    {
        "id": 560,
        "nombre": "Scrafty",
        "tipo": "Siniestro / Lucha",
        "desc": "Se sube los pliegues de piel sobre la cabeza para parecer más intimidante frente a sus rivales, aunque en el fondo es bastante temerario.",
        "fav": "Su actitud rebelde y sus pantalones caídos hechos de piel le dan una personalidad única.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/560.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/560.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/560.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/560.ogg",
                "cap": "Scrafty, el Pokémon Matón",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10289.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10289.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10289.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10289.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10289.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10289.png",
                "cap": "Mega-Scrafty",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 561,
        "nombre": "Sigilyph",
        "tipo": "Psíquico / Volador",
        "desc": "Vuela en patrones fijos sobre ruinas antiguas, como si vigilara algo desde hace siglos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/561.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/561.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/561.gif",
                "cap": "Sigilyph, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/561.ogg"
            }
        ]
    },
    {
        "id": 563,
        "nombre": "Cofagrigus",
        "tipo": "Fantasma",
        "desc": "Se dice que devora a quien intenta robar el oro de su interior dorado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/563.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/563.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/563.gif",
                "cap": "Cofagrigus, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/563.ogg"
            }
        ]
    },
    {
        "id": 565,
        "nombre": "Carracosta",
        "tipo": "Agua / Roca",
        "desc": "Fue revivido a partir de un fósil y su caparazón resiste incluso el impacto de las olas más fuertes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/565.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/565.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/565.gif",
                "cap": "Carracosta, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/565.ogg"
            }
        ]
    },
    {
        "id": 567,
        "nombre": "Archeops",
        "tipo": "Roca / Volador",
        "desc": "Vuela a gran velocidad, pero apenas puede caminar bien una vez que aterriza en el suelo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/567.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/567.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/567.gif",
                "cap": "Archeops, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/567.ogg"
            }
        ]
    },
    {
        "id": 569,
        "nombre": "Garbodor",
        "tipo": "Veneno",
        "desc": "Nació de un amasijo de basura acumulada y ahora la usa como arma arrojadiza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/569.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/569.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/569.gif",
                "cap": "Garbodor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/569.ogg"
            },
            {
                "cap": "Garbodor Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/garbodor-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/garbodor-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/garbodor-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/garbodor-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 571,
        "nombre": "Zoroark",
        "tipo": "Siniestro",
        "desc": "Crea ilusiones idénticas a paisajes u otros Pokémon para proteger su manada.",
        "fav": "El maestro indiscutible de los trucos visuales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/571.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/571.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/571.gif",
                "cap": "Zoroark, el Pokémon Disfraz Zorro",
                "btn": "🔄 Forma Hisui"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10239.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10239.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10239.gif",
                "cap": "Zoroark de Hisui",
                "btn": "🔄 Forma Unova"
            }
        ]
    },
    {
        "id": 573,
        "nombre": "Cinccino",
        "tipo": "Normal",
        "desc": "Frota el pelaje de su cola contra el de otro para desearle buena suerte.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/573.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/573.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/573.gif",
                "cap": "Cinccino, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/573.ogg"
            }
        ]
    },
    {
        "id": 576,
        "nombre": "Gothitelle",
        "tipo": "Psíquico",
        "desc": "Puede predecir el futuro observando las estrellas, aunque solo comprende destinos que ya conoce bien.",
        "fav": "Su vestido estrellado y su aire misterioso la hacen una de las psíquicas más elegantes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/576.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/576.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/576.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/576.ogg",
                "cap": "Gothitelle, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 579,
        "nombre": "Reuniclus",
        "tipo": "Psíquico",
        "desc": "Su cerebro gelatinoso genera un campo de fuerza tan potente que puede aplastar rocas con solo pensarlo.",
        "fav": "Tierno por fuera, aterradoramente poderoso por dentro; un gran diseño de Unova.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/579.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/579.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/579.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/579.ogg",
                "cap": "Reuniclus, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 581,
        "nombre": "Swanna",
        "tipo": "Agua / Volador",
        "desc": "Durante el día nada con elegancia, pero de noche vuela largas distancias sin descanso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/581.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/581.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/581.gif",
                "cap": "Swanna, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/581.ogg"
            }
        ]
    },
    {
        "id": 584,
        "nombre": "Vanilluxe",
        "tipo": "Hielo",
        "desc": "Sus dos cabezas generan nubes de nieve que pueden congelar el aire a su alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/584.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/584.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/584.gif",
                "cap": "Vanilluxe, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/584.ogg"
            }
        ]
    },
    {
        "id": 586,
        "nombre": "Sawsbuck",
        "tipo": "Normal / Planta",
        "desc": "Cambia el color de su pelaje según la estación del año en la que se encuentre.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/586.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/586.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/586.gif",
                "cap": "Sawsbuck, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/586.ogg"
            },
            {
                "cap": "Sawsbuck Estación Verano",
                "btn": "☀️ Ver forma de Verano",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-summer.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-summer.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/sawsbuck-summer.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/sawsbuck-summer.gif",
                "altura": 1.9,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-summer.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-summer.png"
            },
            {
                "cap": "Sawsbuck Estación Otoño",
                "btn": "🍂 Ver forma de Otoño",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-autumn.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-autumn.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/sawsbuck-autumn.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/sawsbuck-autumn.gif",
                "altura": 1.9,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-autumn.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-autumn.png"
            },
            {
                "cap": "Sawsbuck Estación Invierno",
                "btn": "❄️ Ver forma de Invierno",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-winter.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-winter.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/sawsbuck-winter.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/sawsbuck-winter.gif",
                "altura": 1.9,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/sawsbuck-winter.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sawsbuck-winter.png"
            }
        ]
    },
    {
        "id": 587,
        "nombre": "Emolga",
        "tipo": "Eléctrico / Volador",
        "desc": "Extiende una membrana entre sus extremidades para planear de árbol en árbol.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/587.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/587.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/587.gif",
                "cap": "Emolga, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/587.ogg"
            }
        ]
    },
    {
        "id": 589,
        "nombre": "Escavalier",
        "tipo": "Bicho / Acero",
        "desc": "Ataca en pareja, con sus dos lanzas apuntando siempre hacia el mismo objetivo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/589.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/589.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/589.gif",
                "cap": "Escavalier, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/589.ogg"
            }
        ]
    },
    {
        "id": 591,
        "nombre": "Amoonguss",
        "tipo": "Planta / Veneno",
        "desc": "Imita la forma de una Poké Ball para atraer a entrenadores curiosos antes de liberar esporas tóxicas.",
        "fav": "Su disfraz engañoso lo hace único, y su paradoja del pasado, Brute Bonnet, lleva ese misterio al extremo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/591.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/591.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/591.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/591.ogg",
                "cap": "Amoonguss, el Pokémon Planta"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/986.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/986.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/986.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/986.ogg",
                "cap": "Brute Bonnet, paradoja del pasado de Amoonguss",
                "btn": "🔄 Volver a Amoonguss"
            }
        ]
    },
    {
        "id": 593,
        "nombre": "Jellicent",
        "tipo": "Agua / Fantasma",
        "desc": "Absorbe la energía vital de los barcos que se acercan demasiado a su cuerpo transparente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/593.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/593.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/593.gif",
                "cap": "Jellicent, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/593.ogg"
            }
        ]
    },
    {
        "id": 594,
        "nombre": "Alomomola",
        "tipo": "Agua",
        "desc": "Envuelve a Pokémon heridos con sus aletas y los cuida hasta que se recuperan del todo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/594.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/594.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/594.gif",
                "cap": "Alomomola, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/594.ogg"
            }
        ]
    },
    {
        "id": 596,
        "nombre": "Galvantula",
        "tipo": "Bicho / Eléctrico",
        "desc": "Teje telarañas cargadas de electricidad para inmovilizar a cualquiera que las toque.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/596.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/596.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/596.gif",
                "cap": "Galvantula, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/596.ogg"
            }
        ]
    },
    {
        "id": 598,
        "nombre": "Ferrothorn",
        "tipo": "Planta / Acero",
        "desc": "Cuelga de techos de cuevas sujeto por lianas cubiertas de espinas afiladas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/598.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/598.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/598.gif",
                "cap": "Ferrothorn, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/598.ogg"
            }
        ]
    },
    {
        "id": 601,
        "nombre": "Klinklang",
        "tipo": "Acero",
        "desc": "Sus engranajes giran en direcciones opuestas y, si se desincronizan, deja de moverse por completo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/601.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/601.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/601.gif",
                "cap": "Klinklang, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/601.ogg"
            }
        ]
    },
    {
        "id": 604,
        "nombre": "Eelektross",
        "tipo": "Eléctrico",
        "desc": "Se aferra a sus presas con las ventosas de su cuerpo y les inyecta descargas eléctricas para inmovilizarlas por completo.",
        "fav": "Una anguila eléctrica sin evolución previa en su línea; rara y con un diseño muy original.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/604.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/604.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/604.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/604.ogg",
                "cap": "Eelektross, el Pokémon Motor Eléctrico",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10290.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10290.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10290.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10290.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10290.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10290.png",
                "cap": "Mega-Eelektross",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 606,
        "nombre": "Beheeyem",
        "tipo": "Psíquico",
        "desc": "Se dice que altera la memoria de la gente que presencia luces extrañas en el cielo nocturno.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/606.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/606.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/606.gif",
                "cap": "Beheeyem, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/606.ogg"
            }
        ]
    },
    {
        "id": 609,
        "nombre": "Chandelure",
        "tipo": "Fantasma / Fuego",
        "desc": "Se dice que su fuego azul consume el alma de quien lo mira fijamente, guiando a los espíritus hacia el más allá.",
        "fav": "Un candelabro embrujado con un diseño inquietante y precioso a la vez.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/609.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/609.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/609.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/609.ogg",
                "cap": "Chandelure, el Pokémon Fantasma",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10291.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10291.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10291.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10291.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10291.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10291.png",
                "cap": "Mega-Chandelure",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 612,
        "nombre": "Haxorus",
        "tipo": "Dragón",
        "desc": "Un poderoso Pokémon de tipo Dragón cuyas grandes colmillos pueden cortar incluso materiales muy resistentes.",
        "fav": "Su diseño de dragón guerrero y su apariencia feroz me encantan.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/612.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/612.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/612.gif",
                "cap": "Haxorus, el Pokémon Mandíbula"
            }
        ]
    },
    {
        "id": 614,
        "nombre": "Beartic",
        "tipo": "Hielo",
        "desc": "Congela el agua sobre sus propios puños antes de golpear para aumentar el impacto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/614.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/614.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/614.gif",
                "cap": "Beartic, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/614.ogg"
            }
        ]
    },
    {
        "id": 615,
        "nombre": "Cryogonal",
        "tipo": "Hielo",
        "desc": "Su cuerpo es en realidad un cristal de hielo unido por cadenas que puede lanzar como arma.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/615.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/615.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/615.gif",
                "cap": "Cryogonal, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/615.ogg"
            }
        ]
    },
    {
        "id": 617,
        "nombre": "Accelgor",
        "tipo": "Bicho",
        "desc": "Se deshizo de su propio caparazón para poder moverse a una velocidad sorprendente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/617.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/617.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/617.gif",
                "cap": "Accelgor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/617.ogg"
            }
        ]
    },
    {
        "id": 618,
        "nombre": "Stunfisk",
        "tipo": "Tierra / Eléctrico",
        "desc": "Se camufla enterrado en el barro y espera inmóvil a que alguien lo pise por accidente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/618.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/618.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/618.gif",
                "cap": "Stunfisk, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/618.ogg"
            },
            {
                "cap": "Stunfisk de Galar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/stunfisk-galar.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/stunfisk-galar.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/stunfisk-galar.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/stunfisk-galar.gif",
                "btn": "⚔️ Ver forma de Galar"
            }
        ]
    },
    {
        "id": 620,
        "nombre": "Mienshao",
        "tipo": "Lucha",
        "desc": "Ataca con golpes tan rápidos y precisos que apenas se distinguen a simple vista.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/620.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/620.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/620.gif",
                "cap": "Mienshao, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/620.ogg"
            }
        ]
    },
    {
        "id": 621,
        "nombre": "Druddigon",
        "tipo": "Dragón",
        "desc": "Guarda con recelo su cueva llena de tesoros y ataca sin dudar a quien intente robarlos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/621.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/621.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/621.gif",
                "cap": "Druddigon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/621.ogg"
            }
        ]
    },
    {
        "id": 623,
        "nombre": "Golurk",
        "tipo": "Tierra / Fantasma",
        "desc": "Un antiguo autómata creado hace siglos para proteger o atacar; se dice que un espíritu fue insertado en su interior para darle vida.",
        "fav": "Un gólem gigante impulsado por un alma; su historia y su armadura antigua son fascinantes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/623.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/623.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/623.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/623.ogg",
                "cap": "Golurk, el Pokémon Autómata",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10313.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10313.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10313.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10313.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10313.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10313.png",
                "cap": "Mega-Golurk",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 625,
        "nombre": "Bisharp",
        "tipo": "Siniestro / Acero",
        "desc": "Lidera manadas de Pawniard y usa las hojas de su cuerpo para desarmar a sus rivales en pleno combate.",
        "fav": "El aire de comandante samurái de Bisharp lo hace uno de los siniestro/acero más geniales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/625.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/625.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/625.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/625.ogg",
                "cap": "Bisharp, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 626,
        "nombre": "Bouffalant",
        "tipo": "Normal",
        "desc": "Su pelaje absorbe los golpes en la cabeza, así que embiste sin miedo contra cualquier cosa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/626.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/626.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/626.gif",
                "cap": "Bouffalant, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/626.ogg"
            }
        ]
    },
    {
        "id": 628,
        "nombre": "Braviary",
        "tipo": "Normal / Volador",
        "desc": "Cada cicatriz en su cuerpo es una medalla de honor, y jamás retrocede sin importar lo fuerte que sea el rival.",
        "fav": "Un águila guerrera orgullosa; su forma de Hisui, más antigua y psíquica, lo hace aún más interesante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/628.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/628.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/628.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/628.ogg",
                "cap": "Braviary, el Pokémon Normal",
                "btn": "🔄 Forma Hisui"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10240.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10240.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10240.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10240.ogg",
                "cap": "Braviary de Hisui, el Pokémon Guerrero Valiente",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 630,
        "nombre": "Mandibuzz",
        "tipo": "Siniestro / Volador",
        "desc": "Decora su cuerpo con huesos que recoge de sus presas, formando una especie de armadura macabra.",
        "fav": "Ese estilo de bruja-buitre le da a Mandibuzz una personalidad oscura y memorable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/630.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/630.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/630.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/630.ogg",
                "cap": "Mandibuzz, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 631,
        "nombre": "Heatmor",
        "tipo": "Fuego",
        "desc": "Mete la lengua ardiente dentro de los túneles de Durant para atrapar a sus presas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/631.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/631.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/631.gif",
                "cap": "Heatmor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/631.ogg"
            }
        ]
    },
    {
        "id": 632,
        "nombre": "Durant",
        "tipo": "Bicho / Acero",
        "desc": "Trabaja en equipo con toda su colonia para transportar comida muchas veces su propio peso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/632.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/632.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/632.gif",
                "cap": "Durant, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/632.ogg"
            }
        ]
    },
    {
        "id": 635,
        "nombre": "Hydreigon",
        "tipo": "Siniestro / Dragón",
        "desc": "Posee tres cabezas y ataca de manera agresiva utilizando sus múltiples bocas para morder a sus rivales.",
        "fav": "Es uno de los pseudo-legendarios con aspecto más amenazante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/635.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/635.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/635.gif",
                "cap": "Hydreigon, el Pokémon Siniestro"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/993.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/993.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/993.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/993.ogg",
                "cap": "Iron Jugulis, paradoja del futuro de Hydreigon",
                "btn": "🔄 Volver a Hydreigon"
            }
        ]
    },
    {
        "id": 637,
        "nombre": "Volcarona",
        "tipo": "Bicho / Fuego",
        "desc": "Cuando la tierra se cubrió de ceniza volcánica, las llamas de Volcarona sirvieron como sustituto del sol.",
        "fav": "Un Pokémon polilla solar con un lore legendario.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/637.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/637.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/637.gif",
                "cap": "Volcarona, el Pokémon Sol"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/988.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/988.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/988.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/988.ogg",
                "cap": "Slither Wing, paradoja del pasado de Volcarona",
                "btn": "🔄 Volver a Volcarona"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/994.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/994.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/994.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/994.ogg",
                "cap": "Iron Moth, paradoja del futuro de Volcarona",
                "btn": "🔄 Volver a Volcarona"
            }
        ]
    },
    {
        "id": 638,
        "nombre": "Cobalion",
        "tipo": "Acero / Lucha",
        "desc": "Lideró a otros Pokémon para proteger a la gente de guerras pasadas, y por eso simboliza la voluntad.",
        "fav": "El primero del trío de las espadas de Unova, con esa nobleza tan marcada en su diseño.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/638.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/638.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/638.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/638.ogg",
                "cap": "Cobalion, el Pokémon Acero"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1023.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1023.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1023.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1023.ogg",
                "cap": "Iron Crown, paradoja del futuro de Cobalion",
                "btn": "🔄 Volver a Cobalion"
            }
        ]
    },
    {
        "id": 639,
        "nombre": "Terrakion",
        "tipo": "Roca / Lucha",
        "desc": "Puede derribar torres enteras de un cabezazo, y representa la fuerza bruta entre el trío legendario.",
        "fav": "Su embestida imparable lo convierte en el más agresivo del trío de espadas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/639.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/639.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/639.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/639.ogg",
                "cap": "Terrakion, el Pokémon Roca"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1022.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1022.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1022.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1022.ogg",
                "cap": "Iron Boulder, paradoja del futuro de Terrakion",
                "btn": "🔄 Volver a Terrakion"
            }
        ]
    },
    {
        "id": 640,
        "nombre": "Virizion",
        "tipo": "Planta / Lucha",
        "desc": "Sus cuernos afilados como espadas cortan cualquier cosa, y representa la valentía entre las tres bestias legendarias.",
        "fav": "El más elegante del trío, con movimientos de espadachín y un diseño muy limpio.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/640.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/640.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/640.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/640.ogg",
                "cap": "Virizion, el Pokémon Planta"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1010.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1010.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1010.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1010.ogg",
                "cap": "Iron Leaves, paradoja del futuro de Virizion",
                "btn": "🔄 Volver a Virizion"
            }
        ]
    },
    {
        "id": 641,
        "nombre": "Tornadus",
        "tipo": "Volador",
        "desc": "Vive envuelto en una masa de nubes negras que se cree provocan tormentas violentas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/641.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/641.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/641.gif",
                "cap": "Tornadus, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/641.ogg"
            },
            {
                "cap": "Tornadus Forma Tótem",
                "btn": "🌪️ Ver Forma Tótem",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10019.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10019.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10019.gif",
                "altura": 1.4,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10019.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10019.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10019.ogg"
            }
        ]
    },
    {
        "id": 642,
        "nombre": "Thundurus",
        "tipo": "Eléctrico / Volador",
        "desc": "Lanza rayos desde la cola con tanta fuerza que puede reducir a cenizas un bosque entero.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/642.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/642.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/642.gif",
                "cap": "Thundurus, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/642.ogg"
            },
            {
                "cap": "Thundurus Forma Tótem",
                "btn": "⚡ Ver Forma Tótem",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10020.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10020.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10020.gif",
                "altura": 3.0,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10020.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10020.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10020.ogg"
            }
        ]
    },
    {
        "id": 643,
        "nombre": "Reshiram",
        "tipo": "Dragón / Fuego",
        "desc": "Un Pokémon legendario que domina las llamas. Su cuerpo puede alcanzar temperaturas extremadamente altas y es capaz de generar una energía abrasadora desde su interior.",
        "fav": "Me gusta por su diseño majestuoso, su combinación de Dragón y Fuego y su papel como uno de los legendarios más importantes de Teselia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/643.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/643.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/643.gif",
                "cap": "Reshiram, el Pokémon Blanco Veraz"
            }
        ]
    },
    {
        "id": 644,
        "nombre": "Zekrom",
        "tipo": "Dragón / Eléctrico",
        "desc": "Un Pokémon legendario capaz de generar una poderosa energía eléctrica. Su cuerpo posee una gran fuerza física y puede producir descargas desde su núcleo para enfrentarse a sus rivales.",
        "fav": "Me gusta por su apariencia imponente, sus detalles mecánicos y la combinación de Dragón y Eléctrico que representa su poder.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/644.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/644.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/644.gif",
                "cap": "Zekrom, el Pokémon Negro Ideal"
            }
        ]
    },
    {
        "id": 645,
        "nombre": "Landorus",
        "tipo": "Tierra / Volador",
        "desc": "Se dice que su llegada calma las tormentas de sus hermanos y trae buenas cosechas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/645.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/645.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/645.gif",
                "cap": "Landorus, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/645.ogg"
            },
            {
                "cap": "Landorus Forma Tótem",
                "btn": "🌾 Ver Forma Tótem",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10021.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10021.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10021.gif",
                "altura": 1.3,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10021.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10021.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10021.ogg"
            }
        ]
    },
    {
        "id": 646,
        "nombre": "Kyurem",
        "tipo": "Dragón / Hielo",
        "desc": "Un Pokémon legendario que conserva el vacío de poder que quedó tras la separación del antiguo dragón de Teselia.",
        "fav": "Sus dos fusiones representan las formas White y Black, dos de las combinaciones legendarias más impresionantes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/646.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/646.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/646.gif",
                "cap": "Kyurem, el Pokémon Frontera",
                "btn": "⚡ Fusionar con Reshiram"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10023.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10023.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10023.gif",
                "cap": "Kyurem Negro",
                "btn": "⚡ Fusionar con Reshiram"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10022.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10022.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10022.gif",
                "cap": "Kyurem Blanco",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 647,
        "nombre": "Keldeo",
        "tipo": "Agua / Lucha",
        "desc": "Entrena junto al trío de las espadas para convertirse algún día en un guerrero tan valiente como ellos.",
        "fav": "Su forma Resolución, más veloz y decidida, cierra muy bien la historia del cuarteto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/647.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/647.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/647.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/647.ogg",
                "cap": "Keldeo, el Pokémon Agua",
                "btn": "🔄 Forma Resolución"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10024.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10024.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10024.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10024.ogg",
                "cap": "Keldeo Forma Resolución, el Espadachín Místico",
                "btn": "🔄 Volver a Keldeo"
            }
        ]
    },
    {
        "id": 648,
        "nombre": "Meloetta",
        "tipo": "Normal / Psíquico",
        "desc": "Cambia de forma según la melodía que canta, y se dice que su canto conmueve a cualquiera.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/648.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/648.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/648.gif",
                "cap": "Meloetta, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/648.ogg"
            },
            {
                "cap": "Meloetta Forma Danza",
                "btn": "💃 Ver Forma Danza",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10018.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10018.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10018.gif",
                "altura": 0.6,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10018.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10018.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10018.ogg"
            }
        ]
    },
    {
        "id": 649,
        "nombre": "Genesect",
        "tipo": "Bicho / Acero",
        "desc": "Fue un insecto prehistórico modificado por el Team Plasma, equipado con un cañón capaz de disparar energía.",
        "fav": "La mezcla de fósil antiguo y tecnología moderna le da una estética única entre los legendarios.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/649.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/649.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/649.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/649.ogg",
                "cap": "Genesect, el Pokémon Bicho"
            },
            {
                "cap": "Genesect Drive Aqua",
                "btn": "💧 Ver Drive Aqua",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/genesect-douse.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-douse.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/genesect-douse.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/genesect-douse.gif",
                "altura": 1.5,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/genesect-douse.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-douse.png"
            },
            {
                "cap": "Genesect Drive Voltio",
                "btn": "⚡ Ver Drive Voltio",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/genesect-shock.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-shock.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/genesect-shock.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/genesect-shock.gif",
                "altura": 1.5,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/genesect-shock.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-shock.png"
            },
            {
                "cap": "Genesect Drive Llama",
                "btn": "🔥 Ver Drive Llama",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/genesect-burn.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-burn.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/genesect-burn.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/genesect-burn.gif",
                "altura": 1.5,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/genesect-burn.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-burn.png"
            },
            {
                "cap": "Genesect Drive Gélido",
                "btn": "❄️ Ver Drive Gélido",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/genesect-chill.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-chill.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/genesect-chill.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/genesect-chill.gif",
                "altura": 1.5,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/genesect-chill.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/genesect-chill.png"
            }
        ]
    },
    {
        "id": 650,
        "nombre": "Chespin",
        "tipo": "Planta",
        "desc": "Su caparazón de madera es tan resistente que apenas siente los golpes en el pecho.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/650.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/650.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/650.gif",
                "cap": "Chespin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/650.ogg"
            }
        ]
    },
    {
        "id": 652,
        "nombre": "Chesnaught",
        "tipo": "Planta / Lucha",
        "desc": "Usa su caparazón de espinas para proteger a otros Pokémon mientras lanza erizos explosivos a sus rivales.",
        "fav": "El inicial planta más robusto y protector, casi un tanque de combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/652.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/652.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/652.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/652.ogg",
                "cap": "Chesnaught, el Pokémon Planta",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10292.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10292.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10292.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10292.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10292.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10292.png",
                "cap": "Mega-Chesnaught",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 653,
        "nombre": "Fennekin",
        "tipo": "Fuego",
        "desc": "Expulsa aire caliente por las orejas para regular la temperatura de su propio cuerpo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/653.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/653.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/653.gif",
                "cap": "Fennekin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/653.ogg"
            }
        ]
    },
    {
        "id": 655,
        "nombre": "Delphox",
        "tipo": "Fuego / Psíquico",
        "desc": "Lanza sus ataques de fuego a través de su bastón, usando el humo de sus mangas para ver el futuro.",
        "fav": "El aire de hechicera zorruna de Delphox le da una elegancia distinta a los iniciales de fuego.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/655.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/655.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/655.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/655.ogg",
                "cap": "Delphox, el Pokémon Fuego",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10293.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10293.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10293.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10293.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10293.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10293.png",
                "cap": "Mega-Delphox",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 656,
        "nombre": "Froakie",
        "tipo": "Agua",
        "desc": "Cubre su cuerpo con una espuma especial que amortigua cualquier golpe que reciba.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/656.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/656.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/656.gif",
                "cap": "Froakie, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/656.ogg"
            }
        ]
    },
    {
        "id": 658,
        "nombre": "Greninja",
        "tipo": "Agua / Siniestro",
        "desc": "Comprime el agua para crear shurikens afilados que pueden cortar metal. Se mueve con la agilidad y el sigilo de un ninja antes de atacar.",
        "fav": "El mejor diseño de la 6ta generación y en el anime se ve brutal cuando se transforma en Greninja-Ash.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/658.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/658.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/658.gif",
                "cap": "Greninja, el Pokémon Ninja",
                "btn": "🔄 Transformar en Greninja-Ash"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10117.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10117.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10117.gif",
                "cap": "Greninja-Ash",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10294.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10294.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10294.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10294.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10294.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10294.png",
                "cap": "Mega-Greninja",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 660,
        "nombre": "Diggersby",
        "tipo": "Normal / Tierra",
        "desc": "Cava túneles enormes con las orejas, que usa como si fueran un par de palas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/660.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/660.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/660.gif",
                "cap": "Diggersby, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/660.ogg"
            }
        ]
    },
    {
        "id": 663,
        "nombre": "Talonflame",
        "tipo": "Fuego / Volador",
        "desc": "Vuela a velocidades sorprendentes en distancias cortas, aunque se cansa con facilidad tras el esfuerzo.",
        "fav": "Rápido, agresivo y una pesadilla competitiva en su época; un halcón de fuego espectacular.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/663.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/663.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/663.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/663.ogg",
                "cap": "Talonflame, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 666,
        "nombre": "Vivillon",
        "tipo": "Bicho / Volador",
        "desc": "El patrón de sus alas varía según el clima y la región donde haya nacido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/666.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/666.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/666.gif",
                "cap": "Vivillon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/666.ogg"
            }
        ]
    },
    {
        "id": 668,
        "nombre": "Pyroar",
        "tipo": "Fuego / Normal",
        "desc": "Su melena en llamas puede alcanzar temperaturas altísimas, y su rugido es capaz de ahuyentar a Pokémon mucho más grandes.",
        "fav": "El rey de la sabana de Kalos; su melena de fuego lo hace tan majestuoso como intimidante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/668.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/668.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/668.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/668.ogg",
                "cap": "Pyroar, el Pokémon Real",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10295.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10295.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10295.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10295.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10295.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10295.png",
                "cap": "Mega-Pyroar",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 670,
        "nombre": "Floette (Flor Eterna)",
        "tipo": "Hada",
        "desc": "Esta Floette especial nunca se marchita, y se dice que perteneció a alguien muy importante en el pasado de Kalos.",
        "fav": "Su historia ligada al pasado de Kalos y su flor que nunca se marchita la hacen muy especial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10061.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10061.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10061.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/670.ogg",
                "cap": "Floette, Flor Eterna",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10296.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10296.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10296.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10296.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10296.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10296.png",
                "cap": "Mega-Floette",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 671,
        "nombre": "Florges",
        "tipo": "Hada",
        "desc": "Reúne energía floral y la reparte entre las hadas más pequeñas de su bosque.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/671.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/671.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/671.gif",
                "cap": "Florges, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/671.ogg"
            }
        ]
    },
    {
        "id": 673,
        "nombre": "Gogoat",
        "tipo": "Planta",
        "desc": "Los entrenadores de Kalos lo montan guiándolo con suaves toques en los cuernos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/673.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/673.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/673.gif",
                "cap": "Gogoat, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/673.ogg"
            }
        ]
    },
    {
        "id": 675,
        "nombre": "Pangoro",
        "tipo": "Lucha / Siniestro",
        "desc": "Mastica una ramita de paja constantemente para mantener la calma antes de pelear.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/675.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/675.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/675.gif",
                "cap": "Pangoro, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/675.ogg"
            }
        ]
    },
    {
        "id": 678,
        "nombre": "Meowstic",
        "tipo": "Psíquico",
        "desc": "Cuando algo lo pone nervioso cierra los ojos para controlar sus poderes psíquicos, que de otro modo liberaría sin ningún control.",
        "fav": "Su apariencia felina con un aire elegante y misterioso lo distingue del resto de los Pokémon psíquicos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/678.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/678.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/678.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/678.ogg",
                "cap": "Meowstic, el Pokémon Restricción",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10314.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10314.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10314.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10314.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10314.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10314.png",
                "cap": "Mega-Meowstic",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 681,
        "nombre": "Aegislash",
        "tipo": "Acero / Fantasma",
        "desc": "Puede cambiar entre su Forma Escudo para defenderse y su Forma Filo para destrozar al rival.",
        "fav": "Un concepto de espada viviente dinámico e ingenioso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/681.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/681.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/681.gif",
                "cap": "Aegislash (Forma Escudo)",
                "btn": "⚔️ Cambiar a Forma Filo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10026.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10026.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10026.gif",
                "cap": "Aegislash (Forma Filo)",
                "btn": "🛡️ Cambiar a Forma Escudo"
            }
        ]
    },
    {
        "id": 683,
        "nombre": "Aromatisse",
        "tipo": "Hada",
        "desc": "Libera aromas distintos según el sentimiento que quiera transmitir a su alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/683.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/683.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/683.gif",
                "cap": "Aromatisse, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/683.ogg"
            }
        ]
    },
    {
        "id": 685,
        "nombre": "Slurpuff",
        "tipo": "Hada",
        "desc": "Con solo oler el aire puede distinguir ingredientes de repostería a kilómetros de distancia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/685.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/685.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/685.gif",
                "cap": "Slurpuff, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/685.ogg"
            }
        ]
    },
    {
        "id": 687,
        "nombre": "Malamar",
        "tipo": "Siniestro / Psíquico",
        "desc": "Puede hipnotizar a la gente con el movimiento de sus tentáculos, dominando su voluntad por completo.",
        "fav": "Invertirlo para evolucionarlo fue una de las ideas más originales de Kalos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/687.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/687.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/687.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/687.ogg",
                "cap": "Malamar, el Pokémon Siniestro",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10297.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10297.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10297.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10297.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10297.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10297.png",
                "cap": "Mega-Malamar",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 689,
        "nombre": "Barbaracle",
        "tipo": "Roca / Agua",
        "desc": "Sus siete cabezas, una central y seis brazos con ojos propios, actúan de forma independiente y a veces no logran coordinarse.",
        "fav": "Un percebe gigante con siete cabezas actuando por su cuenta; un concepto tan raro como memorable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/689.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/689.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/689.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/689.ogg",
                "cap": "Barbaracle, el Pokémon Multipercebe",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10298.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10298.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10298.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10298.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10298.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10298.png",
                "cap": "Mega-Barbaracle",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 691,
        "nombre": "Dragalge",
        "tipo": "Veneno / Dragón",
        "desc": "Libera un veneno potente desde las escamas de su cuerpo, y su parecido a un alga marina le permite camuflarse entre la vegetación acuática.",
        "fav": "La combinación de alga marina y dragón venenoso le da un aspecto único entre los Pokémon acuáticos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/691.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/691.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/691.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/691.ogg",
                "cap": "Dragalge, el Pokémon Alga Marina",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10299.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10299.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10299.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10299.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10299.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10299.png",
                "cap": "Mega-Dragalge",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 693,
        "nombre": "Clawitzer",
        "tipo": "Agua",
        "desc": "Su enorme pinza dispara chorros de agua a presión capaces de perforar acero grueso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/693.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/693.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/693.gif",
                "cap": "Clawitzer, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/693.ogg"
            }
        ]
    },
    {
        "id": 695,
        "nombre": "Heliolisk",
        "tipo": "Eléctrico / Normal",
        "desc": "Extiende la gorguera para absorber luz solar y transformarla en electricidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/695.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/695.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/695.gif",
                "cap": "Heliolisk, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/695.ogg"
            }
        ]
    },
    {
        "id": 697,
        "nombre": "Tyrantrum",
        "tipo": "Roca / Dragón",
        "desc": "Fue revivido a partir de un fósil antiguo y sus mandíbulas son capaces de triturar coches enteros.",
        "fav": "Un tirano prehistórico hecho Pokémon; pura potencia bruta con un diseño imponente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/697.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/697.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/697.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/697.ogg",
                "cap": "Tyrantrum, el Pokémon Roca"
            }
        ]
    },
    {
        "id": 699,
        "nombre": "Aurorus",
        "tipo": "Roca / Hielo",
        "desc": "Revivido de un fósil, puede bajar la temperatura de su entorno varios grados con solo desplegar su cuello.",
        "fav": "Su elegancia glacial de dinosaurio de cuello largo lo hace uno de los fósiles más bonitos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/699.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/699.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/699.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/699.ogg",
                "cap": "Aurorus, el Pokémon Roca"
            }
        ]
    },
    {
        "id": 700,
        "nombre": "Sylveon",
        "tipo": "Hada",
        "desc": "Emite ondas tranquilizadoras desde sus apéndices con forma de cinta para calmar las peleas.",
        "fav": "La eeveelution más elegante y poderosa en el ámbito tipo Hada.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/700.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/700.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/700.gif",
                "cap": "Sylveon, el Pokémon Vínculo"
            }
        ]
    },
    {
        "id": 701,
        "nombre": "Hawlucha",
        "tipo": "Lucha / Volador",
        "desc": "Combina técnicas de lucha libre con movimientos aéreos, lanzándose desde grandes alturas para rematar a sus rivales.",
        "fav": "Un luchador enmascarado que vuela; su personalidad aguerrida lo hace uno de los favoritos de Kalos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/701.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/701.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/701.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/701.ogg",
                "cap": "Hawlucha, el Pokémon Luchador",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10300.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10300.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10300.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10300.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10300.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10300.png",
                "cap": "Mega-Hawlucha",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 702,
        "nombre": "Dedenne",
        "tipo": "Eléctrico / Hada",
        "desc": "Guarda comida en las mejillas y, sin querer, la carga con electricidad estática.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/702.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/702.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/702.gif",
                "cap": "Dedenne, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/702.ogg"
            }
        ]
    },
    {
        "id": 703,
        "nombre": "Carbink",
        "tipo": "Roca / Hada",
        "desc": "Nace de la presión que la tierra ejerce sobre minerales durante miles de años.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/703.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/703.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/703.gif",
                "cap": "Carbink, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/703.ogg"
            }
        ]
    },
    {
        "id": 706,
        "nombre": "Goodra",
        "tipo": "Dragón",
        "desc": "Su cuerpo gelatinoso segrega una baba pegajosa que usa tanto para defenderse como para comunicarse.",
        "fav": "Tierno, gelatinoso y sorprendentemente tanque en combate; Goodra siempre saca una sonrisa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/706.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/706.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/706.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/706.ogg",
                "cap": "Goodra, el Pokémon Dragón"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10242.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10242.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10242.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10242.ogg",
                "cap": "Goodra de Hisui, el Pokémon Dragón",
                "btn": "🔄 Volver a Goodra"
            }
        ]
    },
    {
        "id": 707,
        "nombre": "Klefki",
        "tipo": "Acero / Hada",
        "desc": "Guarda llaves importantes flotando a su alrededor y jamás se aleja de las cerraduras que protege.",
        "fav": "Un diseño diminuto y curioso; un llavero viviente que además es competitivamente temible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/707.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/707.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/707.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/707.ogg",
                "cap": "Klefki, el Pokémon Acero"
            }
        ]
    },
    {
        "id": 709,
        "nombre": "Trevenant",
        "tipo": "Fantasma / Planta",
        "desc": "Un árbol poseído por un espíritu que puede atrapar viajeros dentro de su tronco hueco para siempre.",
        "fav": "El concepto de árbol embrujado ejecutado a la perfección; inquietante y precioso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/709.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/709.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/709.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/709.ogg",
                "cap": "Trevenant, el Pokémon Fantasma"
            }
        ]
    },
    {
        "id": 711,
        "nombre": "Gourgeist",
        "tipo": "Fantasma / Planta",
        "desc": "Canta canciones espeluznantes frente a las casas la noche en que ronda por los pueblos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/711.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/711.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/711.gif",
                "cap": "Gourgeist, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/711.ogg"
            },
            {
                "cap": "Gourgeist Tamaño Pequeño",
                "btn": "🎃 Ver tamaño Pequeño",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-small.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-small.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/gourgeist-small.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/gourgeist-small.gif",
                "altura": 0.35,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-small.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-small.png"
            },
            {
                "cap": "Gourgeist Tamaño Grande",
                "btn": "🎃 Ver tamaño Grande",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-large.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-large.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/gourgeist-large.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/gourgeist-large.gif",
                "altura": 1.1,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-large.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-large.png"
            },
            {
                "cap": "Gourgeist Tamaño Extra Grande",
                "btn": "🎃 Ver tamaño Extra Grande",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-super.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-super.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/gourgeist-super.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/gourgeist-super.gif",
                "altura": 1.7,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/gourgeist-super.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/gourgeist-super.png"
            }
        ]
    },
    {
        "id": 713,
        "nombre": "Avalugg",
        "tipo": "Hielo",
        "desc": "Su cuerpo es tan pesado y compacto que sirve de puente natural sobre grietas heladas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/713.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/713.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/713.gif",
                "cap": "Avalugg, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/713.ogg"
            },
            {
                "cap": "Avalugg de Hisui",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/avalugg-hisui.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/avalugg-hisui.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/avalugg-hisui.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/avalugg-hisui.gif",
                "btn": "🏔️ Ver forma de Hisui"
            }
        ]
    },
    {
        "id": 715,
        "nombre": "Noivern",
        "tipo": "Volador / Dragón",
        "desc": "Emite ondas ultrasónicas tan potentes que pueden partir rocas grandes desde lejos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/715.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/715.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/715.gif",
                "cap": "Noivern, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/715.ogg"
            }
        ]
    },
    {
        "id": 716,
        "nombre": "Xerneas",
        "tipo": "Hada",
        "desc": "Puede otorgar vida eterna a otros seres, y su cornamenta brilla con los colores del arcoíris cuando usa su poder.",
        "fav": "El pilar de la vida de Kalos; pocos legendarios tienen un diseño tan luminoso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/716.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/716.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/716.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/716.ogg",
                "cap": "Xerneas, el Pokémon Hada"
            }
        ]
    },
    {
        "id": 717,
        "nombre": "Yveltal",
        "tipo": "Siniestro / Volador",
        "desc": "Puede absorber la vida de todo a su alrededor, y al final de su vida libera toda esa energía de golpe.",
        "fav": "El contrapunto perfecto de Xerneas: destrucción elegante en forma de ave oscura.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/717.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/717.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/717.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/717.ogg",
                "cap": "Yveltal, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 718,
        "nombre": "Zygarde",
        "tipo": "Dragón / Tierra",
        "desc": "Vigila el ecosistema y reúne sus células para adoptar formas más poderosas cuando percibe un desequilibrio.",
        "fav": "Su forma Completa, hecha de miles de células, es de lo más espectacular de Kalos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10120.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10120.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10120.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10120.ogg",
                "cap": "Zygarde Forma Completa",
                "btn": "🔄 Forma 50%"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/718.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/718.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/718.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/718.ogg",
                "cap": "Zygarde, el Pokémon Dragón",
                "btn": "🔄 Forma 10%"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10118.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10118.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10118.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10118.ogg",
                "cap": "Zygarde Forma 10%",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10301.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10301.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10301.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10301.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10301.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10301.png",
                "cap": "Mega-Zygarde",
                "btn": "🔄 Volver a Zygarde Completa"
            }
        ]
    },
    {
        "id": 719,
        "nombre": "Diancie",
        "tipo": "Roca / Hada",
        "desc": "Nació de una Carbink expuesta a una presión inmensa, y puede crear diamantes comprimiendo carbono en el aire.",
        "fav": "Diminuta y brillante, su diseño de piedra preciosa la hace irresistible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/719.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/719.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/719.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/719.ogg",
                "cap": "Diancie, el Pokémon Roca",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10075.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10075.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10075.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10075.ogg",
                "cap": "Mega-Diancie",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 720,
        "nombre": "Hoopa",
        "tipo": "Psíquico / Fantasma",
        "desc": "Puede invocar cualquier cosa a través de sus anillos, aunque a veces trae más problemas de los que resuelve.",
        "fav": "Su forma Torbellino, mucho más grande y feroz, es una de las sorpresas más divertidas de Kalos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/720.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/720.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/720.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/720.ogg",
                "cap": "Hoopa, el Pokémon Psíquico",
                "btn": "🔄 Hoopa Desatado"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10086.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10086.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10086.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10086.ogg",
                "cap": "Hoopa Desatado",
                "btn": "🔄 Volver a Hoopa Confinado"
            }
        ]
    },
    {
        "id": 721,
        "nombre": "Volcanion",
        "tipo": "Fuego / Agua",
        "desc": "Libera vapor a más de 100 grados por los conductos de su espalda, capaz de hacer desaparecer montañas enteras.",
        "fav": "La rara combinación fuego/agua en un mismo cuerpo lo hace un mítico muy singular.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/721.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/721.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/721.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/721.ogg",
                "cap": "Volcanion, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 722,
        "nombre": "Rowlet",
        "tipo": "Planta / Volador",
        "desc": "Es el inicial de tipo planta de la 7ma generación. Es un búho amigable y dormilón que lanza pequeñas plumas afiladas para practicar su puntería sin hacer ruido.",
        "fav": "Su diseño tierno y su participación en el anime me encantaron, aparte fue mi inicial elegido cuando jugué la 7ma generación.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/722.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/722.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/722.gif",
                "cap": "Rowlet, el Pokémon Cría de Búho"
            }
        ]
    },
    {
        "id": 724,
        "nombre": "Decidueye",
        "tipo": "Planta / Fantasma",
        "desc": "Oculta flechas en sus alas y las dispara en una fracción de segundo con precisión milimétrica.",
        "fav": "El arquero fantasma más genial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/724.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/724.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/724.gif",
                "cap": "Decidueye, el Pokémon Pluma Flecha",
                "btn": "🔄 Forma Hisui"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10244.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10244.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10244.gif",
                "cap": "Decidueye de Hisui",
                "btn": "🔄 Forma Alola"
            }
        ]
    },
    {
        "id": 725,
        "nombre": "Litten",
        "tipo": "Fuego",
        "desc": "Se lame el pelaje para acicalarse y luego escupe una bola de pelo inflamable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/725.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/725.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/725.gif",
                "cap": "Litten, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/725.ogg"
            }
        ]
    },
    {
        "id": 727,
        "nombre": "Incineroar",
        "tipo": "Fuego / Siniestro",
        "desc": "Combina movimientos de lucha libre con llamas ardientes, y disfruta intimidando a sus oponentes antes del combate.",
        "fav": "El inicial más carismático y rudo, con ese estilo de luchador profesional que enamora.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/727.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/727.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/727.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/727.ogg",
                "cap": "Incineroar, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 728,
        "nombre": "Popplio",
        "tipo": "Agua",
        "desc": "Sopla burbujas desde la nariz que puede endurecer para usarlas como si fueran balones.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/728.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/728.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/728.gif",
                "cap": "Popplio, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/728.ogg"
            }
        ]
    },
    {
        "id": 730,
        "nombre": "Primarina",
        "tipo": "Agua / Hada",
        "desc": "Canta melodías que pueden controlar burbujas de agua, convirtiéndolas en balas o incluso en escudos.",
        "fav": "La combinación de canto, agua y hada la convierte en el inicial más elegante de Alola.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/730.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/730.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/730.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/730.ogg",
                "cap": "Primarina, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 733,
        "nombre": "Toucannon",
        "tipo": "Normal / Volador",
        "desc": "Dispara semillas a la velocidad de una bala usando su enorme pico como cañón improvisado.",
        "fav": "Su pico gigante y colorido lo convierte en uno de los diseños más alegres de Alola.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/733.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/733.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/733.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/733.ogg",
                "cap": "Toucannon, el Pokémon Normal"
            }
        ]
    },
    {
        "id": 735,
        "nombre": "Gumshoos",
        "tipo": "Normal",
        "desc": "Vigila la entrada de una madriguera durante horas sin moverse, esperando a su presa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/735.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/735.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/735.gif",
                "cap": "Gumshoos, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/735.ogg"
            }
        ]
    },
    {
        "id": 738,
        "nombre": "Vikavolt",
        "tipo": "Bicho / Eléctrico",
        "desc": "Las mandíbulas que usa para volar generan tanta corriente que puede derribar un poste eléctrico.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/738.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/738.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/738.gif",
                "cap": "Vikavolt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/738.ogg"
            }
        ]
    },
    {
        "id": 740,
        "nombre": "Crabominable",
        "tipo": "Lucha / Hielo",
        "desc": "Sus enormes pinzas peludas pueden llegar a congelarse por accidente cuando se emociona demasiado jugando en la nieve.",
        "fav": "Un cangrejo abominable enorme y torpe; su diseño esponjoso contrasta con su fuerza descomunal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/740.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/740.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/740.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/740.ogg",
                "cap": "Crabominable, el Pokémon Cangrejo Nival",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10315.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10315.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10315.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10315.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10315.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10315.png",
                "cap": "Mega-Crabominable",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 741,
        "nombre": "Oricorio",
        "tipo": "Volador / Fuego",
        "desc": "Absorbe el néctar de flores distintas y cambia por completo su estilo de baile según cuál probó.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/741.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/741.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/741.gif",
                "cap": "Oricorio, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/741.ogg"
            },
            {
                "cap": "Oricorio Estilo Pom-Pom",
                "btn": "🎉 Ver Estilo Pom-Pom",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-pompom.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-pompom.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pompom.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/oricorio-pompom.gif",
                "altura": 0.6,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-pompom.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-pompom.png"
            },
            {
                "cap": "Oricorio Estilo Pa’u",
                "btn": "🌺 Ver Estilo Pa’u",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-pau.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-pau.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/oricorio-pau.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/oricorio-pau.gif",
                "altura": 0.6,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-pau.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-pau.png"
            },
            {
                "cap": "Oricorio Estilo Sensu",
                "btn": "🪭 Ver Estilo Sensu",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-sensu.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-sensu.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/oricorio-sensu.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/oricorio-sensu.gif",
                "altura": 0.6,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/oricorio-sensu.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/oricorio-sensu.png"
            }
        ]
    },
    {
        "id": 743,
        "nombre": "Ribombee",
        "tipo": "Bicho / Hada",
        "desc": "Mezcla polen y néctar para crear una bola que le da energía extra en pleno vuelo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/743.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/743.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/743.gif",
                "cap": "Ribombee, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/743.ogg"
            }
        ]
    },
    {
        "id": 745,
        "nombre": "Lycanroc",
        "tipo": "Roca",
        "desc": "Evoluciona a diferentes formas según la hora del día en que alcanza su poder.",
        "fav": "Un lobo de piedra con excelentes variantes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/745.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/745.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/745.gif",
                "cap": "Lycanroc (Forma Diurna)",
                "btn": "🌙 Forma Nocturna"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10126.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10126.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10126.gif",
                "cap": "Lycanroc (Forma Nocturna)",
                "btn": "🌅 Forma Crepuscular"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10152.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10152.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10152.gif",
                "cap": "Lycanroc (Forma Crepuscular)",
                "btn": "☀️ Forma Diurna"
            }
        ]
    },
    {
        "id": 746,
        "nombre": "Wishiwashi",
        "tipo": "Agua",
        "desc": "En solitario es tímido y débil, pero en cardumen imita la forma de un pez gigante para asustar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/746.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/746.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/746.gif",
                "cap": "Wishiwashi, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/746.ogg"
            }
        ]
    },
    {
        "id": 748,
        "nombre": "Toxapex",
        "tipo": "Veneno / Agua",
        "desc": "Las puntas de su cuerpo esconden un veneno tan fuerte que se considera de los más letales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/748.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/748.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/748.gif",
                "cap": "Toxapex, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/748.ogg"
            }
        ]
    },
    {
        "id": 750,
        "nombre": "Mudsdale",
        "tipo": "Tierra",
        "desc": "Puede arrastrar hasta diez toneladas sin apenas esfuerzo, y su sudor lo protege como una capa de barro.",
        "fav": "Un caballo de tiro gigantesco con una fuerza descomunal; muy subestimado en combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/750.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/750.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/750.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/750.ogg",
                "cap": "Mudsdale, el Pokémon Tierra"
            }
        ]
    },
    {
        "id": 752,
        "nombre": "Araquanid",
        "tipo": "Agua / Bicho",
        "desc": "Envuelve la cabeza con una burbuja de agua que también usa para proteger a Pokémon más pequeños.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/752.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/752.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/752.gif",
                "cap": "Araquanid, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/752.ogg"
            }
        ]
    },
    {
        "id": 754,
        "nombre": "Lurantis",
        "tipo": "Planta",
        "desc": "Sus pétalos imitan a la perfección los de una flor real para atraer presas incautas hacia sus hojas afiladas.",
        "fav": "El mimetismo floral de Lurantis es precioso y letal a partes iguales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/754.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/754.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/754.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/754.ogg",
                "cap": "Lurantis, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 756,
        "nombre": "Shiinotic",
        "tipo": "Planta / Hada",
        "desc": "Su brillo hipnótico atrae caminantes despistados hacia lo más profundo del bosque.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/756.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/756.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/756.gif",
                "cap": "Shiinotic, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/756.ogg"
            }
        ]
    },
    {
        "id": 758,
        "nombre": "Salazzle",
        "tipo": "Veneno / Fuego",
        "desc": "Segrega un veneno tóxico por la piel y suele rodearse de varios Salandit machos que la sirven fielmente.",
        "fav": "Su actitud despreocupada de reina venenosa la hace inconfundible entre los Pokémon de Alola.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/758.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/758.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/758.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/758.ogg",
                "cap": "Salazzle, el Pokémon Veneno"
            }
        ]
    },
    {
        "id": 760,
        "nombre": "Bewear",
        "tipo": "Normal / Lucha",
        "desc": "Sus abrazos son tan fuertes que pueden romper huesos, aunque en realidad solo busca hacer amigos.",
        "fav": "Tierno por fuera, aterrador en combate; ese contraste es puro carisma.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/760.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/760.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/760.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/760.ogg",
                "cap": "Bewear, el Pokémon Normal"
            }
        ]
    },
    {
        "id": 763,
        "nombre": "Tsareena",
        "tipo": "Planta",
        "desc": "Patea con fuerza y elegancia, y no tolera ningún gesto de debilidad en sus aliados.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/763.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/763.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/763.gif",
                "cap": "Tsareena, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/763.ogg"
            }
        ]
    },
    {
        "id": 764,
        "nombre": "Comfey",
        "tipo": "Planta / Hada",
        "desc": "Trenza su propio cuerpo floral en guirnaldas que reparte para calmar heridas ajenas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/764.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/764.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/764.gif",
                "cap": "Comfey, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/764.ogg"
            }
        ]
    },
    {
        "id": 765,
        "nombre": "Oranguru",
        "tipo": "Normal / Psíquico",
        "desc": "Observa con calma antes de actuar, y se dice que resuelve acertijos con facilidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/765.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/765.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/765.gif",
                "cap": "Oranguru, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/765.ogg"
            }
        ]
    },
    {
        "id": 766,
        "nombre": "Passimian",
        "tipo": "Lucha",
        "desc": "Se organiza en grupos donde cada integrante tiene un rol fijo durante la caza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/766.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/766.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/766.gif",
                "cap": "Passimian, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/766.ogg"
            }
        ]
    },
    {
        "id": 768,
        "nombre": "Golisopod",
        "tipo": "Bicho / Agua",
        "desc": "Un Pokémon de tipo Bicho / Agua con una imponente armadura. Es extremadamente cauteloso y utiliza sus afiladas garras para combatir, mientras que su habilidad le permite retirarse cuando sus fuerzas disminuyen.",
        "fav": "Me gusta por su diseño intimidante, sus enormes garras y la combinación de su apariencia de guerrero con su estilo de combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/768.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/768.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/768.gif",
                "cap": "Golisopod, el Pokémon Blindado",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10316.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10316.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10316.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10316.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10316.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10316.png",
                "cap": "Mega-Golisopod",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 770,
        "nombre": "Palossand",
        "tipo": "Fantasma / Tierra",
        "desc": "Atrae niños curiosos hacia su castillo de arena para robarles la energía vital.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/770.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/770.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/770.gif",
                "cap": "Palossand, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/770.ogg"
            }
        ]
    },
    {
        "id": 771,
        "nombre": "Pyukumuku",
        "tipo": "Agua",
        "desc": "Expulsa sus propios intestinos para limpiar heridas ajenas y luego los recoge de nuevo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/771.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/771.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/771.gif",
                "cap": "Pyukumuku, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/771.ogg"
            }
        ]
    },
    {
        "id": 773,
        "nombre": "Silvally",
        "tipo": "Normal",
        "desc": "Cambia su tipo de combate según el disco especial que lleve conectado al pecho.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/773.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/773.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/773.gif",
                "cap": "Silvally, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/773.ogg"
            }
        ]
    },
    {
        "id": 774,
        "nombre": "Minior",
        "tipo": "Roca / Volador",
        "desc": "Su núcleo interior brilla con un color distinto según la composición de su núcleo rocoso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/774.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/774.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/774.gif",
                "cap": "Minior, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/774.ogg"
            }
        ]
    },
    {
        "id": 775,
        "nombre": "Komala",
        "tipo": "Normal",
        "desc": "Duerme literalmente todo el tiempo, incluso mientras pelea, aferrado a su tronco.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/775.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/775.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/775.gif",
                "cap": "Komala, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/775.ogg"
            }
        ]
    },
    {
        "id": 776,
        "nombre": "Turtonator",
        "tipo": "Fuego / Dragón",
        "desc": "Su caparazón explota al mínimo impacto, así que solo ataca por la espalda desprotegida.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/776.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/776.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/776.gif",
                "cap": "Turtonator, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/776.ogg"
            }
        ]
    },
    {
        "id": 777,
        "nombre": "Togedemaru",
        "tipo": "Eléctrico / Acero",
        "desc": "Almacena electricidad en las púas de su lomo y las erizamos para liberarla de golpe.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/777.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/777.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/777.gif",
                "cap": "Togedemaru, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/777.ogg"
            }
        ]
    },
    {
        "id": 778,
        "nombre": "Mimikyu",
        "tipo": "Fantasma / Hada",
        "desc": "Usa un viejo saco similar a Pikachu para ocultar su verdadera apariencia y poder acercarse a los humanos para no sentirse solo.",
        "fav": "¿Quién no quiere a Mimikyu? Es uno de los conceptos más creativos y tiernos de la franquicia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/778.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/778.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/778.gif",
                "cap": "Mimikyu (Forma Encubierta)",
                "btn": "🔄 Forma Descubierta"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10143.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10143.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10143.gif",
                "cap": "Mimikyu (Forma Descubierta)",
                "btn": "🔄 Forma Encubierta"
            }
        ]
    },
    {
        "id": 779,
        "nombre": "Bruxish",
        "tipo": "Agua / Psíquico",
        "desc": "Rechina los dientes para emitir ondas psíquicas que aturden a cualquier presa cercana.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/779.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/779.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/779.gif",
                "cap": "Bruxish, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/779.ogg"
            }
        ]
    },
    {
        "id": 780,
        "nombre": "Drampa",
        "tipo": "Normal / Dragón",
        "desc": "Es de trato amable y disfruta jugar con los niños, pero se vuelve extremadamente violento si alguien llega a lastimar a uno.",
        "fav": "Un dragón anciano y bonachón hasta que lo hacen enojar; su ternura contrasta con su poder oculto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/780.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/780.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/780.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/780.ogg",
                "cap": "Drampa, el Pokémon Bondadoso",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10302.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10302.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10302.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10302.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10302.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10302.png",
                "cap": "Mega-Drampa",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 781,
        "nombre": "Dhelmise",
        "tipo": "Fantasma / Planta",
        "desc": "Un cúmulo de algas marinas poseídas por un espíritu que aún maneja un ancla como arma.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/781.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/781.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/781.gif",
                "cap": "Dhelmise, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/781.ogg"
            }
        ]
    },
    {
        "id": 784,
        "nombre": "Kommo-o",
        "tipo": "Dragón / Lucha",
        "desc": "Hace sonar las escamas de su cola como si fueran maracas antes de lanzarse a un combate feroz.",
        "fav": "El dragón/lucha final de Alola combina un diseño de guerrero con muchísima presencia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/784.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/784.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/784.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/784.ogg",
                "cap": "Kommo-o, el Pokémon Dragón"
            }
        ]
    },
    {
        "id": 785,
        "nombre": "Tapu Koko",
        "tipo": "Eléctrico / Hada",
        "desc": "Guardián de la isla Melemele, absorbe electricidad ambiental y la libera en potentes descargas antes de desaparecer.",
        "fav": "El primero de las deidades insulares de Alola, con esa capa dorada tan característica.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/785.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/785.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/785.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/785.ogg",
                "cap": "Tapu Koko, el Pokémon Eléctrico"
            }
        ]
    },
    {
        "id": 786,
        "nombre": "Tapu Lele",
        "tipo": "Psíquico / Hada",
        "desc": "Esparce escamas brillantes que curan heridas, aunque también pueden confundir a quien las respira.",
        "fav": "La más caprichosa y colorida de las deidades insulares; su diseño floral es precioso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/786.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/786.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/786.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/786.ogg",
                "cap": "Tapu Lele, el Pokémon Psíquico"
            }
        ]
    },
    {
        "id": 787,
        "nombre": "Tapu Bulu",
        "tipo": "Planta / Hada",
        "desc": "Puede hacer crecer árboles gigantes de la nada y usa troncos como mazas para aplastar a sus rivales.",
        "fav": "El más tranquilo y fuerte de los Tapu; ese aire de deidad campesina le da mucho carácter.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/787.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/787.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/787.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/787.ogg",
                "cap": "Tapu Bulu, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 788,
        "nombre": "Tapu Fini",
        "tipo": "Agua / Hada",
        "desc": "Genera una neblina espesa que confunde a los intrusos y protege los mares alrededor de su isla.",
        "fav": "Su elegancia acuática y esa melena de niebla la hacen la más serena de las cuatro deidades.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/788.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/788.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/788.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/788.ogg",
                "cap": "Tapu Fini, el Pokémon Agua"
            }
        ]
    },
    {
        "id": 791,
        "nombre": "Solgaleo",
        "tipo": "Psíquico / Acero",
        "desc": "Solgaleo posee una energía comparable a la del sol y puede viajar a través de Ultraumbrales hacia otras dimensiones.",
        "fav": "Su apariencia de león solar y su presencia legendaria son increíbles.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/791.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/791.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/791.gif",
                "cap": "Solgaleo, el Pokémon Corona Solar"
            }
        ]
    },
    {
        "id": 792,
        "nombre": "Lunala",
        "tipo": "Psíquico / Fantasma",
        "desc": "Lunala es un Pokémon legendario que absorbe la luz y puede recorrer el cielo con una apariencia semejante a la de una luna creciente.",
        "fav": "Su diseño cósmico y su relación con la noche me parecen espectaculares.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/792.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/792.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/792.gif",
                "cap": "Lunala, el Pokémon Corona Lunar"
            }
        ]
    },
    {
        "id": 793,
        "nombre": "Nihilego",
        "tipo": "Roca / Veneno",
        "desc": "Un parásito llegado de otra dimensión que se adhiere a la cabeza de su anfitrión y controla su mente.",
        "fav": "El primer ultraente que vimos y sigue siendo de los más inquietantes, como una medusa cósmica.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/793.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/793.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/793.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/793.ogg",
                "cap": "Nihilego, el Pokémon Roca"
            }
        ]
    },
    {
        "id": 794,
        "nombre": "Buzzwole",
        "tipo": "Bicho / Lucha",
        "desc": "Sus músculos se inflan al absorber proteínas del aire, y puede explotar de fuerza en cualquier momento.",
        "fav": "Un ultraente literalmente hecho de músculo; su actitud fanfarrona es puro carisma.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/794.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/794.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/794.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/794.ogg",
                "cap": "Buzzwole, el Pokémon Bicho"
            }
        ]
    },
    {
        "id": 795,
        "nombre": "Pheromosa",
        "tipo": "Bicho / Lucha",
        "desc": "Extremadamente veloz y letal, evita el contacto con la suciedad porque considera todo lo demás repugnante.",
        "fav": "Su elegancia mortal y esas piernas larguísimas la hacen de los ultraentes más elegantes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/795.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/795.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/795.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/795.ogg",
                "cap": "Pheromosa, el Pokémon Bicho"
            }
        ]
    },
    {
        "id": 796,
        "nombre": "Xurkitree",
        "tipo": "Eléctrico",
        "desc": "Absorbe electricidad de cualquier fuente cercana y la almacena en su cuerpo en forma de ramas luminosas.",
        "fav": "Su silueta de árbol eléctrico brillando en la oscuridad es una de las más llamativas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/796.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/796.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/796.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/796.ogg",
                "cap": "Xurkitree, el Pokémon Eléctrico"
            }
        ]
    },
    {
        "id": 797,
        "nombre": "Celesteela",
        "tipo": "Acero / Volador",
        "desc": "Libera gas propulsor por los brazos para volar, y se dice que llegó a la Tierra como un cohete perdido.",
        "fav": "Su aspecto de cohete viviente lo hace uno de los ultraentes más originales del grupo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/797.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/797.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/797.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/797.ogg",
                "cap": "Celesteela, el Pokémon Acero"
            }
        ]
    },
    {
        "id": 798,
        "nombre": "Kartana",
        "tipo": "Planta / Acero",
        "desc": "Sus bordes son tan afilados que pueden cortar acero, y pesa tan poco como una hoja de papel.",
        "fav": "Un origami viviente capaz de cortar metal; el contraste es fascinante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/798.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/798.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/798.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/798.ogg",
                "cap": "Kartana, el Pokémon Planta"
            }
        ]
    },
    {
        "id": 799,
        "nombre": "Guzzlord",
        "tipo": "Siniestro / Dragón",
        "desc": "Devora todo lo que encuentra a su paso, incluyendo montañas enteras, sin llenarse jamás.",
        "fav": "El más grande y glotón de los ultraentes; su tamaño descomunal impone muchísimo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/799.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/799.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/799.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/799.ogg",
                "cap": "Guzzlord, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 800,
        "nombre": "Necrozma",
        "tipo": "Psíquico",
        "desc": "Una criatura misteriosa que absorbe luz para obtener energía y puede fusionarse con otros Pokémon legendarios.",
        "fav": "Sus fusiones con Solgaleo y Lunala tienen algunos de los diseños más espectaculares de Pokémon.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/800.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/800.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/800.gif",
                "cap": "Necrozma, el Pokémon Prisma",
                "btn": "🌟 Fusionar con Solgaleo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10155.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10155.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10155.gif",
                "cap": "Necrozma Melena Crepuscular",
                "btn": "🌙 Fusionar con Lunala"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10156.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10156.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10156.gif",
                "cap": "Necrozma Alas del Alba",
                "btn": "✨ Ultra Necrozma"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10157.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10157.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10157.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10157.ogg",
                "cap": "Ultra Necrozma",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 801,
        "nombre": "Magearna",
        "tipo": "Acero / Hada",
        "desc": "Fue creada hace 500 años y guarda en su interior el alma de una Pokémon fallecida, algo único entre los míticos.",
        "fav": "Su diseño de muñeca mecánica y su historia sobre el alma la vuelven muy especial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/801.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/801.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/801.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/801.ogg",
                "cap": "Magearna, el Pokémon Acero",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10317.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10317.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10317.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10317.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10317.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10317.png",
                "cap": "Mega-Magearna",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 802,
        "nombre": "Marshadow",
        "tipo": "Lucha / Fantasma",
        "desc": "Se esconde en las sombras de otros seres para copiar sus movimientos, y jamás se deja ver por nadie.",
        "fav": "Su naturaleza esquiva y su diseño ninja lo convierten en uno de los míticos más geniales.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/802.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/802.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/802.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/802.ogg",
                "cap": "Marshadow, el Pokémon Lucha"
            }
        ]
    },
    {
        "id": 803,
        "nombre": "Poipole",
        "tipo": "Veneno",
        "desc": "Su veneno es tan potente que una sola gota puede derretir el metal, aunque él mismo es dócil y curioso.",
        "fav": "Pequeño, curioso y adorable; contrasta con lo temibles que son la mayoría de ultraentes.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/803.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/803.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/803.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/803.ogg",
                "cap": "Poipole, el Pokémon Veneno"
            }
        ]
    },
    {
        "id": 804,
        "nombre": "Naganadel",
        "tipo": "Veneno / Dragón",
        "desc": "Sus colmillos inyectan un veneno letal, y vuela a gran velocidad gracias a los aguijones de su espalda.",
        "fav": "La evolución de Poipole es una sorpresa total; pasa de tierno a temible al instante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/804.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/804.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/804.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/804.ogg",
                "cap": "Naganadel, el Pokémon Veneno"
            }
        ]
    },
    {
        "id": 805,
        "nombre": "Stakataka",
        "tipo": "Roca / Acero",
        "desc": "Un conjunto de bloques de piedra apilados que actúa como un solo ser, lento pero prácticamente indestructible.",
        "fav": "Su diseño de fortaleza viviente lo hace uno de los ultraentes más originales y extraños.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/805.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/805.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/805.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/805.ogg",
                "cap": "Stakataka, el Pokémon Roca"
            }
        ]
    },
    {
        "id": 806,
        "nombre": "Blacephalon",
        "tipo": "Fuego / Fantasma",
        "desc": "Hace explotar su propia cabeza para distraer a sus presas, y luego la reconstruye sin ningún problema.",
        "fav": "El payaso explosivo del grupo; su rareza absoluta es parte de su encanto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/806.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/806.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/806.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/806.ogg",
                "cap": "Blacephalon, el Pokémon Fuego"
            }
        ]
    },
    {
        "id": 807,
        "nombre": "Zeraora",
        "tipo": "Eléctrico",
        "desc": "Genera electricidad en sus patas para lanzarse a toda velocidad sobre sus rivales sin hacer ningún ruido.",
        "fav": "Ágil, felino y cargado de electricidad; un mítico con muchísima presencia en combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/807.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/807.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/807.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/807.ogg",
                "cap": "Zeraora, el Pokémon Eléctrico",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10319.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10319.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10319.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10319.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10319.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10319.png",
                "cap": "Mega-Zeraora",
                "btn": "🔄 Revertir Megaevolución"
            }
        ]
    },
    {
        "id": 809,
        "nombre": "Melmetal",
        "tipo": "Acero",
        "desc": "Su cuerpo está hecho de un metal líquido tan denso que puede aplastar un coche entero de un solo golpe.",
        "formas": [
            {
                "cap": "Melmetal, el Pokémon",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/809.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/809.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/809.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/809.ogg"
            },
            {
                "cap": "Melmetal Gigantamax",
                "btn": "🔄 Revertir Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/melmetal-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/melmetal-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/melmetal-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/melmetal-gmax.gif"
            }
        ]
    },
    {
        "id": 810,
        "nombre": "Grookey",
        "tipo": "Planta",
        "desc": "Golpea el palo que lleva con tanto ritmo que despierta la energía de las plantas cercanas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/810.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/810.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/810.gif",
                "cap": "Grookey, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/810.ogg"
            }
        ]
    },
    {
        "id": 812,
        "nombre": "Rillaboom",
        "tipo": "Planta",
        "desc": "Golpea el tambor que lleva en el pecho para generar ondas sonoras que potencian sus ataques y los de sus aliados.",
        "fav": "Ese ritmo de batería incorporado hace de Rillaboom un inicial planta único en su especie.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/812.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/812.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/812.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/812.ogg",
                "cap": "Rillaboom, el Pokémon Planta",
                "btn": "💥 Forma Gigantamax"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10209.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10209.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10209.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10209.ogg",
                "cap": "Rillaboom Gigantamax",
                "btn": "🔄 Volver a Rillaboom"
            }
        ]
    },
    {
        "id": 813,
        "nombre": "Scorbunny",
        "tipo": "Fuego",
        "desc": "Corre a gran velocidad calentando las almohadillas de sus patas antes de atacar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/813.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/813.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/813.gif",
                "cap": "Scorbunny, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/813.ogg"
            }
        ]
    },
    {
        "id": 815,
        "nombre": "Cinderace",
        "tipo": "Fuego",
        "desc": "Convierte piedras en balones ardientes y los lanza con una precisión digna del mejor delantero.",
        "fav": "Un inicial futbolista de fuego; el concepto es tan simple como genial.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/815.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/815.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/815.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/815.ogg",
                "cap": "Cinderace, el Pokémon Fuego",
                "btn": "💥 Forma Gigantamax"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10210.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10210.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10210.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10210.ogg",
                "cap": "Cinderace Gigantamax",
                "btn": "🔄 Volver a Cinderace"
            }
        ]
    },
    {
        "id": 816,
        "nombre": "Sobble",
        "tipo": "Agua",
        "desc": "Llora sin querer cuando se pone nervioso, lo que crea una cortina de agua que lo camufla.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/816.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/816.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/816.gif",
                "cap": "Sobble, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/816.ogg"
            }
        ]
    },
    {
        "id": 818,
        "nombre": "Inteleon",
        "tipo": "Agua",
        "desc": "Dispara agua a presión desde la punta de sus dedos con la precisión de un francotirador de élite.",
        "fav": "El inicial agua más frío y calculador, con ese estilo de espía que lo hace inconfundible.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/818.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/818.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/818.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/818.ogg",
                "cap": "Inteleon, el Pokémon Agua",
                "btn": "💥 Forma Gigantamax"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10211.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10211.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10211.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10211.ogg",
                "cap": "Inteleon Gigantamax",
                "btn": "🔄 Volver a Inteleon"
            }
        ]
    },
    {
        "id": 820,
        "nombre": "Greedent",
        "tipo": "Normal",
        "desc": "Guarda comida en las mejillas durante meses sin que se eche a perder.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/820.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/820.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/820.gif",
                "cap": "Greedent, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/820.ogg"
            }
        ]
    },
    {
        "id": 823,
        "nombre": "Corviknight",
        "tipo": "Volador / Acero",
        "desc": "Domina los cielos de Galar. Su plumaje de acero repele cualquier ataque común.",
        "fav": "El cuervo de armadura definitiva.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/823.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/823.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/823.gif",
                "cap": "Corviknight, el Pokémon Cuervo",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/823.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10212.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10212.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10212.gif",
                "cap": "Corviknight Gigantamax",
                "btn": "💥 Forma Gigantamax",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10212.ogg"
            }
        ]
    },
    {
        "id": 826,
        "nombre": "Orbeetle",
        "tipo": "Bicho / Psíquico",
        "desc": "Su cerebro creció tanto que ahora puede resolver problemas complejos en segundos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/826.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/826.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/826.gif",
                "cap": "Orbeetle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/826.ogg"
            },
            {
                "cap": "Orbeetle Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/orbeetle-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/orbeetle-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/orbeetle-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/orbeetle-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 828,
        "nombre": "Thievul",
        "tipo": "Siniestro",
        "desc": "Deja un rastro de olor falso para despistar a quien intente perseguirlo tras un robo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/828.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/828.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/828.gif",
                "cap": "Thievul, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/828.ogg"
            }
        ]
    },
    {
        "id": 830,
        "nombre": "Eldegoss",
        "tipo": "Planta",
        "desc": "Esparce semillas de algodón que curan heridas leves de otros Pokémon cercanos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/830.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/830.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/830.gif",
                "cap": "Eldegoss, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/830.ogg"
            }
        ]
    },
    {
        "id": 832,
        "nombre": "Dubwool",
        "tipo": "Normal",
        "desc": "Su lana crece sin parar y se usa para tejer prendas muy valoradas en Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/832.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/832.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/832.gif",
                "cap": "Dubwool, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/832.ogg"
            }
        ]
    },
    {
        "id": 834,
        "nombre": "Drednaw",
        "tipo": "Agua / Roca",
        "desc": "Muerde con tanta fuerza que puede partir rocas grandes de un solo mordisco.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/834.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/834.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/834.gif",
                "cap": "Drednaw, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/834.ogg"
            },
            {
                "cap": "Drednaw Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/drednaw-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/drednaw-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/drednaw-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/drednaw-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 836,
        "nombre": "Boltund",
        "tipo": "Eléctrico",
        "desc": "Corre tan rápido que puede mantener una velocidad altísima durante horas sin cansarse.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/836.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/836.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/836.gif",
                "cap": "Boltund, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/836.ogg"
            }
        ]
    },
    {
        "id": 839,
        "nombre": "Coalossal",
        "tipo": "Roca / Fuego",
        "desc": "Quema el carbón de su lomo y lo usa como si fuera una locomotora de vapor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/839.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/839.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/839.gif",
                "cap": "Coalossal, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/839.ogg"
            },
            {
                "cap": "Coalossal Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/coalossal-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/coalossal-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/coalossal-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/coalossal-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 841,
        "nombre": "Flapple",
        "tipo": "Planta / Dragón",
        "desc": "Sale de una manzana ácida y usa sus alas de hojas para lanzarse en picada.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/841.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/841.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/841.gif",
                "cap": "Flapple, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/841.ogg"
            },
            {
                "cap": "Flapple Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/flapple-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/flapple-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/flapple-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/flapple-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 842,
        "nombre": "Appletun",
        "tipo": "Planta / Dragón",
        "desc": "Su cuerpo dulce atrae a niños de Galar, que lo cuidan como si fuera un postre viviente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/842.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/842.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/842.gif",
                "cap": "Appletun, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/842.ogg"
            },
            {
                "cap": "Appletun Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/appletun-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/appletun-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/appletun-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/appletun-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 844,
        "nombre": "Sandaconda",
        "tipo": "Tierra",
        "desc": "Almacena arena en el saco de su cuerpo y la libera como una tormenta al enroscarse.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/844.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/844.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/844.gif",
                "cap": "Sandaconda, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/844.ogg"
            },
            {
                "cap": "Sandaconda Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/sandaconda-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/sandaconda-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/sandaconda-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/sandaconda-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 847,
        "nombre": "Barraskewda",
        "tipo": "Agua",
        "desc": "Nada tan rápido que puede atravesar de lado a lado el casco de un barco pequeño.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/847.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/847.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/847.gif",
                "cap": "Barraskewda, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/847.ogg"
            }
        ]
    },
    {
        "id": 849,
        "nombre": "Toxtricity",
        "tipo": "Eléctrico / Veneno",
        "desc": "Rasguea los salientes de su pecho para generar electricidad emitiendo sonidos como un bajo eléctrico.",
        "fav": "Estilo punk rock puro e inigualable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/849.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/849.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/849.gif",
                "cap": "Toxtricity Amped, el Pokémon Punk",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/849.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10184.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10184.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10184.gif",
                "cap": "Toxtricity Low Key, el Pokémon Punk",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10184.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10219.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10219.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10219.gif",
                "cap": "Toxtricity Amped Gigantamax",
                "btn": "💥 Gigantamax Amped",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10219.ogg"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10228.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10228.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10228.gif",
                "cap": "Toxtricity Low Key Gigantamax",
                "btn": "💥 Gigantamax Low Key",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10228.ogg"
            }
        ]
    },
    {
        "id": 851,
        "nombre": "Centiskorch",
        "tipo": "Fuego / Bicho",
        "desc": "La parte delantera de su cuerpo arde constantemente a más de 800 grados.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/851.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/851.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/851.gif",
                "cap": "Centiskorch, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/851.ogg"
            },
            {
                "cap": "Centiskorch Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/centiskorch-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/centiskorch-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/centiskorch-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/centiskorch-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 853,
        "nombre": "Grapploct",
        "tipo": "Lucha",
        "desc": "Aprieta con sus ocho tentáculos hasta inmovilizar por completo a su oponente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/853.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/853.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/853.gif",
                "cap": "Grapploct, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/853.ogg"
            }
        ]
    },
    {
        "id": 855,
        "nombre": "Polteageist",
        "tipo": "Fantasma",
        "desc": "Se esconde dentro de una taza de té y espera a que alguien beba de ella por error.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/855.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/855.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/855.gif",
                "cap": "Polteageist, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/855.ogg"
            }
        ]
    },
    {
        "id": 858,
        "nombre": "Hatterene",
        "tipo": "Psíquico / Hada",
        "desc": "Percibe pensamientos ajenos a kilómetros y puede confundir a quien se acerque demasiado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/858.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/858.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/858.gif",
                "cap": "Hatterene, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/858.ogg"
            },
            {
                "cap": "Hatterene Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/hatterene-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/hatterene-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/hatterene-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/hatterene-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 861,
        "nombre": "Grimmsnarl",
        "tipo": "Siniestro / Hada",
        "desc": "Sus mechones de pelo actúan como músculos extra, dándole una fuerza descomunal para su tamaño.",
        "fav": "El aire de trol de cuento de hadas de Grimmsnarl lo hace un siniestro/hada buenísimo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/861.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/861.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/861.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/861.ogg",
                "cap": "Grimmsnarl, el Pokémon Siniestro",
                "btn": "💥 Forma Gigantamax"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10222.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10222.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10222.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10222.ogg",
                "cap": "Grimmsnarl Gigantamax",
                "btn": "🔄 Volver a Grimmsnarl"
            }
        ]
    },
    {
        "id": 862,
        "nombre": "Obstagoon",
        "tipo": "Siniestro / Normal",
        "desc": "Adopta una pose intimidante en cuanto ve un rival, cruzando los brazos para parecer aún más grande.",
        "fav": "Su actitud de villano ochentero con hombreras lo vuelve instantáneamente memorable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/862.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/862.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/862.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/862.ogg",
                "cap": "Obstagoon, el Pokémon Siniestro"
            }
        ]
    },
    {
        "id": 863,
        "nombre": "Perrserker",
        "tipo": "Acero",
        "desc": "Se cubre la cabeza con el barro y el hierro de las minas de Galar, endureciéndolo como un casco.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/863.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/863.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/863.gif",
                "cap": "Perrserker, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/863.ogg"
            }
        ]
    },
    {
        "id": 864,
        "nombre": "Cursola",
        "tipo": "Fantasma",
        "desc": "El Corsola original murió por el calentamiento del mar y ahora su alma vaga poseyendo su propio caparazón.",
        "fav": "Una historia trágica detrás de un diseño adorable; Cursola es fantasma puro en Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/864.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/864.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/864.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/864.ogg",
                "cap": "Cursola, el Pokémon Fantasma"
            }
        ]
    },
    {
        "id": 865,
        "nombre": "Sirfetch'd",
        "tipo": "Lucha",
        "desc": "Su puerro, afilado como una lanza tras muchas batallas, es también su posesión más preciada.",
        "fav": "El honor samurái de Sirfetch'd y su puerro-lanza son una evolución perfecta de un clásico.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/865.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/865.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/865.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/865.ogg",
                "cap": "Sirfetch'd, el Pokémon Lucha"
            }
        ]
    },
    {
        "id": 866,
        "nombre": "Mr. Rime",
        "tipo": "Hielo / Psíquico",
        "desc": "Combina pasos de baile y comedia para despistar al rival justo antes de atacar con fuerza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/866.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/866.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/866.gif",
                "cap": "Mr. Rime, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/866.ogg"
            }
        ]
    },
    {
        "id": 867,
        "nombre": "Runerigus",
        "tipo": "Tierra / Fantasma",
        "desc": "Guarda el rencor de un Yamask que vio su propio rostro grabado en una losa de piedra hace siglos.",
        "fav": "Su historia inquietante y su diseño de losa maldita lo hacen de los fantasmas más originales de Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/867.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/867.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/867.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/867.ogg",
                "cap": "Runerigus, el Pokémon Tierra"
            }
        ]
    },
    {
        "id": 869,
        "nombre": "Alcremie",
        "tipo": "Hada",
        "desc": "La crema que produce cambia de sabor y aspecto según cómo la agiten al evolucionar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/869.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/869.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/869.gif",
                "cap": "Alcremie, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/869.ogg"
            },
            {
                "cap": "Alcremie Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/alcremie-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/alcremie-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/alcremie-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/alcremie-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 870,
        "nombre": "Falinks",
        "tipo": "Lucha",
        "desc": "Seis pequeñas criaturas se mueven siempre en fila formando un solo cuerpo, luchando como una unidad perfectamente sincronizada.",
        "fav": "Un pequeño ejército de seis Pokémon actuando como uno solo; una idea de diseño brillante y original.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/870.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/870.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/870.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/870.ogg",
                "cap": "Falinks, el Pokémon Formación",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10303.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10303.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10303.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10303.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10303.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10303.png",
                "cap": "Mega-Falinks",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 871,
        "nombre": "Pincurchin",
        "tipo": "Eléctrico",
        "desc": "Sus púas generan corriente eléctrica constante, por lo que nada las toca sin cuidado.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/871.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/871.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/871.gif",
                "cap": "Pincurchin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/871.ogg"
            }
        ]
    },
    {
        "id": 873,
        "nombre": "Frosmoth",
        "tipo": "Hielo / Bicho",
        "desc": "Bate las alas para esparcir escamas heladas que cubren de nieve el bosque cercano.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/873.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/873.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/873.gif",
                "cap": "Frosmoth, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/873.ogg"
            }
        ]
    },
    {
        "id": 874,
        "nombre": "Stonjourner",
        "tipo": "Roca",
        "desc": "Un grupo de ellos formando un círculo puede indicar el cambio de estación en Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/874.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/874.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/874.gif",
                "cap": "Stonjourner, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/874.ogg"
            }
        ]
    },
    {
        "id": 875,
        "nombre": "Eiscue",
        "tipo": "Hielo",
        "desc": "Guarda la cabeza dentro de un bloque de hielo que se rompe al recibir un golpe fuerte.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/875.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/875.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/875.gif",
                "cap": "Eiscue, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/875.ogg"
            }
        ]
    },
    {
        "id": 876,
        "nombre": "Indeedee",
        "tipo": "Normal / Psíquico",
        "desc": "Percibe con claridad lo que su entrenador necesita antes incluso de que lo pida.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/876.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/876.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/876.gif",
                "cap": "Indeedee, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/876.ogg"
            }
        ]
    },
    {
        "id": 877,
        "nombre": "Morpeko",
        "tipo": "Eléctrico / Siniestro",
        "desc": "Su carácter cambia por completo según cuánta comida le quede almacenada en las mejillas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/877.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/877.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/877.gif",
                "cap": "Morpeko, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/877.ogg"
            }
        ]
    },
    {
        "id": 879,
        "nombre": "Copperajah",
        "tipo": "Acero",
        "desc": "Su trompa metálica es tan fuerte que puede doblar el metal de un vagón entero.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/879.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/879.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/879.gif",
                "cap": "Copperajah, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/879.ogg"
            },
            {
                "cap": "Copperajah Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/copperajah-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/copperajah-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/copperajah-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/copperajah-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 880,
        "nombre": "Dracozolt",
        "tipo": "Eléctrico / Dragón",
        "desc": "Fue reconstruido a partir de fósiles antiguos que combinan partes de dos especies distintas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/880.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/880.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/880.gif",
                "cap": "Dracozolt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/880.ogg"
            }
        ]
    },
    {
        "id": 881,
        "nombre": "Arctozolt",
        "tipo": "Eléctrico / Hielo",
        "desc": "Su cuerpo fusiona fósiles de dos eras distintas y apenas puede sostener su propio peso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/881.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/881.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/881.gif",
                "cap": "Arctozolt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/881.ogg"
            }
        ]
    },
    {
        "id": 882,
        "nombre": "Dracovish",
        "tipo": "Agua / Dragón",
        "desc": "Usa su propia cabeza como arma, mordiendo con una fuerza brutal bajo el agua.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/882.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/882.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/882.gif",
                "cap": "Dracovish, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/882.ogg"
            }
        ]
    },
    {
        "id": 883,
        "nombre": "Arctovish",
        "tipo": "Agua / Hielo",
        "desc": "Nadaba en mares helados hace millones de años antes de fosilizarse por completo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/883.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/883.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/883.gif",
                "cap": "Arctovish, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/883.ogg"
            }
        ]
    },
    {
        "id": 884,
        "nombre": "Duraludon",
        "tipo": "Acero / Dragón",
        "desc": "Su cuerpo ligero pero resistente lo hace ideal como base para materiales de construcción.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/884.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/884.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/884.gif",
                "cap": "Duraludon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/884.ogg"
            },
            {
                "cap": "Duraludon Gigantamax",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/duraludon-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/duraludon-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/duraludon-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/duraludon-gmax.gif",
                "btn": "🔄 Revertir Gigantamax"
            }
        ]
    },
    {
        "id": 887,
        "nombre": "Dragapult",
        "tipo": "Dragón / Fantasma",
        "desc": "Lanza a sus pequeños Dreepy desde sus cuernos a velocidad de misil durante la batalla.",
        "fav": "Un dragón sigiloso basado en un jet de combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/887.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/887.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/887.gif",
                "cap": "Dragapult, el Pokémon Sigilo"
            }
        ]
    },
    {
        "id": 888,
        "nombre": "Zacian",
        "tipo": "Hada",
        "desc": "Zacian es un Pokémon legendario conocido como el héroe que empuñó una espada capaz de cortar cualquier cosa.",
        "fav": "Su forma Espada Suprema es una de las transformaciones legendarias más épicas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/888.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/888.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/888.gif",
                "cap": "Zacian, el Pokémon Guerrero",
                "btn": "⚔️ Espada Suprema"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10188.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10188.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10188.gif",
                "cap": "Zacian (Espada Suprema)",
                "btn": "🔄 Forma Guerrero"
            }
        ]
    },
    {
        "id": 889,
        "nombre": "Zamazenta",
        "tipo": "Lucha",
        "desc": "Blandió un escudo legendario para proteger a la gente durante una gran guerra hace muchos siglos.",
        "fav": "El contrapunto perfecto de Zacian: pura defensa y solidez en su diseño de escudo viviente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/889.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/889.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/889.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/889.ogg",
                "cap": "Zamazenta, el Pokémon Lucha",
                "btn": "🔄 Forma Escudo Supremo"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10189.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10189.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10189.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10189.ogg",
                "cap": "Zamazenta Escudo Supremo",
                "btn": "🔄 Volver a Zamazenta"
            }
        ]
    },
    {
        "id": 890,
        "nombre": "Eternatus",
        "tipo": "Veneno / Dragón",
        "desc": "Llegó de un meteorito hace miles de años y es la fuente original de la energía Dinamax en Galar.",
        "fav": "Su escala descomunal y su historia como origen del Dinamax lo hacen el legendario más amenazante de Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/890.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/890.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/890.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/890.ogg",
                "cap": "Eternatus, el Pokémon Veneno",
                "btn": "💥 Eternamax"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10190.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10190.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10190.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10190.ogg",
                "cap": "Eternatus Eternamax",
                "btn": "🔄 Volver a Eternatus"
            }
        ]
    },
    {
        "id": 892,
        "nombre": "Urshifu",
        "tipo": "Lucha / Siniestro",
        "desc": "Entrena en una torre solitaria hasta perfeccionar un estilo de combate único y letal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/892.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/892.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/892.gif",
                "cap": "Urshifu, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/892.ogg"
            },
            {
                "cap": "Urshifu Estilo Lluvia Rauda",
                "btn": "🌊 Ver Estilo Lluvia Rauda",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-rapidstrike.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/urshifu-rapidstrike.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/urshifu-rapidstrike.gif",
                "altura": 1.9,
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-rapidstrike.png",
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike.png"
            },
            {
                "cap": "Urshifu Gigantamax",
                "btn": "💥 Gigantamaxizar",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/urshifu-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/urshifu-gmax.gif",
                "altura": 25,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-gmax.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-gmax.png"
            },
            {
                "cap": "Urshifu Lluvia Rauda Gigantamax",
                "btn": "💥 Gigantamaxizar (Lluvia Rauda)",
                "png": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike-gmax.png",
                "pngShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-rapidstrike-gmax.png",
                "gif": "https://play.pokemonshowdown.com/sprites/ani/urshifu-rapidstrike-gmax.gif",
                "gifShiny": "https://play.pokemonshowdown.com/sprites/ani-shiny/urshifu-rapidstrike-gmax.gif",
                "altura": 25,
                "oficial": "https://play.pokemonshowdown.com/sprites/gen5/urshifu-rapidstrike-gmax.png",
                "oficialShiny": "https://play.pokemonshowdown.com/sprites/gen5-shiny/urshifu-rapidstrike-gmax.png"
            }
        ]
    },
    {
        "id": 893,
        "nombre": "Zarude",
        "tipo": "Planta / Siniestro",
        "desc": "Vive en manadas alejadas de los humanos y protege ferozmente a las crías del grupo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/893.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/893.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/893.gif",
                "cap": "Zarude, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/893.ogg"
            }
        ]
    },
    {
        "id": 894,
        "nombre": "Regieleki",
        "tipo": "Eléctrico",
        "desc": "Almacena más electricidad que ninguna central eléctrica jamás construida por el ser humano.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/894.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/894.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/894.gif",
                "cap": "Regieleki, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/894.ogg"
            }
        ]
    },
    {
        "id": 895,
        "nombre": "Regidrago",
        "tipo": "Dragón",
        "desc": "Su cuerpo está compuesto por energía dracónica concentrada y posee una enorme fuerza relacionada con ese tipo.",
        "fav": "Su diseño parece construido a partir de la esencia de un dragón y tiene una presencia brutal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/895.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/895.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/895.gif",
                "cap": "Regidrago, el Pokémon Dragón"
            }
        ]
    },
    {
        "id": 896,
        "nombre": "Glastrier",
        "tipo": "Hielo",
        "desc": "Su aliento es tan frío que congela todo a su paso, y galopa con una fuerza capaz de partir rocas.",
        "fav": "Un corcel de hielo salvaje y brutal; perfecto para representar el lado más frío de Corona.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/896.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/896.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/896.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/896.ogg",
                "cap": "Glastrier, el Pokémon Hielo"
            }
        ]
    },
    {
        "id": 897,
        "nombre": "Spectrier",
        "tipo": "Fantasma",
        "desc": "Se desliza en silencio absoluto por la noche, y se dice que roba la vida de quienes se cruzan en su camino.",
        "fav": "Su crin espectral y su sigilo lo hacen el corcel más inquietante de todo Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/897.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/897.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/897.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/897.ogg",
                "cap": "Spectrier, el Pokémon Fantasma"
            }
        ]
    },
    {
        "id": 898,
        "nombre": "Calyrex",
        "tipo": "Psíquico / Planta",
        "desc": "Gobernó Corona hace mucho tiempo, y puede unirse a un corcel para cabalgar sobre hielo o sobre sombras.",
        "fav": "El rey de Corona combinando planta y psíquico es de las ideas más originales de Galar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/898.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/898.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/898.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/898.ogg",
                "cap": "Calyrex, el Pokémon Psíquico"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10193.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10193.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10193.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10193.ogg",
                "cap": "Calyrex Jinete Glaciar",
                "btn": "🔄 Jinete Espectral"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10194.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10194.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10194.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10194.ogg",
                "cap": "Calyrex Jinete Espectral",
                "btn": "🔄 Volver a Calyrex"
            }
        ]
    },
    {
        "id": 899,
        "nombre": "Wyrdeer",
        "tipo": "Normal / Psíquico",
        "desc": "Absorbió tanta energía mística de la región de Hisui que ahora puede teletransportarse a corta distancia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/899.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/899.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/899.gif",
                "cap": "Wyrdeer, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/899.ogg"
            }
        ]
    },
    {
        "id": 900,
        "nombre": "Kleavor",
        "tipo": "Bicho / Roca",
        "desc": "Sus hoces de piedra son tan filosas que puede talar árboles enteros de un solo tajo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/900.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/900.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/900.gif",
                "cap": "Kleavor, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/900.ogg"
            }
        ]
    },
    {
        "id": 901,
        "nombre": "Ursaluna",
        "tipo": "Tierra / Normal",
        "desc": "Se revuelca en el barro de un pantano especial de Hisui hasta absorber una energía ancestral.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/901.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/901.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/901.gif",
                "cap": "Ursaluna, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/901.ogg"
            }
        ]
    },
    {
        "id": 902,
        "nombre": "Basculegion",
        "tipo": "Agua / Fantasma",
        "desc": "Nace cuando un Basculin sobrevive a una travesía extrema absorbiendo el rencor de otros caídos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/902.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/902.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/902.gif",
                "cap": "Basculegion, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/902.ogg"
            }
        ]
    },
    {
        "id": 903,
        "nombre": "Sneasler",
        "tipo": "Lucha / Veneno",
        "desc": "Trepa paredes verticales sin esfuerzo gracias a las garras venenosas de sus pulgares.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/903.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/903.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/903.gif",
                "cap": "Sneasler, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/903.ogg"
            }
        ]
    },
    {
        "id": 904,
        "nombre": "Overqwil",
        "tipo": "Siniestro / Veneno",
        "desc": "Clava sus púas venenosas en el fondo marino y espera inmóvil a que la presa se acerque.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/904.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/904.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/904.gif",
                "cap": "Overqwil, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/904.ogg"
            }
        ]
    },
    {
        "id": 906,
        "nombre": "Sprigatito",
        "tipo": "Planta",
        "desc": "Su pelaje desprende un aroma dulce cuando recibe luz solar y es muy afectuoso con quienes lo cuidan.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/906.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/906.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/906.gif",
                "cap": "Sprigatito, el Pokémon Gato Planta"
            }
        ]
    },
    {
        "id": 908,
        "nombre": "Meowscarada",
        "tipo": "Planta / Siniestro",
        "desc": "Usa el poder de sus flores ocultas para crear ilusiones y distraer a sus rivales.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/908.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/908.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/908.gif",
                "cap": "Meowscarada, el Pokémon Mago"
            }
        ]
    },
    {
        "id": 909,
        "nombre": "Fuecoco",
        "tipo": "Fuego",
        "desc": "La energía térmica de una roca de fuego sobre su cabeza hace que desprenda calor continuamente.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/909.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/909.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/909.gif",
                "cap": "Fuecoco, el Pokémon Fuegodrilo"
            }
        ]
    },
    {
        "id": 911,
        "nombre": "Skeledirge",
        "tipo": "Fuego / Fantasma",
        "desc": "Su voz transforma la llama de su cuerpo en una melodía capaz de cambiar el ánimo de quien la escucha.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/911.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/911.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/911.gif",
                "cap": "Skeledirge, el Pokémon Cantante"
            }
        ]
    },
    {
        "id": 912,
        "nombre": "Quaxly",
        "tipo": "Agua",
        "desc": "Su plumaje siempre está impecablemente arreglado gracias al gel que produce de forma natural.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/912.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/912.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/912.gif",
                "cap": "Quaxly, el Pokémon Patito"
            }
        ]
    },
    {
        "id": 914,
        "nombre": "Quaquaval",
        "tipo": "Agua / Lucha",
        "desc": "Sus movimientos de baile combinan pasos elegantes con ataques de piernas extremadamente potentes.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/914.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/914.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/914.gif",
                "cap": "Quaquaval, el Pokémon Bailarín"
            }
        ]
    },
    {
        "id": 916,
        "nombre": "Oinkologne",
        "tipo": "Normal",
        "desc": "Su olor corporal es tan intenso y particular que cada ejemplar tiene uno completamente distinto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/916.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/916.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/916.gif",
                "cap": "Oinkologne, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/916.ogg"
            }
        ]
    },
    {
        "id": 918,
        "nombre": "Spidops",
        "tipo": "Bicho",
        "desc": "Tiende trampas de seda camufladas entre las hojas para atrapar a quien pase cerca.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/918.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/918.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/918.gif",
                "cap": "Spidops, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/918.ogg"
            }
        ]
    },
    {
        "id": 920,
        "nombre": "Lokix",
        "tipo": "Bicho / Siniestro",
        "desc": "Salta grandes distancias con sus patas traseras antes de golpear sin previo aviso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/920.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/920.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/920.gif",
                "cap": "Lokix, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/920.ogg"
            }
        ]
    },
    {
        "id": 923,
        "nombre": "Pawmot",
        "tipo": "Eléctrico / Lucha",
        "desc": "Genera electricidad frotando las bolsas de sus patas antes de un combate cuerpo a cuerpo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/923.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/923.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/923.gif",
                "cap": "Pawmot, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/923.ogg"
            }
        ]
    },
    {
        "id": 925,
        "nombre": "Maushold",
        "tipo": "Normal",
        "desc": "Vive en familia numerosa y se organiza para defender juntos su madriguera.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/925.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/925.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/925.gif",
                "cap": "Maushold, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/925.ogg"
            }
        ]
    },
    {
        "id": 927,
        "nombre": "Dachsbun",
        "tipo": "Hada",
        "desc": "La masa horneada de su lomo se endurece con el tiempo hasta volverse muy crujiente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/927.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/927.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/927.gif",
                "cap": "Dachsbun, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/927.ogg"
            }
        ]
    },
    {
        "id": 930,
        "nombre": "Arboliva",
        "tipo": "Planta / Normal",
        "desc": "Su aroma a aceite de oliva se intensifica cuanto más tiempo lleva creciendo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/930.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/930.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/930.gif",
                "cap": "Arboliva, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/930.ogg"
            }
        ]
    },
    {
        "id": 931,
        "nombre": "Squawkabilly",
        "tipo": "Normal / Volador",
        "desc": "Grita con tanta fuerza que puede espantar a un grupo entero de rivales de un golpe.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/931.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/931.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/931.gif",
                "cap": "Squawkabilly, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/931.ogg"
            }
        ]
    },
    {
        "id": 934,
        "nombre": "Garganacl",
        "tipo": "Roca",
        "desc": "Su cuerpo está hecho de sal endurecida y puede purificar el agua a su alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/934.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/934.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/934.gif",
                "cap": "Garganacl, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/934.ogg"
            }
        ]
    },
    {
        "id": 936,
        "nombre": "Armarouge",
        "tipo": "Fuego / Psíquico",
        "desc": "Cuando Charcadet recibe la Armadura Auspiciosa, logra evolucionar a Armarouge, potenciando sus habilidades psíquicas e ígneas y siendo tan leal a su entrenador como un caballero a su rey.",
        "fav": "Desde los primeros vistazos a Pokémon Escarlata y Púrpura me enamoré de su diseño, aparte fue mi primer Mejor Compañero en Pokémon GO.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/936.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/936.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/936.gif",
                "cap": "Armarouge, el Pokémon Armadura Ígnea"
            }
        ]
    },
    {
        "id": 937,
        "nombre": "Ceruledge",
        "tipo": "Fuego / Fantasma",
        "desc": "Blandiendo espadas compuestas de llamas espirituales y resentimiento, deja heridas que drenan la vida.",
        "fav": "El contrapunto perfecto a Armarouge con estilo de espadachín oscuro.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/937.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/937.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/937.gif",
                "cap": "Ceruledge, el Pokémon Espada Ígnea"
            }
        ]
    },
    {
        "id": 939,
        "nombre": "Bellibolt",
        "tipo": "Eléctrico",
        "desc": "Infla su vientre como una batería y genera descargas con solo tocar el suelo húmedo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/939.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/939.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/939.gif",
                "cap": "Bellibolt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/939.ogg"
            }
        ]
    },
    {
        "id": 941,
        "nombre": "Kilowattrel",
        "tipo": "Eléctrico / Volador",
        "desc": "Planea largas distancias sobre el mar generando electricidad estática con cada aleteo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/941.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/941.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/941.gif",
                "cap": "Kilowattrel, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/941.ogg"
            }
        ]
    },
    {
        "id": 943,
        "nombre": "Mabosstiff",
        "tipo": "Siniestro",
        "desc": "Lidera manadas completas y no retrocede jamás frente a un rival más grande.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/943.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/943.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/943.gif",
                "cap": "Mabosstiff, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/943.ogg"
            }
        ]
    },
    {
        "id": 945,
        "nombre": "Grafaiai",
        "tipo": "Veneno / Normal",
        "desc": "Pinta marcas venenosas en árboles con los dedos para reclamar su territorio de caza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/945.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/945.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/945.gif",
                "cap": "Grafaiai, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/945.ogg"
            }
        ]
    },
    {
        "id": 947,
        "nombre": "Brambleghast",
        "tipo": "Planta / Fantasma",
        "desc": "Rueda empujado por el viento arrastrando consigo cualquier objeto que se le enrede.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/947.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/947.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/947.gif",
                "cap": "Brambleghast, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/947.ogg"
            }
        ]
    },
    {
        "id": 949,
        "nombre": "Toedscruel",
        "tipo": "Tierra / Bicho",
        "desc": "Camina en silencio total gracias a las esporas que amortiguan cada uno de sus pasos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/949.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/949.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/949.gif",
                "cap": "Toedscruel, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/949.ogg"
            }
        ]
    },
    {
        "id": 950,
        "nombre": "Klawf",
        "tipo": "Roca",
        "desc": "Trepa acantilados con sus enormes pinzas y se lanza en picada sobre su presa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/950.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/950.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/950.gif",
                "cap": "Klawf, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/950.ogg"
            }
        ]
    },
    {
        "id": 952,
        "nombre": "Scovillain",
        "tipo": "Planta / Fuego",
        "desc": "Sus dos cabezas de chile discuten constantemente entre ellas, y su aroma picante puede hacer llorar a quien se acerque demasiado.",
        "fav": "Sus dos caras de chile picante peleando entre sí le dan una personalidad muy divertida.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/952.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/952.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/952.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/952.ogg",
                "cap": "Scovillain, el Pokémon Especias",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10320.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10320.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10320.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10320.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10320.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10320.png",
                "cap": "Mega-Scovillain",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 954,
        "nombre": "Rabsca",
        "tipo": "Bicho / Psíquico",
        "desc": "Carga sobre la espalda un escarabajo dorado que en realidad controla sus movimientos.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/954.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/954.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/954.gif",
                "cap": "Rabsca, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/954.ogg"
            }
        ]
    },
    {
        "id": 956,
        "nombre": "Espathra",
        "tipo": "Psíquico",
        "desc": "Permanece inmóvil de día para conservar energía y libera todo su poder psíquico de noche.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/956.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/956.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/956.gif",
                "cap": "Espathra, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/956.ogg"
            }
        ]
    },
    {
        "id": 959,
        "nombre": "Tinkaton",
        "tipo": "Hada / Acero",
        "desc": "Usa su martillo de más de 100 kg para golpear rocas hacia el cielo apuntando a los Corviknight.",
        "fav": "Una criatura pequeña con un martillo gigante y mucha personalidad.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/959.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/959.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/959.gif",
                "cap": "Tinkaton, el Pokémon Martillo"
            }
        ]
    },
    {
        "id": 961,
        "nombre": "Wugtrio",
        "tipo": "Agua",
        "desc": "Sus tres cabezas en realidad son la punta de un cuerpo muchísimo más largo bajo tierra.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/961.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/961.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/961.gif",
                "cap": "Wugtrio, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/961.ogg"
            }
        ]
    },
    {
        "id": 962,
        "nombre": "Bombirdier",
        "tipo": "Volador / Siniestro",
        "desc": "Recolecta objetos brillantes y los deja caer desde el aire sobre quien lo moleste.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/962.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/962.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/962.gif",
                "cap": "Bombirdier, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/962.ogg"
            }
        ]
    },
    {
        "id": 964,
        "nombre": "Palafin",
        "tipo": "Agua",
        "desc": "Se transforma por completo en combate, revelando una fuerza que nadie esperaba de él.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/964.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/964.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/964.gif",
                "cap": "Palafin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/964.ogg"
            }
        ]
    },
    {
        "id": 966,
        "nombre": "Revavroom",
        "tipo": "Veneno / Acero",
        "desc": "Su motor interno ruge con tanta fuerza que suena como un vehículo acelerando a fondo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/966.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/966.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/966.gif",
                "cap": "Revavroom, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/966.ogg"
            }
        ]
    },
    {
        "id": 967,
        "nombre": "Cyclizar",
        "tipo": "Dragón / Normal",
        "desc": "Entrenadores enteros lo usan como montura gracias a la velocidad constante que mantiene.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/967.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/967.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/967.gif",
                "cap": "Cyclizar, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/967.ogg"
            }
        ]
    },
    {
        "id": 968,
        "nombre": "Orthworm",
        "tipo": "Acero",
        "desc": "Se desliza bajo tierra dejando túneles de metal pulido a su paso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/968.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/968.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/968.gif",
                "cap": "Orthworm, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/968.ogg"
            }
        ]
    },
    {
        "id": 970,
        "nombre": "Glimmora",
        "tipo": "Roca / Veneno",
        "desc": "Entierra semillas tóxicas bajo tierra que después detona a distancia; sus cristales brillantes ocultan un veneno letal.",
        "fav": "Sus cristales luminosos y su capacidad de detonar semillas tóxicas le dan un aire peligroso y llamativo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/970.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/970.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/970.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/970.ogg",
                "cap": "Glimmora, el Pokémon Detonación",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10321.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10321.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10321.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10321.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10321.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10321.png",
                "cap": "Mega-Glimmora",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 972,
        "nombre": "Houndstone",
        "tipo": "Fantasma",
        "desc": "Se dice que es el espíritu leal de un perro que sigue esperando a su antiguo dueño.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/972.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/972.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/972.gif",
                "cap": "Houndstone, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/972.ogg"
            }
        ]
    },
    {
        "id": 973,
        "nombre": "Flamigo",
        "tipo": "Volador / Lucha",
        "desc": "Ataca dando patadas mientras se mantiene en perfecto equilibrio sobre una sola pata.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/973.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/973.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/973.gif",
                "cap": "Flamigo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/973.ogg"
            }
        ]
    },
    {
        "id": 975,
        "nombre": "Cetitan",
        "tipo": "Hielo",
        "desc": "Empuja bloques de hielo enormes con la cabeza solo para entrenar su propia fuerza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/975.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/975.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/975.gif",
                "cap": "Cetitan, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/975.ogg"
            }
        ]
    },
    {
        "id": 976,
        "nombre": "Veluza",
        "tipo": "Agua / Psíquico",
        "desc": "Se desliza fuera del agua para atacar y regresa de inmediato antes de secarse.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/976.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/976.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/976.gif",
                "cap": "Veluza, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/976.ogg"
            }
        ]
    },
    {
        "id": 977,
        "nombre": "Dondozo",
        "tipo": "Agua",
        "desc": "A pesar de su tamaño gigantesco, es un Pokémon tranquilo que rara vez busca pelea.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/977.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/977.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/977.gif",
                "cap": "Dondozo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/977.ogg"
            }
        ]
    },
    {
        "id": 978,
        "nombre": "Tatsugiri",
        "tipo": "Dragón / Agua",
        "desc": "Vive escondido dentro de la boca de un Cargols, y su forma cambia según su personalidad: Curiosa, Altiva o Traviesa.",
        "fav": "Su relación simbiótica con Cargols y sus tres formas de personalidad son una idea encantadora.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/978.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/978.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/978.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/978.ogg",
                "cap": "Tatsugiri (Curiosa), el Pokémon Mímico",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10322.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10322.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10322.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10322.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10322.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10322.png",
                "cap": "Mega-Tatsugiri (Curiosa)",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 979,
        "nombre": "Annihilape",
        "tipo": "Lucha / Fantasma",
        "desc": "Tanto rencor acumulado terminó por transformarlo en un espíritu furioso casi imparable.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/979.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/979.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/979.gif",
                "cap": "Annihilape, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/979.ogg"
            }
        ]
    },
    {
        "id": 980,
        "nombre": "Clodsire",
        "tipo": "Veneno / Tierra",
        "desc": "Se mantiene inmóvil durante horas, algo que muchos confunden con simple pereza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/980.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/980.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/980.gif",
                "cap": "Clodsire, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/980.ogg"
            }
        ]
    },
    {
        "id": 981,
        "nombre": "Farigiraf",
        "tipo": "Normal / Psíquico",
        "desc": "Su cuello alarga tanto la distancia entre el cuerpo y la cabeza que los pensamientos tardan en llegar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/981.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/981.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/981.gif",
                "cap": "Farigiraf, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/981.ogg"
            }
        ]
    },
    {
        "id": 982,
        "nombre": "Dudunsparce",
        "tipo": "Normal",
        "desc": "Su cuerpo puede llegar a medir varios metros, aunque solo se le vea la mitad fuera de la madriguera.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/982.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/982.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/982.gif",
                "cap": "Dudunsparce, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/982.ogg"
            }
        ]
    },
    {
        "id": 983,
        "nombre": "Kingambit",
        "tipo": "Siniestro / Acero",
        "desc": "Se sienta sobre una gran hoja metálica y dirige a sus seguidores desde la retaguardia del combate.",
        "fav": "",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/983.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/983.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/983.gif",
                "cap": "Kingambit, el Pokémon Gran Cuchilla"
            }
        ]
    },
    {
        "id": 984,
        "nombre": "Great Tusk",
        "tipo": "Tierra / Lucha",
        "desc": "Una versión ancestral y feroz de un Pokémon conocido, llegada desde un pasado distante.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/984.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/984.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/984.gif",
                "cap": "Great Tusk, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/984.ogg"
            }
        ]
    },
    {
        "id": 985,
        "nombre": "Scream Tail",
        "tipo": "Hada / Psíquico",
        "desc": "Su grito agudo paraliza momentáneamente a cualquiera que lo escuche de cerca.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/985.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/985.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/985.gif",
                "cap": "Scream Tail, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/985.ogg"
            }
        ]
    },
    {
        "id": 986,
        "nombre": "Brute Bonnet",
        "tipo": "Planta / Veneno",
        "desc": "Arranca setas venenosas del suelo y las usa como garras improvisadas para atacar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/986.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/986.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/986.gif",
                "cap": "Brute Bonnet, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/986.ogg"
            }
        ]
    },
    {
        "id": 987,
        "nombre": "Flutter Mane",
        "tipo": "Fantasma / Dragón",
        "desc": "Su cabello parece formado por energía pura que fluctúa sin parar mientras flota.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/987.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/987.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/987.gif",
                "cap": "Flutter Mane, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/987.ogg"
            }
        ]
    },
    {
        "id": 988,
        "nombre": "Slither Wing",
        "tipo": "Bicho / Lucha",
        "desc": "A pesar de sus alas rotas, avanza arrastrándose con una fuerza bruta sorprendente.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/988.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/988.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/988.gif",
                "cap": "Slither Wing, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/988.ogg"
            }
        ]
    },
    {
        "id": 989,
        "nombre": "Sandy Shocks",
        "tipo": "Eléctrico / Tierra",
        "desc": "Genera tanta estática al moverse que oxida el metal a su alrededor con rapidez.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/989.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/989.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/989.gif",
                "cap": "Sandy Shocks, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/989.ogg"
            }
        ]
    },
    {
        "id": 990,
        "nombre": "Iron Treads",
        "tipo": "Tierra / Acero",
        "desc": "Una versión mecánica y futurista que avanza sobre ruedas dentadas de metal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/990.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/990.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/990.gif",
                "cap": "Iron Treads, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/990.ogg"
            }
        ]
    },
    {
        "id": 991,
        "nombre": "Iron Bundle",
        "tipo": "Hielo / Agua",
        "desc": "Su superficie helada nunca se derrite, sin importar cuánto se esfuerce en combate.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/991.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/991.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/991.gif",
                "cap": "Iron Bundle, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/991.ogg"
            }
        ]
    },
    {
        "id": 992,
        "nombre": "Iron Hands",
        "tipo": "Lucha / Eléctrico",
        "desc": "Sus enormes puños mecánicos golpean con una fuerza descomunal y descargas eléctricas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/992.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/992.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/992.gif",
                "cap": "Iron Hands, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/992.ogg"
            }
        ]
    },
    {
        "id": 993,
        "nombre": "Iron Jugulis",
        "tipo": "Siniestro / Volador",
        "desc": "Vuela emitiendo un rugido metálico que parece salido de una máquina antigua.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/993.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/993.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/993.gif",
                "cap": "Iron Jugulis, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/993.ogg"
            }
        ]
    },
    {
        "id": 994,
        "nombre": "Iron Moth",
        "tipo": "Fuego / Veneno",
        "desc": "Libera esporas tóxicas en llamas desde sus alas artificiales al volar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/994.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/994.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/994.gif",
                "cap": "Iron Moth, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/994.ogg"
            }
        ]
    },
    {
        "id": 995,
        "nombre": "Iron Thorns",
        "tipo": "Roca / Eléctrico",
        "desc": "Su cuerpo mecánico está cubierto de púas que generan descargas al contacto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/995.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/995.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/995.gif",
                "cap": "Iron Thorns, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/995.ogg"
            }
        ]
    },
    {
        "id": 998,
        "nombre": "Baxcalibur",
        "tipo": "Dragón / Hielo",
        "desc": "El hielo de sus colmillos y su cuerno puede cortar el acero, y sus escamas soportan temperaturas extremadamente bajas.",
        "fav": "El dragón de hielo final de Paldea; su diseño de vikingo escamoso es tan imponente como su fuerza.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/998.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/998.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/998.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/998.ogg",
                "cap": "Baxcalibur, el Pokémon Dragón Helado",
                "btn": "🌟 Megaevolucionar"
            },
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10325.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10325.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10325.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10325.png",
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10325.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10325.png",
                "cap": "Mega-Baxcalibur",
                "btn": "🔄 Forma Base"
            }
        ]
    },
    {
        "id": 1000,
        "nombre": "Gholdengo",
        "tipo": "Acero / Fantasma",
        "desc": "Se dice que puede conceder fortuna, ya que su cuerpo está hecho de monedas antiguas fusionadas.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1000.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1000.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1000.gif",
                "cap": "Gholdengo, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1000.ogg"
            }
        ]
    },
    {
        "id": 1001,
        "nombre": "Wo-Chien",
        "tipo": "Siniestro / Planta",
        "desc": "Arrastra una vasija encadenada que, según la leyenda, ensucia el agua allá donde pasa.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1001.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1001.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1001.gif",
                "cap": "Wo-Chien, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1001.ogg"
            }
        ]
    },
    {
        "id": 1002,
        "nombre": "Chien-Pao",
        "tipo": "Siniestro / Hielo",
        "desc": "Sus colmillos helados pueden congelar de un tajo a cualquier rival desprevenido.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1002.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1002.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1002.gif",
                "cap": "Chien-Pao, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1002.ogg"
            }
        ]
    },
    {
        "id": 1003,
        "nombre": "Ting-Lu",
        "tipo": "Tierra / Siniestro",
        "desc": "Carga un enorme altar sobre el lomo que, según la leyenda, provoca hambrunas si se enfurece.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1003.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1003.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1003.gif",
                "cap": "Ting-Lu, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1003.ogg"
            }
        ]
    },
    {
        "id": 1004,
        "nombre": "Chi-Yu",
        "tipo": "Fuego / Siniestro",
        "desc": "Sus llamas pueden quemar el corazón de quien lo mire directamente a los ojos, según la leyenda.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1004.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1004.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1004.gif",
                "cap": "Chi-Yu, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1004.ogg"
            }
        ]
    },
    {
        "id": 1005,
        "nombre": "Roaring Moon",
        "tipo": "Dragón / Siniestro",
        "desc": "Una versión ancestral y salvaje de un dragón conocido, llegada de un futuro distinto.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1005.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1005.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1005.gif",
                "cap": "Roaring Moon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1005.ogg"
            }
        ]
    },
    {
        "id": 1006,
        "nombre": "Iron Valiant",
        "tipo": "Hada / Lucha",
        "desc": "Una réplica mecánica que combina la elegancia y la furia de dos guerreros legendarios.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1006.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1006.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1006.gif",
                "cap": "Iron Valiant, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1006.ogg"
            }
        ]
    },
    {
        "id": 1007,
        "nombre": "Koraidon",
        "tipo": "Lucha / Dragón",
        "desc": "Corre por tierra, mar y aire con una energía descomunal, y se dice que vivió hace millones de años.",
        "fav": "Su diseño feroz de bestia prehistórica combina perfectamente con la aventura de Paldea.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1007.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1007.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1007.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1007.ogg",
                "cap": "Koraidon, el Pokémon Lucha"
            }
        ]
    },
    {
        "id": 1008,
        "nombre": "Miraidon",
        "tipo": "Eléctrico / Dragón",
        "desc": "Emite electricidad de alta tensión por su cuerpo y es capaz de convertirse en una moto para desplazarse.",
        "fav": "La contraparte tecnológica de Koraidon, con ese aspecto futurista tan llamativo.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1008.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1008.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1008.gif",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1008.ogg",
                "cap": "Miraidon, el Pokémon Eléctrico"
            }
        ]
    },
    {
        "id": 1009,
        "nombre": "Walking Wake",
        "tipo": "Agua / Dragón",
        "desc": "Arrastra consigo el eco de mares antiguos con cada paso que da.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1009.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1009.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1009.gif",
                "cap": "Walking Wake, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1009.ogg"
            }
        ]
    },
    {
        "id": 1010,
        "nombre": "Iron Leaves",
        "tipo": "Planta / Eléctrico",
        "desc": "Sus hojas metálicas cortan como espadas cargadas de electricidad estática.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1010.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1010.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1010.gif",
                "cap": "Iron Leaves, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1010.ogg"
            }
        ]
    },
    {
        "id": 1011,
        "nombre": "Dipplin",
        "tipo": "Planta / Dragón",
        "desc": "Su cáscara está bañada en un almíbar tan dulce que atrae Pokémon de todo Kitakami.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1011.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1011.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1011.gif",
                "cap": "Dipplin, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1011.ogg"
            }
        ]
    },
    {
        "id": 1013,
        "nombre": "Sinistcha",
        "tipo": "Planta / Fantasma",
        "desc": "Una taza de té olvidada durante siglos que terminó por cobrar vida propia.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1013.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1013.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1013.gif",
                "cap": "Sinistcha, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1013.ogg"
            }
        ]
    },
    {
        "id": 1014,
        "nombre": "Okidogi",
        "tipo": "Veneno / Lucha",
        "desc": "Uno de los tres leales guerreros que protegen con devoción a la Reina de Kitakami.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1014.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1014.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1014.gif",
                "cap": "Okidogi, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1014.ogg"
            }
        ]
    },
    {
        "id": 1015,
        "nombre": "Munkidori",
        "tipo": "Veneno / Psíquico",
        "desc": "Manipula la mente de otros con sus poderes psíquicos, a pesar de su apariencia tranquila.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1015.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1015.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1015.gif",
                "cap": "Munkidori, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1015.ogg"
            }
        ]
    },
    {
        "id": 1016,
        "nombre": "Fezandipiti",
        "tipo": "Veneno / Hada",
        "desc": "Reparte tanto fortuna como mala suerte según el humor con que se despierte.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1016.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1016.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1016.gif",
                "cap": "Fezandipiti, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1016.ogg"
            }
        ]
    },
    {
        "id": 1017,
        "nombre": "Ogerpon",
        "tipo": "Planta",
        "desc": "Lleva una máscara antigua que, según la leyenda, la protegía de los invasores de su tierra.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1017.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1017.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1017.gif",
                "cap": "Ogerpon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1017.ogg"
            },
            {
                "cap": "Ogerpon Máscara del Pozo",
                "btn": "💧 Ver Máscara del Pozo",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10273.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10273.png",
                "altura": 1.2,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10273.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10273.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10273.ogg"
            },
            {
                "cap": "Ogerpon Máscara del Hogar",
                "btn": "🔥 Ver Máscara del Hogar",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10274.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10274.png",
                "altura": 1.2,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10274.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10274.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10274.ogg"
            },
            {
                "cap": "Ogerpon Máscara del Cimiento",
                "btn": "🪨 Ver Máscara del Cimiento",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10275.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10275.png",
                "altura": 1.2,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10275.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10275.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10275.ogg"
            }
        ]
    },
    {
        "id": 1018,
        "nombre": "Archaludon",
        "tipo": "Acero / Dragón",
        "desc": "Su cuerpo funciona como un puente viviente capaz de soportar un peso enorme.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1018.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1018.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1018.gif",
                "cap": "Archaludon, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1018.ogg"
            }
        ]
    },
    {
        "id": 1019,
        "nombre": "Hydrapple",
        "tipo": "Planta / Dragón",
        "desc": "El almíbar de su cuerpo fermentó tanto que ahora libera una energía dracónica única.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1019.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1019.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1019.gif",
                "cap": "Hydrapple, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1019.ogg"
            }
        ]
    },
    {
        "id": 1020,
        "nombre": "Gouging Fire",
        "tipo": "Fuego / Dragón",
        "desc": "Una bestia ancestral que embiste dejando un rastro de fuego abrasador a su paso.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1020.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1020.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1020.gif",
                "cap": "Gouging Fire, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1020.ogg"
            }
        ]
    },
    {
        "id": 1021,
        "nombre": "Raging Bolt",
        "tipo": "Eléctrico / Dragón",
        "desc": "Acumula tanta energía eléctrica en su melena que el aire chisporrotea a su alrededor.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1021.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1021.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1021.gif",
                "cap": "Raging Bolt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1021.ogg"
            }
        ]
    },
    {
        "id": 1022,
        "nombre": "Iron Boulder",
        "tipo": "Roca / Lucha",
        "desc": "Una réplica mecánica que salta entre montañas con una fuerza bruta descomunal.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1022.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1022.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1022.gif",
                "cap": "Iron Boulder, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1022.ogg"
            }
        ]
    },
    {
        "id": 1023,
        "nombre": "Iron Crown",
        "tipo": "Acero / Psíquico",
        "desc": "Analiza a su rival con sensores psíquicos antes de decidir cómo atacar.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1023.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1023.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1023.gif",
                "cap": "Iron Crown, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1023.ogg"
            }
        ]
    },
    {
        "id": 1024,
        "nombre": "Terapagos",
        "tipo": "Normal",
        "desc": "Guarda en su interior el origen mismo del fenómeno Teracristal de Paldea.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1024.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1024.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1024.gif",
                "cap": "Terapagos, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1024.ogg"
            },
            {
                "cap": "Terapagos Forma Teracristal",
                "btn": "💎 Ver Forma Teracristal",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10276.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10276.png",
                "altura": 0.3,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10276.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/10276.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10276.ogg"
            },
            {
                "cap": "Terapagos Forma Astral",
                "btn": "🌟 Ver Forma Astral",
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10277.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10277.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10277.png",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10277.png",
                "altura": 1.7,
                "oficial": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10277.png",
                "oficialShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10277.png",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10277.ogg"
            }
        ]
    },
    {
        "id": 1025,
        "nombre": "Pecharunt",
        "tipo": "Veneno / Fantasma",
        "desc": "Reparte pociones misteriosas que pueden curar o envenenar, según su propio capricho.",
        "formas": [
            {
                "png": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
                "pngShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1025.png",
                "gif": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1025.gif",
                "gifShiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1025.gif",
                "cap": "Pecharunt, el Pokémon",
                "grito": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1025.ogg"
            }
        ]
    }
];

    // Mantener toda la Pokédex ordenada por número nacional, incluidas las nuevas entradas.
    pokemonData.sort((a,b) => Number(a.id) - Number(b.id));
