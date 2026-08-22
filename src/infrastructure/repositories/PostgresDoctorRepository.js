const IDoctorRepository = require('../../domain/repositories/IDoctorRepository');
const Doctor = require('../../domain/entities/Doctor');

class PostgresDoctorRepository extends IDoctorRepository {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }
    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM doctores');
        return result.rows.map(row => new Doctor(row));
    }
    async create(doctorData) {
        const { code, name, specialty } = doctorData;
        const query = 'INSERT INTO doctores (code, name, specialty) VALUES ($1, $2, $3) RETURNING *';
        const result = await this.dbPool.query(query, [code, name, specialty]);
        return new Doctor(result.rows[0]);
    }
}
module.exports = PostgresDoctorRepository;