const url = 'http://localhost:3000/clientes'


export const nuevoCliente = async (cliente) => {

    try {

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'

    } catch (err) {
        console.error(err)
    }

}

export const listarClientes = async () => {

    try {

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseJson = await response.json()

        return responseJson

    } catch (err) {
        console.error(err)
    }

}


export const eliminarCliente = async (id) => {

    try {

        const URL_PARSEADA = `${url}/${id}`

        const response = await fetch(URL_PARSEADA, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseJson = await response.json()

        return responseJson

    } catch (err) {
        console.error(err)
    }
}


export const editarCliente = async (cliente) => {

    try {

        const URL_PARSEADA = `${url}/${cliente.id}`

        await fetch(URL_PARSEADA, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'

    } catch (err) {
        console.error(err)
    }

}

export const obtenerCliente = async (id) => {

    try {
        const URL_PARSEADA = `${url}/${id}`
        const response = await fetch(URL_PARSEADA, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const responseJson = await response.json()

        return responseJson

    } catch (err) {
        console.error(err)
    }

}