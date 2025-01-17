import { validar, mostrarMensaje } from './funciones.js'
import { editarCliente, obtenerCliente } from './API.js'

(function () {

    const formulario = document.querySelector('#formulario')

    window.addEventListener('load', () => {
        cargarDatosCliente()
        eventListeners()
    })

    function eventListeners() {
        formulario.addEventListener('submit', modificarCliente)
    }

    async function cargarDatosCliente() {

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        
        const cliente = await obtenerCliente(id)

        const { nombre, email, telefono, empresa } = cliente

        document.querySelector('#empresa').value = empresa
        document.querySelector('#telefono').value = telefono
        document.querySelector('#email').value =  email
        document.querySelector('#nombre').value = nombre

    }

    function modificarCliente(e) {
        e.preventDefault()
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        const cliente = { nombre, email, telefono, empresa, id }

        if (validar(cliente)) {
            console.error('Todos los campos son obligatorios')
            mostrarMensaje('Todos los campos son obligatorios', 'error')
            return
        }
        editarCliente(cliente)
    }


})()