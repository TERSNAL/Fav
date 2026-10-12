-- =========================================================
-- FAVORITEDEX · COMUNIDAD POKÉMON (Supabase)
-- Ejecuta este archivo completo en: Supabase → SQL Editor.
-- Crea las tablas que usa js/entrenamiento.js, el bucket de
-- imágenes/vídeos y sus políticas de seguridad (RLS).
--
-- IMPORTANTE: las cuentas de la web son locales (no usan Supabase Auth),
-- así que estas políticas NO pueden comprobar quién es cada usuario:
-- cualquiera con la clave anon podría insertar filas con cualquier nombre.
-- Para moderación real, migra el login a Supabase Auth y cambia las
-- políticas para comparar con auth.uid(). Mientras tanto, se limitan
-- tamaños y se impide borrar/editar contenido desde el navegador.
-- =========================================================

create table if not exists public.comunidad_publicaciones (
    id          bigint generated always as identity primary key,
    usuario     text not null check (char_length(usuario) between 2 and 30),
    categoria   text not null check (categoria in ('principales', 'go', 'champions')),
    texto       text not null default '' check (char_length(texto) <= 1000),
    media_url   text,
    media_tipo  text check (media_tipo in ('image', 'video')),
    creado_en   timestamptz not null default now()
);

create table if not exists public.comunidad_comentarios (
    id              bigint generated always as identity primary key,
    publicacion_id  bigint not null references public.comunidad_publicaciones(id) on delete cascade,
    usuario         text not null check (char_length(usuario) between 2 and 30),
    texto           text not null check (char_length(texto) between 1 and 500),
    creado_en       timestamptz not null default now()
);

create table if not exists public.comunidad_reacciones (
    id              bigint generated always as identity primary key,
    publicacion_id  bigint not null references public.comunidad_publicaciones(id) on delete cascade,
    usuario         text not null check (char_length(usuario) between 2 and 30),
    creado_en       timestamptz not null default now(),
    unique (publicacion_id, usuario)
);

create index if not exists idx_publicaciones_categoria on public.comunidad_publicaciones (categoria, creado_en desc);
create index if not exists idx_comentarios_publicacion on public.comunidad_comentarios (publicacion_id, creado_en);
create index if not exists idx_reacciones_publicacion  on public.comunidad_reacciones (publicacion_id);

alter table public.comunidad_publicaciones enable row level security;
alter table public.comunidad_comentarios   enable row level security;
alter table public.comunidad_reacciones    enable row level security;

-- Lectura pública
drop policy if exists "leer publicaciones" on public.comunidad_publicaciones;
create policy "leer publicaciones" on public.comunidad_publicaciones for select to anon, authenticated using (true);
drop policy if exists "leer comentarios" on public.comunidad_comentarios;
create policy "leer comentarios" on public.comunidad_comentarios for select to anon, authenticated using (true);
drop policy if exists "leer reacciones" on public.comunidad_reacciones;
create policy "leer reacciones" on public.comunidad_reacciones for select to anon, authenticated using (true);

-- Escritura pública (las restricciones de longitud están en las columnas)
drop policy if exists "crear publicaciones" on public.comunidad_publicaciones;
create policy "crear publicaciones" on public.comunidad_publicaciones for insert to anon, authenticated with check (true);
drop policy if exists "crear comentarios" on public.comunidad_comentarios;
create policy "crear comentarios" on public.comunidad_comentarios for insert to anon, authenticated with check (true);
drop policy if exists "crear reacciones" on public.comunidad_reacciones;
create policy "crear reacciones" on public.comunidad_reacciones for insert to anon, authenticated with check (true);

-- Quitar un "me gusta" (el botón ❤️ funciona como interruptor). Solo reacciones.
drop policy if exists "quitar reacciones" on public.comunidad_reacciones;
create policy "quitar reacciones" on public.comunidad_reacciones for delete to anon, authenticated using (true);

-- No hay políticas de UPDATE/DELETE para publicaciones ni comentarios:
-- desde el navegador no se pueden editar ni borrar. Modera desde el panel de Supabase.

-- Bucket público para imágenes y vídeos (máx. 20 MB por archivo)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('comunidad-media', 'comunidad-media', true, 20971520,
        array['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'video/mp4', 'video/webm', 'video/quicktime'])
on conflict (id) do update
    set public = excluded.public,
        file_size_limit = excluded.file_size_limit,
        allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "ver media comunidad" on storage.objects;
create policy "ver media comunidad" on storage.objects for select to anon, authenticated using (bucket_id = 'comunidad-media');
drop policy if exists "subir media comunidad" on storage.objects;
create policy "subir media comunidad" on storage.objects for insert to anon, authenticated with check (bucket_id = 'comunidad-media');
