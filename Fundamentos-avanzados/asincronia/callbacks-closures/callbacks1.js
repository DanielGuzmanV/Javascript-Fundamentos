// Ejemplo de uso de callbacks:
// Manejador de peticion, esta manera no es recomendable usarla:
function requestHandler(req, res) {
    User.findById(req.userId, function(err, user) {
        if(err) {
            res.send(err);
        } else {
            TextTrackList.findById(user.taskId, function(err, tasks) {
                if(err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err) {
                        if(err) {
                            return res.send(err);
                        } else{
                            res.send('Task completed...');
                        }
                    })
                }
            })
        }
    })
}
// Vemos que el codigo no es muy entendible, esto es conocido como "callback-Hell"
// Para evitar esto usamos "promesas"








