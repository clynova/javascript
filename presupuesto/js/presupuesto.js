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

module.exports = Presupuesto;