class IPatientRepository {
    async getAll() {
        throw new Error('Método getAll() no implementado');
    }
    async create(patientData) {
        throw new Error('Método create() no implementado');
    }
}

module.exports = IPatientRepository;