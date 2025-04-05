// REQRES: Esta API si permite POST y tiene CORS abierto:
// Contiene datos falsos, respuestas reales que son compatibles con 
// GET, POST, PUT y DELETE

// Realizamos una solicitud GET para ver a los usuarios:
async function getUsers() {
    try {
        
        const response = await fetch("https://reqres.in/api/users");
        if(!response.ok) throw new Error('Error en la solicitud');

        const data = await response.json();
        console.log('Los usuarios son:', data);

    } catch (error) {
        console.error('ERROR:', error);
    }
}

// Llamamos a la funcion:
getUsers();


// ===============================================================
// ===============================================================


// Realizamos una solicitud POST para crear un nuevo usuario:
fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'armando.muros@gmail.com',
        first_name: 'Armando',
        last_name: 'Muros',
        job: 'Estudiante'
    })
})
    .then(response => response.json())
    .then(data => console.log('El nuevo usuario es:', data))
    .catch(function(error) {
        console.error('Error:', error);
    })






