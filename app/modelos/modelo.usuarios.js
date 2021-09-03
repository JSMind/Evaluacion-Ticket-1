// Importar los modulos necesarios
const Usuarios = require('../../db/db.modelo.usuarios');
const bcrypt = require('bcrypt');


class ModelosUsuarios {

    inspeccionarUsuario = async(usuario) => {                                    //Metodo de consulta para validar que los datos de acceso del usuario esten registrados en la base de datos 
        try {
            const existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
            
            if (existeUsuario != null){
                const validarcontrasena = await bcrypt.compare(usuario.contrasena, existeUsuario.contrasena);
                if (validarcontrasena){
                    return existeUsuario.id;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el modelo')
        }
    }

    consultaUsuarios = async() => {                                              //Metodo de consulta para enlistar todos los usuarios registrados en la base de datos
        try {
            const consulta = await Usuarios.findAll();
            return consulta;
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el modelo: Error en la consulta')
        }
    }

    crearUsuario = async (usuario) => {                                          //Metodo de consulta para registrar un usuario por primera vez en la base de datos
        try {
            const existeUsuario = await Usuarios.findOne({where: {correo: `${usuario.correo}`}})
            if (existeUsuario == null) {
                const nuevoUsuario = await Usuarios.create({
                    nombres: usuario.nombres,
                    apellidos: usuario.apellidos,
                    correo: usuario.correo,
                    telefono: usuario.telefono,
                    fecha_nacimiento: usuario.fecha_nacimiento,
                    activo: usuario.activo,
                    contrasena: usuario.contrasena,
                    tipo_usuario: usuario.tipo_usuario
                });
                return nuevoUsuario;
            } else {
                throw new Error('Usuario ya registrado')
            }
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }

    eliminarUsuario = async (idUsuario) => {                                     //Metodo de consulta para eliminar un usuario de forma permanente de la base de datos
        try {
            const borrarUsuario = await Usuarios.destroy({where: {id_usuario: `${idUsuario}`}})
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el modelo')
        }
    }

    validarAdministrador = async (idUsuario) => {                                 //Metodo para consultar el tipo de usuario (credencial) de un usuario
        try {
            const resultado = await Usuarios.findOne({where: {id: `${idUsuario}`}})
            const tipoUsuario = resultado.tipo_usuario
            
            return tipoUsuario
        } catch (error) {
            console.log(error);
            throw new Error('Ocurrio un error desde el modelo')
        }
    }

}

module.exports = ModelosUsuarios