
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pharmacy-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/manifest.json',
        '/preview.jpg'
      ]);
    })
  );
});
