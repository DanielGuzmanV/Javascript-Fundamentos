// Para manejar diferentes tipos de errores, utilizamos condiciones
// dentro del mismo bloque
try {
    let number = 'Hola';
    let result = number * 50;
    console.log(result);

} catch (error) {
    if(error instanceof TypeError) {
        console.log('Error de tipo:', error.message);
    } else if( error instanceof ReferenceError) {
        console.log('Error de referencia:', error.message);
    } else if( error instanceof RangeError){
        console.log('Error de rango:', error.message);
    } else {
        console.log('Error desconocido:', error.message);
    }
}

