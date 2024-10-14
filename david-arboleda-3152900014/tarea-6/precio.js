let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

  let precioMenor = productos[0];

  for (i=0; i < productos.length; i++){
    if (productos[i].precio < precioMenor.precio) {
        precioMenor = productos[i]; 
      }
  }
  console.log(precioMenor);
  
  
  
