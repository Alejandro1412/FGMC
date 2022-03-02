const mongoose = require('mongoose');

let accionCorrectivaSchema = new mongoose.Schema(
    {
        responsable: { type: String, required: [true, 'El responsable es requerido'] },
        gravedad: { type: String, required: [true, 'la gravedad es requerida'] },
        descripcionProblema: { type: String, required: [true, 'la descripción es requerida'] },
        descpcionMejora: { type: String, required: [true, 'La descripción es requerido'] },
        fechaSolucion: { type: Date, required: [true, 'La fecha es requerida'] }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('accionCorrectiva', accionCorrectivaSchema);