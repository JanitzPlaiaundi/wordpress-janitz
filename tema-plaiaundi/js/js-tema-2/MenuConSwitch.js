const opcionUsuario = prompt("Escribe A para alta, B para baja, C para consultar y S para salir").trim().toUpperCase()

console.log("En este ejemplo he puesto c")

switch(opcionUsuario){
    case "A":
        console.log("Alta")
        break
    case "B":
        console.log("Baja")
        break
    case "C":
        console.log("Consulta")
        break
    case "S":
        console.log("Salir")
        break
    default:
        console.log("Opcion no valida")
}

console.log("Explicacion del break: Si quitas el break se ejecutan todas las acciones siguientes")