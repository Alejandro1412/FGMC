const express = require('express');//REQUIERO EXPRESS
const morgan = require('morgan');///REQUIERO MORGAN-METODOS HTTP
const cors = require('cors');
var colors = require('colors');

//---------inicializacion------------//
const app = express();//LLAMO EXPRESS
require('./database');
//CONFIGURACION SERVIDOR
//Settings
app.set('appName', 'FUNDACION GIMNASIO MODERNO DEL CAUCA');


//MIDDLEWARES:CONVERSION O MODULOS-FUNCIONES QUE SE DISPARAN CADA QUE PASA X AHI EL CODIGO
app.use(morgan('dev'));
app.use(express.json());//METODO QUE HACE QUE EL CODIGO DEL NAVEGADOR ENTIENDA JSONS
app.use(express.urlencoded({ extended: false })); //POSTMAN PRUEBA EN CAJAS
app.use(cors({ origin: 'http://localhost:4200' }));

//app.use('/api/usuarios',require('./routes/usuario.routes'));
//RUTA GLOBAL
app.use(require('./routes/index'));


//INICIAR SERVIDOR
app.listen(process.env.PORT, () => {
    console.log(`${app.get('appName')} SERVIDOR BACKEND CORRIENDO`.underline.green);
    if (process.env.PORT === '3000') {
        console.log('SERVIDOR DE DESARROLLO');
        console.log(`SERVIDOR EN PUERTO ${process.env.PORT}`.red);
    } else {
        console.log('SERVIDOR DE PRODUCCION');
        console.log(`SERVIDOR EN PUERTO ${process.env.PORT}`.red);
    }
});