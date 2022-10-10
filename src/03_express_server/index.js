// pouzite balicky
const express = require('express');

// vytvoreni aplikace
const app = express();

// nastaveni jazyka pro templating
app.set('view engine', 'ejs');
app.set('views', './app/views');

// middle-ware pro staticke soubory
app.use(express.static('www'));

// vlastni middle-ware
app.use('/api', require('./app/api_router'));
// middle-ware nahrazujici HTML za dynamicke views
app.use('/', require('./app/html_router'));
// vsechny ostatni URL se povazuji za chybu
app.use('*', (dotaz, odpoved) => odpoved.redirect('/error'));

app.listen(8000, () => {
    console.log('Server běží na http://localhost:8000...');
});

