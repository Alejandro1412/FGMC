const express = require('express');
const router = express.Router();

const categoria = require('../controllers/categoria.controller');

router.get('/', categoria.getUsuarios);
router.post('/', categoria.createUsuario);
router.get('/:id', categoria.getUsuario);
router.put('/:id', categoria.editUsuario);
router.delete('/:id', categoria.deleteUsuario);

module.exports = router;