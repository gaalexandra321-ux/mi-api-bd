const Cita = require('../../domain/entities/Cita');

class PostgresCitaRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM citas';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Cita(row));
    }
}
module.exports = PostgresCitaRepository;