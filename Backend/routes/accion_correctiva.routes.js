var express = require('express');
var router = express.Router();
const accionCorrectivaCtrl = require('../controllers/accion_correctiva.controller');

router.get('/acciones_correctivas', accionCorrectivaCtrl.getAccionesCorrectivas);
router.post('/accion_correctiva', accionCorrectivaCtrl.createNovedadAccionCorrectiva);
router.get('/accion_correctiva/:id', accionCorrectivaCtrl.getAccionCorrectiva);
router.put('/accion_correctiva/:id', accionCorrectivaCtrl.editAccionCorrectiva);
router.delete('/accion_correctiva/:id',accionCorrectivaCtrl.deleteAccionCorrectiva);


module.exports = router;