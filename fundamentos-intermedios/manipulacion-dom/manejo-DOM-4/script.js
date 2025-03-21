// Creamos el nuevo elemento:
// ``````````````````````````
// 1. Creamos el elemento <p></p>
const nuevoParrafo1 = document.createElement("p");

// 2. Agregamos texto a nuestro nuevo elemento
nuevoParrafo1.textContent = "Este es el nuevo parrafo creado desde JS";

// 3. Lo insertamos dentro del body de html (Lo agreag al final):
document.body.appendChild(nuevoParrafo1);

// ======================================================
// SI queremos agregarlo en un lugar especifico realizar lo siguiente:
// ```````````````````````````````````````````````````````````````````
const nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.textContent = "Nuevo parrafo antes del h2";

// Seleccionamos donde queremos insertar, en este coaso antes del <h2> 
const referencia = document.querySelector("h2");

// Insertamos antes del h2:
document.body.insertBefore(nuevoParrafo2, referencia);

// ======================================================
// Agregamos un parrafo despues del h2:
// ````````````````````````````````````
// Seleccionamos el elemento <h2>
const h2Referencia = document.querySelector("h2");

// Creamos el nuevo parrafo:
const nuevoParrafo3 = document.createElement("p");
nuevoParrafo3.textContent = "Este parrafo sera insertado despues del <h2>"

// Insertamos despues del h2:
h2Referencia.after(nuevoParrafo3);

// ======================================================
// Agregamos con un "id" a un nuevo elemento:
// ``````````````````````````````````````````
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Soy un div con ID y Clase";

nuevoDiv.id = "miNuevoDiv";
nuevoDiv.classList.add("miClase", "otraClase");

document.body.appendChild(nuevoDiv);

// Cambiamos el texto de ese nuevo div con el nombre de id que tiene:
const cambioDiv = document.getElementById("miNuevoDiv")
cambioDiv.textContent = "Soy un div con ID y Clase (Que cambio por el ID)";

// ======================================================
// Insertamos un <p> antes del bloque div:
// `````````````````````````````
// Seleccionamos el primer <div>
const primerDiv = document.querySelector("div");

// Creamos un nuevo <p>
const nuevoParrafo4 = document.createElement("p");
nuevoParrafo4.textContent = "Este parrafo fue insertado antes del div y h3 con JS";

// Insertamos antes del <div>
primerDiv.before(nuevoParrafo4);

// ======================================================
// Insertamos un <h3> al principio y dentro del div
// ````````````````````````````````````````````````
// seleccionamos el div:
const divContenedor = document.querySelector("div");

// Crear un nuevo elemento <h3>:
const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Este H3 sera insertado al inicio del div y dentro del div";

// Insertamos al inicio del div:
divContenedor.prepend(nuevoH3);

// ======================================================

//Creamos un div con un p y un ul dentro:
// ``````````````````````````````````````
// Creamos el div que contendra los elementos p y ul:
const nuevoDivContenedor = document.createElement("div");
nuevoDivContenedor.id = "miContenedor"; // Agregamos un id o class
nuevoDivContenedor.style.border = "2px solid black";
nuevoDivContenedor.style.padding = "10px";

// Creamos un parrafo que ira dentro del div:
const parrafoDiv = document.createElement("p");
parrafoDiv.textContent = "Este parrafo ira dentro del DIV";

// Creamos una lista desordenada:
const listaDiv = document.createElement("ul");

// Agregamos elementos a la lista:
const itemsLista = ["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"];

itemsLista.forEach(texto => {
    const itemsLi = document.createElement("li");
    itemsLi.textContent = texto;
    listaDiv.appendChild(itemsLi)
})

// Insertamos el parrafo y la lista dentro del div:
nuevoDivContenedor.appendChild(parrafoDiv);
nuevoDivContenedor.appendChild(listaDiv);

// Agregamos el div completo al body:
document.body.appendChild(nuevoDivContenedor);

// ======================================================
// Insertar antes y despues de un elemento con ID:
// ```````````````````````````````````````````````````````
// Seleccionamos un elemento por su ID:
const referneciaID = document.getElementById("miElemento")

// Creamos nuevos parrafos:
const nuevoParrafoAntes1 = document.createElement("p");
nuevoParrafoAntes1.textContent = "Parrafo antes del Primer parrafo";

const nuevoParrafoDespues1 = document.createElement("p");
nuevoParrafoDespues1.textContent = "Parrafo despues del Primer parrafo";

// Agregamos los parrafos antes y despues
referneciaID.before(nuevoParrafoAntes1);
referneciaID.after(nuevoParrafoDespues1);

// Insertamos antes y despues de un elemento con Class:
// Seleccionamos un elemento por su class:
const referenciaClase = document.querySelector(".miParrafo")

// Creamos nuevos parrafos:
const nuevoParrafoAntes2 = document.createElement("p");
nuevoParrafoAntes2.textContent = "Parrafo antes del Segundo parrafo";

const nuevoParrafoDespues2 = document.createElement("p");
nuevoParrafoDespues2.textContent = "Parrafo despues del Segundo parrafo";

// Agregamos los parrafos antes y despues:
referenciaClase.before(nuevoParrafoAntes2);
referenciaClase.after(nuevoParrafoDespues2);

// ======================================================
// Eliminamos un elemento:
// ```````````````````````
const parrafoEliminar = document.querySelector(".eliminarParrafo");
parrafoEliminar.remove();



