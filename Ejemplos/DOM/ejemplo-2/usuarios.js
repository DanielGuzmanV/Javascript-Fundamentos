export class Usuarios {
  constructor(paramNombre, paramEmail) {
    if(!paramEmail.includes('@')) alert('El email es invalido');
    this.nombre = paramNombre;
    this.email = paramEmail;
  }

  mostrarInformacion() {
    return `${this.nombre} - ${this.email}`;
  }
}

export class Admins extends Usuarios {
  constructor(paramNombre, paramEmail, paramPermisos = []) {
    super(paramNombre, paramEmail);
    this.permisos = paramPermisos
  }

  agregarPermisos(...nuevosPermisos) {
    nuevosPermisos.forEach( permiso => {
      if(!this.permisos.includes(permiso)) {
        this.permisos.push(permiso)
      }
    })
  }

  tienePermiso(permiso) {
    return this.permisos.includes(permiso);
  }

}


