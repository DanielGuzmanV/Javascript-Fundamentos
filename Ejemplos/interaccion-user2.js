const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Lado 1: ');

interfaz.question('Ingresa un numero: ', (enLado1) => {
const lado1 = parseInt(enLado1);

    console.log('Lado 2: ');

    interfaz.question('Ingresa un numero: ', (enLado2) => {
        const lado2 = parseInt(enLado2);

        const area = lado1 * lado2;
        const perimetro = 2 * (lado1 + lado2);

        console.log('Area: ', area);
        console.log('Perimetro: ', perimetro);

        interfaz.close();
    });
});
