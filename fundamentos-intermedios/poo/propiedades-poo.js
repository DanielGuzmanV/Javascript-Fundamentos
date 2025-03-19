// 1. Propiedades dentro del constructor:
// podemos agregar propiedades adicionales sin necesidad de usar los parametros del constructor

class UsoPropiedades1 {
    
    // Creamos el constructor:
    constructor(paramNombre, paramEdad) {
        this.nombre = paramNombre;
        this.edad = paramEdad;
        
        // Estas propiedades se le pueden asignar valores, pera tambien se los puede dejar sin 
        // ningun dato, como no se pide al crear la instancia lo mejor seria usarlo en metodos
        this.pais = 'Papua Nueva Guinea';
        this.ocupacion = undefined;
        this.estado = undefined;
        this.pasatiempo;
        this.comidaFavorita;
    }

}

// Creando una instancia:
let persona1 = new UsoPropiedades1('Alberto', 24);
console.log(persona1);
console.log('----------------------------------------------');

// 2. Propiedades fuera del constructor:
// Podemos agregar propiedades incluso cuando no esten relacionados con los parametros del constructor

class UsoPropiedades2 {
    
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

}

// Creamos una instancia
let persona2 = new UsoPropiedades2('Marco', 23);
console.log('Propiedades originales:', persona2);
console.log('----------------------------------------------');

// Agregamos la propiedad fuera del constructor
persona2.apellido = 'Soliz';
persona2.ocupacion = 'Developer';
persona2.estado = 'Soltero';

console.log('Nuevas propieades:', persona2);
console.log('----------------------------------------------');

// 3. Propiedades con valores por defecto:
// Podemos estableces valores por defecto en el constructor o agregar propiedades
// adicionales dentro de la clase sin necesidad de que se pasen como parametros

class UsoPropiedades3 {
    
    constructor(nombre = 'Sin nombre', edad = 0, ciudad = 'Sin ciudad asignada...') {
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;
    }

}

// Creamos una instancia:
const persona3 = new UsoPropiedades3();

// Usamos los valores por defecto:
console.log(persona3);
console.log('----------------------------------------------');

// Creamos una nueva instancia donde asignamos nuevos valores
const nuevaPersona3 = new UsoPropiedades3('Manuel', 21, 'Buenos Vientos');
console.log(nuevaPersona3);
console.log('----------------------------------------------');




