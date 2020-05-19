const express = require('express');//REQUIERO EXPRESS
const morgan = require('morgan');///REQUIERO MORGAN-METODOS HTTP
const app = express();//LLAMO EXPRESS

const { mongoose } = require('./database');//

//CONFIGURACION SERVIDOR
app.set('port', process.env.PORT||3000);//MENCIONO SI HAY UN PUERTO LIBRE LO TOME;SINO TOME EL 3000
//MIDDLEWARES:CONVERSION O MODULOS
app.use(morgan('dev'));
app.use(express.json());//METODO QUE HACE QUE EL CODIGO DEL NAVEGADOR LO ENTIENDA EL SERVIDOR

//RUTAS SERVIDOR
app.use('/api/usuarios',require('./routes/usuario.routes'));

//INICIAR SERVIDOR
app.listen(app.get('port'), () => {
    console.log('SERVIDOR EN PUERTO ', app.get('port'));//MUESTRO EN CONSOLA DONDE ESTA CONECTANDOSE MI BD
});