// Estos almacenan pares clave - valor, pero son mas flexibles que un objeto
// Tenemos algunos metodos utiles: .set(), .get(), .has(), .delete(), .size.

let mapa = new Map();
mapa.set('Nombre', 'Pablo');
mapa.set('Apellido', 'Hernandez');
mapa.set('Edad', 45);

console.log(`El nombre es: ${mapa.get('Nombre')}`);
console.log('El mapa es:', mapa);
console.log('------------------------------------');
// Ejemplo 1:
// Contamos cuantas veces aparece cada palabra en una oracion:

let texto = 'Hola estamos usando Javascript Hola Javascript'

// Usamos el metodo de "split" en el string de texto para separarlos
let listaPalabras = texto.split(' ');
console.log('Texto separado:')
console.log(listaPalabras)
console.log('--------------------------------------');

// Creamos un nuevo map:
let contador = new Map();

listaPalabras.forEach( palabras => {
    contador.set( palabras, (contador.get(palabras) || 0) + 1 );
})
console.log(contador);

console.log('------------------------------------');
// Ejemplo 2:

// Guardamos informacion de productos con identificadores unicos
let productos = new Map();

productos.set(101, {
    nombre: 'Laptop',
    precio: 1200,
    cantidad: 40,
});

productos.set(102, {
    nombre: 'Mouse',
    precio: 25,
    cantidad: 15,
});

// Accedemos al mapa:
console.log(productos);

// Accedemos aun producto:
console.log(productos.get(101));

// ---------------------------
