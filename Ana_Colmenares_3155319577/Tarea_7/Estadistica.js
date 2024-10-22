// Dado el siguiente array de productos.
    const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];
/*
- Utilizando filter, genera un nuevo array que contenga los productos en stock 
 (todos los productos cuyo stock es mayor a cero).
- Utilizando map, genera un nuevo array con solo los nombres de los productos, 
 ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
- (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, 
para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
*/

const productosEnStock = productos.filter(producto => producto.stock > 0); // funtion(producto) {return producto.stock > 0}
console.log(productosEnStock);

const nombresProductos = productos.map(producto => producto.nombre); // funtion(producto) {return producto.nombre}
console.log(nombresProductos);

let precioTotal = 0;
productosEnStock.forEach(producto => {
    precioTotal += producto.precio * producto.stock;
});
console.log(precioTotal);