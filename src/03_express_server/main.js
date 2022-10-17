const app = require('./app');

const port = require('./conf').port;

require('http').createServer(app).listen(port, () =>
    console.log(`Server běží na http://localhost:${port}...`)
);
