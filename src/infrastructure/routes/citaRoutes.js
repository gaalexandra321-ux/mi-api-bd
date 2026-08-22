const express = require('express');

function createCitaRouter(citaController) {
    const router = express.Router();
    router.get('/', (req, res) => citaController.getCitas(req, res));
    return router;
}
module.exports = createCitaRouter;

