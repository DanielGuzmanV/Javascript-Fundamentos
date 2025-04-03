// Ejemplo 1: detectar si el usuario escribe un numero o una letra

const labelInputTexto = document.getElementById("inputText");
const labelResultado = document.getElementById("result");

labelInputTexto.addEventListener("keydown", function(event) {
    let mensaje;
    if(event.key.match(/[0-9]/)) {
        mensaje = "Escribiste un numero";
    } else if (event.key.match(/[a-zA-Z]/)) {
        mensaje = "Escribiste una letra";
    } else{
        mensaje = "Escribiste un caracter especial";
    }

    // Implementar una funcion para que cuando no haiga nada en el input no diga nada
    // o que despues de un tiempo el mensaje no salga
    labelResultado.textContent = mensaje;
});


// ======================================================================
// Ejemplo 2: BLoquear la tecla "e" en un input que es numerico

const labelInputBlock = document.getElementById("inputBloquear");

labelInputBlock.addEventListener("keypress", function(event) {
    if(event.key.toLowerCase() === "e") {
        event.preventDefault();
    }
})




// ======================================================================
// ======================================================================
// Ejemplo 1: Contador de clics con el boton derecho
const botonDerecho = document.getElementById("btnDerecho");
const contadorResult = document.getElementById("counterClicks");

let numbers = 0;

botonDerecho.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Evitamos que se abra el menu contextual
    numbers++;
    contadorResult.textContent = `Clics: ${numbers}`;
})


// ======================================================================
// Ejemplo 2: Cambiar color de fondo al pasar el mouse
const cajaColor = document.getElementById("cajaDiv");

cajaColor.addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
})

cajaColor.addEventListener("mouseout", function() {
    this.style.backgroundColor = "lightgray";
})




// ======================================================================
// ======================================================================
// Ejemplo 1: Disparar un evento personalizado al alcanzar un numero de clics
const botonContador = document.getElementById("btnContador");
const labelMensaje = document.getElementById("mensaje");

let numeroClics = 0;
botonContador.addEventListener("click", function() {
    numeroClics++;
    if(numeroClics === 5) {
        let eventoPersonalizado = new Event("limiteAlcanzado");
        document.dispatchEvent(eventoPersonalizado);
    }
})

document.addEventListener("limiteAlcanzado", function() {
    labelMensaje.textContent = "Legaste a 5 clics"
    
})


// ======================================================================
// Ejemplo 2: Realiza evento personalizado con datos dinamicos
const botonEvento = document.getElementById("btnEvento");
const eventoResultado = document.getElementById("eventResult");

botonEvento.addEventListener("click", function() {
    let eventoConDatos = new CustomEvent("eventoEspecial", {
        detail: {
            mensaje: "Evento disparado",
            fecha: new Date().toLocaleDateString()
        }
    });

    document.dispatchEvent(eventoConDatos);
})

document.addEventListener("eventoEspecial", function(event) {
    eventoResultado.textContent = `Mensaje: ${event.detail.mensaje} - Fecha: ${event.detail.fecha}`;
})









