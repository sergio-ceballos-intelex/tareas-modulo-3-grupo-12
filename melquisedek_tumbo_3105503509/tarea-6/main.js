// Dado el siguiente array de números:

// let numeros = [1, 2, 3, 4, 5];
// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
const numerosx2 = []
let numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++ ){
    const element = numeros[i] * 2
    numerosx2.push(element)
}

console.log(numerosx2)