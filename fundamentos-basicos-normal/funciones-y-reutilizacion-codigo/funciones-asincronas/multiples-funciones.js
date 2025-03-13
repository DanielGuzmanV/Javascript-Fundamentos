// En este ejemplo ejecutaremos multiples funciones asincronas
// ya que await permite esperar varias operaciones asincronas

function tareaOne () {
    return new Promise(
        duracion => setTimeout( 
            () => duracion('Tarea 1 esta lista...'), 2000 
        )

    );
}

function tareaTwo () { 
    return new Promise(
        duracion => setTimeout( () => duracion('Tarea 2 esta lista...'), 3000)
    );
}

async function ejecutarTareas() {
    console.log('Ejetando tareas...');

    let resultado1 = await tareaOne();
    console.log(resultado1);

    let resultado2 = await tareaTwo();
    console.log(resultado2);

    console.log('Todas las tareas estan completadas...');
}

ejecutarTareas();





