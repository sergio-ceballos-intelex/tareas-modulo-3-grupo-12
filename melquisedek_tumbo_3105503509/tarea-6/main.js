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

let productos = [
      { nombre: "Camisa", precio: 20 },
      { nombre: "Pantalón", precio: 30 },
      { nombre: "Zapatos", precio: 50 },
    ];

    let propreciomenor = productos[0];
    
  for ( let i=0; i < productos.length; i++){
    if (productos[i].precio < propreciomenor.precio) {
        propreciomenor = productos[i]; 
      }
  }
  
  console.log(propreciomenor)