const productoLiteral = {
    nombre: "Monitor 20 pulgadas",
    precio: 500,
    disponible: true, 
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}


//productoLiteral.mostrarInfo()


function ProductoConstructor(nombre, precio, disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}


const producto = new ProductoConstructor("Television", 500, false)


//console.log(producto)

console.log(Object.keys( producto ))
console.log(Object.values( producto ))
console.log(Object.entries( producto ))
