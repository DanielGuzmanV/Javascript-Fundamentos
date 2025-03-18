// Importando el objeto y las funciones
// podemos importar de esta manera
const objetos = require("../export/module-export4");

// Verificamos:
console.log(objetos.user);
console.log(objetos.esAdulto(objetos.user));
console.log(objetos.saludo(objetos.user));
objetos.puestoTrabajo(objetos.user);

console.log('-----------------------------------');

// Tambien podemos importar de esta otra manera:
const {user, saludo, esAdulto, puestoTrabajo} = require('../export/module-export4');

// Usando el objeto y las funciones importadas
console.log(user);
console.log(saludo(user));
console.log(esAdulto(user));
puestoTrabajo(user);

// REALIZAR UNA PREGUNTA DEL PORQUE PODEMOS USAR DE ESTAS DOS FORMAS EL LLAMADO

