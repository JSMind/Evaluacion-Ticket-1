// Dar de alta las variables globales
const btnNuevoRegistro = document.getElementById("sign-in");
const signUpCalls = new UsuariosCalls()
const validacionSignUp = new Validaciones()


// Función para capturar los datos del usuario
btnNuevoRegistro.addEventListener('click', async(e) => {
  
  const usuario = {                                                 //Se declara un objeto con los valores ingresados por el usuario para registrarse
      nombres: document.getElementById('firstName').value,
      apellidos: document.getElementById('lastName').value,
      correo: document.getElementById('email').value,
      telefono: document.getElementById('phone').value,
      fecha_nacimiento: document.getElementById('date').value,
      activo: true,
      contrasena: document.getElementById('txtPassword').value,
      tipo_usuario: 2
    }

    //Validaciones de los datos ingresados en el formulario para que un usuario se registre
    try {
      validacionSignUp.validarTxt(usuario.nombres,'Nombre(s)');                    //Las funciones se encuentran definidas en el archivo signupcalls
      validacionSignUp.validarTxt(usuario.apellidos,'Apellido(s)');
      validacionSignUp.validarOtros(usuario.fecha_nacimiento,'Fecha de nacimiento')
      validacionSignUp.validarOtros(usuario.telefono,'Telefono')
      validacionSignUp.validarEmail(usuario.correo);
      validacionSignUp.validarContrasena(usuario.contrasena);
      e.preventDefault();
      e.stopPropagation();

      const registro = await signUpCalls.registroUsuario(usuario);               //Se invoca la funcion "registroUsuario", pasando como argumento el objeto "Usuario" para realizar la llamada al servidor del metodo correspondiente para crear el usuario
      
      if (registro){
        alert(`${registro.message}`)
        location.href="http://localhost:3000/login";
      }
    } catch (error) {                                               //En caso fallido se captura el error
      alert(`Error: ${error.message}`);
    }
  }
)