// Mismo ejemplo que el anterior con ligeros cambios:
// crear un programa que:

// 1. Tenga un menu interactivo:
//  - Agregar numeros al array (sin limite)
//  - Ver el array
//  - Sumar todos los numeros del array
//  - Salir

// 2. Permitir al usuario decidir cuando dejar de agregar numeros

const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let arrValues = [];

function menuInicial() {
    console.log('\n -- Menu Principal --');
    console.log('1. Agregar numeros al array');
    console.log('2. Ver array');
    console.log('3. Sumar elementos del array');
    console.log('4. salir');

    interfaz.question('Selecciona una opcion: ', (opcion) => {
        if(opcion === '1') {
            addNumbersArray();
        } else if(opcion === '2') {
            verArrayValues();
        } else if(opcion === '3') {
            sumarArray();
        } else if(opcion === '4') {
            console.log('Saliendo del menu...');
            interfaz.close();
        } else {
            console.log('Opcion no valida, ingrese un numero');
            menuInicial();
        }
    })
}

function addNumbersArray() {
    console.log('1. Agregar elementos');
    console.log('2. Salir');

    interfaz.question('Selecciona una opcion: \n', (inputValue) => {
        if(inputValue === '1') {
            function numerosArray() {
                interfaz.question('Ingrese el numero o ingrese (fin) para terminar: \n', (numValues) => {
                    if(numValues.toLocaleLowerCase() === 'fin') {
                        console.log('Se terminaron de agregar numeros');
                        addNumbersArray();
                    } else {
                        const numeros = parseFloat(numValues);
                        if(!isNaN(numeros)) {
                            arrValues.push(numeros);
                            console.log(`${numeros} se agrego al array`)
                        } else {
                            console.log('Valor no valido, debe ser un numero');
                        }
                        numerosArray();
                    }
                    numerosArray();
                });
            }
            numerosArray();

        } else if(inputValue === '2') {
            console.log('Se termino de agregar numeros a la lista');
            menuInicial();
        } else {
            console.log('Opcion no valida');
            addNumbersArray();
        }
    })
}

function sumarArray() {
    let resultado = 0;
    if(arrValues.length !== 0) {
        for(let value of arrValues) {
            resultado += value;
        }
        console.log('La suma es: ', resultado);
        menuInicial();
    } else {
        console.log('--------------------------------------');
        console.log('La lista esta vacia, no se puede sumar');
        console.log('--------------------------------------');
        menuInicial();
    }
}

function verArrayValues() {
    if(arrValues.length !== 0) {
        console.log('--------------------------------------');
        console.log('- La lista de numeros es: ', arrValues);
        console.log('--------------------------------------');
        menuInicial();
    } else {
        console.log('-------------------');
        console.log('La lista esta vacia');
        console.log('-------------------');
        menuInicial();
    }
}

// Iniciamos el programa:
menuInicial();



