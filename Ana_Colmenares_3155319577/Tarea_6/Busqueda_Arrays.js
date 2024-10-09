//Dado el siguiente array de objetos que representan productos:
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  /*Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el 
  nombre y el precio de ese producto.*/

  let productoMasBarato = productos[0];

  for (i=0; i < productos.length; i++){
    if (productos[i].precio < productoMasBarato.precio) {
        productoMasBarato = productos[i]; // Actualizar si se encuentra un precio más bajo
      }
  }
  
  console.log(`El producto más barato es: ${productoMasBarato.nombre} con un precio de $${productoMasBarato.precio}`);
  