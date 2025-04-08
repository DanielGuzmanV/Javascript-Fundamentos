// Enviar datos como "FormData":
// FormData se usa especialmente cuando se esta enviando datos de
// formularios HTML o archivos (como imagenes)

// Ejemplo:
const formData = new FormData();
formData.append("name", "Marcelo");

// Realizamos la solicitud POST
fetch("https://httpbin.org/post", {
    method: "POST",

    // No necesitamos agregar "Content-Type" ya que el navegador lo hace
    body: formData,
})
    .then((res) => res.json())
    .then((data) => console.log("La respuesta es:", data))
    .catch((err) => console.error("Error:", err));

// =============================================================
// =============================================================

// Enviar datos como "application/x-www-form-urlencoded":
// Este es el tipo de contenido que se usaba antes con formularios HTML clasicos
// como (form action=method="POST")

// Ejemplo:
const params = new URLSearchParams();
params.append("name", "Gabriel");
params.append("job", "Developer");

async function urlSearch() {
    try {
        const response = await fetch("https://reqres.in/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
        });
        const data = await response.json();
        console.log("Respuesta:", data);
    } catch (err) {
        console.error("Error:", err);
    }
}
urlSearch();

// =============================================================
// =============================================================

// Headers personalizados:
// Podemos enviar headers personalizados, ya que aveces necesitamos enviar tokens, idiomas o cualquier
// tipo de header extra que te pida el backend

// Ejemplo (solo de demostracion, no funciona, saldra un error):
// fetch('https://api.com/datos', {
//     method: 'GET',
//     headers: {
//         'Authorization': 'Bearer token1234',
//         'Accept-Language': 'es-PE'
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log('Respuesta:', data))
//     .catch(err => console.error('Error:', err));


// =================================================================
// =================================================================


// Ejemmplos ligeramente avanzados:
// Enviamos un FormData con la API "httpbin.org/post" y veremos como se ve:
const formData1 = new FormData();
formData1.append("Username", "Carlos");
formData1.append("email", "carlos@ejemplo.com");

// Realizamos la peticion:
fetch("https://httpbin.org/post", {
    method: "POST",
    body: formData1,
})
    .then((response) => response.json())
    .then((data) => {
        // Aqui estaran los datos
        console.log("Datos enviados con FormData:", data.form);
    })
    .catch((error) => console.error("ERROR:", error));

// Si verificamos "httpbin" devuelve los datos enviados en data.form

// ===========================================================
// ===========================================================

// Ahora simulamos el envio de un archivo(No sera real)
// usaremos "Blob" (para crear archivos falsos)
const fakeFile = new Blob(
    ["Este es el contenido del archivo fake..."], {
    type: "text/plain",
});

const newFormData = new FormData();
newFormData.append("name", "Manuel");
// simulamos el envio de un archivo
newFormData.append("archivo", fakeFile, "manuel.txt"); // <- le damos un nombre al archivo

fetch("https://httpbin.org/post", {
    method: "POST",
    body: newFormData,
})
    .then((response) => response.json())
    .then((data) => {
        // Aqui saldra el archivo:
        console.log("Archivo simulado enviado:", data.files);
    })
    .catch((error) => console.error("ERROR:", error));

// ===========================================================
// ===========================================================

// Ahora usaremos "headers personalizados"
// Enviaremos algunos headers extra como "Authorization y Accept-Language"
fetch('https://httpbin.org/headers', {
    method: 'GET',
    headers: {

        // Estas llaves pueden cambiar dependiendo de lo que la API o el backend esperen
        // Los valores tambien cambian dependiendo de lo que se necesita enviar
        'Authorization': 'Bearer token-super-secreto',
        'Accept-Language': 'es-PE',
        'X-Custom-Header': 'ValorPersonalizado'
    }
}) 
    .then(response => response.json())
    .then(data => {
        console.log('Headers enviados:', data.headers);
    })
    .catch(error => console.error('ERROR:', error));


