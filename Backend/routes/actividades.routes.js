var express = require('express');
var router = express.Router();

router.get('/actividadesReporte',//mientras no se tenga que agregar las rutas dinamicas para que sean datos reales y dinamicos
    (req, res) => {
        proce = 40
        termi = 10
        total = proce + termi
        res.send({
            actividadesEnProceso : proce,
            actividadesTerminadas : termi,
            totalActividades: total,
            
        })
    });


module.exports = router;