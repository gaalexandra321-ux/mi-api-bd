const express = require('express');
function createRouter(controller) {
    const router = express.Router();
    router.get('/', (req, res) => controller.getAll(req, res));
    return router;
}
module.exports = createRouter;