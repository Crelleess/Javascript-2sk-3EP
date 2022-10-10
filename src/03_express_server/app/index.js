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
app.use('/api', require('./routers/apiRouter'));
// middle-ware nahrazujici HTML za dynamicke views
app.use('/', require('./routers/pageRouter'));
// vsechny ostatni URL se povazuji za chybu
app.use('*', (dotaz, odpoved) => odpoved.redirect('/error'));

// export aplikace ze sobuoru pro dalsi pouziti
module.exports = app;
