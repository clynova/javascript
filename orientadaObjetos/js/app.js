class Cliente {

    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre} tiene un saldo de ${this.saldo}`;
    }

    static bienvenido() {
        return 'bienvenido al cajero';
    }

    obtenerNombre() {
        return this.#nombre;
    }

}

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenido() {
        return 'bienvenido al cajero de empresas';
    }
}

// Instancia de Cliente
const juan = new Cliente('Pepe', 500);
console.log(juan.mostrarInformacion());

// Instancia de Empresa
const empresa = new Empresa('Código con Juan', 500, 535345, 'manual');
console.log(empresa.mostrarInformacion());