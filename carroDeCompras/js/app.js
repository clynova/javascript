const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');

let articulosCarrito = cargarDatosLocalStore();

carritoHTML();
cargarEventListtener();

function cargarEventListtener() {
    listaCursos.addEventListener('click', agregarCurso);
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];
        localStorage.removeItem('articulosCarrito');
        limpiarHTML();
    });
    // Delegación de eventos para eliminar cursos
    contenedorCarrito.addEventListener('click', eliminarCurso);
}

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso) {
    console.log(curso);
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.info-card .precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };


    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        articulosCarrito = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }
    localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
    carritoHTML();
}

function carritoHTML() {
    limpiarHTML();
    articulosCarrito.forEach(articulo => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src=${articulo.imagen} >  </td>
        <td> ${articulo.titulo} </td>
        <td> ${articulo.precio} </td>
        <td> ${articulo.cantidad} </td>
        <td> 
            <button class="borrar-curso" data-id="${articulo.id}">X</button> 
        </td>
        `;
        contenedorCarrito.appendChild(row);
    });
}

function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
        carritoHTML();
    }
}

function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function cargarDatosLocalStore() {
    return JSON.parse(localStorage.getItem('articulosCarrito')) || [];
}