const { modeloLogin, modeloRegistro }= require('../DTO/modelo.validaciones.usuarios')
const Joi = require('joi')

//MIDDLEWARES PARA VALIDAR LOS DATOS QUE EL USUARIO INTRODUZCA EN REGISTRO Y LOGIN
const revisarRegistro = async  (req,res,next) =>{                        
    try{
        await Joi.attempt(req.body, modeloRegistro, 'Alguno de los datos no es correcto')
        return next()
    }catch(error){
        throw new Error(error);
    }
}

const revisarLogin = async (req,res,next) =>{                            
    try{
        await Joi.attempt(req.body, modeloLogin, 'Alguno de los datos no es correcto')
        next()
    }catch (error){
        throw new Error(error);
    }
}

module.exports = { revisarRegistro, revisarLogin }