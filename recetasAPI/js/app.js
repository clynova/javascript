const navbarNavDropdown = document.querySelector('#navbarNavDropdown')
const categorias = document.querySelector('#categorias')
const resultado = document.querySelector('#resultado')
const toast = document.querySelector('#toast')
const modalContainer = document.querySelector('#modal')
let recetaAbierta = JSON.parse(localStorage.getItem('recetasFavoritas')) || []
let nuevaReceta;

window.addEventListener('load', () => {
    eventListeners()
})

function eventListeners() {
    if (comprobarPathFavoritos()) {
        cargarFavoritos();
    } else {
        conectarCategoriasAPI()
        categorias.addEventListener('change', conectarRecetasAPI)
        modalContainer.addEventListener('click', guardarFavoritos)
    }
    resultado.addEventListener('click', conectarDetallesRecetasAPI)


}

function conectarCategoriasAPI() {
    const API_CATEGORIAS = `https://www.themealdb.com/api/json/v1/1/categories.php`

    fetch(API_CATEGORIAS)
        .then(result => {
            if (!result.ok) {
                throw new Error('No se encontraron categorias.');
            }
            return result.json()
        })
        .then(result => cargarCategorias(result.categories))
        .catch(result => console.error(result))
}

function cargarCategorias(data) {
    data.forEach(categoria => {
        const option = document.createElement('option')
        option.value = categoria.strCategory
        option.textContent = categoria.strCategory
        categorias.appendChild(option)
    });
}

function conectarRecetasAPI(e) {
    const nameCategory = e.target.value
    const API_FILTRO_RECETAS = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCategory}`

    fetch(API_FILTRO_RECETAS)
        .then(result => {
            if (!result.ok) {
                throw new Error('No se encontró resultados para esa categoria.');
            }
            return result.json()
        })
        .then(result => cargarRecetasPorCategoria(result.meals))
        .catch(result => console.error(result))
}


function cargarRecetasPorCategoria(data) {
    resultado.innerHTML = ''

    data.forEach(receta => {
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'mb-4'); // Clases de Bootstrap para formato responsive

        div.innerHTML = `
            <div class="card">
                <img src="${receta.strMealThumb}" class="card-img-top" alt="${receta.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${receta.strMeal}</h5>
                    <p class="card-text">¡Una receta deliciosa para probar!</p>
                    <a href="#" class="btn btn-primary" data-id="${receta.idMeal}" >Ver receta</a>
                </div>
            </div>
        `;

        resultado.appendChild(div);
    });
}

function conectarDetallesRecetasAPI(e) {
    e.preventDefault()
    // Verifica si el elemento clicado tiene el atributo 'data-id'
    const idReceta = e.target.getAttribute('data-id');
    if (!idReceta) {
        return; // Si no tiene el atributo, no hacemos nada
    }
    const API_FILTRO_DETALLES_RECETAS = `https://themealdb.com/api/json/v1/1/lookup.php?i=${idReceta}`

    fetch(API_FILTRO_DETALLES_RECETAS)
        .then(result => {
            if (!result.ok) {
                throw new Error('No se encontró resultados para esa receta.');
            }
            return result.json()
        })
        .then(result => cargarDetallesReceta(result.meals[0]))
        .catch(result => console.error(result))
}

