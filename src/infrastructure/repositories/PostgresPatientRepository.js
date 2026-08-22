const IPatientRepository = require('../../domain/repositories/IPatientRepository');
const Patient = require('../../domain/entities/Patient');

class PostgresPatientRepository extends IPatientRepository {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const query = 'SELECT * FROM pacientes';
        const result = await this.dbPool.query(query);
        return result.rows.map(row => new Patient(row));
    }

    async create(patientData) {
        const { code, name, email } = patientData;
        const query = 'INSERT INTO pacientes (code, name, email) VALUES ($1, $2, $3) RETURNING *';
        const values = [code, name, email];
        const result = await this.dbPool.query(query, values);
        return new Patient(result.rows[0]);
    }
}

module.exports = PostgresPatientRepository;