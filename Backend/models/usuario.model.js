const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');

let validRoles = {
    values: ['USER_ROLE','TH_ROLE', 'ENGINEER_ROLE'],
    message: '{VALUE} NO ES UN ROL VALIDO'
}

var usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Un nombre es requerido'] },
    apellido: { type: String, required: [true, 'Un Apellido es requerido'] },
    rol: {  type: String, default: 'USER_ROLE', enum: validRoles },
    email: { type: String, unique: true, required: [true, 'Un E-mail es requerido'] },
    contraseña: { type: String, required: [true, 'Su password es requerida'] },
    date: { type: Date, default: Date.now }
});

// userSchema.methods.encryptPassword = async(password) => {
//     let salt = await bcrypt.genSalt(saltRounds);
//     let hash = bcrypt.hash(password, salt);
//     return hash;
// }

module.exports = mongoose.model('usuario', usuarioSchema);

//usuarioSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' })
//module.exports = mongoose.model('usuario', usuarioSchema);