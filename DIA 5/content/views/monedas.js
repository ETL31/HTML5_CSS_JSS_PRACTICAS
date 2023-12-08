$("input[name='MonedasRadio']").on("click", function(){
    if($("#SolesRadio").is(":checked")){
        $("#MontoLabel").html("Monto soles");
    } else if($("#DolaresRadio").is(":checked")){
        $("#MontoLabel").html("Monto dólares");
    } else{
        $("#MontoLabel").html("Monto euros");
    }
});
