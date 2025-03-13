// La cola sigue la regla (First In, First Out)
// Ejemplo con una clase:
class Queue {
    constructor() {
        this.items = [];
    }

    // Creamos el metodo para agregar a la cola
    enqueue(element) {
        this.items.push(element);
    }

    // Metodo elimina el primer elemento y nos mostrara 
    // el elemento eliminado si lo usamos en consola
    dequeue() {
        return this.items.shift();
    }

    // Metodo que nos muestra el primer elemento
    peek() {
        return this.items[0];
    }
}

// ----------------------------------------------
let cola = new Queue();

// Agregamos elementos a la cola:
cola.enqueue(23);
cola.enqueue(12);
cola.enqueue(56);
cola.enqueue(83);

// Vemos los elementos:
console.log(cola);

// Eliminamos el primer elemento:
cola.dequeue();
console.log(cola);

// Eliminamos otro elemento pero ahora vemos el elemento eliminado
console.log(cola.dequeue());

console.log(cola.peek());
// console.log(cola);


