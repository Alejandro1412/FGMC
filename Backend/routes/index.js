const express = require('express');
const app = express();


//------------------------RUTAS SERVIDOR-------------------------//
app.use(require('./usuario.routes'));
app.use(require('./contratos.routes'));
app.use(require('./login.routes'));
app.use(require('./cargo.routes'));
app.use(require('./categoria.routes'));
app.use(require('./documento.routes'));
app.use(require('./subirDocs.routes'));
app.use(require('./egresado.routes'));


app.get('/', (req, res) => {
    res.send('<h1> ESTE ES EL BACKEND DE LA FUNDACION GIMNASIO MODERNO DEL CAUCA</h1>');
});

module.exports = app;