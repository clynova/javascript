let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmBD();

    setTimeout(() => {
       crearCliente();
    }, 5000)

})

function crmBD() {

    let crmBD = window.indexedDB.open('crm', 1);


    crmBD.onerror = function () {
        console.log('error al crear la base de datos')
    }

    crmBD.onsuccess = function () {
        console.log('base de datos creada')
        DB = crmBD.result;
    }


    crmBD.onupgradeneeded = function (e) {
        const db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'id',
            autoIncrement: true
        })

        objectStore.createIndex('nombre', 'nombre', { unique: false })
        objectStore.createIndex('email', 'email', { unique: true })
        objectStore.createIndex('telefono', 'telefono', { unique: false })

        console.log('columnas creadas')
    }

}

function crearCliente() {

    let transaction = DB.transaction(['crm'], 'readwrite')

    transaction.oncomplete = function () {
        console.log('transacion completada')
    }

    transaction.onerror = function () {
        console.log('hubboc error en la transacion')
    }

    const objectStore = transaction.objectStore('crm')

    const nuevoCliente = {
        telefono: 10123123,
        nombre: 'Pepe',
        email: 'pepe@gmail.com'
    };


    const peticion = objectStore.add(nuevoCliente)

    console.log(peticion)

}

function eliminarBaseDeDatos() {
    if (DB) {
        DB.close(); // Asegúrate de cerrar la conexión
        console.log('Conexión cerrada');
    }

    const request = indexedDB.deleteDatabase('crm');

    request.onerror = function () {
        console.error('Error al intentar eliminar la base de datos');
    };

    request.onsuccess = function () {
        console.log('Base de datos eliminada exitosamente');
    };

    request.onblocked = function () {
        console.warn('No se pudo eliminar la base de datos porque hay conexiones activas');
    };
}

// Llamar a la función
//eliminarBaseDeDatos();
