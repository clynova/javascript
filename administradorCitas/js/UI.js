const htmlCitas = document.querySelector('#citas');
import { DB, crearDB } from './app.js';

export class UI {

    constructor() {
        this.citas = [];
        this.editando = false;
        this.idEdicion = null;
    }

    visualizarCitas(callback) {
        crearDB(() => {
            const transaction = DB.transaction(['cita'], 'readonly');
            const objectStore = transaction.objectStore('cita');
            const request = objectStore.openCursor();

            htmlCitas.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos

            request.onsuccess = (e) => {
                const cursor = e.target.result;

                if (cursor) {
                    const { mascota, propietario, fecha, hora, id } = cursor.value;

                    const citaActualizada = {
                        idCita: id,
                        mascota: { nombre: mascota.nombre, sintomas: mascota.sintomas },
                        propietario: { nombre: propietario.nombre, telefono: propietario.telefono },
                        fecha: fecha,
                        hora: hora,
                    };

                    this.citas.push(citaActualizada); // Asegúrate de mantener el estado sincronizado

                    // Crear el elemento y agregarlo al DOM
                    const li = this.crearElementoCita(citaActualizada);
                    htmlCitas.appendChild(li);

                    cursor.continue();
                } else {
                    // Cuando se carguen todas las citas
                    if (this.citas.length === 0) {
                        htmlCitas.innerHTML = '<p class="no-result">No se encontraron citas.</p>';
                    }
                    if (callback) callback();
                }
            };

            request.onerror = () => {
                console.error('Error al cargar las citas desde la base de datos');
            };
        });
    }

    crearElementoCita(cita) {
        const li = document.createElement('li');
        li.id = `cita-${cita.idCita}`;
        li.classList.add('cita-item'); // Clase CSS para estilizar

        li.innerHTML = `
            <p><strong>Nombre de la Mascota:</strong> ${cita.mascota.nombre}</p>
            <p><strong>Nombre del Propietario:</strong> ${cita.propietario.nombre}</p>
            <p><strong>Teléfono:</strong> ${cita.propietario.telefono}</p>
            <p><strong>Fecha de la Cita:</strong> ${cita.fecha}</p>
            <p><strong>Hora de la Cita:</strong> ${cita.hora}</p>
            <p><strong>Síntomas:</strong> ${cita.mascota.sintomas}</p>
            <div class="cita-actions">
                <button class="btnEliminar" data-id="${cita.idCita}">Eliminar</button>
                <button class="btnModificar" data-id="${cita.idCita}">Modificar</button>
            </div>
        `;

        return li;
    }

    botonesCita(e) {
        const target = e.target;

        if (target.classList.contains('btnModificar')) {
            const dataId = target.getAttribute('data-id');
            const datosCita = this.citas.find(cita => cita.idCita == dataId);

            if (datosCita) {
                // Llenar el formulario con los datos de la cita
                document.querySelector('#mascota').value = datosCita.mascota.nombre;
                document.querySelector('#propietario').value = datosCita.propietario.nombre;
                document.querySelector('#telefono').value = datosCita.propietario.telefono;
                document.querySelector('#fecha').value = datosCita.fecha;
                document.querySelector('#hora').value = datosCita.hora;
                document.querySelector('#sintomas').value = datosCita.mascota.sintomas;


                this.editando = true;
                this.idEdicion = dataId;
            }
        }

        if (target.classList.contains('btnEliminar')) {
            const dataId = target.getAttribute('data-id');
            this.eliminarCita(dataId);
        }
    }

    eliminarCita(idCita) {
        // Eliminar la cita del array
        this.citas = this.citas.filter(cita => cita.idCita != idCita);

        // Eliminar el elemento del DOM
        const li = document.getElementById(`cita-${idCita}`);
        if (li) li.remove();

        // Verificar si aún quedan citas
        if (this.citas.length === 0) {
            htmlCitas.innerHTML = '<p class="no-result">No se encontraron citas.</p>';
        }

        const transaction = DB.transaction(['cita'], 'readwrite');
        const objectStore = transaction.objectStore('cita');

        const request = objectStore.delete(Number(idCita)); // Asegúrate de convertir `idCita` a número si es necesario

        request.onsuccess = () => {
            console.log(`Cita con ID ${idCita} eliminada de la base de datos`);
        };

        request.onerror = () => {
            console.error(`Error al eliminar la cita con ID ${idCita}`);
        };
    }
}
