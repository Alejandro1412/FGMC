//---------------------------------
// ARCHIVO DE CONFIGURACIÓN GLOBAL
//--------------------------------


//----------- PUERTO 3000----//
process.env.PORT = process.env.PORT || 3000;


//--------------------------//
// VENCIMIENTO TOKEN
//--------------------------//
process.env.CADUCIDAD_TOKEN=60*60*24*30;

//--------------------------
// ENTORNOS Base de datos, Desarrollo o producción
//--------------------------

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//--------------------------//
// VENCIMIENTO TOKEN
//--------------------------//
process.env.SEED=process.env.SEED || 'seed-de-desarrollo';


//--------------------------//
// Bases de datos
//--------------------------//
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://AlejandroPolancoA:MongoAlejandro1@cluster0.u1rnn.mongodb.net/FGMC?retryWrites=true&w=majority';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;