const express = require('express');

const app = express();

app.use(express.static('www'));

app.listen(8000, () => {
    console.log('Server běží na http://localhost:8000...');
});

