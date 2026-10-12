/* =========================================================
   📨 PETICIONES Y REPORTES → SUPABASE (opcional)
   Si Supabase está configurado, además de guardar en el navegador
   se envía una copia a tu proyecto para que TÚ la recibas.
   Sin configurar, todo sigue funcionando como antes (solo local).
   Requiere ejecutar sql_envios_supabase.sql.
   ========================================================= */
(() => {
    let cliente = null;
    function listo() {
        const cfg = window.SUPABASE_CONFIG || {};
        return !!(cfg.url && cfg.key && !String(cfg.url).includes('PEGA_AQUI') && !String(cfg.key).includes('PEGA_AQUI') && window.supabase);
    }
    function obtener() {
        if (!cliente && listo()) {
            try { cliente = window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.key); } catch { cliente = null; }
        }
        return cliente;
    }
    function primero(clave) {
        try { return (JSON.parse(localStorage.getItem(clave) || '[]'))[0] || null; } catch { return null; }
    }
    function envolver(nombreFuncion, claveLocal, tabla, mapear) {
        const original = window[nombreFuncion];
        if (typeof original !== 'function') return;
        window[nombreFuncion] = function (...args) {
            const antes = primero(claveLocal);
            const resultado = original.apply(this, args);
            const despues = primero(claveLocal);
            // Solo se envía si la validación original aceptó el envío (apareció un registro nuevo).
            if (despues && despues !== antes && JSON.stringify(despues) !== JSON.stringify(antes)) {
                const c = obtener();
                if (c) c.from(tabla).insert(mapear(despues)).then(({ error }) => { if (error) console.warn('Supabase (' + tabla + '):', error.message); });
            }
            return resultado;
        };
    }
    envolver('enviarPeticion', 'pokedex_peticiones', 'peticiones', r => ({ usuario: r.nombre, pokemon: r.pokemon }));
    envolver('enviarReporte', 'pokedex_reportes', 'reportes', r => ({ usuario: r.nombre, pokemon: r.pokemon || '', descripcion: r.descripcion }));
})();
