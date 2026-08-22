class UpdateInsumoUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id, insumoData) {
        return await this.repository.update(id, insumoData);
    }
}
module.exports = UpdateInsumoUseCase;