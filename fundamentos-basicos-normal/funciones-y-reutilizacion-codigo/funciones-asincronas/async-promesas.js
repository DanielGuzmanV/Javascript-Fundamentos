// Ejemplo usando "async/await" con Promesas:
// En este ejemplo una funcion asincrona espera 
// el resultado de una promesa antes de continuar

function obtenerNumeros() {
    return new Promise(duracion => {
        setTimeout( () => duracion(23), 1000 );
        
    })
}

// Tambien de esta manera podemos acceder a nuestra funcion que tiene un "Promise"
obtenerNumeros().then(respuesta => console.log('Resultado es:', respuesta));

async function mostrarNumero() {
    console.log('Obteniendo numero...');

    // Podemos poner otra duracion
    await new Promise(newDuracion => setTimeout(newDuracion, 2000))
    let numero = await obtenerNumeros();

    console.log('El numero obtenido es:', numero);
}

// mostrarNumero();
console.log('----------------------------------------')

// Tambien podemos usar parametros:
function obtenerNuevoNumero(number = 0) {
    return new Promise( duracion => {
        setTimeout( () => duracion(number), 1500)
    })
}

async function mostrarNuevoNumero (newNumber = 0) {
    console.log('Obteniendo nuevo numero...');
    let resultado = await obtenerNuevoNumero(newNumber);
    console.log('El nuevo numero es:', resultado);
}

// mostrarNuevoNumero(65);





