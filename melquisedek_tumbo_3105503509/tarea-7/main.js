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

const estudiantes = [
          { nombre: "Camilo", edad: 33, promedio: 10 },
          { nombre: "Juan", edad: 30, promedio: 6 },
          { nombre: "Andres", edad: 29, promedio: 8.7 },
     ];

// Calcula el promedio de edad de los estudiantes.
let sumatotal = 0;
const sumapromedio = estudiantes.map(suma => {
    sumatotal += suma.promedio
    
})

const promediototalstudiantes = sumatotal / estudiantes.length
// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.


console.log(sumatotal)
console.log(promediototalstudiantes.toFixed(2))

