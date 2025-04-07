// Metodo PUT: Este metodo reemplaza completamente un recurso
// Ejemplo 1:
// Actualizar un post usando .then() y .catch()
fetch('https://jsonplaceholder.typicode.com/posts/1' ,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Pondremos el ID del recurso a reemplazar
        id: 1,
        title: 'Nuevo Titulo',
        body: 'Este es el nuevo contenido actualizado',
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => console.log('Recurso reemplazado', data))
    .catch( error => {
        console.error('ERROR:', error);
    });


// ======================================================


// Actualizar un usuario con async y await usando la API (REQRES)
async function updateUserReqres() {
    try {
        
        const response = await fetch('https://reqres.in/api/users/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'maria.martinez@reqres.in',
                first_name: 'Maria',
                last_name: 'Martinez'
            })
        });

        const data = await response.json();
        console.log('Datos actualizados con PUT:', data);

    } catch (error) {
        console.error('Error al actualizar los datos:', error);
    }
}

// Llamamos a la funcion:
updateUserReqres();



