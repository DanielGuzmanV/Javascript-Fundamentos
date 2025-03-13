// Funciones asignadas a variables. 
// No tienen hoisting (no pueden usarse antes de ser declaradas)

// Podemos expresarlo de esta forma (Sin parametros):
const funcionResta = function() {
    console.log('La resta es:', (5 - 4));
}
funcionResta();
console.log('------------------------------------');

// De esta forma:
const funcionResta2 = function () {
    return 20 - 10;
}
console.log(`El resultado es: ${funcionResta2()}`);
console.log('------------------------------------');

// O de esta ultima forma:
let funcionResta3 = function() {
    var result = 59 - 29;
    return result
}
let resultado = funcionResta3();
console.log(`Nuevo resultado: ${resultado}`);
console.log('------------------------------------');

// Tambien podemos hacerlo con parametros:
let funcionSuma = function (number1, number2) {
    return number1 + number2;
}
console.log(`La suma es: ${funcionSuma(38, 13)}`);
// Tambien tiene varias formas de expresarse, al igual que las funciones sin parametros



