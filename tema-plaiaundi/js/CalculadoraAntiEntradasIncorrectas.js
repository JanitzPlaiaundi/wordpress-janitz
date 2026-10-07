let valor1 = Number(prompt("Escribe el primer numero: "))
let valor2 = Number(prompt("Escribe el segundo numero: "))

if(!Number.isNaN(valor1) && !Number.isNaN(valor2)){
    console.log("Suma: " + (valor1 + valor2))
    console.log("Resta: " + (valor1 - valor2))
    console.log("Multiplicación: " + (valor1 * valor2))
    if(valor2 > 0){
        console.log("División: " + (valor1 / valor2))
    }else{
        console.log("El programa no permite dividir entre 0")
    }
    
}else{
    console.log("Numeros no validos")
}