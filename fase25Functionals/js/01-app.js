

const suma = (a, b) => a + b

const multiplicar = (a, b) => a * b


const resultado = suma

console.log(resultado(10, 20))


const sumarOMultiplicar = fn => fn(10, 20)

console.log(sumarOMultiplicar(multiplicar))

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },
];

const resultado2 = carrito.filter(producto => {
    return producto.precio > 400
})
console.log(resultado2)


const mayor400 = producto => {
    return producto.precio > 400
}
const resultado3 = carrito.filter(mayor400)
console.log(resultado3)


const obtenerNombres = producto => {
    return producto.nombre
}
const resultado4 = carrito.map(obtenerNombres)
console.log(resultado4)


const numero1 = 20;
const duplicar = (numero) => {
    return numero * 2
}
const resultado5 = duplicar(numero1)
console.log(resultado5)


const obtenerCliente = () => () => console.log('Pepe')
const fn = obtenerCliente()
fn()

const cliente = 'Hero'
function mostrarCliente() {
    const cliente = 'Tato'
    console.log(cliente)
}
mostrarCliente()



console.log('*'.repeat(10))

const obtenerName = () => {
    const nombre = 'Afuera'
    function muestraNombre() {
        console.log(nombre)
    }
    return muestraNombre
}
const client = obtenerName()
client()

console.log('*'.repeat(10))

const nuevaSuma = (a, b, c) => a + b + c

const parcial = a => (b, c) => nuevaSuma(a, b, c)


const primerNumero = parcial(5)
const resultado6 = primerNumero(4, 5)

console.log(nuevaSuma(5, 5, 4))
console.log(resultado6)

console.log('*'.repeat(10))
console.log('*'.repeat(10))


const obtenerNombreObjetos = info => ({
    mostrarNombre() {
        console.log(`nombre: ${info.nombre}`)
    }
})

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en: ${info.email}`)
        info.email = email
    }
})


const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`)
    }
})

function Cliente(nombre, email, empresa) {


    let info = {
        nombre, email, empresa
    }

    return Object.assign(
        info, obtenerNombreObjetos(info), guardarEmail(info), obtenerEmail(info)
    )
}

function Empleado(nombre, email, puesto) {

    let info = {
        nombre, email, puesto
    }


    return Object.assign(
        info, obtenerNombreObjetos(info), guardarEmail(info), obtenerEmail(info)
    )


}

const clienteObj = Cliente('pepe', null, 'Santa')
clienteObj.mostrarNombre()
clienteObj.agregarEmail('pe@pe.cl')

const empleadoObj = Empleado('Franc', null, 'Programador')
empleadoObj.mostrarNombre()
empleadoObj.agregarEmail('fa@fa.cl')
empleadoObj.mostrarEmail()