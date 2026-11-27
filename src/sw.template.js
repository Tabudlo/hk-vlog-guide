// Service worker: saves the photos on the phone once (so they cost no data
// again and work offline) and keeps a copy of the app for offline use.
// Map tiles you've viewed are kept too (see below).
// The page itself is always fetched fresh when there's signal, so updates
// show up straight away.
const APP = "hkvg-app-__VERSION__";
const IMG = "hkvg-img-v1";
const TILES = "hkvg-tiles-v1";
const MAX_TILES = 1500; // about 30-40 MB
async function trimTiles(c){ const keys = await c.keys(); for (let i = 0; i < keys.length - MAX_TILES; i++) await c.delete(keys[i]); }
const PHOTOS = __PHOTOS__;

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const app = await caches.open(APP);
    await app.addAll(["./", "./index.html"]).catch(() => {});
    const img = await caches.open(IMG);
    for (const u of PHOTOS) {
      if (!(await img.match(u))) { try { await img.add(u); } catch (err) {} }
    }
  })());
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith("hkvg-app-") && k !== APP) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin === location.origin && url.pathname.includes("/img/")) {
    e.respondWith(caches.open(IMG).then(async c => (await c.match(req)) || fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; })));
    return;
  }
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(APP).then(c => c.put("./index.html", copy)); return r; })
      .catch(async () => (await caches.match("./index.html")) || Response.error()));
    return;
  }
  // Map tiles: keep every tile you've viewed so those maps work offline later.
  // (No bulk prefetching: OpenStreetMap's tile policy doesn't allow it.)
  if (url.hostname === "tile.openstreetmap.org") {
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const r = await fetch(req);
      if (r.ok) { await c.put(req, r.clone()); trimTiles(c); }
      return r;
    }));
    return;
  }
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open(APP).then(async c => (await c.match(req)) || fetch(req).then(r => { c.put(req, r.clone()); return r; })));
  }
});
