// Dada una matriz de números enteros.

// Devuelve una matriz en la que el primer elemento es la cantidad de números
// positivos y el segundo elemento es la suma de los números negativos. 
// El 0 no es ni positivo ni negativo.

// Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.
// Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
// debe devolver [10, -65].

function contarPositivosSumarNegativos(inputArr) {
  let resArr = []
  let valuesPositive = 0;
  let valuesNegative = 0;
  if(inputArr === null || inputArr.length <= 0) return resArr;
  for(let idx of inputArr) {
    if(idx > 0) {
      valuesPositive++;
    } else {
      valuesNegative += idx;
    }
  }
  resArr.push(valuesPositive, valuesNegative);

  return resArr;
}
let valueArray = [1, -2, 3, -4, -5, -6, 7, 8, 9, -10, 11, 12, -13, 14, -15];

console.log(contarPositivosSumarNegativos(valueArray));











