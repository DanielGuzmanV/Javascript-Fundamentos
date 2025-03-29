// DocumentFragment:
// Permite crear "contenido invisible" donde podemos agregar elementos 
// antes de insertarlos al DOM
// * Se usa para optimizar el rendimiento
// * El navegador no redibuja la pagina hasta que todos los elementos se
// agregan de una sola vez

// Ejemplo sin (DocumentFragment):
const myListItem = document.getElementById("myList");
const myButtonAdd = document.getElementById("addItem")

// Realizamos el evento de agregar elementos:
myButtonAdd.addEventListener("click", addItemsToList)

// Funcion para agregar los elementos sin DocumentFragement:
function addItemsToList () {
    // Agregamos la cantidad de elementos que queramos (opcional)
    // const numberValue = document.getElementById("inputNumber").value;
    for(let idx = 1; idx <= 5; idx++) {
        let newElement = document.createElement("li");
        newElement.textContent = `Item sin usar DocumentFragment${idx}`;
        myListItem.appendChild(newElement);
    }
}

// Ejemplo usando (DocumentFragment):
const myListItem2 = document.getElementById("myList2");
const myButtonAdd2 = document.getElementById("addItem2");
const fragmento = document.createDocumentFragment();

myButtonAdd2.addEventListener("click", () => {
    for(let idx = 1; idx <= 5; idx++) {
        let newElement = document.createElement("li");
        newElement.textContent = `Item usando DocumentFragment ${idx}`;
        
        // Agregamos los elementos al fragmento (sin afectar al DOM real)
        fragmento.appendChild(newElement);
    }

    // Insertamos todo en el DOM de una sola vez
    myListItem2.appendChild(fragmento);
})
