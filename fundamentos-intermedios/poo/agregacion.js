// Uso de agregacion:
// Es como una asociacion donde el que tiene un rol mayor es como el contenedor
// Osea una clase contiene a otra, pero ambas viven separadas

const company = {
  nombre: 'Company Js',
  empleados: [],
  direccion: [],
}

class Empleados {
  constructor(argNombre, argApellido) {
    this.nombre = argNombre;
    this.apellido = argApellido;
  }
}

class Direccion {
  constructor(argCalle, argCiudad, argPais) {
    this.calle = argCalle;
    this.ciudad = argCiudad;
    this.pais = argPais;
  }
}

// Instanciamos objetos empleados:
const empleado1 = new Empleados('Pedro', 'Marquez');
const empleado2 = new Empleados('Marco', 'Gutierrez');

// Instaciamos objetos direccion:
const userDireccion1 = new Direccion('Maracuya', 'Parana', 'Argentina');
const userDireccion2 = new Direccion('San martin', 'Lima', 'Peru');

// Realizamos la agregacion de empleados:
company.empleados.push(empleado1);
company.empleados.push(empleado2);

company.direccion.push(userDireccion1);
company.direccion.push(userDireccion2);

// Vemos el objeto:
console.log('Objeto con agregacion:');
console.log(company);

// Vemos las clases:
console.log('=====================================');
console.log('Clases de empleados:');
console.log(empleado1);
console.log(empleado2);

console.log('=====================================');
console.log('Clases de direccion:');
console.log(userDireccion1);
console.log(userDireccion2);

// Como vemos los objetos pueden vivir separados y estos pueden existir
// incluso si el objeto company es eliminado
