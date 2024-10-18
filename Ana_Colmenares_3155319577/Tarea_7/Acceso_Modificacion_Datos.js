// Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo

  const estudiantes = [
      { nombre: "Ana", edad: 22, promedio: 10 },
      { nombre: "Angel", edad: 27, promedio: 8 },
      { nombre: "Catalina", edad: 18, promedio: 6.2 },
 ];

/*
- Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
- Imprime en la consola el nombre del segundo estudiante.
- Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la 
información completa del primer estudiante después de la actualización.
*/

console.log(estudiantes[1].nombre);


estudiantes[0].edad = 25;
console.log(estudiantes[0]); 