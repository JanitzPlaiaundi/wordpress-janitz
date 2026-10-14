const catalogo = [
  { id: 1, nombre: "Teclado", precio: 35, stock: 4 },
  { id: 2, nombre: "Ratón", precio: 18, stock: 0 },
  { id: 3, nombre: "Monitor", precio: 180, stock: 2 },
  { id: 4, nombre: "Cable", precio: 8, stock: 10 },
];

function obtenerNombres(lista) {
  return lista.map((e) => {
    return e.nombre;
  });
}

function obtenerDisponibles(lista) {
  return lista.filter((e) => e.stock > 0);
}

function buscarPorId(lista, id) {
  const nuevaLista = lista.find((e) => e.id == id);
  if (nuevaLista == undefined) {
    return "No existe esa id";
  } else {
    return nuevaLista;
  }
}

function calcularValorStock(lista) {
  const nuevaLista = lista.map((e) => {
    e.valorStock = e.precio * e.stock;
    return e;
  });

  if(nuevaLista.length < 1){
    return "Valores no validos"
  }else{
    return nuevaLista
  }
}

function obtenerNombresDisponibles(lista) {
    const nuevaLista = obtenerNombres(obtenerDisponibles(lista));
    if(nuevaLista == undefined || nuevaLista.length < 1 ){
        return "Valores no validos"
    }else{
        return nuevaLista
    }
}
console.log(catalogo);
console.log(buscarPorId(catalogo, 2));
console.log(buscarPorId(catalogo, 99));
console.log(calcularValorStock(catalogo));
console.log(obtenerNombresDisponibles([]));
console.log(catalogo);
