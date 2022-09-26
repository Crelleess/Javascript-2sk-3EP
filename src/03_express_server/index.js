const express = require('express');

const app = express();

// middle-ware pro staticke soubory
app.use(express.static('www'));

// vlastni middle-ware
app.use('/api', require('./app/router'));

app.listen(8000, () => {
    console.log('Server běží na http://localhost:8000...');
});

