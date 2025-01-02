const producto = '                 Monitor de 20 pulgadas      ~';
const producto2 = String('Monitor de 24 pulgadas');
const producto3 = new String('MOnitor de 27 pulgadas');


console.log(producto);
console.log(producto2);
console.log(producto3);

console.log('Producto 1');
console.log('cantidad de caracteres: ' + producto.length);
console.log(producto.indexOf('pulgadas'));
console.log(producto.includes('pulgadas'));

console.log(`El producto ${producto} tiene un precio de 50 dolares`);


console.log(producto.trimStart());
console.log(producto.trimEnd());
console.log(producto.trim());
console.log(producto.replace('~', 'uwu'));

const palabra = 'Mi Primera Palabra';
console.log(palabra.substring(0, 3));
console.log(palabra.repeat(1.7));
console.log(palabra.split(' '));

const numeros = 'uno , dos , treS, cuatrO, ciNco';
const resultadoNumerosParseados = numeros.split(',').map(palabra => palabra.trim().toLowerCase());
console.log(numeros.trim());
console.log(resultadoNumerosParseados);