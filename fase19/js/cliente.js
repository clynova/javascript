export const nombreCliente = 'Pepito'
export const ahorro = 20

export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} tiene un ahorro de: ${ahorro}`
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} tiene un ahorro de: ${this.ahorro}`
    }
}