function limpiarCampos(){
    var nombre = document.getElementById("nombre-contacto");
    var email = document.getElementById("email-contacto");
    var comentario = document.getElementById("comentario-contacto");
    //var botonLimpiar = document.getElementById("limpiar-contacto");

        // Agregamos un manejador de eventos al botón
        //botonLimpiar.addEventListener("click", function() {
            // Limpiamos el campo de nombre
            nombre.value = "";
            email.value = "";
            comentario.value = "";
        //});
}

function validarformularioContacto(){
    /* Validación del campo nombre del formulario Contacto. */
    if(document.formularioContacto.nombreContacto.value.length <=2){
        alert("mal nombre");
        document.formularioContacto.nombreContacto.focus();
        return;
    }

    /* Validación del campo email del formulario Contacto. */
    if(document.formularioContacto.emailContacto.value.length <=2){
        alert("Email Invalido. Ingrese nuevamente el correo");
        document.formularioContacto.emailContacto.focus();
        return;
    }

    /* Validación del campo comentario del formulario Contacto */
    if(document.formularioContacto.comentarioContacto.length <=2){
        alert("Debe colocar un comentario");
        document.formularioContacto.comentarioContacto.focus();
        return;
    }

    /* Si los campos están completos se envían los datos del formulario. */
    alert("Se ha registrado su Comentario. Muchas Gracias!!!");
    document.formularioContacto.submit();
}