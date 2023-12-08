function fnLine() {
    const line = document.querySelector("#Line");
    const labels = ["1996-10", "1996-11", "1996-12", "1996-7", "1996-8", "1996-9", "1997-1", "1997-10", "1997-11", "1997-12", "1997-2", "1997-3", "1997-4", "1997-5", "1997-6", "1997-7", "1997-8", "1997-9", "1998-1", "1998-2", "1998-3", "1998-4", "1998-5"]; // Eje X
    const data = [
        1520.59, 2151.86, 2798.59, 1288.18, 1397.17, 1123.48, 2238.98, 3945.53, 2008.85, 3757.96, 1601.45, 1888.81, 2939.1, 3461.4, 1852.65, 2458.72, 3078.27, 3237.05, 5463.44, 4272.94, 5379.02, 6393.57, 685.08
    ]; // Eje Y
    const label="Ventas por Mes";
    const title="Monto de Ventas por Mes";

    const dataset={
        data:data,
        label: label,
        backgroundColor: 'rgba(35, 135, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(35, 135, 235, 1)' // Color del borde
    };

    new Chart(line, {
        type: "line", // Tipo de gráfico
        data: {
            labels: labels,
            datasets: [
                dataset
            ]
        },
        options: {
            responsive: true, // Se adapta al contenedor
            title: {
                display: true,
                text: title
            }
        }
    });
}

function fnBar() {
    const line = document.querySelector("#Cols");
    const labels = ["1996-10", "1996-11", "1996-12", "1996-7", "1996-8", "1996-9", "1997-1", "1997-10", "1997-11", "1997-12", "1997-2", "1997-3", "1997-4", "1997-5", "1997-6", "1997-7", "1997-8", "1997-9", "1998-1", "1998-2", "1998-3", "1998-4", "1998-5"]; // Eje X
    const data = [
        1520.59, 2151.86, 2798.59, 1288.18, 1397.17, 1123.48, 2238.98, 3945.53, 2008.85, 3757.96, 1601.45, 1888.81, 2939.1, 3461.4, 1852.65, 2458.72, 3078.27, 3237.05, 5463.44, 4272.94, 5379.02, 6393.57, 685.08
    ]; // Eje Y
    const label="Ventas por Mes";
    const title="Monto de Ventas por Mes";

    const dataset={
        data:data,
        label: label,
        backgroundColor: 'rgba(35, 135, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(35, 135, 235, 1)' // Color del borde
    };

    new Chart(line, {
        type: "bar", // Tipo de gráfico
        data: {
            labels: labels,
            datasets: [
                dataset
            ]
        },
        options: {
            responsive: true, // Se adapta al contenedor
            title: {
                display: true,
                text: title
            }
        }
    });
}

function fnPie(){
    const pie =document.querySelector("#Pie");
    const labels = ["Frutas/Verduras", "Granos/Cereales", "Carnes", "Condimentos", "Pescado/Marisco", "Repostería", "Lácteos", "Bebidas"]; // Eje X
    const data = [13125.83, 17750.50, 17769.18, 20066.97, 27722.96, 32819.91, 38164.02, 39886.73]; // Eje Y
    const title ="Ventas por categorías";

    const dataset={
        data: data,
        backgroundColor: [ // Poner un color por cada sector.
            'rgba(255,0,0,0.2)', // Es opcional
            'rgba(0,255,0,0.2)', // Si no se especifíca, Chartjs usa una paleta predeterminada
            'rgba(0,0,255,0.2)',
            'rgba(255,255,0,0.2)',
            'rgba(0,255,255,0.2)',
            'rgba(255,0,255,0.2)',
            'rgba(128,128,128,0.2)',
            'rgba(128,0,0,0.2)'
        ],
        borderColor: [
            'rgba(255,0,0,1)',
            'rgba(0,255,0,1)',
            'rgba(0,0,255,1)',
            'rgba(255,255,0,1)',
            'rgba(0,255,255,1)',
            'rgba(255,0,255,1)',
            'rgba(128,128,128,1)',
            'rgba(128,0,0,1)'
        ]
    };

    new Chart(pie, {
        type: 'pie', // Tipo de gráfico
        data: {
            labels: labels,
            datasets: [
                dataset
            ]
        },
        options: {
            responsive: true, // Se adapta al contenedor
            title: {
                display: true,
                text: title
            }
        }
    });

}

$(document).ready(function(){
    fnLine();
    fnBar();
    fnPie();
});
