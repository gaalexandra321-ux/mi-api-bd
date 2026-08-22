class GetMetodosPagoUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        return await this.repository.getAll();
    }
}
module.exports = GetMetodosPagoUseCase;