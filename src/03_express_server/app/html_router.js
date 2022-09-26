const express = require('express');

const controller = require('./html_controller');

const router = express.Router();

router.get(['/', '/index'], controller.index);

module.exports = router;
