let loguin

loguin = 0

let loguinEstado = document.getElementById('iniciar')

if (loguin === 0){
    loguinEstado.textContent = 'Iniciar sesión'
 } else{
    loguinEstado.textContent = 'Bienvenido'
 }

 let nombreUsuario
 let passUsuario

function IniciarSesion(){

    nombreUsuario = document.getElementById('usuario').value
    passUsuario = document.getElementById('contrasenia').value
    if (nombreUsuario === 'federicov' && passUsuario === '123'){
        loguin = 1
        modalLoguin.hide()
        alert('Inicio de sesión exitoso')
     } else {
        alert('Usuario o contraseña incprrectos')
        loguin = 0
     }
}

 

