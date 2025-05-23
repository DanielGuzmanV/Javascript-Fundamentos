// Uso de asociaciones:
// Una asociacion indica que dos objetos pueden estar relacionados, donde 
// un objeto1 puede estar relacionado con un objeto2 atravez de una propiedad

class Person {
  constructor(paramNombre, paramApellido) {
    this.name = paramNombre;
    this.lastName = paramApellido;
  }
}

const person1 = new Person('Marco', 'Garcia');
const person2 = new Person('Carlos', 'Martinez');

// Ejemplo de asociacion:
person2.padre = person1;

// Vemos por consola a ambos objetos:
console.log(person1);
console.log(person2);


