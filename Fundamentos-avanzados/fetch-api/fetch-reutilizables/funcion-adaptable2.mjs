// Realizamos la importacion de "realizarPeticion"
import { realizarPeticion } from "./funcion-adaptable1.mjs";

// Enviaremos datos normales sin usar FormData:
const dataUser = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
};

const resultRequest = await realizarPeticion('POST', 'https://reqres.in/api/login', dataUser);
// console.log('Resultado JSON:', resultRequest);


// ========================================================
// ========================================================


// Enviamos datos usando FormData con un archivo simulado:
// Creamos el archivo falso:
const fakeFile = new File(
    ['contenido de prueba'],
    'archivoPrueba.txt',
    {type: 'text/plain'}
);

// Creamos el formData:
const formData = new FormData();
formData.append('name', 'Marco Mendez');
formData.append('archivo', fakeFile);

const resulFormData = await realizarPeticion('POST', 'https://httpbin.org/post', formData);
// console.log('Resultado FormData:', resulFormData);


// ========================================================
// ========================================================


// Tambien podemos enviar headers personalizados:
const headersCustom = {
    Authorization: 'Bearer token-secreto',
    'Accept-Language': 'es-PE'
};

const resultHeaders = await realizarPeticion('GET', 'https://httpbin.org/headers',null,headersCustom);
console.log('Headers enviados:', resultHeaders);







