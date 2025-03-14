// Ejemplo 2:  Verificacion de numeros primos en una lista
// Queremos verificar si los numeros de una lista son primos, pero pueden ocurrir varios errores
// * Si el dato no es un primo
// * Si el numero es negativo

// Creamos la excepcion personalizada
class CustomPrimoError extends Error{
    constructor(customMessage) {
        super(customMessage);
        this.nameError = 'CustomErrorPrimo';
    }
}

// Creamos la funcion para verificar si un numero es primo
function esPrimo(valueNumber) {
    if(typeof valueNumber !== "number") {
        throw new TypeError("El valor debe ser un numero");
    } 
    if( valueNumber < 0 ) {
        throw new CustomPrimoError('No se permiten numeros negativos');
    }
    if(valueNumber < 2) {
        return false;
    }
    for(let idx = 2; idx < valueNumber; idx++) {
        if(valueNumber % idx === 0) {
            return false;
        }
    }
    return true;
}

// Creamos el manejo de errores 
function verificarPrimo(listaNumeros) {
    listaNumeros.forEach((number) => {
        try {
            
            const resultado = esPrimo(number);
            console.log(`${number} ${resultado ? "Es primo": "No es primo"}`);

        } catch (error) {
            if(error instanceof CustomPrimoError) {
                console.log('Error de numero primo:', error.message);
            } else if(error instanceof TypeError) {
                console.log('Error de tipo:', error.message);
            } else {
                console.log('Otro error ocurrio:', error.message);
            }
        } finally{
            console.log('Analisis de numeros completadas');
        }
    });
}

// Creamos la lista de numeros:
let numerosArray1 = [1,2,3,4,5,6,7,8,9];
let numerosArray2 = [3,-4,7,-9,5];
let numerosArray3 = ['Hola', 4,5, 'Mundo', 23, 8];

// verificarPrimo(numerosArray1);
// verificarPrimo(numerosArray2);
verificarPrimo(numerosArray3);



