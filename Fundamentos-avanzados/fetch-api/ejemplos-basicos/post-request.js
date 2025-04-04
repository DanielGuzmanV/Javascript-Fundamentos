// Envio de datos (POST request)
// Creamos un escenario donde el frontend recibe datos del backend 
// Ejemplo practico con JSONPlaceholder (Publicacion de datos):

// Enviar un POST request con datos de una publicacion
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo Post',
        body: 'Este es el contenido de la nueva publicacion',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Nuevo post creado:', data);
    })
    .catch(error => {
        console.error('Error', error);
    })

// En este ejemplo muestra como enviar una publicacion utilizando un 
// POST a la API de JSONPlaceholder y como manejar la respuesta








