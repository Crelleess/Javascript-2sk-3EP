const app = require('./app');

const port = 8000;

require('http').createServer(app).listen(port, () =>
    console.log(`Server běží na http://localhost:${port}...`)
);