/*
- Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
- Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
- Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
- Imprime en la consola la información completa de los estudiantes mayores de 20 años.
*/
const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];

// let estudiantePromedioMayor = estudiantes[0];
// for (let i = 1; i < estudiantes.length; i++) {
//     if (estudiantes[i].promedio > estudiantePromedioMayor.promedio) {
//         estudiantePromedioMayor = estudiantes[i];   
//     }
// }
// console.log("Estudiante con el promedio más alto:");
// console.log(`Nombre: ${estudiantePromedioMayor.nombre}\nEdad: ${estudiantePromedioMayor.edad}`);
// console.log(`Promedio: ${estudiantePromedioMayor.promedio}\nGenero: ${estudiantePromedioMayor.genero}`);
// console.log(`Carrera: ${estudiantePromedioMayor.carrera} \nCiudad: ${estudiantePromedioMayor.ciudad}`);

// function 
const obtenerEstudiantesConMejorPromedio = (estudiantes) => { 
    const promedioMasAlto = Math.max(...estudiantes.map(est => est.promedio)); //operador spread
    return estudiantes.filter(est => est.promedio === promedioMasAlto);
}
const mejoresEstudiantes = obtenerEstudiantesConMejorPromedio(estudiantes);
 console.log(mejoresEstudiantes);



const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("\nLos estudiantes mayores de 20 años son: ");
estudiantesMayores.forEach(estudiante => {
console.log(estudiante);
});