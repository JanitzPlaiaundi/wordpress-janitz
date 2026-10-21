let libro = {
    titulo: "TituloLibro",
    precio: 12,
    unidades: 3,
    calcularImporte: function() {return this.precio * this.unidades}
}

console.log(libro.calcularImporte())

libro.unidades = 5

console.log(libro.calcularImporte())