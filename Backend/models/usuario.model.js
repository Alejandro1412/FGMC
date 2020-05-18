const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validRoles = {
    values: ['TH_ROLE', 'ENGINEER_ROLE'],
    message: '{VALUE} NO ES UN ROL VALIDO'
}

var usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Un nombre es requerido'] },
    apellido: { type: String, required: [true, 'Un Apellido es requerido'] },
    idRol: { type: String, required: [true, 'Un rol es requerido'], enum: validRoles },
    email: { type: String, unique: true, required: [true, 'Un E-mail es requerido'] },
    contraseña: { type: String, required: [true, 'A password is required'] },
    idCArgo: { type: String, required: [true, 'Un rol es requerido'], enum: validRoles },
    date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('usuario', usuarioSchema);

//userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' })
//module.exports = mongoose.model('users', userSchema);