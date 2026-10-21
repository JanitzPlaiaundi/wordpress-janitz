import Producto from "./Producto.js";

export default class ProductoConRecargo extends Producto{
    calcularValorStock(){
        return super.calcularValorStock() * 1.1
    }
}