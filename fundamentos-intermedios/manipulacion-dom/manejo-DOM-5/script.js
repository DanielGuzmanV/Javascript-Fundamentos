// Modificacion de atributos con el DOM
// Modificar la imagen:
const btnCambioImagen = document.getElementById("btnCambio");
const imagenACambiar = document.getElementById("miImagen1");

btnCambioImagen.addEventListener("click", cambiarImagenForma2)

// Cambiamos y restauramos la imagen
// primera forma:
let cambioImg = true;

let imgOriginal = imagenACambiar.src;
let imgNueva = "https://img.freepik.com/fotos-premium/paisaje-verano-campo-donde-heno-esta-hecho-hierba-periodo-invernal_252085-1647.jpg?semt=ais_hybrid";

function cambiarImagenForma2() {
    imagenACambiar.src = cambioImg ? imgNueva : imgOriginal;
    cambioImg = !cambioImg;
}

// Segunda forma:
// function cambiarImagenForma1() {
//     if(cambioImg) {
//         imagenACambiar.src = "https://img.freepik.com/fotos-premium/paisaje-verano-campo-donde-heno-esta-hecho-hierba-periodo-invernal_252085-1647.jpg?semt=ais_hybrid";
//     } else {
//         imagenACambiar.src = "https://img.freepik.com/foto-gratis/campo-verde-sol_1160-878.jpg?semt=ais_hybrid";
//     }
//     cambioImg = !cambioImg;
// }

// ==========================================================

// Modificar un enlace:
const labelEnlace = document.getElementById("primerEnlace");
const btnEnlace = document.getElementById("btnCambioEnlace");

btnEnlace.addEventListener("click", cambiarEnlaceForma2)

// Funcion para cambiar enlace primera forma:
// function cambiarEnlaceForma1() {
//     labelEnlace.href = "https://www.google.com";
//     labelEnlace.textContent = "Visitar el buscador Google";
// }

// Cambiar y restaurar enlace forma 2:
let enlaceOriginal = labelEnlace.href;
let textoOriginal = labelEnlace.textContent;
let enlaceNuevo = "https://www.google.com";
let textoNuevo = "Visitar el buscador Google";

let cambioEnlace = false;
function cambiarEnlaceForma2() {
    labelEnlace.href = cambioEnlace ? enlaceOriginal : enlaceNuevo;
    labelEnlace.textContent = cambioEnlace ? textoOriginal : textoNuevo;
    cambioEnlace = !cambioEnlace;
}

// ==========================================================

// Modificar el valor de un input:
const labelInputTexto = document.getElementById("inputTexto");
const btnCambiarInput = document.getElementById("btnCambiarInput");

btnCambiarInput.addEventListener("click", cambioValorInput2)

// Cambiar y restaurar el valor de un input, primera forma:
function cambioValorInput1() {
    labelInputTexto.value = "Nuevo texto";
}

// Cambiar y restaurar el valor segunda forma:
let inputTxtOriginal = labelInputTexto.value;
let inputTxtNuevo = "Nuevo texto...";
let cambioTxt = false;

function cambioValorInput2() {
    labelInputTexto.value = cambioTxt ? inputTxtOriginal : inputTxtNuevo;
    cambioTxt = !cambioTxt;
}

// ========================================================================
// ========================================================================

// MANIPULACION DE ATRIBUTOS
// Cambiar la clase de un elemento:
const divContentElem = document.getElementById("divElemento");
const btnCambiarClase = document.getElementById("cambiarClase");

let textoOriginalDiv = divContentElem.textContent;

// Cambiamos la clase para poner un estilo diferente: 
btnCambiarClase.addEventListener("click", function() {
    // Aqui vemos si el div contiene la clase "claseOriginalDiv" 
    if(divContentElem.classList.contains("claseOriginalDiv")) {
        // Si existe esa clase la reemplazamos por "claseNuevaDiv":
        divContentElem.classList.replace("claseOriginalDiv", "claseNuevaDiv");
        divContentElem.textContent = "Nuevo Div de ejemplo"
    } else {
        // Y luego volvemos a la "claseOriginalDiv":
        divContentElem.classList.replace("claseNuevaDiv", "claseOriginalDiv");
        divContentElem.textContent = textoOriginalDiv;
    }
})

// ========================================================================

// Cambiar los estilos de un elemento:
const divCajaElem = document.getElementById("cajaDiv");
const btnCambiarEstilos = document.getElementById("cambiarEstilos");

let cambiandoEstilos = false;

btnCambiarEstilos.addEventListener("click", () => {
    if(cambiandoEstilos) {
        divCajaElem.style.backgroundColor = "";
        divCajaElem.style.color = "";
        divCajaElem.style.padding = "";
        divCajaElem.style.border = "";
        divCajaElem.style.margin = "";
        divCajaElem.style.fontWeight = "";

    } else {
        divCajaElem.style.backgroundColor = "green";
        divCajaElem.style.color = "white";
        divCajaElem.style.padding = "30px";
        divCajaElem.style.border = "2px solid black";
        divCajaElem.style.margin = "30px";
        divCajaElem.style.fontWeight = "bold"
    }
    
    cambiandoEstilos = !cambiandoEstilos
})

// ========================================================================

// Habilitar y deshabilitar un input:
const labelTextInput = document.getElementById("inputText");
const btnToggleInput = document.getElementById("inputCambio");

btnToggleInput.addEventListener("click", function () {
    labelTextInput.disabled = !labelTextInput.disabled;
})


