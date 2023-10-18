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

function enviar() {
    document.formPedido.submit()
}

function validarForm() {
    let nombre = document.formPedido.nombre.value
    let alertNombre = document.getElementById("alertNombre")
    if (nombre == "") { alertNombre.innerText = "Escriba un nombre válido"; return  }
    else { alertNombre.innerText = "" }

    let direccion = document.formPedido.direccion.value
    let alertDireccion = document.getElementById("alertDireccion")
    if (direccion == "") { alertDireccion.innerText = "Escriba una dirección válida"; return  }
    else { alertDireccion.innerText = "" }

    let telefono = document.formPedido.tel.value
    let alertTel = document.getElementById("alertTel")
    if (telefono.length != 10) { alertTel.innerText = "Escriba un número de teléfono válido"; return  }
    else { alertTel.innerText = "" }

    let correo = document.formPedido.correo.value
    let alertCorreo = document.getElementById("alertCorreo")
    let contador = 0
    for (i = 0; i < correo.length; i++) {
        if (correo.charAt(i) == "@" || correo.charAt(i) == ".") {
            contador = contador + 1
        }
    }
    if (contador != 2) { alertCorreo.innerText = "Escriba una dirección de correo válida"; return  }
    else { alertCorreo.innerText = "" }
    
    let alertHora = document.getElementById("alertHora")
    if (
        document.formPedido.hora[0].checked == false &&
        document.formPedido.hora[1].checked == false &&
        document.formPedido.hora[2].checked == false
    ) { alertHora.innerText = "Seleccione un horario de entrega"; return }
    else { alertHora.innerText = "" }

    let alertCaptcha = document.getElementById("alertCaptcha")
    if (grecaptcha.getResponse().length == 0) {
        alertCaptcha.innerText = "Complete la validación del CAPTCHA"; return }
    else { alertCaptcha.innerText = "" }

    let envioForm = document.getElementById("envioForm")
    envioForm.innerText = "Su formulario fue enviado con éxito"
    setTimeout(() => {
        document.formPedido.submit()
    }, 2000);
}
