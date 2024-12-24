const carrito = [
    { nombre: 'Monitor 1 pulgadas', precio: 100 },
    { nombre: 'Monitor 2 pulgadas', precio: 200 },
    { nombre: 'Monitor 3 pulgadas', precio: 300 },
    { nombre: 'Monitor 4 pulgadas', precio: 400 },
    { nombre: 'Monitor 5 pulgadas', precio: 500 },
    { nombre: 'Monitor 6 pulgadas', precio: 600 },
]

/*
for (let i = 0; i < carrito.length; i++) {
    if (i === 3) {
        console.log(carrito[i].nombre)
        break;
    }  
    console.log(`numero: ${i}`)  
}

console.log(`**`.repeat(100))  

for (let i = 0; i < carrito.length; i++) {
    if (i === 3) {
        console.log(`tres`)
        continue;
    }   
    console.log(`numero: ${i}`) 
}


*/

/*
for (let i = 0; i < 100; i++) {

    if(i === 3 || i === 6 || i === 9 || i === 12) {
        console.log(`${i} FIZZ`)
        continue
    }
    if(i === 5 || i === 10 || i === 15 || i === 20) {
        console.log(`${i} BUZZZ`)
        continue
    }
    if(i === 13 || i === 30 || i === 45) {
        console.log(`${i} FIZZBUZZZ`)
        continue
    }

}

*/

for (let i = 1; i <= 100; i++) { // Comienza en 1 y termina en 100
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    } else if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    } else {
        console.log(i); // Si no es divisible por 3 ni 5, imprime el número
    }
}
