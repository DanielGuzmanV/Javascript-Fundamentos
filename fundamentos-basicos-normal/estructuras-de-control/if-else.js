//bifurcaciones ; if y else
//Ejemplo numero 1 de Bifurcaciones
if (true) {
console.log("Es verdadero");
}

if (false) {
console.log("Es verdadero");
}   else {
console.log("No es verdadero");
}
console.log("---------------------------------------------");

//Ejemplo numero 2 de Bifurcaciones;
let saldo = 50;
let efectivo = 50;

if (efectivo < saldo) {
    console.log("Puedes sacar dinero");
}

if (efectivo < saldo) {
    console.log("Aun puedes sacar dinero");
}   else {
    console.log("Saldo insuficiente...");
}
console.log("---------------------------------------------");

// Ejemplo numero 3 de Bifurcaciones
//if, else y if else 

let notaOne = 22;

if (nota === 5 ) {
    console.log("Muy bien...");
} else if (nota ===4) {
    console.log("Bien");
} else if (nota ===3) {
    console.log("Regular");
} else if (nota ===2) {
    console.log("Puede mejorar")
} else if (nota ===1) {
    console.log("Mal, tiene que mejorar")
} else {
    console.log("Error")
}
// -------------------------------------------

/*Esta forma hay que tratar de hacerlo no tan frecuente
ya que nos pondria muchas estructuras y serian inmantenibles*/

/*if (nota === 5 ) {
    console.log("Muy bien");
} else {
    if (nota ===4) {

    } else {
        if (nota ===3);
    }
}*/

