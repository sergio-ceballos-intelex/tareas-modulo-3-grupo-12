//Tarea 7
//Practicar la manipulación de arrays y objetos en JavaScript de manera progresiva utilizando los metodos vistos en clase (map, filter, foreach):

//Punto 1, Obteniendo estadisticas de productos: Dado el siguiente array de productos.

const productos = [
     { nombre: "Camiseta", precio: 20, stock: 10 },
     { nombre: "Pantalón", precio: 30, stock: 5 },
     { nombre: "Zapatos", precio: 50, stock: 0 },
     { nombre: "Bufanda", precio: 15, stock: 8 },
];

//Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const productosEnStock = productos.filter(producto => producto.stock > 0);

console.log(productosEnStock);

//Utilizando map, genera un nuevo array con solo los nombres de los productos

const nombresProductos = productos.map(producto => producto.nombre);

console.log(nombresProductos);

//Escribe un programa que calcule el precio total de los productos disponibles, 
//para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos

let precioTotal = 0;

for (let i = 0; i < productos.length; i++) {
     precioTotal += productos[i].precio;
}

console.log(precioTotal);

//----------------------------------------------------------------

//Punto 2, Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes

const estudiantes = [
     { nombre: "Pedro", edad: 20, promedio: 6 },
     { nombre: "Maria", edad: 25, promedio: 8 },
     { nombre: "Felipe", edad: 27, promedio: 9.8 },
];

//Imprime en la consola el nombre del segundo estudiante.

console.log(estudiantes[1].nombre);

//Actualiza la edad del primer estudiante a 25 años. 
//Imprime en la consola la información completa del primer estudiante después de la actualización.

estudiantes[0].edad = 25;
console.log(estudiantes[0]);

//------------------------------------------------

//Punto 3,  Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach)

//Calcula el promedio de edad de los estudiantes
//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

let sumaEdades = 0;

estudiantes.forEach(estudiante => {
     sumaEdades += estudiante.edad;
});

console.log(sumaEdades);

const promedioEdades = (sumaEdades / estudiantes.length).toFixed(2);

console.log(promedioEdades);

//-------------------------------------------------------------------

//Punto 4, Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array

const estudiantes2 = [
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

//Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

const estudianteConPromedioMasAlto = estudiantes2.filter(estudiante => estudiante.promedio === Math.max(...estudiantes2.map(estudiante => estudiante.promedio)))[0];

console.log(`El estudiante con el promedio más alto es ${estudianteConPromedioMasAlto.nombre} y tiene ${estudianteConPromedioMasAlto.edad} años.`);

//Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
//Imprime en la consola la información completa de los estudiantes mayores de 20 años

const estudiantesMayores = estudiantes2.filter(estudiante => estudiante.edad >20);
estudiantesMayores.forEach(estudiante => console.log(`${estudiante.nombre} - ${estudiante.edad}`));

console.log(estudiantesMayores);