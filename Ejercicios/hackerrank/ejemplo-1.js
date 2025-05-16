// Escribir una funcion que:
// 1. Reciba un arreglo de enteros como parametro
// 2. Sume todos los elementos del arreglo
// 3. Retorne el resultado de esa suma

// Tener en cuenta:
// - Los numeros en el arreglo pueden ser muy grandes

// Ejemplo de entrada:
// n = 5
// [1000000001 1000000002 1000000003 1000000004 1000000005]
// Resultado: 5000000015
// - Primera linea indica cuantos numeros hay en el arreglo
// - Segunda linea los 5 numeros separados por espacios
// - Tercera linea es el resultado de la suma 

let arrBigNumbers = [];

const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let cantidadValue = 0;

interfaz.question('Cuantos elementos tendra el array: \n', (number) => {
    cantidadValue = parseInt(number);

    interfaz.question('Ingrese los numeros separados por espacios: \n', (valores) => {
        const arrayValue = valores.trim().split(' ').map(idx => parseInt(idx, 10));

        if(arrayValue.length !== cantidadValue) {
            console.log(`Se esperaba ${cantidadValue} numeros, pero se ingreso ${arrayValue.length}`);
        }

        const resultadoSum = sumaArrGrande(arrayValue);
        console.log(`La suma es: ${resultadoSum}`);
        interfaz.close();



    })
})

function sumaArrGrande(arrValue) {
    let result = 0;
    for(let numeros of arrValue) {
        result += numeros;
    }
    return result;
}


