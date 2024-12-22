const numero1 = 5;
const numero2 = 10;


function sumar(dato1 = 0, dato2 = 0) {
    return dato1 + dato2
}

const restar = (dato1 = 0, dato2 = 0) => {
    return dato1 - dato2
}

console.log(sumar(numero1, numero2) + 50)

console.log(restar(numero1, numero2))

console.log(sumar(1500, 200))

console.log(sumar())

