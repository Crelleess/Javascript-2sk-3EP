const express = require('express');

const app = express();

app.use(express.static('www'));

// custom odpovedi na custom URL v dotazu
app.get('/hello', (dotaz, odpoved) => odpoved.send('Hello World!'));
app.get('/json', (dotaz, odpoved) => odpoved.json({ pozdrav: 'Hello World!' }));

app.listen(8000, () => {
    console.log('Server běží na http://localhost:8000...');
});

