/*Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

Vuelo Bogota - Madrid: 7000ms (7 horas)
Vuelo Madrid - Frankfurt: 2000ms (2 horas)
Vuelo Frankfurt - Seul: 10000ms (10 horas)
Llegada a Seul
El programa debe imprimir lo siguiente:

  // Estoy en Bogota
  // Vuelo Bogota - Madrid, me demoré 7 horas
  // Llegué a Madrid
  // Vuelo Madrid - Frankfurt, me demoré 2 horas
  // Llegué a Frankfurt
  // Vuelo Frankfurt - Seul, me demoré 10 horas
  // Llegué a Seul
Se puede usar setTimeout para simular el tiempo de los vuelos.

*/

function simularVuelo() {
    console.log("Estoy en Bogota");
    setTimeout(() => {
      console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
      console.log("Llegué a Madrid");

      setTimeout(() => {
        console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
        console.log("Llegué a Frankfurt");
  
        setTimeout(() => {
          console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
          console.log("Llegué a Seul");
        }, 10000);
      }, 2000);
    }, 7000); 
  }
  

  simularVuelo();
