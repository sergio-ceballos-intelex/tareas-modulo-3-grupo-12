// 1. Calculadora
// Hacer un programa que le permita al usuario hacer un cálculo dependiendo de dos valores y de la operación que ingrese (suma, resta, multiplicación, división). Si el usuario ingresa los valores 7 y 8 y después ingresa una suma se deben sumar los dos números que ingresó y asi con todas las operaciones aritméticas.

const numberA = 7;
const numberB=8;
let operacion = ( "suma" );

if(operacion=== `suma`) {
    total=numberA+numberB
    console.log(`El resultado de la suma de  ${numberA} +  ${numberB} =  ${total} `)
} else if (operacion === `resta`){
    total=numberA-numberB
    console.log(`El resultado de la resta de ${numberA} - ${numberB} = ${total}` )
} else if (operacion ===`multiplicacion`){
    total=numberA*numberB
   console.log(`El resultado de la multiplicacion de  ${numberA} * ${numberB} =${total}` )
} else if (operacion === `division`){
    total=numberA/numberB
  console.log(`El resultado de la division de ${numberA} / ${numberB} = ${total}` )
}

// ----------------------------------------------------------------------------------------------

// 2. Sistema de Gestión de Registro de Estudiantes

let name = "juankamilo"
let age = 19
let promedio = 7
let regular = true
let materiaAprobadas = 8
let beca=true

if (age < 18) {
  console.log("error estudiante es menor de edad y no puede registrarse")
} else if (age > 18 && promedio < 6) {
  console.log(" error el estudiante no cumple con el promedio mínimo requerido.")
} else if (age > 18 && promedio >= 6 && regular ===false) {
  console.log(" error el estudiante debe registrarse como regular.")
}  else if (age > 18 && promedio >= 6 && regular ===true && beca===false) {
  console.log("error el estudiante puede solicitar una beca.")
} else if (age > 18 && promedio >= 6 && regular ===true && beca===true) {
  console.log("el estudiante cumple con todos los requisitos.")
}

// ------------------------------------------------------------------------------------------
// 3. Lógica proposicional

true || true || false && true || false && true && true || false
true || true || false || false||false
true || false
true

true && (false || false && (true && (true || false && true))) || false && (true || false)
true && (false || false && (true && true)) || false && true
true && (false || false && true) || false && true
true && false || false && true
false || false
false

!(!true && (false || false && !!!true || (true && !false))) || false && true
!(!true && (false || false && !!!true || true)) || false && true
!(!true && (false || false && false || true)) || false && true
!(!true && true) || false && true
!false || false && true
true || false
true
