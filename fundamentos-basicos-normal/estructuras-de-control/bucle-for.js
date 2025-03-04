//  Bucles for:
// Usados para recorrer arrays con control sobre el indice o iterar un numero fijo de veces
// Estructura del bucle for:
// for (Inicializacion; condicion; actualizacion) {
//     //Esto es el bucle for
// }
console.log("---------------------------------------------");

// Ejemplo simple:
for (let idx = 0; idx < 5; idx++) {
    console.log("Los numeros son:",idx);
}

// Numeros impares con for:
for(let number = 1; number <= 10; number++) {
    if(number % 2 != 0) {
        console.log('Numeros impares:', number);
    }
}
console.log("---------------------------------------------");

// Ejemplo con una lista
let listaPares = [4, 6, 2, 10, 8];
let listaImpares = [1, 3, 7, 9, 5];
let listaOrdenada = [1,2,3,4,5,6,7,8,9,10];
let listaDesordenada = [2,1,5,6,8,10,9,4,7,3]

for (let idx = 0; idx < listaPares.length; idx++) {
    console.log("Pares de la lista:",listaPares[idx])
} 
console.log("---------------------------------------------");

for(let idx = 0; idx < listaImpares.length; idx++) {
    console.log('Impares de la lista:', listaImpares[idx]);
}
console.log("---------------------------------------------");

for(let idx = 0; idx < listaOrdenada.length; idx++) {
    if(idx % 2 == 0) {
        console.log('Pares:', listaOrdenada[idx]);
    } else {
        console.log('Impares:', listaOrdenada[idx]);
    }
}
console.log("---------------------------------------------");

for (let idx = 0; idx < listaDesordenada.length; idx++) {
    if (listaDesordenada[idx] % 2 == 0) {
        console.log("Pares:", listaDesordenada[idx]);
    } 
}
console.log("---------------------------------------------");

// Usamos for para sumar los numeros de una lista

const listaNumeros = [5, 10, 15, 20, 25];
let resultado = 0;

for(idx = 0; idx < listaNumeros.length; idx++) {
    resultado += listaNumeros[idx];
}
console.log(`Suma total ${resultado}`);








