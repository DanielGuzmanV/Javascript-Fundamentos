// Ejemplo de manejo de errores mas robustos:
// Imaginemos que vamos a hacer un login con una API, y queremos verificar
// los errores correctamente en cada paso

// Realizamos la solicitud POST
async function hacerPeticion(method, paramUrl, paramData = null, paramHeadersExtra = {}) {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ... paramHeadersExtra
            }
        };

        if(paramData) {
            options.body = JSON.stringify(paramData);
        }

        const response = await fetch(paramUrl, options);

        // Verificar si la respuesta fue exitosa:
        if(!response.ok) {
            if(response.status === 400) {
                throw new Error('Datos invalidos. Por favor, verifica tu correo y contraseña');
            } else if(response.status === 404) {
                throw new Error('Recurso no encontrado');
            } else if(response.status === 500) {
                throw new Error('Error interno del servidor. Intenta nuevamente mas tarde');
                
            } else {
                throw new Error(`Error desconocido: ${response.status}`);
            }
        }

        // convertimos la respuesta en formato JSON
        const jsonData = await response.json();
        return jsonData;

    } catch (error) {
        console.error('Error en realizar la peticion:', error);
        // Si queremos propagar el error:
        throw error;
    }
}

// =======================================================

// Usamos la estructura que realizamos:
async function loginUser(email, password) {
    try {
        
        const dataUser = await hacerPeticion("POST", "https://reqres.in/api/login", {
            email, password
        });

        if(dataUser.token) {
            console.log('Token recibido:', dataUser.token);
        } else{
            console.log('No se recibio un token');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

loginUser("eve.holt@reqres.in", "cityslicka");








