const dataSet = [
    ["Pedro Osorio", "Jefe de Proyectos", "Madrid", "31", "2021-04-25", "S/ 320,800"],
    ["Arturo De la Cruz", "Jefe de Ventas", "Lima", "63", "2011-07-25", "S/ 170,750"],
    ["Lucas Condori", "Programador Junior", "San Francisco", "66", "2009-01-12", "S/ 86,000"],
    ["Pablo Rojas", "Front End Developer", "Madrid", "22", "2012-03-29", "S/ 433,060"],
    ["Marco Huaman", "Jefe de Ventas", "Lima", "33", "2008-11-28", "S/ 162,700"] 
];

$(document).ready(function(){
    let tableFull= new DataTable("#TrabajadoresDt",
    {
        columns:[
            { title:"Nombre" },
            { title:"Cargo" },
            { title:"Ciudad" },
            { title:"Edad" },
            { title:"Fecha ingreso" },
            { title:"Ventas" }
        ],
        data: dataSet
    });
});
