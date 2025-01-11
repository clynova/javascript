const notificacion = document.querySelector('#notificar')

notificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(result => console.log(`el resultado es: `, result))
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notifiacion = new Notification('Esta es la notifiacion', {
            icon: 'img/ccj.png',
            body: 'Awante el albo campeon'
        })

        notifiacion.onclick = function () {
            window.open('https://www.google.cl')
        }
    }
})


window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if (NavigationPreloadManager.onLine) {
        console.log('estas conectado')
    } else {
        console.log('internet desconectado')
    }
}

const abrirBtn = document.querySelector('#abrir-pantalla-completa')
const cerrarBtn = document.querySelector('#salir-pantalla-completa')

abrirBtn.addEventListener('click', pantallaCompleta)
cerrarBtn.addEventListener('click', cerarPantallaCompleta)

function pantallaCompleta() {
    document.documentElement.requestFullscreen()
}

function cerarPantallaCompleta() {
    document.exitFullscreen()
}




document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState)
})

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        salida.textContent = 'Tu navegador no soporta reconocimiento de voz';
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    };

    recognition.onresult = function (e) {
        const transcript = e.results[0][0].transcript;
        salida.textContent = `Lo que dijiste fue: ${transcript}`;
        console.log(e.results);
    };
}
