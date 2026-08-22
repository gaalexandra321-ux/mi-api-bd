const express = require('express');

function createTratamientoRouter(tratamientoController) {
    const router = express.Router();
    router.get('/', (req, res) => tratamientoController.getTratamientos(req, res));
    return router;
}

module.exports = createTratamientoRouter;