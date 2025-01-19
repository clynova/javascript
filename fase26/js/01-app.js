const Cliente = 'Pepe'


function mostarCliente() {
    const Cliente = 'Tomaz'
    console.log(Cliente)


}


mostarCliente()

const login = true

function clienteLogueado() {

    const cliente = 'Pedro'
    console.log(cliente)

    if (login) {
        const cliente = 'Admin'
        console.log(cliente)
    }
}

clienteLogueado()

console.log('*'.repeat(50))



obtenerCliente('Pepe')


function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`)
}

const obtenerCliente2 = function (nombre) {
    console.log(`El nombre del cliente es ${nombre}`)

}

obtenerCliente2('Pablito')


console.log('*'.repeat(50))


const numero1 = 50
const numero2 = "30"

console.log(numero1 + numero2)

console.log(Number(numero2))

console.log(numero1.toString())

console.log('*'.repeat(50))


const usuario = {
    nombre: 'Pepe',
    edad: 20,
    informacion() {
        console.log(`mi nombre es ${(this.nombre)} y mi edad es ${this.edad}`)
    },
    mascota: {
        nombre: 'Mascota',
        edad: 1,
        informacion() {
            console.log(`mi nombre es ${(this.nombre)} y mi edad es ${this.edad}`)
        },
    }
}

usuario.informacion()

usuario.mascota.informacion()

console.log('*'.repeat(50))


function persona(el1, el2) {
    console.log(`Mi nombre es${this.nombre} y escucho el ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Pepe'
}

const musicaFavorita = ['Heavy metal', 'Rock']


persona.call(informacion, musicaFavorita[0], musicaFavorita[1])

persona.apply(informacion, musicaFavorita)

const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])

nuevaFn()

console.log('*'.repeat(50))



function Auto(modelo, color) {
    this.modelo = modelo;
    this.color = color

}

const auto = new Auto('Camara', 'Negro')

window.color = 'negro'

function hola() {
    console.log(color)
}

hola()

console.log('*'.repeat(50))

/*
console.log('primero')

setTimeout(() => {

    console.log('Segundo')     

}, 0)

console.log('Tercero')

setTimeout(() => {

    console.log('Cuarto')     

}, 0)

new Promise(function(resolve){
    resolve('Desconocido')
}).then(console.log)

console.log('ultimo')

function hey() {
    console.log('hey')
}

hey()

*/

console.log('*'.repeat(50))


window.onload = () => {
    console.log('ventana lista')
}

const producto = {
    nombre: 'monito 23',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this
        return `El producto: ${self.nombre} tiene un precio de ${self.precio}`
    }
}

console.log(producto.mostrarInfo())