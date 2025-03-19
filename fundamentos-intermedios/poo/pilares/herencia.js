// Herencia:
// Esto permite que una clase herede propiedades y metodos de otra
// para ello usamos extends

// Creamos la primera clase:
class Animal {

    // Creamos su constructor
    constructor(nombre) {
        this.propNombre = nombre;
    }

    // Creamos un metodo:
    sonidoAnimal() {
        console.log(`El ${this.propNombre} hace un sonido...`);
    }
}

// Ahora extendemos esta clase
class Perro extends Animal {
    
    // Creamos un nuevo metodo:
    ladrar() {
        console.log(`${this.propNombre} esta ladrando...`);
    }
}

// Creamos una instancia:
const miPerro = new Perro('Princeso');

// Metodo heredado de la clase Animal
miPerro.sonidoAnimal();
console.log('-----------------------------');

// Metodo propio de la clase Perro
miPerro.ladrar();





