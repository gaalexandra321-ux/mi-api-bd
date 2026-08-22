const express = require('express');

function createMetodoPagoRouter(metodoPagoController) {
    const router = express.Router();
    router.get('/', (req, res) => metodoPagoController.getMetodosPago(req, res));
    return router;
}
module.exports = createMetodoPagoRouter;