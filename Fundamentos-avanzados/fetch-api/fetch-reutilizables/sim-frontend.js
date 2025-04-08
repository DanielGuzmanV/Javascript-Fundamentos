// Usaremos "reqres.in" para este caso, ya que este cuenta con:
// - login con POST /api/login
// - Devuelve un toke simulado
// - Podemos usar ese token para hacer un GET / api/user?page=2

// Estructura simulando frontend:

// Parte de la autenticacion.js:
async function loginUser(email, password) {
    const urlApi = 'https://reqres.in/api/login';
    const dataUser = {email, password};

    return await makeRequest('POST', urlApi, dataUser);
}

// =========================================================

// Parte del API.js:
async function makeRequest(method, argUrl, argData = {}, argExtraHeaders = {}) {
    const headers = {
        'Content-Type': 'application/json',
        ...argExtraHeaders
    };

    const optionsProperties = {
        method,
        headers,
        body: method !== 'GET' ? JSON.stringify(argData) : undefined,
    };

    const response = await fetch(argUrl, optionsProperties);

    if(!response.ok) {
        if(response.status === 400) throw new Error('Credenciales invalidas');
        if(response.status === 404) throw new Error('Recurso no encontrado');
        throw new Error(`Error HTTP ${response.status}`);
    }

    const responseJson = await response.json();
    return responseJson;
    
}

// =========================================================

// Parte del main principal:
async function iniciarSesion() {
    try {
        
        const datosLogin = await loginUser('eve.holt@reqres.in', 'cityslicka');
        console.log('Token recibido:', datosLogin.token);

        const usuarioRequest = await makeRequest('GET', 'https://reqres.in/api/users?page=2',{},{
                Authorization: `Bearer ${datosLogin.token}`
        });

        console.log('Usuarios protegidos:', usuarioRequest);

    } catch (error) {
        console.error('Error en login o datos:', error);
    }
}

iniciarSesion();



