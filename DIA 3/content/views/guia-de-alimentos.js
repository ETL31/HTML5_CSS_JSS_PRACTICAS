var numero = 1;
const nombre = "Juan Perez";

console.log(numero);
console.log(nombre);

// Por campaña escolar, se ofrece un descuento de 20%, si la venta es mayor a S/ 50, y 30%,
// si es mayor a 100.
// Debe incluir el nombre del cliente
//|--------|--------|-------->
//0        50      100
//    0%      20%       30%

let venta = 110
let dscto;

if(venta > 50 && venta <= 100) {
	dscto = 20;
} else if(venta > 100) {
	dscto = 30;
} else {
	dscto = 0;
}

alert(venta); // alert(): muestra un ventana de mensaje
alert(dscto);

// En una farmacia, si el producto es categoria 1, es antibiotico y debe pedir receta
// Si se categoria 2,3 debe pedir receta archivada
// sino es venta libre
let categoria = 4;
let mensaje;

if(categoria === 1) {//===: Se llama comparación estricta, a diferencia del comparacion (==)
	                // no realiza conversiones, que pueden alterar el resultado.
	mensaje="Pedir receta";
} else if(categoria === 2 || categoria === 3) {
	mensaje="Receta archivada";
} else {
	mensaje="Venta libre";
}
 
console.log("Mensaje:", mensaje);


// Se le pide almacenar y mostrar los datos de un producto
// Categoría, precio lista, descuento, precio venta, igv,codigo igv, isc, codigo isc, nombre
let producto = {
	Categoria:1,
	PrecioLista: 100.0,
	Descuento: 12.0,
	PrecioVenta: 88.0,
	Igv:15.84,
	IgvCodigo: "VAT",
	Isc: 0,
	IscCodigo: null, // Significa que se la asignado sin valor
	Nombre: "Pecanas de Ica",
	EsImportado: false// Booleano
};

console.log("Producto::", producto);

// Actualizar los precios del produto "Pecanas de Ica", se aumentar un 10%
if(producto.Nombre === "Pecanas de Ica"){
	producto.PrecioLista = 110.0;
	producto.Descuento = 13.2;
	producto.PrecioVenta = 96.8;
	producto.Igv = 17.42;
}

console.log("Producto::", producto);
