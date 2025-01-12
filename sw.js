const CACHE_NAME = "paedinfusion-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png",
];

// Install event to cache resources
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .catch(function (error) {
        console.error("Failed to cache resources:", error);
      })
  );
});

// Fetch event to serve cached content
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        // Return cached response if available
        return response;
      }
      // Fetch from network if not in cache
      return fetch(event.request)
        .then(function (networkResponse) {
          return networkResponse;
        })
        .catch(function (error) {
          console.error("Fetch failed:", error);
          return new Response("You are offline. Resource not available.");
        });
    })
  );
});

// Activate event to clean up old caches
self.addEventListener("activate", function (event) {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
