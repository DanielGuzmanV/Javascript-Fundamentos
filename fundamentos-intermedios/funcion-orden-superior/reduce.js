// "reduce()" es otra funcion que se usa mucho en Js
// este reduce los elementos de un array a un solo valor

// Ejemplo:
// Cuando usamos reduce creamos una nueva lista, no modificamos la origianl:
const listaPrecios = [10, 20, 30, 40];
let arrayNumber = [23, 51, 76, 90, 10, 12];

// Sumar todos los precios de la lista:
const listaResultado = listaPrecios.reduce( (acumulador, valores) => acumulador + valores, 0);
console.log(`Resultado de la suma: ${listaResultado}`);

console.log('Lista original:', listaPrecios);
console.log('------------------------------------------');

// Ejemplo 1 donde reduce recibe funcion externa
function sumar(value1, value2) {
    return value1 + value2;
}

const sumaTotal = arrayNumber.reduce(sumar, 0);
console.log('Resultado:', sumaTotal);
console.log('------------------------------------------');

// Ejemplo 2 retornando una funcion:
function crearSumador(valueInitial) {
    return function (listArray) {
        return listArray.reduce( (total, num) => total + num, valueInitial);
    }
}

let ingresarValorInicial = crearSumador(10);
const valorLista = ingresarValorInicial(listaPrecios);

console.log(valorLista);
