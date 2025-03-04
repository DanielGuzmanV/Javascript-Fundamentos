// Estructura forEach:
// Usado para recorrer arrays con una funcion callback, no se puede detener (break o return, no funcionan)

let listaImpares = [1,3,5,7,9];
let listaNumeros = [10, 20, 30, 40];

listaImpares.forEach((valor) => {
    console.log("Valor impares:", valor);
});
console.log('--------------------------------');

listaNumeros.forEach((numero, indice) => {
    console.log(`Indice: ${indice}, numero: ${numero}`);
})
console.log('--------------------------------');

// Usamos forEach() para imprimir nombres en mayuscula:
let listaNombres = ["Ana", "Juan", "Pedro", "Maria"];

listaNombres.forEach((nombres) => {
    console.log(nombres.toUpperCase());
})











