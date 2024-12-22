export class Player {
    #nombre;
    #clase;
    #vida;
    #ataque;
    #nivel;
    #velocidad;

    constructor({ nombre, clase, vida, ataque, nivel, velocidad }) {
        this.#nombre = nombre;
        this.#clase = clase;
        this.#vida = vida;
        this.#ataque = ataque;
        this.#nivel = nivel;
        this.#velocidad = velocidad;
    }

    // Getter y Setter para nombre
    get nombre() {
        return this.#nombre;
    }

    set nombre(valor) {
        if (!valor) throw new Error("El nombre no puede estar vacío.");
        this.#nombre = valor;
    }

    // Getter y Setter para clase
    get clase() {
        return this.#clase;
    }

    set clase(valor) {
        if (!valor) throw new Error("La clase no puede estar vacía.");
        this.#clase = valor;
    }

    // Getter y Setter para vida
    get vida() {
        return this.#vida;
    }

    set vida(valor) {
        if (valor < 0) this.#vida = 0;
        this.#vida = valor;
    }

    // Getter y Setter para ataque
    get ataque() {
        return this.#ataque;
    }

    set ataque(valor) {
        if (valor < 0) throw new Error("El ataque no puede ser negativo.");
        this.#ataque = valor;
    }

    // Getter y Setter para nivel
    get nivel() {
        return this.#nivel;
    }

    set nivel(valor) {
        if (valor < 1) throw new Error("El nivel debe ser al menos 1.");
        this.#nivel = valor;
    }

    // Getter y Setter para velocidad
    get velocidad() {
        return this.#velocidad;
    }

    set velocidad(valor) {
        if (valor < 1) throw new Error("La velocidad debe ser al menos 1.");
        this.#velocidad = valor;
    }

    // Método para comprobar si el jugador está vivo
    estaVivo() {
        return this.#vida > 0;
    }
}