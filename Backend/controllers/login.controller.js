const usuarioModel = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const loginController = {}
const jwt = require('jsonwebtoken');
const _ = require('underscore');


loginController.postLogin = (req, res) => {

    let body = req.body;

    usuarioModel.findOne({ email: body.email }, (err, usuarioDb) => {

        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err
                }
            });
        }

        if (!usuarioDb) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: 'USUARIO O PASSWORD INCORRECTAS 1'
                    }
                }
            });
        }

        if (!bcrypt.compareSync(body.password, usuarioDb.password)) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: 'USUARIO O PASSWORD INCORRECTAS'
                    }
                }
            });
        }
        let token = jwt.sign({
            usuario:usuarioDb
        },process.env.SEED, {expiresIn:60*30});

        res.json({
            response: {
                status: true,
                description: "LOGIN EXITOSO"
            },
            responseDetail: {
                token,
                usuario: usuarioDb
            }
            
        });

    })

}

module.exports = loginController;