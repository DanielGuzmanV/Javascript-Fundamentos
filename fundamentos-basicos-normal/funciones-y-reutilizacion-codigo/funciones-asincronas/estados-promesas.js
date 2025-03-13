// Haremos ejemplos usando los estados de las promesas

// Ejemplo 1: Promesa con "resolve" y "reject"
function verifcarNumero (value_Number) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('------------------------------------');
            if(value_Number % 2 === 0) {
                resolve('Numero valido (es par)');
            } else {
                reject('Numero invalido (es impar)');
            }
        }, 1500);
    });
}

verifcarNumero(9)
    .then(res => console.log('Fulfilled:', res))
    .catch(err => console.log('Rejected:', err));
// ---------------------------------------------------------------------------

// Ejemplo 2: Mostrar los estados de la promesa (pending, fulfilled, rejected)
let varEstado = 'pedding';

const nuevaPromesa = new Promise ( (resolve, reject) => {
    console.log('Estado:', varEstado);

    setTimeout( () => {
        console.log('-----------------------------------');
        let varExito = Math.random() > 0.5; // Con esto simulamos un exito o falla
        if(varExito) {
            varEstado = 'fulFilled';
            resolve('La operacion fue exitosa');
        } else{
            varEstado = 'rejected';
            reject('Hubo un error en la operacion...');
        }
        console.log('Estado despues de 2s:', varEstado);
    }, 2000)
});

nuevaPromesa
.then(res => console.log('Fulfilled:', res))
.catch(err => console.log('Rejected:', err));
// -------------------------------------------------------------------

// Ejemplo 3: usando "finally" para cuando la promesa termine
function operacionAleatoria() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('----------------------------------')
            let resultado = Math.floor(Math.random() * 10) + 1;
            if(resultado > 5) {
                resolve('Numero mayor a 5');
            } else{
                reject('Numero menor a 5');
            }
        }, 2500)
    })
}
operacionAleatoria()
.then(res => console.log('Fulfilled:', res))
.catch(err => console.log('Rejected:', err))
.finally( () => console.log('La opearcion ha finalizado'));





