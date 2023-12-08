$(document).ready(function(){
    $("#FechaInicioDatePicker").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });
    $("#FechaFinDatePicker").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "dd-mm-yy"
    });

    $("#MainAcordion").accordion();
    $("#ConfiguracionesTab").tabs();
});
