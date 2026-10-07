0 //falsy
1 //truthy
-1 //truthy
"" //falsy
"hola" //truthy
null //falsy
undefined //falsy
NaN //falsy
"0" //truthy

let nombre = prompt("Escribe el nombre") || "Sin nombre"

if(nombre == "Sin nombre"){
    console.log("No se ha introducido el nombre")
}else{
    console.log("Nombre recibido")
}

console.log("0 y '0' se comportan de manera diferente porque 0 se lee como un valor vacio y '0' es un string con un 0")
