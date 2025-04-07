// Metodo DELETE: se usa para eliminar un recurso del servidor
// Ejemplo practico 1: eliminar un usuario(solo de prueba)
async function deleteUser(id) {
    try {
        
        const response = await fetch(`https://reqres.in/api/users/${id}`, {
            method: 'DELETE'
        });
        
        // "204" significa que la operacion fue exitosa, ya que el servidor no
        // devuelve ningun contenido
        if(response.status === 204) {
            console.log(`Usuario con ID ${id} eliminado correctamente`);
        } else {
            console.log(`No se pudo eliminar el usuario. Codigo: ${response.status}`);
        }

    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
    }
}

deleteUser(3);






