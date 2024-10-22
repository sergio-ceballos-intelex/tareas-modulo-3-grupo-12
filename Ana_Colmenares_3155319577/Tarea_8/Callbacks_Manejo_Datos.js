//Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.


function sumarArreglo(numeros, callback) {
  // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
  callback(suma);
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
  console.log(resultado); // Debería imprimir 15
});