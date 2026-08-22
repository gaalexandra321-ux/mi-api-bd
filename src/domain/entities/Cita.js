class Cita {
    constructor({ id, paciente_id, doctor_id, fecha, hora, motivo, estado }) {
        this.id = id;
        this.paciente_id = paciente_id;
        this.doctor_id = doctor_id;
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
        this.estado = estado;
    }
}
module.exports = Cita;