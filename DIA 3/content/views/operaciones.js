"use strict"; // No permitir variables sin declarar

// Realizar la suma de los diez numeros naturales.
// Almacenar los numeros pares en una lista, y los impares en otra
/*
const pares = [];
const impares = [];
let suma = 0;
//  Se aumentará el valor mientras sea menor de 10, se incrementa en 1
for(let i=1; i<=10; i++) {
    if(i%2===0){//%: obtiene residuo
		pares.push(i);// Agrega el elemento al array
	} else {
		impares.push(i);
	}
	suma=suma+i;
}

console.log("Pares:", pares);
console.log("Impares:", impares);
console.log("Resultado de sumatoria:", suma);
*/
const pares = [];
const impares = [];
let suma = 0;
// Se aumentará el valor mientras sea menor de 10, se inccrementa en 1
for(let i=0; i<10; i++){
	if(i%2===0){// % obtiene residuo
		pares.push(i); //Agrega el elemento al array
	} else {
		impares.push(i);
	}
    suma=suma+i	;
}

console.log("Pares:", pares);
console.log("Impares:", impares);
console.log("Resultado de sumatoria:", suma);