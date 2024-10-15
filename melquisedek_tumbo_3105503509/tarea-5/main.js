// 1. Calculadora
// Hacer un programa que le permita al usuario hacer un cálculo dependiendo de dos valores y de la operación que ingrese 
// (suma, resta, multiplicación, división). Si el usuario ingresa los valores 7 y 8 y después ingresa una suma se deben sumar 
// los dos números que ingresó y asi con todas las operaciones aritméticas.

const numero1 = 2 ;
const numero2 = 4 ;
const tipooperacion = "Divicion".toLowerCase(); 

if(tipooperacion === "suma"){
    console.log(numero1 + numero2)
}else if(tipooperacion === "resta"){
    console.log(numero1 - numero2)
}else if(tipooperacion === "multiplicacion"){
    console.log(numero1 * numero2)
}else if(tipooperacion === "divicion"){
    console.log(numero1 / numero2)
}

