// Este siempre se ejecuta, si hay error o si no hay errores

try {
    let variable = 34;
    console.log(variable);
} catch (error) {
    console.log('Se ha producido un error:', error);
} finally {
    console.log('Este bloque siempre se ejecutara...');
}

