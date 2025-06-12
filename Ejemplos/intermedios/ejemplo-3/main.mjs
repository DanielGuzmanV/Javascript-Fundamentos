
// Importamos las clases de "usuarios.mjs"
import { Admin, Usuarios } from "./usuarios.mjs";

const valueUsers = [
  new Usuarios("Pedro", "pedro@email.com"),
  new Usuarios("Marco","marco@email.com"),
  new Usuarios("Pablo","pablo@email.com"),
  new Usuarios("Carlos","carlos@email.com"),

  new Admin("Marcelo", "marcelo@email.com", ["Lectura", "Borrar"]),
  new Admin("Alberto", "alberto@email.com", ["Escritura"]),
  new Admin("Mario", "mario@email.com", ["Borrar", "Escritura"]),
];

console.log('Usuarios:')
valueUsers
  .filter((users) => !(users instanceof Admin))
  .forEach((users, index) => console.log(index + 1," - ",users));
console.log('=================================================')
  
console.log('Administradores:')
valueUsers
  .filter((users) => users instanceof Admin)
  .forEach((users, index) => console.log(index + 1," - ",users));
console.log('=================================================')

// Agregamos permisos solo a los admins:
valueUsers
  .filter(admins => admins instanceof Admin)
  .forEach(admins => admins.agregarPermisos('Lectura', 'Borrar'))

console.log('Administradores con permisos actualizados:')
valueUsers
  .filter((users) => users instanceof Admin)
  .forEach((users, index) => console.log(index + 1," - ",users));

console.log('=================================================')
console.log('Admin con permiso de escritura:')
const adminsConEscritura = valueUsers
  .filter( (value)=> value instanceof Admin && value.tienePermisos('Escritura'));
console.log(adminsConEscritura.map(values => values.mostrarInfo()));


