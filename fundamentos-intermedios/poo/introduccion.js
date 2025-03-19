// Principales conceptos de POO
// 1. Clases: Estas son plantillas para crear objetos
// contienen propiedades (atributos) y metodos(funciones dentro de la clase)

// Ejemplo: de una clase
class DatosPersona {

    // Creamos un constructor que tendra propiedades:
    // nombre, apellido y edad son parametros del constructor    
    constructor(nombre, apellido, edad) {

        // this.varNombre, this.varApellido y this.varEdad son propiedades del objeto
        // donde los parametros del constructor lo asignamos a las propiedades del objeto
        this.varNombre = nombre;
        this.varApellido = apellido;
        this.varEdad = edad;
    }

    // Creamos un metodo:
    metodoSaludar() {
        console.log(`Hola, soy ${this.varNombre} ${this.varApellido} y tengo ${this.varEdad} años`);
    }

}

// 2. Objetos: Son instancias de una clase (una copia con valores propios)
// estos se crean usando "new"

// Ejemplo: de una instancia:
const primeraPersona = new DatosPersona('John', 'Deacon', 30);
primeraPersona.metodoSaludar();

// Acceder directamente a una propiedad:
console.log(primeraPersona.varNombre);
console.log(primeraPersona.varApellido);
console.log(primeraPersona.varEdad);

console.log('----------------------------------------------');

// 1. Agregando mas propiedades dentro del constructor:
// podemos agregar propiedades adicionales sin necesidad de usar los parametros del constructor

class UsoParametros1 {
    
    // Creamos el constructor:
    constructor(paramNombre, paramEdad) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        this.pais = 'Papua Nueva Guinea';
    }

    // Metodos:


}

// Creando una instancia:
let persona1 = new UsoParametros1('Alberto', 24);
console.log(persona1);
console.log('----------------------------------------------');

// 2. Agregando propiedades fuera del constructor:
// Podemos agregar propiedades incluso cuando no esten relacionados con los parametros del constructor

class UsoParametros2 {
    
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Metodo
    saludar() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }

}

// Creamos una instancia
let persona2 = new UsoParametros2('Marco', 23);
persona2.saludar();

// Agregamos la propiedad fuera del constructor
persona2.apellido = 'Soliz';
console.log(persona2);
console.log('----------------------------------------------');

// 3. Propiedades con valores por defecto:
// Podemos estableces valores por defecto en el constructor o agregar propiedades
// adicionales dentro de la clase sin necesidad de que se pasen como parametros

class UsoParametros3 {
    
    constructor(nombre = 'Sin nombre', edad = 0, ciudad = 'Parana') {
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;
    }

    // Metodos:
    cambiarNombre(nuevoNombre) {
        this.propNombre = nuevoNombre;
    }
    
    cambiarEdad(nuevaEdad) {
        this.propEdad = nuevaEdad;
    }

    cambiarCiudad(nuevaCiudad) {
        this.propCiudad = nuevaCiudad;
    }

}

// Creamos una instancia:
const persona3 = new UsoParametros3();
console.log(persona3);

persona3.cambiarNombre('Dante');
persona3.cambiarEdad(35);
persona3.cambiarCiudad('Buenos Aires');
console.log(persona3);

// Creamos una nueva instancia
const nuevaPersona3 = new UsoParametros3('Manuel', 21);
console.log(nuevaPersona3);
console.log('----------------------------------------------');

// 4. Propiedades sin valores asignados en el constructor

class UsoParametros4 {
    
    constructor(nombre = 'Sin nombre', edad = 0, ciudad = undefined){
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;

        // Propiedades sin valores iniciales, Tambien podemos poner "undefined":
        this.propOcupacion;
        this.propEstado;

    }

    // Metodos para asignar valor a las propiedades:
    setOcupacion(paramOcupacion) {
        this.propOcupacion = paramOcupacion;
    }

    setEstado(paramEstado) {
        this.propEstado = paramEstado;
    }
    
    informacionUsuario() {
        console.log(`Nombre: ${this.propNombre}, Edad: ${this.propEdad}, Ocupacion: ${this.propOcupacion}, Estado: ${this.propEstado}`);
    }

}

// Creamos una instancia de prueba:
const datosPersona = new UsoParametros4();
console.log(datosPersona);
console.log('----------------------------------------------');

// Creamos otra instancia:
const datosPersona2 = new UsoParametros4('Alfredo', 45, 'Parana');
console.log(datosPersona2);
console.log('----------------------------------------------');

// Vemos los datos del usuario:
datosPersona2.informacionUsuario();
console.log('----------------------------------------------');

// Agregamos una ocupacion y estado:
datosPersona2.setEstado('Divorciado');
datosPersona2.setOcupacion('Devoloper');

datosPersona2.informacionUsuario();



