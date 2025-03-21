// Usamos metodos para manipular el DOM
const labelParrafos = document.querySelectorAll(".texto");
const labelBoton1 = document.getElementById("cambiarParrafos");
const labelBoton2 = document.getElementById("restaurarParrafos");
const labelBoton3 = document.getElementById("cambiarRestaurar");

// Para restaurar el mensaje original (Primera forma):
const textosOriginales = [];
labelParrafos.forEach( 
    textos => textosOriginales.push(textos.textContent)
);

// Para restaurar el mensaje original (Segunda forma):
const nuevosTextosOriginales = Array
.from(labelParrafos)
.map(parrafos => parrafos.textContent);

let textoCambio = false;

// Agregamos el evento de cambio al boton con un parametro para una funcion:
labelBoton1.addEventListener("click", funcionCambioTexto);
labelBoton2.addEventListener("click", funcionRestaurarTexto);
labelBoton3.addEventListener("click", cambiarRestaurarTexto);

// ==================================================================

// Funcion para cambiar el texto:
function funcionCambioTexto() {
    for(let idx = 0; idx < labelParrafos.length; idx++) {
        labelParrafos[idx].textContent = `Nuevo texto del parrafo ${idx + 1}`;
    }
}

// Funcion para restaurar el texto:
function funcionRestaurarTexto() {
    labelParrafos.forEach((parrafos, idx) => {
        parrafos.textContent = textosOriginales[idx];
    })
}

// Funcion para cambiar y restaurar al mismo tiempo:
function cambiarRestaurarTexto () {
    if(!textoCambio) {
        // Cambiamos los textos:
        for(let idx = 0; idx < labelParrafos.length; idx++) {
        labelParrafos[idx].textContent = `Nuevo texto del parrafo directo ${idx + 1}`;
        }

        // Cambiamos el texto del boton 3:
        labelBoton3.textContent = "Restaurar";
    } else {
        // Restauramos los textos
        labelParrafos.forEach((parrafos, idx) => {
        parrafos.textContent = textosOriginales[idx];
        })
        labelBoton3.textContent = "Cambiar"
    }
    textoCambio = !textoCambio;
}

