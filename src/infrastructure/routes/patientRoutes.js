const express = require('express');

function createPatientRouter(patientController) {
    const router = express.Router();
    router.get('/', (req, res) => patientController.getPatients(req, res));
    router.post('/', (req, res) => patientController.createPatient(req, res));
    return router;
}

module.exports = createPatientRouter;