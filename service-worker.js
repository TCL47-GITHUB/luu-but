// Lắng nghe sự kiện install để cache các tài nguyên
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll([
        "/",
        "/luu-but//user/user.html",
        "/luu-but/user/style.css",
        "/luu-but/user/main.js",
        "../demo-files/demo.css",
        "../demo-files/demo.js",
        "/luu-but/icons/android-chrome-192x192.png"
      ]);
    })
  );
});

// Lắng nghe sự kiện activate để xóa các cache cũ
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            return cacheName.startsWith("v") && cacheName !== "v1";
          })
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

// Lắng nghe sự kiện fetch để trả về các tài nguyên từ cache
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});