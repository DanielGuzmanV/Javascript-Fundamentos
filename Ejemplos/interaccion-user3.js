const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Lado 1: ');
rl.question('Ingresa un numero: ', (inputLado1) => {
    const l = parseInt(inputLado1);

    console.log('Lado 2: ');
    rl.question('Ingresa un numero: ', (inputLado2) => {
        const l2 = parseInt(inputLado2);

        const a = l * l2;
        const p = 2 * l + 2 * l2;

        console.log('Area: ', a);
        console.log('Perimetro: ', p);

        rl.close();
    });
});
