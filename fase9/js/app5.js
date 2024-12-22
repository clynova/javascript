const reproductor = {

    cancion: '',
    reproducirPlayList: (nombre) => {
        console.log(`Reproduciendo playlist ${nombre}`)
    },


    set nuevaCancion(cancion) {
        this.cancion = cancion
        console.log(`Agregando ${cancion}`)
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }

}




reproductor.reproducirPlayList('Mi musica favorita')
reproductor.nuevaCancion = 'Mi pollito pio pio'
reproductor.obtenerCancion
