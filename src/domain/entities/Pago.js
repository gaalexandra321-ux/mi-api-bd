class Pago {
    constructor({ id, cita_id, paciente_id, monto, fecha_pago, metodo_pago }) {
        this.id = id;
        this.cita_id = cita_id;
        this.paciente_id = paciente_id;
        this.monto = monto;
        this.fecha_pago = fecha_pago;
        this.metodo_pago = metodo_pago;
    }
}
module.exports = Pago;