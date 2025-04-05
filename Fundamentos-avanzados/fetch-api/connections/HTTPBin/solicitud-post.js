// HTTPBin: Servicio para pruebas de solicitudes HTTP
// Es otro servicio util que permite probar diferentes tipos de solicitudes
// HTTP y ver las respuestas que se generan

// Ejemplo de solicitud POST con HTTPBin:
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        mensaje: 'Hola, como estan todos?'
    })
})
    .then(response => response.json())
    .then(data => console.log('El mensaje es:', data))
    .catch(error => console.error('ERROR:', error));

// En este caso HTTPBin devolvera en la respuesta todos los detalles 
// de la solicitud que enviamos, lo que es util para depurar y entender
// como se estan enviando los datos


