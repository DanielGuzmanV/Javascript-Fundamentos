// Ejemplo 1: Verificacion de stock en una tienda
// Un cliente intenta comprar un producto, pero pueden ocurrir varios errores
// * El producto no existe
// * El stock es insuficiente
// * La cantidad ingresada no es valida

// Creamos la excepcion personalizada:
class StockErrorCustom extends Error {
    constructor(customMessage) {
        super(customMessage);
        this.nameCustom = 'StockErrorCustom';
    }
}

// Creamos el objeto tienda:
const tiendaObjeto = {
    'laptop': 5,
    'teclado': 10,
    'mouse': 0,
}

// Creamos la funcion para comprar el producto:
function comprarProducto( producto, cantidad) {
    try {
        
        if (!tiendaObjeto.hasOwnProperty(producto)) {
            throw new ReferenceError(`El producto "${producto}" no existe`);
        } 
        
        if(typeof cantidad !== 'number') {
            throw new TypeError('La cantidad debe ser un numero');
        }
        
        if(cantidad <= 0) {
            throw new TypeError('La cantidad debe ser mayor a 0');
        }

        if(tiendaObjeto[producto] < cantidad) {
            throw new StockErrorCustom(`Stock insuficiente. Solo quedan ${tiendaObjeto[producto]} unidades de ${producto}`);
        }

        tiendaObjeto[producto] -= cantidad;
        console.log(`Compra exitosa: ${cantidad} unidades de ${producto}`);

    } catch (error) {
        if(error instanceof StockErrorCustom) {
            console.log(`Error de Stock: ${error.message}`);
        } else if (error instanceof TypeError){
            console.log(`Error de tipo: ${error.message}`);
        } else if(error instanceof ReferenceError) {
            console.log(`Error de referencia: ${error.message}`);
        } else {
            console.log(`Ocurrio otro tipo de error: ${error.message}`);
        }
    } finally{
        console.log('Gracias por visitar nuestra tienda...');
    }
}

// Realizamos las pruebas:

comprarProducto('laptop', 2);
comprarProducto('mouse', 1);
comprarProducto('monitor', 2);
comprarProducto('teclado', 0);
comprarProducto('teclado', '3');





