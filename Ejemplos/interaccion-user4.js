const readline = require('readline');

const rolado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Lado 1: ');
    rolado.question('Ingresa un numero: ', (enputadoLado1) => {
    const lado1 = parseInt(enputadoLado1);

    console.log('Lado 2: ');
    rolado.question('Ingresa un numero: ', (enputadoLado2) => {
        const lado2 = parseInt(enputadoLado2);

        const area = lado1 * lado2;
        const perimetro = 2 * lado1 + 2 * lado2;

        console.log('Area: ', area);
        console.log('Perimetro: ', perimetro);

        rolado.close();
    });
});
