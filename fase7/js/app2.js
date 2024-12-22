"use strict"

const producto = {
    nombre: "Monito 20 pulgadas",
    precio: 500,
    disponible: true
}

//Object.freeze(producto)

//producto.image = "asawa"

//Object.seal( producto )

//console.log(Object.isSealed(producto))


const medidas = {
    peso: "1kg",
    medidas: '1m',
    disponible: false
}

const resultado = Object.assign(producto, medidas)

console.log(resultado)

const resultado2 = {...producto, ...medidas}

console.log(resultado2)
