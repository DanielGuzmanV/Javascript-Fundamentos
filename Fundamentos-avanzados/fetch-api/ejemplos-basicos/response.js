// Recibir y trabajar con la respuesta:
// Cuando hacemos un fetch(), el servidor responde con un objeto response que contiene
// - Status: el codigo: 200, 404, etc
// - headers: informacion tecnica de la respuesta
// - body: contenido real, este puede ser JSON, texto, imagen, etc
// ```````````````````````````````````````````````````````````````

// Ejemplo: response.json()
// Este convierte el "body" de la respuesta en un objeto JS, si la respuesta
// viene en formato JSON:
fetch('https://reqres.in/api/users/2')
    .then(response => response.json()) // <- Aqui devuelve una promesa
    .then(data => console.log('Datos del usuario:', data))
    .catch(err => console.error('Ocurrio un error:', err));

// Porque response devuelve una promesa?
// Al leer y procesar el body puede tomar tiempo, entonces response.json() es 
// asincrono, igual que fetch()



// ==================================================================
// ==================================================================



// Ejemplo: response.text()
// Convierte la respuesta en texto plano (ideal para leer HTML, mensajes, texto plano)
fetch('https://httpbin.org/html')
.then(response => response.text())
// Le indicamos que solo queremos los primeros 200 caracteres
.then(texto => console.log('El texto:', texto.slice(0, 200)))
.catch(err => console.error('ERROR:', err));



// ==================================================================
// ==================================================================



// Ejemplo: response.blob()
// Este convierte la respuseta en un blob (binary large object), es util para 
// archivos: imagenes, PDFs, videos, etc
// fetch('https://httpbin.org/image/png')
//     .then(response => response.blob())
//     .then(blob => {
//         console.log('Blob recibido:', blob);

//         // Mostramos la imagen (si estamos en HTML) no funciona en la consola
//         const url = URL.createObjectURL(blob);
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.appendChild(img);
//     })




