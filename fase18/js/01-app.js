// almacena cualquier cosa

const carrito = new Set();

carrito.add('camisa')
carrito.add('Camisa')

console.log(carrito.has('Guitarra'))
console.log(carrito.size)

carrito.forEach((producto, index, pertenece) => {

    // console.log(producto, index, pertenece)
})


//**********************************
// solo alamcena objetos
const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 400
}

weakset.add(cliente)

console.log(weakset)


//**********************************

const clienteMap = new Map();

clienteMap.set('nombre', 'Pepe')
clienteMap.set('carrito', 'vacio')

console.log(clienteMap)
console.log(clienteMap.has('carrito'))
console.log(clienteMap.get('carrito'))

//**********************************

const producto = {
    idProducto: 10
}

const clientWeakMap = new WeakMap()

clientWeakMap.set(producto, 'monitor')

console.log(clientWeakMap)

//**********************************


const sym = Symbol();
const sym2 = Symbol();


if (sym === sym2) {
    console.log('son iguales')
} else {
    console.log('no son iguales')
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {

}

persona.tipoCliente = 'Normalito'

persona[nombre] = 'juan'
persona[apellido] = 'Perz'

console.log(persona)

//**********************************


function crearIterador(carrito) {

    let i = 0

    return {
        siguiente: () => {
            const fin = (i >= carrito.length)
            const valor = !fin ? carrito[i++] : undefined

            return {
                fin,
                valor
            }
        }
    }

}

const carrito2 = ['Producto 1', 'Producto 2', 'Producto 3']

const recorrerCarrito = crearIterador(carrito2)
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())
console.log(recorrerCarrito.siguiente())

//**********************************

function* crearGenerador() {

    yield 1;
    yield 'Juan';
    yield 3 + 3;
    yield true;

}

const iterador = crearGenerador();

console.log(iterador)
console.log(iterador.next())

//**********************************


const ciudades = ['Londres', 'New York', 'Madrid', 'Paris']

const ordenes = new Set([123, 231, 321, 102])

const datos = new Map()

datos.set('nombre', 'juan')
datos.set('profesion', 'Desarrollador web')

for (let entry of ciudades.entries()) {
    console.log(entry)
}

for (let entry of ordenes.entries()) {
    console.log(entry)
}

for (let value of ciudades.values()) {
    console.log(value)
}

for (let value of ordenes.values()) {
    console.log(value)
}

for (let keys of ciudades.keys()) {
    console.log(keys)
}

for (let keys of ordenes.keys()) {
    console.log(keys)
}