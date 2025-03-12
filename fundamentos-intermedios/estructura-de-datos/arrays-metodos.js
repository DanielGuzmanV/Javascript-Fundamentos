// En los arrays de Js tenemos varios metodos, veremos algunos:

let listaFrutas = ['Manzana', 'Banana', 'Melon', 'Kiwi'];
let listaFrutas2 = ['Frutillas', 'Pera']
console.log(listaFrutas);
console.log('--------------------------------');

// Agregar al final un nuevo elemento;
listaFrutas.push('Naranjas', 'Mandarina');
console.log(listaFrutas);

// Eliminamos el ultimo elemento de la lista:
listaFrutas.pop();
console.log(listaFrutas);

// Eliminamos el primer elemento de la lista:
listaFrutas.shift();
console.log(listaFrutas);

// Agregar al principio un nuevo elemento:
listaFrutas.unshift('Sandia');
console.log(listaFrutas);
console.log('--------------------------------');

// Uso del filter y includes en las listas:
let frutasConA = listaFrutas.filter(fruta => fruta.includes('a'));
console.log(frutasConA);
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


