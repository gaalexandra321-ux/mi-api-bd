class DoctorController {
    constructor({ getDoctorsUseCase, createDoctorUseCase }) {
        this.getDoctorsUseCase = getDoctorsUseCase;
        this.createDoctorUseCase = createDoctorUseCase;
    }
    async getDoctors(req, res) {
        try {
            const doctors = await this.getDoctorsUseCase.execute();
            res.status(200).json(doctors);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async createDoctor(req, res) {
        try {
            const newDoctor = await this.createDoctorUseCase.execute(req.body);
            res.status(201).json(newDoctor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
module.exports = DoctorController;