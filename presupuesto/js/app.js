const gastoListado = document.querySelector('#gastos ul');
let presupuesto;

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    document.addEventListener('submit', agregarGasto);
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
    const gasto = formulario.querySelector('#gasto').value;
    const cantidad = Number.parseFloat(formulario.querySelector('#cantidad').value);

    // Validaciones
    if (!gasto || !cantidad || cantidad <= 0) {
        console.log('Gasto no válido');
        return;
    }

    if (presupuesto.restante === 0) {
        console.log('No tienes saldo disponible');
        return;
    }

    if (cantidad > presupuesto.restante) {
        console.log('El gasto supera el saldo restante');
        return;
    }

    const objGasto = { gasto, cantidad };
    presupuesto.gastos.push(objGasto);
    const LI = document.createElement('LI');
    LI.innerHTML = ` Gasto: ${gasto} - Cantidad: ${cantidad}`;
    gastoListado.appendChild(LI);

    ui.cargarGastos(presupuesto);

}

class Presupuesto {

    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(restante);
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

    insertarPresupuesto(cantidad) {
        total.textContent = cantidad.presupuesto;
        restante.textContent = cantidad.presupuesto;
    }

    cargarGastos(cantidad) {
        restante.textContent = cantidad.calcularRestante();
    }
}

const total = document.querySelector('#total');
const restante = document.querySelector('#restante');
const ui = new UI();

