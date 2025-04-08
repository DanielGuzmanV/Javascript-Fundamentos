// Estructura que se sugiere usar:
async function solicitudHttpUser(email, password) {
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        if(!response.ok)  {
            if(response.status === 400) {
                throw new Error("Peticion invalida");
            } else if(response.status === 404) {
                throw new Error('La pagina no se encontro');
            } else if(response.status === 500) {
                throw new Error("Error del servidor");
            } else {
                throw new Error(`Error desconocido: ${response.status}`);
            }
        }   

        // convertimos la respuesta en formato JSON
        const data = await response.json();

        // Verificamos si el token esta presente:
        if(data.token) {
            console.log('Login exitoso, token:', data.token);
        } else {
            throw new Error('No se recibio un token');
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

// =================================================================
// =================================================================

// Realizamos la funcion para verificar el email y contraseña
function loginUser(email, password) {
    if(!email || !password) {
        console.log('El correo y la contraseña son requeridos');
        return;
    }
    solicitudHttpUser(email, password);
}

// Llamamos a la funcion:
loginUser('eve.holt@reqres.in', 'cityslicka');




