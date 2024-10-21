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

const promedioMasAlto = Math.max(...estudiantes.map(estudiante => estudiante.promedio)); //operador spread
const estudianteMejorPromedio = estudiantes.filter(estudiante => estudiante.promedio === promedioMasAlto)[0];
console.log(`El estudiante con el promedio más alto es ${estudianteMejorPromedio.nombre}, y tiene ${estudianteMejorPromedio.edad} años.`);


const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log("\nLos estudiantes mayores de 20 años son: ");
estudiantesMayores.forEach(estudiante => {
console.log(estudiante);
});