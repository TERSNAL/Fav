// =========================================================
// ✨ PARTÍCULAS EN MOVIMIENTO LIBRE
// 1) Fondos legendarios (.fondo-legendario-dinamico): partículas propias
//    de cada legendario (Dialga, Kyogre, Mewtwo...).
// 2) Partículas por TIPO PRINCIPAL (.fondo-tipo-particulas.tipo-<tipo>):
//    los demás Pokémon muestran, dentro de su marco, partículas que
//    representan su tipo principal (nunca el secundario).
// Cada fondo recibe un <canvas> con
// partículas que vagan libremente (rumbo aleatorio suave, parpadeo y
// envoltura en los bordes). El estilo y los colores dependen de la clase
// del fondo (y de su variante de forma: fondo-var-*), así que se adaptan
// solos al cambiar de forma.
// =========================================================
(function () {
    'use strict';

    const reducirMovimiento = window.matchMedia
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // colores: paleta (hex de 6 dígitos) · cantidad · tam: radio [min,max] ·
    // vel: velocidad [min,max] · deriva: sesgo [x,y] · giro: cuánto cambia el
    // rumbo · estilo: uno o varios estilos de dibujo · variantes: paletas por forma.
    const TEMAS = {
        // ---- primera tanda ----
        'fondo-dialga':   { colores: ['#bfe6ff', '#6fc3ff', '#ffffff'], cantidad: 44, tam: [1.2, 3.2], vel: [.10, .38], deriva: [0, 0],    giro: .05, estilo: 'destello' },
        'fondo-palkia':   { colores: ['#ffb3e6', '#ff6fbf', '#ffd9f4'], cantidad: 40, tam: [1.5, 4.2], vel: [.08, .32], deriva: [0, 0],    giro: .04, estilo: 'perla' },
        'fondo-giratina': { colores: ['#c084ff', '#8a3ffc', '#e6c2ff'], cantidad: 38, tam: [1.8, 5.5], vel: [.08, .30], deriva: [0, -.04], giro: .07, estilo: 'niebla' },
        'fondo-kyogre': {
            colores: ['#9be7ff', '#3fb7ff', '#e4f8ff'], cantidad: 42, tam: [1.6, 6],   vel: [.10, .34], deriva: [0, -.22], giro: .05,
            estilo: 'burbuja',
            // 🌀 Primigenio: el maremoto arrastra chispas eléctricas y espuma violenta.
            variantes: {
                primal: { colores: ['#eafcff', '#39e7ff', '#0a3fae', '#7a4fff'], cantidad: 64, tam: [1.4, 5.5], vel: [.28, .95], deriva: [0, -.5], giro: .12, estilo: ['burbuja', 'burbuja', 'chispa'] }
            }
        },
        'fondo-groudon': {
            // 🌍 Forma normal: polvo dorado y guijarros de continentes formándose.
            colores: ['#e8c88a', '#c98a3c', '#8a5423'], cantidad: 40, tam: [1.4, 4], vel: [.10, .32], deriva: [.10, .04], giro: .06,
            estilo: ['polvo', 'polvo', 'fragmento'],
            // 🔥 Primigenio: erupción total, brasas y fragmentos de roca ardiente.
            variantes: {
                primal: { colores: ['#ffe45a', '#ff5a1f', '#ff1a0f', '#3a0a02'], cantidad: 70, tam: [1.3, 4.6], vel: [.30, 1.0], deriva: [0, -.45], giro: .14, estilo: ['brasa', 'brasa', 'fragmento'] }
            }
        },
        'fondo-rayquaza': {
            colores: ['#5dffb0', '#22d67a', '#c4ffe0'], cantidad: 44, tam: [1.2, 3.6], vel: [.14, .48], deriva: [.10, -.08], giro: .06,
            estilo: 'energia',
            // 🌟 Mega: energía esmeralda con destellos dorados de poder cósmico.
            variantes: {
                mega: { colores: ['#5dffb0', '#c4ffe0', '#ffe08a', '#ffffff'], cantidad: 60, tam: [1.2, 4], vel: [.20, .62], deriva: [.14, -.12], giro: .08, estilo: ['energia', 'energia', 'destello'] }
            }
        },

        // ---- segunda tanda ----
        'fondo-mewtwo': {
            colores: ['#e6c8ff', '#b06bff', '#ffffff'], cantidad: 40, tam: [1.4, 4.5], vel: [.08, .30], deriva: [0, 0], giro: .05,
            estilo: ['aura', 'destello'],
            variantes: {
                x: { colores: ['#ffc2d6', '#ff5c8a', '#ffffff'] },
                y: { colores: ['#ffffff', '#e9d2ff', '#ffc7f0'] }
            }
        },
        'fondo-mew':     { colores: ['#ffc2e6', '#ff7fbf', '#bfeaff'], cantidad: 40, tam: [1.6, 5],   vel: [.10, .34], deriva: [0, -.10], giro: .06, estilo: ['burbuja', 'destello', 'perla'] },
        'fondo-entei':   { colores: ['#ffb347', '#ff6a1a', '#ffe0a0'], cantidad: 46, tam: [1.2, 3.8], vel: [.16, .55], deriva: [0, -.30], giro: .09, estilo: 'brasa' },
        'fondo-lugia':   { colores: ['#cfefff', '#7fd0ff', '#ffffff'], cantidad: 40, tam: [1.6, 6],   vel: [.08, .28], deriva: [0, -.16], giro: .05, estilo: ['burbuja', 'perla'] },
        'fondo-hooh':    { colores: ['#ffd23f', '#ff5a3c', '#ffb347', '#7fd0ff', '#c084ff'], cantidad: 48, tam: [1.2, 3.8], vel: [.16, .50], deriva: [0, -.26], giro: .08, estilo: ['brasa', 'destello'] },
        'fondo-jirachi': { colores: ['#fff2a8', '#ffd54a', '#bfe3ff'], cantidad: 44, tam: [1.8, 4.4], vel: [.06, .24], deriva: [0, 0],    giro: .04, estilo: ['estrella', 'destello'] },
        'fondo-darkrai': { colores: ['#8f9bff', '#5661c9', '#c7ccff'], cantidad: 34, tam: [2, 7], vel: [.06, .24], deriva: [0, -.02], giro: .07, estilo: 'niebla',
            variantes: { mega: { colores: ['#3a0a4a', '#8a1a3a', '#c060ff', '#ff2a4a'], cantidad: 95, tam: [1.4, 6.5], estilo: ['niebla', 'espiritu', 'ojos'], vel: [.10, .34], giro: .1 } }
        },
        'fondo-reshiram':{ colores: ['#fff3d6', '#ffb35a', '#ff7a2a'], cantidad: 46, tam: [1.2, 3.8], vel: [.16, .52], deriva: [0, -.28], giro: .09, estilo: 'brasa' },
        'fondo-zekrom':  { colores: ['#8fd0ff', '#3f8cff', '#ffffff'], cantidad: 38, tam: [1.2, 3.4], vel: [.12, .45], deriva: [0, 0],    giro: .12, estilo: ['chispa', 'destello'] },
        'fondo-kyurem': {
            colores: ['#ffffff', '#bfe8ff', '#8fd0ff'], cantidad: 60, tam: [1, 3.6], vel: [.05, .20], deriva: [0, .20], giro: .05,
            estilo: 'nieve',
            variantes: {
                negro:  { colores: ['#9fe8ff', '#4fc4ff', '#ffffff'] },
                blanco: { colores: ['#ffffff', '#fff0dc', '#ffc48a'] }
            }
        },
        'fondo-solgaleo':{ colores: ['#fff1a8', '#ffc94a', '#ff9a2e'], cantidad: 44, tam: [1.2, 3.8], vel: [.10, .36], deriva: [0, 0],    giro: .05, estilo: ['destello', 'energia'] },
        'fondo-lunala':  { colores: ['#e6e9ff', '#b6a8ff', '#8f78ff'], cantidad: 40, tam: [1.2, 4],   vel: [.06, .24], deriva: [0, 0],    giro: .04, estilo: ['estrella', 'niebla'] },
        'fondo-necrozma': {
            colores: ['#ffffff'], tono: [0, 360], cantidad: 46, tam: [1.4, 3.8], vel: [.10, .40], deriva: [0, 0], giro: .07,
            estilo: ['prisma', 'destello'],
            variantes: {
                melena: { tono: [18, 58],   colores: ['#ffd27a'] },
                alas:   { tono: [180, 260], colores: ['#bfe3ff'] },
                ultra:  { tono: [0, 360], colores: ['#ffffff', '#ffe58a'], cantidad: 90, estilo: ['prisma', 'destello', 'estrella'], vel: [.18, .55] }
            }
        },
        'fondo-regidrago':{ colores: ['#ff6fae', '#ff2f6d', '#7fd0ff'], cantidad: 40, tam: [1.6, 4.4], vel: [.08, .30], deriva: [0, -.05], giro: .06, estilo: 'cristal' },
        'fondo-zacian': {
            colores: ['#f6f0a3', '#8ff5e0', '#ffb8e6'], cantidad: 42, tam: [1.4, 4.2], vel: [.05, .20], deriva: [0, 0], giro: .06,
            estilo: ['luciernaga', 'perla'],
            variantes: { suprema: { colores: ['#ffe58a', '#ffffff', '#8fe0ff'] } }
        },

        // ---- Ampliación 2026: nuevos legendarios y míticos ----
        'fondo-articuno': {
            colores: ['#04121f', '#0f3a5c', '#5fc9ff'], cantidad: 65, tam: [1.3, 4], vel: [.12, .40], deriva: [.05, -.10], giro: .07,
            estilo: ['nieve', 'nieve', 'viento'],
            variantes: { galar: { colores: ['#120425', '#3a0f6a', '#8f5cff', '#5fc9ff'], cantidad: 78, estilo: ['destello', 'energia'], vel: [.10, .34] } }
        },
        'fondo-zapdos': {
            colores: ['#0c0c14', '#3a3a12', '#ffe74a'], cantidad: 65, tam: [1.3, 4], vel: [.14, .48], deriva: [.08, -.10], giro: .09,
            estilo: ['chispa', 'viento'],
            variantes: { galar: { colores: ['#140404', '#4a0c0c', '#ff3a1f', '#ff8a2a'], cantidad: 78, estilo: ['chispa', 'brasa'], vel: [.20, .60] } }
        },
        'fondo-moltres': {
            colores: ['#1a0703', '#5a1c0c', '#ff8a2a'], cantidad: 65, tam: [1.3, 4], vel: [.14, .48], deriva: [.06, -.14], giro: .08,
            estilo: ['brasa', 'viento'],
            variantes: { galar: { colores: ['#0a0303', '#3a0a12', '#5a0f1f', '#7a1a2a'], cantidad: 71, estilo: ['brasa', 'niebla'], vel: [.10, .30] } }
        },
        'fondo-raikou':   { colores: ['#0b0c1a', '#232a63', '#ffe74a'], cantidad: 68, tam: [1.2, 3.6], vel: [.16, .55], deriva: [0, -.05], giro: .10, estilo: ['chispa', 'destello'] },
        'fondo-suicune':  { colores: ['#04131a', '#0f4a5c', '#6fe0ff', '#eafcff'], cantidad: 65, tam: [1.3, 4.2], vel: [.10, .34], deriva: [0, -.10], giro: .06, estilo: ['burbuja', 'cristal'] },
        'fondo-celebi':   { colores: ['#5fffa0'], tono: [70, 170], cantidad: 65, tam: [1.3, 4], vel: [.08, .28], deriva: [0, -.05], giro: .05, estilo: ['prisma', 'destello'] },
        'fondo-latias': {
            colores: ['#2a0512', '#7a1030', '#ff5c8a', '#ffb3c9'], cantidad: 65, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.05], giro: .06,
            estilo: ['destello', 'perla'],
            variantes: { mega: { colores: ['#2a0a3a', '#7a1a5c', '#ff2f6d', '#ffffff'], cantidad: 114, estilo: ['energia', 'destello'], vel: [.20, .62] } }
        },
        'fondo-latios': {
            colores: ['#050a16', '#10204a', '#5f9fff', '#bfe0ff'], cantidad: 65, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.05], giro: .06,
            estilo: ['energia', 'destello'],
            variantes: { mega: { colores: ['#0a0530', '#2a1050', '#7a4fff', '#5f9fff'], cantidad: 114, estilo: ['energia', 'destello'], vel: [.20, .62] } }
        },
        'fondo-regirock':   { colores: ['#0e0a06', '#3a2c18', '#c98a3c'], cantidad: 62, tam: [1.4, 4.4], vel: [.08, .28], deriva: [0, .06], giro: .05, estilo: ['fragmento', 'polvo'] },
        'fondo-regice':     { colores: ['#040d14', '#123a4a', '#8fe0ff', '#ffffff'], cantidad: 62, tam: [1.5, 5], vel: [.06, .22], deriva: [0, .02], giro: .04, estilo: ['cristal', 'nieve'] },
        'fondo-registeel':  { colores: ['#0a0d10', '#2c343c', '#9fb8c8', '#e8f0f6'], cantidad: 62, tam: [1.2, 3.6], vel: [.08, .26], deriva: [0, 0], giro: .05, estilo: ['destello', 'fragmento'] },
        'fondo-deoxys':     { colores: ['#c060ff'], tono: [260, 320], cantidad: 68, tam: [1.2, 3.8], vel: [.12, .42], deriva: [0, -.05], giro: .09, estilo: ['prisma', 'chispa'] },
        'fondo-heatran':    { colores: ['#170805', '#5a1c0c', '#ff8a2a', '#8a8a8a'], cantidad: 68, tam: [1.2, 3.8], vel: [.14, .50], deriva: [0, -.20], giro: .08, estilo: ['brasa', 'polvo'] },
        'fondo-regigigas':  { colores: ['#0e0a04', '#3a2c10', '#e0a83c'], cantidad: 62, tam: [1.6, 4.6], vel: [.06, .22], deriva: [.10, .04], giro: .04, estilo: ['polvo', 'fragmento'] },
        'fondo-cresselia':  { colores: ['#0a0a16', '#2c2050', '#c7b0ff', '#ffe9ff'], cantidad: 56, tam: [1.8, 5.5], vel: [.05, .18], deriva: [0, -.06], giro: .04, estilo: ['niebla', 'destello'] },
        'fondo-manaphy':    { colores: ['#04121a', '#0f405c', '#6fe0ff', '#5fffa0'], cantidad: 62, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.08], giro: .06, estilo: ['burbuja', 'burbuja', 'burbuja'] },
        'fondo-shaymin': {
            colores: ['#050f06', '#123a1a', '#ff9ac4', '#6fe08a'], cantidad: 65, tam: [1.3, 4], vel: [.10, .30], deriva: [.06, -.04], giro: .06,
            estilo: ['hoja', 'destello'],
            variantes: { cielo: { colores: ['#bfe6ff', '#eaf6ff', '#ff9ac4', '#ffd9ec'], cantidad: 78, estilo: ['pluma', 'hoja'], vel: [.14, .42] } }
        },
        'fondo-victini':    { colores: ['#140a03', '#4a2c0c', '#ffb347', '#ffe08a'], cantidad: 65, tam: [1.3, 4], vel: [.12, .38], deriva: [0, -.05], giro: .07, estilo: ['chispa', 'destello'] },
        'fondo-cobalion':   { colores: ['#070a12', '#243a5c', '#7fb0ff', '#e8f2ff'], cantidad: 62, tam: [1.2, 3.6], vel: [.12, .40], deriva: [0, -.05], giro: .07, estilo: ['destello', 'chispa'] },
        'fondo-terrakion':  { colores: ['#0e0a06', '#3a2c18', '#d0a05a', '#f0e0c0'], cantidad: 62, tam: [1.3, 4], vel: [.12, .40], deriva: [0, -.05], giro: .07, estilo: ['fragmento', 'destello'] },
        'fondo-virizion':   { colores: ['#050f0a', '#0f3a28', '#5fffb0', '#e8fff2'], cantidad: 62, tam: [1.2, 3.6], vel: [.12, .40], deriva: [0, -.05], giro: .07, estilo: ['destello', 'hoja'] },
        'fondo-keldeo': {
            colores: ['#04101a', '#0f3a5c', '#6fc9ff'], cantidad: 62, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.05], giro: .06,
            estilo: ['burbuja', 'destello'],
            variantes: { resolute: { colores: ['#04101a', '#0f3a5c', '#bfe6ff', '#ffffff'], cantidad: 84, estilo: ['destello', 'burbuja'], vel: [.20, .55] } }
        },
        'fondo-genesect':   { colores: ['#1c1608', '#3a2c10', '#7fd0ff', '#c8c8d0'], cantidad: 65, tam: [1.2, 3.6], vel: [.10, .36], deriva: [0, -.05], giro: .07, estilo: ['chispa', 'polvo'] },
        'fondo-xerneas':    { colores: ['#040f0e', '#0f3a38', '#5fffcf', '#ffe58a'], cantidad: 68, tam: [1.3, 4], vel: [.08, .28], deriva: [0, -.05], giro: .05, estilo: ['estrella', 'destello'] },
        'fondo-yveltal':    { colores: ['#8a0f1f', '#c81a2d', '#1a0306'], cantidad: 65, tam: [1.6, 4.6], vel: [.08, .30], deriva: [0, -.06], giro: .05, estilo: ['niebla', 'craneo', 'craneo'] },
        'fondo-zygarde': {
            colores: ['#080f06', '#1c3a12', '#5fd048'], cantidad: 37, tam: [1.3, 3.6], vel: [.08, .28], deriva: [0, -.05], giro: .06, estilo: ['energia', 'destello'],
            variantes: {
                '10':  { cantidad: 16, colores: ['#080f06', '#1c3a12', '#5fd048'] },
                '100': { cantidad: 70, colores: ['#050d04', '#1c3a12', '#5fd048', '#c8ffb0'], estilo: ['energia', 'energia', 'destello'], vel: [.14, .42] },
                mega:  { cantidad: 150, colores: ['#5fd048', '#c8ffb0', '#ff4a4a', '#4a8aff', '#c084ff', '#ffffff'], tam: [1.2, 4], estilo: ['energia', 'energia', 'destello', 'destello'], vel: [.18, .55], giro: .09 }
            }
        },
        'fondo-diancie': {
            colores: ['#140510', '#4a1035', '#ff7fd6'], cantidad: 62, tam: [1.4, 4.2], vel: [.08, .28], deriva: [0, -.05], giro: .06,
            estilo: ['cristal', 'destello'],
            variantes: { mega: { colores: ['#1c0716', '#5c1442', '#ff7fd6', '#ffffff'], cantidad: 118, estilo: ['cristal', 'destello', 'destello'], vel: [.16, .48] } }
        },
        'fondo-hoopa': {
            colores: ['#0a0512', '#2c1040', '#a060ff', '#ffe74a'], cantidad: 62, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.05], giro: .06,
            estilo: ['aura', 'destello'],
            variantes: { unbound: { colores: ['#050208', '#1a0630', '#5c0fae', '#ffe74a'], cantidad: 110, estilo: ['niebla', 'aura', 'destello'], vel: [.16, .48] } }
        },
        'fondo-volcanion':  { colores: ['#140a04', '#4a2c10', '#ff9a3c', '#cfeeff', '#ffffff'], cantidad: 72, tam: [1.2, 4], vel: [.10, .36], deriva: [0, -.12], giro: .07, estilo: ['brasa', 'burbuja', 'niebla'] },
        'fondo-tapukoko':   { colores: ['#0e0c04', '#3a3212', '#ffd25a', '#ff8fd6'], cantidad: 65, tam: [1.3, 4], vel: [.12, .40], deriva: [0, -.05], giro: .08, estilo: ['chispa', 'destello'] },
        'fondo-magearna':   { colores: ['#0a0d14', '#2c343c', '#a8c8ff', '#ffc8ec'], cantidad: 62, tam: [1.3, 3.8], vel: [.08, .28], deriva: [0, -.05], giro: .05, estilo: ['tuerca', 'destello', 'destello'],
            variantes: { mega: { colores: ['#a8c8ff', '#ffc8ec', '#ff6a3c', '#ffd24a', '#ffffff'], cantidad: 140, tam: [1.2, 4], estilo: ['tuerca', 'destello', 'destello', 'destello'], vel: [.14, .42], giro: .08 } }
        },
        'fondo-marshadow':  { colores: ['#07060f', '#1c1c3c', '#6f6fc0'], cantidad: 59, tam: [1.4, 4.2], vel: [.08, .28], deriva: [0, -.05], giro: .06, estilo: ['niebla', 'energia'] },
        'fondo-zeraora':    { colores: ['#0e0c04', '#3a3212', '#ffe74a', '#ffffff'], cantidad: 71, tam: [1.1, 3.4], vel: [.20, .62], deriva: [0, -.06], giro: .12, estilo: ['chispa', 'chispa', 'destello'],
            variantes: { mega: { colores: ['#3fa9ff', '#0a0a0a', '#ffe74a', '#ffffff'], cantidad: 170, tam: [1.1, 3.8], estilo: ['chispa', 'rayo', 'chispa', 'destello'], vel: [.30, .85], giro: .16 } }
        },
        'fondo-zamazenta': {
            colores: ['#0a1c14', '#8ff5c8', '#c8f6a8'], cantidad: 62, tam: [1.4, 4.2], vel: [.05, .20], deriva: [0, 0], giro: .06,
            estilo: ['luciernaga', 'perla'],
            variantes: { crowned: { colores: ['#0a1408', '#c8f6a8', '#ffffff'] } }
        },
        'fondo-eternatus': {
            colores: ['#0a0512', '#2c1040', '#b050ff', '#ff2f4f'], cantidad: 65, tam: [1.3, 4], vel: [.12, .40], deriva: [0, -.08], giro: .08,
            estilo: ['chispa', 'niebla'],
            variantes: { eternamax: { colores: ['#03010a', '#1c0630', '#ff1f3f', '#7a1aff', '#ffffff'], cantidad: 130, estilo: ['niebla', 'chispa', 'chispa', 'energia', 'destello'], vel: [.22, .62] } }
        },
        'fondo-calyrex': {
            colores: ['#050f0a', '#123a28', '#6fe0a8', '#ffe58a'], cantidad: 62, tam: [1.3, 4], vel: [.06, .22], deriva: [0, -.04], giro: .05, estilo: ['destello', 'estrella'],
            variantes: {
                'jinete-glaciar':   { colores: ['#030a12', '#123a4a', '#bfeeff', '#ffe58a'], cantidad: 78, estilo: ['nieve', 'destello'], vel: [.08, .30] },
                'jinete-espectral': { colores: ['#07030f', '#1c1040', '#a060ff', '#ffe58a'], cantidad: 78, estilo: ['niebla', 'destello'], vel: [.06, .24] }
            }
        },
        'fondo-koraidon':   { colores: ['#140503', '#4a150c', '#ff5a2f', '#ffb347'], cantidad: 68, tam: [1.2, 3.8], vel: [.14, .46], deriva: [.06, -.10], giro: .08, estilo: ['brasa', 'energia'] },
        'fondo-miraidon':   { colores: ['#03101a', '#0c3a5c', '#6fd0ff', '#ff5fd6', '#c060ff'], cantidad: 76, tam: [1.0, 3.2], vel: [.16, .52], deriva: [0, -.06], giro: .10, estilo: ['chispa', 'destello'] },

        // ---- Ampliación 2026 (v3): Tapus restantes, Glastrier/Spectrier ----
        'fondo-tapulele':   { colores: ['#0e0512', '#3a1240', '#ff9ae0', '#ffe0f6'], cantidad: 62, tam: [1.3, 4], vel: [.10, .34], deriva: [0, -.06], giro: .07, estilo: ['destello', 'perla'] },
        'fondo-tapubulu':   { colores: ['#0a1206', '#1c3a10', '#8ff06a', '#ffe58a'], cantidad: 60, tam: [1.4, 4.2], vel: [.08, .26], deriva: [.05, -.04], giro: .05, estilo: ['hoja', 'destello'] },
        'fondo-tapufini':   { colores: ['#04131a', '#0f4a5c', '#9be7ff', '#ffe0f6'], cantidad: 60, tam: [1.3, 4], vel: [.08, .28], deriva: [0, -.08], giro: .05, estilo: ['burbuja', 'niebla'] },
        'fondo-glastrier':  { colores: ['#050d16', '#123a4a', '#bfeeff', '#ffffff'], cantidad: 62, tam: [1.3, 4.2], vel: [.08, .30], deriva: [.06, .04], giro: .05, estilo: ['nieve', 'nieve', 'viento'] },
        'fondo-spectrier':  { colores: ['#0a0512', '#2c1040', '#a060ff'], cantidad: 60, tam: [1.4, 4.4], vel: [.06, .22], deriva: [0, -.05], giro: .05, estilo: ['niebla', 'destello'] },

        // ---- Ampliación 2026 (v3): Ultraentes — ultraumbral en el espacio ----
        'fondo-nihilego':    { colores: ['#03010a', '#3a0a4a', '#c060ff', '#ff5fd6'], cantidad: 62, tam: [1.2, 3.8], vel: [.10, .34], deriva: [0, -.06], giro: .07, estilo: ['destello', 'niebla'] },
        'fondo-buzzwole':    { colores: ['#03010a', '#4a0a2c', '#ff5fd6', '#ffffff'], cantidad: 62, tam: [1.2, 3.8], vel: [.10, .34], deriva: [0, -.06], giro: .07, estilo: ['destello', 'chispa'] },
        'fondo-pheromosa':   { colores: ['#03010a', '#1c1030', '#c8e0ff', '#ffffff'], cantidad: 62, tam: [1.1, 3.4], vel: [.14, .44], deriva: [0, -.06], giro: .09, estilo: ['destello', 'destello'] },
        'fondo-xurkitree':   { colores: ['#03010a', '#2c2a0c', '#ffe74a', '#ffffff'], cantidad: 62, tam: [1.2, 3.8], vel: [.12, .40], deriva: [0, -.06], giro: .08, estilo: ['chispa', 'destello'] },
        'fondo-celesteela':  { colores: ['#03010a', '#0c2c30', '#7fe0d0', '#ffffff'], cantidad: 62, tam: [1.2, 3.8], vel: [.10, .34], deriva: [0, -.06], giro: .06, estilo: ['destello', 'polvo'] },
        'fondo-kartana':     { colores: ['#03010a', '#0c2c14', '#8ff06a', '#e0e8e8'], cantidad: 62, tam: [1.1, 3.4], vel: [.12, .38], deriva: [0, -.06], giro: .07, estilo: ['fragmento', 'destello'] },
        'fondo-guzzlord':    { colores: ['#03010a', '#1c0a2c', '#7a4fd6', '#3a0f6a'], cantidad: 62, tam: [1.3, 4], vel: [.08, .28], deriva: [0, -.06], giro: .06, estilo: ['niebla', 'energia'] },
        'fondo-poipole':     { colores: ['#03010a', '#2c0a3a', '#c060ff', '#ffffff'], cantidad: 62, tam: [1.1, 3.4], vel: [.10, .34], deriva: [0, -.06], giro: .07, estilo: ['destello', 'burbuja'] },
        'fondo-naganadel':   { colores: ['#03010a', '#2c0a3a', '#c060ff', '#7a4fd6'], cantidad: 62, tam: [1.2, 3.8], vel: [.12, .40], deriva: [0, -.06], giro: .08, estilo: ['destello', 'energia'] },
        'fondo-stakataka':   { colores: ['#03010a', '#242020', '#a0a0a8', '#ffffff'], cantidad: 62, tam: [1.3, 4], vel: [.08, .28], deriva: [0, -.06], giro: .05, estilo: ['fragmento', 'destello'] },
        'fondo-blacephalon': { colores: ['#03010a', '#3a0a2c', '#ff8a2a', '#c060ff'], cantidad: 62, tam: [1.2, 3.8], vel: [.12, .40], deriva: [0, -.06], giro: .08, estilo: ['brasa', 'destello'] },

        // ---- Ampliación 2026 (v4): legendarios y singulares que faltaban ----
        'fondo-uxie':       { colores: ['#fff0a0', '#ffd84a', '#ffffff', '#f2c94c'], cantidad: 54, tam: [1.3, 4], vel: [.06, .24], deriva: [0, -.05], giro: .05, estilo: ['estrella', 'destello'] },
        'fondo-mesprit':    { colores: ['#ffb3d9', '#ff7fbf', '#ffe0f0', '#ffffff'], cantidad: 46, tam: [1.4, 4.2], vel: [.06, .22], deriva: [0, -.12], giro: .06, estilo: ['corazon', 'corazon', 'destello'] },
        'fondo-azelf':      { colores: ['#bfe0ff', '#5aa8ff', '#ffffff', '#7fb8ff'], cantidad: 52, tam: [1.3, 4], vel: [.08, .30], deriva: [0, .05], giro: .05, estilo: ['cristal', 'destello'] },
        'fondo-tornadus':   { colores: ['#dffff0', '#8ff0c8', '#ffffff', '#5adcb0'], cantidad: 62, tam: [1.3, 4], vel: [.20, .70], deriva: [.25, -.05], giro: .08, estilo: ['viento', 'hoja', 'viento'],
            variantes: { totem: { colores: ['#b8ffe6', '#3ad0a0', '#0a3a30', '#ffffff'], cantidad: 84, vel: [.45, 1.3], deriva: [.55, -.10], giro: .14, estilo: ['viento', 'viento', 'hoja', 'rayo'] } }
        },
        'fondo-thundurus':  { colores: ['#fff6a0', '#ffd21a', '#ffffff', '#b48aff'], cantidad: 54, tam: [1.2, 3.6], vel: [.20, .80], deriva: [0, .05], giro: .12, estilo: ['rayo', 'chispa', 'destello'],
            variantes: { totem: { colores: ['#ffffff', '#9be7ff', '#5ac8ff', '#fff6a0'], cantidad: 80, vel: [.40, 1.5], giro: .18, estilo: ['rayo', 'rayo', 'chispa', 'destello'] } }
        },
        'fondo-landorus':   { colores: ['#f2b24a', '#ffd98a', '#c8823a', '#ffe9b8'], cantidad: 58, tam: [1.3, 4.2], vel: [.08, .36], deriva: [.15, .02], giro: .06, estilo: ['polvo', 'fragmento', 'viento'],
            variantes: { totem: { colores: ['#ff8a3a', '#ffc06a', '#a8501c', '#ffe0b0'], cantidad: 80, vel: [.20, .80], deriva: [.35, -.02], giro: .09, estilo: ['polvo', 'fragmento', 'viento', 'brasa'] } }
        },
        'fondo-silvally':   { colores: ['#ffffff', '#c8d4e6', '#9aa8bc'], cantidad: 56, tam: [1.3, 4], vel: [.08, .30], deriva: [0, 0], giro: .06, estilo: ['prisma', 'destello'], tono: [0, 360] },
        'fondo-urshifu': {
            colores: ['#ff5a4a', '#ffb0a0', '#ffffff', '#ffd23f'], cantidad: 48, tam: [1.4, 4], vel: [.10, .50], deriva: [0, -.04], giro: .08, estilo: ['impacto', 'brasa'],
            variantes: { lluvia: { colores: ['#7fd0ff', '#e4f8ff', '#3f9bff', '#ffffff'], deriva: [0, -.18], estilo: ['burbuja', 'impacto'] } }
        },
        'fondo-regieleki':  { colores: ['#fff56a', '#7fe8ff', '#ffffff', '#ffe93a'], cantidad: 64, tam: [1.1, 3.4], vel: [.40, 1.20], deriva: [0, 0], giro: .14, estilo: ['rayo', 'chispa'] },
        'fondo-wochien':    { colores: ['#b078e0', '#d4b060', '#6fbf5a', '#e0c8ff'], cantidad: 52, tam: [1.4, 4.4], vel: [.05, .22], deriva: [0, -.03], giro: .06, estilo: ['hoja', 'espiritu'] },
        'fondo-chienpao':   { colores: ['#dff4ff', '#9bdcff', '#ffffff', '#c8f0ff'], cantidad: 66, tam: [1.2, 4], vel: [.15, .60], deriva: [.15, .08], giro: .06, estilo: ['nieve', 'astilla', 'viento'] },
        'fondo-tinglu':     { colores: ['#ff8a2a', '#ffc06a', '#c89a6a', '#8a6a4a'], cantidad: 52, tam: [1.6, 5], vel: [.04, .20], deriva: [0, .04], giro: .04, estilo: ['polvo', 'fragmento', 'brasa'] },
        'fondo-chiyu':      { colores: ['#ffe45a', '#ff9a2a', '#ff4a1a', '#fff2b0'], cantidad: 62, tam: [1.3, 4.4], vel: [.14, .60], deriva: [0, -.35], giro: .10, estilo: ['brasa', 'llama', 'llama'] },
        'fondo-okidogi':    { colores: ['#b06bff', '#8fff50', '#e0c0ff', '#5aff9a'], cantidad: 52, tam: [1.5, 5], vel: [.06, .26], deriva: [0, -.05], giro: .07, estilo: ['toxica', 'impacto'] },
        'fondo-munkidori':  { colores: ['#ff7fd8', '#ff5ac8', '#ffd0f0', '#8fffb8'], cantidad: 54, tam: [1.4, 4.6], vel: [.06, .26], deriva: [0, -.06], giro: .09, estilo: ['toxica', 'destello'] },
        'fondo-fezandipiti': { colores: ['#ffc0e4', '#ffe08a', '#ff8fc8', '#ffffff'], cantidad: 54, tam: [1.3, 4.2], vel: [.06, .24], deriva: [.04, -.05], giro: .06, estilo: ['pluma', 'centella'] },
        'fondo-ogerpon':    { colores: ['#8ff06a', '#ffe07a', '#4ac86a', '#fff0b0'], cantidad: 58, tam: [1.4, 4.2], vel: [.06, .24], deriva: [.05, -.04], giro: .05, estilo: ['hoja', 'luciernaga', 'hoja'],
            variantes: { pozo: { colores: ['#7fd0ff', '#e4f8ff', '#3f9bff', '#8ff0e0'], cantidad: 66, deriva: [0, -.20], estilo: ['burbuja', 'luciernaga', 'hoja'] }, hogar: { colores: ['#ffd23f', '#ff8a1f', '#ff4a2e', '#fff0b0'], cantidad: 70, vel: [.10, .40], deriva: [0, -.30], estilo: ['llama', 'brasa', 'luciernaga'] }, cimiento: { colores: ['#c8c8d0', '#9a9aa8', '#ffe07a', '#e8e0c8'], cantidad: 62, estilo: ['fragmento', 'polvo', 'luciernaga'] } }
        },
        'fondo-terapagos':  { colores: ['#ff8a8a', '#ffe08a', '#8affb0', '#8ad8ff', '#c8a0ff', '#ffffff'], cantidad: 56, tam: [1.3, 4.4], vel: [.06, .24], deriva: [0, 0], giro: .05, estilo: ['cristal', 'prisma', 'destello'],
            variantes: { teracristal: { cantidad: 70, tam: [1.5, 5], estilo: ['cristal', 'cristal', 'prisma', 'destello'] }, astral: { colores: ['#ffffff', '#ffe08a', '#c8a0ff', '#8ad8ff', '#ff9ad0', '#8affb0'], cantidad: 92, tam: [1.2, 4.8], vel: [.05, .22], giro: .06, estilo: ['estrella', 'estrella', 'prisma', 'destello'] } }
        },
        'fondo-phione':     { colores: ['#e4fbff', '#9be7ff', '#ffffff', '#6fd0f0'], cantidad: 52, tam: [1.6, 6], vel: [.08, .30], deriva: [0, -.25], giro: .05, estilo: ['burbuja', 'perla'] },
        'fondo-meloetta':   { colores: ['#ffe0ff', '#c8a0ff', '#8fffd0', '#ff9ac8'], cantidad: 40, tam: [1.4, 4], vel: [.06, .24], deriva: [.05, -.12], giro: .06, estilo: ['nota', 'nota', 'destello'],
            variantes: { danza: { colores: ['#ff8a5a', '#ffd23f', '#ff4a4a', '#ffffff'], cantidad: 60, tam: [1.6, 4.6], vel: [.14, .55], deriva: [.10, -.15], giro: .12, estilo: ['nota', 'impacto', 'destello'] } }
        },
        'fondo-melmetal': {
            colores: ['#d8e0ea', '#9aa8b8', '#ffffff', '#7a8898'], cantidad: 54, tam: [1.3, 4.2], vel: [.06, .24], deriva: [0, 0], giro: .05, estilo: ['tuerca', 'astilla'],
            variantes: { gmax: { colores: ['#ffcf7a', '#ff9a2a', '#ffe9b8', '#c8843a'], cantidad: 70, vel: [.10, .40], estilo: ['tuerca', 'astilla', 'brasa'] } }
        },
        'fondo-zarude':     { colores: ['#7aff7a', '#4ac86a', '#c8ffa0', '#ffe07a'], cantidad: 56, tam: [1.4, 4.2], vel: [.05, .22], deriva: [.04, -.03], giro: .06, estilo: ['hoja', 'luciernaga', 'insecto'] },
        'fondo-pecharunt':  { colores: ['#ff8fd8', '#c070ff', '#ffd0f0', '#ff5aa8'], cantidad: 56, tam: [1.4, 4.6], vel: [.05, .22], deriva: [0, -.06], giro: .07, estilo: ['espiritu', 'toxica', 'destello'] },


        // =====================================================
        // 🎨 PARTÍCULAS POR TIPO PRINCIPAL (marco de cada Pokémon)
        // Clase del contenedor: "tipo-<tipo>". Más discretas que las de
        // los legendarios (menos cantidad, sin fondo propio).
        // =====================================================
        'tipo-normal':    { colores: ['#f1eedb', '#cfc9a6', '#ffffff'],                 cantidad: 26, tam: [1.2, 3.4], vel: [.06, .24], deriva: [0, 0],      giro: .05, estilo: ['perla', 'destello'] },
        'tipo-fuego':     { colores: ['#ffd23f', '#ff8a1f', '#ff4a2e'],                 cantidad: 30, tam: [1.1, 3.2], vel: [.14, .46], deriva: [0, -.34],   giro: .08, estilo: ['llama', 'brasa', 'brasa'] },
        'tipo-agua':      { colores: ['#a9dcff', '#5aa6ff', '#e6f5ff'],                 cantidad: 30, tam: [1.4, 5],   vel: [.08, .28], deriva: [0, -.20],   giro: .05, estilo: ['burbuja', 'burbuja', 'aura'] },
        'tipo-electrico': { colores: ['#fff07a', '#f8d030', '#ffffff'],                 cantidad: 28, tam: [1.1, 3.2], vel: [.14, .50], deriva: [0, 0],      giro: .13, estilo: ['rayo', 'chispa', 'chispa'] },
        'tipo-planta':    { colores: ['#78c850', '#4fae3a', '#b8f08a', '#e6ff9a'],      cantidad: 26, tam: [1.3, 3.2], vel: [.06, .22], deriva: [.06, .16],  giro: .06, estilo: ['hoja', 'hoja', 'hoja', 'luciernaga'] },
        'tipo-hielo':     { colores: ['#ffffff', '#bfe8ff', '#98d8d8'],                 cantidad: 40, tam: [1, 3.4],   vel: [.05, .20], deriva: [0, .20],    giro: .05, estilo: 'nieve' },
        'tipo-lucha':     { colores: ['#ff6a4a', '#e0392e', '#ffb37a'],                 cantidad: 14, tam: [1.8, 3.6], vel: [.03, .14], deriva: [0, 0],      giro: .05, estilo: 'impacto' },
        'tipo-veneno':    { colores: ['#c45fd6', '#a040a0', '#e7a6f2', '#8ff08a'],      cantidad: 26, tam: [1.5, 4.8], vel: [.06, .22], deriva: [0, -.20],   giro: .06, estilo: ['toxica', 'toxica', 'burbuja'] },
        'tipo-tierra':    { colores: ['#e0c068', '#c9a24a', '#f1dc9a'],                 cantidad: 34, tam: [1.6, 4],   vel: [.08, .32], deriva: [.24, .02],  giro: .08, estilo: ['polvo', 'polvo', 'fragmento', 'fragmento'] },
        'tipo-volador':   { colores: ['#d8cfff', '#a890f0', '#ffffff'],                 cantidad: 22, tam: [1.3, 3.2], vel: [.08, .30], deriva: [.34, -.02], giro: .04, estilo: ['viento', 'viento', 'pluma'] },
        'tipo-psiquico':  { colores: ['#ff8fb4', '#f85888', '#ffd0e0', '#c9a0ff'],      cantidad: 26, tam: [1.4, 4.2], vel: [.05, .22], deriva: [0, 0],      giro: .05, estilo: ['aura', 'aura', 'destello'] },
        'tipo-bicho':     { colores: ['#d4ec48', '#a8b820', '#f0ff9a'],                 cantidad: 26, tam: [1.2, 3],   vel: [.06, .30], deriva: [0, 0],      giro: .16, estilo: ['luciernaga', 'luciernaga', 'insecto'] },
        'tipo-roca':      { colores: ['#b9a67a', '#8f8467', '#d8ccb0', '#a3a08e'],      cantidad: 26, tam: [1.6, 4],   vel: [.05, .22], deriva: [0, .16],    giro: .06, estilo: ['fragmento', 'fragmento', 'fragmento', 'polvo'] },
        'tipo-fantasma':  { colores: ['#b39ce6', '#8468c4', '#e1d4ff'],                 cantidad: 24, tam: [1.5, 4.6], vel: [.06, .24], deriva: [0, -.06],   giro: .09, estilo: ['espiritu', 'espiritu', 'niebla'] },
        'tipo-dragon':    { colores: ['#8f6bff', '#7038f8', '#4fd3ff', '#d6c8ff'],      cantidad: 26, tam: [1.4, 3.8], vel: [.07, .28], deriva: [0, 0],      giro: .06, estilo: ['escama', 'escama', 'energia'] },
        'tipo-siniestro': { colores: ['#a88a74', '#6b5444', '#c7b0a0'],                 cantidad: 26, tam: [2, 6.5],   vel: [.05, .20], deriva: [0, -.02],   giro: .07, estilo: ['niebla', 'niebla', 'niebla', 'ojos'] },
        'tipo-acero':     { colores: ['#e3e6f5', '#b8b8d0', '#ffffff', '#93a8cf'],      cantidad: 26, tam: [1.2, 3.4], vel: [.06, .26], deriva: [0, 0],      giro: .05, estilo: ['astilla', 'astilla', 'destello'] },
        'tipo-hada':      { colores: ['#ffb8dc', '#ee99ac', '#fff0fa', '#c8e6ff'],      cantidad: 28, tam: [1.2, 3.6], vel: [.05, .22], deriva: [0, -.04],   giro: .06, estilo: ['centella', 'centella', 'perla', 'estrella'] }
    };

    // Los marcos son grandes: las partículas por tipo se escalan un poco para
    // que se aprecien bien sin llegar a tapar al Pokémon (ajustable aquí).
    const AJUSTE_TIPO = { tam: 1.35, cantidad: 1.25 };
    Object.keys(TEMAS).forEach(clave => {
        if (clave.indexOf('tipo-') !== 0) return;
        const c = TEMAS[clave];
        c.tam = c.tam.map(v => v * AJUSTE_TIPO.tam);
        c.cantidad = Math.round(c.cantidad * AJUSTE_TIPO.cantidad);
    });

    const registros = new Set();
    let animando = false;
    let ultimoTiempo = 0;

    function rand(a, b) { return a + Math.random() * (b - a); }

    function hslAHex(h) {
        h = ((h % 360) + 360) % 360;
        const s = 1, l = .65, a = s * Math.min(l, 1 - l);
        const f = n => {
            const k = (n + h / 30) % 12;
            const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
            return Math.round(255 * c).toString(16).padStart(2, '0');
        };
        return '#' + f(0) + f(8) + f(4);
    }

    // Sprite de brillo precalculado (evita gradientes por partícula y por frame).
    const cacheSprites = {};
    function spriteBrillo(color) {
        if (cacheSprites[color]) return cacheSprites[color];
        const c = document.createElement('canvas');
        c.width = c.height = 64;
        const g = c.getContext('2d');
        const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.18, color);
        grad.addColorStop(0.55, color + '55');
        grad.addColorStop(1, color + '00');
        g.fillStyle = grad;
        g.fillRect(0, 0, 64, 64);
        cacheSprites[color] = c;
        return c;
    }

    // Devuelve la configuración efectiva (tema + variante de forma) del fondo.
    function temaDe(fondo) {
        let cfg = null;
        for (const clase in TEMAS) {
            if (fondo.classList.contains(clase)) { cfg = TEMAS[clase]; break; }
        }
        if (!cfg) return null;
        let variante = '';
        fondo.classList.forEach(c => { if (c.indexOf('fondo-var-') === 0) variante = c.slice(10); });
        const extra = (cfg.variantes && cfg.variantes[variante]) || {};
        return { cfg: Object.assign({}, cfg, extra) };
    }

    function crearParticula(reg, tema) {
        const cfg = tema.cfg;
        const estilos = Array.isArray(cfg.estilo) ? cfg.estilo : [cfg.estilo];
        const tono = cfg.tono ? rand(cfg.tono[0], cfg.tono[1]) : null;
        return {
            x: Math.random() * reg.ancho,
            y: Math.random() * reg.alto,
            ang: Math.random() * Math.PI * 2,
            vel: rand(cfg.vel[0], cfg.vel[1]) * 60,          // px por segundo
            r: rand(cfg.tam[0], cfg.tam[1]),
            color: cfg.colores[(Math.random() * cfg.colores.length) | 0],
            estilo: estilos[(Math.random() * estilos.length) | 0],
            tono,
            fase: Math.random() * Math.PI * 2,
            ritmo: rand(.6, 2.2),
            giro: (Math.random() - .5) * cfg.giro * 60,
            rot: Math.random() * Math.PI * 2,
            tick: -1, zz: null
        };
    }

    function reconstruir(reg) {
        const tema = temaDe(reg.fondo);
        reg.tema = tema;
        if (!tema) { reg.particulas = []; return; }
        const factor = reg.fondo.classList.contains('fondo-forma-especial') ? 1.4 : 1;
        const n = Math.round(tema.cfg.cantidad * factor * (reg.ancho < 320 ? .7 : 1));
        reg.particulas = Array.from({ length: n }, () => crearParticula(reg, tema));
    }

    function ajustarTamano(reg) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const ancho = reg.fondo.clientWidth;
        const alto = reg.fondo.clientHeight;
        if (!ancho || !alto) return false;
        if (ancho === reg.ancho && alto === reg.alto) return true;
        reg.ancho = ancho; reg.alto = alto;
        reg.canvas.width = Math.round(ancho * dpr);
        reg.canvas.height = Math.round(alto * dpr);
        reg.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        reconstruir(reg);
        return true;
    }

    function trazarEstrella(ctx, x, y, R, rot) {
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
            const rad = i % 2 === 0 ? R : R * .45;
            const a = rot - Math.PI / 2 + i * Math.PI / 5;
            const px = x + Math.cos(a) * rad, py = y + Math.sin(a) * rad;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
    }

    // Hoja o pluma que gira y se voltea en el aire (ancho = proporción del largo).
    function dibujarHoja(ctx, p, color, t, ancho, colorVena, alfa) {
        const L = p.r * 3.2 + 3, W = L * ancho;
        const giro = p.rot + Math.sin(t * p.ritmo * .7 + p.fase) * .7 + t * .25 * (p.ritmo - 1.4);
        const volteo = .3 + .7 * Math.abs(Math.cos(t * p.ritmo * .8 + p.fase));   // efecto de volteo 3D
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(giro);
        ctx.scale(1, volteo);
        ctx.globalAlpha = alfa;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(-L, 0);
        ctx.quadraticCurveTo(0, -W * 2, L, 0);
        ctx.quadraticCurveTo(0, W * 2, -L, 0);
        ctx.fill();
        ctx.globalAlpha = alfa * .8; ctx.strokeStyle = colorVena; ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(-L, 0); ctx.lineTo(L * .85, 0); ctx.stroke();
        ctx.restore();
    }

    function dibujarParticula(ctx, p, tema, t) {
        const parpadeo = .55 + .45 * Math.sin(t * p.ritmo + p.fase);
        const color = p.tono !== null ? hslAHex(Math.round((p.tono) / 12) * 12) : p.color;

        switch (p.estilo) {
            case 'burbuja': {
                const r = p.r + 1.5;
                ctx.globalAlpha = .55 * parpadeo + .2;
                ctx.strokeStyle = color; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke();
                ctx.globalAlpha = .12; ctx.fillStyle = color; ctx.fill();
                ctx.globalAlpha = .7 * parpadeo; ctx.fillStyle = '#ffffff';
                ctx.beginPath(); ctx.arc(p.x - r * .35, p.y - r * .35, Math.max(.6, r * .22), 0, Math.PI * 2); ctx.fill();
                return;
            }
            case 'nieve': {
                const spr = spriteBrillo(color), tam = p.r * 4;
                ctx.globalAlpha = .35 + .55 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                if (p.r > 2.2) {                      // copos grandes con 3 ejes
                    ctx.globalAlpha = .75; ctx.strokeStyle = color; ctx.lineWidth = .8;
                    const L = p.r * 1.7;
                    ctx.beginPath();
                    for (let i = 0; i < 3; i++) {
                        const a = p.rot + t * .4 * (p.ritmo - 1.4) + i * Math.PI / 3;
                        ctx.moveTo(p.x - Math.cos(a) * L, p.y - Math.sin(a) * L);
                        ctx.lineTo(p.x + Math.cos(a) * L, p.y + Math.sin(a) * L);
                    }
                    ctx.stroke();
                }
                return;
            }
            case 'chispa': {
                const spr = spriteBrillo(color), tam = p.r * 4;
                ctx.globalAlpha = .4 + .6 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                const tick = (t * 12) | 0;            // el arco se "recalcula" ~12 veces/s
                if (tick !== p.tick) {
                    p.tick = tick;
                    const L = 9 + p.r * 4, a = Math.random() * Math.PI * 2, pts = [[0, 0]];
                    for (let i = 1; i <= 4; i++) {
                        const d = L * i / 4, j = (Math.random() - .5) * 7;
                        pts.push([Math.cos(a) * d - Math.sin(a) * j, Math.sin(a) * d + Math.cos(a) * j]);
                    }
                    p.zz = pts;
                }
                if (p.tick % 3 !== 0 && p.zz) {       // intermitente, como una chispa real
                    ctx.globalAlpha = .9; ctx.strokeStyle = color; ctx.lineWidth = 1;
                    ctx.beginPath();
                    p.zz.forEach((q, i) => i ? ctx.lineTo(p.x + q[0], p.y + q[1]) : ctx.moveTo(p.x, p.y));
                    ctx.stroke();
                }
                return;
            }
            case 'estrella': {
                const spr = spriteBrillo(color), tam = p.r * 7;
                ctx.globalAlpha = .3 + .5 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                ctx.globalAlpha = .55 + .45 * parpadeo; ctx.fillStyle = color;
                trazarEstrella(ctx, p.x, p.y, p.r * 1.7 + 1.5, p.rot + t * .3 * (p.ritmo - 1.4));
                ctx.fill();
                return;
            }
            case 'aura': {
                const spr = spriteBrillo(color), tam = p.r * (5 + 2 * parpadeo);
                ctx.globalAlpha = .4 + .5 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                const f = ((t * p.ritmo * .5 + p.fase) % 1 + 1) % 1;   // anillo que se expande
                ctx.globalAlpha = (1 - f) * .35; ctx.strokeStyle = color; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 2 + f * p.r * 6, 0, Math.PI * 2); ctx.stroke();
                return;
            }
            case 'luciernaga': {
                const b = Math.max(0, Math.sin(t * p.ritmo * .8 + p.fase));
                if (b < .02) return;
                const spr = spriteBrillo(color), tam = p.r * 8;
                ctx.globalAlpha = b * b;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                return;
            }
            case 'cristal': {
                const spr = spriteBrillo(color), tam = p.r * 6;
                ctx.globalAlpha = .3 * parpadeo + .1;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                const h = p.r * 2.6, w = p.r * 1.4, a = p.rot + t * .25 * (p.ritmo - 1.4);
                const c = Math.cos(a), s = Math.sin(a);
                const P = [[0, -h], [w, 0], [0, h], [-w, 0]].map(q => [p.x + q[0] * c - q[1] * s, p.y + q[0] * s + q[1] * c]);
                ctx.globalAlpha = .5 + .3 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath(); P.forEach((q, i) => i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])); ctx.closePath(); ctx.fill();
                ctx.globalAlpha = .7; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .6; ctx.stroke();
                return;
            }
            case 'prisma': {
                const spr = spriteBrillo(color), tam = p.r * 5;
                ctx.globalAlpha = .3 + .5 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                const h = p.r * 1.8, w = p.r;
                ctx.globalAlpha = .7; ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - h); ctx.lineTo(p.x + w, p.y); ctx.lineTo(p.x, p.y + h); ctx.lineTo(p.x - w, p.y);
                ctx.closePath(); ctx.fill();
                return;
            }

            // ================= ESTILOS PARA LAS PARTÍCULAS POR TIPO =================
            case 'hoja': {                       // 🌿 Planta: hojas que caen girando
                dibujarHoja(ctx, p, color, t, .42, '#eaffd0', .5 + .3 * parpadeo);
                return;
            }
            case 'pluma': {                      // 🪶 Volador: plumas ligeras
                dibujarHoja(ctx, p, color, t, .24, '#ffffff', .45 + .35 * parpadeo);
                return;
            }
            case 'tuerca': {                     // 🔩 Magearna: tuercas metálicas girando
                const rr = p.r * 2.2;
                const giro = p.rot + t * (0.6 + p.ritmo * .3);
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(giro);
                ctx.globalAlpha = .35 + .35 * parpadeo;
                ctx.fillStyle = color;
                ctx.beginPath();
                for (let k = 0; k < 6; k++) {
                    const ang = (Math.PI / 3) * k;
                    const px = Math.cos(ang) * rr, py = Math.sin(ang) * rr;
                    if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                ctx.globalAlpha = .8;
                ctx.fillStyle = 'rgba(10,10,16,.65)';
                ctx.beginPath();
                ctx.arc(0, 0, rr * .42, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                return;
            }
            case 'craneo': {                     // 💀 Yveltal: pequeñas calaveras (la muerte)
                const rr = p.r * 2.0;
                const giro = p.rot * .2;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(giro);
                ctx.globalAlpha = .30 + .35 * parpadeo;
                ctx.fillStyle = color;
                // cráneo (óvalo) + mandíbula
                ctx.beginPath();
                ctx.ellipse(0, -rr * .1, rr * .78, rr * .68, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillRect(-rr * .42, rr * .38, rr * .84, rr * .34);
                // cuencas de los ojos y nariz (oscuras)
                ctx.globalAlpha = .85;
                ctx.fillStyle = 'rgba(5,2,4,.9)';
                ctx.beginPath(); ctx.ellipse(-rr * .32, -rr * .08, rr * .22, rr * .26, 0, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.ellipse(rr * .32, -rr * .08, rr * .22, rr * .26, 0, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath();
                ctx.moveTo(0, rr * .10); ctx.lineTo(-rr * .08, rr * .28); ctx.lineTo(rr * .08, rr * .28);
                ctx.closePath(); ctx.fill();
                ctx.restore();
                return;
            }
            case 'llama': {                      // 🔥 Fuego: llamitas que ascienden
                const h = p.r * 4 + 4, w = h * .42;
                const fl = 1 + .14 * Math.sin(t * p.ritmo * 7 + p.fase);
                const spr = spriteBrillo(color), tam = h * 3;
                ctx.globalAlpha = .3 + .3 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                ctx.globalAlpha = .7; ctx.fillStyle = color;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - h * fl);
                ctx.quadraticCurveTo(p.x + w * 1.5, p.y + h * .05, p.x, p.y + h * .4);
                ctx.quadraticCurveTo(p.x - w * 1.5, p.y + h * .05, p.x, p.y - h * fl);
                ctx.fill();
                ctx.globalAlpha = .55; ctx.fillStyle = '#fff1b8';         // corazón de la llama
                ctx.beginPath();
                ctx.moveTo(p.x, p.y - h * .45 * fl);
                ctx.quadraticCurveTo(p.x + w * .7, p.y + h * .1, p.x, p.y + h * .32);
                ctx.quadraticCurveTo(p.x - w * .7, p.y + h * .1, p.x, p.y - h * .45 * fl);
                ctx.fill();
                return;
            }
            case 'rayo': {                       // ⚡ Eléctrico: rayitos que parpadean
                const on = Math.sin(t * p.ritmo * 9 + p.fase) > .25;
                const s = p.r * 2.6 + 4, a = p.rot * .15;
                const c = Math.cos(a), sn = Math.sin(a);
                const P = [[.25, -1], [-.55, .1], [-.05, .1], [-.3, 1], [.55, -.2], [.05, -.2]]
                    .map(q => [p.x + (q[0] * c - q[1] * sn) * s, p.y + (q[0] * sn + q[1] * c) * s]);
                const spr = spriteBrillo(color), tam = s * 3;
                ctx.globalAlpha = on ? .55 : .12;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                ctx.globalAlpha = on ? .95 : .22; ctx.fillStyle = color;
                ctx.beginPath(); P.forEach((q, i) => i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])); ctx.closePath(); ctx.fill();
                if (on) { ctx.globalAlpha = .8; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .6; ctx.stroke(); }
                return;
            }
            case 'impacto': {                    // 👊 Lucha: ¡explosiones de golpe estilo cómic!
                const f = ((t * p.ritmo * .45 + p.fase) % 1 + 1) % 1;
                const R = p.r * 2 + f * p.r * 6.5;
                const spr = spriteBrillo(color), tam = R * 3.4;
                ctx.globalAlpha = (1 - f) * .55;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                ctx.beginPath();
                for (let i = 0; i < 14; i++) {          // estrella irregular de 7 picos
                    const rad = i % 2 === 0 ? R * (.9 + .25 * Math.sin(i * 1.7 + p.fase * 9)) : R * .5;
                    const ang = p.rot + i * Math.PI / 7;
                    const px = p.x + Math.cos(ang) * rad, py = p.y + Math.sin(ang) * rad;
                    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.globalAlpha = (1 - f) * .3; ctx.fillStyle = color; ctx.fill();
                ctx.globalAlpha = (1 - f) * .95; ctx.strokeStyle = color; ctx.lineWidth = 1.6 * (1 - f) + .6; ctx.stroke();
                ctx.globalAlpha = (1 - f) * .8; ctx.strokeStyle = '#fff2d8'; ctx.lineWidth = .7; ctx.stroke();
                return;
            }
            case 'toxica': {                     // ☠️ Veneno: burbujas tóxicas que estallan
                const f = ((t * p.ritmo * .32 + p.fase) % 1 + 1) % 1;
                if (f < .86) {
                    const r = p.r + 1.5 + f * 2;
                    ctx.globalAlpha = .28; ctx.fillStyle = color;
                    ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill();
                    ctx.globalAlpha = .75; ctx.strokeStyle = color; ctx.lineWidth = 1;
                    ctx.stroke();
                    ctx.globalAlpha = .6; ctx.fillStyle = '#ffffff';
                    ctx.beginPath(); ctx.arc(p.x - r * .35, p.y - r * .35, Math.max(.6, r * .2), 0, Math.PI * 2); ctx.fill();
                } else {                          // ¡pop!
                    const k = (f - .86) / .14, r = p.r + 3.5 + k * p.r * 3;
                    ctx.globalAlpha = (1 - k) * .8; ctx.strokeStyle = color; ctx.lineWidth = 1;
                    ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.stroke();
                    ctx.fillStyle = color;
                    for (let i = 0; i < 5; i++) {
                        const a = p.rot + i * Math.PI * 2 / 5;
                        ctx.beginPath(); ctx.arc(p.x + Math.cos(a) * r * 1.25, p.y + Math.sin(a) * r * 1.25, .9, 0, Math.PI * 2); ctx.fill();
                    }
                }
                return;
            }
            case 'polvo': {                      // 🏜️ Tierra / Roca: granos de polvo y arena
                ctx.globalAlpha = .25 + .5 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r * .55 + .3, 0, Math.PI * 2); ctx.fill();
                return;
            }
            case 'fragmento': {                  // 🪨 Tierra / Roca: guijarros y fragmentos angulosos
                const R = p.r * 1.5 + 1.5, a = p.rot + t * .5 * (p.ritmo - 1.4);
                ctx.globalAlpha = .7; ctx.fillStyle = color;
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const rad = R * (.65 + .35 * Math.abs(Math.sin(i * 2.3 + p.fase * 7)));
                    const ang = a + i * Math.PI / 3;
                    const px = p.x + Math.cos(ang) * rad, py = p.y + Math.sin(ang) * rad;
                    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                }
                ctx.closePath(); ctx.fill();
                ctx.globalAlpha = .45; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .6; ctx.stroke();
                return;
            }
            case 'viento': {                     // 🌬️ Volador: ráfagas de viento
                const L = p.r * 7 + 12, ond = Math.sin(t * p.ritmo + p.fase) * 2.5;
                ctx.globalAlpha = .18 + .4 * parpadeo; ctx.strokeStyle = color; ctx.lineWidth = .8 + p.r * .15;
                ctx.beginPath();
                ctx.moveTo(p.x - L, p.y);
                ctx.bezierCurveTo(p.x - L * .65, p.y - 3 + ond, p.x - L * .3, p.y + 3 - ond, p.x, p.y);
                ctx.arc(p.x, p.y - 3, 3, Math.PI / 2, -Math.PI * .65, true);   // remolino al final
                ctx.stroke();
                return;
            }
            case 'espiritu': {                   // 👻 Fantasma: fuegos fatuos con estela
                const dx = Math.cos(p.ang), dy = Math.sin(p.ang);
                for (let i = 5; i >= 0; i--) {
                    const k = i * (p.r * .9 + 1.4);
                    const ox = -dy * Math.sin(t * 4 + i * .8 + p.fase) * 1.8;
                    const oy =  dx * Math.sin(t * 4 + i * .8 + p.fase) * 1.8;
                    const spr = spriteBrillo(color), tam = p.r * (6.5 - i * .8);
                    ctx.globalAlpha = (.7 - i * .11) * (.55 + .45 * parpadeo);
                    ctx.drawImage(spr, p.x - dx * k + ox - tam / 2, p.y - dy * k + oy - tam / 2, tam, tam);
                }
                return;
            }
            case 'escama': {                     // 🐉 Dragón: escamas que destellan
                const s = p.r * 2.3 + 2, a = p.rot + t * .2 * (p.ritmo - 1.4);
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(a);
                ctx.globalAlpha = .25 + .3 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI); ctx.closePath(); ctx.fill();
                ctx.globalAlpha = .7; ctx.strokeStyle = color; ctx.lineWidth = .8;
                ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI); ctx.stroke();
                ctx.globalAlpha = .45;
                ctx.beginPath(); ctx.arc(0, 0, s * .6, 0, Math.PI); ctx.stroke();
                if (parpadeo > .88) { ctx.globalAlpha = .85; ctx.strokeStyle = '#ffffff'; ctx.beginPath(); ctx.arc(0, 0, s * .8, .3, 1.1); ctx.stroke(); }
                ctx.restore();
                return;
            }
            case 'ojos': {                       // 👀 Siniestro: ojos rojos que parpadean en la sombra
                const ab = Math.sin(t * p.ritmo * .5 + p.fase);
                if (ab < .35) return;
                const k = Math.min(1, (ab - .35) / .25);
                const rx = p.r * 1.2 + 1.6, ry = Math.max(.3, rx * .42 * k), sep = rx * 1.9;
                const spr = spriteBrillo('#ff3b4d'), tam = rx * 5;
                ctx.fillStyle = '#ff4256';
                for (const lado of [-1, 1]) {
                    ctx.globalAlpha = .4 * k;
                    ctx.drawImage(spr, p.x + lado * sep - tam / 2, p.y - tam / 2, tam, tam);
                    ctx.globalAlpha = .95 * k;
                    ctx.beginPath(); ctx.ellipse(p.x + lado * sep, p.y, rx, ry, lado * -.25, 0, Math.PI * 2); ctx.fill();
                }
                return;
            }
            case 'insecto': {                    // 🐞 Bicho: insectitos que revolotean
                const aleteo = Math.abs(Math.sin(t * p.ritmo * 14 + p.fase));
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.ang);
                ctx.globalAlpha = .12 + .3 * aleteo; ctx.fillStyle = '#eaffb0';
                ctx.beginPath(); ctx.ellipse(-.5, -p.r * .9, p.r * 1.3, p.r * .55, -.5, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.ellipse(-.5,  p.r * .9, p.r * 1.3, p.r * .55,  .5, 0, Math.PI * 2); ctx.fill();
                ctx.globalAlpha = .9; ctx.fillStyle = color;
                ctx.beginPath(); ctx.ellipse(0, 0, p.r * 1.2 + 1, p.r * .6 + .4, 0, 0, Math.PI * 2); ctx.fill();
                ctx.restore();
                return;
            }
            case 'astilla': {                    // ⚙️ Acero: astillas metálicas con reflejo
                const L = p.r * 3 + 4, W = p.r * .55 + .7, a = p.rot + t * .35 * (p.ritmo - 1.4);
                const c = Math.cos(a), sn = Math.sin(a);
                const P = [[-L, 0], [0, -W], [L, 0], [0, W]].map(q => [p.x + q[0] * c - q[1] * sn, p.y + q[0] * sn + q[1] * c]);
                ctx.globalAlpha = .55 + .35 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath(); P.forEach((q, i) => i ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])); ctx.closePath(); ctx.fill();
                if (parpadeo > .85) {             // brillo metálico
                    ctx.globalAlpha = .9; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .9;
                    ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]); ctx.lineTo(P[2][0], P[2][1]); ctx.stroke();
                }
                return;
            }
            case 'centella': {                   // ✨ Hada: destellos de cuatro puntas
                const s = (p.r * 2.4 + 2) * (.65 + .35 * parpadeo);
                const a = p.rot * .2 + t * .4 * (p.ritmo - 1.4);
                const spr = spriteBrillo(color), tam = s * 3.2;
                ctx.globalAlpha = .3 + .3 * parpadeo;
                ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);
                ctx.globalAlpha = .55 + .45 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath();
                for (let i = 0; i < 8; i++) {
                    const rad = i % 2 === 0 ? s : s * .2;
                    const ang = a - Math.PI / 2 + i * Math.PI / 4;
                    const px = p.x + Math.cos(ang) * rad, py = p.y + Math.sin(ang) * rad;
                    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                }
                ctx.closePath(); ctx.fill();
                return;
            }
            case 'corazon': {                    // 💗 Mesprit: corazones que laten y flotan
                const sz = (p.r * 2 + 2) * (.75 + .25 * parpadeo);
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.sin(t * p.ritmo * .6 + p.fase) * .35);
                ctx.globalAlpha = .45 + .45 * parpadeo; ctx.fillStyle = color;
                ctx.beginPath(); ctx.moveTo(0, sz);
                ctx.bezierCurveTo(-sz * 1.3, sz * .2, -sz * .9, -sz, 0, -sz * .3);
                ctx.bezierCurveTo(sz * .9, -sz, sz * 1.3, sz * .2, 0, sz);
                ctx.fill(); ctx.restore();
                return;
            }
            case 'nota': {                       // 🎵 Meloetta: notas musicales que ondulan
                const sz = 9 + p.r * 2.6;
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.sin(t * p.ritmo * .5 + p.fase) * .3);
                ctx.globalAlpha = .4 + .5 * parpadeo; ctx.fillStyle = color;
                ctx.font = sz + 'px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                ctx.fillText(p.rot > 3.1 ? '\u266A' : '\u266B', 0, 0);
                ctx.restore();
                return;
            }
        }

        // ---- estilos con brillo simple: destello, perla, niebla, brasa, energia ----
        const spr = spriteBrillo(color);
        let tam = p.r * 5;
        let alfa = .35 + .65 * parpadeo;
        if (p.estilo === 'niebla') { tam = p.r * 9; alfa *= .45; }
        if (p.estilo === 'perla')  { tam = p.r * 6; }
        if (p.estilo === 'brasa')  { tam = p.r * 5.5; alfa = .5 + .5 * Math.abs(Math.sin(t * p.ritmo * 2 + p.fase)); }
        ctx.globalAlpha = Math.min(1, alfa);
        ctx.drawImage(spr, p.x - tam / 2, p.y - tam / 2, tam, tam);

        if (p.estilo === 'destello' && parpadeo > .85) {
            ctx.globalAlpha = .6; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .8;
            ctx.beginPath();
            ctx.moveTo(p.x - tam * .7, p.y); ctx.lineTo(p.x + tam * .7, p.y);
            ctx.moveTo(p.x, p.y - tam * .7); ctx.lineTo(p.x, p.y + tam * .7);
            ctx.stroke();
        }
        if (p.estilo === 'energia') {
            ctx.globalAlpha = .28 * parpadeo; ctx.strokeStyle = color; ctx.lineWidth = Math.max(.8, p.r * .5);
            ctx.beginPath(); ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - Math.cos(p.ang) * p.vel * .22, p.y - Math.sin(p.ang) * p.vel * .22);
            ctx.stroke();
        }
    }

    function actualizarYDibujar(reg, dt, t) {
        const { ctx, ancho, alto, tema } = reg;
        ctx.clearRect(0, 0, ancho, alto);
        if (!tema) return;
        const cfg = tema.cfg;
        ctx.globalCompositeOperation = 'lighter';

        for (const p of reg.particulas) {
            // Rumbo libre: el ángulo deambula de forma aleatoria y suave.
            p.giro += (Math.random() - .5) * cfg.giro * 6 * dt;
            p.giro = Math.max(-1.6, Math.min(1.6, p.giro));
            p.ang += p.giro * dt;
            if (p.tono !== null) p.tono += dt * 14;    // el color de las partículas prisma va rotando

            let vx = Math.cos(p.ang) * p.vel + cfg.deriva[0] * 60;
            let vy = Math.sin(p.ang) * p.vel + cfg.deriva[1] * 60;
            if (p.estilo === 'burbuja') vx += Math.sin(t * p.ritmo + p.fase) * 12;   // vaivén al subir
            if (p.estilo === 'nieve')   vx += Math.sin(t * p.ritmo * .7 + p.fase) * 9;
            if (p.estilo === 'hoja' || p.estilo === 'pluma') vx += Math.sin(t * p.ritmo * .9 + p.fase) * 15;   // vaivén al caer
            if (p.estilo === 'polvo') vy += Math.sin(t * p.ritmo * .8 + p.fase) * 8;                          // remolino de arena
            if (p.estilo === 'viento') vy += Math.sin(t * p.ritmo * .6 + p.fase) * 6;

            p.x += vx * dt;
            p.y += vy * dt;

            // Al salir por un borde reaparecen por el opuesto.
            const m = 12;
            if (p.x < -m) p.x = ancho + m; else if (p.x > ancho + m) p.x = -m;
            if (p.y < -m) p.y = alto + m;  else if (p.y > alto + m) p.y = -m;

            dibujarParticula(ctx, p, tema, t);
        }
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
    }

    function visible(reg) {
        // El slide inactivo tiene display:none → clientWidth = 0.
        return reg.fondo.isConnected && reg.fondo.clientWidth > 0 && reg.fondo.clientHeight > 0;
    }

    function bucle(ahora) {
        if (!registros.size || document.hidden) { animando = false; return; }
        const t = ahora / 1000;
        const dt = Math.min(.05, (ahora - ultimoTiempo) / 1000 || .016);
        ultimoTiempo = ahora;

        registros.forEach(reg => {
            if (!reg.fondo.isConnected) { registros.delete(reg); return; }
            if (!visible(reg)) return;
            if (!ajustarTamano(reg)) return;
            actualizarYDibujar(reg, dt, t);
        });
        requestAnimationFrame(bucle);
    }

    function arrancar() {
        if (animando || reducirMovimiento) return;
        animando = true;
        ultimoTiempo = performance.now();
        requestAnimationFrame(bucle);
    }

    function enlazar(fondo) {
        if (fondo.__particulas) return;
        const canvas = document.createElement('canvas');
        canvas.className = 'fondo-particulas';
        canvas.width = canvas.height = 1;   // sin memoria de más hasta que el slide sea visible
        canvas.setAttribute('aria-hidden', 'true');
        fondo.appendChild(canvas);

        const reg = { fondo, canvas, ctx: canvas.getContext('2d'), ancho: 0, alto: 0, particulas: [], tema: null };
        fondo.__particulas = reg;
        registros.add(reg);

        // Si cambia la forma (cambia la clase), se regeneran con la nueva paleta/estilo.
        new MutationObserver(() => reconstruir(reg))
            .observe(fondo, { attributes: true, attributeFilter: ['class'] });

        // Con movimiento reducido se dibuja un único cuadro estático.
        if (reducirMovimiento) {
            requestAnimationFrame(() => { if (ajustarTamano(reg)) actualizarYDibujar(reg, 0, 0); });
        }
        arrancar();
    }

    function escanear(raiz) {
        (raiz || document).querySelectorAll('.fondo-legendario-dinamico, .fondo-tipo-particulas').forEach(enlazar);
    }

    function iniciar() {
        escanear(document);
        const cont = document.getElementById('contenedor-slides');
        if (cont) {
            new MutationObserver(() => escanear(cont)).observe(cont, { childList: true, subtree: true });
        }
        document.addEventListener('visibilitychange', () => { if (!document.hidden) arrancar(); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', iniciar);
    } else {
        iniciar();
    }
})();
