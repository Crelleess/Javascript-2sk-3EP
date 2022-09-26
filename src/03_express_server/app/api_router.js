const express = require('express');

const controller = require('./api_controller');

const router = express.Router();

router.get('/hello', controller.hello);
router.get('/json', controller.json);

module.exports = router;
