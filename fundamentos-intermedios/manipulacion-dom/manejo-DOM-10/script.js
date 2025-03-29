// Ejemplo sin cloneNode():
// El problema: tendremos que escribir la estructura de la tarjeta 
// varias veces con createElement
const container = document.getElementById("divContainer")
const createItems = document.getElementById("addItems")

createItems.addEventListener("click", function() {
    for(let idx = 1; idx <= 3; idx++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("targetDiv");

        let newH3 = document.createElement("h3");
        newH3.textContent = `Titulo numero: ${idx}`;

        let newParrafo = document.createElement("p");
        newParrafo.textContent = `Descripcion numero ${idx}`;

        newDiv.appendChild(newH3);
        newDiv.appendChild(newParrafo);

        container.appendChild(newDiv);
    }
})

// Ejemplo con cloneNode():
const container2 = document.getElementById("divContainer2");
const createItems2 = document.getElementById("addItems2")
// Accedemos al contenido del template
const template = document.getElementById("myTemplate").content;

createItems2.addEventListener("click", () => {
    for(let idx = 1; idx <= 3; idx++) {
        let clonarItems = template.cloneNode(true);

        clonarItems.querySelector(".myTitle").textContent = `TItulo numero ${idx}`;
        clonarItems.querySelector(".description").textContent = `Descripcion numero ${idx}`;
    
        container2.appendChild(clonarItems);
    }
})







