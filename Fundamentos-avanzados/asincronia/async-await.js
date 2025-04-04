// Async/await (Lo mas moderno y claro)
// Permite escribir codigo asincrono como si fuera sincrono
// Ejemplo 1:
function descargarArchivo(url) {
    return new Promise(function (resolve, reject) {
        console.log("Descargando archivo...");

        setTimeout(function() {
            const error = Math.random() < 0.5;

            if(error) {
                reject("Ocurrio un error al descargar " + url);
            } else {
                resolve("El archivo fue descargado exitosamente de " + url);
            }
        }, 2000);
    });
}

async function procesoDescarga() {
    try {
        console.log("Iniciando descarga...");
        let resultado = await descargarArchivo("https://ejemplo.com/archivo");
        console.log(resultado);
    } catch (error) {
        console.log("Ops... Ocurrio un error:", error);
    }
}

// llamamos a la funcion asincrona:
procesoDescarga();
// De esta forma el codigo es mas limpio y facil de leer
// evitamos la anidacion de ".then()"



// ===============================================================
// Manejo de errores con try, catch
// Las usamos en caso de que una promesa falle, podemos manejar el error con try...catch
async function obtenerDatos() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error al obtener datos: ", error);
    }
}

// Llamamos a la funcion donde nos mandara al catch
// obtenerDatos();



// ===============================================================
// Ejemplo 2: (Este ejemplo es de prueba, no funciona)
// Usamos el mismo ejemplo de promesas (Ejemplo 2), pero con async await:
async function requestHandler(solicitar, respuesta) {
    try {
        
        const usuario = await Usuario.encontrarId(solicitar.userId);
        const tareas = await Tareas.encontrarId(usuario.tareasId);
        tareas.completadas = true;
        await tareas.save();
        solicitar.enviar("Tareas Completadas...");

    } catch (error) {
        respuesta.enviar(error);
    }
}