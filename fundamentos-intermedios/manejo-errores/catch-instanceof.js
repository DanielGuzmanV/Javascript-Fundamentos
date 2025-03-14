// Podemos usar un "instanceof" para verificar el tipo de error

try {
    throw new TypeError('Este es un error de tipo');
} catch (error) {
    if(error instanceof TypeError) {
        console.log('Ha ocurrido un error:', error.message);
    } else{
        console.log('Otro tipo de error:', error.message)
    }
}

// ----------------------------------------------------------------
console.log("---------------------------------------------------");
function verificarEdad(edad) {
    if (typeof edad !== 'number') {
        throw new TypeError('El argumento debe ser un number');
    } else if(edad < 0) {
        throw new RangeError("La edad no puede ser negativa");
    }
    return edad;
}

try {
    // verificarEdad('Hola');
    // verificarEdad(-23);
    verificarEdad(hello);
    
} catch (error) {
    if (error instanceof RangeError) {
        console.log("Error de rango en:", error.message);  // Esto imprimirá "Error de rango: La edad no puede ser negativa"
    } else if (error instanceof TypeError) {
        console.log("Error de tipo de dato:", error.message);
    } else if(error instanceof ReferenceError) {
        console.log("Error de referencia: El dato ingresado no esta definido");
    } else {
        console.log('Error de otro tipo:', error.message);
    }
}




