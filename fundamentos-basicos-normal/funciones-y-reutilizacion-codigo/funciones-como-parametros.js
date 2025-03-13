// Las funciones pueden pasarse como argumentos a otras funciones

function operacion(number1, number2, callbackFunction) {
    return callbackFunction(number1, number2);
}

// Realizamos la funcion que ira como parametros (usamos una funcion en flecha);
let dividir = (num1, num2) => num1 / num2;

// Usamos la funcion "operacion"
let resultado = operacion(10, 2, dividir);
console.log('El resultado es: ', resultado);
console.log('--------------------------------------');

// Podemos usar casi cualquier funcion:
function sumar(value1, value2) {
    return value1 + value2;
}

// Llamamos a la operacion:
let newResult = operacion(20, 43, sumar);
console.log('Resultado de suma:', newResult);
