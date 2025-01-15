
const resultado = document.querySelector('#resultado')
const formulario = document.querySelector('#formulario')
const API_KEY = `98a2ee5073aae5b7aa7a6fe26915b0266247561773d5e62dd433b0406f6da27a`
const criptomonedas = document.querySelector('#criptomonedas')
const moneda = document.querySelector('#moneda')

window.addEventListener('load', () => {
    conectarCryptoTop10Api()
    eventListeners()
})

function eventListeners() {
    formulario.addEventListener('submit', conectarApiCrypto)
}

function conectarCryptoTop10Api() {
    const valorMoneda = moneda.value
    const API_URL = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${valorMoneda}`
    const API_URL_COMPLETA = `${API_URL}&api_key=${API_KEY}`

    fetch(API_URL_COMPLETA)
        .then(result => {
            if (!result.ok) {
                throw new Error(`No se encontraron datos para la moneda seleccionada`)
            }
            return result.json()
        })
        .then(result => {
            return cargarTopMonedas(result.Data)
        })
        .catch(result => console.error(result))
}

function cargarTopMonedas(data) {   
    data.forEach(element => {    
        const option = document.createElement('option')
        option.value = element.CoinInfo.Name
        option.textContent =  element.CoinInfo.FullName
        criptomonedas.appendChild(option)
    });
}

function conectarApiCrypto(e) {//
    e.preventDefault()
    const valorMoneda = moneda.value
    const valorCrypto = criptomonedas.value

    mostrarSpinner()

    const API_URL = `https://min-api.cryptocompare.com/data/price?fsym=${valorCrypto}&tsyms=${valorMoneda}`
    const API_URL_COMPLETA = `${API_URL}&api_key=${API_KEY}`

    fetch(API_URL_COMPLETA)
        .then(result => {
            if (!result.ok) {
                throw new Error(`No se encontraron datos para la moneda seleccionada`)
            }
            return result.json()
        })
        .then(result => {
            mostrarResultadoCotizacion(result)
        })
        .catch(result => console.error(result))
}


function mostrarResultadoCotizacion(data) {
    // Limpiar cualquier resultado previo
    resultado.innerHTML = '';

    // Crear contenido dinámico con los datos obtenidos
    const valorMoneda = moneda.value; // Moneda seleccionada

    if (data[valorMoneda]) {
        const precio = data[valorMoneda];

        const div = document.createElement('div');
        div.classList.add('resultado-cotizacion');
        div.innerHTML = `
            <h2>Cotización</h2>
            <p>1 ${criptomonedas.value} = ${precio} ${valorMoneda}</p>
        `;

        resultado.appendChild(div);
    } else {
        resultado.innerHTML = `<p>No se pudo obtener la cotización. Intenta nuevamente.</p>`;
    }
}


function mostrarSpinner() {

    resultado.innerHTML = ''

    const spinner = document.createElement('div')
    spinner.innerHTML = `
    
    <div class="bounce1"> </div>
    <div class="bounce2"> </div>
    <div class="bounce3"> </div>

    `

    resultado.appendChild(spinner)

}