$("#EscribirCotizacionBtn").on("click", function(){
    let cotizacion = $("#CotizacionTxt").val();

    localStorage.setItem("CotizacionDolar", cotizacion);
});

$("#LeerCotizacionBtn").on("click", function(){
    let cotizacionL = localStorage.getItem("CotizacionDolar");

    $("#CotizacionLecturaTxt").val(cotizacionL);

    localStorage.removeItem("CotizacionDolar");
    console.log(localStorage.getItem("CotizacionDolar"));// Como no existe, muestra null
});
