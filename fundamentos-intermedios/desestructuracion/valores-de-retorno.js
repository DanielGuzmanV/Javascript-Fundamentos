// Desestructuracion en valores de retorno
// Cuando una funcion devuelve un objeto o array, se puede extraer solo lo que se necesita

// Ejemplo con un objeto:
function obtenerValorUser() {
    return {id: 1, nombre: 'Carlos', rol: 'Admin'};
}

const {nombre, rol} = obtenerValorUser();
console.log(nombre);
console.log(rol);

console.log('-----------------------------------');

// Ejemplo con un array:
function obtenerValorNum() {
    return [34, 62, 90, 31, 67, 84];
}

let [primero, , tercero] = obtenerValorNum();
console.log(primero, tercero);