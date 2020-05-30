const Usuario = require('../models/usuario.model');//MODELO DE DATOS DE USUARIO
const _ = require('underscore');
const usuarioCtrl = {};


usuarioCtrl.getUsuarios = (req, res) => {

    let desde = req.query.from || 0;
    desde = Number(desde);

    let limite = req.query.limit || 20;
    limite = Number(limite);

    if (req.query.active === 'false') {

        Usuario.find({ activeUser: false })
            .skip(desde)
            .limit(limite)
            .exec((err, responseDetail) => {
                if (err) {
                    return res.status(400).json({
                        response: {
                            status: false,
                            err
                        }
                    });
                }
                Usuario.countDocuments({ activeUser: false }, (err, count) => {
                    return res.json({
                        response: {
                            status: true,
                            count
                        },
                        responseDetail
                    })
                })
            })

    } else {

        Usuario.find({ activeUser: true })
            .skip(desde)
            .limit(limite)
            .exec((err, responseDetail) => {
                if (err) {
                    return res.status(400).json({
                        response: {
                            status: false,
                            err
                        }
                    });
                }

                Usuario.countDocuments({ activeUser: true }, (err, count) => {
                    return res.json({
                        response: {
                            status: true,
                            count
                        },
                        responseDetail
                    })
                })


            })
    }

}
//  usuarioCtrl.getUsuarios = async (req, res) => {
//      const usuarios = await Usuario.find();
//      res.json(usuarios);
//  };


usuarioCtrl.createUsuario = async(req, res) => {

    const { nombre, apellido, rol, email, password, activeUser } = req.body;
    const responseDetail = new Usuario({ nombre, apellido, rol, email, password, activeUser });
    if (responseDetail.password === undefined) {
        return res.json({
            response: {
                status: false,
                err: {
                    message: 'El PASSWORD ES REQUERIDO'
                }
            }
        })
    } else {
        responseDetail.password = await responseDetail.encryptPassword(responseDetail.password);
    }

    responseDetail.save((err, responseDetail) => {
        if (err) {
            return res.status(400).json({
                response: {
                    status: false,
                    err
                }
            });
        }
        //Se quita el dato de la contraseña para que no sea visible en el JSON
        responseDetail.password = null;
        res.status(201).json({
            response: {
                status: true,
                description: "USUARIO GUARDADO"
            },
            responseDetail
        });
    });
}

//  usuarioCtrl.createUsuario = async(req, res) => {
//      const usuario = new Usuario(req.body);
//      await usuario.save();
//      res.json({
//          'ESTADO': 'USUARIO GUARDADO'
//      });
//  };

usuarioCtrl.getUsuario = (req, res) => {
    let id = req.params.id;
    Usuario.findById(id, (err, responseDetail) => {
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

//  usuarioCtrl.getUsuario = async(req, res) => {
//      const usuario = await Usuario.findById(req.params.id);
//      res.json(usuario);  
//  };

usuarioCtrl.editUsuario = (req, res) => {

    let id = req.params.id;
    let body = req.body;
    //.pick sirve para obtener solo lo que se necesita, los demás campos no los incluye asi le llegen
   
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, responseDetail) => {
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
                        message: 'ID NO ENCONTRADO'
                    }
                }
            });
        }
        res.json({
            response: {
                status: true,
                description: "USUARIO ACTUALIZADO"
            },
            responseDetail
        });
    });
}

//   usuarioCtrl.editUsuario = async(req, res) => {
//       const {id} = req.params;
//       await Usuario.findByIdAndUpdate(id, req.body,{new: true});
//        res.json({ESTADO: 'USUARIO ACTUALIZADO'});
//   };
usuarioCtrl.deleteUsuario = (req, res) => {

    let id = req.params.id;
    let cambioEstado = {
        activeUser: false
    }
    Usuario.findByIdAndUpdate(id, cambioEstado, { new: true }, (err, responseDetail) => {
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
                        message: 'ID NO ENCONTRADO'
                    }
                }
            })

        }

        res.json({
            response: {
                status: true,
                description: 'USUARIO ELIMINADO'
            },
            responseDetail
        })

    })

}

//  usuarioCtrl.deleteUsuario = async(req, res) => { 
//      await Usuario.findByIdAndRemove(req.params.id);
//      res.json({ESTADO: 'USUARIO ELIMINADO'});
//  };
module.exports = usuarioCtrl;


