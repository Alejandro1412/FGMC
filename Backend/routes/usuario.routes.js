var express = require('express');
var router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const {verificaToken,verificaAdmin_Rol} = require('../middlewares/autenticacion');

router.get('/usuarios',verificaToken, usuarioCtrl.getUsuarios);
router.post('/usuario',[verificaToken], usuarioCtrl.createUsuario);
router.get('/usuario/:id',[verificaToken], usuarioCtrl.getUsuario);
router.put('/usuario/:id',[verificaToken,verificaAdmin_Rol], usuarioCtrl.editUsuario);
router.delete('/usuario/:id',[verificaToken,verificaAdmin_Rol],usuarioCtrl.deleteUsuario);


module.exports = router;