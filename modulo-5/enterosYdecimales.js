/*Crea un archivo JS que contenga las siguientes líneas
x- Una variable que contenga tu altura en centímetros (entero)
x- Una variable que contenga tu altura en metros (número de coma flotante)
x- Una variable que contenga tu peso en kilogramos (número de coma flotante)
x- Una variable que contenga tu altura en metros redondeada hacia arriba
x- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript */
let alturaCm = 170;
let alturaMts = 1.7;
let peso = 72.9;
let alturaRedondeadaArriba = Math.ceil(alturaMts);
let pesoRedondondeadoAbajo = Math.floor(peso);
let maxValueJs = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(alturaCm);
console.log(alturaMts);
console.log(peso);
console.log(alturaRedondeadaArriba);
console.log(pesoRedondondeadoAbajo);
console.log(maxValueJs)