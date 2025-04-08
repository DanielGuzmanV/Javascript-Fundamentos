// Ejemplo practico de Rest;
// Funcion que recibe datos flexibles de usuario
function crearPerfil(nombre, edad, ...extras) {
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('Otros datos:', extras);
}

// Creamos el perfil:
crearPerfil('Marco', 25, 'Mexico', 'Developer', 'Gamer');






