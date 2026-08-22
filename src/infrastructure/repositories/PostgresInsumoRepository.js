const Insumo = require('../../domain/entities/Insumo');

class PostgresInsumoRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM insumos';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Insumo(row));
    }
}
module.exports = PostgresInsumoRepository;