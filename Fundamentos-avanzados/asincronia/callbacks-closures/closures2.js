// Ejemplos de closures:
// Ejemplo 1:
// Simulamos un temporizador donde se guarda el estado y se accede a el 
// despues de un periodo de tiempo
function crearTemporizador(limite) {
    let tiempo = 0;

    const interval = setInterval( function() {
        tiempo++;
        console.log(`Han pasado ${tiempo} segundos`);

        if(tiempo >= limite) {
            clearInterval(interval);
            console.log("El temporizador se ha detenido...");
            console.log('======================================');
        }
    }, 1000)
}
crearTemporizador(3);



// ============================================================
// ============================================================
// Ejemplo 2: 
// Crear funciones personalizadas, estas guardar un estado de alguna manera
function multiplicar(factor) {
    return function(numero) {
        console.log("El resultado es: ",(numero * factor));
    }
}

// Creamos una funcion personalizada para multiplicar por 2
const multiplicarPor2 = multiplicar(2);
multiplicarPor2(5);

// Podemos crear multiples funciones personalizadas:
const multiplicarPor3 = multiplicar(3);
multiplicarPor3(7);

const multiplicarPor4 = multiplicar(4);
multiplicarPor4(8);
console.log('======================================');



// ============================================================
// ============================================================
// Ejemplo 3: 
// Uso de closures con setTimeout, estas se utilizan funciones que se ejecutan
// en el futuro como setTimeout o setInterval
function retrasarMensaje(tiempo) {
    let mensaje = "Este es un mensaje que tardara";
    
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo)
}
retrasarMensaje(4000);



// ============================================================
// ============================================================
// Ejemplo 4:
// Acceder a datos privados en objetos
function crearNuevoContador() {
    let contador = 0;
    return {
        incrementar: function() {
            contador++; 
            console.log(`El numero es: ${contador}`);
        },
        
        obtenerContador: function() {
            return contador;
        }
    }
}

const counter = crearNuevoContador();
counter.incrementar();
counter.incrementar();
counter.incrementar();

console.log(`la cantidad es: ${counter.obtenerContador()}`);
console.log('======================================');



// ============================================================
// ============================================================
// Ejemplo 5: 
// Funciones de configuracion con closures, cuando queremos que una funcion
// tenga configuraciones personalizadas
function crearSaludo(saludo) {
    return function(nombre) {
        console.log(`${saludo}, ${nombre}`);
    }
}

// Saludamos en diferentes idiomas:
const saludoSpanish = crearSaludo("Hola");
const saluudoEnglish = crearSaludo("Hello")

saludoSpanish("Carlos");
saluudoEnglish("Steve");
console.log('======================================');





