// Importar los modulos necesarios
const ControladorUsuarios = require('../controladores/controlador.usuarios');
const  controlador = new ControladorUsuarios();
const middUsuarios = require('../../middelwares/midd.usuarios');
const middVadilaciones = require('../../middelwares/midd.validaciones.usuarios');



// Construir y exportar los modulos
module.exports = async (app) => {

    //METODOS A LOS CUALES SOLO PODRA ACCEDER EL ADMINISTRADOR PARA MOSTRAR TODOS LOS USUARIOS DE LA BD Y ELIMINAR PERMANENTEMENTE A UN USUARIO
    app.get('/Usuarios', middUsuarios.validarUsuarioAdministrador, async (req,res) => {                                          
        try {
            const consultaUsuarios = await controlador.listarUsuarios();
            
            res.status(200).json({message: 'Consulta exitosa', consultaUsuarios});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.delete('/Usuarios/:idUsuario', middUsuarios.validarUsuarioAdministrador,   async (req,res) => {                             
        const  idUsuario = req.params.idUsuario;
        try {
            const  eliminarUsuario = await controlador.eliminarUsuario(idUsuario);
            res.status(200).json({message: 'El usuario se elimino correctamente'});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    // METODOS PARA REALIZAR UN REGISTRO DE USUARIO E INICIAR SESION
    
    app.post('/Usuario/Registro',middVadilaciones.revisarRegistro, async(req,res) => {                                     
        const  usuario = req.body
        try {
            const  nuevoUsuario = await controlador.crearUsuario(usuario)
            
            res.status(200).json({message: 'Registro de usuario exitoso', nuevoUsuario})
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }
    })

    app.post('/Usuario/Login', middVadilaciones.revisarLogin, async(req,res) => {                                          
        const  usuario = req.body
        try {
            const  inspeccionarUsuario = await controlador.inspeccionarUsuario(usuario);
            if (inspeccionarUsuario){
                const idUsuario = inspeccionarUsuario
                const  validacion = await controlador.generarToken(idUsuario)               
                
                res.header('authorization',validacion).json({validacion})
            }else{
                res.status(200).json({message: 'Credenciales incorrectas'})
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })
}

