// Vemos el uso de "try - catch" para controlar los errores
// Donde "try" puede generar un error y "catch" es el encargado de manejar el error

try {
    let mensaje = 5;
    mensaje.toUpperCase();
    console.log(mensaje);
} catch (error) {
    console.error('Error de sintaxis:', error.message);
}
console.log('---------------------------------------------');

try {
    let result = 10/0;
    if(result === Infinity) {
        throw new Error('No se puede dividir por cero');
    }
    console.log(result);
} catch (error) {
    console.log('Se ha producido un ERROR', error.message);
}



