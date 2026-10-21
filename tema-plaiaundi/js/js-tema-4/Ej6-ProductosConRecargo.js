class Producto {
        #stock
        constructor(id, nombre, precio, stock){
            this.id = id
            this.nombre = nombre
            this.precio = precio
            this.#stock = stock
        }

        get stock(){
            return this.#stock
        }

        set stock(stock){
            if(stock >= 0 && Number.isInteger(stock)){this.#stock = stock}
        }

        vender(unidades){
            if(unidades > 0 && unidades < this.#stock){
                this.#stock -= 1
                return true
            }
            return false
        }

        estaDisponible(){
            return this.#stock > 0
        }

        calcularValorStock(){
            return this.precio * this.#stock
        }
}

class ProductoConRecargo extends Producto{
    calcularValorStock(){
        return super.calcularValorStock() * 1.1
    }
}

let producto = new ProductoConRecargo(1, "nombre", 10, 2)

console.log(producto.calcularValorStock() + "€")

let lista = []

let productoNormal = new Producto(2, "Nombre", 35, 4)
lista.push(productoNormal)

let productoConRecargo = new ProductoConRecargo(3, "Nombre", 10, 2)
lista.push(productoConRecargo)

let valorTotal = lista.reduce((ac, producto) => {
    return ac += producto.calcularValorStock()
}, 0)

console.log(valorTotal + "€")