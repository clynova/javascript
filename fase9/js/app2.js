iniciarApp();

function iniciarApp() {
    console.log('Iniciando app..');

    segundaFunction();
}

function segundaFunction() {
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pepe');
}

function usuarioAutenticado(usuario) {
    console.log('autenticando usuario... espera...');
    console.log(`Usuario autenticando correctamente ${usuario}`);
}