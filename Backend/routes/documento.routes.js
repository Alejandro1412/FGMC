var express = require('express');
var router = express.Router();
const documentoCtrl = require('../controllers/documento.controller');

router.get('/documentos', documentoCtrl.getDocumentos);
router.post('/documento', documentoCtrl.createDocumento);
// router.get('/documento/:id', documentoCtrl.getDocumento);
router.put('/documento/:id', documentoCtrl.editDocumento);
router.delete('/documento/:id',documentoCtrl.deleteDocumento);


module.exports = router;