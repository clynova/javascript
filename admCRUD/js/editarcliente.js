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
            modificarCliente()
        })

    }

    function cargarDatosCliente() {

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        console.log(`ID recibido: ${id}`);

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');


        // Usar el índice 'id' para buscar el cliente
        const request = objectStore.get(Number.parseInt(id));

        request.onsuccess = function (e) {
            const cliente = e.target.result;

            if (cliente) {
                // Llenar el formulario con los datos del cliente
                formulario.querySelector('#nombre').value = cliente.nombre;
                formulario.querySelector('#email').value = cliente.email;
                formulario.querySelector('#telefono').value = cliente.telefono;
                formulario.querySelector('#empresa').value = cliente.empresa;

                console.log('Datos cargados correctamente:', cliente);
            } else {
                console.log('No se encontró un cliente con ese ID.');
            }
        };

        request.onerror = function () {
            console.error('Error al cargar los datos del cliente.');
        };

    }


    function modificarCliente() {

        const nombre = formulario.querySelector('#nombre').value
        const email = formulario.querySelector('#email').value
        const telefono = formulario.querySelector('#telefono').value
        const empresa = formulario.querySelector('#empresa').value
        const urlParams = new URLSearchParams(window.location.search);
        const id = Number.parseInt(urlParams.get('id'));

        if (!nombre || !email || !telefono || !empresa) {
            imprimirAlerta('Error al modificar la Cliente ', 'error')
            console.log('Faltan datos')
        }

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const clienteActualizado = {
            id,
            nombre,
            email,
            telefono,
            empresa
        };

        const request = objectStore.put(clienteActualizado);

        request.onsuccess = function () {
            imprimirAlerta('Cliente modificado exitosamente', 'success')
            console.log('Cliente modificador exitosamente a la base de datos');
        };

        transaction.oncomplete = function () {
            console.log('Transacción completada: Cliente modificar');
        };

        transaction.onerror = function () {
            imprimirAlerta('Error al modificar la Cliente ', 'error')
            console.error('Error al modificar la Cliente a la base de datos');
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
            cargarDatosCliente()
        }
    }



})()