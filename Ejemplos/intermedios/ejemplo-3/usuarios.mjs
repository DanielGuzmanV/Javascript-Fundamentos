// Ejemplo 3 - Sistema de usuarios con herencia y manejo de errores
// Uso de poo con clases y herencia
// Uso de spread/rest
// Funciones de ordens superior para filtrar ususarios
// Uso de modulos

// Usuarios:
class Usuarios {
  constructor(paramNombre, paramEmail) {
    if(!paramEmail.includes('@')) return 'Email invalido!';
    this.nombre = paramNombre;
    this.email = paramEmail;
  }

  mostrarInfo() {
    return `${this.nombre} - ${this.email}`;
  }
}

class Admin extends Usuarios {
  constructor(paramNombre, paramEmail, permisos = []) {
    super(paramNombre, paramEmail);
    this.permisos = permisos;
  } 

  agregarPermisos(...nuevosPermisos) {
    nuevosPermisos.forEach(permiso => {
      if(!this.permisos.includes(permiso)){
        this.permisos.push(permiso)
      }
    })
  }

  tienePermisos(permiso) {
    return this.permisos.includes(permiso);
  }
}

export {Admin, Usuarios};
