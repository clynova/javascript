const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100},
    { nombre: 'Monitor 2 pulgadas', precio: 200},
    { nombre: 'Monitor 3 pulgadas', precio: 300},
    { nombre: 'Monitor 4 pulgadas', precio: 400},
    { nombre: 'Monitor 5 pulgadas', precio: 500},
    { nombre: 'Monitor 6 pulgadas', precio: 600},
];

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} tiene un valor ${producto.precio}`);
});


const resultado = carrito.map(producto => {
    if (producto.precio === 300) {
        return producto;
    }
    return null; // O algún otro valor manejable
}).filter(item => item !== null); // Eliminar los valores nulos

console.log(resultado);