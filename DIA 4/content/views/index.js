"use strict";// Obliga a declarar variables
// Javascript no es neceario declarar variables
// Por tanto en un error de tipeo lo interpreta 
// como si fuera otra variable

function fnMensaje(texto1, texto2){// Se crea una función
     return texto1+ " " + texto2;
}

$(document).ready(function() {
    console.log(1);
});

$("#EnviarBtn").on("click", function(){ // Evento clic del usuario
    let nombreCompleto;

    nombreCompleto =$("#NombreCompleto").val();// Leer el contenido de la caja de texto

    if(nombreCompleto.length === 0){//length: indica cantidad cantidad e caracteres
        alert("Ingrese nombre completo");
        $("#MensajeBienvenida").html("Ingrese nombre completo");
        $("#MensajeBienvenida").addClass("error");//addClass: agrega una clase
        $("#MensajeBienvenida").removeClass("exito");//removeClass: quita una clase
    } else {
        $("#MensajeBienvenida").html("Bienvenido amigo: " + nombreCompleto); // se usa html en div, span y similares
        $("#MensajeBienvenida").addClass("exito");
        $("#MensajeBienvenida").removeClass("error");
    }

    let mensaje = fnMensaje("Bienvenido: ", nombreCompleto); // Se invoca a la función
});

$("#SumarBtn").on("click", function(e){
    e.preventDefault(); // Previene alguna accion por defecto

     let numero1 = $("#Numero1").val();// Lee texto
     let numero2 = $("#Numero2").val();
     let resultado=parseInt(numero1)+parseInt(numero2);
                   // Convierte texto a entero 
    $("#ResultadoTxt").val(resultado);
});

$("#DividirBtn").on("click", function(e){
    e.preventDefault(); 

    let numero1 = $("#Numero1").val();// Lee texto
    let numero2 = $("#Numero2").val();
    let resultado;

    try {
        resultado=parseInt(numero1)/parseInt(numero2);

        if(!isFinite(resultado)) {
            throw "División por cero"
        } else {
            $("#ResultadoTxt").val(resultado);
        }
    } catch(ex){
        console.log("Exception:", ex);
        alert(ex);
    }
});
