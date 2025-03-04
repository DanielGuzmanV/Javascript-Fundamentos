//bifurcaciones ; if y else
//Ejemplo 
if (true) {
console.log("Es verdadero");
}

console.log("---------------------------------------------");

//Ejemplo if
let saldo = 50;
let efectivo = 50;
let age = 20;

// Ejemplo 1:
if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
}

// Ejemplo 2:
if(age > 18) {
    console.log('Usuario es mayor de edad');
}

console.log('-----------------------------------');

// Ejemplo if else
// Ejemplo 1:
if (efectivo <= saldo) {
    console.log("Aun puedes sacar dinero");
}   else {
    console.log("Saldo insuficiente...");
}

// Ejemplo 2:
let edad1 = 15;
if(edad1 > 18) {
    console.log('Usuario es mayor de edad')
} else {
    console.log('Usuarion menor de edad')
}

console.log("---------------------------------------------");

// Ejemplo if else 
// Ejemplo 1:
let notaOne = 22;
if (notaOne === 100 ) {
    console.log("Muy bien...");
} else if (notaOne === 80) {
    console.log("Bien");
} else if (notaOne === 60) {
    console.log("Regular");
} else if (notaOne === 50) {
    console.log("Puede mejorar")
} else if (notaOne === 20) {
    console.log("Mal, tiene que mejorar")
} else {
    console.log("Error")
}

// Ejemplo 2:
let userAge1 = 18;
if(userAge1 > 17) {
    console.log('Usuario mayor de edad, puede entrar')
} else if( userAge1 > 13) {
    console.log('El usuario debe ir acompañado de sus padres')
} else {
    console.log('Usuario menor de edad');
}


// -------------------------------------------

/*Esta forma hay que tratar de hacerlo no tan frecuente
ya que nos pondria muchas estructuras y serian inmantenibles*/

if (notaOne === 5 ) {
    console.log("Muy bien");
} else {
    if (notaOne ===4) {

    } else {
        if (notaOne ===3) {
            // Operacion 
        } else if(notaOne === 5) {
            // ...
        }
    }
}

