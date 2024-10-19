// Punto 2
let nombre = "Juan Pérez";
let edad = 19;
let promedio = 7.5;
let esRegular = true;
let cantidadMateriasAprobadas = 5;
let esBecado = false;

function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, esBecado) {
if (edad < 18) {
     console.log(`${nombre} es menor de edad y no puede registrarse.`);
} else if (promedio < 6) {
     console.log(`${nombre} no cumple con el promedio mínimo requerido.`);
} else if (promedio >= 6 && !esRegular) {
     console.log(`${nombre} debe registrarse como estudiante regular.`);
} else if (promedio >= 6 && esRegular && !esBecado) {
     console.log(`${nombre} puede solicitar una beca.`);
} else if (promedio >= 6 && esRegular && esBecado) {
     console.log(`${nombre} cumple con todos los requisitos.`);
}
}

verificarEstadoEstudiante(nombre, edad, promedio, esRegular, esBecado);
