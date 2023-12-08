"use strict";

$(document).ready(function () {
    // Resta un mes a la fecha actual y le aplica el formato
    const startDate = moment().subtract(1, "month").format("DD-MM-YYYY");
    // Fecha actual
    const endDate = moment();
        
    // Un array, a diferencia de un vector, pone un nombre a cada posición, un vetor pone un índica [0,1,2...].
    const ranges = new Array();
    ranges["Hoy"] = [moment(), moment()];
    ranges["Ayer"] = [moment().subtract(1, "days"), moment().subtract(1, "days")];
    ranges["Últimos 7 días"] = [moment().subtract(6, "days"), moment()];
    ranges["Últimos 30 días"] = [moment().subtract(29, "days"), moment()];
    ranges["Este mes"] = [moment().startOf("month"), moment().endOf("month")];
    ranges["Último año"] = [moment().subtract(1, "year").startOf("month"), moment()];

    $("#RangoDeFechasDaterange").daterangepicker({
        showISOWeekNumbers: true,
        startDate: startDate,
        endDate: endDate,
        showDropdowns: true,
        alwaysShowCalendars: true,
        autoApply: true,
        ranges: ranges,
        locale: { // Traducción al español
            format: "DD/MM/YYYY",
            weekLabel: "S",
            daysOfWeek: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
            firstDay: 0,
            applyLabel: "Aplicar",
            cancelLabel: "Cancelar",
            customRangeLabel: "Personalizado"
        }
    }, function (start, end) { 
        // Aqui lee el rango de fecha seleccionado por el usuario.
        $("#StartDateTxt").val(start.format("DD-MM-YYYY"));
        $("#EndDateTxt").val(end.format("DD-MM-YYYY"));
    });
});
