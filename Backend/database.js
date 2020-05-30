const mongoose = require('mongoose');
require('./config');

//const URI = 'mongodb://localhost:27017/fgmc'; //NOMBRE BD FGMC
mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});//CORRIJO EL WARNING DE CONEXION

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR DE CONECCION:'));
db.once('open', () => {
    console.log("BASE DE DATOS CONECTADA");
});