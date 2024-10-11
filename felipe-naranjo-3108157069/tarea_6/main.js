//Tarea 6

//Punto 1
//Crear for y multiplicar los numeros por 2

let numeros = [1, 2, 3, 4, 5];
let multiplic = [];

for (let i = 0; i < numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
    multiplic.push(numeros[i]);
}

console.log(multiplic);

//Punto 2, Ejercicio de Búsqueda en Arrays de Objetos:

//Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let productoMasBarato = productos[0];

for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio < productoMasBarato.precio) {
        productoMasBarato = productos[i];
    }
}

console.log("Producto más barato:", productoMasBarato.nombre, "-", productoMasBarato.precio);

//Punto 3, Ejercicio de Modificación de Propiedades de Objetos en un Array:

//Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad++;
}

console.log("Estudiantes modificados:", estudiantes);

//Punto 4, Ejercicio de Filtrado de Arrays de Objetos:

//Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let librosEl = [];

for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")) {
        librosEl.push(libros[i]);
    }
}

console.log("Libros con el título 'El':", librosEl);

//Punto 5, Ejercicio de Concatenación de Arrays:

//Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

let frutasResultante = frutas1;

for (let i = 0; i < frutas2.length; i++) {
    frutasResultante.push(frutas2[i]);
}

console.log("Array concatenado:", frutasResultante);