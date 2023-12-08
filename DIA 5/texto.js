let texto ="Hola mundo";

let mayusculas= texto.toUpperCase();
let minusculas =texto.toLowerCase();

console.log(mayusculas);
console.log(minusculas);

texto ="  Hola mundo   ";
texto=texto.trim(); // Elimina espacios en blanco, al inicio y final.

console.log(texto.length);

// Implementar la numeración de una factura, si el nro tiene menos de 6 dígitos, completar con '0's
// 123 => 00123
let nro="123";
nro= nro.padStart(6,"0");
console.log("padStart:",nro);

// Le piden componer una trama del nombre del cliente, la longitud es de 10, si es menor, completar con
// espacios.
let nombre="María"
nombre=nombre.padEnd(10, " ");
console.log("padEnd:",nombre);