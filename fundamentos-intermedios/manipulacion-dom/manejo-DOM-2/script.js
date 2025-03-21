// Usamos metodos para manipular el DOM
const labelParrafos = document.querySelectorAll(".texto");
const labelBoton = document.getElementById("cambiarParrafos");

// Agregamos el evento de cambio al boton con un parametro para una funcion:
labelBoton.addEventListener("click", funcionCambioTexto)

// Creamos una funcion aparte (Si se volvera a reutilizar, este solo es de ejmplo)
function funcionCambioTexto() {
    labelParrafos.forEach((parrafo, index) => {
        parrafo.textContent = `Nuevo texto del parrafo ${index + 1}`;
    })
}

