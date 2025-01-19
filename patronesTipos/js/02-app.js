// Class pattern


class Persona2 {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }

}

class Cliente extends Persona2 {
    constructor(nombre, email, empresa) {
        super(nombre, email)
        this.empresa = empresa
    }
}

const cliente = new Cliente("Pepe", "Pepe@gmail.com", "Pepetoz");


console.log(cliente)


