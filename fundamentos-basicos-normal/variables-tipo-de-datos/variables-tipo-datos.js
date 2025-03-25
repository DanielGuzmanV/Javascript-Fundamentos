// Comentarios en linea 
/*
    Comentarios 
    en 
    bloque
*/

// ----------------------------------------------------

// Tenemos 3 maneras de declarar variables(var, let y const):
var nombre = "Daniel"; // Variable global o de funcion (No usar mucho)
let edad = 23; // Variable de bloque (Uso recomendado)
const PI = 3.1416; // Constante, este no se puede reasignar
/*
    Nota:
    var: tiene ambito de funcion y puede ser redeclarada
    let: tiene ambito de bloque y no se puede redeclarar
    const: tambien tiene ambito de bloque, pero su valor no puede cambiar
*/
// Ejemplo de var:
if(true) {
    var date1 = 23; // "var" si puede ser llamado dentro de un bloque if
}
console.log("Ejemplo con var: " + date1);

// Ejemplo de let: 
if(true) {
    let date2 = 23; // "let" no puede ser llamado dentro del bloque if (nos saldra un error)
}
// console.log("Ejemplo con let: " + date2);

// Ejemplo const:
//PI = 23; // Si cambiamos la constante "PI" este saldra error
console.log("El valor de pi es: " + PI);
console.log("-----------------------------------------------------");

// Algunas variables pueden cambiar de dato ya que Js es un lenguaje dinamico
let var_Ejemplo = "Hello"
console.log("Variable sin cambio " + var_Ejemplo);
var_Ejemplo = 23;
console.log("Variable con cambio " + var_Ejemplo);
console.log("-----------------------------------------------------");

// Uso del string
// Concatenacion de string:
let miNombre = "Manuel";
let saludo = "Hola, " + miNombre;
console.log(saludo);

// Podremos ver la longitud de ese string:
console.log("La longitud es: ", saludo.length);

// Tambien podremos acceder a los caracteres:
console.log("El primer caracter es:", saludo[0]);
console.log("El ultimo caracter es:", saludo[11]);

// Metodos comunes de String:
console.log(saludo.toUpperCase()); // Convierte todo a mayuscula
console.log(saludo.toLowerCase()); // Conviert todo en minuscula
console.log(saludo.indexOf('Hola')); // Busca en que posicion esta "Hola"
console.log(saludo.indexOf('Manuel')); // Busca en que posicion esta "Manuel"
console.log(saludo.indexOf('Mundo')); // Como la palabra no existe da -1
console.log(saludo.slice(0, 10)); // Nos deja con las palabras del "0 al 10"
console.log(saludo.replace("Manuel", "Antonio")); // Reemplazamos el nombre "Manuel"  por "Antonio"

// ==================================================================
//tipos de datos primitivos:
let Number = 23;
let String = "Hello world";
let Booleano = true;
let Undefined = undefined;
let Null = null;
let Simbolo = Symbol("id");
let BiGInt = 9007199254740991n;
console.log("-----------------------------------------------------");

// Verificamos el tipo de dato de las variables
console.log("El tipo de dato es: " + typeof Number);
console.log("El tipo de dato es: " + typeof String);
console.log("El tipo de dato es: " + typeof Booleano);
console.log("El tipo de dato es: " + typeof Undefined);
console.log("El tipo de dato es: " + typeof Null);
console.log("El tipo de dato es: " + typeof Simbolo);
console.log("El tipo de dato es: " + typeof BiGInt);





