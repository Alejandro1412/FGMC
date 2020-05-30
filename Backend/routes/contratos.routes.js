var express = require('express');
var router = express.Router();
const contratosCtrl = require('../controllers/contratos.controller');
const {verificaToken,verificaAdmin_Rol} = require('../middlewares/autenticacion');

router.get('/contratos',[verificaToken], contratosCtrl.getContratos);
router.post('/contrato',[verificaToken,verificaAdmin_Rol], contratosCtrl.createContrato);
router.get('/contrato/:id',[verificaToken,verificaAdmin_Rol], contratosCtrl.getContrato);
router.put('/contrato/:id',[verificaToken,verificaAdmin_Rol],contratosCtrl.editContrato);
router.delete('/contrato/:id',[verificaToken,verificaAdmin_Rol], contratosCtrl.deleteContrato);

module.exports = router;