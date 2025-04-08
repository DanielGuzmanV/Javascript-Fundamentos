// Ahora usaremos modulos para separar todo:
// Aqui realizaremos la peticion
// Ejemplo usando modulos ESM
export async function makeRequest(method, paramUrl, paramData = null, paramHeadersExtra = {}) {
    try {
        
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...paramHeadersExtra
            }
        };

        if(paramData) {
            options.body = JSON.stringify(paramData);
        }

        const response = await  fetch(paramUrl, options);
        if(!response.ok) {
            if(response.status === 400) {
                throw new Error('ERROR 400');
            } else if(response.status === 404) {
                throw new Error('ERROR: 404');
            } else if(response.status === 500) {
                throw new Error('ERROR: 500');
            } else {
                throw new Error('ERROR desconocido');
            }
        }

        const jsonResponse = await response.json();
        return jsonResponse;

    } catch (error) {
        console.error('Error al realizar la peticion:', error);
    }
}





