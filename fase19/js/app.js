import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js'
import { Empresa } from './empresa.js'



const cliente = new Cliente(nombreCliente, ahorro)



console.log(mostrarInformacion(nombreCliente, ahorro))

console.log(cliente.mostrarInformacion())


const empresa = new Empresa('Santiago', 500, 'Clases en linea')

console.log(empresa)