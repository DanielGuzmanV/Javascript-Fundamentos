import { Usuarios, Admins } from "./usuarios.js";

const valueUsers = [];

const $form = document.getElementById("formUsuario");
const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $tipo = document.getElementById("selectTipo");
const $permisos = document.getElementById("permisos");
const $error = document.getElementById("error");
const $listaUsuarios = document.getElementById("listUsuarios");
const $adminEscritura = document.getElementById("adminEscritura");

function renderUsuarios() {
  $listaUsuarios.innerHTML = "";
  valueUsers.forEach( user => {
    const valueLi = document.createElement("li");
    valueLi.textContent = user.mostrarInformacion();
    $listaUsuarios.appendChild(valueLi);
  })
}

function renderAdminEscritura() {
  $adminEscritura.innerHTML = "";
  const admins = valueUsers.filter(
    user => user instanceof Admins && user.tienePermiso("escritura")
  );

  admins.forEach( admin => {
    const valueLi = document.createElement("li");
    valueLi.textContent = admin.mostrarInformacion();
    $adminEscritura.appendChild(valueLi);
  });
}

$form.addEventListener('submit', event => {
  event.preventDefault();
  $error.textContent = "";

  try {
    
    const nombre = $nombre.value.trim();
    const email = $email.value.trim();
    const tipo = $tipo.value;
    const permisos = $permisos.value.split(",").map(p => p.trim()).filter(p => p);

    let nuevoUsuario;
    if(tipo === "admin") {
      nuevoUsuario = new Admins(nombre, email);
      if(permisos.length > 0) {
        nuevoUsuario.agregarPermisos(...permisos);
      }
    } else {
      nuevoUsuario = new Usuarios(nombre, email);
    }

    valueUsers.push(nuevoUsuario);
    renderUsuarios();
    renderAdminEscritura();
    $form.reset();


  } catch (error) {
    $error.textContent = error.message;
  }

})



