import { Cliente } from './cliente.js'

export class Empresa extends Cliente {
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro)
        this.categoria = categoria
    }

}