// En los arrays de Js tenemos varios metodos, veremos algunos:
//  Algunos metodos utiles: .push(), .pop(), .shift(), .unshift(), .map(), .filter(), .reduce().

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
console.log('--------------------------------');

// Dividir un string en array, donde usaremos un separador 
let cadenaCompras = 'Sandia, Leche, Pan, Mermelada';
console.log('Cadena orignal: ', cadenaCompras);

let listaCompras = cadenaCompras.split(',');
console.log(listaCompras);
console.log('--------------------------------');
// Tambien podremos filtar numeros segun lo que se pida
// pero con este metodo creariamos una nueva lista:
let listaNumeros = [10, 23, 34, 45, 56, 67, 78, 89];

// Filtramos los numeros si son pares
let nuevaLista = listaNumeros.filter(num => num % 2 === 0);

console.log('Los pares son:', nuevaLista);
console.log('Lista original:', listaNumeros);
console.log('--------------------------------');

// Tambien podemos usar otro metodo como "map", este igual crea una lista nueva
let listaNombres = ["Ana", "Carlos", "Elena", "Manolo"];

// Convertimos los nombres a Mayuscula
let nuevaListaNombres = listaNombres.map( valueName => valueName.toUpperCase());
console.log('Nombres en mayuscula:', nuevaListaNombres);
console.log('Lista original:', listaNombres);



