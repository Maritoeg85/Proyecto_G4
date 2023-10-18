function leeproductos() {
    const productos_url = 'https://api.jsonserver.io/productos';
    let encabezado = new Headers({
      'X-Jsio-Token': 'e0f4804888ba287e04f94c71fd5b71f7'
    });
    fetch(productos_url, {
      headers: encabezado,
      method: 'GET'
      }
    )
      .then(respuesta => respuesta.json())
      .then(lista => { 
      var productos = lista.productos;
      console.log(productos);
      productos = productos.slice(0,12);
      console.log(productos);
      // Actualiza el contenido del elemento HTML con el id "contenedor_grid_pizzas".
      for (var i = 0 ; i<12 ; i++) {
      contenedor_grid_pizzas.innerHTML += `
        <article class="pizza_${i}">
            <div class="fondo_pizzas">
                <div class="articulo_pizza">
                    <div class="imagen_pizza">
                        <img src="${productos[i].imagen}" alt="${productos[i].nombre}">
                    </div>
                    <div class="nombre_pizza">
                        <h3>${productos[i].nombre}</h3>
                    </div>
                    <div class="texto_pizza">
                        <p>${productos[i].descripcion}</p>
                        <p>Ingredientes: ${productos[i].ingredientes}</p>
                    </div>
                    <h4>Solo por: $ ${productos[i].precio}</h4>
                    <a>Cantidad: <span class="cantArticulo">0</span></a>
                  <div>
                    <button class="boton_agregar_eliminar" onclick="agregarPizza(${i})">
                        Agregar
                    </button>
                    <button class="boton_agregar_eliminar" onclick="eliminarPizza(${i})">
                        Eliminar
                    </button>
                </div>
                </div>
            </div>
        </article>`;
        }
      })
    
    }

// Falta la funcion que traspasa las cantidades al pedido

// Falta funcion para totalizar el monto del pedido

leeproductos()