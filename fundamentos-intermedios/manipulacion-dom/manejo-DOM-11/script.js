// Eventos del teclado:
// Estos eventos se activan cuando presionamos o sotamos una tecla
document.getElementById("numbers").addEventListener("keydown", function(eventos) {
    if(eventos.key < "0" || eventos.key > "9") {

        // Evitamos caracteres que no son numeros
        eventos.preventDefault();
    }
})

// Ejemplo 1:
document.getElementById("inputTexto").addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        document.getElementById("mensaje").textContent = "Presinaste enter"
    }
})

// Ejemplo 2:

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("inputKeyup").addEventListener("keyup", function(event) {
        document.getElementById("mensajeKeyup").textContent = `Tecla soltada: ${event.key}`;
    })
})



// ========================================================
// ========================================================
// Eventos del raton:
const boton = document.getElementById("btnHover");

boton.addEventListener("mouseover", () => {
    boton.style.backgroundColor = "red";
});

boton.addEventListener("mouseout", () => {
    boton.style.backgroundColor = "";
});

// Ejemplo 1:
document.getElementById("btnClick").addEventListener("click", () => {
    alert("Clic detectado!")
})

// Ejemplo 2:
document.getElementById("caja").addEventListener("dblclick", function() {
    this.style.background = "green";
})


// Ejemplo 3:
document.getElementById("texto").addEventListener("contextmenu", function(event) {
    event.preventDefault();
    alert("Menu contextual deshabilitado");
})

// Ejemplo 4:
document.addEventListener("mousemove", function(event) {
    document.getElementById("coordenadas").textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
})


// ========================================================
// ========================================================
//Personalizacion de eventos:
const eventCustom = new CustomEvent("saludar", {
    detail: {
        mensaje: "Hola soy un evento personalizado"
    }
})

document.addEventListener("saludar", (event)=> {
    alert(event.detail.mensaje);
    console.log(event.detail.mensaje)
})

const eventSaludarBtn = document.getElementById("btnSaludar");

eventSaludarBtn.addEventListener("click", () => {
    document.dispatchEvent(eventCustom);
})



