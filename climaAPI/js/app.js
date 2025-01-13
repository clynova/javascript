const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
const container = document.querySelector('.container')


window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima)
})

function buscarClima(e) {
    e.preventDefault();
    const pais = document.querySelector('#pais').value
    const ciudad = document.querySelector('#ciudad').value


    if (!pais || !ciudad) {
        console.error('no se completaron todos los campos')
        mostrarError('no se completaron todos los campos')
        return
    }

    conectarApi(pais, ciudad)


    console.log('buscando Clima', pais, ciudad)

}


function conectarApi(pais, ciudad) {

    const API = ' '
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${API}`;

    fetch(URL)
        .then(result => {
            if (!result.ok) {
                throw new Error('No se encontró el clima para la ubicación especificada.');
            }
            return result.json();
        })
        .then(
            result => mostrarClima(result)
        )
        .catch(result => console.error(result))
}

function mostrarError(mensaje) {
    const alerta = document.querySelector('.bd-red-100')
    if (!alerta) {
        const alerta = document.createElement('div')

        alerta.classList.add('bd-red-100', 'border-red-400')

        alerta.innerHTML = `
            <strong class="font-bold" >  Error!</strong>
            <span class='block'> ${mensaje}</span>    
        `
        container.appendChild(alerta)
    }
}

function mostrarClima(data) {

    resultado.innerHTML = ''


    const { name, main: { temp, temp_max, temp_min }, weather } = data;

    // Convertir temperaturas a Celsius (si los datos están en Kelvin)
    const tempC = (temp - 273.15).toFixed(1);
    const tempMaxC = (temp_max - 273.15).toFixed(1);
    const tempMinC = (temp_min - 273.15).toFixed(1);

    resultado.innerHTML = `
        <h2>Clima en ${name}</h2>
        <p>Temperatura actual: ${tempC}°C</p>
        <p>Máxima: ${tempMaxC}°C</p>
        <p>Mínima: ${tempMinC}°C</p>
        <p>Condiciones: ${weather[0].description}</p>
    `;

}