// Importar los modulos necesarios
const ControladorUsuarios = require('../controladores/controlador.usuarios');
const  controlador = new ControladorUsuarios();
const midd = require('../../middelwares/midd.usuarios')


// Construir y exportar los modulos
module.exports = async (app) => {

    //METODOS A LOS CUALES SOLO PODRA ACCEDER EL ADMINISTRADOR PARA MOSTRAR TODOS LOS USUARIOS DE LA BD Y ELIMINAR PERMANENTEMENTE A UN USUARIO
    app.get('/Usuarios', async (req,res) => {                                          
        try {
            const consultaUsuarios = await controlador.listarUsuarios();
            
            res.status(200).json({message: 'Consulta exitosa', consultaUsuarios});
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: 'Ocurrio un error en el servidor', error: error.message});
        }
    })

    app.delete('/Usuarios/:idUsuario', async (req,res) => {                             
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
    
    app.post('/Usuario/Registro', midd.revisarRegistro, async(req,res) => {                                     
        const  usuario = req.body
        try {
            const  nuevoUsuario = await controlador.crearUsuario(usuario)
            
            res.status(200).json({message: 'Registro de usuario exitoso', nuevoUsuario})
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }
    })

    app.post('/Usuario/Login', midd.revisarLogin, async(req,res) => {                                          
        const  usuario = req.body
        try {
            const  inspeccionarUsuario = await controlador.inspeccionarUsuario(usuario);
            
            if (inspeccionarUsuario){
                const  validacion = await controlador.generarToken(usuario)               
                
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

