const cargarTxtBtn = document.querySelector('#cargarTxt')

cargarTxtBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {

    const url = 'data/datos.txt'

    fetch(url)
        .then(result => {
            //console.log(result.text())
            return result.text()
        })
        .then(result => console.log(result))
        .catch(error => {
            console.log(error)
        })
}

const cargarJsonBtn = document.querySelector('#cargarJSON')

cargarJsonBtn.addEventListener('click', obtenerDatosJSON)

function obtenerDatosJSON() {

    const url = 'data/empleado.json'

    fetch(url)
        .then(result => {
            return result.json()
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
}


const cargarArrayJsonBtn = document.querySelector('#cargarJSONArray')

cargarArrayJsonBtn.addEventListener('click', obtenerDatosArrayJSON)

function obtenerDatosArrayJSON() {

    const url = 'data/empleados.json'

    fetch(url)
        .then(result => {
            return result.json()
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
}



const cargarAPIBtn = document.querySelector('#cargarAPI')

cargarAPIBtn.addEventListener('click', cargarApi)

function cargarApi() {

    const url = 'https://picsum.photos/list'

    fetch(url)
        .then(result => {
            return result.json()
        })
        .then(result => {
            mostrarDatos(result)
        })
        .catch(error => {
            console.log(error)
        })
}


function mostrarDatos(result) {

    const contenido = document.querySelector('.contenido')
    let html = ''

    result.forEach(element => {
        const { author, post_url } = element
        html += `
            <p>${author}</p>
            <a href="${post_url}">Ver Imagen</a>
        `

        

    });
    contenido.innerHTML = html

}
