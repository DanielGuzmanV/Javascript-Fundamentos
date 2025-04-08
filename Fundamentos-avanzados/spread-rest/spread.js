// Spread: expande elementos de un array u objeto en otro
// Spread en arrays:
const numeros1 = [1,2,3,4];
const numeros2 = [...numeros1,5,6];
console.log(numeros2);

// Combinamos arrays:
const numeros3 = [10, 20, 30, 40];
let arrayUnido = [...numeros1, ...numeros3];
console.log(arrayUnido);

// ==================================================

// Spread en objetos:
let persona1 = {
    nombre: "Alberto",
    edad: 24
}

const persona2 = {...persona1, ciudad: "Buenos Vientos"};
console.log(persona2);

// ==================================================

// Copiar o clonar arrays/objetos:
let frutas = ['manzana', 'pera'];
let vehiculo = {
    marca: 'toyota',
    precio: '10000'
}

const copiaFrutas = [...frutas];
const copiaVehiculo = {...vehiculo};

console.log(copiaFrutas);
console.log(copiaVehiculo);

// ==================================================

// LLamadas en funcioes:
function saludar(saludo, nombre, pregunta) {
    console.log(saludo, nombre, pregunta);
}

const arguments = ['Hola', 'Pablo', 'Como estas?'];
saludar(...arguments);





