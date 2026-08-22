class CreatePatientUseCase {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async execute(patientData) {
        // Aquí puedes agregar validaciones de la clínica (ej: si el nombre es vacío)
        if (!patientData.code || !patientData.name) {
            throw new Error('El código y el nombre son obligatorios.');
        }
        return await this.patientRepository.create(patientData);
    }
}

module.exports = CreatePatientUseCase;