
/*import { Player } from './player.js';
import { Characters } from './characters.js';

export class Game {
    #player1;
    #player2;
    #registro = [];

    constructor(player1 = null, player2 = null, personajes = Characters) {
        if (player1 instanceof Player) {
            this.#player1 = player1;
        } else {
            this.#player1 = this.#seleccionarPersonajeAleatorio(personajes);
        }

        if (player2 instanceof Player) {
            this.#player2 = player2;
        } else {
            this.#player2 = this.#seleccionarPersonajeAleatorio(personajes);
        }

        this.#registro = [];

    }

    getPlayer1() {
        return this.#player1;
    }

    getPlayer2() {
        return this.#player2;
    }

    getRegistro() {
        return [...this.#registro];
    }



    agregarRegistro(mensaje) {
        this.#registro.push(mensaje);
    }

    iniciarEncuentro = () => {
        if (!this.#comprobarVidaJugadores()) {
            return `La batalla no puede continuar`
        }
        const [primerAtacante, segundoAtacante] = this.#determinarQuienAtacaPrimero()
        while (this.#comprobarVidaJugadores()) {
            this.#ejecutarTurno(primerAtacante, segundoAtacante);

            if (!segundoAtacante.estaVivo()) {
                this.agregarRegistro(`¡Batalla finalizada! El ganador es ${primerAtacante.nombre}`);
                break;
            }

            this.#ejecutarTurno(segundoAtacante, primerAtacante);

            if (!primerAtacante.estaVivo()) {
                this.agregarRegistro(`¡Batalla finalizada! El ganador es ${segundoAtacante.nombre}`);
                break;
            }
        }
        this.mostrarRegistro()
    }

    #comprobarVidaJugadores() {
        return this.#player1.estaVivo() && this.#player2.estaVivo();
    }

    #determinarQuienAtacaPrimero = () => {
        if (this.#player1.velocidad > this.#player2.velocidad) {
            return [this.#player1, this.#player2];
        } else if (this.#player1.velocidad < this.#player2.velocidad) {
            return [this.#player2, this.#player1];
        } else {
            return Math.random() < 0.5 ? [this.player1, this.player2] : [this.player2, this.player1]
        }
    }

    #ejecutarTurno(atacante, defensor) {
        this.agregarRegistro(`${atacante.nombre} atacó a ${defensor.nombre} causando ${atacante.ataque} de daño.`);
        defensor.vida -= atacante.ataque;
        defensor.vida = Math.max(0, defensor.vida);
        this.agregarRegistro(`${defensor.nombre} tiene ahora ${defensor.vida} puntos de vida restantes.`);
        this.agregarRegistro("*****************************************".repeat(2));
    }

    #seleccionarPersonajeAleatorio(personajes) {
        const indiceAleatorio = Math.floor(Math.random() * personajes.length);
        return new Player(personajes[indiceAleatorio]);
    }

    mostrarRegistro() {
        this.#registro.forEach(evento => console.log(evento));
    }


}


/*
// Crear jugadores
const player1 = new Player({ nombre: 'Perucamon', clase: 'Paladin', vida: 10, ataque: 1, nivel: 1, velocidad: 1 });

// El segundo jugador será aleatorio
const game = new Game(player1);

// Iniciar combate
game.iniciarEncuentro();

*/