// Desestructuracion en funciones:
// Podemos usar la directamente en los parametros de una funcion

// Ejemplo 1 sin desestructuracion con un objeto:
const objectPersona = {
    nombre: 'Laura',
    edad: 28,
    ocupacion: 'Enfermera'
}

function mostraInformacion(paramObject) {
    console.log(`Nombre: ${paramObject.nombre}, Edad: ${paramObject.edad}`);
}

mostraInformacion(objectPersona);
console.log('---------------------------------');

// Ejemplo 2 con desestructuracion con un objeto:
function mostraInformacion2({nombre, edad}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

mostraInformacion2(objectPersona);
console.log('---------------------------------');

// Ejemplo 1 sin desestructuracion con un array:
const listNumeros = [23, 14, 51, 61, 42];

function mostrarLista(paramList) {
    console.log(`El numero 1 es: ${paramList[0]} y el numero 2 es: ${paramList[1]}`)
}

mostrarLista(listNumeros);
console.log('---------------------------------');

// Ejemplo 2 con desestructuracion con un array:
function mostrarLista2([,,tercero,,quinto]) {
    console.log(`El numero 3 es: ${tercero} y el numero 5 es: ${quinto}`);
}

mostrarLista2(listNumeros);

