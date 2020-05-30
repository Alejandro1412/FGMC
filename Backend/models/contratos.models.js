const mongoose = require('mongoose');

let contratosSchema = new mongoose.Schema({
    nombreContrato: { type: String, required: [true, 'El nombre del contrato es requerido'] },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuarios', required: [true, 'UN USUARIO ID ES REQUERIDO'] },
    lugarExpedicion: { type: String, required: [true, '']},
    fechaNacimiento: { type: Date, required: [true, '']},
    CajaCompensacion: { type: String, required: [true, '']},
    afp_FondoPensiones: { type: String, required: [true, ''] },
    eps: { type: String, required: [true, ''] },
    fechaIngreso: { type: Date, required: [true, ''] },
    fechaRetiro: { type: Date, required: [true, '']},
    salario: { type: Number, required: [true, '']},
    auxilioporTrayecto: { type: Number},
    auxilioporTransporte: { type: Number},
    cargo: { type: String },
    titulo: { type: String, required: [true, '']},
    universidad: { type: String, required: [true, ''] },
    telefono: { type: Number, required: [true, ''] },
    direccion: { type: String, required: [true, '']},
    email: {type: String, required: [true, ''] },
    observacion: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('contrato', contratosSchema);