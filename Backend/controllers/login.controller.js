const UserModel = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const loginController = {}

loginController.postLogin = (req, res) => {

    let body = req.body;

    UserModel.findOne({ email: body.email }, (err, dbUser) => {

        if (err) {
            return res.status(500).json({
                response: {
                    status: false,
                    err
                }
            });
        }

        if (!dbUser) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: 'USUARIO O PASSWORD INCORRECTAS'
                    }
                }
            });
        }

        if (!bcrypt.compareSync(body.password, dbUser.password)) {
            return res.status(400).json({
                response: {
                    status: false,
                    err: {
                        message: 'USUARIO O PASSWORD INCORRECTAS'
                    }
                }
            });
        }

        res.json({
            response: {
                status: true,
                description: "LOGIN EXITOSO"
            },
            responseDetail: {
                token: '123',
                dbUser
            }

        });

    })

}

module.exports = loginController;