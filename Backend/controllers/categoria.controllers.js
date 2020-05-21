const Categoria = require('../models/categoria.model');
const categoriaCtrl = {};

categoriaCtrl.getCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias);
};

categoriaCtrl.createCategoria = async(req, res) => {
    const categoria = new Categoria(req.body);
    await categoria.save();
    res.json({
        'ESTADO': 'CATEGORIA GUARDADA'
    });
};

categoriaCtrl.getCategoria = async(req, res) => {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);  
};

categoriaCtrl.editCategoria = async(req, res) => {
    const {id} = req.params;
    await Categoria.findByIdAndUpdate(id, req.body,{new: true});
     res.json({ESTADO: 'CATEGORIA ACTUALIZADA'});
};

categoriaCtrl.deleteCategoria = async(req, res) => { 
    await Categoria.findByIdAndRemove(req.params.id);
    res.json({ESTADO: 'CATEGORIA ELIMINADA'});
};
module.exports = categoriaCtrl;