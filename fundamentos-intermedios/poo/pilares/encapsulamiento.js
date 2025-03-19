// Encapsulamiento:
// En Js se usa # para atributos privados
// Estos controlan el acceso a los datos de un objeto

class CuentaBancaria {
    #propSaldo;

    constructor(nombre = 'Sin nombre', ocupacion = 'Sin ocupacion', saldoInicial = 0) {
        this.#propSaldo = saldoInicial;
        this.propNombre = nombre;
        this.propOcupacion = ocupacion;
    }

    datosUsuario() {
        console.log(`Nombre: ${this.propNombre}, Ocupacion: ${this.propOcupacion}`);
    }

    obtenerSaldo2() {
        return `El saldo es: ${this.#propSaldo}`;
    }
}

const cuenta = new CuentaBancaria('Juan', 'Developer', 2900);
cuenta.datosUsuario();

console.log(cuenta.obtenerSaldo2());
console.log('---------------------------------');

// Intentamos acceder a las propiedades:
console.log(cuenta.propNombre);
console.log(cuenta.propOcupacion);
// console.log(cuenta.#propSaldo);

// Como vemos me sale un error: SyntaxError: Private field '#propSaldo'


