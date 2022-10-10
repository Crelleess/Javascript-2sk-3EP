// pouzite balicky
const express = require('express');
// vytvoreni aplikace
const app = express();

// nastaveni jazyka pro templating
app.set('view engine', 'ejs');
app.set('views', './app/views');

// middle-ware pro zpracovani prichozich dat z formularu
app.use(express.urlencoded({ extended: false }));

// middle-ware pro staticke soubory
app.use(express.static('./www'));

// vlastni middle-ware (demonstrace ruznych API)
app.use('/api', require('./routers/apiRouter'));

// middle-ware pro praci s uzivateli
app.use(['/uzivatel', '/user'], require('./routers/userRouter'));
// middle-ware pro obycejne stranky (index, error)
app.use('/', require('./routers/pageRouter'));
// vsechny ostatni URL se povazuji za chybu
app.use('*', (dotaz, odpoved) => odpoved.redirect('/error'));

// export aplikace ze sobuoru pro dalsi pouziti
module.exports = app;
