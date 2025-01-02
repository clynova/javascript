//const numeros = [10, 20, 30, 40, 50, [0, 1, 2, 3]];

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

/*
console.log(numeros)
console.log(meses)

const deTodo = [10, "Marzo", 0.2]

console.log(deTodo)

console.table(numeros)

console.log(numeros[5][3])

console.log(meses.length)

*/

meses.push('Peruca');

for (let i = 0; i < meses.length; i++) {
    //console.log(`Los meses siguientes son feos: ${i+1} ${meses[i]}`) 
}



const carrito = [];

const producto = {
    nombre: 'Monitor 21 pulgadas',
    precio: 100,
    disponible: true
};

const producto2 = {
    nombre: 'Monitor 22 pulgadas',
    precio: 200,
    disponible: true
};

const producto3 = {
    nombre: 'Monitor 22 pulgadas',
    precio: 300,
    disponible: true
};


carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

console.table(carrito);
