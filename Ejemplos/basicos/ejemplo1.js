// Determinar cual es el numero mayor

// Para ello haremos una funcion:
function cualEsMayor(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}

// Tambien podemos hacerlo con un ternario:
function mayorTernario(a, b) {
    return (a > b) ? a : b;
}

// Tambien podeos hacerlo con una lista:
let listNumber = [10, 45, 90, 34, 18, 23, 101];
function mayorLista(paramLista) {
    let numberMayor = 0;
    for(let valor of paramLista) {
        if(valor > numberMayor) {
            numberMayor = valor;
        }
    }
    return numberMayor;
}

let resultado1 = cualEsMayor(10, 5);
let resultado2 = mayorTernario(9, 23);
let resultLista = mayorLista(listNumber);

console.log(`El mayor es ${resultado1}`);
console.log(`El mayor es ${resultado2}`);
console.log(`El mayor de la lista es: ${resultLista}`);


