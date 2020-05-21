const Roles = require('../models/contratos.model');
const rolCtrl = {};

contratosCtrl.getRoles = async (req, res) => {
    const rol = await Roles.find();
    res.json(rol);
};

contratosCtrl.createRol = async(req, res) => {
    const rol = new Contratos(req.body);
    await Roles.save();
    res.json({
        'ESTADO': 'ROL GUARDADO'
    });
};

contratosCtrl.getRol = async(req, res) => {
    const rol = await Roles.findById(req.params.id);
    res.json(rol);  
};

contratosCtrl.editRol = async(req, res) => {
    const {id} = req.params;
    await Roles.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'ROL ACTUALIZADO'});
};

contratosCtrl.deleteRol = async(req, res) => { 
    await Roles.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'ROL ELIMINADO'});
};
module.exports = rolCtrl;