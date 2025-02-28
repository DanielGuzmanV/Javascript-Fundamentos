//Bucles for
// for (Inicializacion; condicion; actualizacion) {
//     //Esto es el bucle
// }
// console.log("---------------------------------------------");

//Ejemplo: en inicializacion pondremos la siguiente variable con el sigiuente valor
// for (let i = 0; condicion; actualizacion) {
//     //Esto es el bucle
// }
// console.log("---------------------------------------------");

/*Ejemplo; en condicion pondremos, la sigueinte condicion que es: */
// for (let i = 0;  i < 10; actualizacion ) {
//     //Esto es el bucle
// }
/*Ejemplo en actuallzacion, pondremos lo siguiente */
// for (let i = 0; i < 10; i = i + 1) {
//     //Esto es el bucle
// }
/*ahora si queremos simplificar la la variable de actualizacion
podemos hacer lo siguiente */

// i = i + 1;
// i += 1;
// i ++;
//  esto ya lo habiamos visto y podemos consultarlo en las notas del cuaderno

//  ahora pondremos ejecutar en consola para ver como se ve;
for (let a = 0; a < 10; a += 1) {
    //Esto es el bucle
    console.log(a);
}

//  otro ejemplo: creamos otra variable con una lista
let lista1 = [1, 4, 6, 2, 3, 7, 10, 12];
// lista[2]; para poder entrar un numero de la lista

let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
} 
console.log("---------------------------------------------");

//  Estructuras for OF
// ahora en las lista tendremos la posibilidad de usar las ForoF ejemplos

for (let valor of lista) {
    console.log(valor);
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor);
})
console.log("---------------------------------------------");

//Estructuras de for - in

let persona = {
    nombre:"Dante",
    apellido:"Gutierres",
    edad: 21, 
    isDeveloper: false 
}
//Esta seria una forma de acceder a una propiedad dentro del objeto persona
console.log(persona.nombre)

//  Tambien tenemos otra forma de acceder a la propiedad de persona y seria asi;
//  aqui tendriamos que usar una array para que (prop) funcione
let prop = "edad";
console.log(persona[prop]);

//  esta es otra forma que ya explicamos
for (let propiedad in persona) {
    console.log(propiedad);  
    console.log(persona[propiedad])
}