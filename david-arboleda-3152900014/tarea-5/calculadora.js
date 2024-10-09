const numeroA = Number(prompt("Dgita un numero A "))
const NumeroB = Number (prompt("Digita un numero B"))
const operacion= prompt("Que operacion ejecutara: suma, resta, division o multiplicacion")
if(operacion==="suma"){let suma= numeroA+NumeroB 
document.write("El resultado de es:  ", suma)}
else if(operacion==="resta"){let resta= numeroA-NumeroB 
    document.write("El resultado de es:  ", resta)}
else if(operacion==="division"){let division= numeroA/NumeroB 
    document.write("El resultado de es:  ", division)}
    else if(operacion==="multiplicacion"){let multiplicacion=numeroA*NumeroB
        document.write("el resultado es:  ", multiplicacion)
    }

document.write ("     Gracias por confiar en nosotros")
