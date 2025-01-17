import { validar, mostrarMensaje } from './funciones.js'
import { nuevoCliente } from './API.js'

(function () {

    const formulario = document.querySelector('#formulario')

    window.addEventListener('load', () => {
        eventListeners()
    })

    function eventListeners() {
        formulario.addEventListener('submit', agregarNuevoCliente)
    }

    function agregarNuevoCliente(e) {
        e.preventDefault()
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const empresa = document.querySelector('#empresa').value

        const cliente = { nombre, email, telefono, empresa }

        if (validar(cliente)) {
            console.error('Todos los campos son obligatorios')
            mostrarMensaje('Todos los campos son obligatorios', 'error')
            return
        }
        nuevoCliente(cliente)
    }
    

})()