let parar = false
let lista = []
let suma = 0

while (!parar){
    let num = Number(prompt("Escribe un numero a incrementar (pon 0 para parar el programa)"))

    if(num != 0){
        lista.push(num)
        suma += num
    }else{
        parar = true
    }
}

console.log("Suma: " + suma + " Cantidad: " + lista.length + " Media: " + (suma/lista.length))