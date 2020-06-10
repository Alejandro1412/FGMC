const jwt = require('jsonwebtoken');

//--------------------------//
// VEERIFICACION DEL TOKEN
//--------------------------//

let verificaToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'TOKEN NO VALIDO'

                }

            });

        }
        req.usuario = decoded.usuario;
        next();
    });
};


//--------------------------//
// VEERIFICACION ADMIN ROL
//--------------------------//

let verificaAdmin_Rol = (req, res, next) => {

    let usuario = req.usuario;
    console.log(usuario);

    if (usuario.rol === 'adminRol') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'EL USUARIO NO ES ADMINISTRADOR'
            }
        });
    }
}

module.exports = {
    verificaToken,
    verificaAdmin_Rol
}