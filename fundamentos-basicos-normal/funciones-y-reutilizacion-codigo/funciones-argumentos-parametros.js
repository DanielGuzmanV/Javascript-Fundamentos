// Uso de argumentos y parametros:
// Ejemplo:
function operacion1(date) {
    return date + 2;
}
console.log("Resultado 1: " + operacion1(5));

function operacion2(date1, date2) {
    let resultado = date1 + date2;
    return resultado;
}
let resultadoVariable = operacion2(23, 10);
console.log("Resultado 2: " + resultadoVariable);
console.log("--------------------------------------------");

// Funcion con parametros:
function suma(numberOne, numberTwo) {
    let suma = numberOne + numberTwo;
    return suma;
}
// Llamamos a la funcion:
console.log("El resultado de la suma es: " + suma(10, 20));

// Tambien el resultado podemos ponerlo en una variable:
let resultadoSuma = suma(5, 5);
console.log("Resultado en variable: " + resultadoSuma);
console.log("--------------------------------------------");

// Funcion para referenciar a todos los valores de la funcion "sumaValores"
function sumaValores(number1, number2) {
    console.log(arguments);
    return number1 + number2;
}
// Solo se sumara los 2 primeros valores, los demas no los tomara en cuenta
let resultado = sumaValores(7,2,5,4,3);
console.log(resultado);
console.log("--------------------------------------------");


