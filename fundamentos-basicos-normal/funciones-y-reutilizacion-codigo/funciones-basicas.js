// Creamos una funcion que no retorna nada:
function saludar() {
    console.log('Hola mundo, que tal?');
}
// Llamamos a la funcion:
saludar();
console.log("-------------------------------------------------");

// Creamos una funcion que retorna un valor:
function multiplicacion() {
    let number1 = 5;
    let number2 = 2;
    let resultado = number1 * number2;
    
    return resultado;
}
// Llamamos a la funcion:
console.log("El resultado es: " + multiplicacion());

// El resultado podemos agregarlo en una variable:
let resultadoMultiplicacion = multiplicacion();
console.log("El resultado en variable es: " + resultadoMultiplicacion);
