// Promesas, son mas faciles de entender y es mejor usar estas que los callbacks
function requestHandler(solicitar, respuesta) {
    Usuario.encontrarId(solicitar, usuarioId)
    .then(function(usuario) {
        return Tareas.encontrarId(usuario.taresId)
    })
    .then(function (tareas) {
        tareas.Completadas = true;
        return tareas.guardar();
    })
    .then(function() {
        respuesta.enviar("Tareas completadas");
    })
    .catch(function(errores) {
        respuesta.enviar(errores);
    })

}