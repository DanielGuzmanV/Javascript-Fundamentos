// Este ejercicio trata sobre multiplicar un número dado por ocho 
// si es un número par y por nueve si no lo es.
function simpleMultiplicacion(number){
  // Manera facil y corta:
  // return number * (number % 2 == 0 ? 8 : 9);

  let result = 0;
  if(number % 2 === 0) {
    result = number * 8;
  } else {
    result = number * 9;
  } 
    return result
}

console.log('Respuesta:', simpleMultiplicacion(2))
