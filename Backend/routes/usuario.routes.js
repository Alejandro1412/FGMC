var express = require('express');
var router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');
const {verificaAdmin_Rol} = require('../middlewares/autenticacion');

router.get('/usuarios', usuarioCtrl.getUsuarios);
router.post('/usuario', usuarioCtrl.createUsuario);
router.get('/usuario/:id', usuarioCtrl.getUsuario);
router.put('/usuario/:id', usuarioCtrl.editUsuario);
router.delete('/usuario/:id',usuarioCtrl.deleteUsuario);


module.exports = router;