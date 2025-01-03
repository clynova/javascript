localStorage.setItem('nombre', 'Alejandro');

const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300
};

const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);

const meses = [ 'enero', 'febrero', 'marzo', 'abril'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);

const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

localStorage.removeItem('nombre');

const mesesJSON = JSON.parse(localStorage.getItem('meses'));

mesesJSON.push('nuevo mes');
console.log(mesesJSON);
localStorage.setItem('meses', mesesJSON);

localStorage.clear();