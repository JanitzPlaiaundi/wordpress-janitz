let p = {nombre: "Producto1", precio: 100, proveedor: {nombre: "A"}}

let copiaProveedorCompartido = {...p}
let copiaProveedorIndividual = {...p, proveedor: {...p.proveedor}}
p.proveedor.nombre = "proveedor cambiado"

let {nombre: nombreProducto, precio} = copiaProveedorCompartido

console.log(nombreProducto + " | " + precio + " | " + copiaProveedorCompartido.proveedor.nombre)
console.log(copiaProveedorIndividual.nombre + " | " + copiaProveedorIndividual.precio + " | " + copiaProveedorIndividual.proveedor.nombre)