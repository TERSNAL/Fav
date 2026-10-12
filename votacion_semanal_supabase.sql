-- =========================================================
-- FAVORITEDEX · VOTACIÓN SEMANAL ("Pokémon favorito de la semana")
-- Ejecuta este archivo completo en: Supabase → SQL Editor.
-- Es ADITIVO: no toca las tablas creadas por comunidad_supabase.sql.
--
-- IMPORTANTE: igual que en comunidad_supabase.sql, las cuentas de
-- la web son locales (no usan Supabase Auth), así que estas
-- políticas no pueden comprobar de verdad quién es cada usuario.
-- Mientras tanto, se limita a un voto por (semana, usuario).
-- =========================================================

create table if not exists public.comunidad_voto_semana (
    id          bigint generated always as identity primary key,
    semana      text not null check (char_length(semana) between 6 and 10), -- formato AAAA-Wnn
    usuario     text not null check (char_length(usuario) between 2 and 30),
    pokemon_id  integer not null,
    creado_en   timestamptz not null default now(),
    unique (semana, usuario)
);

create index if not exists idx_voto_semana on public.comunidad_voto_semana (semana);

alter table public.comunidad_voto_semana enable row level security;

-- Cualquiera puede leer el ranking de la semana.
create policy if not exists "Lectura publica de votos"
    on public.comunidad_voto_semana for select
    using (true);

-- Cualquiera con la clave anon puede votar o cambiar su voto de la semana.
-- (Ver nota de seguridad arriba: sin Supabase Auth no se puede
-- verificar de verdad la identidad desde el navegador).
create policy if not exists "Insertar voto"
    on public.comunidad_voto_semana for insert
    with check (true);

create policy if not exists "Actualizar voto propio de la semana"
    on public.comunidad_voto_semana for update
    using (true);
