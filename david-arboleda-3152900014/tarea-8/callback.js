const numeros = [1, 2, 3, 4, 5];
function sum(numeros, callback) {
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
          suma += numeros[i];
     }
     callback(suma);
}

sum(numeros, (total) => {
     console.log(total); 
});

const number = [1, 2, 3, 4, 5];
function filtrarArreglo(arreglo, callbackFiltro) {
     const total = [];
     for (let i = 0; i < arreglo.length; i++) {
          if (callbackFiltro(arreglo[i])) {
               total.push(arreglo[i]);
          }
     }
     return total;
}

const numerosPares = filtrarArreglo(number, (numero) => {
     return numero % 2 === 0;
});

console.log(numerosPares);

const number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filtrarPares(numeros, callback) {
     const numerosPares = numeros.filter((numero) => numero % 2 === 0);
     callback(numerosPares);
}

   
function mostrarPares(numerosPares) {
     numerosPares.forEach((numero) => console.log(numero));
}

filtrarPares(number2, mostrarPares);


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