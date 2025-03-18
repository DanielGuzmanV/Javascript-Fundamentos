// Ejemplo:
// Usamos un modulo que contiene una combinacion de funciones y un objeto complejo

// Exportamos un objeto y funciones usando un objeto
const user = {
    name: 'Jhon Deacon',
    age: 30,
    occupation: 'Guitarrista'
}

function saludo(objectUser) {
    return `Hola que tal, ${objectUser.name}`;
}

function esAdulto(objectUser) {
    return objectUser.age >= 18;
}

function puestoTrabajo(objectUser) {
    console.log(`Su profesion es: ${objectUser.occupation}`);
}

module.exports =  {
    user,
    saludo,
    esAdulto,
    puestoTrabajo
}





