class MetodoPagoController {
    constructor({ getMetodosPagoUseCase }) {
        this.getMetodosPagoUseCase = getMetodosPagoUseCase;
    }

    async getMetodosPago(req, res) {
        try {
            const metodos = await this.getMetodosPagoUseCase.execute();
            res.status(200).json(metodos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = MetodoPagoController;