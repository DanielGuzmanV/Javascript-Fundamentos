// Exportamos una funcion
module.exports.multiplicar = (value1, value2) => value1 * value2;

// ------------------------------------------
// Usamos funciones externas:
module.exports.funcionesExterna1 = saludar;
module.exports.funcionesExterna2 = sumarElementos();


function sumarElementos() {
    return 20 + 41;
}

function saludar(name ) {
    console.log('Hola',name, 'estamos usamos CommonJS');
}
