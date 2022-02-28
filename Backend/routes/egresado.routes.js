var express = require('express');
var router = express.Router();
const egresadoCtrl = require('../controllers/egresado.controller');

router.get('/egresados', egresadoCtrl.getEgresados);
router.post('/egresado', egresadoCtrl.createEgresado);
// router.get('/egresado/:id', egresadoCtrl.getEgresado);
router.put('/egresado/:id', egresadoCtrl.editEgresado);
router.delete('/egresado/:id',egresadoCtrl.deleteEgresado);


module.exports = router;