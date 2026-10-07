let precio = prompt("Inserta el precio")

if(precio < 50 ){
    console.log("Sin descuento")
}else if(precio < 100){
    console.log("El descuento es de: " + precio * 0.05)
}else if(precio < 200){
    console.log("El descuento es de:" + precio * 0.1)
}else{
    console.log("El descuento es de: " + precio * 0.15)
}