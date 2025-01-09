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
            imprimirAlerta('Error al agregar la Cliente ', 'error')
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
            imprimirAlerta('Cliente agregada exitosamente', 'success')
            console.log('Cliente agregada exitosamente a la base de datos');
        };

        transaction.oncomplete = function () {
            console.log('Transacción completada: Cliente agregada');
        };

        transaction.onerror = function () {
            imprimirAlerta('Error al agregar la Cliente ', 'error')
            console.error('Error al agregar la Cliente a la base de datos');
        };

    }

    function imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        if (tipo === 'error') {
            divMensaje.classList.add('bd-red-100', 'border-red-400', 'text-red-700')
        } else {
            divMensaje.classList.add('bd-green-100', 'border-green-400', 'text-green-700')
        }
        divMensaje.textContent = mensaje

        formulario.appendChild(divMensaje)
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