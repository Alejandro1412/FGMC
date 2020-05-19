const mongoose = require('mongoose');

var cargoSchema = new mongoose.Schema({
    nombreCargo:{type: String, required: [true, 'El cargo es requerido']},
    idArea:{type: Number},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('cargo', cargoSchema);