// Podemos crear nuestras propias excepciones personalizadas, mediante la 
// creacion de una clase. Esto nos permite lanzar errores con mensajes y propiedades personalizadas

class CustomError extends Error {
    constructor(customMessage) {
        super(customMessage);
        this.nameClass = 'CustomErrorInClass';
    }
}

try {
    throw new CustomError('Esto es un error personalizado...');
} catch (error) {
    console.log(`${error.nameClass}: ${error.message}`);
} finally {
    console.log('Este siempre se ejecutara...');
}

// ----------------------------------------------------------------









