// Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

for (i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]); // frutas1[frutas1.length] = frutas2[i];
}
  
  console.log("Array resultante de frutas:");
  console.log(frutas1);