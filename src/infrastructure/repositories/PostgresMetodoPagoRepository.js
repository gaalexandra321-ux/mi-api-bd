const MetodoPago = require('../../domain/entities/MetodoPago');

class PostgresMetodoPagoRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM metodos_pago';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new MetodoPago(row));
    }
}
module.exports = PostgresMetodoPagoRepository;