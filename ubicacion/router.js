const express = require('express');
const lavaderoController = require('./controller');

const router = express.Router();

router.post('/get', lavaderoController.filtrarLavaderos);

module.exports = router;