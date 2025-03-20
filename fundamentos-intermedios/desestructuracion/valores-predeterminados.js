// Valores predeterminados:
// Si un valor no existe se puede asignar un valor por defecto

// Ejemplo en objetos:
const persona = {
    nombre: 'Roberto',
    edad: 23
}

let {nombre, ocupacion = 'Developer'} = persona;
console.log(nombre);
console.log(ocupacion);

// Si asignamos el valor nuevo este no afectaria al objeto original, solo crea una nueva variable
console.log('----------------------------------------');

// Ejemplo en arrays:
const listaNumeros = [12, 66, 98, 53];

let [numero1,,,, numero5 = 23] = listaNumeros
console.log(numero1);
console.log(numero5);

