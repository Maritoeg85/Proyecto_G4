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
    localStorage.setItem("Total", arregloCantidad)
}

function eliminarPizza(numero) {
    let x = document.getElementsByClassName("cantArticulo")
    if (parseInt(x[numero].innerText) > 0) {
        x[numero].innerText = parseInt(x[numero].innerText) - 1
    }
}