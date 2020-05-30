var express = require('express');
var router = express.Router();
const cargoCtrl = require('../controllers/cargo.controllers');
const {verificaToken,verificaAdmin_Rol} = require('../middlewares/autenticacion');

router.get('/cargos',[verificaToken], cargoCtrl.getCargos);
router.post('/cargo',[verificaToken], cargoCtrl.createCargo);
router.get('/cargo/:id',[verificaToken,verificaAdmin_Rol],cargoCtrl.getCargo);
router.put('/cargo/:id',[verificaToken,verificaAdmin_Rol], cargoCtrl.editCargo);
router.delete('/cargo/:id',[verificaToken,verificaAdmin_Rol], cargoCtrl.deleteCargo);


module.exports = router;
