const enviarMensaje = (titulo, mensaje, adjunto) => {

    const mensajeParseado = {
        titulo: titulo,
        mensaje: mensaje,
        adjunto: adjunto
    };

    const validacionMensaje = validarMensaje(mensajeParseado);

    if (!validacionMensaje) {
        return { estadoEnvio :'Error envio', codigoEnvio: 500, mensaje: mensajeParseado};
    }

    console.log('Enviando mensaje....');
    return { estadoEnvio :'Envio exitoso', codigoEnvio: 200, mensaje: mensajeParseado};

};

const validarMensaje = () => {
    return true;
};

const { estadoEnvio, codigoEnvio} = enviarMensaje('Para papa', 'Espero que te encuentres bien, saludos', 'Sin adjunto');

console.log(estadoEnvio, codigoEnvio);