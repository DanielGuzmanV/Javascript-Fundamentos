//  Comparaciones:
//  Igualdad:
var numberOne = 5;
var numberTwo = 5;

if (numberOne == numberTwo) {
    console.log("5 es igual a 5");
}

if ( numberOne === numberTwo) {
    console.log("5 es muy igual a 5");
}
console.log("---------------------------------------------");

let varNumber = 5;
console.log(typeof varNumber)
let varString = "5";
console.log(typeof varString)

// == El doble signo solo compara el valor
// === El triple signo compara el valor y el tipo

if (varNumber == varString) {
    console.log("a es igual a b - debil");
}

if (varNumber === varString) {
    console.log("a es igual a b - fuerte");
}
console.log("---------------------------------------------");

//  Desigualdade basica (los que no son iguales)
let numberA = 4;
let numberB = 10;

if (numberA != numberB) {
    console.log("numberA es diferente a numberB - Debil");
}

if (numberA !== numberB) {
    console.log("numberA es diferente a numberB - Fuerte");
}

console.log("---------------------------------------------");

//  Valores iguales, con signos de desigualdad
let c2 = 4;
let d2 = 4;

if (c2 != d2) {
    console.log("C2 es diferente a d2 - Debil");
} else {
    console.log("Son iguales");
}

if (c2 !== d2) {
    console.log("C2 es diferente a d2 - Fuerte");
} else {
    console.log("Son iguales");
}
//No se ejecutaran, por diferencia de valores 
console.log("---------------------------------------------");

//Valores iguales pero con un String 
let c3 = 4;
let d3 = "4";

if (c3!= d3) {
    console.log("C3 es diferente a d3 - Debil");
}

if (c3 !== d3) {
    console.log("C3 es diferente a d3 - Fuerte");
}
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

const z = "59";
const y = "23";

if (y <= z ) {
    console.log("z es mayor que y")
}
