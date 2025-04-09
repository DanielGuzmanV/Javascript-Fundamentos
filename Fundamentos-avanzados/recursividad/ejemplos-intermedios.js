// Ejemplos practicos (intermedios)

// Sumar elementos de un array:
function sumarArr(paramArr) {
    if(paramArr.length === 0) return 0;

    return paramArr[0] + sumarArr(paramArr.slice(1));
}

const resultado = sumarArr([1, 2, 3, 4]);
console.log('La suma es:', resultado);

console.log('=======================================')

// Sumar elementos en arrays anidades (nested)
function sumaProfunda(paramArray) {
    let total = 0;
    for(const element of paramArray){
        if(Array.isArray(element)) {
            total += sumaProfunda(element);
        } else {
            total += element;
        }
    }
    return total;
}

const resultSum = sumaProfunda([1, [2,3], [4, [5]]]);
console.log('La suma de arrays es:', resultSum);

