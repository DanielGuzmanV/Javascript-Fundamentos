// Enviar y recibir datos (PUT y DELETE requests)
// Ademas de GET y POST, podemos usar:
// PUT para actualizar y DELETE para eliminar datos

// Ejemplo de PUT (actualizacion de datos):
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // Actualizar datos en el servidor
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title: 'Post que sera actualizado',
        body: 'Este es el contenido que sera actualizado',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        console.log('Post actualizado:', data)
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Ejemplo de DELETE (eliminar datos):

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    // Eliminar datos del servidor
    method: 'DELETE',
})
    .then(response => {
        if(response.ok) {
            console.log('Post eliminado...');
        } else {
            console.log('Error al eliminar el post');
        }
    })
    .catch(error => {
        console.log('Error:', error);
    });









