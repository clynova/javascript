// Singleton

let instancia = null

class Persona {
    constructor(nombre, email) {
        if (!instancia) {
            this.nombre = nombre
            this.email = email
            instancia = this

        } else {
            return instancia
        }
    }
}

const persona = new Persona("Pepe", "pepe@gmail.com")
console.log(persona)


const persona2 = new Persona("Tata", "Tata@gmail.com")
console.log(persona2)