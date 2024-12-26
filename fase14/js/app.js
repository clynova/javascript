document.addEventListener('DOMContentLoaded', () => {
    console.log('Documento listo')
})

const playersView = document.querySelector('.players')

playersView.addEventListener('mouseenter', () => {
    console.log('Entrando al area de players')
})

const inputName = document.querySelector('.nombre')

inputName.addEventListener('input', () => {

    console.log('Intentando escribir pa')
})

const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', validarFormulario)

function validarFormulario(e) {

    e.preventDefault();

    console.log('Buscando')
}

const playerDiv = document.querySelector('.players')

playerDiv.addEventListener('click', (e) => {

    e.stopPropagation()
    console.log('Click en el player')
    console.log(e.target)

})