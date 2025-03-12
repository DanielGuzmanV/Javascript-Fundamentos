// Ejemplo usando arrays y matrices, usando pokemons de ejemplo:
// Creamos el array:
let nombresPokemon = ['Charmander', 'Pikachu', 'Bulbasaur', 'Squirtle'];

// Creamos la matriz:
let ptsHabilidades = [
    [80, 75, 90],
    [65, 55, 95],
    [75, 70, 60],
    [80, 65, 60]
]

// Creamos la primera funcion: 
function calcularPromedioHabil(paramHabilidades) {
    let totPromedios = [];

    for(let idx = 0; idx < paramHabilidades.length; idx++) {
        let fila = paramHabilidades[idx];
        let suma = fila.reduce( (total, habilidad) => total + habilidad, 0 );

        totPromedios[idx] = suma / fila.length;
    }
    return totPromedios;
}

// Creamos la segunda funcion:
function evaluarAptitud(paramPokemon, paramPromedios) {
    for(let idx = 0; idx < paramPromedios.length; idx++) {
        if(paramPromedios[idx] >= 70) {
            console.log('El pokemon ' + paramPokemon[idx] + ' supera el promedio con: ' + paramPromedios[idx]);
        } else{
            console.log('El pokemon ' + paramPokemon[idx] + ' No supera el promedio con: ' + paramPromedios[idx]);
        }
    }
}

// Ahora usamos las funciones:
let resultPromedios = calcularPromedioHabil(ptsHabilidades);

evaluarAptitud(nombresPokemon,resultPromedios);

