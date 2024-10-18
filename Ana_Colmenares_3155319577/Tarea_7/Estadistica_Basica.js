/* 
- Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
- Calcula el promedio de edad de los estudiantes.
- Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
*/
const estudiantes = [
    { nombre: "Ana", edad: 22, promedio: 10 },
    { nombre: "Angel", edad: 27, promedio: 8 },
    { nombre: "Catalina", edad: 18, promedio: 6.2 },
];
let sumaEdades = 0;
estudiantes.forEach(estudiante => {sumaEdades += estudiante.edad;});

const promedioEdad = sumaEdades / estudiantes.length;

console.log("La suma de las edades es:", sumaEdades);
console.log("El promedio de las edades es:", promedioEdad);     