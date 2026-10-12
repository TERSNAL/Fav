/* Service worker de FavoriteDex: la web abre rápido y sigue funcionando sin conexión.
   Estrategia: red primero para tus archivos (siempre ves la última versión) con copia
   guardada de respaldo; las imágenes y gritos externos se guardan al verlos. */
const VERSION = 'favoritedex-v8';
const SHELL = ['FavoriteDex.html','css/FavoriteDex.css','css/mejoras.css','css/responsive-2026.css','css/contenido-nuevo.css','css/fondos-nuevos.css','css/extras.css','icons/favicon.svg'];
const EXTERNOS = ['raw.githubusercontent.com','play.pokemonshowdown.com','images.wikidexcdn.net'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL).catch(() => {})));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const url = new URL(req.url);
  const propio = url.origin === location.origin;
  const externo = EXTERNOS.includes(url.host);
  if (!propio && !externo) return;
  if (externo) {
    // Imágenes y gritos: primero la copia guardada (no cambian), y si no existe, se pide y se guarda.
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copia = res.clone(); caches.open(VERSION).then(c => c.put(req, copia)); }
      return res;
    }).catch(() => hit)));
    return;
  }
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copia = res.clone(); caches.open(VERSION).then(c => c.put(req, copia)); }
    return res;
  }).catch(() => caches.match(req)));
});
