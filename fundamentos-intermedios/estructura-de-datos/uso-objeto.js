// Creamos las variables:
let nombre = "Kokun";
let origen = "Ball Dragon";
let edad = 35;

// Creamos un objeto:
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
console.log("Su nombre es: " + personaje.name);

// Segunda forma:
console.log("Aparece en: " + personaje['origin']);
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

