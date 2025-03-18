// Para hacer que un archivo sea un modulo, se usa "export"

// Podremos exportar variables y funciones:
export const PI = 3.1416;

export function sumar(number1, number2) {
    return number1 + number2;
}

// Tambien podremos realizar una exportacion por defecto:
export default function saludar(name) {
    return `Hola, ${name}`;
}


