const htmlCitas = document.querySelector('#citas');

export class UI {

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