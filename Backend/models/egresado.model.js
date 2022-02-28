const mongoose = require('mongoose');

let egresadoSchema = new mongoose.Schema(
    {
        nombreEgresado: { type: String, required: [true, 'El nombre del egresado es requerido'] },
        identificacion: { type: String,  unique: true, required: [true, 'La identificación del egresado es requerido'] },
        continuoEstudio: { type: Boolean, required: [true, 'El campo es requerido'] },
        tipoEstudioEgresado: { type: String},//campo para ser llenado de una lista de (Técnico, Tecnólogo, Pregrado)
        tituloEstudioSuperior: { type: String},
        telefono: { type: String},
        fechaGraduacion: { type: Date, required: [true, 'El campo es requerido']}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('egresado', egresadoSchema);