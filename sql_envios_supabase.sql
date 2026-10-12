-- ============================================================
-- Peticiones y reportes de FavoriteDex en Supabase
-- Ejecútalo una vez en el SQL Editor (después de configurar supabase-config.js).
-- Cualquier visitante puede ENVIAR; solo tú (desde el panel de Supabase) puedes LEER.
-- ============================================================
create table if not exists public.peticiones (
    id        bigint generated always as identity primary key,
    creado    timestamptz not null default now(),
    usuario   text not null check (char_length(usuario) between 1 and 30),
    pokemon   text not null check (char_length(pokemon) between 1 and 300),
    estado    text not null default 'Pendiente'
);
create table if not exists public.reportes (
    id          bigint generated always as identity primary key,
    creado      timestamptz not null default now(),
    usuario     text not null check (char_length(usuario) between 1 and 30),
    pokemon     text not null default '' check (char_length(pokemon) <= 80),
    descripcion text not null check (char_length(descripcion) between 1 and 500),
    estado      text not null default 'Pendiente'
);
alter table public.peticiones enable row level security;
alter table public.reportes   enable row level security;

drop policy if exists "enviar peticiones" on public.peticiones;
create policy "enviar peticiones" on public.peticiones for insert to anon, authenticated
    with check (estado = 'Pendiente');
drop policy if exists "enviar reportes" on public.reportes;
create policy "enviar reportes" on public.reportes for insert to anon, authenticated
    with check (estado = 'Pendiente');
-- Sin política de SELECT: los visitantes no pueden leer lo que otros enviaron.
