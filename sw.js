const CACHE_NAME = 'phae-thung-ngoen-cache-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // ถ้ามีไฟล์เซฟไว้ในเครื่อง ให้โหลดจากเครื่องทันที (ออฟไลน์) ถ้าไม่มีค่อยไปดึงเน็ต
            return response || fetch(event.request);
        })
    );
});
