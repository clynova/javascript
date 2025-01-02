//console.log(elemento) 

const classPlayers = document.getElementsByClassName('players');

console.log(classPlayers);

const classHealth = document.getElementsByClassName('health');

console.log(classHealth);

const formulario = document.getElementById('formulario');

console.log(formulario);

const formularioQuery = document.querySelector('.formulario .form');
console.log(formularioQuery);

const formEmail = document.getElementById('email');
console.log(formEmail);

const emailQuery = document.querySelector('.formulario .email');
console.log(emailQuery);

formEmail.value = 'asdas';

const nombreView = document.querySelector('.player:nth-child(2) .name span');
nombreView.textContent = 'Hey';
console.log(nombreView);




// Selecciona el elemento <h1> que está dentro del contenedor con clase "game-container"
const tituloDelJuego = document.querySelector('.game-container h1');

// Modifica el contenido del <h1> utilizando `textContent`
// `textContent` reemplaza TODO el texto del elemento con el texto especificado, sin interpretar HTML
tituloDelJuego.textContent = 'Titulo del videojuego textContent';
// Resultado en el navegador: El texto dentro del <h1> será "Titulo del videojuego textContent"
// Ejemplo:
// <h1>Titulo del videojuego textContent</h1>
// Las etiquetas HTML que pudieran estar en el texto no se interpretan ni se renderizan como HTML.
// Modifica el contenido del <h1> utilizando `innerHTML`
// `innerHTML` reemplaza TODO el contenido del elemento con el texto especificado y lo interpreta como HTML

// Resultado en el navegador: El contenido del <h1> será procesado como HTML
// Ejemplo:
// <h1>Titulo del <strong>videojuego</strong> innerHTML</h1>
// El navegador mostrará: "Titulo del videojuego innerHTML", con "videojuego" en negrita.
// Modifica el contenido del <h1> utilizando `innerText`
// `innerText` reemplaza TODO el texto visible del elemento con el texto especificado, respetando estilos CSS
tituloDelJuego.innerText = 'Titulo del videojuego innerText';
// Resultado en el navegador: El texto visible del <h1> será reemplazado por "Titulo del videojuego innerText"
// Ejemplo:
// <h1>Titulo del videojuego innerText</h1>
// Este texto es sensible a estilos CSS como `display: none` o `visibility: hidden`, por lo que solo afecta el texto visible.
tituloDelJuego.innerHTML = 'Titulo del <strong>videojuego</strong> innerHTML';

console.log(tituloDelJuego);

const logo = document.querySelector('.image-logo');
logo.src = './img/logo1.png';
logo.classList.add = 'new-class';
console.log(logo.classList);


const navegacion =  document.querySelector('.navbar-links');
//console.log(navegacion.children)

const playersQueryAll = document.querySelector('.players');

playersQueryAll.children[0].children[1].children[0].textContent = 'saludes';


console.log(playersQueryAll.parentNode);

const playerQuery = document.querySelector('.player');
console.log(playerQuery.nextElementSibling);

const enlace = document.createElement('A');
enlace.textContent = 'Nuevo enlace';
enlace.href = './index.html';
enlace.target = '_blank';
console.log(enlace);

navegacion.appendChild(enlace);