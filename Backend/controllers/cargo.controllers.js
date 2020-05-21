const Cargo = require('../models/cargo.model');
const cargoCtrl = {};

cargoCtrl.getCargos = async (req, res) => {
    const cargos = await Cargo.find();
    res.json(cargos);
};

cargoCtrl.createCargo = async(req, res) => {
    const cargo = new Cargo(req.body);
    await Cargo.save();
    res.json({
        'ESTADO': 'CARGO GUARDADO'
    });
};

cargoCtrl.getCargo = async(req, res) => {
    const cargo = await Cargo.findById(req.params.id);
    res.json(cargo);  
};

cargoCtrl.editCargo = async(req, res) => {
    const {id} = req.params;
    await Cargo.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'CARGO ACTUALIZADO'});
};

cargoCtrl.deleteCargo = async(req, res) => { 
    await Cargo.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'CARGO ELIMINADO'});
};
module.exports = cargoCtrl;