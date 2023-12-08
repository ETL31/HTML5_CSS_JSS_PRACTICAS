"use strict";

var zIndex = 10000;

function Dialog(fullParent = false) {
    const id = "dialog-" + fnNewGuid();
    const index = zIndex++;

    $("#dialog").append("<div id='" + id + "'></div>");
    if (fullParent) {
        $("#" + id).parent().css({ "z-index": zIndex + " !important"});
    }

    this.id = id;
    this.jqueryId = "#" + id;
    this.zIndex = index;
}

function fnRemoveDialog(id) {
    zIndex--;
    $("#" + id).remove();
}

function fnNewGuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}
