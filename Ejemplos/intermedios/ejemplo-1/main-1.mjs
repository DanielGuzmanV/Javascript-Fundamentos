import { Tarea, GestorTareas } from "./tarea.mjs";

try {
  
  const gestor = new GestorTareas();

  // Creamos tareas:
  const tarea1 = new Tarea('Aprender Javascript');
  const tarea2 = new Tarea('Proyectos simples');
  const tarea3 = new Tarea('Leer documentacion');

  // Agregamso varias tareas a la vez con spread/rest:
  gestor.agregarTareas(tarea1, tarea2, tarea3);

  // Mostrar tareas:
  console.log("Lista de tareas:");
  console.log(gestor.listarTareas().join('\n'));

  // Marar una tarea como completada:
  gestor.completarTarea(1);

  // Vemos las tares actualizadas:
  console.log('\n Despues de completar una tarea:');
  console.log(gestor.listarTareas().join('\n'));

  // Intentar agregar una tarea invalida:
  gestor.agregarTareas('Nueva tarea');



} catch (error) {
  console.error('Error:', error.message);
}



