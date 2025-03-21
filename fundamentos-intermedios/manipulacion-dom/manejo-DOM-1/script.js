// Ejemplo 1:
// Seleccionaremos los elementos:
const labelTitulo = document.getElementById("titulo");
const labelBoton = document.getElementById("cambiarTexto");

// Cambiar cada vez que se haga clic en el boton (Una sola vez):
// labelBoton.addEventListener("click", function() {
//     labelTitulo.textContent = "Texto cambiado...";
// })

// Cambiar cada vez que se haga clic en el boton (Multiple veces):
labelBoton.addEventListener("click", function() {

    if(labelTitulo.textContent === "Texto cambiado...") {
        labelTitulo.textContent = "Aprendiendo a usar el DOM";
    } else {
        labelTitulo.textContent = "Texto cambiado...";
    }
})

// Metodo para volver al texto original despues de unos segundos:
// labelBoton.addEventListener("click", function() {
//     // Aqui guardamos el texto original:
//     const guardarTxtOriginal = labelTitulo.textContent;

//     // Cambiamos el texto cuando pulsamos el boton:
//     labelTitulo.textContent = "Texto Cambiado...";

//     // Despues de 3 segundos, vuelve el texto original:
//     setTimeout(() => {
//         labelTitulo.textContent = guardarTxtOriginal;
//     }, 3000)

// })



// ----------------------------------------------------------
// Ejemplo 2:
const labelBotonColor = document.getElementById('cambiarColor');

// Creamos una funcion para generar un color aleatorio en forma hexadecimal:
function obtenerColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    
    for(let idx = 0; idx < 6; idx++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Usamos la funcion para cambiar colores:
labelBotonColor.addEventListener("click", function() {
    document.body.style.backgroundColor = obtenerColorAleatorio();
})

// ----------------------------------------------------------
// Ejemplo 3:
const labelMensaje = document.getElementById("mensaje");
const labelBotonToggle = document.getElementById('cambiarMensaje');

labelBotonToggle.addEventListener("click", function() {
    if(labelMensaje.style.display === "none") {
        labelMensaje.style.display = "block";
    } else {
        labelMensaje.style.display = "none";
    }
})




