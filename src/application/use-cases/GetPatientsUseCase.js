class GetPatientsUseCase {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async execute() {
        return await this.patientRepository.getAll();
    }
}

module.exports = GetPatientsUseCase;