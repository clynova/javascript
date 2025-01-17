export function validar(data) {
    return !Object.values(data).every(input => input !== '')
}

export function mostrarMensaje(mensaje, tipo) {
    const alerta = document.createElement('div');

    // Estilo base para la alerta
    alerta.classList.add('p-4', 'rounded', 'text-center', 'mb-4', 'font-medium', 'mt-2');

    // Estilo específico según el tipo
    if (tipo === 'error') {
        alerta.classList.add('bg-red-500', 'text-white'); // Fondo rojo con texto blanco
    }
    if (tipo === 'success') {
        alerta.classList.add('bg-green-500', 'text-white'); // Fondo verde con texto blanco
    }

    alerta.textContent = mensaje;

    const contenedor = formulario || listadoClientes;
    contenedor.appendChild(alerta);
    

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}