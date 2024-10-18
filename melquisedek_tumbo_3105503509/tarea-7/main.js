// Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

//     const productos = [
//         { nombre: "Camiseta", precio: 20, stock: 10 },
//         { nombre: "Pantalón", precio: 30, stock: 5 },
//         { nombre: "Zapatos", precio: 50, stock: 0 },
//         { nombre: "Bufanda", precio: 15, stock: 8 },
//    ];
// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
// const stockmayora0 = productos.filter(product => product.stock > 0);

// Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
// const solonombres = productos.map(product => product.nombre);

// (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos 
// y obtener la suma de el precio de todos ellos

// let pretotal = 0; 
// const preproducto = productos.map(product => {
//     pretotal += product.stock * product.precio 
// })

// console.log(stockmayora0)
// console.log(solonombres)
// console.log(pretotal)

// -----------------------------------------------------------------------------------


// Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos 
// representando a tres estudiantes. Ejemplo

//   const estudiantes = [
//       { nombre: "Camilo", edad: 33, promedio: 10 },
//       { nombre: "Juan", edad: 30, promedio: 6 },
//       { nombre: "Andres", edad: 29, promedio: 8.7 },
//  ];
// Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
// Imprime en la consola el nombre del segundo estudiante.
// const nametwostudent = estudiantes[1].nombre;
// console.log(nametwostudent);
// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer
// estudiante después de la actualización.

// const newagestudentone = estudiantes[0].edad = 25;
// const ageupdate = estudiantes[0];

// console.log(ageupdate);

// --------------------------------------------------------------------------------------

// Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).

// const estudiantes = [
//           { nombre: "Camilo", edad: 33, promedio: 10 },
//           { nombre: "Juan", edad: 30, promedio: 6 },
//           { nombre: "Andres", edad: 29, promedio: 8.7 },
//      ];

// // Calcula el promedio de edad de los estudiantes.
// let sumatotal = 0;
// const sumapromedio = estudiantes.map(suma => {
//     sumatotal += suma.promedio
    
// })

// const promediototalstudiantes = sumatotal / estudiantes.length
// // Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.


// console.log(sumatotal)
// console.log(promediototalstudiantes.toFixed(2))

// -------------------------------------------------------------------------------------------------------

// Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
// Imprime en la consola la información completa de los estudiantes mayores de 20 años.

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


const promediomasalto = estudiantes.filter(promedio => promedio.promedio === Math.max(...estudiantes
.map(estudiantes => estudiantes.promedio)));

// console.log(promediomasalto)



const estudiantesMayores = [];

const studentsmayores = estudiantes.filter(estudiantes => estudiantes.edad > 20)
estudiantesMayores.push(studentsmayores)

console.log(estudiantesMayores)