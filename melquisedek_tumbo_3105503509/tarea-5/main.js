// 1. Calculadora
// Hacer un programa que le permita al usuario hacer un cálculo dependiendo de dos valores y de la operación que ingrese 
// (suma, resta, multiplicación, división). Si el usuario ingresa los valores 7 y 8 y después ingresa una suma se deben sumar 
// los dos números que ingresó y asi con todas las operaciones aritméticas.

// const numero1 = 2 ;
// const numero2 = 4 ;
// const tipooperacion = "suma".toLowerCase(); 

// if(tipooperacion === "suma"){
//     console.log(numero1 + numero2)
// }else if(tipooperacion === "resta"){
//     console.log(numero1 - numero2)
// }else if(tipooperacion === "multiplicacion"){
//     console.log(numero1 * numero2)
// }else if(tipooperacion === "divicion"){
//     console.log(numero1 / numero2)
// }


// 2. Sistema de Gestión de Registro de Estudiantes
// Imagina que estás desarrollando un sistema de gestión de registro de estudiantes para una universidad. Este sistema debe tomar en cuenta 
// varios criterios para determinar el estado de un estudiante y sus privilegios. Debes escribir un script en JavaScript que verifique varios 
// datos sobre un estudiante y devuelva un mensaje que indique su estado. Estos datos son:

// nombre (string): El nombre del estudiante.
// edad (number): La edad del estudiante.
// promedio (number): El promedio de calificaciones del estudiante (0 a 10).
// esRegular (boolean): Si el estudiante está registrado como regular.
// cantidadMateriasAprobadas (number): La cantidad de materias aprobadas por el estudiante.
// esBecado (boolean): Si el estudiante tiene una beca.
// Requisitos:

// - Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que el estudiante es menor de edad y no puede registrarse.
// - Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje indicando que el estudiante no cumple con 
// el promedio mínimo requerido.
// - Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está registrado como regular, debe mostrarse un mensaje 
// indicando que el estudiante debe registrarse como regular.
// - Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular pero no tiene una beca, debe mostrarse 
// un mensaje indicando que puede solicitar una beca.
// - Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está registrado como regular y tiene una beca, debe mostrarse un 
// mensaje indicando que el estudiante cumple con todos los requisitos.

// const name = "Melquisedek Tumbo";
// const age = 14 ;
// const promedio = 7;
// const esRegular = true ;
// const cantmateriasaprobadas = 4;
// const esBecado = true ;

// if( age < 18 ){
//     console.log("Eres menor de edad, no puedes registrarte")
// }else if(age >= 18 && promedio < 6){
//     console.log("No cumple con el promedio minimo requerido")
// }else if(age >=18 && promedio >= 6 && esRegular === false){
//     console.log("Debe registrarse como regular")
// }else if(age >=18 && promedio >= 6 && esRegular === true && esBecado === false){
//     console.log("puede solicitar una beca")
// }else if(age >=18 && promedio >= 6 && esRegular === true && esBecado === true ){
//     console.log("Cumples con todos los requisitos")
// }



// 3. Lógica proposicional
// Resolver los siguientes ejercicios:

// 1. true || true || false && true || false && true && true || false
// 1.1 true || true||false||false||false
// 1.2 true

// 2. true && (false || false && (true && (true || false && true))) || false && (true || false)
// 2.1  true && (false || false && (true && (true || false && true))) || false && true
// 2.2 true && (false || false && (true && (true || false))) || false && true
// 2.3 true && (false || false && (true && true)) || false && true
// 2.4 true && (false || false && true ) || false && true
// 2.5 true && (false || false) || false && true
// 2.6 true && false || false && true
// 2.7 false || false
// 2.8 false

// 3. !(!true && (false || false && !!!true || (true && !false))) || false && true
// 3.1 !(!true && (false || false && !!!true || (true && true))) || false && true
// 3.2 !(!true && (false || false && !!!true || true )) || false && true
// 3.3 !(!true && (false || false && !!falce || true )) || false && true
// 3.4 !(!true && (false || false && !true || true )) || false && true
// 3.5 !(!true && (false || false && falce || true )) || false && true
// 3.6 !(!true && (false || false || true )) || false && true
// 3.7 !(!true && true ) || false && true
// 3.7 !(false && true ) || false && true
// 3.7 !falce || false && true
// 3.7 true || false && true
// 3.7 true || false 
// 3.7 true
// Nota: Cada ejercicio se debe resolver paso a paso y dejarlo por escrito hasta dar con el resultado final, tal cual lo vimos en clase.



console.log(true || true || false && true || false && true && true || false) //true
console.log(true && (false || false && (true && (true || false && true))) || false && (true || false)) //false
console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true) //true
