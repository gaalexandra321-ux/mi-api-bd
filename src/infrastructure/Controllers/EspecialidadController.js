class EspecialidadController {
    constructor({ getEspecialidadesUseCase }) {
        this.getEspecialidadesUseCase = getEspecialidadesUseCase;
    }

    async getEspecialidades(req, res) {
        try {
            const especialidades = await this.getEspecialidadesUseCase.execute();
            res.status(200).json(especialidades);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = EspecialidadController;