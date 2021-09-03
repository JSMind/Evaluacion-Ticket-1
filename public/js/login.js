// Variables globales
const btnLogin = document.getElementById("login");
const loginCalls = new UsuariosCalls()
const validacionLogin = new Validaciones()



// Función para capturar los datos del usuario
btnLogin.addEventListener('submit', async(e) =>{
    let usuario = {
        correo: document.getElementById("inputEmail").value,
        contrasena: document. getElementById("inputPassword").value
    }
    try {
        e.preventDefault()
        validacionLogin.validarEmail(usuario.correo);
        validacionLogin.validarContrasena(usuario.contrasena);
        let iniciarSesion = await loginCalls.nuevoIngreso(usuario);
        if(iniciarSesion.validacion){
            usuario.token = iniciarSesion.validacion;
            localStorage.setItem('token', JSON.stringify(usuario.token))
            window.location.href = "http://localhost:3000/home"
        }else{
            alert(`Error: ${iniciarSesion.message}`)
        }    
    } catch (error) {
        console.log(error);
        alert(`Error: ${error.message}`);
    }
})