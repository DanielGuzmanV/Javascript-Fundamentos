// Esperamos que todo el documento este cargado:
document.addEventListener('DOMContentLoaded', function() {
  const inputTarea = document.getElementById('nueva-tarea');
  const btnAgregar = document.getElementById('agregar-btn');
  const listaTareas = document.getElementById('lista-tareas');

  // Evento para agregar tarea al hacer clic:
  btnAgregar.addEventListener('click', agregarTareas);

  // Agregamos tareas presionando enter
  inputTarea.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
      agregarTareas();
    }
  })

  // Funcion para agregar las tareas:
  function agregarTareas() {
    const textoTarea = inputTarea.value.trim();

    if(textoTarea === '') {
      alert('Por favor ingresa una tarea');
      return;
    }

    // Creamos un nuevo elemento "li" para la tarea:
    const liTarea = document.createElement('li');
    liTarea.className="bg-gray-200 rounded-md rounded hover:bg-gray-300 transition"

    // Creamos el contenedor interno:
    const contenedor = document.createElement('div');
    contenedor.className="flex justify-between items-center gap-3 p-2 border-b";

    // Creamos el span para el texto:
    const span = document.createElement('span');
    span.textContent = textoTarea;

    // Creamos el boton para eliminar la tarea:
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition";

    btnEliminar.addEventListener('click', () => {
      listaTareas.removeChild(liTarea);
    })

    contenedor.appendChild(span);
    contenedor.appendChild(btnEliminar);

    liTarea.appendChild(contenedor);
    listaTareas.appendChild(liTarea);

    // Limpiamos el input:
    inputTarea.value = '';
    inputTarea.focus();

  }
  
})





