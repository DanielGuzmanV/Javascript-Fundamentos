// Metodos: estos son las acciones o comportamientos del objeto, estos tambien 
// son funciones, pero dentro de una clase se les conoce como metodos 

// Metodo usando un "console.log" y "return"
class UsoMetodos1 {
    constructor(nombre, apellido, edad) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
    }

    // Creamos metodos sencillos:
    // Metodo con "console.log"
    saludar() {
        console.log(`Hola que tal, soy ${this.propNombre}`);
    }

    // Metodo con "return"
    presentacion() {
        return `Mi nombre es ${this.propNombre} ${this.propApellido} y tengo ${this.propEdad} años`;
    }

}

// Creamos una instancia:
const persona1 = new UsoMetodos1('Sacariaz', 'Flores', 45);

// Metodo de saludar, como es un metodo que no retorna nada
// lo llamamos de esta manera:
persona1.saludar();

// Metodo de presentacion, como es un metodo que si retorna algo,
// lo llamamos de esta otra manera:
console.log(persona1.presentacion());
console.log('-----------------------------------');

// Metodos que cambian datos de las propiedades por defecto:
class UsoMetodos2 {
    
    constructor(marca = 'Sin marca', estado = undefined, precio = 0) {
        this.propMarca = marca;
        this.propEstado = estado;
        this.propPrecio = precio;
    }
    
    // Agregamos los metodos:
    agregarMarca(nuevaMarca) {
        this.propMarca = nuevaMarca;
    }
    
    agregarEstado(nuevoEstado) {
        this.propEstado = nuevoEstado;
    }
    
    agregarPrecio(nuevoPrecio) {
        this.propPrecio = nuevoPrecio;
    }
}

// Creamos una instancia:
const datosVehiculo = new UsoMetodos2();

// Vemos los datos por defecto:
console.log(datosVehiculo);

// Ahora cambiamos esos datos:
datosVehiculo.agregarMarca('Toyota');
datosVehiculo.agregarEstado('Seminuevo');
datosVehiculo.agregarPrecio(15000);

// Vemos los datos cambiados:
console.log(datosVehiculo);
console.log('-----------------------------------');

// Propiedades sin valores asignados en el constructor que usamos en metodos
class UsoMetodos3 {
    constructor(nombre = undefined, edad = undefined, ciudad = undefined) {
        this.propNombre = nombre;
        this.propEdad = edad;
        this.propCiudad = ciudad;
        
        // Propiedades sin valores
        this.propOcupacion;
        this.propEstado;
    }
    
    // Asigamos valores a los metodos sin valores o datos:
    setOcupacion(nuevaOcupacion) {
        this.propOcupacion = nuevaOcupacion;
    }
    
    setEstado(nuevoEstado) {
        this.propEstado = nuevoEstado;
    }
    
    informacionUsuario() {
        console.log(`Nombre: ${this.propNombre}, Edad: ${this.propEdad}, Ocupacion: ${this.propOcupacion}, Estado: ${this.propEstado}`);
    }
}

// Creamos varias instancias:
// Primero usamos las propiedades por defecto:
const datosPersona1 = new UsoMetodos3();
console.log(datosPersona1);

// Agregamos valores a las propiedades:
const datosPersona2 = new UsoMetodos3('Nelso', 55, 'Papua Nueva guinea');
console.log(datosPersona2);

// Ahora que agregamos datos, podremos usar el metodo de "informacion usuario":
datosPersona2.informacionUsuario();
console.log('-----------------------------------');

// Vemos que Ocupacion y Estado no tienen datos, ahora usamos los metodos para agregarle datos
datosPersona2.setOcupacion('Piloto');
datosPersona2.setEstado('Divorciado');

// Vemos nuevamente el metodo de "informacion de usuario"
datosPersona2.informacionUsuario();

// Ejemplos del los metodos get y set:
class UsoMetodos4 {

    #propUsuario;
    #propEdad;
    #propOcupacion;
    #propPassword;

    constructor(nombre, edad, ocupacion, password) {
        this.#propUsuario = nombre;
        this.#propEdad = edad;
        this.#propOcupacion = ocupacion;
        this.#propPassword = password;
    }

    // Acceder al valor pero no modificamos, 
    // osea leemos el nombre pero no sobreescribimos
    get retornarNombre() {
        return `Hola soy, ${this.#propUsuario}`;
    }

    // Modificamos el valor pero no accedemos
    set cambiarPassword(newPassword) {
        this.#propPassword = newPassword;
    }

    // Agregamos un get para ver si password cambio
    get password() {
        return this.#propPassword;
    }
}

let newDatePerson = new UsoMetodos4("Manuel", 43, "Profesor", "CT1234567");
console.log(newDatePerson);
console.log(newDatePerson.retornarNombre);

// Verificamos los cambios:
newDatePerson.cambiarPassword = "New Password: CT87654321";
console.log(newDatePerson.password);


