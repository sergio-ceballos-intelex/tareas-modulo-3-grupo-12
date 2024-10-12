// const number = [1,2,3,4,5,6,7,8]

// const number_2 = number.map(number => number *2)

// const num_3 = number.map(number => number/2)

// console.log(number_2)
// console.log(num_3)

// const ever = number.filter(number => number %2 === 0)

// console.log( ever)

 /////////////////////////////////////////////////////

//RETO 

const numberArray = [21, 30, 40, 50, 71,70, 742,80, 90, 100];

//Retorna un nuevo array con las raices cuadradas 

const raizCua = numberArray.map(Math.sqrt);

console.log(raizCua);

//Filtar los numeros que empiezan con 7 y sean pares

const numPares = numberArray.filter(number => String(number).startsWith('7') && number % 2 === 0);

console.log(numPares);