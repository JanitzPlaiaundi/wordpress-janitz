const productos = [
   { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
   { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
   { id: 3, nombre: "Monitor", precio: 180, stock: 2 }
 ];

const listaPrecios = productos.map(producto => (producto.precio))
const productosBaratos = productos.filter(producto => producto.precio < 40)
const buscarProducto = productos.find(producto => producto.id == 2)

console.log(listaPrecios)
console.log(productosBaratos)
console.log(buscarProducto)