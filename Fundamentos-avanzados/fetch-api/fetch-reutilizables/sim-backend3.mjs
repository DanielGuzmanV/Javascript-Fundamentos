// Simulacro backend - paso a paso:
// Tercer paso: Obtener datos protegidos con token (GET /api/users?page=2)

import { realizarPeticion } from "./sim-backend1.mjs";

export async function obtenerUsersToken(token) {
    const urlEndPoint = 'https://reqres.in/api/users?page=2';
    return await realizarPeticion('GET', urlEndPoint, {}, {
        Authorization: `Bearer ${token}`
    });
}
