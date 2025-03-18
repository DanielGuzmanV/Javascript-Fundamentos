// Importamos las funciones

const operaciones = require("../export/module-export2");

console.log('Resultado suma:', operaciones.sumar(3, 13));
console.log('Resultado resta:', operaciones.restar(23, 5));
console.log('Resultado multiplicacion:', operaciones.multiplicar(8, 7));
console.log('----------------------------------------------');

// Tambien podemos realizar la importacion de esta manera:
const { sumar, restar } = require("../export/module-export2");
const {multiplicar} = require("../export/module-export2")

console.log(sumar(1,22));
console.log(restar(34, 23));
console.log(multiplicar(2,4));
