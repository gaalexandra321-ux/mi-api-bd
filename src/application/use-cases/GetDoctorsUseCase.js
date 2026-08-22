class GetDoctorsUseCase {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }
    async execute() {
        return await this.doctorRepository.getAll();
    }
}
module.exports = GetDoctorsUseCase;