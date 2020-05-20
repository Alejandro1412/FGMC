const mongoose = require('mongoose');
const URI = 'mongodb://localhost/fgmc'; //NOMBRE BD FGMC
mongoose.connect(URI,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false}) //CORRIJO EL WARNING DE CONEXION
    .then(DB => console.log('BASE DE DATOS CONECTADA'))
    .catch(err => console.error(err));
    
module.exports = mongoose;
