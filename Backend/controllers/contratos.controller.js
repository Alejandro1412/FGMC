const Contratos = require('../models/contratos.model');
const contratosCtrl = {};

contratosCtrl.getContratos = async (req, res) => {
    const contratos = await Contratos.find();
    res.json(contratos);
};

contratosCtrl.createContrato = async(req, res) => {
    const contrato = new Contratos(req.body);
    await Contratos.save();
    res.json({
        'ESTADO': 'CONTRATO GUARDADO'
    });
};

contratosCtrl.getContrato = async(req, res) => {
    const contrato = await Contratos.findById(req.params.id);
    res.json(contrato);  
};

contratosCtrl.editContrato = async(req, res) => {
    const {id} = req.params;
    await Contratos.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'CONTRATO ACTUALIZADO'});
};

contratosCtrl.deleteContrato = async(req, res) => { 
    await Contratos.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'CONTRATO ELIMINADO'});
};
module.exports = contratosCtrl;