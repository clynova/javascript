const formulario = document.querySelector('#nueva-cita');
const htmlCitas = document.querySelector('#citas');


document.addEventListener('DOMContentLoaded', () => {
    eventListeners();
    ui.visualizarCitas();
})

function eventListeners() {
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

    // Limpiar formulario
    //formulario.reset();
}


class Cita {
    constructor(mascota, propietario, fecha, hora) {
        this.mascota = mascota; // Objeto de tipo Mascota
        this.propietario = propietario; // Objeto de tipo Persona
        this.fecha = fecha;
        this.hora = hora;
        this.idCita = Date.now();
    }
}

class Mascota {
    constructor(nombre, sintomas) {
        this.nombre = nombre
        this.sintomas = sintomas
    }
}

class Persona {
    constructor(nombre, telefono) {
        this.nombre = nombre
        this.telefono = telefono
    }
}

class UI {

    constructor() {
        this.citas = []
        this.editando = false;
        this.idEdicion = null;
    }

    visualizarCitas() {
        // Crear elemento de lista
        if (this.citas.length === 0) {
            htmlCitas.innerHTML = '<p class="no-result">No se encontraron citas.</p>';
            return;
        }
        htmlCitas.innerHTML = '';

        this.citas.forEach(cita => {
            const li = document.createElement('li');
            li.id = `cita-${cita.idCita}`; // Asignar un id único al <li>-
            li.innerHTML = `
            <p><strong>Nombre de la Mascota:</strong> ${cita.mascota.nombre}</p>
            <p><strong>Nombre del Propietario:</strong> ${cita.propietario.nombre}</p>
            <p><strong>Teléfono:</strong> ${cita.propietario.telefono}</p>
            <p><strong>Fecha de la Cita:</strong> ${cita.fecha}</p>
            <p><strong>Hora de la Cita:</strong> ${cita.hora}</p>
            <p><strong>Síntomas:</strong> ${cita.mascota.sintomas}</p>
            <p>
                <button class="btnEliminar" data-id="${cita.idCita}">
                    <i class="fas fa-trash-alt"></i> Eliminar
                </button>
                <button class="btnModificar" data-id="${cita.idCita}">
                    <i class="fas fa-edit"></i> Modificar
                </button>
            </p>
        `;

            htmlCitas.appendChild(li);
        })
    }

    botonesCita(e) {
        if (e.target.classList.contains('btnModificar')) {
            const dataId = e.target.getAttribute('data-id');
            const datosCita = this.citas.find(cita => cita.idCita == dataId)

            document.querySelector('#mascota').value = datosCita.mascota.nombre
            document.querySelector('#propietario').value = datosCita.propietario.nombre
            document.querySelector('#telefono').value = datosCita.propietario.telefono
            document.querySelector('#fecha').value = datosCita.fecha
            document.querySelector('#hora').value = datosCita.hora
            document.querySelector('#sintomas').value = datosCita.mascota.sintomas

            this.editando = true;
            this.idEdicion = dataId;
        }

        if (e.target.classList.contains('btnEliminar')) {
            const dataId = e.target.getAttribute('data-id');
            document.getElementById(`cita-${dataId}`).remove();
            this.citas = this.citas.filter(cita => cita.idCita != dataId);
            this.visualizarCitas();
        }
    }

}

const ui = new UI();