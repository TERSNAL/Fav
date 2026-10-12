/* =========================================================
   🔊 MINIJUEGO: ADIVINA EL POKÉMON POR SU GRITO
   ========================================================= */
(function () {
    let gritoPokemonActual = null, gritoAudio = new Audio();
    let gritoFallos = 0, gritoAciertos = 0, gritoIntentos = 0;
    const norm = t => String(t || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    const esc = t => String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
    function pokemonNuevo() {
        if (typeof pokemonData === "undefined" || !pokemonData.length) return null;
        let p; do { p = pokemonData[Math.floor(Math.random()*pokemonData.length)]; }
        while (pokemonData.length > 1 && gritoPokemonActual && p.id === gritoPokemonActual.id);
        return p;
    }
    function fuenteGrito(p) {
        const forma = Array.isArray(p.formas) ? p.formas[0] : null;
        return (forma && forma.grito) || p.grito || `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${p.id}.ogg`;
    }
    function stats() {
        const a=document.getElementById("minijuego-grito-aciertos"), i=document.getElementById("minijuego-grito-intentos");
        if(a)a.textContent=gritoAciertos; if(i)i.textContent=gritoIntentos;
    }
    function resultado(html, clase) { const r=document.getElementById("minijuego-grito-resultado"); if(r){r.innerHTML=html;r.className="minijuego-resultado "+clase;} }
    function verPokemon() {
        const b=document.getElementById("minijuego-grito-ver"); if(!b)return;
        b.hidden=false; b.onclick=()=> typeof irAPokemon==="function" ? irAPokemon(pokemonData.indexOf(gritoPokemonActual)) : typeof abrirPokedex==="function" ? abrirPokedex() : null;
    }
    function nuevo() {
        const input=document.getElementById("minijuego-grito-respuesta"), estado=document.getElementById("minijuego-grito-estado"), ver=document.getElementById("minijuego-grito-ver");
        if(!input)return;
        if(gritoAudio){gritoAudio.pause();gritoAudio.currentTime=0;}
        gritoPokemonActual=pokemonNuevo(); gritoFallos=0; if(!gritoPokemonActual)return;
        gritoAudio=new Audio(fuenteGrito(gritoPokemonActual)); gritoAudio.volume=.65;
        gritoAudio.addEventListener("play",()=>estado.textContent="🔊 Reproduciendo el grito...");
        gritoAudio.addEventListener("ended",()=>estado.textContent="✅ Grito terminado. Puedes escucharlo otra vez.");
        gritoAudio.addEventListener("error",()=>estado.textContent="⚠️ No se pudo reproducir el grito. Intenta otra vez.");
        input.value=""; input.disabled=false; resultado("",""); if(ver)ver.hidden=true; estado.textContent="Pulsa el botón para escuchar."; stats(); input.focus();
    }
    function escuchar(){ if(!gritoAudio||!gritoPokemonActual)return; gritoAudio.currentTime=0; gritoAudio.play().catch(()=>{const e=document.getElementById("minijuego-grito-estado");if(e)e.textContent="⚠️ Pulsa de nuevo para reproducir el audio.";}); }
    function adivinar(){
        const input=document.getElementById("minijuego-grito-respuesta"); if(!input||!gritoPokemonActual)return;
        const intento=norm(input.value); if(!intento){resultado("✏️ Escribe el nombre de un Pokémon primero.","aviso");input.focus();return;}
        gritoIntentos++; stats();
        if(intento===norm(gritoPokemonActual.nombre)){
            gritoAciertos++; stats(); if(window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("grito",true); resultado("🎉 <strong>¡CORRECTO!</strong> Era "+esc(gritoPokemonActual.nombre)+".","correcto"); input.disabled=true; verPokemon(); return;
        }
        gritoFallos++;
        if(gritoFallos>=3){ if(window.registrarResultadoMinijuego) window.registrarResultadoMinijuego("grito",false); resultado("😵 <strong>¡SE ACABARON LOS INTENTOS!</strong><br>El Pokémon era <strong>"+esc(gritoPokemonActual.nombre)+"</strong>.","incorrecto revelado"); input.disabled=true; verPokemon(); }
        else { const n=3-gritoFallos; resultado("❌ No es ese Pokémon. ¡Vuelve a intentarlo! Te quedan "+n+(n===1?" intento.":" intentos."),"incorrecto"); input.select(); }
    }
    document.addEventListener("DOMContentLoaded",()=>{
        const e=document.getElementById("minijuego-grito-escuchar"), a=document.getElementById("minijuego-grito-adivinar"), n=document.getElementById("minijuego-grito-nuevo"), i=document.getElementById("minijuego-grito-respuesta");
        if(e)e.addEventListener("click",escuchar); if(a)a.addEventListener("click",adivinar); if(n)n.addEventListener("click",nuevo);
        if(i)i.addEventListener("keydown",ev=>{if(ev.key==="Enter"){ev.preventDefault();adivinar();}}); setTimeout(nuevo,0);
    });
})();
