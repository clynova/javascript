/*

console.log(1 + 1)


try {
    autenticarUsuario()

} catch(error) {
    console.log(error)
}



console.log(1 + 1)


*/

/*

function descargarCliente() {

    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(()=> {
            if(!error) {
                resolve('el listado de cleintes de descargo correctamente')
            } else {
                reject('Error en la conexion')
            }
        },3000)

    } )

}


async function ejectuar() {

    try {
        console.log(1+1)
      const respuesta = await descargarCliente()
        console.log(3+3)
        console.log(respuesta)
        console.log(4+4)

    } catch(error) {
        console.log(error)
    }

}

ejectuar()

*/

/*

const descargarCliente = () => {

    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(()=> {
            if(!error) {
                resolve('el listado de cleintes de descargo correctamente')
            } else {
                reject('Error en la conexion')
            }
        },3000)

    } )

}


const ejectuar = async () => {

    try {
        console.log(1+1)
      const respuesta = await descargarCliente()
        console.log(3+3)
        console.log(respuesta)
        console.log(4+4)

    } catch(error) {
        console.log(error)
    }

}

ejectuar()

*/

/*

function descargarNuevosClientes() {
    return new Promise((resolve, reject) => {
        console.log('Descargando clientes...')
        setTimeout(() => {
            resolve('Los clientes fueron descargados...')
        }, 5000)
    })
}

function descargarNuevosPedidos() {
    return new Promise((resolve, reject) => {
        console.log('Descargando Pedidos...')
        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000)
    })
}

const app = async () => {

    try{
        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()])
        console.log(respuesta)
    } catch(err) {
        console.log(err)
    }

}

app()

*/

const url = 'https://picsum.photos/list'

document.addEventListener('DOMContentLoaded', obtenerDatos)

/*
function obtenerDatos() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(err => console.error(err))
}
        */


async function obtenerDatos() {

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json()
        console.log(resultado)
    } catch (err) {
        console.error(err)
    }


}