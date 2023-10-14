let loguin


verificarLoguin()

function verificarLoguin(){
   let loguinEstado = document.getElementById('iniciar')

   if (loguin === 1){
       loguinEstado.textContent = 'Bienvenido'
    } else{
       loguinEstado.textContent = 'Iniciar sesión'
    }

}

 let nombreUsuario
 let passUsuario

function IniciarSesion(){
    nombreUsuario = document.getElementById('usuario').value
    passUsuario = document.getElementById('contrasenia').value
    if (nombreUsuario === 'federicov' && passUsuario === '123'){
        loguin = 1
        cerrarLoguin()
        alert('Bienvenido')
     } else {
        alert('Usuario o contraseña incprrectos')
        loguin = 0
     }
     verificarLoguin()
}
function cerrarLoguin() {
   $('#modalLoguin').modal('hide');
}


