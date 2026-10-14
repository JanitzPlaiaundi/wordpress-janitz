const returnImplicito = (num) => (num % 2 == 0 ? "Es par" : "No es par")

const llavesConReturn = (num) => {
    if(num % 2 == 0){
        return "Es par"
    }else{
        return "No es par"
    }
}

console.log(returnImplicito(2))
console.log(llavesConReturn(2))