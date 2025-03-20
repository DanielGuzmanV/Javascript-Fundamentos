// Desestructuracion en objetos:
// Nos permite extraer propiedades de un objeto y asignarlas a variables

// Ejemplo 1 sin desestructuracion:
const vehiculo = {
    marca: 'Toyota',
    precio: 10500,
    estado: 'Nuevo'
}

let marcaVehiculo = vehiculo.marca;
let precioVehiculo = vehiculo.precio;

console.log(marcaVehiculo);
console.log(precioVehiculo);

console.log('-----------------------------------------------');

// Ejemplo 2 con desestructuracion:
const persona = {
    nombre: 'Alberto',
    edad: 20,
    ciudad: 'Buenos Vientos'
};

let {nombre, edad} = persona;
console.log(nombre);
console.log(edad);

// Tambien podemos cambiar el nombre de las variables, pero esto no modifica el objeto:
const {nombre: nombreCompleto, edad: años} = persona;
console.log(nombreCompleto);
console.log(años);

// Verificamos que el objeto:
console.log(persona);
console.log('-----------------------------------------------');

// Tambien podemos cambiar el valore de la variable y igualmente no modificamos el objeto:
let {nombre: nuevoNombre} = persona;
nuevoNombre = 'Manuel';
console.log(nuevoNombre);

// verificamos si el objeto no cambio:
console.log(persona);

// Y si queremos cambiarlo directamente del objeto original, podemos hacerlo
persona.nombre = 'David';
let {nombre: cambioNombre} = persona;
console.log(cambioNombre);

// Verificamos en el objeto original:
console.log(persona);
console.log('------------------------------------------------');

// Desestructuracion anidad:
// Cuando hay objetos dentro de objetos
const empleado = {
    nameUser: 'Pablo',
    occupation: 'Developer',
    company: {
        name: 'TechGod',
        location: 'Tanzania'
    }
};

// Extraemos datos del objeto anidado:
let {nameUser, company: {name: nameCompany, location}} = empleado;
console.log(nameUser);
console.log(nameCompany);
console.log(location);








