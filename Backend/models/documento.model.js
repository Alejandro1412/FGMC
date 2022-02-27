const mongoose = require('mongoose');

let documentoSchema = new mongoose.Schema(
    {
        nombreDocumento: { type: String, required: [true, 'El nombre del documento es requerido'] },
        urlDocumento: { type: String, required: true, unique: true, default: 'https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png' },
        // fechaSubido: { type: Date, default: Date.now }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

// UserScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('documento', documentoSchema);