const nuevo = []; 
for(let i = 1; i <= 100; i++){
    nuevo.push(i);
}
const conteo= String(nuevo)
document.write(`${conteo}`);
console.log(conteo.startsWith("1"));
console.log(typeof(conteo)) 
