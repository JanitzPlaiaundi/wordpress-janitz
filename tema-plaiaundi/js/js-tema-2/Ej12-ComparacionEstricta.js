const pruebaNull = null;
const pruebaNulla = pruebaNull || 10;
const pruebaNullb = pruebaNull ?? 10;


const pruebaUndefined = undefined;
const pruebaUndefineda = pruebaUndefined || 10;
const pruebaUndefinedb = pruebaUndefined ?? 10;


const pruebaVacio = "";
const pruebaVacioa = pruebaVacio || 10;
const pruebaVaciob = pruebaVacio ?? 10;


const pruebaCinco = 5;
const pruebaCincoa = pruebaCinco || 10;
const pruebaCincob = pruebaCinco ?? 10;


const caso =  0;
const casoElegido = caso ?? 10
console.log(casoElegido)