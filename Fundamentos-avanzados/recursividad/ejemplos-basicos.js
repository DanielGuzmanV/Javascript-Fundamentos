// Recursividad:
// Es una tecnica en la que una funcion se llama a si misma para resolver
// un problema que se puede dividir en subproblemas del mismo tipo
// Estructura general:
// function recursiva(params) {
//     if (condición base) {
//         return resultado base;
//     } else {
//         // llamada recursiva con una versión reducida del problema
//         return recursiva(parametroModificado);
//     }
// }

// =======================================================
// Ejemplo 1: factorial de un numero:
function factorial(number) {
    if(number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

let result = factorial(5);
console.log('El factorial es:', result);

console.log('===========================================');

// Ejemplo 2: contar hasta 0 (descendente):
function cuentaRegresiva(number) {
    if(number <= 0) {
        return;
    }
    console.log('El numero es:', number);
    cuentaRegresiva(number - 1);
}

cuentaRegresiva(5);

console.log('===========================================');

// Ejemplo 3: realizar una funcion fibonacci
function fibonacci(number) {
    if(number <= 1) return number;
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log('resultado', fibonacci(5));

// Ejemplo 4: Ver si un numero es para o impar
function esPar(number) {
    if(number === 0) return true;
    if(number === 1) return false;

    return esPar(number - 2);
}

console.log('Es par:', esPar(10));
console.log('Es par:', esPar(7));

console.log('===========================================');

// Ejemplo 5: Ver si un numero es primo
function esPrimo(number, divisor = 2) {
    if(number < 2) return false;
    
    if(divisor > Math.sqrt(number)) return true;

    if(number % divisor === 0) return false;

    return esPrimo(number, divisor + 1);
}

console.log('Es primo', esPrimo(7));
console.log('Es primo', esPrimo(10));

console.log('===========================================');

// Ejemplo 6: ver si una palabra es palindroma
function esPalindromo(paramString) {
    if(paramString.length <= 1) return true;
    if(paramString[0] !== paramString[paramString.length - 1] ) return false;

    return esPalindromo(paramString.slice(1, -1));
}

console.log('Es palindromo:', esPalindromo('oso'));
console.log('Es palindromo:', esPalindromo('carro'));
console.log('Es palindromo:', esPalindromo('reconocer'));

