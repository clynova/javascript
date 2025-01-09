(function () {

    let DB
    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => {

        conectarDB()
        eventListeners()


    })


    function eventListeners() {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            agregarCliente()
        })

    }

    function agregarCliente() {


        const nombre = formulario.querySelector('#nombre').value
        const email = formulario.querySelector('#email').value
        const telefono = formulario.querySelector('#telefono').value
        const empresa = formulario.querySelector('#empresa').value

        if (!nombre || !email || !telefono || !empresa) {
            console.log('Faltan datos')
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const nuevoCliente = {
            nombre,
            email,
            telefono,
            empresa
        };

        const request = objectStore.add(nuevoCliente);

        request.onsuccess = function () {
            console.log('Cliente agregada exitosamente a la base de datos');
        };

        transaction.oncomplete = function () {
            console.log('Transacción completada: Cliente agregada');
        };

        transaction.onerror = function () {
            console.error('Error al agregar la Cliente a la base de datos');
        };

    }

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function () {
            console.log('hubo un error')
        }

        abrirConexion.onsuccess = function () {

            DB = abrirConexion.result
        }
    }

})()