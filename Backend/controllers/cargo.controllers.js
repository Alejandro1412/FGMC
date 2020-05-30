const Cargo = require('../models/cargo.model');
const cargoCtrl = {};

//  cargoCtrl.getCargos = async (req, res) => {
//      const cargos = await Cargo.find();
//      res.json(cargos);
//  };
cargoCtrl.getCargos = (req, res) => {
    Cargo.find({})
        //Populate sirve para mostrar todo el contenido del objectId secundario
        .populate( 'nombre correo')
        .exec((err, responseDetail) => {
            if (err) {
                return res.status(400).json({
                    response: {
                        status: false,
                        err
                    }
                });
            }
            Cargo.countDocuments({}, (err, count) => {
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

//  cargoCtrl.createCargo = async (req, res) => {
//      const cargo = new Cargo(req.body);
//      await cargo.save();
//      res.json({
//          'ESTADO': 'CARGO GUARDADO'
//      });
// };
cargoCtrl.createCargo = (req, res) => {

    const { nombreCargo } = req.body;
    let userId = req.usuario._id;
    var cargo = new Cargo({ nombreCargo,userId});

    cargo.save((err, responseDetail) => {

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
                description: "CARGO GUARDADO"
            },
            responseDetail
        });

    });

}

//  cargoCtrl.getCargo = async(req, res) => {
//      const cargo = await Cargo.findById(req.params.id);
//      res.json(cargo);  
//  };

cargoCtrl.getCargo = (req, res) => {
    let id = req.params.id;
    Cargo.findById(id, (err, responseDetail) => {
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
//  cargoCtrl.editCargo = async(req, res) => {
//      const {id} = req.params;
//      await Cargo.findByIdAndUpdate(id, req.body,{new: true});
//       res.json({ESTADO: 'CARGO ACTUALIZADO'});
//  };
cargoCtrl.editCargo = (req, res) => {

    let id = req.params.id;
    let body = req.body;

    Cargo.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, responseDetail) => {
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
                description: "CARGO ACTUALIZADO"
            },
            responseDetail
        });
    });

}

//  cargoCtrl.deleteCargo = async(req, res) => { 
//      await Cargo.findByIdAndRemove(req.params.id);
//      res.json({ESTADO: 'CARGO ELIMINADO'});
//  };

cargoCtrl.deleteCargo = (req, res) => {
    let id = req.params.id;
    let changeActiveCargo = {
        activeCargo: false
    }
   
    Cargo.findByIdAndUpdate(id, changeActiveCargo,{ new:true },(err, responseDetail) => {

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
            })
        }

        res.json({
            response: {
                status: true,
                description: "CARGO ELIMINADO"
            },
            responseDetail
        })

    })

}

module.exports = cargoCtrl;