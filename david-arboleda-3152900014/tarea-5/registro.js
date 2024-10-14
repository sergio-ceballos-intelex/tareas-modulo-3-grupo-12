const name=String(prompt("Nombre del estudiante"))
const age=Number(prompt("edad"))
const promedio=Number(prompt("promedio academico"))
const regularidad=Boolean(prompt("¿Es o no regular?true/false"))
const materiasAprobadas= Number(prompt("Materias aprobadas"))
const becado=Boolean(prompt("¿Tiene beca? true/false"))

if (age>=18 && promedio>=6 && regularidad===true && becado===true) { console.log("el estudiante cuenta con todos los requisitos")
  } 
  else if(age>=18 && promedio>=6 && regularidad===true) { console.log("El estudiante es regular'")}
  else if(age>=18 && promedio<=6) {console.log ("El estudiante no tiene el promedio necesario")}
  else if(age<18) {console.log("el estudiante es menor de edad y no puede registrarse") }
else {console.log("gracias por tu visita")}