// En los arrays de Js tenemos varios metodos, veremos algunos:
//  Algunos metodos utiles: .push(), .pop(), .shift(), .unshift()

let listaFrutas = ['Manzana', 'Banana', 'Melon', 'Kiwi', 'Sandia'];
let listaFrutas2 = ['Frutillas', 'Pera']
console.log(listaFrutas);
console.log('--------------------------------');

// Agregar al final un nuevo elemento;
listaFrutas.push('Naranjas', 'Mandarina');
console.log(listaFrutas);
console.log('--------------------------------');

// Eliminamos el ultimo elemento de la lista:
listaFrutas.pop();
console.log(listaFrutas);
console.log('--------------------------------');

// Pero tambien podemos ver y eliminar el ultimo elemento:
console.log(listaFrutas.pop());
console.log('--------------------------------');

// Vemos nuevamente la lista:
console.log(listaFrutas);
console.log('--------------------------------');

// Tambien podemos ver la longitud de la lista:
console.log('La longitud actual es:',listaFrutas.length);
console.log('--------------------------------');

// Formas para vaciar una lista:
// listaFrutas = [];
// listaFrutas.length = 0; // Opcional
console.log(listaFrutas);
console.log('--------------------------------');

// Operacion Slice: elimina y nos deja con una porcion de la lista, en este caso elimina
// los elementos anteriores a "1" y los siguientes de "3" contando el mismo 3
let nuevaListaFrutas1 = listaFrutas.slice(1, 3);
console.log('Uso Slice:',nuevaListaFrutas1);
console.log('--------------------------------');

// Operacion Splice: Elimina los elementos en la posicion que se indica, por ejemplo:
// De la posicion 1 hasta la posicion 3
let arrayNombres = ["Alvaro", "Pedro", "Mauricio", "Manuel", "Alberto", "Jose", "Pablo"];
arrayNombres.splice(1, 3);
console.log('Uso Splice:', arrayNombres);
console.log('--------------------------------');

// Eliminamos el primer elemento de la lista:
listaFrutas.shift();
console.log(listaFrutas);
console.log('--------------------------------');

// Agregar al principio un nuevo elemento:
listaFrutas.unshift('Sandia');
console.log(listaFrutas);
console.log('--------------------------------');

// Tambien podemos concatenar dos listas:
let unirListasFrutas = listaFrutas.concat(listaFrutas2);
console.log(unirListasFrutas);
console.log('--------------------------------');

// Cambiamos el orden de la lista, le damos la vuelta
unirListasFrutas.reverse();
console.log(unirListasFrutas);
console.log('--------------------------------');

// Tambien podemos ordenarlo:
unirListasFrutas.sort();
console.log(unirListasFrutas);
console.log('--------------------------------');

// Dividir un string en array, donde usaremos un separador 
let cadenaCompras = 'Sandia, Leche, Pan, Mermelada';
console.log('Cadena orignal: ', cadenaCompras);

let listaCompras = cadenaCompras.split(',');
console.log(listaCompras);
console.log('--------------------------------');






