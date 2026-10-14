const lista = [5, 8, 3, 10, 6]
const lista2 = []

function calcular(l){
    let suma = 0
    let media = 0
    let cantidadAprobados = 0

    for(const item of l){
        suma += item
        if(item > 4.99){
            cantidadAprobados++
        }
    }
    if(suma > 0){
        media = suma / l.length
    }else{
        media = 0
    }

    console.log("La suma es: " + suma)
    console.log("La media es: " + media)
    console.log("La cantidad de aprobados es: " + cantidadAprobados)
}

calcular(lista)
calcular(lista2)