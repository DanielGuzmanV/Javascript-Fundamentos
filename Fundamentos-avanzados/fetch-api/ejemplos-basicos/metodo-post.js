// Otro metodo comun en fetch es:
// POST (Envio de datos): Si queremos enviar datos a la API podemos usar 
// el metodo POST de la siguiente manera:

fetch('https://jsonplaceholder.typicode.com/users', {
    // Metodo HTTP
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify({
        name: 'Marco',
        email: 'Marco@example.com'
    })
})
    // Convertimos la respuesta en JSON
    .then(response => response.json())
    .then(data => {
        console.log('Usuario creado:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

// En este ejemplo: 
// * method: 'POST': Especifica que estamos enviando datos al servidor
// * body: JSON.stringify(): Convierte los datos a un formato JSON 
//  antes de enviarlos al servidor
// * headers:Especifica que el contenido de la solicitud es de tipo JSON


// ````````````````````````````````````````````````
// Para ejecutar el codigo se necesita Node.Js en las versionnes >= 18
// para verificar la version, en la terminal pondremos:
// node -v y saldra la version: v18.0.0
// ````````````````````````````````````````````````
// Tambien podemos usar el navegador web
// Presionando F12 o Ctrl + shift + I para abrir la consoal de desarrollador
// Luego pegamos el codigo y le damos en ENTER
// ```````````````````````````````````````````````









