// Importando la funcion de multiplicar
const funcion = require("../export/module-export1");

// Usamos la funcion
console.log(funcion.multiplicar(3, 5));

console.log('----------------------------------------------------------------------------');

// Llamamos a las funciones externas:
const saludo = require("../export/module-export1");
const { funcionSaludo } = require("../export/module-export1");
const elementos = require("../export/module-export1");

// Llamamos a la funcion saludar
saludo.funcionSaludo('Alvaro');
funcionSaludo('Pedro');

// Llamamos a la funcion sumarElementos
console.log('Resultado de la suma:', elementos.funcionSuma)

