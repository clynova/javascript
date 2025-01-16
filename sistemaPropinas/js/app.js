const platillos = document.querySelector('#platillos')
const resumen = document.querySelector('#resumen')
const formulario = document.querySelector('#formulario')
const guardarCliente = document.querySelector('#guardar-cliente')


let Cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: "Italiana",
    2: "Mexicana",
    3: "Peruana",
    4: "Oriental",
    5: "Ensaladas y Sopas",
    6: "Latinoamericana",
    7: "Postres"
};

window.addEventListener('load', () => {
    eventListeners()
})

function eventListeners() {
    guardarCliente.addEventListener('click', crearOrden)
}

async function crearOrden() {
    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value

    if (!mesa || !hora) {
        console.error(`No se ingresaron todos los datos`)
        mostrarMensaje('Todos los campos obligatorios', 'error')
        return
    }


    Cliente = { ...Cliente, mesa, hora }
    const modalBootstrap = bootstrap.Modal.getInstance(formulario)
    modalBootstrap.hide()
    mostrarSecciones()

    const data = await cargarPlatosApi()
    if (data) {
        mostrarPlatillos(data); // Muestra los platillos si los datos están disponibles
    }


}

function mostrarSecciones() {
    platillos.classList.remove('d-none')
    resumen.classList.remove('d-none')
    mostrarMensaje('Mesa agregada con exito', 'success')


}

function mostrarPlatillos(platillosArray) {
    const contenido = document.querySelector('#platillos .contenido');

    platillosArray.forEach(platillo => {
        // Crear contenedor principal para el platillo
        const row = document.createElement('div');
        row.classList.add('row', 'mb-3', 'border', 'p-2', 'rounded');

        // Crear columna para el nombre y precio
        const colNombre = document.createElement('div');
        colNombre.classList.add('col-md-3');
        colNombre.innerHTML = `
            <p class="mb-0"><strong>${platillo.nombre}</strong></p>
        `;

        const colPrecio = document.createElement('div');
        colPrecio.classList.add('col-md-3');
        colPrecio.innerHTML = `
            <p class="mb-0"> $${platillo.precio}</p>
        `;

        // Crear columna para la categoría
        const colCategoria = document.createElement('div');
        colCategoria.classList.add('col-md-3');
        colCategoria.innerHTML = `
            <p class="mb-0"><strong>${categorias[platillo.Categoria]}</strong></p>
        `;

        // Crear columna para el input de cantidad
        const colInput = document.createElement('div');
        colInput.classList.add('col-md-3');
        const input = document.createElement('input');
        input.type = "number";
        input.classList.add('form-control');
        input.min = 0;
        input.value = 0;
        input.placeholder = "Cantidad";
        input.addEventListener('change', () => {
            agregarCantidadPlatilloAlCarro(platillo, input.value);
        });
        colInput.appendChild(input);

        // Agregar las columnas al contenedor de la fila
        row.appendChild(colNombre);
        row.appendChild(colPrecio);
        row.appendChild(colCategoria);
        row.appendChild(colInput);

        // Agregar la fila al contenedor principal
        contenido.appendChild(row);
    });
}

function agregarCantidadPlatilloAlCarro(pedido, cantidad) {
    const categoria = categorias[pedido.Categoria];  // Obtienes la categoría
    const cantidadProductos = Number.parseInt(cantidad);  // Aseguramos que cantidad es un número

    const productoExistente = Cliente.pedido.find(p => p.id === pedido.id);

    if (productoExistente) {
        // Si ya existe, actualizamos la cantidad creando un nuevo objeto
        const actualizado = {
            ...productoExistente,  // Copiar todos los campos del producto existente
            cantidadProductos     // Actualizamos solo la cantidad
        };

        // Si la cantidad es 0 o menor, removemos el producto del carrito
        if (cantidadProductos <= 0) {
            Cliente.pedido = Cliente.pedido.filter(p => p.id !== pedido.id);  // Eliminar el producto
        } else {
            // Si la cantidad es mayor que 0, actualizamos el carrito con el producto actualizado
            Cliente.pedido = Cliente.pedido.map(p =>
                p.id === pedido.id ? actualizado : p
            );
        }
    } else {
        // Si no existe, agregamos el producto al carrito creando una copia
        const nuevoPedido = {
            ...pedido,  // Mantener todos los datos del platillo
            Categoria: categoria,
            cantidadProductos
        };
        Cliente.pedido.push(nuevoPedido);  // Agregamos el nuevo producto al carrito
    }

    actualizarResumen()
}



