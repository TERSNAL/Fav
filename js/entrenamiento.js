/* =========================================================
   🏷️ APODOS + 🏟️ EQUIPO DE GIMNASIO + 💎 MEGAEVOLUCIÓN
   ========================================================= */
(function(){
    const CLAVE_APODOS = 'pokedex_apodos';
    const CLAVE_EQUIPO = 'pokedex_equipo_gimnasio';
    const CLAVE_MEGA_EQUIPO = 'pokedex_mega_equipo';
    const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(k) || JSON.stringify(d)); } catch { return d; } };
    const guardar = (k,v) => localStorage.setItem(k, JSON.stringify(v));
    const safe = t => String(t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');

    window.obtenerApodo = function(id){ return leer(CLAVE_APODOS,{})[String(id)] || ''; };
    window.guardarApodo = function(id){
        const input=document.getElementById('apodo-'+id), aviso=document.getElementById('apodo-guardado-'+id);
        if(!input) return;
        const apodos=leer(CLAVE_APODOS,{}), valor=input.value.trim().slice(0,20);
        if(valor) apodos[String(id)]=valor; else delete apodos[String(id)];
        guardar(CLAVE_APODOS,apodos);
        if(aviso){ aviso.textContent=valor ? '✅ Apodo guardado: '+valor : '🧹 Apodo eliminado.'; }
        const p=Array.isArray(window.pokemonData)?pokemonData.find(x=>Number(x.id)===Number(id)):null;
        if(p){ const h=document.getElementById('nombre-pokemon-'+id); if(h) h.innerHTML=valor ? '#'+String(p.id).padStart(4,'0')+' - '+safe(p.nombre)+' <span class="apodo-titulo">('+safe(valor)+')</span>' : '#'+String(p.id).padStart(4,'0')+' - '+safe(p.nombre); }
        if(typeof renderEquipo==='function') renderEquipo();
    };

    function imagenPokemon(p, megaForm){
        const f = megaForm || (Array.isArray(p.formas)?p.formas[0]:null);
        return f ? (f.png || f.oficial || '') : '';
    }

    function megasDe(p){
        if(!p || !Array.isArray(p.formas)) return [];
        return p.formas.map((f,i)=>({f,i})).filter(x=>/^mega\s*[- ]/i.test(String(x.f.cap||'')) || /^mega/i.test(String(x.f.cap||'')));
    }

    function megaSeleccionada(id){
        const mapa=leer(CLAVE_MEGA_EQUIPO,{});
        return mapa[String(id)] ?? null;
    }

    function limpiarMegaDeEquipo(exceptoId){
        const mapa=leer(CLAVE_MEGA_EQUIPO,{});
        Object.keys(mapa).forEach(k=>{ if(String(k)!==String(exceptoId)) delete mapa[k]; });
        guardar(CLAVE_MEGA_EQUIPO,mapa);
    }

    function equipoValido(){
        const bruto=leer(CLAVE_EQUIPO,[]);
        if(!Array.isArray(bruto)) return [];
        const vistos=new Set();
        return bruto.filter(id=>{
            const n=Number(id);
            if(!Number.isFinite(n) || n<=0) return false;
            if(!Array.isArray(pokemonData) || !pokemonData.some(p=>Number(p.id)===n)) return false;
            if(vistos.has(n)) return false;
            vistos.add(n);
            return true;
        }).slice(0,4);
    }

    function renderEquipo(){
        const cont=document.getElementById('equipo-slots'); if(!cont) return;
        let equipo=equipoValido();
        guardar(CLAVE_EQUIPO,equipo);
        const mapaMega=leer(CLAVE_MEGA_EQUIPO,{});
        cont.innerHTML='';

        for(let i=0;i<4;i++){
            const id=equipo[i], p=Array.isArray(pokemonData)?pokemonData.find(x=>Number(x.id)===Number(id)):null;
            const slot=document.createElement('div'); slot.className='equipo-slot'+(p?' ocupado':'');
            if(p){
                const ap=obtenerApodo(p.id);
                const megas=megasDe(p);
                let megaIndex = mapaMega[String(p.id)];
                const megaForm = megas.find(x=>x.i===megaIndex)?.f || null;
                const img=imagenPokemon(p,megaForm);
                const nombreMostrado=megaForm ? megaForm.cap : (ap||p.nombre);
                const subtitulo=megaForm ? `${ap ? safe(ap)+' · ' : ''}${safe(p.nombre)} · ${safe(megaForm.cap)}` : `#${String(p.id).padStart(4,'0')} · ${safe(p.nombre)}`;
                slot.innerHTML=`<span class="equipo-numero">${i+1}</span>
                    <button type="button" class="btn-quitar-equipo" data-id="${p.id}" aria-label="Quitar ${safe(p.nombre)}">✕</button>
                    <img class="equipo-sprite" src="${safe(img)}" alt="${safe(nombreMostrado)}" decoding="async">
                    <strong>${safe(nombreMostrado)}</strong>
                    <small>${subtitulo}</small>
                    ${megas.length ? `<div class="equipo-mega-control">
                        <button type="button" class="btn-mega-equipo ${megaForm?'activo':''}" data-id="${p.id}" title="${megaForm?'Revertir Megaevolución':'Mega-evolucionar este Pokémon'}">
                            <span class="mega-emoji" aria-hidden="true">🌟</span> <span>${megaForm ? 'REVERTIR MEGA' : 'MEGAEVOLUCIONAR'}</span>
                        </button>
                        ${megas.length>1 ? `<span class="mega-opciones">${megas.map((x,j)=>`<button type="button" class="mega-mini-option ${megaIndex===x.i?'seleccionada':''}" data-id="${p.id}" data-forma="${x.i}">${safe(x.f.cap.replace(/^Mega[- ]?/i,''))}</button>`).join('')}</span>` : ''}
                    </div>` : ''}`;
            } else slot.innerHTML=`<span class="equipo-numero">${i+1}</span><span class="equipo-vacio">＋<br><small>Espacio libre</small></span>`;
            cont.appendChild(slot);
        }

        cont.querySelectorAll('.btn-quitar-equipo').forEach(b=>b.addEventListener('click',()=>{
            const id=Number(b.dataset.id);
            const eq=leer(CLAVE_EQUIPO,[]).filter(x=>Number(x)!==id);
            const mapa=leer(CLAVE_MEGA_EQUIPO,{}); delete mapa[String(id)];
            guardar(CLAVE_EQUIPO,eq); guardar(CLAVE_MEGA_EQUIPO,mapa);
            mensajeEquipo('Pokémon retirado del equipo.',''); renderEquipo();
        }));
        cont.querySelectorAll('.btn-mega-equipo').forEach(b=>b.addEventListener('click',()=>toggleMega(Number(b.dataset.id))));
        cont.querySelectorAll('.mega-mini-option').forEach(b=>b.addEventListener('click',()=>seleccionarMega(Number(b.dataset.id),Number(b.dataset.forma))));
        const sel=document.getElementById('selector-equipo'); if(sel) sel.value='';
        if(typeof window.actualizarAnalisisEquipo==='function') window.actualizarAnalisisEquipo();
    }
    window.renderEquipo=renderEquipo;

    function seleccionarMega(id, formaIndex){
        const p=Array.isArray(pokemonData)?pokemonData.find(x=>Number(x.id)===id):null;
        if(!p) return;
        const megas=megasDe(p);
        if(!megas.some(x=>x.i===formaIndex)) return;
        const mapa=leer(CLAVE_MEGA_EQUIPO,{});
        if(mapa[String(id)]===formaIndex){ delete mapa[String(id)]; mensajeEquipo('↩️ Volvió a su forma normal.',''); }
        else {
            // 🌟 Sonido de Megaevolución independiente de la transformación.
            try {
                audioMega.pause();
                audioMega.currentTime = 0;
                audioMega.volume = 0.7;
                audioMega.play().catch(err => console.log('No se pudo reproducir mega-evolution.mp3:', err));
            } catch(err) { console.log('No se pudo preparar el sonido de Mega:', err); }
            limpiarMegaDeEquipo(id); const actualizado=leer(CLAVE_MEGA_EQUIPO,{}); actualizado[String(id)]=formaIndex; guardar(CLAVE_MEGA_EQUIPO,actualizado); mensajeEquipo('💎 '+p.nombre+' está Mega-evolucionado. Solo una Mega está activa.','exito'); return renderEquipo();
        }
        guardar(CLAVE_MEGA_EQUIPO,mapa); renderEquipo();
    }

    function toggleMega(id){
        const p=Array.isArray(pokemonData)?pokemonData.find(x=>Number(x.id)===id):null;
        if(!p) return;
        const megas=megasDe(p);
        if(!megas.length) return;
        const actual=megaSeleccionada(id);
        if(actual!==null){ const mapa=leer(CLAVE_MEGA_EQUIPO,{}); delete mapa[String(id)]; guardar(CLAVE_MEGA_EQUIPO,mapa); mensajeEquipo('↩️ '+p.nombre+' volvió a su forma normal.',''); renderEquipo(); return; }
        if(megas.length===1) return seleccionarMega(id,megas[0].i);
        // Con dos Megas, la primera pulsación activa la primera y luego se puede escoger la otra.
        seleccionarMega(id,megas[0].i);
    }

    function mensajeEquipo(t,clase){ const m=document.getElementById('equipo-mensaje'); if(m){m.textContent=t;m.className='equipo-mensaje '+clase;} }
    function llenarSelector(){
        const sel=document.getElementById('selector-equipo'); if(!sel||!Array.isArray(pokemonData))return;
        sel.innerHTML='<option value="">-- Elige un Pokémon --</option>';
        pokemonData.forEach(p=>{ const o=document.createElement('option'); o.value=p.id; o.textContent='#'+String(p.id).padStart(4,'0')+' - '+p.nombre; sel.appendChild(o); });
    }
    // 🔊 Reproduce el grito normal del Pokémon seleccionado en el selector del equipo.
    // Si el Pokémon tiene un grito propio registrado en sus datos, se usa ese;
    // si no, se intenta el grito correspondiente de PokeAPI. El sonido nunca
    // bloquea la selección ni el funcionamiento del equipo.
    function reproducirGritoEquipo(pokemon){
        if(!pokemon) return;
        const forma = Array.isArray(pokemon.formas) ? pokemon.formas[0] : null;
        const src = (forma && forma.grito) || `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokemon.id}.ogg`;
        try {
            reproductorAudio.pause();
            reproductorAudio.currentTime = 0;
            reproductorAudio.src = src;
            reproductorAudio.load();
            reproductorAudio.volume = 0.65;
            const prom=reproductorAudio.play();
            if(prom && typeof prom.catch==='function') prom.catch(err => console.log('No se pudo reproducir el grito del equipo:', err));
        } catch(err) {
            console.log('No se pudo preparar el grito del equipo:', err);
        }
    }

    function agregarEquipo(){
        const sel=document.getElementById('selector-equipo'); if(!sel||!sel.value)return mensajeEquipo('⚠️ Selecciona un Pokémon primero.','error');
        const id=Number(sel.value), eq=equipoValido();
        if(eq.length>=4)return mensajeEquipo('🛑 Tu equipo ya tiene 4 Pokémon. Retira uno para cambiarlo.','error');
        if(eq.some(x=>Number(x)===id))return mensajeEquipo('⚠️ Ese Pokémon ya está en tu equipo.','error');
        const pokemon = Array.isArray(pokemonData) ? pokemonData.find(x=>Number(x.id)===id) : null;
        if(pokemon) reproducirGritoEquipo(pokemon);
        eq.push(id); guardar(CLAVE_EQUIPO,eq); mensajeEquipo('✅ Pokémon agregado al equipo.','exito'); renderEquipo();
    }
    function aplicarApodos(soloId){
        const apodos=leer(CLAVE_APODOS,{});
        if(!Array.isArray(pokemonData)) return;
        (typeof soloId==='number'?pokemonData.filter(p=>p.id===soloId):pokemonData).forEach(p=>{
            const valor=apodos[String(p.id)]||'';
            const input=document.getElementById('apodo-'+p.id);
            const aviso=document.getElementById('apodo-guardado-'+p.id);
            const h=document.getElementById('nombre-pokemon-'+p.id);
            if(input) input.value=valor;
            if(h) h.innerHTML=valor ? '#'+String(p.id).padStart(4,'0')+' - '+safe(p.nombre)+' <span class="apodo-titulo">('+safe(valor)+')</span>' : '#'+String(p.id).padStart(4,'0')+' - '+safe(p.nombre);
            if(aviso && valor) aviso.textContent='🏷️ Apodo actual: '+valor;
        });
    }
    document.addEventListener('DOMContentLoaded',()=>{
        setTimeout(aplicarApodos,50); llenarSelector(); renderEquipo();
        const contSlides=document.getElementById('contenedor-slides'); if(contSlides) contSlides.addEventListener('slide-hidratado',e=>{const p=pokemonData[e.detail.idx]; if(p) aplicarApodos(p.id);});
        const b=document.getElementById('btn-agregar-equipo'), l=document.getElementById('btn-limpiar-equipo');
        if(b)b.addEventListener('click',agregarEquipo);
        if(l)l.addEventListener('click',()=>{guardar(CLAVE_EQUIPO,[]);guardar(CLAVE_MEGA_EQUIPO,{});mensajeEquipo('🧹 Equipo vacío.','');renderEquipo();});
        const selector = document.getElementById('selector-equipo');
        if(selector) selector.addEventListener('change',()=>{
            const id = Number(selector.value);
            const pokemon = Array.isArray(pokemonData) ? pokemonData.find(x=>Number(x.id)===id) : null;
            if(pokemon) reproducirGritoEquipo(pokemon);
        });
    });
})();


