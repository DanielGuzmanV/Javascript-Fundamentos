// Simulacro backend - paso a paso:
// Segundo paso: logica (POST /api/login)
import { realizarPeticion } from "./sim-backend1.mjs";

export async function loginUserDate(email, password) {
    const apiUrl = 'https://reqres.in/api/login';
    const userData = {email, password};

    return await realizarPeticion("POST", apiUrl, userData);
}







