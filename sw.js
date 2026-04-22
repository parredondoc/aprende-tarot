const CACHE = 'aprende-tarot-v4';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './cards/00_loco.jpg',
  './cards/01_mago.jpg',
  './cards/02_sacerdotisa.jpg',
  './cards/03_emperatriz.jpg',
  './cards/04_emperador.jpg',
  './cards/05_hierofante.jpg',
  './cards/06_amantes.jpg',
  './cards/07_carro.jpg',
  './cards/08_fuerza.jpg',
  './cards/09_ermitano.jpg',
  './cards/10_rueda.jpg',
  './cards/11_justicia.jpg',
  './cards/12_colgado.jpg',
  './cards/13_muerte.jpg',
  './cards/14_templanza.jpg',
  './cards/15_diablo.jpg',
  './cards/16_torre.jpg',
  './cards/17_estrella.jpg',
  './cards/18_luna.jpg',
  './cards/19_sol.jpg',
  './cards/20_juicio.jpg',
  './cards/21_mundo.jpg'
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
