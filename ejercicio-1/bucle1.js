/*En este primer ejercicio tendrás que recorrer los números del 1 al 100 mediante un bucle 
y que cuando encuentre un número par, muestre por pantalla que el número es par, en otro caso tendrá que mostrar que es impar.

Pista: tendréis que hacer un comprobación dentro del bucle. */


for (let i = 1; i < 101; i++) {
    if ([i] % 2 === 0){
        console.log(`el numero ${i} es par`)
    }else {
         console.log(`el numero ${i} es impar`)
  }  
}

// for (let i = 1; i < 101; i++) {
//     if ([i] % 2 !== 0){
//         console.log('el numero '+[i]+' es impar')
//     }  
// }
// Probando resultado con while!!
// let i = 0;
// while (i < 101) {
//         if ([i] % 2 === 0){
//         console.log('el numero '+[i]+' es par')
//     }  
//     i++;
// }
// i = 0;
// while (i < 101) {
//     if ([i] % 2 !== 0){
//     console.log('el numero '+[i]+' es impar')
// }  
// i++;
// }
//---------------bucle con (for of)!!
// let numeros = [1,2,3,4,5,6,7,8,9,10,11]
//  for (let numero of numeros) {
//      if (numero % 2 === 0) {
//         //  console.log('el numero '+numero+' es par')
//         console.log(`el numero ${numero} es par`)
//      }else {
//         console.log(`el numero ${numero} es impar`)
//      }
//      numero++;
//  }
 
