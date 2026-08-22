class CitaController {
    constructor({ getCitasUseCase }) {
        this.getCitasUseCase = getCitasUseCase;
    }

    async getCitas(req, res) {
        try {
            const citas = await this.getCitasUseCase.execute();
            res.status(200).json(citas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = CitaController;