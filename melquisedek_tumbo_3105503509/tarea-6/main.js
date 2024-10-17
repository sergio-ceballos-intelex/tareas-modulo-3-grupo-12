// 1.
// Dado el siguiente array de números:

// let numeros = [1, 2, 3, 4, 5];
// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
// const numerosx2 = []
// let numeros = [1, 2, 3, 4, 5];

// for(let i = 0; i < numeros.length; i++ ){
//     const element = numeros[i] * 2
//     numerosx2.push(element)
// }

// console.log(numerosx2)

// 2.
// Dado el siguiente array de objetos que representan productos:

// let productos = [
//   { nombre: "Camisa", precio: 20 },
//   { nombre: "Pantalón", precio: 30 },
//   { nombre: "Zapatos", precio: 50 },
// ];
// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

// let productos = [
//       { nombre: "Camisa", precio: 20 },
//       { nombre: "Pantalón", precio: 30 },
//       { nombre: "Zapatos", precio: 50 },
//     ];

//     let propreciomenor = productos[0];
    
//   for ( let i=0; i < productos.length; i++){
//     if (productos[i].precio < propreciomenor.precio) {
//         propreciomenor = productos[i]; 
//       }
//   }

//   console.log(propreciomenor) 
// Dado el siguiente array de objetos que representan estudiantes:

// let estudiantes = [
//   { nombre: "Juan", edad: 20 },
//   { nombre: "María", edad: 22 },
//   { nombre: "Pedro", edad: 19 },
// ];
// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
      { nombre: "Juan", edad: 20 },
      { nombre: "María", edad: 22 },
      { nombre: "Pedro", edad: 19 },
    ];

    for(let i = 0; i < estudiantes.length; i++){
          estudiantes [i].edad = estudiantes[i].edad +1
    }

    console.log(estudiantes)
