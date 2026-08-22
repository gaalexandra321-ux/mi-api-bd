class CreateEspecialidadUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        return await this.repository.create(data);
    }
}
module.exports = CreateEspecialidadUseCase;