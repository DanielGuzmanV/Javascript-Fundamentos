// Creamos un objeto constante:
const user = {
    id: 1001,
};

// No podremos cambiar el valor de const ya que es un 'object' constante:
// user = 'Ahora soy otra variable';
console.log(user);
console.log('----------------------------------');

// Podremos agregar mas propiedades al objeto constante:
user.name = 'Pablo';
user.apellido = 'Contreras';
user.edad = 23

// Vemos las nuevas propiedades
console.log(user);
console.log('----------------------------------');

// Tambien podremos agregar funciones:
// Funciones directas:
user.guardar = function() {
    console.log('Guardando datos de:', user.name);
}

// Funciones apartes:
user.editar = funcionEditar

function funcionEditar() {
    console.log('Editando datos de:',user.name);
}
console.log(user);
console.log('----------------------------------');

// Tambien podremos acceder a esos valores de las funciones
console.log(user.guardar());
console.log(user.editar());
console.log('----------------------------------');

// Podemos modificar el valor de las propiedades:
user.id = 1002;
user.name = 'Marco'
user.apellido = 'Salvatierra';
user.edad = 32;
console.log(user);
console.log('----------------------------------');

// Tambien podremos eliminar algunas propiedades:
delete user.edad;
delete user.editar;
console.log(user);
console.log('----------------------------------');

// Ahora si queremos que nuestro objeto constante no sea modificado usamos "Freeze"
const nuevoUsuario = Object.freeze({
    id: 2001,
    nombre: 'Pedro',
    apellido: 'Salvador',
    edad: 45
})
console.log('Objeto original');
console.log(nuevoUsuario);
console.log('----------------------------------');

// Intentamos cambiar los valores:
nuevoUsuario.id = 2002;
nuevoUsuario.nombre = 'Antonio';
nuevoUsuario.apellido = 'Mercedes';
nuevoUsuario.edad = 42;
console.log('Objeto intentando cambiar');
console.log(nuevoUsuario);
console.log('----------------------------------');

// Pero si queremos modificar los datos de las propiedades y no agregar mas propiedades usamos "Seal"
const newUser = Object.seal({
    id: 3001,
    name: 'Steve',
})
console.log(newUser);
console.log('----------------------------------');

// Intentamos agregar mas propiedades:
newUser.lastname = 'Miller';
newUser.age = 62;
console.log(newUser);
console.log('----------------------------------');

// Solo podremos modificar los valores de la propiedad:
newUser.id = 3002;
newUser.name = 'Carlos';
console.log(newUser);





