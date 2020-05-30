const mongoose = require('mongoose');

let cargoSchema = new mongoose.Schema({
    nombreCargo:{type: String, required: [true, 'El cargo es requerido']},
    activeCargo: { type: Boolean, default: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: [true, 'UN USUARIO ID ES REQUERIDO'] },
    //idArea:{type: Number},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('cargo', cargoSchema);