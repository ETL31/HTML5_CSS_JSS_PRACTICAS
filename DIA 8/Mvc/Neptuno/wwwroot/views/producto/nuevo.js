"use strict";

function fnCategoriaSelect(param, fnCallBack = null) {
    $("#CategoriaIdTxt").val(param.CategoriaId);
    $("#CategoriaNombreTxt").val(param.Nombre);

    if (fnCallBack !== null) {
        fnCallBack();
    }
}

$("#CategoriaBtn").on("click", function () {
    const url = $("#CategoriaBtn").data("url-search");
    const dialog = new Dialog();

    $(dialog.jqueryId).data("functionparam", fnCategoriaSelect);
    $(dialog.jqueryId).load(url).dialog({
        modal: true,
        draggable: true,
        resizable: false,
        height: 705,
        width: 850,
        position: {
            my: "center center",
            at: "center center",
            of: window
        },
        title: "Buscar Categoría",
        zindex: dialog.zIndex,
        close: function () {
            $(this).empty();
            $(this).dialog("close");
            fnRemoveDialog(dialog.id);
        }
    });
    $(dialog.jqueryId).dialog("open");
});
