/*Crea un archivo llamado fechas.js que contenga las siguientes líneas
x- La fecha de hoy
x- La fecha de tu nacimiento
x- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
x- Una variable que contenga el día de tu nacimiento
x- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
x- Una variable que contenga el año de tu nacimiento (con 4 dígitos) */

let toDay = new Date();
console.log(toDay)
let myBirth = new Date('March 24, 1986');
console.log(myBirth.toLocaleDateString('en-GB'))
let later = toDay > myBirth;
console.log(later)
let DayOfMyBirth = myBirth.getDate();
console.log(DayOfMyBirth)
let monthOfMyBirth = myBirth.getMonth()+1;
console.log(monthOfMyBirth)
let yearOfMyBirt = myBirth.getFullYear();
console.log(yearOfMyBirt)