/* =========================================================
   ⚔️ COMBATE 1 CONTRA 1
   Enfrenta a dos Pokémon de tu colección (con la forma que elijas:
   Mega, regional, Gigantamax...). Usa tipo y estadísticas base reales
   (los mismos datos que ya corrige la Ficha Extra al cambiar de forma)
   para simular un combate por turnos sencillo, con ventajas y
   desventajas de tipo. No guarda historial: es solo para divertirse.
   ========================================================= */
(function () {
    'use strict';

    const ID_CONTENEDOR = 'contenido-minijuegos-equipo';
    const SPRITE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const NIVEL = 100;
    const PODER_MOVIMIENTO = 80;

    // Misma tabla de tipos que ya usan el minijuego de debilidades y el
    // análisis de equipo (ataque -> defensa; los casos no listados son x1).
    const TABLA = {
        normal: { roca: .5, acero: .5, fantasma: 0 },
        fuego: { fuego: .5, agua: .5, planta: 2, hielo: 2, bicho: 2, roca: .5, dragon: .5, acero: 2 },
        agua: { fuego: 2, agua: .5, planta: .5, tierra: 2, roca: 2, dragon: .5 },
        electrico: { agua: 2, electrico: .5, planta: .5, tierra: 0, volador: 2, dragon: .5 },
        planta: { fuego: .5, agua: 2, planta: .5, veneno: .5, tierra: 2, volador: .5, bicho: .5, roca: 2, dragon: .5, acero: .5 },
        hielo: { fuego: .5, agua: .5, planta: 2, hielo: .5, tierra: 2, volador: 2, dragon: 2, acero: .5 },
        lucha: { normal: 2, hielo: 2, veneno: .5, volador: .5, psiquico: .5, bicho: .5, roca: 2, fantasma: 0, siniestro: 2, acero: 2, hada: .5 },
        veneno: { planta: 2, veneno: .5, tierra: .5, roca: .5, fantasma: .5, acero: 0, hada: 2 },
        tierra: { fuego: 2, electrico: 2, planta: .5, veneno: 2, volador: 0, bicho: .5, roca: 2, acero: 2 },
        volador: { electrico: .5, planta: 2, lucha: 2, bicho: 2, roca: .5, acero: .5 },
        psiquico: { lucha: 2, veneno: 2, psiquico: .5, siniestro: 0, acero: .5 },
        bicho: { fuego: .5, planta: 2, lucha: .5, veneno: .5, volador: .5, psiquico: 2, fantasma: .5, siniestro: 2, acero: .5, hada: .5 },
        roca: { fuego: 2, hielo: 2, lucha: .5, tierra: .5, volador: 2, bicho: 2, acero: .5 },
        fantasma: { normal: 0, psiquico: 2, fantasma: 2, siniestro: .5 },
        dragon: { dragon: 2, acero: .5, hada: 0 },
        siniestro: { lucha: .5, psiquico: 2, fantasma: 2, siniestro: .5, hada: .5 },
        acero: { fuego: .5, agua: .5, electrico: .5, hielo: 2, roca: 2, acero: .5, hada: 2 },
        hada: { fuego: .5, lucha: 2, veneno: .5, dragon: 2, siniestro: 2, acero: .5 }
    };

    const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    const el = id => document.getElementById(id);
    const azar = (min, max) => Math.random() * (max - min) + min;

    function tiposDe(tipoStr) {
        return String(tipoStr || '').replace(/\([^)]*\)/g, '').split('/').map(t => norm(t)).filter(t => TABLA[t]);
    }
    function efectividad(tiposAtacante, tiposDefensor) {
        // La mejor de las dos "categorías de ataque" (física o especial) se elige
        // más adelante; aquí solo se calcula el multiplicador de tipo puro.
        let mejor = 0;
        tiposAtacante.forEach(atk => {
            const m = tiposDefensor.reduce((acc, def) => {
                const v = TABLA[atk] && TABLA[atk][def];
                return acc * (v === undefined ? 1 : v);
            }, 1);
            if (m > mejor || tiposAtacante.indexOf(atk) === 0) mejor = Math.max(mejor, m);
        });
        return mejor;
    }

    /* ---------- datos de un luchador (tipo + estadísticas reales de PokeAPI) ---------- */
    const cachePeleador = new Map();
    async function datosPeleador(pkmn, forma) {
        const idApi = (typeof idPokeApiEfectivo === 'function') ? await idPokeApiEfectivo(pkmn, forma) : pkmn.id;
        if (cachePeleador.has(idApi)) return cachePeleador.get(idApi);
        const promesa = (async () => {
            const r = await fetch('https://pokeapi.co/api/v2/pokemon/' + idApi);
            if (!r.ok) throw new Error('HTTP ' + r.status);
            const datos = await r.json();
            const stats = {};
            datos.stats.forEach(s => { stats[s.stat.name] = s.base_stat; });
            const tipos = (forma && forma.tipos) ? tiposDe(forma.tipos) : tiposDe(pkmn.tipo);
            return { stats, tipos: tipos.length ? tipos : ['normal'] };
        })();
        cachePeleador.set(idApi, promesa);
        promesa.catch(() => cachePeleador.delete(idApi));
        return promesa;
    }

    function estadisticaNivel100(base) { return Math.floor((2 * base + 31) * NIVEL / 100) + 5; }
    function hpNivel100(base) { return Math.floor((2 * base) * NIVEL / 100) + NIVEL + 10; }

    function construirLuchador(pkmn, forma, datos) {
        const s = datos.stats;
        return {
            pkmn, forma, tipos: datos.tipos,
            atk: estadisticaNivel100(s.attack || 50), def: estadisticaNivel100(s.defense || 50),
            spa: estadisticaNivel100(s['special-attack'] || 50), spd: estadisticaNivel100(s['special-defense'] || 50),
            vel: estadisticaNivel100(s.speed || 50),
            hpMax: hpNivel100(s.hp || 50), hp: hpNivel100(s.hp || 50)
        };
    }

    // Daño de UN golpe del atacante contra el defensor, probando ambas categorías
    // (física y especial) con los tipos del atacante y quedándose con la mejor.
    function calcularGolpe(atacante, defensor) {
        let mejorDanio = -1, mejorInfo = null;
        atacante.tipos.forEach(tipoMov => {
            [{ cat: 'fisico', atk: atacante.atk, def: defensor.def }, { cat: 'especial', atk: atacante.spa, def: defensor.spd }]
                .forEach(({ cat, atk, def }) => {
                    const ef = efectividad([tipoMov], defensor.tipos);
                    const stab = atacante.tipos.includes(tipoMov) ? 1.5 : 1;
                    const base = (((2 * NIVEL / 5 + 2) * PODER_MOVIMIENTO * (atk / def)) / 50 + 2);
                    const danio = base * stab * ef;
                    if (danio > mejorDanio) { mejorDanio = danio; mejorInfo = { tipoMov, ef, cat }; }
                });
        });
        const critico = Math.random() < 1 / 16;
        const variacion = azar(.85, 1);
        const final = Math.max(mejorInfo.ef === 0 ? 0 : 1, Math.round(mejorDanio * variacion * (critico ? 1.5 : 1)));
        return { danio: final, tipoMov: mejorInfo.tipoMov, ef: mejorInfo.ef, critico };
    }

    /* ---------- simulación completa (se calcula entera y luego se anima) ---------- */
    function simular(a, b) {
        const log = [];
        const primero = a.vel === b.vel ? (Math.random() < .5 ? a : b) : (a.vel > b.vel ? a : b);
        const segundo = primero === a ? b : a;
        log.push({ tipo: 'inicio', texto: `${nombreCorto(primero.pkmn)} es más veloz y ataca primero.` });

        let turno = 0;
        while (a.hp > 0 && b.hp > 0 && turno < 60) {
            turno++;
            for (const [atacante, defensor] of [[primero, segundo], [segundo, primero]]) {
                if (atacante.hp <= 0 || defensor.hp <= 0) continue;
                const golpe = calcularGolpe(atacante, defensor);
                defensor.hp = Math.max(0, defensor.hp - golpe.danio);
                log.push({
                    tipo: 'golpe', atacante, defensor, danio: golpe.danio, ef: golpe.ef, critico: golpe.critico,
                    hpDefensor: defensor.hp, hpMaxDefensor: defensor.hpMax,
                    texto: fraseGolpe(atacante, defensor, golpe)
                });
                if (defensor.hp <= 0) {
                    log.push({ tipo: 'ko', texto: `${nombreCorto(defensor.pkmn)} no puede continuar.` });
                    break;
                }
            }
        }
        let ganador;
        if (a.hp <= 0 && b.hp <= 0) {
            ganador = null; // K.O. mutuo en el mismo turno
        } else if (a.hp <= 0 || b.hp <= 0) {
            ganador = a.hp > 0 ? a : b; // el otro cayó K.O.
        } else {
            // Se llegó al límite de turnos sin que nadie caiga K.O. (p. ej. dos tipos
            // inmunes entre sí, como Normal y Fantasma). Gana quien conserve más
            // porcentaje de PS; si están exactamente igual, es un empate real.
            const pctA = a.hp / a.hpMax, pctB = b.hp / b.hpMax;
            ganador = pctA === pctB ? null : (pctA > pctB ? a : b);
        }
        log.push(ganador
            ? { tipo: 'fin', ganador, texto: `🏆 ¡${nombreCorto(ganador.pkmn)} gana el combate!` }
            : { tipo: 'fin', ganador: null, texto: '🤝 Nadie logra vencer al otro: ¡empate!' });
        return { log, ganador };
    }

    function nombreCorto(pkmn) { return pkmn.nombre; }
    function fraseGolpe(atacante, defensor, golpe) {
        const nombreTipo = (typeof TIPO_INFO !== 'undefined' && TIPO_INFO[golpe.tipoMov]) ? TIPO_INFO[golpe.tipoMov].nombre : golpe.tipoMov;
        let extra = '';
        if (golpe.ef === 0) extra = ` — ¡no afecta a ${nombreCorto(defensor.pkmn)}!`;
        else if (golpe.ef > 1) extra = ' — ¡Es supereficaz!';
        else if (golpe.ef < 1) extra = ' — No es muy eficaz…';
        const crit = golpe.critico ? ' ¡Golpe crítico!' : '';
        return `${nombreCorto(atacante.pkmn)} ataca con un movimiento de tipo ${esc(nombreTipo)}${crit} (${golpe.danio} de daño)${extra}`;
    }

    /* ---------- interfaz ---------- */
    function panelHTML(lado, letra) {
        return `
            <div class="combate-panel" id="combate-panel-${lado}">
                <h4>Luchador ${letra}</h4>
                <input type="text" id="combate-nombre-${lado}" class="minijuego-input" list="combate-lista" maxlength="40" autocomplete="off" placeholder="Escribe un Pokémon…" aria-label="Pokémon del luchador ${letra}">
                <select id="combate-forma-${lado}" class="minijuego-input combate-select-forma" aria-label="Forma del luchador ${letra}" hidden></select>
                <div class="combate-vista" id="combate-vista-${lado}" aria-hidden="true"></div>
            </div>`;
    }

    function crearTarjeta() {
        const cont = el(ID_CONTENEDOR);
        if (!cont || el('combate-1v1')) return;
        const tarjeta = document.createElement('div');
        tarjeta.id = 'combate-1v1';
        tarjeta.className = 'minijuego-pokemon combate-1v1';
        tarjeta.innerHTML =
            '<div class="minijuego-cabecera">' +
                '<span class="minijuego-icono">⚔️</span>' +
                '<div><h3>COMBATE 1 CONTRA 1</h3><p>Elige dos Pokémon (y su forma) y simula un combate con sus tipos y estadísticas reales.</p></div>' +
            '</div>' +
            '<div class="combate-panels">' + panelHTML('a', 'A') + '<div class="combate-vs">VS</div>' + panelHTML('b', 'B') + '</div>' +
            '<datalist id="combate-lista"></datalist>' +
            '<div class="minijuego-controles"><button type="button" id="combate-luchar" class="minijuego-btn minijuego-btn-adivinar">⚔️ ¡LUCHAR!</button></div>' +
            '<p id="combate-aviso" class="minijuego-resultado" aria-live="polite" hidden></p>' +
            '<div class="combate-arena" id="combate-arena" hidden>' +
                '<div class="combate-barra" id="combate-barra-a"></div>' +
                '<div class="combate-barra" id="combate-barra-b"></div>' +
                '<ol class="combate-log" id="combate-log" aria-live="polite"></ol>' +
                '<div class="minijuego-acciones"><button type="button" id="combate-revancha" class="minijuego-btn minijuego-btn-secundario" hidden>🔁 Revancha</button></div>' +
            '</div>';
        const reto = el('reto-diario');
        if (reto) reto.after(tarjeta); else cont.insertBefore(tarjeta, cont.firstChild);

        el('combate-lista').innerHTML = pokemonData.map(p => '<option value="' + esc(p.nombre) + '"></option>').join('');
        ['a', 'b'].forEach(lado => {
            el('combate-nombre-' + lado).addEventListener('input', () => actualizarFormasDisponibles(lado));
        });
        el('combate-luchar').addEventListener('click', iniciarCombate);
        el('combate-revancha').addEventListener('click', iniciarCombate);
    }

    function pokemonPorNombre(texto) { return pokemonData.find(p => norm(p.nombre) === norm(texto)); }

    function actualizarFormasDisponibles(lado) {
        const pkmn = pokemonPorNombre(el('combate-nombre-' + lado).value);
        const select = el('combate-forma-' + lado);
        const vista = el('combate-vista-' + lado);
        if (!pkmn) { select.hidden = true; select.innerHTML = ''; vista.innerHTML = ''; return; }
        if (pkmn.formas.length > 1) {
            select.innerHTML = pkmn.formas.map((f, i) => '<option value="' + i + '">' + esc(f.cap) + '</option>').join('');
            select.hidden = false;
        } else { select.hidden = true; select.innerHTML = ''; }
        const forma = pkmn.formas[0];
        const img = (forma && (forma.oficial || forma.png)) || (SPRITE + pkmn.id + '.png');
        vista.innerHTML = '<img src="' + esc(img) + '" alt="" loading="lazy" decoding="async">';
    }

    function leerLuchador(lado) {
        const pkmn = pokemonPorNombre(el('combate-nombre-' + lado).value);
        if (!pkmn) return null;
        const select = el('combate-forma-' + lado);
        const i = (!select.hidden && select.value !== '') ? Number(select.value) : 0;
        return { pkmn, forma: pkmn.formas[i] || pkmn.formas[0] };
    }

    function aviso(msg) {
        const p = el('combate-aviso');
        p.hidden = !msg;
        p.textContent = msg || '';
    }

    async function iniciarCombate() {
        const A = leerLuchador('a'), B = leerLuchador('b');
        if (!A || !B) { aviso('✏️ Elige un Pokémon válido para ambos luchadores (de la lista de sugerencias).'); return; }

        const btn = el('combate-luchar');
        btn.disabled = true; btn.textContent = '⏳ Preparando combate…';
        el('combate-revancha').hidden = true;
        aviso('');
        try {
            const [datosA, datosB] = await Promise.all([datosPeleador(A.pkmn, A.forma), datosPeleador(B.pkmn, B.forma)]);
            const a = construirLuchador(A.pkmn, A.forma, datosA);
            const b = construirLuchador(B.pkmn, B.forma, datosB);
            const { log, ganador } = simular(a, b);
            await animarCombate(a, b, log);
            try { if (typeof registrarResultadoMinijuego === 'function') registrarResultadoMinijuego('combate-1v1', !!ganador); } catch (_) { /* logros opcionales */ }
        } catch (err) {
            aviso('⚠️ No se pudo preparar el combate ahora mismo (sin conexión con PokeAPI). Inténtalo de nuevo.');
        } finally {
            btn.disabled = false; btn.textContent = '⚔️ ¡LUCHAR!';
        }
    }

    function barraHTML(lado, luchador) {
        const img = (luchador.forma && (luchador.forma.oficial || luchador.forma.png)) || (SPRITE + luchador.pkmn.id + '.png');
        return `<img src="${esc(img)}" alt="" loading="lazy" decoding="async">
            <div class="combate-barra-info">
                <strong>${esc(luchador.pkmn.nombre)}</strong>
                <div class="combate-hp-fondo"><div class="combate-hp-relleno" id="combate-hp-${lado}" style="width:100%"></div></div>
                <span id="combate-hp-texto-${lado}">${luchador.hpMax} / ${luchador.hpMax} PS</span>
            </div>`;
    }

    function actualizarHP(lado, hp, hpMax) {
        const pct = Math.max(0, Math.round((hp / hpMax) * 100));
        const relleno = el('combate-hp-' + lado);
        relleno.style.width = pct + '%';
        relleno.classList.toggle('bajo', pct <= 20);
        el('combate-hp-texto-' + lado).textContent = hp + ' / ' + hpMax + ' PS';
    }

    function animarCombate(a, b, log) {
        return new Promise(resolve => {
            el('combate-arena').hidden = false;
            el('combate-barra-a').innerHTML = barraHTML('a', a);
            el('combate-barra-b').innerHTML = barraHTML('b', b);
            const lista = el('combate-log');
            lista.innerHTML = '';
            let i = 0;
            const paso = () => {
                if (i >= log.length) { el('combate-revancha').hidden = false; resolve(); return; }
                const entrada = log[i++];
                const li = document.createElement('li');
                li.className = 'combate-linea combate-' + entrada.tipo;
                li.textContent = entrada.texto;
                lista.appendChild(li);
                lista.scrollTop = lista.scrollHeight;
                if (entrada.tipo === 'golpe') {
                    const lado = entrada.defensor === a ? 'a' : 'b';
                    actualizarHP(lado, entrada.hpDefensor, entrada.hpMaxDefensor);
                }
                setTimeout(paso, entrada.tipo === 'fin' ? 200 : 900);
            };
            paso();
        });
    }

    function iniciar() {
        if (typeof pokemonData === 'undefined' || !pokemonData.length) return;
        crearTarjeta();
    }
    document.addEventListener('DOMContentLoaded', () => { setTimeout(iniciar, 0); });
})();
