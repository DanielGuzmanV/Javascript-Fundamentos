// Primero creamos 2 objetos similares:
let newUserOne = {
    id: 1001,
    email: 'correouser1@gamil.com',
    name: 'Marcelo',
    lastname: 'Mendez',
    active: true,
    developer: true,
    age: 43,
    birthday: [10, 'de Marzo de', 1995 ],
    recoverAccount: function() {
        console.log('Recuperando cuenta...');
    }
};

let newUserTwo = {
    id: 1002,
    email: 'correouser2@gamil.com',
    name: 'Pedro',
    lastname: 'Pazcal',
    active: true,
    developer: false,
    age: 25,
    birthday: [25, 'de septiembre de', 2005 ],
    recoverAccount: function() {
        console.log('Recuperando cuenta...');
    }
}
console.log(newUserOne);
console.log(newUserTwo);
console.log('----------------------------');

// Esta forma es muy repetitiva y para evitar eso lo haremos de esta manera:
function crearUsuario(id, email, name, lastname, active, developer, age, birthday) {
    return {
        id,
        email,
        name,
        lastname,
        active,
        developer,
        age,
        birthday,
        presentation: function() {
            console.log(`Hola soy ${this.name} y tengo ${age} años`);
        }
    }; 
}

// Ahora llamamos a esa funcion con esos parametros para crear un usuario:
let userOne = crearUsuario(
    1010,
    'cuentauser1@gmail.com',
    'Pablo',
    'Perez',
    true,
    false,
    45,
    [12, 'de enero de', 1990],
);

let userTwo = crearUsuario (
    1020,
    'cuentauser2@gmail.com',
    'Jhon',
    'Juarez',
    false,
    true,
    27,
    [15, 'de mayo de', 1998],
);

// Vemos a los nuevos usuarios:
console.log(userOne, userTwo);
console.log("----------------------------");


// Tambien podemos acceder a sus propiedades, en este caso la funcion:
userOne.presentation();
userTwo.presentation();
console.log("----------------------------");

console.log(userOne.birthday);
console.log(userTwo.birthday);

