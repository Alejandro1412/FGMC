const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let rolesValidos = {
    values: ['adminRol','auxiliar'],
    message: '{VALUE} NO ES UN ROL VALIDO'
}

let usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: [true, 'Un nombre es requerido'] },
    apellido: { type: String, required: [true, 'Un Apellido es requerido'] },
    rol: {  type: String, default: 'auxSena', enum: rolesValidos },
    email: { type: String, unique: true, required: [true, 'Un E-mail es requerido'] },
    password: { type: String, required: [true, 'Su password es requerida'] },
    activeUser: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});
usuarioSchema.methods.encryptPassword = async(password) => {
    let salt = await bcrypt.genSalt(saltRounds);
    let hash = bcrypt.hash(password, salt);
    return hash;
}
//BORRO LA CONRASEÑA DE LOS RESPONSE
usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}
usuarioSchema.plugin(uniqueValidator, { message: '{PATH} DEBE SER UNICO' })
module.exports = mongoose.model('usuario', usuarioSchema);


