// Podemos limitar los resultados de la siguiente manera:

// Caso 1: La API permite limitar resultados
// Algunas APIs permiten pasar parametros de consulta (query params), como (?limit=5)
// Ejemplo usando async/await
async function limitUsers() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
        if(!response.ok) throw new Error('Error en la solicitud...');
        const data = await response.json();
        console.log('Los 5 usuarios son:', data);

    } catch (error) {
        console.error('Error:', error);
    }
}

limitUsers();

// En este caso la API solo devuelve los primeros 5 usuarios, asi que no 
// tenemos que filtrar nada en el cliente



// ========================================================================
// ========================================================================



// Caso 2: la API no permite limitar resultados
// Ahora si, debemos pedir todos los datos y luego filtrarlos con Js

// Ejemplo usando .then() y .catch()
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Solo mostrara los primeros 5 usuarios
        const fiveUsers = data.slice(0, 5);
        console.log('Los 5 usuarios son:', fiveUsers);
    })
    .catch(error => console.error('Error:', error));




