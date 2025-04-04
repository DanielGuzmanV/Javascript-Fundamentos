// Ejemplo basico de consumo de una API con fetch:
// Imaginemos que tenemos una API que devuelve informacion 
// sobre usuarios como esta:
// Solicitud GET usando Fetch API:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        // Verificamos si la respuesta es exitosa (status 200)
        if(!response.ok) {
            throw new Error('Error en la solicitud');
        }
        // Convierte la respuesta en formato JSON
        return response.json();
    })
    .then(data => {
        // Maneja los datos obtenidos
        console.log('los datos son:',data);
    })
    .catch(error => {
        // Maneja el error en caso de fallar
        console.log('Error: ', error);
    });

// En este ejemplo:
// * fetch(): realiza una solicitud GEt a la URL proporcionada
// * then(): Se usa para manejar las respuestas exitosas. La ruespuesta debe ser
// en formato JSON para poder trabajar con ella
// * catch(): Se usa para capturar cualquier error durante el proceso de solicitud


// ````````````````````````````````````````````````
// Para ejecutar el codigo se necesita Node.Js en las versionnes >= 18
// para verificar la version, en la terminal pondremos:
// node -v y saldra la version: v18.0.0
// ````````````````````````````````````````````````
// Tambien podemos usar el navegador web
// Presionando F12 o Ctrl + shift + I para abrir la consoal de desarrollador
// Luego pegamos el codigo y le damos en ENTER
// ```````````````````````````````````````````````






