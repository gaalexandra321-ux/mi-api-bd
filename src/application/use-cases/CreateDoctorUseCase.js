class CreateDoctorUseCase {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }
    async execute(doctorData) {
        if (!doctorData.code || !doctorData.name) {
            throw new Error('El código y el nombre del doctor son obligatorios.');
        }
        return await this.doctorRepository.create(doctorData);
    }
}
module.exports = CreateDoctorUseCase;