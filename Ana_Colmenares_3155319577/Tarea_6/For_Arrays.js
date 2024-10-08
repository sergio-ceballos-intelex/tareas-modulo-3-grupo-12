//Dado el siguiente array
let numeros = [1, 2, 3, 4, 5];
/*Utiliza un bucle for para multiplicar cada número por 2 y 
almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.*/
let numeros2 = [];

for ( i = 0;i < numeros.length; i++ ){
numeros2[i] = numeros[i]*2;
}
console.log(numeros2)