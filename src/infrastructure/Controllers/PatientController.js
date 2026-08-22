class PatientController {
    constructor({ getPatientsUseCase, createPatientUseCase }) {
        this.getPatientsUseCase = getPatientsUseCase;
        this.createPatientUseCase = createPatientUseCase;
    }

    async getPatients(req, res) {
        try {
            const patients = await this.getPatientsUseCase.execute();
            res.status(200).json(patients);
        } catch (error) {
            console.error("DETALLE DEL ERROR (GET):", error);
            res.status(500).json({ error: error.message });
        }
    }

    async createPatient(req, res) {
        try {
            const newPatient = await this.createPatientUseCase.execute(req.body);
            res.status(201).json(newPatient);
        } catch (error) {
            console.error("DETALLE DEL ERROR (CREATE):", error); // Esto mostrará el error completo en la consola negra del CMD
            res.status(400).json({ error: error.message || "Error desconocido" });
        }
    }
}

module.exports = PatientController;