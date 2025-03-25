// Ejemplo 1: cambiar el contenido dinamicamente:
const contentDiv = document.getElementById("contenedorDiv");

// Se vera como texto sin formato:
document.getElementById("botonTexto").addEventListener("click", () => {
    contentDiv.textContent = "<i>Est es solo un texto</i>";
})

// Se vera en cursiva
document.getElementById("botonHTML").addEventListener("click", () => {
    contentDiv.innerHTML = "<i>Esto es HTML interpretado</i>"
})

// ============================================================

// Ejemplo 2: Prevenir ataques XSS: 
// Usamos TextContent:
document.getElementById("mostrarTexto").addEventListener("click", () => {
    const labelInputValue = document.getElementById("entrada").value;

    // Evitamos la inyeccion de codigo malicioso
    document.getElementById("resultadoDiv").textContent = labelInputValue;
})

// ============================================================

// Ejemplo 3: Cargar contenido dinamico en una lista:

document.getElementById("agregarElementos").addEventListener("click", () => {
    const nuevosElementos = "<li>Nuevo elemento</li>";

    // Si usamos innerHTML, se agregaran multiples elementos 
    document.getElementById("listaElem").innerHTML += nuevosElementos;

    // Si usamos textContent, se agregara texto sin formato:
    // document.getElementById("listaElem").textContent += nuevosElementos;
})




