// Service worker: saves the photos on the phone once (so they cost no data
// again and work offline) and keeps a copy of the app for offline use.
// Map tiles you've viewed are kept too (see below).
// The page itself is always fetched fresh when there's signal, so updates
// show up straight away.
const APP = "hkvg-app-e50b0ef813";
const IMG = "hkvg-img-v1";
const TILES = "hkvg-tiles-v1";
const MAX_TILES = 1500; // about 30-40 MB
async function trimTiles(c){ const keys = await c.keys(); for (let i = 0; i < keys.length - MAX_TILES; i++) await c.delete(keys[i]); }
const PHOTOS = [
"./img/airbnb-jordan-h.webp",
"./img/airbnb-jordan-t.webp",
"./img/apliu-street-market-h.webp",
"./img/apliu-street-market-t.webp",
"./img/australia-dairy-company-h.webp",
"./img/australia-dairy-company-t.webp",
"./img/big-buddha-po-lin-wisdom-path-h.webp",
"./img/big-buddha-po-lin-wisdom-path-t.webp",
"./img/cart-noodles-h.webp",
"./img/cart-noodles-t.webp",
"./img/chi-lin-nunnery-nan-lian-garden-h.webp",
"./img/chi-lin-nunnery-nan-lian-garden-t.webp",
"./img/chun-yeung-street-market-h.webp",
"./img/chun-yeung-street-market-t.webp",
"./img/congee-with-youtiao-h.webp",
"./img/congee-with-youtiao-t.webp",
"./img/cotai-strip-h.webp",
"./img/cotai-strip-t.webp",
"./img/cx903-to-manila-h.webp",
"./img/cx903-to-manila-t.webp",
"./img/dragon-s-back-hike-h.webp",
"./img/dragon-s-back-hike-t.webp",
"./img/flower-market-goldfish-street-h.webp",
"./img/flower-market-goldfish-street-t.webp",
"./img/four-seasons-pot-rice-yee-shun-temple-st-h.webp",
"./img/four-seasons-pot-rice-yee-shun-temple-st-t.webp",
"./img/hong-kong-international-airport-h.webp",
"./img/hong-kong-international-airport-t.webp",
"./img/hop-yik-tai-kung-wo-h.webp",
"./img/hop-yik-tai-kung-wo-t.webp",
"./img/in-town-check-in-kowloon-station-h.webp",
"./img/in-town-check-in-kowloon-station-t.webp",
"./img/kam-wah-caf-h.webp",
"./img/kam-wah-caf-t.webp",
"./img/kau-kee-h.webp",
"./img/kau-kee-t.webp",
"./img/kowloon-walled-city-park-h.webp",
"./img/kowloon-walled-city-park-t.webp",
"./img/lan-fong-yuen-h.webp",
"./img/lan-fong-yuen-t.webp",
"./img/last-dim-sum-diamond-hill-h.webp",
"./img/last-dim-sum-diamond-hill-t.webp",
"./img/lau-sum-kee-h.webp",
"./img/lau-sum-kee-t.webp",
"./img/lei-yue-mun-seafood-village-h.webp",
"./img/lei-yue-mun-seafood-village-t.webp",
"./img/lord-stow-s-bakery-h.webp",
"./img/lord-stow-s-bakery-t.webp",
"./img/lugard-road-lookout-h.webp",
"./img/lugard-road-lookout-t.webp",
"./img/mid-levels-escalator-man-mo-temple-h.webp",
"./img/mid-levels-escalator-man-mo-temple-t.webp",
"./img/mong-kok-ladies-market-sneaker-street-h.webp",
"./img/mong-kok-ladies-market-sneaker-street-t.webp",
"./img/monster-building-h.webp",
"./img/monster-building-t.webp",
"./img/ngong-ping-360-h.webp",
"./img/ngong-ping-360-t.webp",
"./img/peak-tram-h.webp",
"./img/peak-tram-t.webp",
"./img/plan-b-mak-man-kee-kai-kai-h.webp",
"./img/plan-b-mak-man-kee-kai-kai-t.webp",
"./img/rest-at-the-airbnb-h.webp",
"./img/rest-at-the-airbnb-t.webp",
"./img/ruins-of-st-paul-s-senado-square-h.webp",
"./img/ruins-of-st-paul-s-senado-square-t.webp",
"./img/ser-wong-fun-h.webp",
"./img/ser-wong-fun-t.webp",
"./img/slow-breakfast-in-jordan-h.webp",
"./img/slow-breakfast-in-jordan-t.webp",
"./img/star-ferry-h.webp",
"./img/star-ferry-t.webp",
"./img/sun-hing-h.webp",
"./img/sun-hing-t.webp",
"./img/tai-cheong-bakery-h.webp",
"./img/tai-cheong-bakery-t.webp",
"./img/tai-o-fishing-village-h.webp",
"./img/tai-o-fishing-village-t.webp",
"./img/taipa-village-h.webp",
"./img/taipa-village-t.webp",
"./img/temple-street-night-market-h.webp",
"./img/temple-street-night-market-t.webp",
"./img/tim-ho-wan-h.webp",
"./img/tim-ho-wan-t.webp",
"./img/under-bridge-spicy-crab-h.webp",
"./img/under-bridge-spicy-crab-t.webp",
"./img/vegetarian-lunch-at-po-lin-h.webp",
"./img/vegetarian-lunch-at-po-lin-t.webp",
"./img/west-kowloon-art-park-h.webp",
"./img/west-kowloon-art-park-t.webp",
"./img/winterfest-light-show-avenue-of-stars-h.webp",
"./img/winterfest-light-show-avenue-of-stars-t.webp",
"./img/wong-tai-sin-temple-h.webp",
"./img/wong-tai-sin-temple-t.webp",
"./img/yat-lok-h.webp",
"./img/yat-lok-t.webp"
];

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
