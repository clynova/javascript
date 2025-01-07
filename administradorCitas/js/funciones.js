import { Mascota } from './mascota.js';
import { Persona } from './persona.js';
import { Cita } from './cita.js';
import { UI } from './UI.js';

const formulario = document.querySelector('#nueva-cita');
const htmlCitas = document.querySelector('#citas');
const ui = new UI();

export function eventListeners() {

    ui.visualizarCitas();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        validarEntradas()
    })
    htmlCitas.addEventListener('click', (e) => { ui.botonesCita(e) });
}

function validarEntradas() {
    const inputNombreMascota = document.querySelector('#mascota').value;
    const inputNombrePropietario = document.querySelector('#propietario').value;
    const inputTelefono = document.querySelector('#telefono').value;
    const inputFechaCita = document.querySelector('#fecha').value;
    const inputHoraCita = document.querySelector('#hora').value;
    const inputSintomas = document.querySelector('#sintomas').value;

    if (!inputNombreMascota || !inputNombrePropietario || !inputTelefono || !inputFechaCita || !inputHoraCita || !inputSintomas) {
        console.log('Falto un parametro');
        return;
    }

    if (ui.editando) {
        // Actualizar cita existente
        const cita = ui.citas.find(cita => cita.idCita == ui.idEdicion);
        cita.mascota.nombre = inputNombreMascota;
        cita.propietario.nombre = inputNombrePropietario;
        cita.propietario.telefono = inputTelefono;
        cita.fecha = inputFechaCita;
        cita.hora = inputHoraCita;
        cita.mascota.sintomas = inputSintomas;

        // Reiniciar modo edición
        ui.editando = false;
        ui.idEdicion = null;

        console.log('Cita actualizada');
    } else {
        // Crear nueva cita
        const persona = new Persona(inputNombrePropietario, inputTelefono);
        const mascota = new Mascota(inputNombreMascota, inputSintomas);
        const cita = new Cita(mascota, persona, inputFechaCita, inputHoraCita);
        ui.citas.push(cita);
    }

    formulario.reset();
    ui.visualizarCitas();
}

