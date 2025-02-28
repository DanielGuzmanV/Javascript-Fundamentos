
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Lados: ', (input) => {
    const l = parseInt(input);
  const a = l * l;

    console.log('Área: ' + a);

    rl.close();
});