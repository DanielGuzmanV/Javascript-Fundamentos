// "map()" es una funcion que se usa mucho en Js
// ya que transforma cada elemento de un array

// Ejemplo:
// Cuando usamos map creamos una nueva lista, no modificamos la origianl:
let listaNombres = ["Ana", "Carlos", "Elena", "Manolo"];
const listaNumeros = [1,2,3,5,6,7,8,9];

// Convertimos los nombres a Mayuscula
let nuevaListaNombres = listaNombres.map( valueName => valueName.toUpperCase());
console.log('Nombres en mayuscula:', nuevaListaNombres);

console.log('Lista original:', listaNombres);
console.log('---------------------------------------');

// Ejemplo 1 donde map recibe una funcion:
function duplicar(value) {
    return value * 2;
}

let listaDuplicados = listaNumeros.map(duplicar);
console.log('Duplicados:', listaDuplicados);
console.log('---------------------------------------');

// Ejemplo 2 recibimos una funcion como argumento
function listaMayusculas(valueTxt) {
    return valueTxt.toUpperCase();
}

const listaNombesMayuscula = listaNombres.map(listaMayusculas);
console.log(listaNombesMayuscula);
console.log('---------------------------------------');

// Ejemplo 3 donde retorna una funcion:
function crearMultiplicacion(valueFactor) {
    return function (arraysNum) {
        return arraysNum.map(value => value * valueFactor);
    }
}

const ingresarValor = crearMultiplicacion(2);
const multiplicarLista = ingresarValor(listaNumeros);

console.log(multiplicarLista);