/* =========================================================
   👥 COMUNIDAD POKÉMON - SUPABASE
   ========================================================= */
(function(){
    let categoriaComunidad = 'principales';
    let supabaseComunidad = null;
    const CONFIG = window.SUPABASE_CONFIG || {};

    function comunidadUsuario(){
        return (window.usuarioActual || localStorage.getItem('pokedex_usuario_actual') || '').trim();
    }
    function esc(t){
        return String(t ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
    }
    function configurada(){
        return !!(CONFIG.url && CONFIG.key && !String(CONFIG.url).includes('PEGA_AQUI') && !String(CONFIG.key).includes('PEGA_AQUI') && window.supabase);
    }
    function initSupabase(){
        if(!configurada()) return false;
        try{
            supabaseComunidad = window.supabase.createClient(CONFIG.url, CONFIG.key);
            return true;
        }catch(e){
            console.error('No se pudo iniciar Supabase:', e);
            return false;
        }
    }

    function avisoCuenta(){
        const el=document.getElementById('comunidad-cuenta-aviso');
        const form=document.getElementById('comunidad-form');
        if(!el) return;
        const user=comunidadUsuario();
        if(user){
            el.className='comunidad-aviso comunidad-aviso-ok';
            el.innerHTML=`👤 Publicando como <strong>${esc(user)}</strong>.`;
            if(form) form.style.display='block';
        }else{
            el.className='comunidad-aviso comunidad-aviso-error';
            el.innerHTML='🔐 Para publicar necesitas iniciar sesión. <button type="button" onclick="abrirModal(\'modal-cuenta\')">INICIAR SESIÓN</button>';
            if(form) form.style.display='none';
        }
    }

    function mensaje(t, ok=false){
        const el=document.getElementById('comunidad-form-mensaje');
        if(el){ el.textContent=t; el.className='comunidad-form-mensaje '+(ok?'ok':'error'); }
    }

    async function cargarComunidad(){
        const estado=document.getElementById('comunidad-estado');
        const feed=document.getElementById('comunidad-feed');
        avisoCuenta();
        if(!feed || !estado) return;
        if(!supabaseComunidad){
            estado.className='comunidad-estado comunidad-configuracion';
            estado.innerHTML='☁️ <strong>La Comunidad está preparada.</strong><br>Falta conectar tu proyecto de Supabase. Completa <code>supabase-config.js</code> y ejecuta <code>comunidad_supabase.sql</code>.';
            feed.innerHTML='';
            return;
        }
        estado.className='comunidad-estado';
        estado.textContent='Cargando publicaciones...';
        const {data,error}=await supabaseComunidad
            .from('comunidad_publicaciones')
            .select('*')
            .eq('categoria',categoriaComunidad)
            .order('creado_en',{ascending:false})
            .limit(50);
        if(error){
            console.error(error);
            estado.textContent='No se pudieron cargar las publicaciones. Revisa la configuración de Supabase y las políticas del SQL.';
            return;
        }
        estado.textContent=data.length ? `${data.length} publicación${data.length===1?'':'es'}` : 'Todavía no hay publicaciones en esta categoría.';
        feed.innerHTML=data.map(renderPublicacion).join('');
        await cargarDetallesPublicaciones(data || []);
    }

    function renderPublicacion(p){
        let media='';
        if(p.media_url && p.media_tipo==='image') media=`<img class="comunidad-media-img" src="${esc(p.media_url)}" alt="Imagen de ${esc(p.usuario)}" loading="lazy" decoding="async">`;
        if(p.media_url && p.media_tipo==='video') media=`<video class="comunidad-media-video" src="${esc(p.media_url)}" controls preload="metadata"></video>`;
        return `<article class="comunidad-post" data-post-id="${p.id}">
            <div class="comunidad-post-cabecera"><div class="comunidad-avatar">👤</div><div><strong>${esc(p.usuario)}</strong><small>${new Date(p.creado_en).toLocaleString('es-DO')}</small></div></div>
            <p class="comunidad-post-texto">${esc(p.texto).replace(/\n/g,'<br>')}</p>
            ${media}
            <div class="comunidad-post-acciones">
                <button type="button" class="comunidad-like-btn" data-id="${p.id}">❤️ <span class="like-count">0</span></button>
                <button type="button" class="comunidad-comentar-btn" data-id="${p.id}">💬 Comentarios</button>
            </div>
            <div class="comunidad-comentarios" id="comentarios-${p.id}"></div>
            <form class="comunidad-comentario-form" data-id="${p.id}">
                <input maxlength="500" placeholder="Escribe un comentario..." aria-label="Comentario">
                <button type="submit">Enviar</button>
            </form>
        </article>`;
    }

    async function cargarDetallesPublicaciones(posts){
        if(!supabaseComunidad) return;
        for(const p of posts){
            const [cr,lk]=await Promise.all([
                supabaseComunidad.from('comunidad_comentarios').select('*').eq('publicacion_id',p.id).order('creado_en',{ascending:true}),
                supabaseComunidad.from('comunidad_reacciones').select('usuario').eq('publicacion_id',p.id)
            ]);
            const box=document.getElementById(`comentarios-${p.id}`);
            if(box) box.innerHTML=(cr.data||[]).map(c=>`<div class="comunidad-comentario"><strong>${esc(c.usuario)}</strong><span>${esc(c.texto)}</span></div>`).join('') || '<span class="sin-comentarios">Sé el primero en comentar.</span>';
            const card=document.querySelector(`.comunidad-post[data-post-id="${p.id}"]`);
            const count=card?.querySelector('.like-count'); if(count) count.textContent=(lk.data||[]).length;
        }
        document.querySelectorAll('.comunidad-like-btn').forEach(b=>b.onclick=()=>reaccionar(Number(b.dataset.id)));
        document.querySelectorAll('.comunidad-comentario-form').forEach(f=>f.onsubmit=async e=>{e.preventDefault();await comentar(Number(f.dataset.id),f.querySelector('input'));});
        document.querySelectorAll('.comunidad-comentar-btn').forEach(b=>b.onclick=()=>document.querySelector(`.comunidad-comentario-form[data-id="${b.dataset.id}"] input`)?.focus());
    }

    async function reaccionar(id){
        const user=comunidadUsuario();
        if(!user) return abrirModal('modal-cuenta');
        const {data}=await supabaseComunidad.from('comunidad_reacciones').select('id').eq('publicacion_id',id).eq('usuario',user).maybeSingle();
        if(data?.id) await supabaseComunidad.from('comunidad_reacciones').delete().eq('id',data.id);
        else await supabaseComunidad.from('comunidad_reacciones').insert({publicacion_id:id,usuario:user});
        cargarComunidad();
    }

    async function comentar(id,input){
        const user=comunidadUsuario();
        const texto=(input?.value||'').trim();
        if(!user) return abrirModal('modal-cuenta');
        if(!texto) return;
        const {error}=await supabaseComunidad.from('comunidad_comentarios').insert({publicacion_id:id,usuario:user,texto:texto.slice(0,500)});
        if(error) return alert('No se pudo publicar el comentario.');
        input.value=''; cargarComunidad();
    }

    async function publicar(e){
        e.preventDefault();
        const user=comunidadUsuario();
        if(!user) return abrirModal('modal-cuenta');
        if(!supabaseComunidad) return mensaje('Conecta Supabase antes de publicar.');
        const texto=document.getElementById('comunidad-texto')?.value.trim()||'';
        const file=document.getElementById('comunidad-media')?.files?.[0]||null;
        if(!texto && !file) return mensaje('Escribe algo o selecciona una imagen/vídeo.');
        if(file && file.size>20*1024*1024) return mensaje('El archivo supera 20 MB.');
        let media_url=null, media_tipo=null;
        if(file){
            media_tipo=file.type.startsWith('video/')?'video':'image';
            const safeName=file.name.toLowerCase().replace(/[^a-z0-9._-]/g,'_');
            const path=`${Date.now()}_${Math.random().toString(36).slice(2)}_${safeName}`;
            const up=await supabaseComunidad.storage.from('comunidad-media').upload(path,file,{contentType:file.type,upsert:false});
            if(up.error){ console.error(up.error); return mensaje('No se pudo subir el archivo. Revisa el bucket y sus políticas.'); }
            const pub=supabaseComunidad.storage.from('comunidad-media').getPublicUrl(up.data.path);
            media_url=pub.data.publicUrl;
        }
        const {error}=await supabaseComunidad.from('comunidad_publicaciones').insert({usuario:user,categoria:categoriaComunidad,texto:texto.slice(0,1000),media_url,media_tipo});
        if(error){ console.error(error); return mensaje('No se pudo publicar. Revisa las políticas de la tabla.'); }
        document.getElementById('comunidad-texto').value='';
        document.getElementById('comunidad-media').value='';
        mensaje('¡Publicación compartida con la comunidad!','ok');
        cargarComunidad();
    }

    window.abrirComunidad=function(){
        document.body.classList.add('en-comunidad','en-inicio');
        document.body.classList.remove('en-centro');
        window.scrollTo({top:0,behavior:'smooth'});
        cargarComunidad();
    };
    window.cerrarComunidad=function(){
        document.body.classList.remove('en-comunidad');
        document.body.classList.add('en-inicio');
        window.scrollTo({top:0,behavior:'smooth'});
    };
    window.cambiarCategoriaComunidad=function(cat){ categoriaComunidad=cat; cargarComunidad(); };

    document.addEventListener('DOMContentLoaded',()=>{
        initSupabase();
        document.getElementById('comunidad-form')?.addEventListener('submit',publicar);
        document.querySelectorAll('.comunidad-tab').forEach(b=>b.addEventListener('click',()=>{
            document.querySelectorAll('.comunidad-tab').forEach(x=>x.classList.remove('activo'));
            b.classList.add('activo'); categoriaComunidad=b.dataset.categoria; cargarComunidad();
        }));
    });
})();

/* =========================================================
   🎮 CENTRO DE ENTRENAMIENTO
   ========================================================= */
function abrirCentroEntrenador(){
    document.body.classList.add('en-centro');
    document.body.classList.add('en-inicio');
    window.scrollTo({top:0,behavior:'smooth'});
}
function cerrarCentroEntrenador(){
    document.body.classList.remove('en-centro');
    document.body.classList.add('en-inicio');
    window.scrollTo({top:0,behavior:'smooth'});
}
