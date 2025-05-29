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

    // Creamos el contenedor interno:
    const contenedor = document.createElement('div');
    contenedor.classList.add('item-contenido');

    // Creamos el span para el texto:
    const span = document.createElement('span');
    span.textContent = textoTarea;

    // Creamos el boton para eliminar la tarea:
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');

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





