importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/36c23b2e9231bf650462.js",
    "revision": "020484e135e2668f778d06ba765271c1"
  },
  {
    "url": "/_nuxt/40e7008792face78089b.js",
    "revision": "2c4c1d8a77c407512a793effbd5c7a56"
  },
  {
    "url": "/_nuxt/63f11e0756d2aeceb4b1.js",
    "revision": "0547c704ad82021560f98b5fb8bb32fc"
  },
  {
    "url": "/_nuxt/80557b5a224e2cccf70e.js",
    "revision": "940daf75313cf548ede8233017fdc801"
  },
  {
    "url": "/_nuxt/91c7cfea824c8765268f.js",
    "revision": "da651a59fa2ece45316b555dc6176d30"
  },
  {
    "url": "/_nuxt/fd7c738318609c846f1d.js",
    "revision": "949452b01556bbac54cfbe625a4919ac"
  }
], {
  "cacheId": "frontend",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
