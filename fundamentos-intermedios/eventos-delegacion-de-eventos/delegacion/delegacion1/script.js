// Ejemplo 1: Agregamos un "addEventListenner" sin importar cuantos
// botones haya, ya que si agregamos mas botones tambien funcionaran

const contentDiv = document.getElementById("contenedor");

contentDiv.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn")) {
        alert("Boton clickeado!");
    }
})



// =====================================================================
// Ejemplo 2: Lista de tareas dinamicas
const listaElemento = document.getElementById("listaTareas");
const botonAgregar = document.getElementById("addTarea");

botonAgregar.addEventListener("click", function () {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = `Tarea ${listaElemento.children.length + 1}`;
    listaElemento.appendChild(nuevaTarea);
})

listaElemento.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        // Cuando se haga clic en un "li" este se tachara
        event.target.style.textDecoration = "line-through";
    }
})



// =====================================================================
// Ejemplo 3: Delegacion en formularios
const labelForm = document.getElementById("miFormulario");

labelForm.addEventListener("input", (event) => {
    // Detectaremos cambios en diferentes en cualquier input sin necesidad
    // de realizar multiples "addEventListener"
    console.log(`Cambiando: ${event.target.name} -> ${event.target.value}`);
    alert(`Cambiando: ${event.target.name} -> ${event.target.value}`);
})







