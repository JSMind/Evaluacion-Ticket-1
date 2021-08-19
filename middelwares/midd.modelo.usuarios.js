//Importar los modulos necesarios a utilizar
const Joi = require('joi');

//Exportar Modulos

module.exports = {
    modeloLogin: Joi.object().keys({
        correo: Joi.string().email().max(40).require(),
        contrasena: Joi.string.regex(/^[a-zA-Z0-9]{8,15}$/).min(8),required()
    }).with('correo', 'contrasena'),

    modeloRegistro: Joi.object().keys({
        nombres: Joi.string().min(4).max(50).required(),
        apellidos: Joi.string().min(4).max(50).required(),
        correo: Joi.string().email().max(40).required(),
        telefono: Joi.string().min(10).max(15)




    })
}

