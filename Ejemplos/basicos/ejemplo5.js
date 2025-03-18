// Funcion que devuelva un numero menor y mayor de un array

let arrayRandom = [2, 5, 7, 15, -5, -100, 55];

function obtenerMenorMayor(paramLista) {
    let numMenor = paramLista[0];
    let numMayor = paramLista[0];

    for(let valor of paramLista) {
        numMenor = (numMenor < valor) ? numMenor : valor;
        numMayor = (numMayor > valor) ? numMayor : valor;
    }
    return [numMenor, numMayor];
}

let resultArray = obtenerMenorMayor(arrayRandom);
console.log(resultArray);












