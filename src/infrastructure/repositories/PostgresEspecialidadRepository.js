const Especialidad = require('../../domain/entities/Especialidad');

class PostgresEspecialidadRepository {
    constructor(dbPool) {
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM especialidades';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Especialidad(row));
    }

    async create(data) {
        const { nombre } = data;
        const query = 'INSERT INTO especialidades (nombre) VALUES ($1) RETURNING *';
        const result = await this.dbPool.query(query, [nombre]);
        return new Especialidad(result.rows[0]);
    }
}

module.exports = PostgresEspecialidadRepository;