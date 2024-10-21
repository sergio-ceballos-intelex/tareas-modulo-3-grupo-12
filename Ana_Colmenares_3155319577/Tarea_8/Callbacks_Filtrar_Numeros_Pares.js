/*Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

Pasos a seguir:
- Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
- Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
- Llama al callback pasado como parámetro con el array de números pares como argumento.
- Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback!

*/

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    callback(numerosPares);
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
    console.log('Los números pares son:', numerosPares);
}

// Array de números de ejemplo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros, mostrarPares);