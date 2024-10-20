// Dado el siguiente array de objetos que representan libros:

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.


let librosConEl = [];

for (i = 0; i < libros.length; i++) {
  if (libros[i].titulo.includes("El ")) { 
    librosConEl.push(libros[i]);
  }
}

console.log("Libros cuyo título contiene 'El':");
console.log(librosConEl);
