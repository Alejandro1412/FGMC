const mongoose = require('mongoose');

let actividadSchema = new mongoose.Schema(
    {
        nombreActividad: { type: String,  unique: true, required: [true, 'El nombre del actividad es requerido'] },
        resultadoEsperado: { type: String, required: [true, 'El resultado de la actividad es requerido'] },
        encargado: { type: String, required: [true, 'El encargado de la actividad es requerido'] },
        objetivo: { type: String, required: [true, 'El objetivo de la actividad es requerido'] },
        periodicidad: { type: String, required: [true, 'la periodicidad de la actividad es requerido'] },
        anioVigencia: { type: String, required: [true, 'el año de vigencia de la actividad es requerido'] },

    },
    {
        versionKey: false,
        timestamps: true
    }
);

// UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('actividad', actividadSchema);