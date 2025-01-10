const notificacion = document.querySelector('#notificar')

notificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(result => console.log(`el resultado es: `, result))
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notifiacion = new Notification('Esta es la notifiacion', {
            icon: 'img/ccj.png',
            body: 'Awante el albo campeon'
        })

        notifiacion.onclick = function() {
            window.open('https://www.google.cl')
        }
    }
})