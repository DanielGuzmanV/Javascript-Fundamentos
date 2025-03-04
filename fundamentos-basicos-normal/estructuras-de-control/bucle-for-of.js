//  Bucle For of:
// Usado para recorrer arrays y objetos iterables (cadenas, mapas, sets), no necesita un indice
let listaPares = [4, 6, 2, 10, 8];
let listaAnimales = ['Perro', 'Gato','Vaca', 'Conejo'];
let listaNumeros = [23, 51, 11, 65, 76, 12];
let listaRandom = [2, 5, 7, 15, -5, -100, 55];

for (let valor of listaPares) {
    console.log("Valor pares:", valor);
}
console.log('---------------------------------');

for(let idxAnimal of listaAnimales) {
    console.log("Animal:", idxAnimal);
}
console.log('---------------------------------');

for(let idxNumber of listaNumeros) {
    if(idxNumber < 60) {
        console.log(`El numero es: ${idxNumber}`);
    }
}
console.log('---------------------------------');

function obtener_Numero_MenorMayor(nuevaLista) {
    let numeroMenor = nuevaLista[0];
    let numeroMayor = nuevaLista[0];

    for(let idxNumero of nuevaLista) {
        numeroMenor = numeroMenor < idxNumero ? numeroMenor : idxNumero;
        numeroMayor = numeroMayor > idxNumero ? numeroMayor : idxNumero;
    }
    return [numeroMenor, numeroMayor];
}

let respuestaLista = obtener_Numero_MenorMayor(listaRandom);
console.log(respuestaLista);
console.log('---------------------------------');

// Encontramos el numero mas grande:
const arrayNumeros = [8, 3, 15, 22, 7, 9]

let number = arrayNumeros[0];
let numberMayor = 0;

for(let idx of arrayNumeros) {

    if(idx > number) {
        number = idx;
        numberMayor = number;
    }
}
console.log(`Numero mas grande: ${numberMayor}`);

console.log('---------------------------------');

// Tambien funciona en cadena de textos:
for(let letras of 'Hola Mundo') {
    console.log(letras);
}






