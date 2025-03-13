// La pila sigue la regla (Last In, First Out)
// Ejemplo con una clase:

class Stack {
    constructor() {
        this.items = [];
    }

    // Creamos el metodo para agregar elementos a la pila:
    push(element) {
        this.items.push(element);
    }

    // Con este metodo eliminaremos el ultimo elemento, y si lo usamos en
    // consola veremos el elemento eliminado
    pop() {
        return this.items.pop();
    }

    // Metodo peek que nos muestra el ultimo elemento
    peek() {
        return this.items[this.items.length - 1];
    }

    // Metodo isEmpty que nos indica si la lista esta vacia o no:
    isEmpty() {
        return this.items.length === 0;
    }
}

// --------------------------------------------------
let pila = new Stack();
console.log(pila.isEmpty());

// Agregamos numeros con el push:
pila.push(23);
pila.push(34);
pila.push(56);
pila.push(12);
pila.push(123);
pila.push(67);


// Vemos la pila:
console.log(pila);

// Eliminamos el ultimo elemento:
pila.pop();
console.log(pila);

// Vemos el elemento que eliminaremos
console.log(pila.pop());

// Vemos si la pila esta vacia:
console.log(pila.isEmpty());

// Vemos el ultimo elemento de la pila
console.log(pila.peek());




