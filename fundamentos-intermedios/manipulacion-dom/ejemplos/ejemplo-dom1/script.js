// Creamos elementos dinamicos:
// Botonoes para crear textos antes del parrafo
const labelBoton1 = document.getElementById("crearParrafo");
const labelBoton2 = document.getElementById("eliminarParrafo");

// Botones para crear textos despues del parrafo
const labelBoton3 = document.getElementById("crearParrafo2")
const labelBoton4 = document.getElementById("eliminarParrafo2")

// Parrafo original donde se agregaran textos antes o despues:
const labelReferenciaParrafo = document.querySelector(".parrafo1")

// ................................................................
// Llamamos a las funciones para crear antes del parrafo:
// ````````````````````````````````````````````````````````````````
labelBoton1.addEventListener("click", crearParrafosAntes)
labelBoton2.addEventListener("click", eliminarParrafosAntes)

let numberBefore = 1;
function crearParrafosAntes() {
    const nuevoParrafo1 = document.createElement("p");
    nuevoParrafo1.classList.add("nuevoParrafo1")
    nuevoParrafo1.textContent = `Linea de texto antes del parrafo ${numberBefore}`
    numberBefore++;
    // Tenemos dos formas de agregar antes:
    // Primera forma:
    labelReferenciaParrafo.before(nuevoParrafo1);
    
    // Segunda forma usando: insertAdjacentElement("beforebegin")
    // labelReferenciaParrafo.insertAdjacentElement("beforebegin",nuevoParrafo1);
}

function eliminarParrafosAntes() {
    // Eliminamos por la clase que tienen:
    const parrafos = document.querySelectorAll(".nuevoParrafo1");
    if(parrafos.length > 0) {
        parrafos[parrafos.length - 1].remove();
        numberBefore--;
    }
}
// ................................................................
// Llamamos a las funciones para crear despues del parrafo:
// ````````````````````````````````````````````````````````````````
labelBoton3.addEventListener("click", crearParrafosDespues);
labelBoton4.addEventListener("click", eliminarParrafosDespues);

let numberAfter = 1;
function crearParrafosDespues() {
    const nuevoParrafo2 = document.createElement("p");
    nuevoParrafo2.classList.add("nuevoParrafo2");
    nuevoParrafo2.textContent = `Linea de texto despues del parrafo ${numberAfter}`;
    numberAfter++;
    // Tenemos dos formas de agregar despues:
    // Primera forma:
    // labelReferenciaParrafo.after(nuevoParrafo2);

    // Segunda forma usando: insertAdjacentElement("afterend")
    labelReferenciaParrafo.insertAdjacentElement("afterend", nuevoParrafo2)
}

function eliminarParrafosDespues() {
    const parrafos = document.querySelectorAll(".nuevoParrafo2");
    if(parrafos.length > 0) {
        parrafos[0].remove();
        numberAfter--;
    }
}
// ================================================================
// ================================================================

// Agregamos elementos dinamicos a un div:
const labelElementoDiv = document.getElementById("divElementos");
const labelBotonDiv1 = document.getElementById("agregarElem");
const labelBotonDiv2 = document.getElementById("eliminarElem")

// Creamos la lista desordenada:
const labelListDiv = document.createElement("ul");

// Creamos el h3 que ira cambiando si hay elementos en la lista:
const labelH3Div = document.createElement("h3");
labelH3Div.textContent = `La lista tiene 0 elementos`;
labelElementoDiv.prepend(labelH3Div);

labelBotonDiv1.addEventListener("click", crearElementosDiv);
labelBotonDiv2.addEventListener("click", eliminarElementosDiv);

let numberElements = 0;

// Funcion para ir actualizando el texto del "labelH3Div":
function actualizarTextoH3(cambiarNumero) {
    labelH3Div.textContent = `La lista tiene ${cambiarNumero} elementos`
}

// Funcion para ir agregando elementos a la lista del div
function crearElementosDiv() {
    const labelElemList = document.createElement("li");
    labelElemList.classList.add("listas");
    
    labelElemList.textContent = `Nuevo elemento ${numberElements + 1} de la lista`;
    labelListDiv.appendChild(labelElemList);
    labelElementoDiv.classList.add("fondoDiv")
    labelElementoDiv.appendChild(labelListDiv);
    
    numberElements++;
    actualizarTextoH3(numberElements);
}

// Funcion para ir eliminando elementos a la lista del div
function eliminarElementosDiv() {
    const elementos = document.querySelectorAll(".listas");
    if(elementos.length > 0) {
        elementos[elementos.length - 1].remove();
        numberElements--;
        actualizarTextoH3(numberElements);
    } else{
        labelElementoDiv.classList.remove("fondoDiv");
    }
}
