const Cargo = require('../models/cargo.model');
const cargoCtrl = {};

cargoCtrl.getContratos = async (req, res) => {
    const cargos = await Contratos.find();
    res.json(cargos);
};

cargoCtrl.createContratos = async(req, res) => {
    const cargo = new Cargo(req.body);
    await Cargo.save();
    res.json({
        'ESTADO': 'CARGO GUARDADO'
    });
};

cargoCtrl.getContratos = async(req, res) => {
    const cargo = await Cargo.findById(req.params.id);
    res.json(cargo);  
};

cargoCtrl.editContratos = async(req, res) => {
    const {id} = req.params;
    await Cargo.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'CARGO ACTUALIZADO'});
};

cargoCtrl.deleteContratos = async(req, res) => { 
    await Cargo.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'CARGO ELIMINADO'});
};
module.exports = cargoCtrl;