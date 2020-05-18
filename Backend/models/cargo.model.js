const mongoose = require('mongoose');

var cargoSchema = new mongoose.Schema({
    nombre:{type: String, required: [true, 'El es requerido']},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('cargo', cargoSchema);