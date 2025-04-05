// tambien podemos usar async/await que es una forma mas moderna
// con un estilo mas limpio 

// Ejemplo: solicitud GET usando async/await
async function obtenerUsuarios() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok) throw new Error('Error en la solicitud');
        const data = await response.json();
        console.log("Los usuarios son:", data);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Usamos la funcion
// obtenerUsuarios();

// Tambien podemos crear un nuevo usuario con POST
// EJemplo: solicitud POST con async/await
async function crearUsuario() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Marco Antonio',
                username: 'Anton123',
                email: 'marcoantonio@gmail.com',
                phone: '1234567890',
                website: 'SunShine.com'
            })
        });

        const data = await response.json();
        console.log('Nuevo usuario creado:', data);

    } catch (error) {
        console.log('Error:', error);
    }
}

crearUsuario();


