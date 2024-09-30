# Estructuras de Control en JavaScript

Las **estructuras de control** en programación son mecanismos que permiten dirigir el flujo de ejecución de un programa. Es decir, determinan el orden en que se ejecutan las instrucciones, permitiendo tomar decisiones, repetir acciones y manejar situaciones específicas durante la ejecución del código. Estas estructuras son fundamentales para implementar la lógica y el comportamiento deseado en una aplicación.

En **JavaScript**, existen varias estructuras de control que puedes utilizar para gestionar el flujo de tu programa. A continuación, se detallan las principales categorías y sus respectivas estructuras:

## 1. Estructuras de Selección (Condicionales)
Permiten ejecutar diferentes bloques de código según se cumplan ciertas condiciones.

### `if` y `else`


Las estructuras `if` y `else` permiten ejecutar bloques de código diferentes según si una condición específica se cumple (es verdadera) o no.

```javascript
if (condición) {
  // Bloque de código si la condición es verdadera
} else {
  // Bloque de código si la condición es falsa
}
````
EJEMPLO

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
};
`````

### `else if`

La estructura `else if` permite evaluar múltiples condiciones secuencialmente, ejecutando el bloque de código correspondiente a la primera condición verdadera que encuentre.

```javascript
if (condición1) {
  // Bloque de código si condición1 es verdadera
} else if (condición2) {
  // Bloque de código si condición2 es verdadera
} else {
  // Bloque de código si ninguna condición anterior es verdadera
}
````
EJEMPLO

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75) {
  console.log("Bueno");
} else {
  console.log("Necesitas mejorar");
}
`````

## 2. Estructuras de Repetición (Bucles)

Permitirá ejecutar repetidamente un bloque de código mientras se cumple una condición.

### `while`

El bucle `while` ejecuta un bloque de código mientras una condición especificada sea verdadera. Es útil cuando no se conoce de antemano el número de iteraciones necesarias.

```````javascript
while (condición) {
  // Bloque de código a ejecutar mientras la condición sea verdadera
};
```````
EJEMPLO

```javascript	
let contador = 0;

while (contador < 3) {
  console.log(`Contador: ${contador}`);
  contador++;
}
```	
### `for`

El bucle `for` es ideal para iteraciones con un número definido de repeticiones. Se utiliza específicamente para recorrer matrices o ejecutar un bloque de código un número específico de veces.

```js
for (inicialización; condición; incremento) {
  // Bloque de código a ejecutar en cada iteración
}
```
EJEMPLO

```js
for (let i = 0; i < 5; i++) {
  console.log(`Iteración número ${i}`);
}
```
### `for ...of`

El bucle `for ...of` itera sobre los elementos de estructuras iterables como arrays, cadenas de texto, mapas, entre otros.

```js
for (variable of iterable) {
  // Bloque de código a ejecutar para cada elemento
}
````


## 3. Funciones

Las `funciones`  y las `funciones flecha (arrow functions)` son dos maneras de declarar y utilizar funciones en JavaScript, pero tienen diferencias importantes en cuanto a su sintaxis y comportamiento.

### `Funciones`

Son las `Funciones` que se declaran utilizando la palabra clave function. Estas funciones tienen una estructura clásica y se comportan de manera distinta a las funciones flecha en varios aspectos

```javascript	
function nombreFuncion(parámetros) {
    // Cuerpo de la función
    return valor;
}
```	
EJEMPLO

```javascript	
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // Imprime: 8
```	

### `Funciones Flecha  (Arrow Functions)`

Las `Funciones Flecha  (Arrow Functions)` son una forma más concisa de declarar funciones. Se introdujeron en ES6 (ECMAScript 2015) y tienen una sintaxis más simple.

```javascript	
const nombreFuncion = (parámetros) => {
    // Cuerpo de la función
    return valor;
};
```	
EJEMPLO

 ```javascript	
 const multiplicar = (a, b) => {
    return a * b;
};

console.log(multiplicar(4, 5)); // Imprime: 20
`````