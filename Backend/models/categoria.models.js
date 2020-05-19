const mongoose = require('mongoose');

var categoriaSchema = new mongoose.Schema({
    nombreCategoria:{type: String, required: [true, 'El cargo es requerido']},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('categoria', categoriaSchema);