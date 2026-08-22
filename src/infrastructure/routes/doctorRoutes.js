const express = require('express');

function createDoctorRouter(doctorController) {
    const router = express.Router();
    router.get('/', (req, res) => doctorController.getDoctors(req, res));
    router.post('/', (req, res) => doctorController.createDoctor(req, res));
    return router;
}
module.exports = createDoctorRouter;