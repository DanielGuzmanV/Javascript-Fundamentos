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


