// Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.

    const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];
// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
const stockmayora0 = productos.filter(product => product.stock > 0);

// Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
const solonombres = productos.map(product => product.nombre);

// (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos 
// y obtener la suma de el precio de todos ellos

let pretotal = 0; 
const preproducto = productos.map(product => {
    pretotal += product.stock * product.precio 
})

console.log(stockmayora0)
console.log(solonombres)
console.log(pretotal)

