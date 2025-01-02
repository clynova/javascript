
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}


function formatearEmpresa(empresa) {
    const { nombre, saldo, categoria } = empresa;
    return `La empresa ${nombre} tiene un saldo de ${saldo} se encarga de ${categoria}`;
}


const CCJ = new Empresa('Loxus', 50000, 'Cursos de pablito');


console.log(formatearEmpresa(CCJ));


function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'gold';
    } else {
        tipo = 'nomalito';
    }

    return tipo;
};



const juan = new Cliente('Juan', 500);


console.log(juan.tipoCliente());


function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const pedro = new Cliente('Juan', 500, '5283423');
console.log(pedro);
console.log(pedro.tipoCliente());