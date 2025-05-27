// Sumatoria:
// Escriba un programa que calcule la suma de todos los números del 1 al num 
// (ambos inclusive). El número siempre será un entero positivo mayor que 0. 
// Su función solo necesita devolver el resultado. Lo que se muestra entre 
// paréntesis en el ejemplo a continuación es cómo obtenerlo y no forma parte 
// del mismo; consulte las pruebas de ejemplo.

// Entrada: 2 | Operacion: (1 + 2) | -> Salida: 3 
// Entrada: 8 | Operacion: (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) | -> Salida: 36

function summation(num) {
  if(num < 0) return 'Numero deber ser mayor a 0';

  let result = num;
  let value;

  for(let idx = 1; idx <= num; idx++) {
    value = num - idx;
    result += value;
  }
  return result;
}

let valueResult = summation(8);
console.log('El resultado es:', valueResult);




