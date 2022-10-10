// pouzite balicky
const express = require('express');
// vytvoreni routeru
const router = express.Router();

// znama URL
router.get('/error', require('./html_controller').error);
router.get(['/', '/index'], require('./html_controller').index);

// export vysledku pro import nekde jinde
module.exports = router;
