// Array de meses del año
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100 },
    { nombre: 'Television', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
];

const producto = { nombre: 'Tetera', precio: 500 };

const carrito2 = [producto, ...carrito];

console.log('testando contenido', carrito2);

