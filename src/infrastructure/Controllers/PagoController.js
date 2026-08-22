class PagoController {
    constructor({ getPagosUseCase }) {
        this.getPagosUseCase = getPagosUseCase;
    }

    async getPagos(req, res) {
        try {
            const pagos = await this.getPagosUseCase.execute();
            res.status(200).json(pagos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = PagoController;