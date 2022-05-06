/*Enunciado del ejercicio:
En este segundo ejercicio, tendréis que crear un bucle que haga 10 iteraciones y en cada una indique el número de esta. Las iteraciones 2, 3, 5 y 7 deben imprimir en su lugar "Número primo". */
    
    for(let i = 0; i < 10; i++){
        if(i === 2 || i === 3 || i === 5 || i === 7){
            console.log (`el número ${i} es primo`)
        }else{
            console.log(`iteración ${i}`)
        }
    }
