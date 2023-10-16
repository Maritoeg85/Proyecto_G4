// Agregar aca las funciones - Se llama desde Index.html

function testLlamada() {
    console.log("La función testLlamada se realizó con éxito")
}

function agregarPizza(numero) {
    let x = document.getElementsByClassName("cantArticulo")
    let arregloCantidad = []
    let total = 0
    for (let i = 0; i < 12; i++) {
        total = total + parseInt(x[i].innerText)
    }
    if (total < 10) {
        x[numero].innerText = parseInt(x[numero].innerText) + 1
    }
    for (let i = 0; i < 12; i++) {
         arregloCantidad.push(parseInt(x[i].innerText))
    }
    localStorage.setItem("Total", JSON.stringify(arregloCantidad))
}

function eliminarPizza(numero) {
    let x = document.getElementsByClassName("cantArticulo")
    let arregloCantidad = []
    if (parseInt(x[numero].innerText) > 0) {
        x[numero].innerText = parseInt(x[numero].innerText) - 1
    }
    for (let i = 0; i < 12; i++) {
        arregloCantidad.push(parseInt(x[i].innerText))
   }
   localStorage.setItem("Total", JSON.stringify(arregloCantidad))
}

function mostrarPedido() {
    let listaPedidoCompleta = document.getElementById("listaPedido")
    let listaPizzas = ["Pizza 1", "Pizza 2", "Pizza 3", "Pizza 4", "Pizza 5", "Pizza 6", "Pizza 7", "Pizza 8", "Pizza 9", "Pizza 10", "Pizza 11", "Pizza 12"]
    let cantidadesPizzas = localStorage.getItem("Total")
    cantidadesPizzas = JSON.parse(cantidadesPizzas)
    for (i = 0; i < cantidadesPizzas.length; i++) {
        if (cantidadesPizzas[i] != "0") {
            let ingreso = document.createElement("li")
            ingreso.innerText = cantidadesPizzas[i] + " x " + listaPizzas[i]
            listaPedidoCompleta.appendChild(ingreso)
        }
        
    }
    }