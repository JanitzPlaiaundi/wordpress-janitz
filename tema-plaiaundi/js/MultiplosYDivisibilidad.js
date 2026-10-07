let multiplosDe3 = []

for(let i = 1; i<=100; i++){

    if(iteracion)

    if(i % 3 == 0 && i % 5 != 0){
        multiplosDe3.push(i)
    }
}

multiplosDe3.forEach(num => {
    console.log(num)
})

console.log("Hay " + multiplosDe3.length + " cantidad de multiplos de 3 sin que sean de 5")