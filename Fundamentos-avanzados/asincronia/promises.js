// Promises (.then() y .catch())
// Las promesas permiten manejar la asincronia de forma mas estructurada
// Son mas faciles de entender y es mejor usar estas que los callbacks

// Ejemplo 1:
// Creamos la funcion
function descargarArchivo(url) {
    return new Promise( function(resolve, reject) {
        console.log("Descargando archivo...");
        
        // Simularemos un error que sucedera en 50% de los casos
        const error = Math.random() < 0.5;

        setTimeout(() => {


            if(error){
                reject("Error la descargar el archivo de " + url);
            } else {
                resolve("EL archivo fue descargado de " + url);
            }
        }, 2000);
    });
}

// Usamos .then() y .catch()
descargarArchivo("https://ejemplo.com/archivo")
    .then((resultado) => {
        console.log(resultado);
    })
    .catch(error => console.log("error:", error));

// De esta forma evitamos el anidamiento extremo de los callbacks
// pero si hay muchos ".then()" puede volverse confuso



// ==========================================================
// Ejemplo 2: (Este ejemplo es de prueba, no funciona)
function requestHandler(solicitar, respuesta) {
    Usuario.encontrarId(solicitar, usuarioId)
    .then(function(usuario) {
        return Tareas.encontrarId(usuario.taresId)
    })
    .then(function (tareas) {
        tareas.Completadas = true;
        return tareas.guardar();
    })
    .then(function() {
        respuesta.enviar("Tareas completadas");
    })
    .catch(function(errores) {
        respuesta.enviar(errores);
    })

}