function cargarDetallesReceta(receta) {


    const modalTitulo = document.querySelector('#staticBackdropLabel');
    modalTitulo.textContent = receta.strMeal;

    nuevaReceta = receta;

    const insertarHTML = !comprobarPathFavoritos() ?
        `<button type="button" class="btn btn-secondary favorito">Agregar a Favoritos</button>`
        : ` <a href="${receta.strYoutube}" target="_blank" class="btn btn-danger">Ver en YouTube</a>`

    // Contenido del modal
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-12 mb-3">
                <img src="${receta.strMealThumb}" alt="${receta.strMeal}" class="img-fluid rounded">
            </div>
            <div class="col-12">
                <h5 class="mb-3"><strong>Categoría:</strong> ${receta.strCategory}</h5>
                <h5 class="mb-3"><strong>Región:</strong> ${receta.strArea}</h5>
                <p class="mb-3"><strong>Instrucciones:</strong> ${receta.strInstructions}</p>
                <h6><strong>Ingredientes:</strong></h6>
                <ul>
                    ${obtenerIngredientes(receta)}
                </ul>
            </div>
        </div>
    `;

    const modalFooter = document.querySelector('.modal-footer');
    modalFooter.innerHTML = `
        ${insertarHTML}
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
    `;

    const modal = new bootstrap.Modal(document.querySelector('#modal'));
    modal.show();
    console.log(recetaAbierta)
}

function obtenerIngredientes(receta) {
    let ingredientes = '';
    for (let i = 1; i <= 20; i++) {
        const ingrediente = receta[`strIngredient${i}`];
        const medida = receta[`strMeasure${i}`];
        if (ingrediente && ingrediente.trim() !== '') {
            ingredientes += `<li>${ingrediente} - ${medida || ''}</li>`;
        }
    }
    return ingredientes;
}

function guardarFavoritos(e) {
    e.preventDefault()
    const modal = bootstrap.Modal.getInstance(document.querySelector('#modal'));
    if (modal) {
        modal.hide();
    }
    if (e.target.classList.contains('favorito')) {
        if (!recetaAbierta.some(receta => receta.idMeal === nuevaReceta.idMeal)) {
            recetaAbierta.push(nuevaReceta);
            imprimirAlerta('Receta agregada a favoritos.', 'success');
            localStorage.setItem('recetasFavoritas', JSON.stringify(recetaAbierta));
        } else {
            imprimirAlerta('Esta receta ya está en tus favoritos.', 'error');
        }
    }


}

function cargarFavoritos() {
    const recetasFavoritas = JSON.parse(localStorage.getItem('recetasFavoritas'))
    resultado.innerHTML = ''

    if (!recetasFavoritas || recetasFavoritas.length === 0) {
        resultado.innerHTML = `<p class="text-center">No tienes recetas guardadas.</p>`;
        return;
    }

    recetasFavoritas.forEach(receta => {
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'mb-4'); // Clases de Bootstrap para formato responsive

        div.innerHTML = `
            <div class="card">
                <img src="${receta.strMealThumb}" class="card-img-top" alt="${receta.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${receta.strMeal}</h5>
                    <p class="card-text">¡Una receta deliciosa para probar!</p>
                    <a href="#" class="btn btn-primary" data-id="${receta.idMeal}" >Ver receta</a>
                </div>
            </div>
        `;

        resultado.appendChild(div);
    });
}

function imprimirAlerta(mensaje, tipo) {
    // Verifica si ya hay una alerta activa para evitar duplicados
    const alertaExistente = document.querySelector('.alerta');
    if (alertaExistente) {
        return;
    }

    // Crear el contenedor de la alerta
    const divAlerta = document.createElement('div');
    divAlerta.classList.add(
        'alerta',
        'alert',
        'alert-dismissible',
        'fade',
        'show',
        'text-center',
        'position-fixed',
        'top-0',
        'start-50',
        'translate-middle-x',
        'mt-3',
        'shadow-lg'
    );
    divAlerta.textContent = mensaje;

    // Agregar una clase para el tipo (success o danger)
    if (tipo === 'success') {
        divAlerta.classList.add('alert-success'); // Verde para éxito
    } else if (tipo === 'error') {
        divAlerta.classList.add('alert-danger'); // Rojo para error
    }

    // Botón para cerrar la alerta manualmente
    const botonCerrar = document.createElement('button');
    botonCerrar.type = 'button';
    botonCerrar.classList.add('btn-close');
    botonCerrar.setAttribute('data-bs-dismiss', 'alert');
    botonCerrar.setAttribute('aria-label', 'Close');
    divAlerta.appendChild(botonCerrar);

    // Insertar la alerta en el DOM (justo debajo del body)
    const body = document.querySelector('body');
    body.appendChild(divAlerta);

    // Eliminar la alerta automáticamente después de 3 segundos
    setTimeout(() => {
        divAlerta.remove();
    }, 3000);
}

const comprobarPathFavoritos = () => window.location.pathname.endsWith('favoritos.html');
