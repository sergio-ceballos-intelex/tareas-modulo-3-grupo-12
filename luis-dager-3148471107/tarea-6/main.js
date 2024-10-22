// Dado el siguiente array de números:

let numeros = [1, 2, 3, 4, 5];

// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
let nuevoNumeros = [];

for (let index = 0; index < numeros.length; index++) {
   nuevoNumeros [index]=numeros[index]*2;
  console.log(nuevoNumeros);
}

// Ejercicio de Búsqueda en Arrays de Objetos:
// Dado el siguiente array de objetos que representan productos:

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
// // Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

let  articuloMasBajo = productos[0]

for (let index = 0; index < productos.length; index++) {
   if (productos[index].precio < articuloMasBajo.precio) {
    articuloMasBajo=productos[index]
   }
  
}
 console.log(`el producto más barato es la: ${articuloMasBajo.nombre} con un precio de $ ${articuloMasBajo.precio}`);





// Ejercicio de Modificación de Propiedades de Objetos en un Array:
// Dado el siguiente array de objetos que representan estudiantes:

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

for (let index = 0; index < estudiantes.length; index++) {
  estudiantes[index].edad = estudiantes[index].edad + 1
  
    
}
console.log(estudiantes)

// Ejercicio de Filtrado de Arrays de Objetos:
// Dado el siguiente array de objetos que representan libros:

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.

const contieneElTitulo = [];

for (let index = 0; index < libros.length; index++) {
  if (libros[index].titulo.startsWith("El")) {
    contieneElTitulo.push(libros[index]);
    
  }
  
}

console.log(contieneElTitulo);

// Ejercicio de Concatenación de Arrays:
// Dados los siguientes arrays de frutas:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

for (let index = 0; index < frutas2.length; index++) {
  frutas1.push(frutas2[index]);
  
}
console.log(frutas1)
