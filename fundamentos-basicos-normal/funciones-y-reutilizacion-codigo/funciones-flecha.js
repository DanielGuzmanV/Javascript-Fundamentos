// Esta funcion es mas corta, pero no tiene su propio "this"

// Con parametros:
let funcionMultiplicar = (number1, number2) => number1 * number2;
let resultado = funcionMultiplicar(5, 4);
console.log(`El resultado es: ${resultado}`);
console.log('-----------------------------------------');

let funcionMultiplicar2 = (number1, number2) => console.log('Resultado es:', (number1 * number2));
funcionMultiplicar2(45, 23);
console.log('-----------------------------------------');

// Sin parametros:
let funcionMultiplicar3 = () => 34 * 2;
console.log(`Resultado: ${funcionMultiplicar3()}`);
console.log('-----------------------------------------');

const funcionMultiplicar4 = () => console.log("Resultado nuevo:", (23 * 5));
funcionMultiplicar4();



