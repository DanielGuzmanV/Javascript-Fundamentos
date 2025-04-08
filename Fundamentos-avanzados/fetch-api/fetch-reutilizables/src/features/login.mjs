// Ahora aqui realizaremos la funcion de negocio especifica
// Crearemos el loginUser:
import { makeRequest } from "../services/api.mjs";

export async function loginUser(email, password) {
    try {
        
        const data = await makeRequest("POST", "https://reqres.in/api/login", {
            email, password
        });

        if(data.token) {
            console.log('Token recibido:', data.token);
        } else {
            throw new Error('No se recibio un token');
        }

    } catch (error) {
        console.error('Error en la peticion:', error);
    }
}






