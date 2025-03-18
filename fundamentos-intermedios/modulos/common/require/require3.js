// Importamos la clase CalculadorOperaciones

const metodosCalculador = require("../export/module-export3");

// Instanciamos la clase
let operaciones = new metodosCalculador('Calculadora Basica');
console.log(operaciones);

// Usamos los metodos de la clase:
console.log(operaciones.tituloClase());
console.log(operaciones.sumar(10,5));
console.log(operaciones.restar(20,12));
console.log(operaciones.multiplicar(9,7));
console.log(operaciones.division(10,5));

