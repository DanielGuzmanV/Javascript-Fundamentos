// Creamos una lista vacia:
let listaVacia = [];

// Las arrays pueden almacenar varias tipos de datos:
let arrayElementos = ['Pato', 23, 5.1, true];

// Podemos crear un array de dos formas:
let miArray1 = [];
let miArray2 = new Array();

// Inicializacion de los arrays:
// Al principio estos son iguales, pero la diferencia esque uno
// ya ocupa espacios y el otro reserva espacios para ser ocupados
miArray1 = [3]; // Ocupa espacios directamente
miArray2 = new Array(3); // Reserva espacios
console.log(miArray1);
console.log(miArray2);
console.log('-----------------------------------------');

// Ahora agregamos elementos a ambos arrays
miArray1 = [1,2,3,4,5,6];
miArray2 = new Array(1,2,3,4,5,6);
console.log(miArray1);
console.log(miArray2);

// Ahora usamos los espacios del nuevo array, seria de la siguiente forma:
miArray2 = new Array(4);
miArray2[0] = "Marco";
miArray2[1] = "Pedro";
miArray2[2] = "Antonio";
miArray2[3] = "Marcelo";
console.log(miArray2);

// Como vemos este ocupa todos los espacios, tambien podemos
// hacer que solo ocupen unos espacios y otros no
let arrayAnimal = new Array(4);
arrayAnimal[0] = "Toro";
arrayAnimal[2] = "Canguro";
console.log(arrayAnimal);
// Vemos que nos dice: [ 'Toro', 'Canguro', <2 empty items> ], osea que tenemos 2 espacios disponibles

// Ahora ocupados espacios aleatorios:
let arrayNombres = new Array(5);
arrayNombres[3] = "Alberto";
arrayNombres[1] = "Peter";
arrayNombres[4] = "Marcelo";
console.log(arrayNombres);
// Vemos que los pone en orden: [ <1 empty item>, 'Peter', <1 empty item>, 'Alberto', 'Marcelo' ]
// y los espacios no ocupados los deja vacios

// Pero tambien podemos agregarles mas elementos, sin importar los espacios que reservamos
arrayNombres[6] = "Pablo";
arrayNombres[8] = "Santiago"
console.log(arrayNombres);
// Como vemos "arrayNombres" cambio su dimension, apasar que solo tiene 5 en reserva
// [<1 empty item>,'Peter',<1 empty item>,'Alberto','Marcelo',<1 empty item>,'Pablo',<1 empty item>,'Santiago']

console.log("----------------------------------------");
console.log(arrayElementos)

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






