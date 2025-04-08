// Usamos Rest y Spread
// Realizamos una lista de compras dinamicas:
function agregarProductos(categoria, ...productos) {
    console.log(`Categoria: ${categoria}`);
    console.log('Productos:', productos);
}

const arrayFrutas = ['manzanas', 'bananas', 'kiwis', 'papayas'];

agregarProductos('Frutas', ...arrayFrutas);

// ==========================================================
console.log('===============================================')
// ==========================================================

// Realizamos un sistema de reservas:
// Recibimos un numero flexible de pasajeros (REST)
// Agregamos cada reserva a una lista global (SPREAD)

// Creamos la reserva:
const reservas = [];

// Funcion para agregar una nueva reserva:
function crearReserva(evento, fecha, ...personas) {
    if(personas.length === 0) {
        console.warn('No se proporcionaron nombres de personas para crear la reserva');
        return;
    }

    const nuevaReserva = {
        id: reservas.length + 1,
        evento,
        fecha,
        personas,
    }

    // Creamos un nuevo array con la nueva reserva (usamos spread)
    const newReservasUser = [...reservas, nuevaReserva];

    console.log('Reservas creadas:');
    console.log(nuevaReserva);

    console.log('Todas las reservas:');
    console.log(newReservasUser);

}

// Usamos la funcion:
crearReserva('Concierto de Rock', '1985-10-23', 'Martin', 'Emilia', 'Albert');

crearReserva("Taller de Fotografía", "2025-06-10", "Andrea");



