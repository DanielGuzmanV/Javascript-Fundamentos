// Principales conceptos de POO
// 1. Clases: Estas son plantillas para crear objetos
// contienen propiedades (atributos) y metodos(funciones dentro de la clase)

// Ejemplo: de una clase
class DatosPersona {

    // Creamos un constructor que tendra propiedades:
    // nombre, apellido y edad son parametros del constructor    
    constructor(nombre, apellido, edad) {

        // (this.propNombre, this.propApellido y this.propEdad) son propiedades del objeto
        // donde los parametros del constructor lo asignamos a las propiedades del objeto
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
    }

    // Creamos un metodo:
    metodoSaludar() {
        console.log(`Hola, soy ${this.propNombre} ${this.propApellido} y tengo ${this.propEdad} años`);
    }

}

// 2. Objetos: Son instancias de una clase (una copia con valores propios)
// estos se crean usando "new"

// Ejemplo:
// "new DatosPersona('John', 'Deacon', 30);" es la creacion de una instancia
// y "const primeraPersona" es la instancia, pero tambien es el objeto
// Este objeto puede crear nuevas propiedades y acceder a los metodos:
const primeraPersona = new DatosPersona('John', 'Deacon', 30);

// Usamos el metodo:
primeraPersona.metodoSaludar();

// Acceder directamente a una propiedad:
console.log(primeraPersona.propNombre);
console.log(primeraPersona.propApellido);
console.log(primeraPersona.propEdad);
