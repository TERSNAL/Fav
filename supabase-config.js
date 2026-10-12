/* =========================================================
   ☁️ CONFIGURACIÓN DE SUPABASE (Comunidad Pokémon)
   1) Crea un proyecto en https://supabase.com
   2) En Project Settings → API copia la "Project URL" y la clave "anon public".
   3) Pégalas abajo (reemplazando los textos PEGA_AQUI...).
   4) Ejecuta comunidad_supabase.sql en el SQL Editor de Supabase.

   La clave "anon" es pública por diseño; la seguridad la dan las políticas RLS del SQL.
   NUNCA pegues aquí la clave "service_role".
   Mientras contenga PEGA_AQUI, la Comunidad muestra el aviso de "falta conectar Supabase".
   ========================================================= */
window.SUPABASE_CONFIG = {
    url: 'PEGA_AQUI_TU_PROJECT_URL',
    key: 'PEGA_AQUI_TU_ANON_KEY'
};
