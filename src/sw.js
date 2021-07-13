var cacheName = 'hello-pwa';
var filesToCache = [
  '/index.html',
  '/about.html',
  '/css/style.css',
  '/js/main.js',
  '/js/about.js',
  '/images/screenshot.jpg',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  console.log('"install" Event of Service Worker Got Executed');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    }),
  );
  self.skipWaiting();
});

/* Serve cached content always if available */
self.addEventListener('fetch', function (e) {
  console.log('"fetch" Event of Service Worker Got Executed for', e.request);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});

// Custom Event Listener when client sends a message and the SW handles it
self.addEventListener('message', function (e) {
  // event is an ExtendableMessageEvent object
  console.log('Message Event', e);
  console.log(`The client sent me a message: ${e.data}`);

  e.source.postMessage('Hi client');
});
