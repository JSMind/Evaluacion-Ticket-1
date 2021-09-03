//En este archivo se encuentran las llamadas al servidor para registrarse como usuario nuevo e iniciar sesion

class UsuariosCalls {

    registroUsuario = async(usuario) => {                                           // Función para crear un nuevo usuario y almacenarlo a la base de datos

        try {
            const nuevoRegistro = await fetch('http://localhost:3000/Usuario/Registro',{
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });
            const respuesta = await nuevoRegistro.json();
            return respuesta;
        } catch (error) {
            
            throw new Error ('Error en la llamada para el registro de usuario')
        }
    }

    nuevoIngreso = async (usuario) =>{                                              // Función para realizar un login
        try {
            const iniciarSesion = await fetch('http://localhost:3000/Usuario/Login',{
                method: 'post',
                headers: {
                    "Accept": "application/json, text/plain, *,*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            })
            const respuesta = await iniciarSesion.json();
            return respuesta;
        } catch (error) {
            throw new Error ('Error en la llamada para el inicio de sesion de usuario')
        }
    }

}