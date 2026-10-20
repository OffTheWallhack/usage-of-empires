/* Usage of Empires – hra funguje aj bez internetu.
   Stránka: najprv internet (vždy najnovšia verzia), bez internetu posledná uložená.
   Ostatné (Phaser, písma, ikony): z pamäte telefónu, na pozadí sa obnovia. */
const V = 'uoe-v1';
const PAGE = './index.html';
const CORE = ['./', PAGE, './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png', './favicon.png'];
const EXT = ['https://cdnjs.cloudflare.com/ajax/libs/phaser/3.80.1/phaser.min.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(c => Promise.all([
    ...CORE.map(u => c.add(u).catch(() => {})),
    ...EXT.map(u => fetch(u, { mode: 'no-cors' }).then(r => c.put(u, r)).catch(() => {})),
  ])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const timeout = (p, ms) => new Promise((ok, no) => { const t = setTimeout(() => no(new Error('timeout')), ms); p.then(r => { clearTimeout(t); ok(r); }, er => { clearTimeout(t); no(er); }); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (r.mode === 'navigate' || (u.origin === location.origin && /\/(index\.html)?$/.test(u.pathname))) {
    const net = fetch(r).then(res => { if (res && res.ok) { const cp = res.clone(); caches.open(V).then(c => c.put(PAGE, cp)); } return res; });
    e.respondWith(caches.match(PAGE).then(old => old ? timeout(net, 6000).catch(() => old) : net));
    return;
  }
  if (!/^https?:$/.test(u.protocol) || u.pathname.includes('/music/') || r.headers.has('range')) return;   // hudba sa streamuje priamo
  e.respondWith(caches.match(r, { ignoreVary: true }).then(m => {
    const net = fetch(r).then(res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); } return res; }).catch(() => m);
    return m || net;
  }));
});
