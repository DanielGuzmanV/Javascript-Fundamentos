// Metodo HEAD: es como hacer una solicitud GET, pero sin obtener el contenido
// Solo devuelve los encabezados (headers) de la respuesta

// Esto es util para:
// * Verificar si un recurso existe.
// * Consultar el tamaño de un archivo.
// * Ver la última fecha de modificación (Last-Modified).
// * Hacer validaciones sin descargar todo.

// Ejemplo 1: HEAD de un solo usuario:
fetch('https://reqres.in/api/users/2', {
    method: 'HEAD'
})
    .then(response => {
        if(response.ok) {
            console.log('El recurso existe');
            console.log('Content-Type:', response.headers.get('Content-Type'));
            console.log('Ultima modificacion:', response.headers.get('Last-Modified'));
        } else {
            console.log('No se encontro el recurso');
        }
    })
    .catch(error => {
        console.error('Error con HEAD:', error);
    })

    
// ==============================================================


// Ejemplo 2: HEAD a varios usuarios
fetch('https://reqres.in/api/users?page=2', {
    method: 'HEAD'
})
    .then(response => {
        if(response.ok){
            console.log('El endpoint existe');
            console.log('Tipo de contenido:', response.headers.get('Content-Type'));

            // Este puede ser NULL
            console.log('Tamaño aproximado:', response.headers.get('Content-Length')); 
        } else {
            console.log('El endpoint no existe');
        }

    })
    .catch(error => {
        console.error('Error con HEAD:', error);
    })



