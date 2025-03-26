// Estos almacenan pares clave - valor, pero son mas flexibles que un objeto
// Tenemos algunos metodos utiles: .set(), .get(), .has(), .delete(), .size.

// Creamos un mapa:
let miMapa = new Map();

// Inicializamos:
miMapa = new Map([
    ['Nombre', 'Alberto'],
    ['email', 'correodeejemplogmail.com'],
    ['age', 53]
]);
console.log(miMapa);
console.log('---------------------------------');

// Uso del set:
let nuevoMapa = new Map();
nuevoMapa.set('Nombre', 'Pablo');
nuevoMapa.set('Apellido', 'Hernandez');
nuevoMapa.set('Direccion', 'C/Enrique Segoviano');
nuevoMapa.set('Edad', 45);
console.log('El mapa es:', nuevoMapa);

// Obtenemos una valor del mapa mediante su clave:
console.log(`El nombre es: ${nuevoMapa.get('Nombre')}`);
console.log('------------------------------------');

// Podremos cambiar el valor de una clave:
nuevoMapa.set("Nombre", "Marco");
console.log(nuevoMapa);
console.log('------------------------------------');

// Verificamos si una clave existe:
console.log(nuevoMapa.has("Edad"));
console.log(nuevoMapa.has("email"));
console.log('------------------------------------');

// Eliminamos un clave y valor:
nuevoMapa.delete("Edad");
console.log(nuevoMapa);
console.log('------------------------------------');

// Uso de keys, values y entrities
console.log(nuevoMapa.keys());
console.log(nuevoMapa.values());
console.log(nuevoMapa.entries());

console.log('------------------------------------');

// Vemos el tamaño del map:
console.log("El tamaño del mapa es:",nuevoMapa.size)


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
