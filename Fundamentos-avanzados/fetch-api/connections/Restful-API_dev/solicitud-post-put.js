// Restful-API.dev: API real para pruebas
// Las operaciones de escritura se mantendrajn, ya que ofrecen una API REST
// real que maneja solicitudes HTTP como GET, POST, PUT, DELETE y PATCH
// los datos que creas o modificas se almacenan en una base de datos real y se conservan

// NOTA IMPORTANTE: 
/**
 * Al intentar ejecutar en el navegador o consola nos saldra error:
 * has been blocked by CORS policy 
 * No 'Access-Control-Allow-Origin' header is present
 * 
 * CORS (Cross-Origin Resource Sharing) es un politica de seguridad de los navegadores
 * Este sirve para evitar que sitios web maliciosos hagan peticiones a otros servidores
 * con nuestro nombre sin permiso
 * 
 * Por defecto el navegador solo permite hacer peticiones a dominios que sean del mismo
 * origen (el mismo protocolo, mismo host y mismo puerto)
 * 
 * NO podemos solucionarlo ya que si la API no tiene habilitado el CORS no podemos cambiarlo
 * Lo que podemos hacer es usar una API que si permita CORS
 */

// Ejemplo de solicitud POST para crear un nuevo recurso:
fetch('https://restful-api.dev/objects', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Objeto de prueba',
        data: {
            atributo: 'valor'
        }
    })
})
    .then(response => response.json())
    .then(data => console.log('Nuevo recurso:',data))
    .catch(error => console.error('Error:', error));

// Ejemplo de solicitud PUT para actualizar un recurso existente:

// En {id} reemplazamos con el ID del objeto que deseamos actualizar
fetch('https://restful-api.dev/objects/{id}', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Objeto Actualizado',
        data: {
            atributo: 'nuevo valor'
        }
    })
})
    .then(response => response.json())
    .then(data => console.log('Dato actualizado:', data))
    .catch(error => console.error('Erro:', error))

// Nota: en restful-API.dev, las operaciones de escrituras son persistentes
// por lo que los datos que se crea o modifica se almacenan realmente en la base de datos

