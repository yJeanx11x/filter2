// filter

const numeros = [50, 5, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackfilter(valor) {
  if (valor > 10) return true;
   else return false; 
}
const filtrarnumero = numeros.filter(callbackfilter);
console.log(filtrarnumero);