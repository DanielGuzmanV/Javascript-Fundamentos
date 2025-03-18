// Verificar si un elemento existe en el array con un indice

function arrayConIdx(array, idx) {
    if(idx < 0 || array.length <= idx) {
        return 'El elemento no existe';
    }
    
    return array[idx];
}

let resultado = arrayConIdx( [5, 60, 85, 25, 12, 30, 23], 2);
console.log(`El elemento es: ${resultado}`);












