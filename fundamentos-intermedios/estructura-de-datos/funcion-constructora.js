// Funcion constructora, por convencion empieza con Mayuscula, ya que sin 
// esta solo seria una funcion normal

function CreateUser() {
  // con "this." creamos una propiedad que tendra un dato:
  this.name = 'Miguel';
  this.lastname = 'Mendoza';
  this.email = 'miguelmendoza1@gmail.com';
  this.active = true;
  this.developer = true;

  // Cuando creamos una funcion dentro de una funcion constructora, este deja de llamarse funcion
  // y pasa a ser un "Metodo"
  this.presentation = function () {
    console.log(`Hola soy ${this.name} y mi email es: ${this.email}`);
  }
}

// Creamos un objeto con "new":
let userOne = new CreateUser();
console.log(userOne);
console.log('---------------------------------------');

// Accedemos a las propiedades:
userOne.presentation();
console.log(userOne.lastname);
console.log('---------------------------------------');

// Funcion constructora con parametros:
function Usuario(name, lastname, address, email) {
  this.propName = name;
  this.propLastname = lastname;
  this.propAddress = address;
  this.propEmail = email;
  this.propAge = 23;
}

// Creamos un objeto sin poner nada en los parametros, donde todo saldria "undefined":
let mostrasUsuario = new Usuario;
console.log(mostrasUsuario);
console.log('---------------------------------------');

// Vemos las propiedades de nuestra funcion constructora, y tambine vemos cuantos parametros tiene con ".length"
console.log(Usuario.propName);
console.log(Usuario.propLastname);
console.log(Usuario.propAddress);
console.log(Usuario.propAge);
console.log(Usuario.length);
console.log('---------------------------------------');

// Creamos un objeto asignando los parametos, donde igualmente podemos ver sus propiedades
let mostrarParametrosUsuario = new Usuario('Marco', 'Martinez', 'Av brasil', 'marcomartinez@gmail.com');
console.log(mostrarParametrosUsuario);
console.log('---------------------------------------');

// Tambien podemos asignar a otras variables o constantes:
const UserDate = Usuario;
let newUserDate = new UserDate('Carlos', 'Centellas', 'B/ los santos', 'carloscentallas@gmail.com');
console.log(newUserDate);
console.log('---------------------------------------');

// Tambien podemos pasar como argumentos a otras funciones:
function funcionParametros(newFunction, argument1, argument2, argument3) {
  return new newFunction(argument1, argument2, argument3);
}

let newUserDateOne = funcionParametros(Usuario, 'Brandon', 'Barrientos');
let newUserDateTwo = funcionParametros(Usuario, 'Antonio', 'Aguilar');
console.log(newUserDateOne, newUserDateTwo);

// Nota: En codigo moderno se prefiere usar las "class" por ser mas claras y potentes
// pero en codigo antiguo o librerias mas viejas todavia se veran "Funciones constructoras"

