// En este ejemplo exportaremos un objeto y funciones, utilizando ESM

export const objectUser = {
    name: 'Roger Taylo',
    age: 43,
    occupation: 'Baterista'
}

export function saludar(paramObject) {
    return `Hola ${paramObject.name}, estamos usando ESM`;
}

export function esAdulto(paramObject) {
    return paramObject.age >= 18
}

export function trabajo(paramObject) {
console.log(`Su profesion es: ${paramObject.occupation}`);
}