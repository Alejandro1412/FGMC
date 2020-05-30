const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let categoriaSchema = new mongoose.Schema({
    nombreCategoria:{type: String,unique: true, required: [true, 'Nombre de la categoria es requerido']},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios' },
    date: { type: Date, default: Date.now }
});

categoriaSchema.plugin(uniqueValidator, { message: '{PATH} DEBE SER UNICO' })
module.exports = mongoose.model('categoria', categoriaSchema);
