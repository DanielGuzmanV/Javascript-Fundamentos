// listas, array o arreglos
const lista = [23, "atento", true, undefined, null];
const lista2 = new Array(4, "guardia", false, undefined, null);
const lista3 = new Array(3);
lista3[0] = "otro dia";
lista3 [1] = "Mismo dia";
lista3 [2] = 23
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// objetos
const movil = {
    altura: 10,
    anchura: 4, 
    marca: "xiaomi",
    isBlack: true, 
    contactos: ["Marco", "Pablo", "Pedro"],
    dimenciones: {
        altura: 10,
        anchura: 5
    }
}

movil.anyo = 2021;
movil.marca = "samsung"


console.log(movil.marca);

// fechas
// Trabaja con librerias de apoyo Moment-js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fecha_cadena = new Date("october 23 2017");
console.log(fecha_cadena);

const fecha_valores = new Date(2017, 9, 23);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);
