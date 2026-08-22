class CreateInsumoUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    async execute(insumoData) {
        return await this.repository.create(insumoData);
    }
}

module.exports = CreateInsumoUseCase;