async function cargarPlatosApi() {

    const API_URL = `http://localhost:3000/platillos`

    const response = await fetch(API_URL)
        .then(result => {
            if (!result.ok) {
                throw new Error(`Se encontraron datos`)
            }
            return result.json()
        })
        .then(result => {

            result.sort((a, b) => a.Categoria - b.Categoria);
            return result
        })
        .catch(err => console.error(err))

    return response

}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido')
    limpiarHTML()

    const resumen = document.createElement('div')
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow')

    const mesa = document.createElement('p')
    mesa.textContent = 'Mesa: '
    mesa.classList.add('fw-bold')
    
    const mesaSpan = document.createElement('span')
    mesaSpan.textContent = Cliente.mesa
    mesaSpan.classList.add('fw-normal')
    mesa.appendChild(mesaSpan)


    const hora = document.createElement('p')
    hora.textContent = 'Hora: '
    hora.classList.add('fw-bold')
    
    const horaSpan = document.createElement('span')
    horaSpan.textContent = Cliente.hora
    horaSpan.classList.add('fw-normal')
    hora.appendChild(horaSpan)


    const heading = document.createElement('h3')
    heading.textContent = 'Platillos Consumidos'
    heading.classList.add('my-4', 'text-center')

    const grupo = document.createElement('ul')
    grupo.classList.add('list-group')

    const { pedido } = Cliente

    pedido.forEach(articulo => {

        const { nombre, cantidadProductos, precio, id} = articulo

        const total = cantidadProductos * precio
        
        const lista = document.createElement('li')
        lista.classList.add('list-group-item')

        const nombreEl = document.createElement('h4')
        nombreEl.classList.add('my-4')
        nombreEl.textContent = nombre

        const cantidadEl = document.createElement('p')
        cantidadEl.classList.add('fw-bold')
        cantidadEl.textContent = 'Cantidad: '

        const cantidadValor = document.createElement('span')
        cantidadValor.classList.add('fw-normal')
        cantidadValor.textContent = cantidadProductos

        cantidadEl.appendChild(cantidadValor)


        const precioEl = document.createElement('p')
        precioEl.classList.add('fw-bold')
        precioEl.textContent = 'Precio: $'

        const precioValor = document.createElement('span')
        precioValor.classList.add('fw-normal')
        precioValor.textContent = precio

        precioEl.appendChild(precioValor)


        lista.appendChild(nombreEl)
        lista.appendChild(cantidadEl)
        lista.appendChild(precioEl)

        grupo.appendChild(lista)

    })

    console.log(pedido)

    resumen.appendChild(mesa)
    resumen.appendChild(hora)
    resumen.appendChild(heading)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido')
    contenido.innerHTML = ''

    while( contenido.firstChild) {
        contenido.removeChild(contenido.firstChild)
    }
}


function mostrarMensaje(mensaje, tipo) {
    const alerta = document.createElement('div')
    if (tipo === 'error') {
        alerta.classList.add('alert', 'alert-danger', 'invalid-feedback', 'd-block', 'text-center')
        alerta.textContent = mensaje
        formulario.appendChild(alerta)
    }
    if (tipo === 'success') {
        alerta.classList.add('alert', 'alert-success', 'invalid-feedback', 'd-block', 'text-center')
        alerta.textContent = mensaje
        resumen.appendChild(alerta)
    }
    setTimeout(() => {
        alerta.remove()
    }, 3000)
}



