// Creamos una lista vacia:
let listaVacia = [];

// Creamos una lista con datos:
let listaAnimales = ['Vaca', 'Caballo', 'Perro'];

// Vemos los datos de la lista:
console.log(listaAnimales);
console.log("-------------------------------------------");

// Accedemos a un dato de la lista:
console.log(listaAnimales[0]);
console.log(listaAnimales[1]);
console.log(listaAnimales[2]);
console.log("-------------------------------------------");

// Agregamos datos nuevos a la lista:
listaAnimales[3] = 'TIgre';
listaAnimales[4] = 'Gato';

console.log(listaAnimales);
console.log("-------------------------------------------");

// Tener cuidado al poner valores incorrectos o que no existen:
listaAnimales[10] = 'Camello';
console.log(listaAnimales);

console.log(listaAnimales[7]);
console.log("-------------------------------------------");

// Verificamos el tipo de dato:
console.log(typeof listaAnimales);

// Vemos la longitud de la lista:
console.log(listaAnimales.length);

console.log("-------------------------------------------");

// Usamos listas con funciones
let listRandom = [6, 2, 4, 9, 3, 8];

function ordenarListaMenoMayor(paramLista) {
    // Ordenamos la lista de menor a mayor
    paramLista.sort((numberA, numberB) => numberA - numberB);
    return paramLista;
}

function ordenarListaMayorMenor(paramLista) {
    // Ordenamos la lista de mayor a menor
    paramLista.sort((numberA, numberB) => numberB - numberA);
    return paramLista;
    
}

let listOrden1 = ordenarListaMenoMayor(listRandom);
console.log(`Orden Menor a Mayor: ${listOrden1}`);

let listOrden2 = ordenarListaMayorMenor(listRandom);
console.log(`Orden Mayor a Menor: ${listOrden2}`);
console.log("-------------------------------------------");

// Usamos Strings en arrays con el ordenamiento:
let arrayAnimales = ['leon', 'zebra', 'elefante', 'jirafa'];
console.log(arrayAnimales);

// Esta funcion ordenara dependiendo la longitud del nombre
function solucionArrayAnimal(paramList) {
    paramList.sort((dateA, dateB) => dateB.length - dateA.length);
    return paramList;
}

let resultadoLista = solucionArrayAnimal(arrayAnimales);
console.log(resultadoLista);
console.log("-------------------------------------------");






