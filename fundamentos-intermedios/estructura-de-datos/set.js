// Es una coleccion de valores unicos (sin duplicados)
// Tenemos algunos metodos utiles: .add(), .has(), .delete(), .size.

// Ejemplo sin valores repetidos:
let conjunto1 = new Set([1,2,3,4,5]);
console.log(conjunto1);

// Ejemplo con valores repetidos:
let conjunto2 = new Set([1,3,5,7,2,3,5,6,7,9]);
console.log(conjunto2);
// como vemos por consola los numeros repetidos los ignora

console.log('-------------------------------------');

// Ejemplo: eliminar duplicados de una array:
let listaNumeros = [1,2,2,3,3,4,4,5,6,6];

// Usamos set para eliminar los repetidos
let listaUnica = new Set(listaNumeros);
console.log([...listaUnica]);
console.log('-------------------------------------');

// Ejemplo: comprobar si un valor ya existe en un conjunto:
let invitados = new Set(['Marco', 'Pedro', 'Pablo', 'Alvaro', 'Manuel']);

console.log(invitados.has('Marco'));
console.log(invitados.has('Jose'));
console.log('-------------------------------------');

// Tambien podemos crear un set y agregarle valores:
let colores = new Set();

// Agregamos valores a nuestro set:
colores.add('Rojo');
colores.add('Azul');
colores.add('Verde');
colores.add('Amarillo');
colores.add('Blanco');

// Vemos los valores agregados
console.log('Los colores son:', colores);

// Eliminamos algunos valores:
colores.delete('Amarillo');
colores.delete('Rojo');
console.log('Colores restantes:', colores);




