// presupuesto.test.js
const Presupuesto = require('../presupuesto/js/presupuesto.js'); // Asume que la clase está en un archivo separado

test('calcularRestante debe retornar el saldo correcto', () => {
    const presupuesto = new Presupuesto(1000); // Presupuesto inicial
    presupuesto.gastos.push({ gasto: 'Comida', cantidad: 200 }); // Agregar un gasto
    const saldoRestante = presupuesto.calcularRestante(); // Calcular el saldo restante

    expect(saldoRestante).toBe(800); // Comprobamos si el saldo restante es 800
});

test('debe retornar 0 si los gastos superan el presupuesto', () => {
    const presupuesto = new Presupuesto(500);
    presupuesto.gastos.push({ gasto: 'Comida', cantidad: 600 });
    const saldoRestante = presupuesto.calcularRestante();

    expect(saldoRestante).toBe(0); // El saldo restante no puede ser negativo
});
