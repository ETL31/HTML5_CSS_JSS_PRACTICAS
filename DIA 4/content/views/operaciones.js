function fnEstacion(numEstacion){
    let estacion;

    switch(numEstacion){
        case 1:
            estacion="Verano";
            break;
        case 2:
            estacion="Otoño";
            break;
        case 3:
            estacion="Invierno";
            break;
        case 4:
            estacion="Primavera";
            break;
        default:// Significa otro
            estacion= null;
    }   

    return estacion;
}

$("#EstacionBtn").on("click", function(e){
    e.preventDefault();

    let num = parseInt($("#EstacionTxt").val());
    let estacionNombre = fnEstacion(num); 

    alert(estacionNombre);
});

$(".inicio").on("click", function (e){
    e.preventDefault();

    // Ir a una página por código
    window.location.href = "https://www.google.com";
});
/////////////////////////////////////////////
// Registro de usuario
$("#AceptarTerminosChk").on("click", function(){
    if($("#AceptarTerminosChk").is(":checked")){//is(":checked"): indica si la caja de texto esta marcada
        $("#RegistroUsuarioBtn").prop("disabled", false);// le quita el estado dehabilitado
    } else {
        $("#RegistroUsuarioBtn").prop("disabled", true);// le asigna el estado dehabilitado
    }
});

$("#ProductoTxt").on("input", function (){
    let producto = $("#ProductoTxt").val(); // this dice: el elemento actual

    producto= producto.substring(0,5);//substring: Recorta la cadena de texto
                              //(i,j) desde i hasta j
    console.log(producto);
    $("#NombreCorto").html(producto);
});

/////////////////////////////////////////

$("#RequiereLicenciaChk").on("click", function(){
    let tiene = $("#RequiereLicenciaChk").is(":checked");

    if(tiene){
        $("#RequiereLicenciaBtn").prop("disabled", false);
    } else {
        $("#RequiereLicenciaBtn").prop("disabled", true);
    }
});

///////////////////////
// Operador ternario
// Se lepide una funcion máximo, que devuelva el máximo de 2 valores

function fnMaximo(numA, numB){
    let max = (numA > numB? numA: numB);

    return max;
}

$("#MaximoBtn").on("click", function(){
    let aaa= 5;
    let bbb= 7;
    let result=fnMaximo(aaa, bbb);

    alert(result);
});