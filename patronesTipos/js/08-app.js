function Vendedor(nombre) {
    this.nombre = nombre
    this.sala = null
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos con un precio de  ${precio}`)
    },
    vendido: comprador => {
        console.log(`Vendido a  ${comprador}`)
    }

}

function Comprador(nombre) {
    this.nombre = nombre
    this.sala = null
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(` ${comprador.nombre} : ${cantidad}`)
    },
    vendido: comprador => {
        console.log(`Vendido a  ${comprador}`)
    }

}

function Subasta() {
    let compradores = {}

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario
            usuario.sala = this
        }
    }

}


const pepe = new Comprador("Pepe")
const tao = new Comprador("Tao")
const vendedor = new Vendedor("Vendedor de Autos")
const subasta = new Subasta()


subasta.registrar(pepe)
subasta.registrar(tao)
subasta.registrar(vendedor)


vendedor.oferta("Planca55", 500)

pepe.oferta(350, pepe)
tao.oferta(450, tao)
pepe.oferta(550, pepe)

vendedor.vendido("Tutancamon")


