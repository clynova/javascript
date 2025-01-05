
const inputNombreMascota = document.querySelector('#mascota');
const inputNombrePropietario = document.querySelector('#propietario');
const inputTelefono = document.querySelector('#telefono');
const inputFechaCita = document.querySelector('#fecha');
const inputHoraCita = document.querySelector('#hora');
const inputCintomas = document.querySelector('#sintomas');
const formulario = document.querySelector('#nueva-cita');

document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
})

function eventListeners() {
    
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('hola');
    })
}



class Cita {

}

class UI {

}

const ui = new UI();