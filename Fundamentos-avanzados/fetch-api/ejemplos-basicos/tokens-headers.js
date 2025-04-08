// Caso practico: 
// Login + Fetch con token

// Paso 1: Hacemos el login y recibimos el token
fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
    }),
})
    .then((res) => res.json())
    .then((data) => {
      console.log("Token recibido:", data.token); // <- Nos devolvera el token del usuario

      // seguimos con la segunda parte
        if (data.token) {
            obtenerUserToken(data.token);
        }
    })
    .catch((err) => console.error("Error en login:", err));


// Paso 2: Usamos el token en otra solicitud protegida
// Reqres no requiere un toke real en este caso, simulamos
// como lo usariamos con Authorization

function obtenerUserToken(token) {
    fetch('https://reqres.in/api/users?page=2', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then( function(dataUser) {

            // Mostramos solo los nombres, apellidos y email
            // dataUser.data.forEach((user) => {
            //     console.log(
            //     `Nombre: ${user.first_name} ${user.last_name}, Email: ${user.email}`
            //     );
            // });

            // Mostramos todos los usuariso con token
            console.log('Usuarios con token:', dataUser);

        })
        .catch(error => console.error('Error al obtener usarios:', error));
}
