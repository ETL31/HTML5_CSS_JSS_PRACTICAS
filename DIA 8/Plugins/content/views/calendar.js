"use strict";

function fnSetDates(start, end) {
    $("#SearchRangeDatepicker span").html(start.format("DD-MM-YYYY") + " - " + end.format("DD-MM-YYYY"));
}


$(document).ready(function () {
    const mesAnterior = moment().subtract(1, "month").format("DD-MM-YYYY");
    const today = moment();

    $("#InicialDateDatePicker, #FinalDateDatePicker").daterangepicker({
        singleDatePicker: true,
        showISOWeekNumbers: true,
        autoApply: true,
        showDropdowns: true,
        locale: {
            format: "DD-MM-YYYY",
            weekLabel: "S",
            daysOfWeek: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
            firstDay: 0,
            applyLabel: "Aplicar",
            cancelLabel: "Cancelar",
            customRangeLabel: "Personalizado"
        }
    });
    $("#InicialDateDatePicker").data("daterangepicker").setStartDate(mesAnterior);
    $("#FinalDateDatePicker").data("daterangepicker").setEndDate(today);

    const start=moment().startOf("month");
    const end=moment();
    $("#SearchRangeDatepicker").daterangepicker({
        startDate: start,
        endDate: end,
        showDropdowns: true,
        alwaysShowCalendars: true,
        linkedCalendars: false,
        autoUpdateInput: false,
        autoApply: true,
        opens: "left",
        locale: {
            format: "DD/MM/YYYY",
            weekLabel: "S",
            daysOfWeek: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
            firstDay: 0,
            applyLabel: "Aplicar",
            cancelLabel: "Cancelar",
            customRangeLabel: "Personalizado"
        }
    }, fnSetDates);
    fnSetDates(moment().startOf("month"), moment());
});
