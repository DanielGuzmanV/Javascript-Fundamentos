// Ejemplo 1:
// Mostrar motificacion si se agrega un producto al carrito:
// Se detectara cuando se agregue un nuevo producto al carrito para mostrarlo
// mediante un alert
const carrito = document.getElementById("listaCarrito");
const agregar = document.getElementById("btnAgregar");

// Creamos el observador de mutaciones:
const observadorCambios = new MutationObserver(function(obsCambios) {
    obsCambios .forEach((cambio) => {
        if(cambio.addedNodes.length > 0) {
            alert("Se agrego un producto al carrito");
        }
    })
})

// Configuramos el observador:
observadorCambios.observe(carrito, {
    childList: true
});

// Agregamos el producto al carrito:
agregar.addEventListener("click", function() {
    let nuevoProducto = document.createElement("li");
    nuevoProducto.textContent = "Producto " + (carrito.children.length + 1);
    carrito.appendChild(nuevoProducto);
})



// ===============================================================
// ===============================================================



// Ejemplo 2:
// Detectar cambios en el contenido de un div en tiempo real
// El usuario podra escribir contenido dinamicamente en un div
// queremos detectar los cambios en tiempo real y mostrar una notificacion
const editor = document.getElementById("editorDiv");
const mensaje = document.getElementById("mensaje");

// Observaremos los cambios en el contenido del div:
const observadorDiv = new MutationObserver(() => {
    mensaje.textContent = "Se detecto un cambio en el texto";
    setTimeout(() => mensaje.textContent = "", 3000);
})

// Configuramos el observador 
observadorDiv.observe(editor, {
    childList: true,
    subtree: true,
    characterData: true
});





