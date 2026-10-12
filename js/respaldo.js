/* =========================================================
   💾 RESPALDO DEL PROGRESO
   Exporta / importa todo lo que FavoriteDex guarda en este
   navegador (favoritos, apodos, cuentas, comentarios, logros...).
   ========================================================= */
(() => {
    const ID = 'modal-respaldo';

    function crearModal() {
        if (document.getElementById(ID)) return;
        const m = document.createElement('div');
        m.id = ID;
        m.className = 'modal-sitio';
        m.setAttribute('aria-hidden', 'true');
        m.innerHTML = `
            <div class="modal-contenido" role="dialog" aria-modal="true" aria-labelledby="respaldo-titulo">
                <button class="modal-cerrar" type="button" onclick="cerrarModal('${ID}')" aria-label="Cerrar">✕</button>
                <h2 id="respaldo-titulo">💾 Respaldo de mi progreso</h2>
                <p class="nota-sitio">Tus favoritos, apodos, cuentas, comentarios y logros viven solo en este navegador. Descarga un respaldo para no perderlos o para pasarlos a otro dispositivo.</p>
                <p class="nota-sitio"><strong>Guárdalo en privado:</strong> el archivo incluye tus cuentas locales (con la contraseña cifrada).</p>
                <button type="button" class="btn-modal-principal" id="respaldo-exportar">⬇️ Descargar respaldo</button>
                <label for="respaldo-archivo" class="respaldo-label">Restaurar desde un archivo</label>
                <input type="file" id="respaldo-archivo" class="campo-sitio" accept="application/json,.json">
                <button type="button" class="btn-modal-principal" id="respaldo-importar">⬆️ Restaurar respaldo</button>
                <p id="respaldo-mensaje" class="nota-sitio" role="status" aria-live="polite"></p>
            </div>`;
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) cerrarModal(ID); });
        document.getElementById('respaldo-exportar').addEventListener('click', exportar);
        document.getElementById('respaldo-importar').addEventListener('click', importar);
    }

    function msg(t) { const el = document.getElementById('respaldo-mensaje'); if (el) el.textContent = t; }

    function exportar() {
        const datos = {};
        try {
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                datos[k] = localStorage.getItem(k);
            }
        } catch (e) { return msg('❌ No se pudo leer el almacenamiento del navegador.'); }
        const paquete = { app: 'FavoriteDex', version: 1, fecha: new Date().toISOString(), datos };
        const blob = new Blob([JSON.stringify(paquete, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `favoritedex-respaldo-${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
        msg(`✅ Respaldo descargado (${Object.keys(datos).length} elementos).`);
    }

    function importar() {
        const archivo = document.getElementById('respaldo-archivo').files[0];
        if (!archivo) return msg('Selecciona primero un archivo de respaldo.');
        const lector = new FileReader();
        lector.onerror = () => msg('❌ No se pudo leer el archivo.');
        lector.onload = () => {
            let paquete;
            try { paquete = JSON.parse(lector.result); } catch { return msg('❌ El archivo no es un respaldo válido.'); }
            if (!paquete || paquete.app !== 'FavoriteDex' || typeof paquete.datos !== 'object' || !paquete.datos) {
                return msg('❌ Este archivo no parece un respaldo de FavoriteDex.');
            }
            const claves = Object.keys(paquete.datos);
            if (!confirm(`Se restaurarán ${claves.length} elementos y reemplazarán los actuales con el mismo nombre. ¿Continuar?`)) return;
            try {
                claves.forEach(k => { if (typeof paquete.datos[k] === 'string') localStorage.setItem(k, paquete.datos[k]); });
            } catch (e) { return msg('❌ No se pudo guardar (almacenamiento lleno o bloqueado).'); }
            msg('✅ Respaldo restaurado. Recargando…');
            setTimeout(() => location.reload(), 900);
        };
        lector.readAsText(archivo);
    }

    window.abrirRespaldo = function () { crearModal(); abrirModal(ID); msg(''); };
})();
