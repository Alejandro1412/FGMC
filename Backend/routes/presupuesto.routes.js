var express = require('express');
var router = express.Router();

router.get('/presupuestoEjecutado',//mientras no se tenga que agregar las rutas dinamicas para que sean datos reales y dinamicos
    (req, res) => {
        proce = 25
        termi = 10
        planeadas = 100
        total = proce + termi + planeadas
        res.send({
            presupuestoPlaneado : planeadas,
            presupuestoEnProceso : proce,
            presupuestoTerminadas : termi,
            totalActividades: total,
            
        })
    });


module.exports = router;