// Metodo PATCH: este metodo solo actualiza parcialmente un recurso
// Ejemplo 1:
// Usamos .then() y catch() para actualizar una parte del usuario
// Ya que tenemos a: name: "marco", job: "Frontend developer" y queremos solo actualizar "job"
fetch('https://reqres.in/api/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        job: 'Backend developer'
    })
})
    .then(response => response.json())
    .then(data => console.log('Trabajo actualizado:', data))
    .catch(error => console.error('Error al actualizar:', error));


// Ejemplo 2:
// Ahora actualizaremos "name", usando async y await:
async function partialUpdate() {
    try {
        
        const response = await fetch('https://reqres.in/api/users/1', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: 'Alberto'
            })
        });

        const data = await response.json();
        console.log('Nuevo nombre:', data);

    } catch (error) {
        console.error("Ocurrio un error:", error);
    }
}
partialUpdate();







