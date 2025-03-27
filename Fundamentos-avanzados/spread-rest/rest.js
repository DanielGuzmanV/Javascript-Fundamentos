// Rest agrupa elementos en un solo parametro
// Cuando se usa en funciones o desestructuracion

function sumarValores(...valores) {
    return valores.reduce((acc, numero) => acc + numero, 0);
}

console.log(sumarValores(1,2,3,4));

