// Los operadores logicos son:
// AND, OR, NOT

let valorBool1 = false;
let valorBool2 = true;

// Primer operador AND (&&)
console.log(true && true);
console.log(false && true);

console.log("Operador And", valorBool1 && valorBool2);
console.log("Operador And", valorBool1 && valorBool1);
console.log("Operador And", valorBool2 && valorBool2);
console.log("Operador And", valorBool2 && valorBool1);

console.log('---------------------------------------------');

// Segundo operador OR (||)
console.log(true || true);
console.log(false || true);

console.log("Operador OR", valorBool1 || valorBool2);
console.log("Operador OR", valorBool1 || valorBool1);
console.log("Operador OR", valorBool2 || valorBool2);
console.log("Operador OR", valorBool2 || valorBool1);

console.log('---------------------------------------------');

// Tercer operador NOT (!)
console.log("Operador NOT", !valorBool1);
console.log("Operador NOT", !valorBool2);
console.log("Operador NOT", !!valorBool1);
console.log("Operador NOT", !!valorBool2);

console.log('---------------------------------------------');

// Short - circuit:
// Valores que se evaluan como false:

/**
 * false
 * 0
 * "" o ''
 * null
 * undefined
 * NaN
 */

// Usamos el operador OR
let nameExample1 = '';
let nameUser1 = nameExample1 || 'Anonimo';

// Nos saldria "Anonimo" ya que la variable "nameExample1" no fue definida 
console.log(nameUser1);
console.log('---------------------------------------------');

let nameExample2 = 'Marcelo';
let nameUser2 = nameExample2 || 'Anonimo';

// Nos saldria "Marcelo" ya que la variable "nameExample2" ya fue definida
console.log(nameUser2);
console.log('---------------------------------------------');

// Usamos el operador AND en funciones:
function funcionEjemplo1() {
    console.log('Soy la funcion de ejemplo 1');
    return true;
}

function funcionEjemplo2() {
    console.log('Soy la funcion de ejemplo 2');
    return true;
}

// Nos saldra el resultado de ambas funciones, ya que ambas son true
let resultadoFuncion1 = funcionEjemplo1() && funcionEjemplo2();
console.log('---------------------------------------------');
function funcionEjemplo3() {
    console.log('Soy la funcion de ejemplo 3');
    return false;
}

function funcionEjemplo4() {
    console.log('Soy la funcion de ejemplo 4');
    return true;
}

// Nos saldria el resultado de una funcion, ya que una es false
let resultadoFuncion2 = funcionEjemplo3() && funcionEjemplo4();









