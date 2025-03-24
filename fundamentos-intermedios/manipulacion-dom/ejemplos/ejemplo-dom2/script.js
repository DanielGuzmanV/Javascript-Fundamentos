// MANEJAR MULTIPLES ELEMENTOS AL MISMO TIEMPO:
// Agregamos los elementos:
const contentDiv = document.getElementById("divElementos");
const labelBotonAgregar = document.getElementById("botonAgregar");
const labelBotonEliminar = document.getElementById("botonEliminar");
const listDiv = document.createElement("ul");

// Llamamos a la funcion para agregar multiples elementos:
labelBotonAgregar.addEventListener("click", agregarMultiplesElementos);
labelBotonEliminar.addEventListener("click", eliminarMultiplesElementos);

// Funcion para agregar multiples elementos:
function agregarMultiplesElementos() {
    
    // Ajustamos el for para ver cuantos elementos agregamos:
    for(let idx = 1; idx <= 5; idx++) {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.classList.add("listas");
    
        nuevoElemento.textContent = `Nuevo elemento`;
        listDiv.appendChild(nuevoElemento);
    }
    contentDiv.appendChild(listDiv);
}

// Funcion para eliminar multiples elementos
function eliminarMultiplesElementos() {
    const elementos = document.querySelectorAll(".listas");

    // Ajustamos el for para ver cuantos elementos eliminamos:
    const cantidadEliminar = 3;
    for (let idx = 0; idx < cantidadEliminar && elementos.length > idx; idx++) {
        elementos[idx].remove();
    }
}

// ============================================================================
// ============================================================================

// USO DE PLANTILLAS HTML (TEMPLATE LITERALS)
const contenedorDiv = document.getElementById("divArticulos");
const labelBtnCrear = document.getElementById("btnCrear");
const labelBtnCrearArticulos = document.getElementById("btnCrearArticulos");
const labelBtnEliminar = document.getElementById("btnEliminar");
const labelBtnLimpiar = document.getElementById("btnLimpiar");

labelBtnCrear.addEventListener("click", crearUnArticulo);
labelBtnEliminar.addEventListener("click", eliminarArticulo);
labelBtnLimpiar.addEventListener("click", limpiarArticulos);
labelBtnCrearArticulos.addEventListener("click", crearArticulos);

// Realizamos la funcion para crear un articulo:
let numeroArticulo = 1;
function crearUnArticulo () {
    const articuloHTML = `
    <article class="articulo">
        <hr>
        <h2>Titulo de articulo ${numeroArticulo}</h2>
        <img src="https://img.freepik.com/foto-gratis/paisaje-hierba-bosque_23-2147632799.jpg" alt="Imagen del articulo">
        <p>Este es el contenido del articulo ${numeroArticulo}</p>

    </article>
    `;

    // Aqui agregamos el articulo al contenedor:
    contenedorDiv.innerHTML += articuloHTML;
    numeroArticulo++;
}

function crearArticulos() {
    const numeroArticulos = 5;
    
    // Construimos el HTML para todos los articulos
    let articulosHTML = '';

    for(let idx = 1; idx <= numeroArticulos; idx++) {
        articulosHTML += `
            <article class="articulo">
                <hr>
                <h2>Titulo del articulo ${idx}</h2>
                <img src="https://img.freepik.com/foto-gratis/campo-verde-cielo-nublado-manana-colinas_181624-24412.jpg?semt=ais_hybrid" alt="Imagen del articulo">
                <p>Este es el contenido del articulo numero ${idx}</p>
            </article>
        `;
    }
    contenedorDiv.innerHTML += articulosHTML;
}

// Realizamos la funcion para eliminar los articulos uno por uno:
function eliminarArticulo() {
    const articulos = document.querySelectorAll(".articulo");

    if(articulos.length > 0) {
        articulos[articulos.length - 1].remove();
        numeroArticulo--;
    }
}

// Funcion para eliminar todos los articulos:
function limpiarArticulos() {
    contenedorDiv.innerHTML = "";
    numeroArticulo = 1;
}


