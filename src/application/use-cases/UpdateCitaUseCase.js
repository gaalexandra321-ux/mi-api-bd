class UpdateCitaUseCase {
    constructor(repository) { this.repository = repository; }
    async execute(id, data) { return await this.repository.update(id, data); }
}
module.exports = UpdateCitaUseCase;