// "filter()" es una funcion que se usa mucho en Js
// ya que filtra elementos segun una condicion

// Ejemplo:
// Cuando usamos filter creamos una nueva lista, no modificamos la origianl:
let listaNumeros = [10, 23, 34, 45, 56, 67, 78, 89];
let listaFrutas = ["Manzana", "Banana", "Melon", "Kiwi"];

let frutasConA = listaFrutas.filter((fruta) => fruta.includes("a"));
console.log(frutasConA);
console.log("--------------------------------");

// Filtramos los numeros si son pares
let nuevaLista = listaNumeros.filter((num) => num % 2 === 0);
console.log("Los pares son:", nuevaLista);

console.log("Lista original:", listaNumeros);
console.log("--------------------------------");

// Ejemplo 1 donde filter recibe funcion externa:
function esPar(valueNumber) {
    return valueNumber % 2 === 0;
}

const resultadoPar = listaNumeros.filter(esPar);
console.log('Los pares son:', resultadoPar);
console.log("--------------------------------");

// Ejemplo 2 recibiendo una funcion como argumento:

function esAdulto(valueEdad) {
    return valueEdad >= 35;
}

// Tenemos dos formas de usar el filter con una funcion como argumento:

let listaAdultosForma1 = listaNumeros.filter(num => esAdulto(num));
let listaAdultosForma2 = listaNumeros.filter(esAdulto);

console.log('Lista forma 1 > 35', listaAdultosForma1);
console.log('Lista forma 2 > 35', listaAdultosForma2);
console.log("--------------------------------");

// Ejemplo 3 retornando una funcion:
function filtradoDeEdad(valueLimite) {
    return function(valueList) {
        return valueList.filter(edad => edad >= valueLimite);
    }
}

const ingresarLimite = filtradoDeEdad(40);
let evaluarLista = ingresarLimite(listaNumeros);

console.log(evaluarLista);



