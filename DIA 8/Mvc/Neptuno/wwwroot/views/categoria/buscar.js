"use strict";

$("#TrabajadoresDt").on("click", "input.enviar", function () {
    const tr = $(this).closest("tr");
    const tds = $(tr).children();

    $("#CategoriaId").val(tds[0].innerHTML);
    $("#CategoriaTxt").val(tds[1].innerHTML);

    fnCloseCategoriaBuscar();
});

$("#TrabajadoresDt").on("dblclick", "tr", function () {
    const tds = $(this).children();

    $("#CategoriaId").val(tds[0].innerHTML);
    $("#CategoriaTxt").val(tds[1].innerHTML);

    fnCloseCategoriaBuscar();
});


function fnCloseCategoriaBuscar() {
    $(".ui-dialog-titlebar-close").click();
}
