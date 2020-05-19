const mongoose = require('mongoose');

var contratosSchema = new mongoose.Schema({
    nombreContrato: { type: String, required: [true, 'El nombre del contrato es requerido'] },
    lugarExpedicion: { type: String},
    fechaNacimiento: { type: Date},
    CajaCompensacion: { type: String },
    afp_FondoPensiones: { type: String, required: [true, ''] },
    eps: { type: Number, required: [true, ''] },
    fechaIngreso: { type: Date },
    fechaRetiro: { type: Date },
    salario: { type: Number },
    auxilioporTrayecto: { type: Number},
    auxilioporTransporte: { type: Number},
    cargo: { type: String },
    titulo: { type: String },
    universidad: { type: String },
    telefono: { type: Number },
    direccion: { type: String },
    correo: {type: String },
    observacion: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('contratos', contratosSchema);