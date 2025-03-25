
// Declaramos algunas variables para compararlas:
let number1 = 10;
let number2 = 5;
let numberString = '10';

console.log("Comparadores relacionales:");
console.log(number1, " > ", number2, (number1 > number2));
console.log(number1, " >= ", number2, (number1 >= number2));
console.log(number1, " > ", number1, (number1 > number1));
console.log(number1, " < ", number1, (number1 < number1));
console.log(number1, " <= ", number1, (number1 <= number1));
console.log("---------------------------------------------");

console.log("Operadores de igualdad:");
console.log(number1, " == ", number1, (number1 == number1));
console.log(number1, " != ", number1, (number1 != number1));
console.log(number1, " == ", numberString, (number1 == numberString)); // Igualdad por valor
console.log(number1, " === ", numberString, (number1 === numberString)); // Igualdad por identidad(por tipo y valor)
console.log(number1, " !== ", numberString, (number1 !== numberString));

console.log("---------------------------------------------");

let varNumber = 5;
let varString = "5";

console.log("verificamos el tipo de dato:")
console.log(`${varNumber} es de tipo: ${typeof varNumber}`)
console.log(`${varString} es de tipo: ${typeof varString}`);

console.log("---------------------------------------------");

// == El doble signo solo compara el valor
// === El triple signo compara el valor y el tipo
console.log("Comparacion y igualdad del tipo y dato:")

console.log(varNumber, '==', varNumber, 'en valor ?', (varNumber == varNumber));
console.log(varNumber,'===',varNumber,'en tipo y dato ?', (varNumber === varNumber));
console.log(varNumber, '==', varString, 'en valor ?', (varNumber == varString));
console.log(varNumber, '===', varString, 'en tipo y dato ?', (varNumber === varString));
console.log(varNumber, '!=', varString, 'en valor ?', (varNumber != varString));
console.log(varNumber, '!==', varString, 'en tipo y dato ?', (varNumber !== varString));

console.log("---------------------------------------------");

//Comparaciones de desigualdades de mayores y menores
let a4 = 10;
let b4 = 5;

if (a4 > 9 ) {
    console.log("a4 es mayor que b4");
}
//aqui nos indica que si realmente A es mayor a B; por eso se ejecuta la consola
if (a4 >= b4) {
    console.log("a4 es mayor o igual que b4");
}
//aqui indicaria que A si es mayor a B, pero no es igual; igualmente se ejecuta la consola
if (a4 >=10) {
    console.log("a4 es mayor o igual que b");
}
//aqui indica que A no es mayor a 10 si no que son iguales: y aun se ejecuta la consola
console.log("---------------------------------------------");

if (b4 < a4) {
    console.log("b4 es menor que a4");
}
//aqui nos indica que B realmente es menor a A; por eso se ejecuta la consola
if (b4 <= a4) {
    console.log("b4 es menor o igual que a4");
}
//aqui indicaria que B es menor a A pero no son iguales: igualmente se ejecuta la consola
if (b4 <= 5 ) {
    console.log("b4 es menor o igual que a");
} 
//aqui indica que B no es mayor a 5 si que son iguales; y aun asi se ejecuta la consola
console.log("---------------------------------------------");
