/* =========================================================
   📊 FICHA EXTRA: estadísticas base, habilidades y cadena evolutiva
   Se agrega a cada ficha con un botón; los datos se piden a PokeAPI
   solo cuando se pulsa (no alarga la carga inicial).
   ========================================================= */
(() => {
    const API = 'https://pokeapi.co/api/v2/';
    const SPRITE = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const STATS = [
        ['hp', 'PS'], ['attack', 'Ataque'], ['defense', 'Defensa'],
        ['special-attack', 'At. Esp.'], ['special-defense', 'Def. Esp.'], ['speed', 'Velocidad']
    ];
    const cache = new Map();

    const esc = t => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const cap = t => t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    const idDeUrl = u => Number(String(u).replace(/\/+$/, '').split('/').pop());

    async function pedir(ruta) {
        if (cache.has(ruta)) return cache.get(ruta);
        const p = fetch(ruta.startsWith('http') ? ruta : API + ruta).then(r => {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        });
        cache.set(ruta, p);
        p.catch(() => cache.delete(ruta));
        return p;
    }

    const nombreEs = lista => (lista.find(n => n.language.name === 'es') || lista.find(n => n.language.name === 'en') || {}).name;

    function radar(stats) {
        const cx = 110, cy = 110, R = 78, MAX = 200, n = STATS.length;
        const punto = (i, v) => {
            const a = -Math.PI / 2 + i * 2 * Math.PI / n;
            const r = R * Math.min(v, MAX) / MAX;
            return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
        };
        const poligono = v => STATS.map((_, i) => punto(i, v).map(x => x.toFixed(1)).join(',')).join(' ');
        const valores = STATS.map(([k]) => (stats[k] || 0));
        const dato = valores.map((v, i) => punto(i, v).map(x => x.toFixed(1)).join(',')).join(' ');
        const rejilla = [50, 100, 150, 200].map(v => `<polygon points="${poligono(v)}" class="radar-rejilla"/>`).join('');
        const ejes = STATS.map((_, i) => { const [x, y] = punto(i, MAX); return `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="radar-rejilla"/>`; }).join('');
        const etiquetas = STATS.map(([, nombre], i) => {
            const [x, y] = punto(i, MAX + 42);
            return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" class="radar-etiqueta" text-anchor="middle" dominant-baseline="middle">${nombre}</text>`;
        }).join('');
        return `<svg viewBox="0 0 220 220" class="radar-stats" role="img" aria-label="Gráfico de estadísticas base">${rejilla}${ejes}<polygon points="${dato}" class="radar-datos"/>${etiquetas}</svg>`;
    }

    function nodoEvo(n) {
        const id = idDeUrl(n.species.url);
        const det = (n.evolution_details && n.evolution_details[0]) || null;
        let cond = '';
        if (det) {
            if (det.min_level) cond = 'Nv. ' + det.min_level;
            else if (det.trigger && det.trigger.name === 'trade') cond = 'Intercambio';
            else if (det.item || (det.trigger && det.trigger.name === 'use-item')) cond = 'Objeto';
            else if (det.min_happiness) cond = 'Amistad';
            else cond = 'Especial';
        }
        const hijos = n.evolves_to.map(nodoEvo).join('');
        return `<div class="evo-rama">
            <div class="evo-nodo">${cond ? `<small class="evo-cond">${esc(cond)}</small>` : ''}
                <img src="${SPRITE}${id}.png" alt="" width="64" height="64" loading="lazy" decoding="async">
                <span class="evo-nombre" data-especie="${id}">${esc(cap(n.species.name))}</span></div>
            ${hijos ? `<span class="evo-flecha" aria-hidden="true">→</span><div class="evo-hijos">${hijos}</div>` : ''}
        </div>`;
    }

    async function cargar(pkmn, cont, forma) {
        cont.innerHTML = '<p class="extra-estado">⏳ Cargando datos…</p>';
        const formaActiva = forma || (typeof obtenerFormaVisible === 'function' ? obtenerFormaVisible(pokemonData.indexOf(pkmn)) : pkmn.formas[0]);
        const idApi = (formaActiva && typeof idPokeApiEfectivo === 'function')
            ? await idPokeApiEfectivo(pkmn, formaActiva)
            : pkmn.id;
        const esFormaDistinta = String(idApi) !== String(pkmn.id);
        try {
            const [datos, especie] = await Promise.all([pedir('pokemon/' + idApi), pedir('pokemon-species/' + pkmn.id)]);
            const stats = {};
            datos.stats.forEach(s => { stats[s.stat.name] = s.base_stat; });
            const total = STATS.reduce((a, [k]) => a + (stats[k] || 0), 0);
            const filas = STATS.map(([k, n]) => `<li><span>${n}</span><strong>${stats[k] || 0}</strong></li>`).join('');

            const habilidades = await Promise.all(datos.abilities.map(async a => {
                try { const info = await pedir(a.ability.url); return { nombre: nombreEs(info.names) || cap(a.ability.name), oculta: a.is_hidden }; }
                catch { return { nombre: cap(a.ability.name), oculta: a.is_hidden }; }
            }));
            const chips = habilidades.map(h => `<span class="extra-chip${h.oculta ? ' oculta' : ''}">${esc(h.nombre)}${h.oculta ? ' (oculta)' : ''}</span>`).join('');

            const cadena = await pedir(especie.evolution_chain.url);
            const evo = cadena.chain.evolves_to.length
                ? `<div class="evo-cadena">${nodoEvo(cadena.chain)}</div>`
                : '<p class="extra-estado">Este Pokémon no evoluciona.</p>';

            cont.innerHTML = `
                <div class="extra-grid">
                    <div class="extra-bloque"><h4>📊 Estadísticas base <small>(${esFormaDistinta && forma ? esc(forma.cap) : 'forma base'})</small></h4>
                        <div class="extra-stats">${radar(stats)}<ul class="lista-stats">${filas}<li class="total"><span>Total</span><strong>${total}</strong></li></ul></div></div>
                    <div class="extra-bloque"><h4>✨ Habilidades</h4><div class="extra-chips">${chips}</div>
                        <h4>🧬 Cadena evolutiva</h4>${evo}</div>
                </div>`;

            // Nombres en español de la cadena (segunda pasada, no bloquea lo anterior).
            cont.querySelectorAll('.evo-nombre[data-especie]').forEach(async el => {
                try { const e = await pedir('pokemon-species/' + el.dataset.especie); const nom = nombreEs(e.names); if (nom) el.textContent = nom; } catch { /* se queda el nombre en inglés */ }
            });
        } catch (err) {
            cont.innerHTML = '<p class="extra-estado">⚠️ No se pudieron cargar los datos ahora mismo. <button type="button" class="btn-extra-reintentar">Reintentar</button></p>';
            const b = cont.querySelector('.btn-extra-reintentar');
            if (b) b.addEventListener('click', () => cargar(pkmn, cont));
        }
    }

    function aumentar(slide) {
        if (!slide || slide.dataset.extra || !slide.dataset.listo) return;
        const idx = Array.prototype.indexOf.call(document.querySelectorAll('#contenedor-slides > .slide'), slide);
        const pkmn = (typeof pokemonData !== 'undefined') ? pokemonData[idx] : null;
        if (!pkmn) return;
        slide.dataset.extra = '1';
        const seccion = document.createElement('section');
        seccion.className = 'seccion-datos-extra';
        seccion.innerHTML = '<button type="button" class="btn-datos-extra">📊 Ver estadísticas, habilidades y evolución</button><div class="extra-contenido" aria-live="polite"></div>';
        const primera = slide.querySelector(':scope > section');
        if (primera) primera.after(seccion); else slide.appendChild(seccion);
        const btn = seccion.querySelector('.btn-datos-extra');
        const cont = seccion.querySelector('.extra-contenido');
        const formaVisible = () => (typeof obtenerFormaVisible === 'function' ? obtenerFormaVisible(idx) : pkmn.formas[0]);
        btn.addEventListener('click', () => { btn.hidden = true; cargar(pkmn, cont, formaVisible()); });
        // Si la ficha ya estaba mostrando sus estadísticas y la forma cambia
        // (Mega, regional, Primigenia...), se recargan con los datos de la
        // nueva forma en vez de dejar los de la forma anterior.
        slide.__extraRefs = { pkmn, cont, btn, idx };
    }

    document.addEventListener('forma-actualizada', e => {
        const { index } = e.detail || {};
        const slide = document.querySelectorAll('#contenedor-slides > .slide')[index];
        const refs = slide && slide.__extraRefs;
        if (refs && refs.btn.hidden) cargar(refs.pkmn, refs.cont, e.detail.forma);
    });

    function iniciar() {
        const contenedor = document.getElementById('contenedor-slides');
        if (!contenedor) return;
        const visible = () => contenedor.querySelectorAll(':scope > .slide').forEach(s => { if (s.style.display !== 'none') aumentar(s); });
        visible();
        contenedor.addEventListener('slide-hidratado', e => { if (e.detail.slide.style.display !== 'none') aumentar(e.detail.slide); });
        new MutationObserver(muts => {
            for (const m of muts) if (m.target.classList && m.target.classList.contains('slide') && m.target.style.display !== 'none') aumentar(m.target);
        }).observe(contenedor, { attributes: true, attributeFilter: ['style'], subtree: true });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar); else iniciar();
})();
