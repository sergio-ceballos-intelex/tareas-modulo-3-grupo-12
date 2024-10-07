/* Sistema de gestión de registro de estudiantes para una universidad.
nombre (string): El nombre del estudiante.
edad (number): La edad del estudiante.
promedio (number): El promedio de calificaciones del estudiante (0 a 10).
esRegular (boolean): Si el estudiante está registrado como regular.
cantidadMateriasAprobadas (number): La cantidad de materias aprobadas por el estudiante.
esBecado (boolean): Si el estudiante tiene una beca.

Requisitos:

Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que el estudiante es menor de edad y no puede registrarse.
Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje indicando que el estudiante no cumple con el promedio mínimo requerido.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está registrado como regular, debe mostrarse un mensaje indicando que el estudiante debe registrarse como regular.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular pero no tiene una beca, debe mostrarse un mensaje indicando que puede solicitar una beca.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular y tiene una beca, debe mostrarse un mensaje indicando que el estudiante cumple con todos los requisitos.
*/

// Datos del estudiante
const nombre = "Ana Colmenares";
const edad = 25;
const promedio = 9;
const esRegular = true;
const cantidadMateriasAprobadas = 8;
const esBecado = true;

let mensaje = "";

if (edad < 18) {
  mensaje = `${nombre} es menor de edad y no puede registrarse.`;
} else {
      if (promedio < 6) {
        mensaje = `${nombre} no cumple con el promedio mínimo requerido.`;
  } else if (!esRegular) {
    mensaje = `${nombre} debe registrarse como estudiante regular.`;
  } 
  else if (!esBecado) {
    mensaje = `${nombre} puede solicitar una beca.`;
  }
  else {
    mensaje = `${nombre} cumple con todos los requisitos.`;
  }
}

console.log(mensaje);
