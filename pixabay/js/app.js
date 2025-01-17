const formulario = document.querySelector('#formulario')
const resultado = document.querySelector('#resultado')
let dataGlobal;
let paginaActual = 1; // Página inicial
const resultadosPorPagina = 12; // Resultados por página
let totalPaginas;

window.addEventListener('load', () => {
    eventListeners()
})


function eventListeners() {
    formulario.addEventListener('submit', buscarImagenes)
}

function buscarImagenes(e) {
    e.preventDefault()
    const textoBusqueda = document.querySelector('#termino').value.trim()

    if (!textoBusqueda) {
        console.log(`Faltan parametros para la busqueda`)
        return
    }

    conectarBuscadorImagenesAPI(textoBusqueda)
}


async function conectarBuscadorImagenesAPI(textoBusqueda) {
    const API_KEY = `48233745-5e2b4cb93faa08bd2e4b79a23`
    const URL_BUSQUEDA = `https://pixabay.com/api/?key=${API_KEY}&q=${textoBusqueda}&image_type=photo&per_page=100`
    try {
        const responde = await fetch(URL_BUSQUEDA)
        const responseJson = await responde.json()
        dataGlobal = responseJson
        mostrarImagenes(responseJson)
    } catch (err) {
        console.log(err)
    }
}

function mostrarImagenes(data) {
    console.log(data.hits);
    resultado.innerHTML = '';

    totalPaginas = Math.ceil(data.hits.length / resultadosPorPagina);

    const inicio = (paginaActual - 1) * resultadosPorPagina;
    const fin = inicio + resultadosPorPagina;
    const imagenesPaginadas = data.hits.slice(inicio, fin);

    imagenesPaginadas.forEach(imagen => {
        const div = document.createElement('div');
        div.classList.add('w-full', 'sm:w-1/2', 'md:w-1/4', 'p-4'); // Clases para diseño responsive en Tailwind

        div.innerHTML = `
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="${imagen.webformatURL}" class="w-full h-48 object-cover" alt="${imagen.id}">
                <div class="p-4">
                    <p class="text-gray-700 font-medium mb-2">Vistas: <strong>${imagen.views}</strong></p>
                    <p class="text-gray-700 font-medium mb-4">Me gusta: <strong>${imagen.likes}</strong></p>
                    <a href="#" class="block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600 transition" data-id="${imagen.id}">Ver Imagen</a>
                </div>
            </div>
        `;

        resultado.appendChild(div);
    });

    crearPaginador();
}


// Función para crear el paginador
function crearPaginador() {
    const paginador = document.querySelector('#paginador');
    paginador.innerHTML = ''; // Limpiar el paginador

    // Botón "Anterior"
    if (paginaActual > 1) {
        const btnAnterior = document.createElement('button');
        btnAnterior.textContent = 'Anterior';
        btnAnterior.classList.add('px-4', 'py-2', 'bg-gray-200', 'hover:bg-gray-300', 'rounded', 'mr-2');
        btnAnterior.onclick = () => {
            paginaActual--;
            mostrarImagenes(dataGlobal); // Usamos una variable global para los datos
        };
        paginador.appendChild(btnAnterior);
    }

    // Botones de número de página
    for (let i = 1; i <= totalPaginas; i++) {
        const btnPagina = document.createElement('button');
        btnPagina.textContent = i;
        btnPagina.classList.add('px-4', 'py-2', 'rounded', 'mr-2');

        // Agregar clases condicionales
        if (paginaActual === i) {
            btnPagina.classList.add('bg-blue-500', 'text-white'); // Página activa
        } else {
            btnPagina.classList.add('bg-gray-200', 'hover:bg-gray-300'); // Otras páginas
        }

        btnPagina.onclick = () => {
            paginaActual = i;
            mostrarImagenes(dataGlobal);
        };
        paginador.appendChild(btnPagina);
    }


    // Botón "Siguiente"
    if (paginaActual < totalPaginas) {
        const btnSiguiente = document.createElement('button');
        btnSiguiente.textContent = 'Siguiente';
        btnSiguiente.classList.add('px-4', 'py-2', 'bg-gray-200', 'hover:bg-gray-300', 'rounded');
        btnSiguiente.onclick = () => {
            paginaActual++;
            mostrarImagenes(dataGlobal);
        };
        paginador.appendChild(btnSiguiente);
    }
}