// 1) nahraju do svoji aplikace balik s kodem pro HTTP
const http = require('http'); // neco jako "using" v C#

// 2) pripravim odpoved meho serveru
function reakce(dotaz, odpoved) {
    odpoved.writeHead(200, {'Content-type': 'text/plain'});
    odpoved.write('Hello world!');
    odpoved.end();
}

// 2) vytvorim HTTP server s pripravenou odpovidaci funkci
const server = http.createServer(reakce);

// 4) necham server naslouchat na TCP portu
server.listen(8000); // server je pristupny na adrese 'localhost'
console.log('Server beží na adrese http://localhost:8000...');

