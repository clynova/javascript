class Persona {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }

}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona ${this.nombre} Email: ${this.email}`)
    },
    mostrarNombre() {
       console.log(`Nombre Persona ${this.nombre}`) 
    }
}

// Agrega funciones a clase persona

Object.assign(Persona.prototype, funcionesPersona)


const persona = new Persona("Pepe", "pepe@gmail.com")

persona.mostrarInformacion()
persona.mostrarNombre()