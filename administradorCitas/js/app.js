import { Mascota } from './mascota.js';
import { Persona } from './persona.js';
import { Cita } from './cita.js';
import { UI } from './UI.js';

const formulario = document.querySelector('#nueva-cita');
const htmlCitas = document.querySelector('#citas');
const ui = new UI();
export let DB


window.onload = () => {
    crearDB()
    eventListeners()

}

export function eventListeners() {

    ui.visualizarCitas(() => {
        ui.visualizarCitas(); // Llama a visualizar citas después de cargar los datos
    });

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

        const transaction = DB.transaction(['cita'], 'readwrite');
        const objectStore = transaction.objectStore('cita');

        const citaActualizada = {
            id: cita.idCita,
            mascota: { nombre: cita.mascota.nombre, sintomas: cita.mascota.sintomas },
            propietario: { nombre: cita.propietario.nombre, telefono: cita.propietario.telefono },
            fecha: cita.fecha,
            hora: cita.hora,
        };

        const request = objectStore.put(citaActualizada);

        request.onsuccess = function () {
            console.log('Cita actualizada en la base de datos');
        };

        transaction.oncomplete = function () {
            console.log('Transacción completada: cita actualizada');
        };

        transaction.onerror = function () {
            console.error('Error al actualizar la cita en la base de datos');
        };


        console.log('Cita actualizada');
    } else {
        // Crear nueva cita
        const persona = new Persona(inputNombrePropietario, inputTelefono);
        const mascota = new Mascota(inputNombreMascota, inputSintomas);
        const cita = new Cita(mascota, persona, inputFechaCita, inputHoraCita);
        ui.citas.push(cita);

        const transaction = DB.transaction(['cita'], 'readwrite');
        const objectStore = transaction.objectStore('cita');

        const nuevoCita = {
            id: cita.idCita,
            mascota: { nombre: cita.mascota.nombre, sintomas: cita.mascota.sintomas },
            propietario: { nombre: cita.propietario.nombre, telefono: cita.propietario.telefono },
            fecha: cita.fecha,
            hora: cita.hora,
        };

        const request = objectStore.add(nuevoCita);

        request.onsuccess = function () {
            console.log('Cita agregada exitosamente a la base de datos');
        };

        transaction.oncomplete = function () {
            console.log('Transacción completada: cita agregada');
        };

        transaction.onerror = function () {
            console.error('Error al agregar la cita a la base de datos');
        };

    }

    formulario.reset();
    ui.visualizarCitas();
}



export function crearDB(callback) {
    const request = indexedDB.open('bdcitas', 1);

    request.onerror = function () {
        console.error('Error al abrir la base de datos');
    };

    request.onsuccess = function (e) {
        DB = request.result; // Asignar la base de datos a DB
        console.log('Base de datos inicializada:');

        if (callback) callback(); // Ejecutar el callback una vez que DB esté lista
    };

    request.onupgradeneeded = function (e) {
        const db = e.target.result;

        console.log('Creando estructura de la base de datos...');

        // Crear almacén "cita" (puedes agregar más almacenes según lo necesites)
        if (!db.objectStoreNames.contains('cita')) {
            const citaStore = db.createObjectStore('cita', {
                keyPath: 'id',
                autoIncrement: true,
            });

            citaStore.createIndex('fecha', 'fecha', { unique: false });
            citaStore.createIndex('hora', 'hora', { unique: false });
            citaStore.createIndex('mascota', 'mascota', { unique: false });
            citaStore.createIndex('propietario', 'propietario', { unique: false });

            console.log('Almacén "cita" creado');
        }
    };
}