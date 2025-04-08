// Esta funcion sera adaptable tanto para usar JSON como FormData
// Incluso con archivos y headers personalizados:
export async function realizarPeticion(method, argUrl, argData = null, argHeadersExtra = {}) {
    let optionsProperties = {
        method,
        headers: {}, // Lo ajustaremos mas abajo
    };

    // Vemos si es formData, si es asi no seteamos "Content-Type" manualmente
    if(argData instanceof FormData) {
        optionsProperties.body = argData;
    } else if(argData && typeof argData === 'object') {
        optionsProperties.body = JSON.stringify(argData);
        optionsProperties.headers['Content-Type'] = 'application/json';
    }

    // Agregamos headers opcionales (como authorization, etc)
    optionsProperties.headers = {
        ...optionsProperties.headers,
        ...argHeadersExtra
    }

    try {
        
        const response = await fetch(argUrl, optionsProperties);

        // Validacion de codigos
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.error('Error en la peticion:', error);
        throw error;
    }
}