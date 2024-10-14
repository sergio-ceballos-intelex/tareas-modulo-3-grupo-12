const estudiantes =[
{ nombre: "Ana", edad: 22, promedio: 10 },
{ nombre: "Angel", edad: 27, promedio: 8 },
{ nombre: "Catalina", edad: 18, promedio: 6.2 },
];

console.log(estudiantes[1].nombre);
estudiantes[0].edad = 25;
console.log(estudiantes[0]); 

let sum = 0;
estudiantes.forEach(estudiante => {sum += estudiante.edad;});

const promedio = sum / estudiantes.length;

console.log("La suma de las edades es:", sum);
console.log("El promedio de las edades es:", promedio );