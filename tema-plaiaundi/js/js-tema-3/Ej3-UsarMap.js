const alumnos = [
    { nombre: "Ane", nota: 8 },
    { nombre: "Iker", nota: 4 },
    { nombre: "June", nota: 7 }
];

/*
// 3.1
function añadirCampo(alumno){
    alumno.aprobado = alumno.nota > 4.99 ? true : false
    return alumno
}

const nuevaLista = alumnos.map(alumno => añadirCampo(alumno))
*/
/*
// 3.2
const añadirCampo = function(alumno){
    alumno.aprobado = alumno.nota > 4.99 ? true : false
    return alumno
}

const nuevaLista = alumnos.map(alumno => añadirCampo(alumno))
*/
/*
// 3.3
const añadirCampo = (alumno) => {
    alumno.aprobado = alumno.nota > 4.99 ? true : false
    return alumno
}

const nuevaLista = alumnos.map(alumno => añadirCampo(alumno))
*/

/*
// 3.4
const nuevaLista = alumnos.map(function(alumno){
    alumno.aprobado = alumno.nota > 4.99 ? true : false
    return alumno
})
*/


// 3.5
/*
const nuevaLista = alumnos.map(alumno => {
    alumno.aprobado = alumno.nota > 4.99 ? true : false
    return alumno
})
*/
console.log(nuevaLista)