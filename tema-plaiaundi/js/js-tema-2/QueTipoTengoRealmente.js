let nombre = prompt("Escribe tu nombre: ")
let edad = prompt("Escribe tu edad: ")
let altura = Number(prompt("Escribe tu altura(metros): "))

console.log("El tipo de edad antes de cambiarlo a numero es: " + typeof edad)

edad = Number(edad)
altura = Number(altura)

console.log("El tipo de nombre es: " + typeof nombre)
console.log("El tipo de edad es: " + typeof edad)
console.log("El tipo de altura es: " + typeof altura)