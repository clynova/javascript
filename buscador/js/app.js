import { autos } from './db.js';

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMinimo = document.querySelector('#minimo');
const precioMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', function () {
    llenarSelectYears();

    marca.addEventListener('change', filtrarAutos);
    year.addEventListener('change', filtrarAutos);
    precioMinimo.addEventListener('change', filtrarAutos);
    precioMaximo.addEventListener('change', filtrarAutos);
    puertas.addEventListener('change', filtrarAutos);
    transmision.addEventListener('change', filtrarAutos);
    color.addEventListener('change', filtrarAutos);

    filtrarAutos();

})

function filtrarAutos() {
    resultado.innerHTML = ''

    const filtroAutos = autos.filter((auto) => {
        if (marca.value && auto.marca !== marca.value) return false;
        if (year.value && auto.year !== parseInt(year.value)) return false;
        return true
    })

    mostrarAutos(filtroAutos)
}

function mostrarAutos(autosFiltrados) {
    if (autosFiltrados.length === 0) {
        resultado.innerHTML = '<p class="no-result">No se encontraron autos que coincidan con los criterios.</p>';
        return;
    }

    autosFiltrados.forEach(auto => {

        const autoCard = document.createElement('div');
        autoCard.classList.add('auto-card'); 
        
        autoCard.innerHTML = `
            <h3 class="auto-title">${auto.marca} ${auto.modelo}</h3>
            <p><strong>Año:</strong> ${auto.year}</p>
            <p><strong>Precio:</strong> $${auto.precio}</p>
            <p><strong>Puertas:</strong> ${auto.puertas}</p>
            <p><strong>Transmisión:</strong> ${auto.transmision}</p>
            <p><strong>Color:</strong> ${auto.color}</p>
        `;
        // Agregar al contenedor principal
        resultado.appendChild(autoCard);
    });
}

function llenarSelectYears() {
    const maxYears = new Date().getFullYear();
    const minYear = maxYears - 10;

    for (let i = maxYears; i >= minYear; i--) {
        const opcion = document.createElement('option')
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}