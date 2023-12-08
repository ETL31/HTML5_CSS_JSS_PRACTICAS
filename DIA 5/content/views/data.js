$("#LeerBdBtn").on("click", function(){
    let codAlumno="123456";
    let distrito="Rimac";
    let provincia="Lima";

    $("#CodAlumnoTxt").val(codAlumno);
    $("#CodAlumnoTxt").data("distrito", distrito); // Se pueden guardas varios elementos en data
    $("#CodAlumnoTxt").data("provincia", provincia);
});

$("#LeerBtn").on("click", function (){
    let cAlumno=$("#CodAlumnoTxt").val();
    let alumnD=$("#CodAlumnoTxt").data("distrito");
    let alumnP=$("#CodAlumnoTxt").data("provincia");

    console.log("cAlumno", cAlumno);
    console.log("alumnD", alumnD);
    console.log("alumnP", alumnP);

    $("#CodAlumnoTxt").removeData("distrito");
    console.log($("#CodAlumnoTxt").data("distrito"));
    // data: si no existe el elemento, devuelve undefined
});
