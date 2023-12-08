"use strict";

function fnLoad() {
    $("#ProductoNuevo").validate({
        ignore: "not:hidden", // no omitir los controles ocultos
        errorContainer: $("#ProductoNuevo").find("div.validation-message"),
        errorLabelContainer: $("#ProductoNuevo").find("div.validation-message ul"),
        wrapper: "li",
        rules: {
            NombreTxt: {
                required: true
            },
            IvaSelect: {
                required: true
            },
            MonedasRadio: {
                required: true
            }
        },
        messages: {
            NombreTxt: {
                required: "El nombre es requerido."
            },            
            IvaSelect: {
                required: "Seleccione el Igv."
            },            
            MonedasRadio: {
                required: "Seleccione la moneda."
            }
        }
    });
    IvaSelect
   /* $('input[maxlength]').maxlength({
        alwaysShow: true,
        placement: 'bottom-left'
    });
    $('textarea').maxlength({
        alwaysShow: true,
        placement: 'bottom-left'
    });*/
}

$(document).ready(function(){
    fnLoad();
});

$("#GuardarBtn").on("click", function(e){
    e.preventDefault();

    if (!$("#ProductoNuevo").valid()) {
        return false;
    }

    $("#ExitoGuardarAlert").removeClass("ocultar");
    $("#ExitoGuardarAlert").addClass("mostrar");

    setTimeout(
        function(){
            window.location.href="../index.html"
        },
        3000
    );
});

/*$("#CategoriaBtn").on("click", function() {
    $("#CategoriaBuscarModal").modal("show");
});*/
