let multiplosDe3 = []

for(let i = 1; i<=100; i++){

    if(i <= 3){
        console.log("Iteracion " + i + " valor: " + i)
    }

    if(i % 3 == 0 && i % 5 != 0){
        multiplosDe3.push(i)
    }
}

console.log("Bucle terminado, datos calculados")

multiplosDe3.forEach(num => {
    console.log(num)
})

console.log("Hay " + multiplosDe3.length + " cantidad de multiplos de 3 sin que sean de 5")