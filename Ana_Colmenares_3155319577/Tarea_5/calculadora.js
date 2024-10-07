//Dependiendo de dos valores y de la operación que ingrese (suma, resta, multiplicación, división)
const operacion = 'división';
const num1 = 7;
const num2 = 3;

if (operacion == 'suma'){
    console.log(num1+num2);
}else if (operacion == 'resta'){
    console.log(num1-num2);
}else if (operacion == 'multiplicación'){
    console.log(num1*num2);
}else if (operacion == 'división'){
    console.log(num1/num2);
}