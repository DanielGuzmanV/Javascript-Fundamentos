// Usamos el mismo ejemplo de promesas, pero con async await:

async function requestHandler(solicitar, respuesta) {
    try {
        
        const usuario = await Usuario.encontrarId(solicitar.userId);
        const tareas = await Tareas.encontrarId(usuario.tareasId);
        tareas.completadas = true;
        await tareas.save();
        solicitar.enviar("Tareas Completadas...");

    } catch (error) {
        respuesta.enviar(error);
    }
}