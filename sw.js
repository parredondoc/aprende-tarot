const CACHE = 'aprende-tarot-v3';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './cards/loco.jpg',
  './cards/mago.jpg',
  './cards/sacerdotisa.jpg',
  './cards/emperatriz.jpg',
  './cards/emperador.jpg',
  './cards/hierofante.jpg',
  './cards/amantes.jpg',
  './cards/carro.jpg',
  './cards/fuerza.jpg',
  './cards/ermitano.jpg',
  './cards/rueda.jpg',
  './cards/justicia.jpg',
  './cards/colgado.jpg',
  './cards/muerte.jpg',
  './cards/templanza.jpg',
  './cards/diablo.jpg',
  './cards/torre.jpg',
  './cards/estrella.jpg',
  './cards/luna.jpg',
  './cards/sol.jpg',
  './cards/juicio.jpg',
  './cards/mundo.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
