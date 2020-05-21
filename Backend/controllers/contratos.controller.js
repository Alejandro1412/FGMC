const Contratos = require('../models/contratos.model');
const contratosCtrl = {};

contratosCtrl.getContratos = async (req, res) => {
    const contratos = await Contratos.find();
    res.json(contratos);
};

contratosCtrl.createContratos = async(req, res) => {
    const contrato = new Contratos(req.body);
    await Contratos.save();
    res.json({
        'ESTADO': 'CONTRATO GUARDADO'
    });
};

contratosCtrl.getContratos = async(req, res) => {
    const contrato = await Contratos.findById(req.params.id);
    res.json(contrato);  
};

contratosCtrl.editContratos = async(req, res) => {
    const {id} = req.params;
    await Contratos.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'CONTRATO ACTUALIZADO'});
};

contratosCtrl.deleteContratos = async(req, res) => { 
    await Contratos.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'CONTRATO ELIMINADO'});
};
module.exports = contratosCtrl;