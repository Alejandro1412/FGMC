const Roles = require('../models/rolws.model');
const rolCtrl = {};

rolCtrl.getRoles = async (req, res) => {
    const rol = await Roles.find();
    res.json(rol);
};

rolCtrl.createRol = async(req, res) => {
    const rol = new Contratos(req.body);
    await Roles.save();
    res.json({
        'ESTADO': 'ROL GUARDADO'
    });
};

rolCtrl.getRol = async(req, res) => {
    const rol = await Roles.findById(req.params.id);
    res.json(rol);  
};

rolCtrl.editRol = async(req, res) => {
    const {id} = req.params;
    await Roles.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'ROL ACTUALIZADO'});
};

rolCtrl.deleteRol = async(req, res) => { 
    await Roles.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'ROL ELIMINADO'});
};
module.exports = rolCtrl;