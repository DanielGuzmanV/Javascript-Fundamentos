// Creamos una funcion que no retorna nada:
function saludar() {
    console.log('Hola mundo, que tal?');
}
// Llamamos a la funcion:
saludar();
console.log("-------------------------------------------------");

// Creamos una funcion que retorna un valor:
function multiplicacion() {
    let number1 = 5;
    let number2 = 2;
    let resultado = number1 * number2;
    
    return resultado;
}
// Llamamos a la funcion:
console.log("El resultado es: " + multiplicacion());
console.log("-------------------------------------------------");

// El resultado podemos agregarlo en una variable:
let resultadoMultiplicacion = multiplicacion();
console.log("El resultado en variable es: " + resultadoMultiplicacion);
console.log("-------------------------------------------------");

// Funcion con una funcion dentro(una funcion anonima) o closures:
function funcionSaludar() {
    return function () {
        console.log('Hola Mundo...');
    }
}

let nuevoSaludo = funcionSaludar();
nuevoSaludo();
console.log("-------------------------------------------------");

function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        console.log(`Contador: ${contador}`);
    }
}

let contar1 = crearContador();
let contar2 = crearContador();

// Estas funciones cuando son llamadas recuerdan el valor que tenian antes y lo mantinen, no se borra
contar1();
contar1();
contar1();
console.log("-------------------------------------------------");

// Pero si creamos otra, esta seria nueva:
contar2();
contar2();



