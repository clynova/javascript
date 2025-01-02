// Array de meses del año
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Array de objetos, cada uno representa un producto en un carrito de compras
const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100 },
    { nombre: 'Television', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
];

// Itera sobre el array "meses" usando forEach y realiza una acción si el mes es "Enero"
meses.forEach((mes, i) => {
    // Verifica si el mes actual es "Enero"
    if (mes === 'Enero') {
        console.log(`Si existe, encontrado en el indice ${i}`); // Si es "Enero", imprime "Si existe"
    }
});

// Usa el método "includes" para verificar si "Enero" está en el array "meses"
// "includes" devuelve true si encuentra el elemento, de lo contrario devuelve false
const resultado = meses.includes('Enero');
console.log(resultado); // Imprime "true" porque "Enero" está en el array

// Usa el método "some" para verificar si algún producto en el carrito tiene el nombre 'Celular'
// "some" devuelve true si al menos un producto cumple con la condición
const existe = carrito.some((producto) => {
    if (producto.nombre === 'Celular')
        return producto; // Si el nombre del producto es 'Celular', devuelve el objeto
});
console.log(existe); // Imprime "true" si 'Celular' existe en el carrito, de lo contrario "false"

// Usa el método "find" para encontrar el primer producto en el carrito con el nombre 'Celular'
// "find" devuelve el primer objeto que cumple la condición o "undefined" si no se encuentra ninguno
const producto = carrito.find((producto) => producto.nombre === 'Celular');
console.log(producto); // Imprime el objeto del 'Celular' o "undefined" si no existe


const indice = meses.findIndex( mes => mes === 'Abril');
console.log(indice);