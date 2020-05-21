const Usuario = require('../models/usuario.model');//MODELO DE DATOS DE USUARIO
const usuarioCtrl = {};


usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};
usuarioCtrl.createUsuario = async(req, res) => {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        'ESTADO': 'USUARIO GUARDADO'
    });
};
usuarioCtrl.getUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);  
};

usuarioCtrl.editUsuario = async(req, res) => {
    const {id} = req.params;
    await Usuario.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'USUARIO ACTUALIZADO'});
};

usuarioCtrl.deleteUsuario = async(req, res) => { 
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'USUARIO ELIMINADO'});
};
module.exports = usuarioCtrl;


