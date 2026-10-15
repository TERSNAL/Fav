/* Ventana que recuerda los Términos y la Política de Privacidad.
   Aparece al entrar a la web sin sesión iniciada y de nuevo al cerrar sesión. */
(() => {
    const haySesion = () => { try { return !!localStorage.getItem('pokedex_usuario_actual'); } catch (_) { return false; } };

    function mostrar() {
        if (document.getElementById('aviso-legal-fondo')) return;
        const fondo = document.createElement('div');
        fondo.id = 'aviso-legal-fondo';
        fondo.innerHTML = `
            <div id="aviso-legal-caja" role="dialog" aria-modal="true" aria-labelledby="aviso-legal-titulo">
                <h2 id="aviso-legal-titulo">📜 Antes de continuar</h2>
                <p>Al usar FavoriteDex y registrarte aceptas nuestros términos. Recuerda:</p>
                <ul>
                    <li>Es un proyecto de fans, no afiliado a Nintendo ni The Pokémon Company.</li>
                    <li>Lo que publiques en la Comunidad es <strong>público</strong>: no compartas datos personales.</li>
                    <li>Tu cuenta y progreso se guardan en <strong>este navegador</strong>.</li>
                    <li>Debes tener al menos 13 años.</li>
                </ul>
                <p>Lee los <a href="legal/terminos.html" target="_blank" rel="noopener">Términos y Condiciones</a> y la <a href="legal/privacidad.html" target="_blank" rel="noopener">Política de Privacidad</a>.</p>
                <div class="aviso-botones"><button type="button" id="aviso-legal-ok">Entendido</button></div>
            </div>`;
        const cerrar = () => { fondo.remove(); document.removeEventListener('keydown', alEsc); };
        const alEsc = e => { if (e.key === 'Escape') cerrar(); };
        fondo.querySelector('#aviso-legal-ok').addEventListener('click', cerrar);
        fondo.addEventListener('click', e => { if (e.target === fondo) cerrar(); });
        document.addEventListener('keydown', alEsc);
        document.body.appendChild(fondo);
        fondo.querySelector('#aviso-legal-ok').focus();
    }

    function alEntrar() { if (!haySesion()) mostrar(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', alEntrar); else alEntrar();
    document.addEventListener('sesion-cerrada', mostrar);
})();
