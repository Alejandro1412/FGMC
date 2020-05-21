const express = require('express');
const router = express.Router();

const rol = require('../controllers/rolws.controller');

router.get('/', rol.getUsuarios);
router.post('/', rol.createUsuario);
router.get('/:id', rol.getUsuario);
router.put('/:id', rol.editUsuario);
router.delete('/:id', rol.deleteUsuario);

module.exports = router;