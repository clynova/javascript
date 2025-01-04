
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');

eventListeners();

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
    let cantidad;
    const base = 2000;

    switch (this.marca) {

        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    const diferencia = new Date().getFullYear() - this.year;
    cantidad -= ((diferencia * 3) * cantidad) / 100;

    if (this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    return cantidad;
};

function UI() { }

UI.prototype.llenarOpciones = () => {
    const fechaMaxima = new Date().getFullYear();
    const fechaMinima = fechaMaxima - 20;

    for (let i = fechaMaxima; i > fechaMinima; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
};

UI.prototype.mostarMensaje = (mensaje, tipo) => {

    const DIV = document.createElement('DIV');

    if (tipo === 'error') {
        DIV.classList.add('error');
    } else {
        DIV.classList.add('correcto');
    }
    DIV.classList.add('mensaje', 'mt-10');
    DIV.textContent = mensaje;
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(DIV, document.querySelector('#resultado'));

    setTimeout(() => {
        DIV.remove();
    }, 3000);
};

UI.prototype.mostrarResultado = (seguro, total) => {

    const DIV = document.createElement('DIV');
    DIV.classList.add('mt-10');

    DIV.innerHTML = `
        <p class="header"> Tu resumen </p>
        <p class="font-bold"> Total: ${total}</p>
    `;
    const resultadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(DIV);
    }, 3000);
};

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();
    const tipo = document.querySelector('input[name="tipo"]:checked');

    //console.log(marca)
    if (!marca.value || !year.value || !tipo) {
        ui.mostarMensaje('no paso la validacion', 'error');
        return;
    }

    ui.mostarMensaje('Cotizando', 'correcto');

    const resultados = document.querySelector('#resultado div');
    if (resultados != null) {
        resultados.remove();
    }

    const seguro1 = new Seguro(marca.value, year.value, tipo.value);
    const total = seguro1.cotizarSeguro();

    ui.mostrarResultado(seguro1, total);

}