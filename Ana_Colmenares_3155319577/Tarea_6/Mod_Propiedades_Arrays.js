// Dado el siguiente array de objetos que representan estudiantes:

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];

// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

for ( i = 0; i < estudiantes.length; i++) {
  estudiantes[i].edad = estudiantes[i].edad + 1; // Incrementar la edad de cada estudiante en 1
}

console.log(estudiantes);