var express = require('express');
var router = express.Router();
const categoriaCtrl = require('../controllers/categoria.controllers');
const {verificaToken,verificaAdmin_Rol} = require('../middlewares/autenticacion');

router.get('/categorias',[verificaToken], categoriaCtrl.getCategorias);
router.post('/categoria',[verificaToken], categoriaCtrl.createCategoria);
router.get('/categoria/:id',[verificaToken,verificaAdmin_Rol], categoriaCtrl.getCategoria);
router.put('/categoria/:id',[verificaToken,verificaAdmin_Rol], categoriaCtrl.editCategoria);
router.delete('/categoria/:id',[verificaToken,verificaAdmin_Rol], categoriaCtrl.deleteCategoria);

module.exports = router;