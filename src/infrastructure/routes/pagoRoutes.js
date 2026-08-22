const express = require('express');

function createPagoRouter(pagoController) {
    const router = express.Router();
    router.get('/', (req, res) => pagoController.getPagos(req, res));
    return router;
}
module.exports = createPagoRouter;