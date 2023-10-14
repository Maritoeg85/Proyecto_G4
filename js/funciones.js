// Agregar aca las funciones - Se llama desde Index.html

function testLlamada() {
    console.log("La función testLlamada se realizó con éxito")
}

function agregarPizza(numero) {
    let x = document.getElementsByClassName("cantArticulo")
    x[numero].innerText = parseInt(x[numero].innerText) + 1
}

function eliminarPizza(numero) {
    let x = document.getElementsByClassName("cantArticulo")
    if (parseInt(x[numero].innerText) > 0) {
        x[numero].innerText = parseInt(x[numero].innerText) - 1
    }
}