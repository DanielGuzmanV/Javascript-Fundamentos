// Ejemplo 1:
// Event Bubbling y capturing:
// El menu desplegable se cerrara al hacer clic fuera de el, podemos aprovechar
// el event bubbling para capturar los clics en el document y cerrarlo
const botonMenu = document.getElementById("menuBtn");
const divMenuList = document.getElementById("menuList");

// Mostramos el menu al hacer clic en el boton:
botonMenu.addEventListener("click", (event) => {
    divMenuList.classList.toggle("hidden");
    event.stopPropagation(); // Evitamos que el clic se propague al documento
})

// Cerramos el menu si se hace clic fuera de el:
document.addEventListener("click", () => {
    divMenuList.classList.add("hidden");
})

// Evitamos que el clic dentro del menu lo cierre:
divMenuList.addEventListener("click", (event) => {
    event.stopPropagation();
})




// =============================================================
// =============================================================
// Ejemplo 2:
// Event Bubbling y capturing:
// Lista de usuarios que pueden agregar elementos, en lugar de agregar un 
// addEventListener a cada elemento podemos usar bubbling para capturar los 
// clics en toda la lista
const listaUl = document.getElementById("listaTareas");
const botonAgregarTarea = document.getElementById("agregarTareas");

// Delegacion de eventos en la lista (capturara los clics en cualquier "li")
listaUl.addEventListener("click", (evento) => {
    if(evento.target.tagName === "LI") {
        alert("Hiciste clic en:" + evento.target.textContent)
    }
});

// Agregar nueva tarea a la lista:
botonAgregarTarea.addEventListener("click", () => {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = "Tarea " + (listaUl.children.length + 1);
    listaUl.appendChild(nuevaTarea);
})


