// Exportamos una funcion
module.exports.multiplicar = (value1, value2) => value1 * value2;

// ------------------------------------------
// Usamos funciones externas:
module.exports.funcionSaludo = saludar;
module.exports.funcionSuma = sumarElementos();


function sumarElementos() {
    return 20 + 41;
}

function saludar(name ) {
    console.log('Hola',name, 'estamos usamos CommonJS');
}
