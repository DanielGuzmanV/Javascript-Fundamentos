// Ejemplo:
// En este ejemplo xportamos una clase y luego la importamos en otro archivo
// Exportando una clase con CommonJs

class CalculadorOperaciones {

    constructor(varNombre) {
        this.name = varNombre;
    }

    // Metodos:
    tituloClase(){
        // console.log(this.name);
        return this.name
    }

    sumar(value1, value2) {
        return value1 + value2;
    }

    restar(value1, value2) {
        return value1 - value2;
    }
    
    multiplicar(value1, value2) {
        return value1 * value2;
    }
    
    division(value1, value2) {
        return value1 / value2;
    }
}

module.exports = CalculadorOperaciones;

