class Libro{
    constructor(titulo, precio, unidades){
        this.titulo = titulo
        this.precio = precio
        this.unidades = unidades
    }

    calcularImporte() {return this.precio * this.unidades}
    
    estaDisponible(){
        if(this.unidades <= 0) return false
        else return true
    }
}

let libro1 = new Libro("Titulo1", 12, 3)
let libro2 = new Libro("Titulo2", 20, 0)

let listaLibros = []
listaLibros.push(libro1)
listaLibros.push(libro2)

let nombresDeLosLibros = listaLibros.map(libro => {
    return libro.titulo
})
console.log("Nombres: ")
console.log(nombresDeLosLibros)

let soloDisponibles = listaLibros.filter(libro => libro.estaDisponible() === true)

console.log("Disponibles: ")
console.log(soloDisponibles)

let calcularImporte = listaLibros.reduce((acumulador, libro) => {
    return acumulador += libro.precio * libro.unidades
},0)

console.log("Precio total: " + calcularImporte + "€")