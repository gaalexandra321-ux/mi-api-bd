class TratamientoController {
    constructor({ getTratamientosUseCase }) {
        this.getTratamientosUseCase = getTratamientosUseCase;
    }

    async getTratamientos(req, res) {
        try {
            const tratamientos = await this.getTratamientosUseCase.execute();
            res.status(200).json(tratamientos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = TratamientoController;