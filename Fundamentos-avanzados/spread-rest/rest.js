// Rest: agrupa elementos en un solo parametro
// Cuando se usa en funciones o desestructuracion

function sumarValores(...valores) {
    return valores.reduce((acc, numero) => acc + numero, 0);
}

let agrupar = sumarValores(1,23,42);
console.log('El resultado es:', agrupar);

const arrayNumbers = [10, 50, 30];
let sumarArray = sumarValores(...arrayNumbers);
console.log('Suma array:', sumarArray);

console.log(sumarValores(1,2,3,4));
console.log(sumarValores(10,20));

// ===================================================

// Usamos "rest" en destructuring
// Ejemplo en array destructuring:
const array = [10, 20, 30, 40];
let [primero, ...resto] = array;

console.log('Pimer numero array', primero);
console.log('Resto del array', resto);

// Ejemplo en object destructuring:
const usuario = {
    id: 101,
    nombre: 'Ana',
    edad: 34,
}

let {id, ...info} = usuario;
console.log('ID user:', id);
console.log('Info user:', info);






