document.addEventListener('DOMContentLoaded', function () {

    const inputs = {
        email: document.querySelector('#email'),
        asunto: document.querySelector('#asunto'),
        mensaje: document.querySelector('#mensaje'),
    };

    // Contenedores para los mensajes de error
    const errores = {
        email: document.querySelector('#error-email'),
        asunto: document.querySelector('#error-asunto'),
        mensaje: document.querySelector('#error-mensaje'),
    };

    // Validadores para cada campo
    const validadores = {
        email: validarEmail,
        asunto: validarAsunto,
        mensaje: validarMensaje,
    };

    const formularioValido = {
        email: false,
        asunto: false,
        mensaje: false
    };

    // Asignar un único evento de validación a cada input
    Object.entries(inputs).forEach(([key, input]) => {
        input.addEventListener('input', () => {
            validarCampo(input, validadores[key], errores[key], key, formularioValido); // Valida el contenido del campo
            console.log(formularioValido);
        });
    });

    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const formulario = document.querySelector('#formulario');

    btnReset.addEventListener('click', (e) => {
        e.preventDefault();
        formularioValido.email = false;
        formularioValido.asunto = false;
        formularioValido.mensaje = false;
        actviarButtonFormulario(formularioValido);        
        formulario.reset();
    });

    //console.log(formularioValido)
});

// Función para manejar todas las validaciones
function validarCampo(input, validador, errorContenedor, key, formulario) {
    // Limpiar mensaje de error previo
    limpiarError(errorContenedor);
    if (input.value.trim() === '') {
        mostrarAlerta(errorContenedor, 'Este campo es obligatorio.');
        formulario[key] = false;
        actviarButtonFormulario(formulario);
        return;
    } else {
        if (!validador(input.value)) {
            mostrarAlerta(errorContenedor, `${input.id} no es válido.`);
            formulario[key] = false;
            actviarButtonFormulario(formulario);
            return;
        }
    }
    formulario[key] = true;
    actviarButtonFormulario(formulario);
}

function actviarButtonFormulario(formulario) {
    const buttonSubmit = document.querySelector('button');
    if (!Object.values(formulario).includes(false)) {
        buttonSubmit.disabled = true;
        buttonSubmit.classList.remove('opacity-50');
    } else {
        buttonSubmit.disabled = true;
        buttonSubmit.classList.add('opacity-50');
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato
    return regex.test(email);
}

function validarAsunto(asunto) {
    return (asunto.length > 10);
}

function validarMensaje(mensaje) {
    return (mensaje.length > 10);
}

// Función para mostrar el mensaje de error
function mostrarAlerta(errorContenedor, mensaje) {
    const error = document.createElement('DIV');
    error.textContent = mensaje;
    error.style.color = 'red'; // Puedes personalizar el estilo del mensaje
    errorContenedor.appendChild(error);
}

// Limpiar el mensaje de error
function limpiarError(errorContenedor) {
    while (errorContenedor.firstChild) {
        errorContenedor.removeChild(errorContenedor.firstChild);
    }
}