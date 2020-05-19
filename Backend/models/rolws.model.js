var mongoose = require('mongoose');

var rolSchema = mongoose.Schema({
    IdRol: Number,
    Nombre: String,
});

module.exports = mongoose.model('roles', rolSchema);