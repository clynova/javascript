const nombreCache = 'apv-v9';

const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
];

self.addEventListener('install', e => {
    console.log('Instalando el Service Worker');
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('Cacheando archivos...');
                return cache.addAll(archivos); // `addAll` maneja automáticamente los errores en los archivos faltantes
            })
            .catch(err => console.error('Error al cachear archivos:', err))
    );
});

self.addEventListener('activate', e => {
    console.log('Service worker activado');
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.filter(key => key !== nombreCache) // Filtra caches viejos
                        .map(key => {
                            console.log(`Eliminando cache antiguo: ${key}`);
                            return caches.delete(key); // Elimina cada cache obsoleto
                        })
                );
            })
            .catch(err => console.error('Error al limpiar caches antiguos:', err))
    );
});

self.addEventListener('fetch', e => {
    console.log('Interceptando fetch:', e.request.url);
    e.respondWith( // Cambié `responseWith` por `respondWith`
        caches.match(e.request)
            .then(respuestaCache => {
                // Devuelve la respuesta cacheada o realiza un fetch si no está en el cache
                return respuestaCache || fetch(e.request);
            })
            .catch(() => {
                // Si ocurre un error, intenta cargar la página de error
                if (e.request.mode === 'navigate') {
                    return caches.match('./error.html'); // Solo aplica a navegaciones
                }
            })
    );
});
