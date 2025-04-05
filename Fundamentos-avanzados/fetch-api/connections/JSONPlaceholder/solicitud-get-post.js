// 1. JSONPlaceholder: API falsa para pruebas
// Es una API en linea gratuita que proporciona datos ficticios para pruebas 
// y prototipos. 
// Ofrece varios recursos como: post, comments, albums, photos, todos y users
// Se pueden realizar operaciones CRUD (Create, Read, Update, Delete) utilizando
// los metodos HTTP mencionados

// Ejemplo de solicitud GET para obtener publicaciones:
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log('Los datos del post son:', data))
    .catch(error => console.error('Error:',error));

// Ejemplo de solicitud POST para crear una nueva publicacion:
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        userId: 1,
        title: 'Nueva publicacion',
        body: 'Contenido de la nueva publicacion',
    })
})
    .then(response => response.json())
    .then(data => console.log('El nuevo posts es:',data))
    .catch(error => console.error('Error:', error));

// Nota: Aunque "JSONPlaceholder" acepta solicitudes POST, PUT, DELETE los datos 
// no se almacenan realmente en el servidor, es decir, las operaciones de escritura 
// son simuladas y no persisten







