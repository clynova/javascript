(function () {

    let DB
    const listadoClientes = document.querySelector('#listado-clientes')


    document.addEventListener('DOMContentLoaded', () => {
        crearDB()

        //listadoClientes.addEventListener('click')
        listadoClientes.addEventListener('click', (e) => {
            if (e.target.textContent === 'Eliminar') {
                eliminarCliente(e)
            } else {
                window.location.href = `editar-cliente.html?id=${e.target.getAttribute('data-id')}`;
            }
        });
    })

    function visualizarClientes() {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');
        const request = objectStore.openCursor();
        listadoClientes.innerHTML = '';

        request.onsuccess = (e) => {
            const cursor = e.target.result;

            if (cursor) {

                const { nombre, telefono, empresa, id } = cursor.value;

                const tr = document.createElement('tr');
                tr.classList.add('border-b', 'border-gray-200'); // Agrega estilos de Tailwind

                // Crear columnas
                tr.innerHTML = `
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">${nombre}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">${telefono}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">${empresa}</td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
                        <button 
                            class="btnEditar bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" 
                            data-id="${id}">Editar</button>
                        <button 
                            class="btnEliminar bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" 
                            data-id="${id}">Eliminar</button>
                    </td>
                `;

                // Agregar fila a la tabla
                listadoClientes.appendChild(tr);

                // Continuar con el cursor
                cursor.continue();
            } else {
                console.log('pasaron cositas')
            }


        };

        request.onerror = () => {
            console.error('Error al cargar las citas desde la base de datos');
        };
    }



    function crearDB() {

        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function () {
            console.log('hubo un error')
        }

        crearDB.onsuccess = function () {
            DB = crearDB.result
            visualizarClientes();
        }

        crearDB.onupgradeneeded = function (e) {
            const db = e.target.result

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            })

            objectStore.createIndex('nombre', 'nombre', { unique: false })
            objectStore.createIndex('email', 'email', { unique: true })
            objectStore.createIndex('telefono', 'telefono', { unique: false })
            objectStore.createIndex('empresa', 'empresa', { unique: false })
            objectStore.createIndex('id', 'id', { unique: true })

            console.log(`DB  listra y creada`)
        }


    }


    function eliminarCliente(e) {

        const clienteId = e.target.getAttribute('data-id');
        const fila = e.target.closest('tr');
        fila.remove()
        console.log(fila)

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        const request = objectStore.delete(Number(clienteId));

        request.onsuccess = () => {
            console.log(`Cliente con ID ${clienteId} eliminada de la base de datos`);
        };

        request.onerror = () => {
            console.error(`Error al eliminar la Cliente con ID ${clienteId}`);
        };

    }



})()