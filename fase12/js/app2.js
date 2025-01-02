// Array de meses del año
//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// Array de objetos, cada uno representa un producto en un carrito de compras
const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100 },
    { nombre: 'Television', precio: 200 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 500 },
    { nombre: 'Celular', precio: 600 },
];


let total = 0;

carrito.forEach(producto => total += producto.precio);


console.log(total);




let resultado = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);




const carritoFiltrado = carrito.filter(producto => {
    if (producto.precio > 300) {
        return producto;
    }
});

console.log(carritoFiltrado);

const carritoFiltrado2 = carrito.filter(producto => {
    if (producto.nombre !== 'Audifonos') {
        return producto;
    }
});

console.log(carritoFiltrado2);

resultado = '';
carrito.forEach((producto, index) => {
    if (producto.nombre == 'Tablet') {
        resultado = carrito[index];
    }

});

console.log(resultado);

console.log('****'.repeat(50));

const resultadoFind = carrito.find(producto => producto.nombre === 'Tablet');
console.log(resultadoFind);

const resultadoEvery = carrito.every( producto => producto.precio < 1000);
console.log(resultadoEvery);