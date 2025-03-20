// La desestruccion en array:
// Nos permite extraer valores de un array y 
// asignarlos a variables de forma mas clara

// Ejemplo 1 sin desestructuracion:
console.log('sin desestructuracion')
const arrayNumeros = [10, 20, 30, 40];

// Aqui accedemos manualmente a los valores del array
const primerNumero = arrayNumeros[0];
const segundoNumero = arrayNumeros[1];

console.log(primerNumero);
console.log(segundoNumero);

console.log('------------------------------------');

// Ejemplo 2 con desestructuracion:
console.log("Con desestructuracion");
const nuevoArray = [1, 3, 5, 7, 9];

// Aqui accdemos de manera directa y mas limpia
const [value1, value2] = nuevoArray;

console.log(value1);
console.log(value2);
console.log('------------------------------------');

// Tambien podemos saltar valores:
const [number1, ,number3, ,number5] =nuevoArray;

console.log(number3);
console.log(number5);
console.log("------------------------------------------------");

// Desestructuracion anidad:
// Cuando hay un array dentro de otro array
const arrayDeArray = [12, 23, 52, [2,4,6,8,10], 73, 98];

const [,segundo, tercero, [,,value3,,value5]] = arrayDeArray;

console.log(`Numeros de lista 1: ${segundo} y ${tercero}`);
console.log(`Numeros de lista 2: ${value3} y ${value5}`);




