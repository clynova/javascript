const navbarNavDropdown = document.querySelector('#navbarNavDropdown')
const categorias = document.querySelector('#categorias')
const resultado = document.querySelector('#resultado')
const toast = document.querySelector('#toast')

//https://www.themealdb.com/api/json/v1/1/categories.php
//https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
//http://themealdb.com/api/json/v1/1/lookup.php?i=52772


window.addEventListener('load', () => {
    conectarCategoriasAPI()
})


function conectarCategoriasAPI() {

    const API_CATEGORIAS = `https://www.themealdb.com/api/json/v1/1/categories.php`

    fetch(API_CATEGORIAS)
        .then(result => {

            if (!result.ok) {
                throw new Error('No se encontró el clima para la ubicación especificada.');
            }

            return result.json()
        })
        .then(result => cargarCategorias(result.categories))
        .catch(result => console.error(result))
}

function cargarCategorias(data) {

    console.log(data)

    data.forEach(categoria => {
        const option = document.createElement('option')
        option.value = categoria.idCategory
        option.textContent = categoria.strCategory
        categorias.appendChild(option)
    });



}