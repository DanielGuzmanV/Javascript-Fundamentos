// Break, continue:
// Podemos usarlos para for, for in, for of, while y do while
// Ejemplo continue en while:
let number1 = 0;
while(number1 < 10) {
    number1++;
    if(number1 === 5) {
        continue;
    }
    console.log(`El numero es: ${number1}`);
}
console.log('--------------------------------------');

// Ejemplo break en while:
let number2 = 0
while(number2 < 10) {
    if(number2 === 5) {
        break;
    }
    number2++;
    console.log(`Los numeros son: ${number2}`);
}
console.log('--------------------------------------');

// Ejemplo con una lista:
let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8,];

// For sin break o continue:
for (let index = 0; index < listaNumeros.length; index++) {
    console.log(`Numeros:${listaNumeros[index]}`);
}
console.log("---------------------------------------------");

// For con break y continue:
for (let index = 0; index < listaNumeros.length; index++) {

    // Usamos CONTINUE para que no aparesca el 3
    if (listaNumeros[index] === 3){
        continue;
    }
    console.log(listaNumeros[index]);
    
    // Usamos BREAK para detener el for
    if (listaNumeros[index] > 5) {
        break;
    }
}

