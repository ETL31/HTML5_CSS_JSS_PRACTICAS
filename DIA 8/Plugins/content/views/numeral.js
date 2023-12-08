$(document).ready(function (){
    const aaa = numeral(1234.567).format("0,0.0000");
    const bbb = numeral(1234).format("000000");

    // Si es negativo, mostrar signo
    let bbb = numeral(-123.456).format("-0.0000");

    // Mostra signo
    let ccc = numeral(123.456).format("+0.0000");

    // Sompletar con ceros a la derecha, si no llega al limite
    let ddd = numeral(1234).format("000000");

    // Poner 4 decimales y paréntesis
    let eee = numeral(-123.456).format("(0.0000)");

    // Dos decimales
    let fff = numeral(-1234.56789).format("0.00");

    // Convertir a número
    let ggg = numeral("123456.789").value();

    // Convertir a número, sin error, teniendo una coma de separador
    let hhh = numeral("123,456.789").value();

    // Convertir a número, teniedo varios decimales
    let iii = numeral("123,456.789012").value();

    console.log(aaa);
    console.log(bbb);
    console.log(ccc);
    console.log(ddd);
    console.log(eee);
    console.log(fff);
    console.log(ggg);
    console.log(hhh);
    console.log(iii);
});
