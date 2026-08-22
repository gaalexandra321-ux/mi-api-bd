const Tratamiento = require('../../domain/entities/Tratamiento');

class PostgresTratamientoRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM tratamientos';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Tratamiento(row));
    }
}

module.exports = PostgresTratamientoRepository;