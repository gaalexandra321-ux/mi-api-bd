const express = require('express');

function createInsumoRouter(insumoController) {
    const router = express.Router();
    router.get('/', (req, res) => insumoController.getInsumos(req, res));
    return router;
}
module.exports = createInsumoRouter;