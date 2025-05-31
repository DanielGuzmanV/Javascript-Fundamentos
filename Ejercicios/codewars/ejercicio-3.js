// Dada una matriz de números enteros como cadenas y números, devuelve la suma 
// de los valores de la matriz como si todos fueran números.

// Devuelve tu respuesta como un número.
// matriz: [9, 3, "7", "3"], respuesta: 22;
// matriz: ["5", "0", 9, 3, 2, 1, "9", 6, 7], respuesta: 42;
// matriz: ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"], respuesta: 41; 

function sumaMix(arr){
  let response = 0;
  for(let idx of arr) {
    if(typeof idx === 'string' || typeof idx === 'number') {
      let newvalue = Number(idx);
      response += newvalue
    }
  }
  return response;
}

let valueArray = ["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"];
console.log('Respuesta: ',sumaMix(valueArray));

// Funcion mas optimizada por si entra un "numero", true, undefined
function sumaPlus(arrValue) {
  let response = 0;
  for(let value of arrValue){
    const num =Number(value);

    if(!isNaN(num)){
      response += num;
    }
  }
  return response;
}
let arrRandom= ["3", 6, true, 0, "5", 8, "numero", "6", 2, "0", undefined];
console.log('Respuesta: ',sumaPlus(arrRandom));


