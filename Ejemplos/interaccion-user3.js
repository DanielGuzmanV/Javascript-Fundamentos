// Ejemplo practico:
// * Ingresar dos numeros y almacenar sus valores en dos variables
// * Realizar una resta entre los dos valores
// * Almacenar el resultado en una variable
// * Si el resultado de la resta es > a 0, mostrar mediante consola
// * Si es mayor a 0, comparar si el numero es par, en caso de serlo mostrar 
// en consola "Es par" si no lo es "Es impar"
// * En caso que sea menor a 0, mostrar un mensaje que diga "Es menor o igual a 0"

const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

interfaz.question('Ingrese el primer numero:', (number1) => {
    let primerNumero = parseInt(number1);

    interfaz.question('Ingrese el segundo numero:', (number2) => {
        let segundoNumero = parseInt(number2);

        let resultResta = primerNumero - segundoNumero;

        if(resultResta > 0) {
            console.log('El resultado es mayor a Cero');
            if(resultResta % 2 == 0) {
                console.log('El resultado tambien es PAR');
            } else {
                console.log('El resultado es IMPAR');
            }
        } else if (resultResta <= 0) {
            console.log('El resultado es menor o igual a CERO')
        }
        
        interfaz.close();
    })
})











