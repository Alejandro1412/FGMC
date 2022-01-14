const mongoose = require('mongoose');
require('./config');

const URI = 'mongodb+srv://AlejandroPolancoA:MongoAlejandro1@cluster0.u1rnn.mongodb.net/FGMC?retryWrites=true&w=majority'; //NOMBRE BD FGMC
mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false});//CORRIJO EL WARNING DE CONEXION

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR DE CONECCION:'));
db.once('open', () => {
    console.log("BASE DE DATOS CONECTADA");
});