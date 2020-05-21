const express = require('express');
const router = express.Router();

const contrato = require('../controllers/cargo.controller');

router.get('/', contrato.getUsuarios);
router.post('/', contrato.createUsuario);
router.get('/:id', contrato.getUsuario);
router.put('/:id', contrato.editUsuario);
router.delete('/:id', contrato.deleteUsuario);

module.exports = router;