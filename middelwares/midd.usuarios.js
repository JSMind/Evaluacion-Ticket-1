//Importar los modulos requeridos
const rateLimit = require('express-rate-limit')
const ControladorUsuarios = require('../app/controladores/controlador.usuarios')
const controlador =  new ControladorUsuarios()

//MIDDLEWARE PARA LIMITAR LAS CONSULTAS UN USUARIO
const limiteConsultas = rateLimit({
    windowMs: 2*60*1000,
    max: 100,
    message: 'Exedio la cantidad maxima de consultas'
})

//MIDDLEWARES PARA VALIDACIONES DE ACCESO
const usuarioValido = async (req,res,next) =>{                          
    try {
        if (req.header('authorization')){
            const token = req.header('authorization').split(' ')[1]
            const verificado = await controlador.verificarUsuario(token);
            req.params.usuario = verificado;
            return next();
        } else {
            throw new Error ('Este es un sistema seguro y requiere autorización');
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: 'Ocurrio un error al validar el usuario', error: error.message});
    }
}

const validarUsuarioAdministrador = async (req, res, next) =>{
    try{
        if (req.header('authorization')){
            const token = req.header('authorization').split(' ')[1]
            const verificado = await controlador.verificarUsuario(token);
            const idUsuario = await controlador.decifrarToken(token)
            const validarAdministrador = await controlador.validarAdministrador(idUsuario)
                if (validarAdministrador == 1){
                    return next();
                }else{
                    throw new Error ('Acceso Denegado');
                }

        } else {
            throw new Error ('Este es un sistema seguro y requiere autorización');
        }
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: 'Ocurrio un error al validar el usuario administrador', error: error.message});
    }


}




module.exports = {limiteConsultas, validarUsuarioAdministrador, usuarioValido }

