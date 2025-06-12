class Inventario {

  constructor() {
    this.productos = new Map();

  }

  // Metodos de nuestro inventario:
  agregarProductos(id, nombre, precio, stock) {
    if(this.productos.has(id)) {
      console.log(`Producto con ID ${id} ya existe`);
      return;
    }
    this.productos.set(id, {nombre, precio, stock})
  }

  actualizarStock(id, cantidad) {
    if(!this.productos.has(id)) {
      console.log('Producto no encontrado')
      return;
    }
    const valueProducto = this.productos.get(id);
    if(cantidad < valueProducto.stock) {
      console.log('Ingresa una cantidad mayor a la del stock');
      return;
    }
    valueProducto.stock += cantidad;
    this.productos.set(id, valueProducto)
  }

  obtenerProductosDisponibles() {
    return [...this.productos.entries()]
    .filter(([_, propiedad]) => propiedad.stock > 0)
    .map(([id, propiedad]) => ({
      id, ...propiedad
    }))
  }

  calcularValoresTotal() {
    return [...this.productos.values()]
    .reduce((total, propiedad) => total + propiedad.precio * propiedad.stock, 0)
  }
}

// Usamos las clase inventario:
try {
  
  const inventario = new Inventario();

  inventario.agregarProductos(1, "Camisa", 23, 6);
  inventario.agregarProductos(2, "Pantalon", 40, 0);
  inventario.agregarProductos(3, "Abrigo", 45, 3);
  inventario.agregarProductos(3, "Polera", 30, 8);

  console.log(inventario);

  console.log(inventario.obtenerProductosDisponibles());
  inventario.actualizarStock(2, 3);
  
  console.log('Productos actualizados: ');
  console.log(inventario.obtenerProductosDisponibles());
  console.log("Valor total: ",inventario.calcularValoresTotal());


} catch (error) {
  console.error(error.message)
}










