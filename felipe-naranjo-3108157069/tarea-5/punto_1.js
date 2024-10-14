// Punto Número 1

const numero1 = Number(prompt('Digita el primer número'));
const numero2 = Number(prompt('Digita el segundo número'));
const operacion = prompt('Operación').toLowerCase();  // Asegúrate de ejecutar toLowerCase()

if (operacion === 'suma') {
     document.write(`${numero1} + ${numero2} = ${numero1 + numero2}`);
} else if (operacion === 'resta') {
     document.write(`${numero1} - ${numero2} = ${numero1 - numero2}`);
} else if (operacion === 'multiplicacion') {
     document.write(`${numero1} * ${numero2} = ${numero1 * numero2}`);
} else if (operacion === 'division') {
     if (numero1 !== 0 || numero2 !== 0) {
     document.write(`${numero1} / ${numero2} = ${numero1 / numero2}`);
     } else {
     document.write('No se puede dividir entre 0');
     }
} else {
     document.write('Operación no válida');
}






