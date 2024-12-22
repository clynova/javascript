import { Player } from './player.js';
import { Characters } from './characters.js';
import { Game } from './game.js'; // Tu clase de lógica del juego


const personajeAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * Characters.length);
    return new Player(Characters[indiceAleatorio]);
}

//console.log(personajeAleatorio())

// Crear jugadores
const player1 = new Player(personajeAleatorio());
const player2 = new Player(personajeAleatorio());

// Referencias al DOM
const player1Name = document.getElementById('player1-name');
const player1Health = document.getElementById('player1-health');
const player1Class = document.getElementById('player1-class');

const player2Name = document.getElementById('player2-name');
const player2Health = document.getElementById('player2-health');
const player2Class = document.getElementById('player2-class');

const battleLog = document.getElementById('battle-log');
const startGameButton = document.getElementById('start-game');
const restartGameButton = document.getElementById('restart-game')


// Inicializar el juego
const game = new Game(player1, player2);

// Función para actualizar los jugadores en la interfaz
function updatePlayersUI(player1, player2) {
    player1Name.textContent = player1.nombre;
    player1Health.textContent = player1.vida;
    player1Class.textContent = player1.clase;

    player2Name.textContent = player2.nombre;
    player2Health.textContent = player2.vida;
    player2Class.textContent = player2.clase;
}

// Mostrar los registros de la batalla
function displayBattleLog() {
    battleLog.innerHTML = '';
    game.getRegistro().forEach(event => {
        const logEntry = document.createElement('p');
        logEntry.textContent = event;
        battleLog.appendChild(logEntry);
    });
}

// Manejar el inicio del juego
startGameButton.addEventListener('click', () => {
    game.iniciarEncuentro();
    updatePlayersUI(player1, player2);
    displayBattleLog();
});

restartGameButton.addEventListener('click', () => {
    console.log('entro')
    const player3 = new Player(personajeAleatorio());
    const player4 = new Player(personajeAleatorio());
    const game = new Game(player3, player4);
    game.iniciarEncuentro();
    updatePlayersUI(player3, player4ls);
    displayBattleLog();
})


// Inicializar UI
updatePlayersUI(player1, player2);
