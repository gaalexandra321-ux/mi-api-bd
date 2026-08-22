class InsumoController {
    constructor({ getInsumosUseCase }) {
        this.getInsumosUseCase = getInsumosUseCase;
    }

    async getInsumos(req, res) {
        try {
            const insumos = await this.getInsumosUseCase.execute();
            res.status(200).json(insumos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = InsumoController;