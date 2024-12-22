const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100 },
    { nombre: 'Monitor 2 pulgadas', precio: 200 },
    { nombre: 'Monitor 3 pulgadas', precio: 300 },
    { nombre: 'Monitor 4 pulgadas', precio: 400 },
    { nombre: 'Monitor 5 pulgadas', precio: 500 },
    { nombre: 'Monitor 6 pulgadas', precio: 600 },
]


const nuevoArreglo = carrito.map((producto) => {
    return `este producto ${producto.nombre} vale ${producto.precio}`
})

carrito.forEach((producto) => {
    console.log(`estes producto ${producto.nombre} vale ${producto.precio}`)
})

console.log(nuevoArreglo)
