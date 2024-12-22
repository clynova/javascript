const carrito = []

const producto = {
    nombre: "Monitor 21 pulgadas",
    precio: 100,
    disponible: true
}

const producto2 = {
    nombre: "Monitor 22 pulgadas",
    precio: 200,
    disponible: true
}

const producto3 = {
    nombre: "Monitor 23 pulgadas",
    precio: 300,
    disponible: true
}

let resultado

resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [...resultado, producto3]

console.table(resultado)

//delete resultado.pop()

resultado.splice(1, 1)


console.table(resultado)