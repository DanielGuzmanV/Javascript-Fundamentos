// Exportamos una funcion:
export const multiplicar = (value1, value2) => value1 * value2;

// -----------------------------------------------
// Exportamos funciones externas:
export const funcionExterna = sumaValores;
export const funcionExterna2 = saludarJs;
export const funcionExterna3 = sumaActiva;
export const funcionExterna4 = saludoActivo;



// Funciones externas:
function sumaValores (number1 , number2) {
    return number1 + number2
}

function saludarJs(name) {
    return `Hola ${name}, estamos usando ESM`
}

function sumaActiva() {
    return 54 + 12;
}

function saludoActivo() {
    console.log('Hola mundo, soy una importacion');
}







