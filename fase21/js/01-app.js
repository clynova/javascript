

const paises = ['Chile', 'Peruano', 'Argentina', 'Japon']

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais)
        callback()
    }, 2000)
}



function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            //console.log(pais)
        })

    }, 1000)
}

nuevoPais('China', mostrarPaises)

const nombres = []


/*

function nuevoNombre(nombre, callback) {
    nombres.push(nombre)
    console.log(`agregado: ${nombre}`)
    callback();
}

function mostrarNombres() {
    console.log(nombres)
    setTimeout(() => {
        nuevoNombre('Tomas', mostrarNombres )
        setTimeout(() => {
            nuevoNombre('Pepe', mostrarNombres )
        }, 3000)
    }, 3000)
}


function inicialCallbackHell() {
    setTimeout(() => {
        nuevoNombre('Chiquitin', mostrarNombres)
    }, 3000)
}

inicialCallbackHell()

*/

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false
    if (descuento) {
        resolve('descuento aplicado')
    } else {
        reject('no se aplico descuento')
    }
  
})


aplicarDescuento
    .then(result => console.log('se aplico:', result))
    .catch(result => console.log('error: ', result))
    .finally(() => console.log('Operación finalizada.')); // Se ejecuta siempre
