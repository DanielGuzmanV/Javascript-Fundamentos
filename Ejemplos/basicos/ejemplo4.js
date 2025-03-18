// Funcion para saber los numeros impares:

function numImpares(paramList) {
    for(let valor of paramList) {
        if(valor % 2 !== 0) {
            console.log('Es impar:', valor);
        }
    }
}

let listaNumbers = [12, 25, 85, 36, 61, 15, 27];
let listaNumbers2 = [1,2,3,4,5,6,7,8,9,10];

let resultadoLista = numImpares(listaNumbers);
console.log('----------------------------------');
let resultadoLista2 = numImpares(listaNumbers2);

