// Ejemplo:
// Exportamos una clase ESM y luego la importamos

export class ClaseCalculador {
    
    constructor(nameClass) {
        this.name = nameClass;
    }

    // Realizamos los metodos:
    metodoSumar(number1, number2) {
        return number1 + number2;
    }

    metodoResta(number1, number2) {
        return number1 - number2;
    }

    metodoMultiplicar(number1, number2) {
        return number1 * number2;
    }

    metodoDividir(number1, number2) {
        return number1 / number2;
    }

}

