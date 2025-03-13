// Si no se pasan valores, su valor es "undefined"

// Ejemplo 1:
function funcionSaludo( nombre = 'Invitado') {
    console.log('Hola que tal', nombre);
}

// No ponemos nada en el parametro
funcionSaludo();

// Ponemos un argumento
funcionSaludo('Marcus');
console.log('--------------------------------------');

// Ejemplo 2:
function sumarNumeros(number1 = 0, number2 = 0) {
    return number1 + number2;
}

let resultado1 = sumarNumeros(2);
let resultado2 = sumarNumeros(5, 10);
let resultado3 = sumarNumeros();

console.log('Resultado de la primera suma:', resultado1);
console.log('Resultado de la segunda suma:', resultado2);
console.log('Resultado de la tercera suma:', resultado3);
console.log('--------------------------------------');

// Pero que pasaria no ponemos los parametros opcinales
// Ejemplo:
function funcionMultiplicar(valor1, valor2) {
    return valor1 * valor2;
}
let result1 = funcionMultiplicar(5);
let result2 = funcionMultiplicar(3, 8);
let result3 = funcionMultiplicar();

console.log('Resultado de la primera multiplicacion:', result1);
console.log('Resultado de la segunda multiplicacion:', result2);
console.log('Resultado de la tercera multiplicacion:', result3);
// Como vemos en la primera y tercera nos saldra "NaN"

