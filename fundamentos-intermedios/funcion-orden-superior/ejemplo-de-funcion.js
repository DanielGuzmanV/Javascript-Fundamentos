// Estas funciones son aquellas que:
// - Reciben una funcion como argumento
// - Retornan otra funcion
// las tres funciones mas usadas son: filter(), map() y reduce()

// Ejemplo 1:
// Creamos la funcion que recibira otra funcion
function operacion(valor, funcion) {
    return funcion(valor);
}

// Llamamos a la funcion, y podemos poner una funcion directa
const resultado = operacion(5, num => num * 2);
console.log('Resultado es:', resultado);

// Tambien podemos usar funciones aparte:
function sumar(value1) {
    return value1 + value1;
}

function duplicar(num) {
    return num * 2;
}

function cuadrado(num) {
    return num * num;
}

// Llamamos a la operacion:
let result1 = operacion(20, sumar);
let result2 = operacion(100, duplicar);
let result3 = operacion(8, cuadrado);

console.log('Resultado de suma:', result1);
console.log('Numero duplicado:', result2);
console.log('Cuadrado del numero:', result3);
console.log('-------------------------------------------');

// ----------------------------------------------------------------
// Ejemplo 2: 
// Creamos una funcion que retorna otra funcion:
function crearMultiplicador(valueFactor) {
    return function (valueNumber) {
        return valueNumber * valueFactor;
    }
}

// Usamos la primera funcion:
let resultado1 = crearMultiplicador(4);
let resultado2 = crearMultiplicador(5);

// Ahora usamos la segunda funcion:
let resultadoFinal1 = resultado1(2);
let resultadoFinal2 = resultado2(3);

console.log(`El primer resultado es: ${resultadoFinal1}`);
console.log(`El segundo resultado es: ${resultadoFinal2}`);
console.log('-------------------------------------------');

// -------------------------------------------------------------------
// Ejemplo 3:
// Usamos una funcino externa dentro de una funcion:

// Creamos la funcion externa
function multiplicar(num, value) {
    return num * value;
}

function sumar(num1, num2){
    return num1 + num2;
}

function funcionMultiplicar(numberValue) {
    return function(number) {
        return multiplicar(number, numberValue);
    }
}

let primerResultado = funcionMultiplicar(3);
const ultimoResultado = primerResultado(4);

console.log(`El resultado es: ${ultimoResultado}`);
console.log('-------------------------------------------');

// Uso de map(), filter() y reduce()
function procesarNumeros(valueNumber) {
    return function(listNumbers) {
        return listNumbers
        .map(num => multiplicar(num, valueNumber))
        .filter(num => num % 2 === 0)
        .reduce(sumar, 0);
        
    }
}

let arrayNumbers = [1, 2, 3, 4, 5, 6];

let operacion1 = procesarNumeros(3);
const resultadoOperacion1 = operacion1(arrayNumbers);
console.log('Resultado final:', resultadoOperacion1);

