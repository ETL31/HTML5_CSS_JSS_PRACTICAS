"use strict";

$(document).ready(function () {    
    fnMomentFormat();  

   // console.log("-----------------");
    //fnMomentOperaciones(); 

    //console.log("--------------------");
   //fnMomentConversiones();
});

function fnMomentFormat(){
    moment.locale("es");

    const now = new Date(); // Objeto fecha

    // Fecha del parámetro
    let aaa = moment(now).format("DD-MM-YYYY HH:mm a"); 
    let bbb = moment(now).format("DD-MM-YYYY HH:mma");

    // Fecha actual
    let ccc = moment().format("D/M/YY");  
    
    // Los valores literales van entre corchetes
    let ddd = moment().format("Qo [trimestre], DD [de] MMM [de] YYYY"); 
    let eee = moment().format("ddd [de] MMM [de] YYYY");
    let fff = moment().format("[Lima], dddd [de] MMMM [de] YYYY");
    const fff1 = moment().format("[Villa el Salvador:] ddd DD-MM-YY HH:mma");

    console.log("DD-MM-YYYY HH:mm a:: ", aaa);
    console.log("DD-MM-YYYY HH:mma:: ", bbb);
    console.log("D/M/YY:: ",ccc);
    console.log("Qo [trimestre], DD [de] MMM [de] YYYY:: ",ddd);
    console.log("ddd [de] MMM [de] YYYY:: ",eee);
    console.log("[Lima], dddd [de] MMMM [de] YYYY:: ",fff);
    console.log("[Villa el Salvador:] ddd DD-MM-YY HH:mma:: ",fff)1;
}

function fnMomentOperaciones() {
    moment.locale("es");

    const fecha = new Date(2021, 2, 3, 4, 5, 6);
    const aaa = moment(fecha).add(1, "day").toDate();
    const bbb = moment(fecha).add(2, "week").toDate();
    const ccc = moment(fecha).add(3, "month").toDate();
    const ddd = moment(fecha).add(4, "year").toDate();
    const eee = moment(fecha).subtract(1, "month").toDate();
    const fff = moment(fecha).subtract(2, "week").toDate();
    const ggg = moment(fecha).subtract(3, "day").toDate();

    console.log("aaa", aaa);
    console.log("bbb", bbb);
    console.log("ccc", ccc);
    console.log("ddd", ddd);
    console.log("eee", eee);
    console.log("fff", fff);
    console.log("ggg", ggg);
}

function fnMomentConversiones(){
    let aaa = moment("10-12-2023","DD-MM-YYYY").toDate();
    let bbb = moment("01/01/2023","DD/MM/YYYY").toDate();
    let ccc = moment("11-09-23","DD-MM-YY").toDate();

    console.log("aaa", aaa);
    console.log("bbb", bbb);
    console.log("ccc", ccc);
}
