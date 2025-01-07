export class Cita {
    constructor(mascota, propietario, fecha, hora) {
        this.mascota = mascota; // Objeto de tipo Mascota
        this.propietario = propietario; // Objeto de tipo Persona
        this.fecha = fecha;
        this.hora = hora;
        this.idCita = Date.now();
    }
}