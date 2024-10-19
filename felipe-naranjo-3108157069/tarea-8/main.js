//Punto 1, Callbacks en Manejo de Datos:

//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback 
//con el resultado de sumar todos los números del arreglo.

const numeros = [1, 2, 3, 4, 5];
function sumarArreglo(numeros, callback) {
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
          suma += numeros[i];
     }
     callback(suma);
}

sumarArreglo(numeros, (resultado) => {
     console.log(resultado); // Debería imprimir 15
});

console.log('----------------------------------------------------------------')

//Punto 2, Callbacks para Filtrar Elementos de un Arreglo:

// Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro.

const numeros2 = [1, 2, 3, 4, 5];
function filtrarArreglo(arreglo, callbackFiltro) {
     const resultado = [];
     for (let i = 0; i < arreglo.length; i++) {
          if (callbackFiltro(arreglo[i])) {
               resultado.push(arreglo[i]);
          }
     }
     return resultado;
}

const numerosPares = filtrarArreglo(numeros2, (numero) => {
     return numero % 2 === 0;
});

console.log(numerosPares); // Debería imprimir [2, 4]

console.log('----------------------------------------------------------------')

//Punto 3, Callbacks: Filtrar Números Pares

// Descripción: Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

// Pasos a seguir:

// Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
// Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
// Llama al callback pasado como parámetro con el array de números pares como argumento.
// Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
// ¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback!


// Función para filtrar números pares y llamar a un callback con el resultado

// Array de números de ejemplo
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarPares(numeros, callback) {
     const numerosPares = numeros.filter((numero) => numero % 2 === 0);
     callback(numerosPares);
}

   // Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
     numerosPares.forEach((numero) => console.log(numero));
}

   // Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros3, mostrarPares);

console.log('----------------------------------------------------------------')

//Punto 4, Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

// `Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

// Vuelo Bogota - Madrid: 7000ms (7 horas)
// Vuelo Madrid - Frankfurt: 2000ms (2 horas)
// Vuelo Frankfurt - Seul: 10000ms (10 horas)
// Llegada a Seul

// Estoy en Bogota
// Vuelo Bogota - Madrid, me demoré 7 horas
// Llegué a Madrid
// Vuelo Madrid - Frankfurt, me demoré 2 horas
// Llegué a Frankfurt
// Vuelo Frankfurt - Seul, me demoré 10 horas
// Llegué a Seul

function viajeMadrid(callback) {
     console.log('Estoy en Bogota');
     setTimeout(() => {
          console.log('Llegué a Madrid');
          console.log('Vuelo Bogota - Madrid, me demoré 7 horas')
          callback();
     }, 7000);
}

function viajeFrankfurt(callback) {
     setTimeout(() => {
          console.log('Llegué a Frankfurt');
          console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas')
          callback();
     }, 2000);
}

function viajeSeul(callback) {
     setTimeout(() => {
          console.log('Llegué a Seul');
          console.log('Vuelo Frankfurt - Seul, me demoré 10 horas')
          callback();
     }, 10000);
}

viajeMadrid(()=>{
     viajeFrankfurt(()=> {
          viajeSeul(() => {})
     }
)});


