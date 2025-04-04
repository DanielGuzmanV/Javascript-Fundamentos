// Estas son funciones que conservan el acceso al entorno en el que fueron creadas
// incluso despues de que la funcion externa haya terminado  de ejecutarse

// Ejemplo:
function crearContador() {
    
    // Variable dentro de la funcion externa
    let contador = 0; 
    
    // Funcion interna es el closure
    return () => {
        contador++;
        console.log(contador);
    }
}

// Llamamos a la funcion  externa
const contador1 = crearContador();
const contador2 = crearContador();

// Vemos que la cada vez que llamamos la funcion del contador no se reinicia
// a no ser que se cree un nuevo contador
contador1();
contador1();
contador1();

console.log("--------------------------------");

contador2();
contador2();
contador2();











