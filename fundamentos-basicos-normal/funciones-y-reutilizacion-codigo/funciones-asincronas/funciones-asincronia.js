// Estas permiten manejar codigo asincrono que se ejecuta despues de un tiempo

// Funcion asincrona sin parametros
async function obtenerDatos() {
    console.log('Obteniendo datos...');
    await new Promise(
        resolve => setTimeout(resolve, 2000)
    );

    console.log('Los datos son: Pedro de 43 años');
    
}
obtenerDatos();

// Funcion asincrona con parametros:
async function realizarOperacion(value1, value2) {
    console.log('Realizando operacion');
    await new Promise(duracion => setTimeout(duracion, 3000));
    let resultado = value1 + value2;
    console.log('Resultado de la operacion es:', resultado);
}
realizarOperacion(23, 10);
// -----------------------------------------------------------------

// Realizamos una funcion con una promesa y una pequeña operacion
function obtenerResultado() {
    return new Promise ( duracion => {
        setTimeout( () => {
            let operacion = 5 + 5;
            duracion(operacion);
        }, 4000);
    } )
}
obtenerResultado().then(respuesta => console.log('La respuesta es:', respuesta));
// -------------------------------------------------------

// Ejemplo con prametros en setTimeout (Usando funcion flecha)
function obtenerNumeros1() {
    return new Promise ( duracion => {
        setTimeout( () => duracion(23 + 7), 5000 );
    });
}
obtenerNumeros1().then(res => console.log('Resultado funcion flecha:', res));

// Ejemplo con parametros en setTimeout (Pasando directamente)
function obtenerNumeros2() {
    return new Promise (duracion => {
        setTimeout(duracion, 6000, 23 + 50);
    });
}
obtenerNumeros2().then(res => console.log('Resultado directo:', res));
// -------------------------------------------------------

// Usamos "Promise"
const newPromesa = new Promise((resolve) => {
    setTimeout( () => {
        resolve('Operacion completada...');
    }, 7000 )
});

newPromesa.then(respuesta => console.log(respuesta));
// ---------------------------------------------------------

// Realizamos una funcion antes del setTimeout
function operacionNumeros() {

    return new Promise( duracion => {
        let resultado = function() {
            return 24 + 94;
        }
        setTimeout( () => duracion(resultado), 8000);
    })
}
operacionNumeros().then(res => console.log('Nuevo Resultado 1:', res()));

// Tambien podemos realizar operaciones simples:
function operacionNumeros2() {
    return new Promise( duracion => {
        let resultado = 299 + 12;
        setTimeout( () => duracion(resultado), 9000);
    })
}
operacionNumeros2().then(resp => console.log('Nuevo resultado 2:', resp));

// Podremos usar listas o verificar si son pares:
let listaNumeros = [1,2,3,4,5,6,7,8,9,10];
function obtenerPares() {
    return new Promise ( duracion => {
        let listaPares = listaNumeros.filter(value => value % 2 === 0);
        setTimeout( () => duracion(listaPares), 10000);
    })
}
// obtenerPares().then(respuesta => console.log('Los pares son:', respuesta));

// Tambien podemos usarlo con una funcion asincrona:
async function obtenerListaPares() {

    setTimeout(() => console.log("Obteniendo lista con pares..."), 9000);
    
    let listaPares = await obtenerPares();
    console.log('La lista de pares es:', listaPares);

}
obtenerListaPares();



