// Estructuras de for - in
// Usado para recorrer las claves (propiedades) de un objeto, itera sobre las llaves no los valores
// No se recomienda para arrays, porque recorre claves, no valores

// Ejemplo en un array:
let listaNumeros = [10, 20, 30, 40];
let listaAnimales = ['Perro', 'Caballo', 'Vaca', 'Tigre','etc...'];

for(const idx in listaNumeros) {
  console.log(idx, ":", listaNumeros[idx]);
}
console.log('---------------------------------');

for(const idx in listaAnimales) {
  console.log('Indice', idx, ":",'animal', listaAnimales[idx]);
}
console.log('---------------------------------');

// Ejemplo en un objeto:
let persona = {
  nombre: "Dante",
  apellido: "Gutierres",
  edad: 21,
  isDeveloper: false,
};
// Forma de acceder a una propiedad dentro del objeto persona
console.log(`El nombre es: ${persona.nombre}`);
console.log('---------------------------------');

//  Otra forma de acceder a la propiedad de persona:
let prop = "edad";
console.log(`La edad es: ${persona[prop]}`);
console.log('---------------------------------');

//  Accedemos a las propiedades con un for in:
for (let clave in persona) {
  console.log(clave, ":", persona[clave]);
}
