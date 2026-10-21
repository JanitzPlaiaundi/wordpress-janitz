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

const teclado = new Producto(1, "Teclado", 35, 4);
teclado.stock = 8;	// 8
console.log(teclado.stock) ;
teclado.stock = -1;   // sigue 8
console.log(teclado.stock) ;
teclado.stock = 2.5;  // sigue 8
console.log(teclado.stock) ;
teclado.stock = "6";  // sigue 8


console.log(teclado.estaDisponible())
console.log(teclado.calcularValorStock() + "€")
teclado.vender(1)
console.log(teclado.calcularValorStock() + "€")