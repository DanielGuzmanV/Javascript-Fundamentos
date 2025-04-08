// Simulacro backend - paso a paso:
// Cuarto paso: logica principal
import { loginUserDate } from "./sim-backend2.mjs";
import { obtenerUsersToken } from "./sim-backend3.mjs";

export async function iniciarSesionUser() {
    try {
        
        // Recibimos el token:
        const datosUsuario = await loginUserDate('eve.holt@reqres.in', 'cityslicka');
        console.log('El token recibido es:', datosUsuario.token);

        // Obtenes los usuarios con token:
        const userToken = await obtenerUsersToken(datosUsuario.token);
        console.log('Usuarios protegidos con token:', userToken);

    } catch (error) {
        console.log('Error:',error.message)
    }
}
