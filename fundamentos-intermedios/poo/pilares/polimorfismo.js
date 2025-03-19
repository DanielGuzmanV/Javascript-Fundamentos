// Polimorfismo:
// Este permite que los metodos se comporten diferente segun la clase
// que los implemente

// Ejemplo:
class Vehiculo {
    
    // Creamos metodos:
    encender() {
        console.log('El vehiculo esta encendido...');
    }

    acelerar() {
        console.log('El vehiculo esta acelerando...');
    }

    frenar() {
        console.log('El vehiculo freno...');
    }

    apagar() {
        console.log('El vehiculo esta apagdo');
    }
}

// Creamo otra clase que implementara estos metodos
class Coche extends Vehiculo {

    // Hacemos que el metodo se comporte diferente:
    encender() {
        console.log('El vehiculo encendio, pero se apago...');
    }

    acelerar(){
        console.log('El vehiculo encendio y acelero a 100 km/h');
    }
}

// Creamos la instancia:
const miCoche = new Coche();
miCoche.encender();
miCoche.acelerar();
miCoche.apagar();




