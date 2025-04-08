// Nuevamente usaremos "reqres.in"
// Simulacro backend - paso a paso:
// Primer paso: funcion general para peticiones HTTP(reutilizable)
export async function realizarPeticion(method, argUrl, argData = {}, argHeaderOpcion = {}) {
    const esFormData = argData instanceof FormData;

    const headers = esFormData ? argHeaderOpcion : {
        'Content-Type': 'application/json',
        ...argHeaderOpcion,
    }

    const optionsProperties = {
        method,
        headers,
        body: method !== "GET" ? (esFormData ? argData : JSON.stringify(argData)) : undefined,
    };

    const response = await fetch(argUrl, optionsProperties);

    if(!response.ok) {
        if(response.status === 400) throw new Error(" La solicitud está mal formada");
        if(response.status === 404) throw new Error('Recurso no encontrado');
        throw new Error(`ERROR http: ${response.status}`);
    }

    return await response.json();
}













