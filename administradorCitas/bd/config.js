export let DB;

export function crmBD(callback) {
    const request = indexedDB.open('bdcitas', 1);

    request.onerror = function () {
        console.error('Error al abrir la base de datos');
    };

    request.onsuccess = function (e) {
        console.log('Base de datos inicializada');
        DB = request.result;
        if (callback) callback(); // Ejecuta el callback si se proporciona
    };

    request.onupgradeneeded = function (e) {
        const db = e.target.result;

        console.log('Creando estructura de la base de datos...');

        // Crear almacén "cita" (puedes agregar más almacenes según lo necesites)
        if (!db.objectStoreNames.contains('cita')) {
            const citaStore = db.createObjectStore('cita', {
                keyPath: 'id',
                autoIncrement: true,
            });

            citaStore.createIndex('fecha', 'fecha', { unique: false });
            citaStore.createIndex('hora', 'hora', { unique: false });
            citaStore.createIndex('mascota', 'mascota', { unique: false });
            citaStore.createIndex('propietario', 'propietario', { unique: false });

            console.log('Almacén "cita" creado');
        }
    };
}