const express = require('express');
const router = express.Router();

const cargo = require('../controllers/cargo.controller');

router.get('/', cargo.getUsuarios);
router.post('/', cargo.createUsuario);
router.get('/:id', cargo.getUsuario);
router.put('/:id', cargo.editUsuario);
router.delete('/:id', cargo.deleteUsuario);

module.exports = router;