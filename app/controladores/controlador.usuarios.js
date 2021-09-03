// Importar los modulos a utilizar
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const ModelosUsuarios = require('../modelos/modelo.usuarios');
const  modelo = new ModelosUsuarios();


class ControladorUsuarios {
    
    listarUsuarios = async () => {                                      //Controlador que conecta con el metodo consultaUSuarios para listar todos los usuarios
        try {
            const consultaUsuarios = await modelo.consultaUsuarios();
            
            return consultaUsuarios;
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el controlador');
        }
    }

    crearUsuario = async (usuario) => {                                 //Controlador que conecta con el metodo crearUsuarios para la creacion de un Usuario
        try {
            const saltos = await bcrypt.genSalt(15)                      //Se encripta la contraseña del usuario para darle mayor seguridad con la libreria bcrypt
            const contrasena = await bcrypt.hash(usuario.contrasena, saltos)
            usuario.contrasena = contrasena                                  
            const nuevoUsuario = await modelo.crearUsuario(usuario)
            
            return nuevoUsuario;
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    eliminarUsuario = async (idUsuario) => {                             //Controldor que conecta con el metodo eliminarUsuario para la eliminacion de un Usuario 
        try {
            const borrarUsuario = await modelo.eliminarUsuario(idUsuario);

        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el controlador');
        }
    }

    inspeccionarUsuario = async(usuario) =>{                             //Controlador que conecta con el metodo insepeccionarUsuario para realizar la validacion de los datos de acceso
        try {
            const usuarioValido = await modelo.inspeccionarUsuario(usuario);
            
            if (usuarioValido){
                return usuarioValido;
            }else{
                
                return false
            }
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el controlador');
        }
    }

    generarToken = async(usuario) => {                                   //Controlador que genera el token
        try {
            const token = jwt.sign({usuario}, process.env.SECRET_KEY);     //Tiempo máximo de validez de 15 min
            
            return token;
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el controlador');
        }
    }

    verificarUsuario = async(token) =>{                                  //Controlador que verifica el token con la Secret Key 
        try {
            const validacion = jwt.verify(token, process.env.SECRET_KEY);
            
            if(validacion){
                return validacion;
            }else{
                throw new Error('Token no valido')
            }

        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el controlador');
        }
    }
}



module.exports = ControladorUsuarios