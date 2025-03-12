// Ejercicio
// - Crear un programa que, dada una lista de nombres pre armada, un usuario
// sea capaz de ingresar un nombre por teclado y el programa realice una 
// busqueda e identifique si el mismo esta presente en la lista o no

// - En caso de estar, este debe informar por pantalla esta situacion. Caso
// contrario de igual manera se debe informar mediante un mensaje


let listaNombres = ['Ana', 'Marcelo', 'Pedro', 'Sebastian', 'Dalton'];

const readline = require('readline');
const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
    
interfaz.question('Ingrese un nombre: ', (nombreIngresado) => {
    let nombreBuscado = nombreIngresado;
    // Buscamos de la primera forma:
    // buscarNombre(listaNombres, nombreBuscado);

    // Buscamos de la Segunda forma:
    // buscarNombreLista(listaNombres, nombreBuscado);


    // Buscamos de la Tercera forma:
    let resultado = buscarEnLista(listaNombres, nombreBuscado);
    if(resultado === true) {
        console.log('El nombre ' + nombreBuscado + ' esta en la lista');
    } else {
        console.log('El nombre ' + nombreBuscado + ' esta en la lista');
    }
    

    interfaz.close();
})
    
// Funcion para buscar el nombre, Primera forma:
function buscarNombre(paramList, nombre) {
    let nombreEncontrado = false;
    
    for(let valor of paramList) {
        if(valor === nombre) {
            console.log('El nombre ' + nombre + ' esta en la lista');
            nombreEncontrado = true;
            break;
        }
    }
    if(nombreEncontrado == false) {
        console.log('El nombre de ' + nombre + ' no se encontro en la lista');
    }
}

// Funcion para buscar el nombre, Segunda forma:
function buscarNombreLista(listaNombres, nombres) {

    let resultado = listaNombres.includes(nombres);
    if(resultado === true) {
        console.log('El nombre ' + nombres + ' esta en la lista');
    } else {
        console.log('El nombre ' + nombres + ' No esta en la lista');
    }
}

//Funcion para buscar el nombre, Tercera forma:
function buscarEnLista(listaNombres, nombres) {
    return listaNombres.includes(nombres);
}


