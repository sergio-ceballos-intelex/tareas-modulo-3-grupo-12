¿Qué son las estructuras de control?

Imagina que estás siguiendo una receta de cocina. Hay pasos que debes seguir en un orden específico, y hay otros que solo debes realizar si se cumple cierta condición (por ejemplo, si tienes un ingrediente en particular). Las estructuras de control en programación funcionan de manera similar.

Son herramientas que nos permiten controlar el flujo de ejecución de un programa. En otras palabras, nos permiten decidir qué instrucciones se ejecutan y en qué orden, según ciertas condiciones. Gracias a ellas, podemos crear programas más complejos y dinámicos.

Tipos de estructuras de control:

Secuenciales: Las instrucciones se ejecutan una tras otra, en el orden en que aparecen en el código. Es el flujo más básico.

Condicionales: Permiten tomar decisiones en función de si se cumple o no una condición. Las más comunes son:

if: Ejecuta un bloque de código si una condición es verdadera.

else: Ejecuta un bloque de código si la condición del if es falsa.

else if: Permite evaluar múltiples condiciones.

Iterativas: Permiten repetir un bloque de código varias veces, mientras se cumpla una condición. Las principales son:

for: Se utiliza cuando se sabe de antemano cuántas veces se va a repetir el bucle.

while: Se utiliza cuando no se sabe de antemano cuántas veces se va a repetir el bucle, y se continúa mientras se cumpla una condición.

do while: Similar al while, pero garantiza que el bloque de código se ejecute al menos una vez.

Estructuras de control en JavaScript

JavaScript, al ser un lenguaje de programación muy versátil, cuenta con todas estas estructuras de control. Veamos algunos ejemplos:

Condicionales:
JavaScript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}


Iterativas:
JavaScript
// For
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}


Switch:
JavaScript
let diaSemana = "lunes";

switch (diaSemana) {
  case "lunes":
    console.log("¡Es lunes!");
    break;
  case "martes":
    console.log("¡Es martes!");
    break;
  default:
    console.log("Es otro día de la semana.");
}


En resumen, las estructuras de control son fundamentales en la programación, ya que nos permiten crear programas que tomen decisiones, se repitan y se adapten a diferentes situaciones. En JavaScript, estas estructuras son muy intuitivas y fáciles de utilizar, lo que las convierte en una herramienta poderosa para cualquier desarrollador.