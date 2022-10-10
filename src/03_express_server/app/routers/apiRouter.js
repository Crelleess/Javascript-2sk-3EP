const express = require('express');

const controller = require('../controllers/apiController');

const router = express.Router();

router.get('/hello', controller.hello);
router.get('/json', controller.json);

module.exports = router;