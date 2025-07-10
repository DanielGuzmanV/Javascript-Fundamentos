import { Usuarios, Admins } from "./usuarios.js";

const valueUsers = [];

const $form = document.getElementById("formUsuario");
const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $selectValue = document.getElementById("selectTipo");
const $inputPermisos = document.getElementById("permisos");
const $error = document.getElementById("error");
const $listaUsuarios = document.getElementById("listUsuarios");
const $listaAdmins = document.getElementById("listAdmins");
const $listAdminRoles = document.getElementById("listAdminRoles");
const $selectValueRol = document.getElementById("selectRol");

// Formulario para enviar los datos a las listas:
$form.addEventListener('submit', event => {
  event.preventDefault();
  $error.textContent = "";
  try {
    const nombre = $nombre.value.trim();
    const email = $email.value.trim();
    const valuetipo = $selectValue.value;
    const valuePermisos = $inputPermisos.value.split(",").map(p => p.trim()).filter(p => p);

    let nuevoUsuario;
    if(valuetipo === "admin") {
      nuevoUsuario = new Admins(nombre, email);
      if(valuePermisos.length > 0) {
        nuevoUsuario.agregarPermisos(...valuePermisos);
      }
    } else {
      nuevoUsuario = new Usuarios(nombre, email);
    }

    valueUsers.push(nuevoUsuario);

    // Limpiamos las listas antes de renderizar:
    $listaUsuarios.innerHTML = "";
    $listaAdmins.innerHTML = "";

    valueUsers
      .filter( (instansUsers) => instansUsers instanceof Admins)
      .forEach( (instansUsers) => renderAdministradores(instansUsers));

    valueUsers
      .filter( (instansUsers) => !(instansUsers instanceof Admins))
      .forEach( (instansUsers) => renderUsuarios(instansUsers));

      $form.reset();
      $selectValueRol.value = 'ninguno'
      togglePermisosInput();
      toggleRolesList();

  } catch (error) {
    $error.textContent = error.message;
  }
})


// Renderizar Administradores:
function renderAdministradores(users) {
  const valueLi = document.createElement("li");
  valueLi.className="bg-gray-200 p-2 rounded border-2 border-gray-300 shadow-lg hover:bg-gray-300"
  valueLi.textContent = users.mostrarInformacion();
  $listaAdmins.appendChild(valueLi);
}
// ================================================


// Renderizar usuarios:
function renderUsuarios(users) {
  const valueLi = document.createElement("li");
  valueLi.className="bg-gray-200 p-2 rounded border-2 border-gray-300 shadow-lg hover:bg-gray-300"
  valueLi.textContent = users.mostrarInformacion();
  $listaUsuarios.appendChild(valueLi);
}
// ================================================


// Renderizar Administradores con roles:
function renderAdminRol(valueRol) {
  $listAdminRoles.innerHTML = "";

  if(valueRol === "todos") {
    const admins = valueUsers.filter(users => users instanceof Admins);
    admins.forEach(valueAdmin => {
      const valueLi = document.createElement("li");
      valueLi.className="bg-gray-200 p-2 rounded border-2 border-gray-300 shadow-lg hover:bg-gray-300"
      valueLi.textContent = valueAdmin.mostrarInformacionAdmin();
      $listAdminRoles.appendChild(valueLi);
    })

  } else {
    const admins = valueUsers.filter(
      user => user instanceof Admins && user.tienePermiso(valueRol)
    )
    admins.forEach( admin => {
      const valueLi = document.createElement("li");
      valueLi.className="bg-gray-200 p-2 rounded border-2 border-gray-300 shadow-lg hover:bg-gray-300"
      valueLi.textContent = admin.mostrarInformacionAdmin();
      $listAdminRoles.appendChild(valueLi);
    }) 
  }
}
// ==================================================


// Funcion para mostrar los admins con roles:
function toggleRolesList() {

  // Normalizamos el texto de entrada
  const inputValue = $selectValueRol.value.toLowerCase();
  const valueRolesAdmin = ['todos', 'lectura', 'escritura', 'borrar'];

  if(inputValue === 'ninguno'){
    $listAdminRoles.style.display = 'none';

  } else if(valueRolesAdmin.includes(inputValue)){
    $listAdminRoles.style.display = 'block';
    renderAdminRol(inputValue);

  } 
}


// Funcion para mostrar o ocultar el input de inputPermisos:
function togglePermisosInput() {
  if($selectValue.value === 'admin') {
    $inputPermisos.style.display = 'block';
  } else {
    $inputPermisos.style.display = 'none';
    $inputPermisos.value = '';
  }
}


// Opcion select:
document.addEventListener('DOMContentLoaded', () => {
  // Ocultamos el input al cargar la pagina si no es admin:
  togglePermisosInput();
  toggleRolesList();

  // Escuchamos los cambios en el select:
  $selectValue.addEventListener('change', togglePermisosInput)
  $selectValueRol.addEventListener("change", toggleRolesList);

})




