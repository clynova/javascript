const gastoListado = document.querySelector('#gastos ul');
let presupuesto;

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    const formulario = document.querySelector('#agregar-gasto');
    formulario.addEventListener('submit', agregarGasto);

}

function preguntarPresupuesto() {
    let presupuestoSemanalTotal;
    do {
        presupuestoSemanalTotal = parseFloat(prompt('¿Cuál es tu presupuesto?'));
    } while (!presupuestoSemanalTotal || presupuestoSemanalTotal <= 0);

    presupuesto = new Presupuesto(presupuestoSemanalTotal);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();
    const formulario = document.querySelector('#agregar-gasto');
    const gasto = formulario.querySelector('#gasto').value.trim();
    const cantidad = Number.parseFloat(formulario.querySelector('#cantidad').value);

    // Validaciones
    if (!gasto || !cantidad || cantidad <= 0) {
        ui.imprimirAlerta('Gasto no válido', 'error')
        return;
    }

    if (presupuesto.restante === 0) {
        ui.imprimirAlerta('No tienes saldo disponible', 'error')
        return;
    }

    if (cantidad > presupuesto.restante) {
        ui.imprimirAlerta('El gasto supera el saldo restante', 'error')
        return;
    }

    const objGasto = { gasto, cantidad };
    presupuesto.gastos.push(objGasto);
    ui.insertarLI(objGasto)
    ui.cargarGastos(presupuesto);
    ui.imprimirAlerta('Gasto agregado con exito', 'success')

}

class Presupuesto {

    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = this.presupuesto;
        this.gastos = [];
    }

    calcularRestante() {
        this.restante = this.presupuesto - this.gastos.reduce((acc, gasto) => acc + gasto.cantidad, 0);
        if (this.restante < 0) {
            this.restante = 0;
        }
        return this.restante;
    }
}

class UI {

    insertarLI(gasto) {
        const li = document.createElement('LI');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span><strong>${gasto.gasto}</strong></span>
            <span class="badge badge-primary badge-pill">$${gasto.cantidad.toFixed(2)}</span>
        `;
        gastoListado.appendChild(li);
    }

    insertarPresupuesto(cantidad) {
        total.textContent = cantidad.presupuesto;
        restante.textContent = cantidad.presupuesto;
    }

    cargarGastos(cantidad) {
        const presupuesto = cantidad.presupuesto;
        const nuevoRestante = cantidad.calcularRestante();
        restante.textContent = nuevoRestante
        const divRestante = document.querySelector('.restante.alert');

        if ((presupuesto / 4) > nuevoRestante) {
            divRestante.classList.remove('alert-success')
            divRestante.classList.add('alert-danger')
        } else if ((presupuesto / 2) > nuevoRestante) {
            divRestante.classList.remove('alert-success')
            divRestante.classList.add('alert-warning')
        }

    }

    imprimirAlerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV')
        divMensaje.classList.add('text-center', 'alert')

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger')
        } else {
            divMensaje.classList.add('alert-success')
        }

        divMensaje.textContent = mensaje;
        const formulario = document.querySelector('#agregar-gasto');
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        setTimeout(() => {
            divMensaje.remove()
        }, 3000)

    }

}

const total = document.querySelector('#total');
const restante = document.querySelector('#restante');
const ui = new UI();