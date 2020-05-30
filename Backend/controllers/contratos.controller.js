const Contratos = require('../models/contratos.models');
const contratosCtrl = {};

// contratosCtrl.getContratos = async (req, res) => {
//     const contratos = await Contratos.find();
//     res.json(contratos);
// };
contratosCtrl.getContratos = (req, res) => {
    Contratos.find({})
        //Populate sirve para mostrar todo el contenido del objectId secundario
        .populate( )
        .exec((err, responseDetail) => {
            if (err) {
                return res.status(400).json({
                    response: {
                        status: false,
                        err
                    }
                });
            }
            Contratos.countDocuments({}, (err, count) => {
                res.json({
                    response: {
                        status: true,
                        count
                    },
                    responseDetail
                })
            })
        })
}

// contratosCtrl.createContrato = async(req, res) => {
//     const contrato = new Contratos(req.body);
//     await contrato.save();
//     res.json({
//         'ESTADO': 'CONTRATO GUARDADO'
//     });
// };

contratosCtrl.createContrato = (req, res) => {

    const { nombreContrato,lugarExpedicion,fechaNacimiento,CajaCompensacion,afp_FondoPensiones, eps,fechaIngreso,fechaRetiro,salario,auxilioporTrayecto,auxilioporTransporte,cargo,titulo,universidad,telefono, direccion,email,observacion} = req.body;
    let userId = req.usuario._id;
    var contrato = new Contratos({ nombreContrato,lugarExpedicion,fechaNacimiento,CajaCompensacion,afp_FondoPensiones, eps,fechaIngreso,fechaRetiro,salario,auxilioporTrayecto,auxilioporTransporte,cargo,titulo,universidad,telefono, direccion,email,observacion,userId});

    contrato.save((err, responseDetail) => {

        if (err) {
            return res.status(400).json({
                response: {
                    status: false,
                    err
                }
            })
        }

        res.status(201).json({
            response: {
                status: true,
                description: "CONTRATO GUARDADO"
            },
            responseDetail
        });

    });

}

// contratosCtrl.getContrato = async(req, res) => {
//     const contrato = await Contratos.findById(req.params.id);
//     res.json(contrato);  
// };

contratosCtrl.getContrato = (req, res) => {
    let id = req.params.id;
    Contratos.findById(id, (err, responseDetail) => {
        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err
                }
            });
        }

        if (!responseDetail) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: "ID NO ENCONTRADO"
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
            },
            responseDetail
        });

    });
}


// contratosCtrl.editContrato = async(req, res) => {
//     const {id} = req.params;
//     await Contratos.findByIdAndUpdate(id, req.body,{new: true});
//      res.json({ESTADO: 'CONTRATO ACTUALIZADO'});
// };


contratosCtrl.editContrato = (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Contratos.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, responseDetail) => {
        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err: err
                }
            });
        }

        if (!responseDetail) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: "ID NO ENCONTRADO"
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
                description: "CONTRATO ACTUALIZADO"
            },
            responseDetail
        });
    });

}

// contratosCtrl.deleteContrato = async(req, res) => { 
//     await Contratos.findByIdAndRemove(req.params.id);
//     res.json({ESTADO: 'CONTRATO ELIMINADO'});
// };

contratosCtrl.deleteContrato = (req, res) => {
    let id = req.params.id;
    console.log(id);

    Contratos.findByIdAndDelete(id, (err, responseDetail) => {

        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err: err
                }
            })
        }

        if (!responseDetail) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: "ID NO ENCONTRADO"
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
                description: "CONTRATO ELIMINADO"
            },
            responseDetail
        })

    });

}



module.exports = contratosCtrl;