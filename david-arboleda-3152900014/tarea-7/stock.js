const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];


const productoStock = productos.filter(producto => producto.stock > 0); 
console.log(productoStock);

const nombresProductos = productos.map(producto => producto.nombre); 
console.log(nombresProductos);

let precioTotal = 0;
productoStock.forEach(producto => {
precioTotal += producto.precio * producto.stock;
});
console.log(precioTotal);