// METODOS PRIVADOS:
// * Estos solo se usan dentro de la clase
// * Se declaran con: #nombreMetodo()
// * No se pueden acceder desde una instancia

// Ejemplo simple:
class Ejemplo {
    #metodoPrivado() {
        return 'Solo puedo ser usado dentro de esta clase'
    }

    mostrarMensaje() {
        return this.#metodoPrivado();
    }
}

const instaObject = new Ejemplo();
console.log(instaObject.mostrarMensaje());

// intentamos acceder al metodo:
// console.log(instaObject.#metodoPrivado);

// Nos lanzaria este erro: SyntaxError: Private field '#metodoPrivado'
console.log('------------------------------------------------');

// Ejemplo 1:
// Validacion de contraseña en una cuenta bancaria:
class CuentaBancaria {

    // Creamos propiedades privadas
    #propSaldo;
    #propClave;

    constructor(estado = false) {
        this.#propSaldo = 0;
        this.#propClave = undefined;
        this.propNombre = undefined;
        this.propApellido = undefined;
        this.propEdad = undefined;
        this.propOcupacion = undefined;
        this.propEstado = estado;
    }

    
    // Creamos un metodo privado para verificar una clave y se usara dentro de la clase:
    #verificarClave(claveIngresada) {
        return this.#propClave === claveIngresada;
    }
    
    // Realizamos varios metodos:
    crearCuenta(nombre, apellido, edad, ocupacion, clave, estado) {
        this.propNombre = nombre;
        this.propApellido = apellido;
        this.propEdad = edad;
        this.propOcupacion = ocupacion;
        this.#propClave = clave;
        this.propEstado = estado
    }

    retirarDinero(monto, claveIngresada) {
        if(this.#verificarClave(claveIngresada) === true) {
            if(monto > this.#propSaldo) {
                return 'Fondos insuficientes';
            }
            this.#propSaldo -= monto;
            return `Se retiro ${monto} correctamente. Saldo restante: $${this.#propSaldo}`
        }
        return 'Clave incorrecta.';
    }

    agregarDinero(dineroAgregado, claveIngresada) {
        if(this.#verificarClave(claveIngresada)) {
            if(dineroAgregado <= 0) {
                return 'Ingrese dinero mayor a 0';
            }
            this.#propSaldo += dineroAgregado;
            return `Se deposito ${dineroAgregado} correctamente. Saldo actual es: $${this.#propSaldo}`;
        }
        return 'Clave incorrecta';
    }

    verSaldoActual(claveIngresada){
        if(this.#verificarClave(claveIngresada)) {
            return `El saldo actual es: ${this.#propSaldo}`;
        }
        return 'Clave incorrecta';
    }

    verDatosCuenta(claveIngresada) {
        if(this.#verificarClave(claveIngresada)) {
            return `Nombre: ${this.propNombre}, Apellido: ${this.propApellido}, Edad: ${this.propEdad}, Ocuapacion: ${this.propOcupacion}, Saldo: ${this.#propSaldo}`;
        }
    }

}

// Creamos una instancia:
const cuentaUser = new CuentaBancaria();

// Intentamos ver los datos de la cuenta
console.log(cuentaUser);
console.log('----------------------------');

// Creamos una cuenta nueva:
cuentaUser.crearCuenta('John', 'Deacon', 45, 'Bajista', '1234', true);
console.log(cuentaUser);
console.log('----------------------------');

// Vemos nuestro saldo actual:
console.log(cuentaUser.verSaldoActual('1234'));
console.log('----------------------------');

// Agregamos mas dinero a nuestra cuenta:
console.log(cuentaUser.agregarDinero(1000, '1234'));
console.log('----------------------------');

// Retiramos dinero de nuestra cuenta:
console.log(cuentaUser.retirarDinero(500, '1234'));
console.log('----------------------------');

// Volvemos agregar mas dinero
console.log(cuentaUser.agregarDinero(1500, '1234'));
console.log('----------------------------');

// Vemos los datos de la cuenta:
console.log(cuentaUser.verDatosCuenta('1234'));
console.log('----------------------------');

// Ahora intentamos retirar dinero pero con una clave incorrecta:
console.log(cuentaUser.retirarDinero(800, '12234'));
console.log('================================================');

// Ejemplo 2:
// Registro de acceso a una pagina:
class RegistroAcceso {

    // Propiedad privada
    #usuarioConAcceso = [];

    // Metodo privado
    #registraUsuario(nombreUser) {
        this.#usuarioConAcceso.push(nombreUser);
    }

    permitirAcceso(nombre) {
        this.#registraUsuario(nombre);
        return `Acceso permitido a ${nombre}`;
    }

    verUsuario() {
        return [...this.#usuarioConAcceso];
    }

    verificarUsuario(valueName) {
        for(let value of this.#usuarioConAcceso) {
            if(value === valueName) {
                return `El usuario ${valueName} existe en la lista con acceso`;
            }
        }
        return `El usuario ${valueName} no existe`;
    }
}

// Creamos una nueva instancia:
const listaSistema = new RegistroAcceso();

// Le damos acceso a varios usuarios:
console.log(listaSistema.permitirAcceso('Marco'));
console.log(listaSistema.permitirAcceso('Pedro'));
console.log(listaSistema.permitirAcceso('Juan'));
console.log(listaSistema.permitirAcceso('Manuel'));
console.log('----------------------------------------');

// Vemos los usuarios:
console.log("Lista de usuarios:", listaSistema.verUsuario());
console.log('----------------------------------------');

// Verificamos si existen en la lista de usuarios:
console.log(listaSistema.verificarUsuario('Pedro'));
console.log(listaSistema.verificarUsuario('Mateo'));
console.log('----------------------------------------');


console.log('////////////////////////////////////////////////');


// METODOS ESTATICOS:
// * Estos se usan sin necesidad de crear una instancia
// * Se usa con: static nombreMetodo()
// * Se accede directamente desde la clase

// Ejemplo simple:
class NewEjemplo{
    static metodoEstatico() {
        return 'Puede ser usado sin instanciar la clase'
    }
}

// Usamos el metodo static:
console.log(NewEjemplo.metodoEstatico());
console.log('------------------------------------------------');

// Ejemplo 1: 
// Conversion de unidades:
class Conversor {

    // Creamos metodos estaticos
    static celsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
    
    static kilometrosAMillas(km) {
        return km * 0.621371;
    }
}

// Usamos esos metodos sin realizar una nueva instancia, solo llamando al nombre de la clase
console.log('El resultado es:', Conversor.celsiusAFahrenheit(30));
console.log('El resultado es:', Conversor.kilometrosAMillas(20));
console.log('------------------------------------------------');

// Ejemplo 2:
// Contador de instancias creadas:
class Usuarios {

    // Creamos una propiedad estatica
    static cantidadUsuarios = 0;

    constructor(nombre) {
        this.propNombre = nombre;

        // Usamos la propiedad para sumar cada vez que se crea una instante
        // y lo llamamos con el nombre de la clase "Usuarios"
        Usuarios.cantidadUsuarios++;
    }

    static obtenerTotalUsuarios() {
        return `Usuarios registrados: ${Usuarios.cantidadUsuarios}`
    }
}

// Creamos varias instancias
const user1 = new Usuarios('Manuel');
const user2 = new Usuarios('Antonio');
const user3 = new Usuarios('Pablo');
const user4 = new Usuarios('Marco');
const user5 = new Usuarios('Marcelo');

console.log(Usuarios.obtenerTotalUsuarios());


