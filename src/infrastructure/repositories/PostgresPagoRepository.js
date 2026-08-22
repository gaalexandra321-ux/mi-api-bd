const Pago = require('../../domain/entities/Pago');

class PostgresPagoRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM pagos';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Pago(row));
    }
}
module.exports = PostgresPagoRepository;