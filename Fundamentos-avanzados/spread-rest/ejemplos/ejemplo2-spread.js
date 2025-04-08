// Ejemplo practico de Spread;
// Ejemplo 1: Clonar o fusionar objetos
const usuarioBase = {
    nombre: 'Carlos',
    edad: 43,
};

const datosUpdate = {
    ...usuarioBase,
    ocupacion: 'Ingeniero',
    edad: 34, // Este sobreescribira el anterior
};

// Vemos los datos actualizados:
console.log(datosUpdate);

// ==========================================================

// Ejemplo 2: Copiar arrays sin modificar el original:
const carritoInicial = ['pan', 'queso', 'lecho'];
const carritoFinal = [...carritoInicial, 'huevos', 'mantequilla'];

console.log(carritoInicial);
console.log(carritoFinal);



