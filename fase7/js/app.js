/*const producto = {
    nombre: 'Monito 20 pulgadas',
    precio: 500,
    disponible: true
};

/*
console.log(producto)
console.log(producto.nombre)
console.log(producto['nombre'])

producto.image = 'image.jg'

console.log(producto)
delete producto.image
console.log(producto)

/*
const nombre = producto.nombre
console.log(nombre)
*/

//const { nombre, precio, disponible } = producto

const producto2 = {
    nombre: 'Monito 20 pulgadas',
    precio: 500,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '2mt'
        },
    },
    fabricacion: {
        pais: 'China'
    }
};

//console.log(producto2)

//const { peso } = producto2.informacion.medidas

const { nombre, informacion: { medidas: { peso } } } = producto2;

console.log(nombre, peso);