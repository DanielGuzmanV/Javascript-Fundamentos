// Callbacks (Metodo antiguo)
// Estos se manejan de forma manual y son poco optimos
// Es simplemente una funcion que se pasa como argumento y 
// se ejecuta despues de una tarea asincrona

// Creamos la funcion:
function descargarArchivo(url, callback) {
    console.log("Descargando archivo...");
    setTimeout( function () {
        callback("Archivo descargado de " + url);
    }, 2000);
}


// Llamamos a la funcion, podemos realizarlo de dos maneras:
// Primera forma:
// descargarArchivo("https://ejemplo.com/archivo", function(resultado) {
//     console.log(resultado);
// });
    
// Segunda forma:
function resultado(result) {
    console.log(result);
}
    
// descargarArchivo("https://ejemplo.com/archivo", resultado);
    

// Si hay muchas tareas, se genera callback hell

// ============================================================
function saludo(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

function despedida() {
    console.log('Adios!');
}

saludo("Marco", despedida);

