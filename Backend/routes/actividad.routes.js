var express = require('express');
var router = express.Router();
const actividadCtrl = require('../controllers/actividad.controller');

router.get('/actividades', actividadCtrl.getActividades);
router.post('/actividad', actividadCtrl.createActividad);
router.get('/actividad/:id', actividadCtrl.getActividad);
router.put('/actividad/:id', actividadCtrl.editActividad);
router.delete('/actividad/:id',actividadCtrl.deleteActividad);


module.exports = router;