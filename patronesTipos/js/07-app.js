const restauranteApp = {}


restauranteApp.platillos = [
    {
        platillo: "Pizza",
        precio: 25
    },
    {
        platillo: "Hambugr",
        precio: 20
    },
    {
        platillo: "Hot",
        precio: 25
    }
]

restauranteApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log("Bienvenidos a nuestro menu")

        platillos.forEach((platillo, index) => {
            console.log(` ${index} : ${platillo.platillo} ${platillo.precio}`)
        });
    },

    ordenar: id => {
        console.log(`Tu platillo: ${restauranteApp.platillos[id].platillo} se esta preparando`)
    }

}





const { platillos } = restauranteApp

restauranteApp.funciones.mostrarMenu(platillos)
restauranteApp.funciones.ordenar(1)