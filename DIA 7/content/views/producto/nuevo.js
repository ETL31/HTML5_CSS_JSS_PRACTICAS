$(document).ready(function(){
    $("input['maxlength']").maxlength();
});

$("#GuardarBtn").on("click", function(){
    $("#ExitoGuardarAlert").removeClass("ocultar");
    $("#ExitoGuardarAlert").addClass("mostrar");

    setTimeout(
        function(){
            window.location.href="../index.html"
        },
        3000
    );
});

$("#CategoriaBtn").on("click", function() {
    $("#CategoriaBuscarModal").modal("show");
});