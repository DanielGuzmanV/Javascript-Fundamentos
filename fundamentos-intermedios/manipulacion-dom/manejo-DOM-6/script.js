// No usamos delegacion de eventos
const labelContenedor = document.getElementById("divContenedor");
const btnAgregar = document.getElementById("agregar");

btnAgregar.addEventListener("click", () => {
    const btnNuevo = document.createElement("button");
    const separador = document.createElement("br");
    btnNuevo.textContent = "Nuevo boton";
    btnNuevo.classList.add("classButtons");
    labelContenedor.appendChild(separador)
    labelContenedor.appendChild(btnNuevo);
})

// Problema: los botones agregados con "btnAgregar" no tendran el evento porque
// no estaban en el DOM cuando querySelectorAll los selecciono
// document.querySelectorAll(".botones").forEach(idxBoton => {
//     idxBoton.addEventListener("click", function() {
//         alert("Boton Clickeado");
//     })
// })

// Usamos la delegacion de eventos:
labelContenedor.addEventListener("click", function(evento) {
    if(evento.target.classList.contains("classButtons")) {
        alert("Boton clickeado");
    }
})

// ===================================================

// Delegacion de eventos en una lista
const labelLista = document.getElementById("lista");
const btnAgregarElem = document.getElementById("agregarElement");

let numberList = 4;
btnAgregarElem.addEventListener("click", () => {
    const listaNueva = document.createElement("li");
    listaNueva.classList.add("newListas");
    listaNueva.textContent = `Elemento ${numberList}`;
    labelLista.append(listaNueva);
    numberList++;
})

// Mostramos un alert cuando se haga clic en cualquier elemento "li"
// En vez de asignar un evento a cada "li", lo asignamos al "ul"
labelLista.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        alert("CLick en: " + event.target.textContent);
    }
})
// Si agregamos mas "li" dinamicamente, seguira funcionando
// sin necesidad de agregar eventos adicionales

// ===================================================

// Delegacion de eventos en botones
const btnContenedorDiv = document.getElementById("contenedorBtn");
const labelBtnAgregar = document.getElementById("btnAgregar");

// Delegacion de eventos en el contendor:
btnContenedorDiv.addEventListener("click", function(event){
    if(event.target.classList.contains("btn")){
        alert("Hiciste clic en: " + event.target.textContent);
    }
})

// Agregamos botones dinamicamente:
labelBtnAgregar.addEventListener("click", () => {
    const nuevoBoton = document.createElement("button");
    const separador = document.createElement("br");
    
    nuevoBoton.textContent = "Boton nuevo";
    nuevoBoton.classList.add("btn");
    
    btnContenedorDiv.append(separador);
    btnContenedorDiv.append(nuevoBoton);
})

// ===================================================

// Delegacion de eventos en formularios:
// Podemos validar un formulario usando delegacion para capturar los 
// eventos de varios inputs

const labelFormulario = document.getElementById("formulario")

labelFormulario.addEventListener("input", function(event) {
    console.log(`Campo: ${event.target.name}, Valor: ${event.target.value}`);
})

labelFormulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitamos el envia real del formulario
    alert("Formulario enviado...");
    
    document.querySelectorAll(".space").forEach(element => {
        element.value = "";
    });;
})

// ===================================================

// Delegacion de eventos para manejar un menu desplegable
// Usamos la delegacion de eventos para abrir y cerrar un menu despegable

document.body.addEventListener("click", function (event) {
    const menu = document.getElementById("menuLista");
    if(event.target.id === "menuBoton") {
        menu.style.display = menu.style.display === "none" ? "block" : "none";
    } else if(!menu.contains(event.target)) {
        menu.style.display = "none";
    }
})

// ===================================================

// Delegacion de eventos en tablas
// Si tenemos una tabla y queremos manejar los clics 
// en las filas (tr), lo hacemos en el "table"

const labelTabla = document.getElementById("miTabla");

labelTabla.addEventListener("click", function(event) {
    if(event.target.tagName === "TD") {
        alert("clic en: " + event.target.textContent);
    }
})



