// Gestor de tareas:
// Usaremos arrays, objetos, fn normales y de orden superior
// Manejo de errores con try/catch
// Utilzaremos spread/rest 
// Y por ultimo modulos con ESM:

export class Tarea {
  constructor(argTitulo, argCompletado = false) {
    if(!argTitulo) throw new Error('El titulo es obligatorio');

    this.titulo = argTitulo;
    this.completado = argCompletado;
  }

  marcarCompletar(){ 
    this.completado = true;
  }

  verResultado(){
    return `${this.titulo} - ${this.completado ? 'Tarea Completada' : 'Tarea Pendiente'}`;
  }
}

export class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  agregarTareas(...tareasNuevas) {
    tareasNuevas.forEach( (valTarea) => {
      if(!(valTarea instanceof Tarea)) {
        console.error('Solo se pueden agregar objetos de tipo tarea');
      } else {
        this.tareas.push(valTarea);
      }
    });
  }

  listarTareas() {
    return this.tareas.map( (value, idx) => {
      return `${idx + 1}. - ${value.verResultado()}`;

    })
  }

  completarTarea(indice){
    if(indice < 0 || indice >= this.tareas.length) {
      throw new Error('Indice invalido de tarea');
    }
    this.tareas[indice].marcarCompletar();
  }

}




