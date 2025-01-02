let i = 0;

while (i <= 10) {

    if (i % 2 === 0) {
        console.log(`${i} es par`);
    } else {
        console.log(`${i} es impar`);
    }

    i++;
}

let p = 1000;


do {

    console.log(`${p} Se ejecuta al menos una vez`);

    p++;
} while (p < 10);



const pendientes = ['Tarea', 'Comer', 'Estuadiar', 'Proyecto', 'Mirar guias'];


pendientes.forEach((pendiente, indice) => {
    console.log(`El Producto ${indice} es :  ${pendiente}`);
});


const automovil = {
    modelo: 'Mazda',
    year: 2008,
    motor: 24.2
};

for (let [llave, valor] of Object.entries(automovil)) {

    console.log(valor);
    console.log(llave);
}
