// Creacion de un objeto:
// Este puede contener varios tipos de datos, ejemplo:

const lista = {
    Nombre: "Marcelo",
    Edad: 21,
    isDeveloper: true,
    Date: ["Fecha Nacimiento: ", "26, 12, 2010"],
    Bookfav: {
        titulo: "La divina comedia",
        autor: "Dante alighieri",
        fecha: "siglos Xl y Xll",
        Url: "undefined"
    },
    Leinteresoelcurso: true
}
console.log(typeof lista);
console.log('--------------------------');

// Tambien podemos hacerlo de la siguiente manera:
const auto = {
    "nombre" : " 01-introduccion " ,
    "versión" : " 1.0.0 " ,
    "descripción" : " " ,
    "principal" : " index.js " ,
    "guiones" : {
        "inicio" : " nodo index.js " ,
        "prueba" : " echo \" Error: no se especificó ninguna prueba \" && exit 1 "
    },
    "autor" : " " ,
    "licencia" : " ISC "
}
console.log(typeof auto);
console.log('--------------------------');

// Ejemplo de uso:
// Estas variables estan relacionadas y lo mejor es unirlas todas en un objeto:

let email = 'nuevousuario@gmail.com';
let nombreUsuario = 'Marcelo';
let direccion = {
    calle: 'bismuto',
    numero: 1234
}

// Creamos el objeto:
let datosUsuario = {
    email: 'nuevousuario@gmail.com',
    nombre: 'Marcelo',
    // Tambien podremos usar otro objeto dentro del objeto
    direccion: {
        calle: 'bismuto',
        numero: 1234
    },
    trabajando: true,
    desarrollador: false,
    // Tambien podremos llamar a funciones, usando dos formas:
    // Primera forma:
    recuperarContra: function() {
        console.log('Recuperando cuenta...');
    }

    // Segunda forma:
    // recuperarContra: recuperarCuenta,
};

function recuperarCuenta() {
    console.log('Recuperando cuenta...');
}
console.log(datosUsuario.recuperarContra());
console.log("--------------------------");

// Otro ejemplo:
let nombre = "Kokun";
let origen = "Ball Dragon";
let edad = 35;

// Podemos creamos lo mismo pero en un objeto:
let personaje = {
    name: "Goku",
    origin: "Dragon Ball",
    age: 30,
}

// Vemos los datos del objeto:
console.log(personaje);
console.log("---------------------------------------------");

// Accedemos a una sola propiedad:
// Primera forma:
console.log("Su nombre es: ", personaje.name);

// Segunda forma:
console.log("Aparece en: ", personaje['origin']);
console.log("---------------------------------------------");

// Modificamos una propiedad de un objeto:
// Primera forma:
personaje.age = 124;
console.log(personaje);

// Segunda forma:
let nuevoCambio = 'age';
personaje[nuevoCambio] = 17;
console.log(personaje);
console.log("---------------------------------------------");

// Eliminar una propiedad de un objeto:
delete personaje.origin;
console.log(personaje);
console.log("---------------------------------------------");

// Creamos otro ejemplo:
const point = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando... El dibujo fue dibujado');
    },
    newDibujo() {
        console.log('Realizando nuevo dibujo...');
    }
}

// Tambien podemos accder a la funcion del objeto con un "if"
if('dibujar' in point) {
    point.dibujar();
}

if('newDibujo' in point) {
    point.newDibujo();
}
console.log("---------------------------------------------");

// Con esta funcion podemos ver las propiedades de nuestro objeto en un array
// hay de dos formas:
let keys = Object.keys(point);
console.log(keys);
console.log(Object.keys(point));
console.log("---------------------------------------------");

// Otro metodo para mostrar todas las propiedades es con el "for"
for(let llave of Object.keys(point)) {
    console.log(llave, point[llave]);
}
console.log("---------------------------------------------");

// Este es similar, solo que en este nos muestra los datos de las propiedades en una array
for(let entrada of Object.entries(point)) {
    console.log(entrada);
}
console.log("---------------------------------------------");

// Una manera moderna seria la siguiente:
for(let clave in point) {
    console.log(clave, point[clave]);
}






