let monto = 4.6;

let redondeo=Math.round(monto);
let parteEntera = Math.trunc(monto);
let nroAleatorio=Math.random();

console.log("redondeo:",redondeo);
console.log("parteEntera:",parteEntera);
console.info("nroAleatorio",nroAleatorio);

console.log("Carta 21:", nroAleatorio*10);
/////////////////////////////////////////////////////////////
function fnAleatorio(){
    console.log(Math.random());
}

setInterval(fnAleatorio, 500); // Se ejecuta cada medio segundo
/////////////////////////////////////////////////////////////
// Luego de presentar los resultados, ir a inicio
setTimeout(
    function(){
      window.location.href="https://www.google.com"  
    },4000// usa milisegundos, se ejecuta a los 4 seg
);
