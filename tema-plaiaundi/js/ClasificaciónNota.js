const nota = prompt("Escribe la nota: ") || 0

if(nota < 5){
    console.log("Suspenso")
}else if(nota <6.99){
    console.log("aprobado")
}else if(nota < 8.99){
    console.log("Notable")
}else{
    console.log("Sobresaliente")
}