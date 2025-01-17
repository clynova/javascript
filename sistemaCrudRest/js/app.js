import { listarClientes, eliminarCliente } from './API.js'
import { mostrarMensaje } from './funciones.js'

(function () {

    const listadoClientes = document.querySelector('#listado-clientes')

    window.addEventListener('load', () => {
        cargarClientes()
        eventListeners()
    })

    function eventListeners() {
        //listadoClientes.addEventListener('click')
        listadoClientes.addEventListener('click', (e) => {
            if (e.target.textContent === 'Eliminar') {
                eliminarClienteLista(e)
            } else {
                window.location.href = `editar-cliente.html?id=${e.target.getAttribute('data-id')}`;
            }
        });

    }

    async function cargarClientes() {
        const arrayClientes = await listarClientes()
        arrayClientes.forEach(data => {
            const { nombre, telefono, empresa, id } = data
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
        });
    }

    function eliminarClienteLista(e) {
        const clienteId = e.target.getAttribute('data-id');
        eliminarCliente(clienteId)
        mostrarMensaje('Cliente eliminado correctamente', 'success')
    }



})()