// En este ejemplo usaremos "Promise.all" para ejecutar en paralelo
// Esto ejecuta todas las promesas al mismo tiempo en lugar de esperar

// Realizamos las dos funciones:
function operacion1() {
    return new Promise(
        duracion => setTimeout( () => duracion(23 + 3), 2000)
    );
}

function operacion2() {
    return new Promise (
        duracion => setTimeout( () => duracion(5 * 4), 3000)
    );
}

// Realizamos la funcion asincrona con "promise.all"
async function ejecutarEnParalelo() {
    console.log('Ejecutando tareas en paralelo...');

    let [resultado1, resultado2] = await Promise.all([operacion1(), operacion2()]);
    
    console.log(resultado1);
    console.log(resultado2);

    console.log('Todas las tareas finalizadas en menos tiempo...');
}

ejecutarEnParalelo();