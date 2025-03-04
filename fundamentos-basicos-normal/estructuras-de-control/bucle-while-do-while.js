// Nota: Cuando se usan estos tipos de bucle nunca olvidarse el ingrementador
// Para evitar un loop infinito

// Bucle while:
// Mostramos los numeros del 1 al 5
let idx = 1;
let numberLimit = 5;
while (idx <= numberLimit) {
    console.log(idx);
    idx++;
}

// Mostramos los numeros pares
let indice = 1;
while(indice <= 10) {
    var resultado = indice % 2;
    if(resultado == 0) {
        console.log('Numero par:', indice);
    }
    indice++;
}

console.log('------------------------------------');
// Mostramos los numeros impares
let value = 1;
let limitNumber = 10;
while(value <= limitNumber){
    if(value % 2 != 0) {
        console.log('Numero impar:', value);
    }
    value++;
}

console.log('------------------------------------');

// Bucle Do while:
let date = 15;
let max = 15;
do {
    console.log("fin ejecucion...")
} while (date < max) 
    
console.log('------------------------------------');
// Numeros pares usando do while
let numbers = 1;
do {
    if(numbers % 2 == 0) {
        console.log('doWhile numero par:', numbers);
    } else {
        console.log('doWhile numero impar:', numbers);
    }
    ++numbers;
} while(numbers <= 10);
