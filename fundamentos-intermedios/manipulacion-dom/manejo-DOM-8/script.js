// Event Bubbling (Propagacion ascendente):
// Este es el comportamiento por defecto de los eventos en el DOM
document.getElementById("idPadre").addEventListener("click", function() {
    alert("El div padre ha recibido el clic");
});

document.getElementById("idHijo").addEventListener("click", function() {
    alert("El boton hijo ha recibido el clic");
});
// Cuando se hace clic en el boton, el evento primero es capturado por el 
// <button> (hijo) luego pasa al <div> (padre)

// ==================================================================

// Event Capturing (Captura)
// Es el comportamiento opuesto al bubbling
document.getElementById("divPadre").addEventListener("click", function() {
    alert("El nuevo div padre recibio un clic")
}, true); // El true indicara la captura

document.getElementById("btnHijo").addEventListener("click", function() {
    alert("El nuevo boton hijo recibio un clic");
});
// Cuando se hace clic en el boton, el evento primero sera capturado por el div
// luego se propaga o pasa hacia el button




// ===================================================================
// ===================================================================
// La MutationObserver: es un API que nos permite escuchar cambios en el DOM
// como adicion, eliminacion o modificacion de elementos

// Crear un observador de mutaciones:
const observarCambios = new MutationObserver(function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if(mutation.type === "childList") {
            alert("Se agrego o elimino un nodo");
        }
    }
});

// configuramos que tipo de mutaciones observar:
// Este define que tipo de cambios queremos observar en el DOM
// Por ejemplo, si se agrega un "P" dentro del "div", se detectara, pero si solo se
// cambia el texto de un "P" no
const config = {childList: true};

// Iniciamos la observacion en el contenedor:
// Aqui especificamos el nodo que queremos observar
const divContenedor = document.getElementById("contenedor");
// Define los cambios que queremos detectar (en este caso, cuando se agregan o
// eliminan elementos hijos)
observarCambios.observe(divContenedor, config);

// Hacemos que el boton agregue nuevos parrafos, esto hara que se notifique esos cambios:
document.getElementById("btnCrear").addEventListener("click", function() {
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Nuevo parrafo agregado";
    divContenedor.appendChild(nuevoP);
})

// Modificar el DOM automaticamente despues de 4 segundos, donde creara
// un nuevo "p" despues de 4 segundos
setTimeout(() => {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nuevo parrafo";
    divContenedor.appendChild(nuevoParrafo);
}, 2000);




// ===================================================================
// ===================================================================
// classList avanzado: es una forma mas moderna y sencilla de manejar 
// las clases CSS de un elemento

// Ejemplo con metodos comunes:
// toggle(); alterna entre agregar o quitar una clase
// const ejemploBtntoggle = document.getElementById("idEjemplo");
// ejemploBtntoggle.classList.toggle("activo");

// // replace(); reemplaza una clase con otra
// const ejemploBtnReplace = document.getElementById("idEjemplo");
// ejemploBtnReplace.classList.replace("clasesAntigua", "claseNueva");
// ----------------------------------------------------------------

// Ejemplo practico de toggle y replace
document.getElementById("toggleBtn").addEventListener("click", () => {
    let divElemento1 = document.getElementById("miElemento");
    
    // Aqui agregamos la clase "clase2", si no esta en el elemento
    // Si "clase2" ya estaba, este la quitara
    if(divElemento1.classList.toggle("clase2")) {
        alert("Se agrego la clase -clase2- a -claseDiv1-");
    } else {
        alert("Se quito la -clase2-")
    }
})

document.getElementById("replaceBtn").addEventListener("click", () => {
    let divElemento2 = document.getElementById("miElemento");
    
    // Aqui solo reemplazamos si la clase original existe, de lo contrario no hace nada
    if(divElemento2.classList.contains("claseDiv1")) {
        divElemento2.classList.replace("claseDiv1", "clase3");
        alert("Se reemplazo la -claseDiv1- por -clase3-");
    } else {
        alert("La clase -claseDiv1- no esta presente")
    }
})




// ===================================================================
// ===================================================================
// Storage en el navegador (LocalStorage y SesssionStorage)
// Ambos permiten almacenar datos en el navegador, pero tienen diferencias clave:
// - LocalStorage: los datos siguen incluso despues que el navegador se cierra
// - SessionStorage: Los datos solo persisten durante la session actual, osea solo
// si el navegador o pestaña estan abiertas

// Ejemplo de localStorage:
const botonGuardarLocal = document.getElementById("guardarLocal");
const botonLeerLocal = document.getElementById("leerLocal");

botonGuardarLocal.addEventListener("click", function() {
    // Guardamos elementos por un input
    let claveLocal = document.getElementById("entradaValue1").value;
    let valorLocal = document.getElementById("entradaValue2").value;
    
    // Verificamos que la clave y valor no esten vacias:
    if(claveLocal && valorLocal) {
        // Los guardamos localmente
        localStorage.setItem(claveLocal, valorLocal);
        alert("Dato guardado correctamente...");
    } else {
        alert("Por favor ingresa una clave y un valor");
    }
    // Limpiamos los inputs:
    document.getElementById("entradaValue1").value = '';
    document.getElementById("entradaValue2").value = '';
})

botonLeerLocal.addEventListener("click", () => {
    let getValorInput = prompt("Ingrse la clave que quiere leer:");
    let valor = localStorage.getItem(getValorInput);

    if(valor !== null) {
        alert(`El valor es: ${valor}`);
    } else {
        alert("No se encontro ningun valor con esa clave")
    }
})

// limpiamos el localStorage:
document.getElementById("limpiarLocal").addEventListener("click", ()=> {
    localStorage.clear();
    alert("LocalStorage ha sido limpiado...");
})

// Ejemplo de SessionStorage:
const botonGuardarSession = document.getElementById("guardarSession");
const botonLeerSession = document.getElementById("leerSession");

botonGuardarSession.addEventListener("click", ()=> {
    let claveSession = document.getElementById("entradaValor1").value;
    let valorSession = document.getElementById("entradaValor2").value;

    if(claveSession && valorSession) {
        sessionStorage.setItem(claveSession, valorSession);
        alert("Los datos se guardaron correctamente");
    } else {
        alert("No ingreso un dato")
    }
    document.getElementById("entradaValor1").value = '';
    document.getElementById("entradaValor2").value = '';
})

botonLeerSession.addEventListener("click", ()=> {
    let valorSession = prompt("Ingrese la clave para verificar");
    let valor = sessionStorage.getItem(valorSession);
    if(valor !== null) {
        alert(`La clave es: ${valor}`);
    } else {
        alert("No existe esa clave");
    }

})

// Limpiamos SessionStorage:
document.getElementById("limpiarSession").addEventListener("click", ()=> {
    sessionStorage.clear();
    alert("SessionStorage ha sido limpiado...");
})







