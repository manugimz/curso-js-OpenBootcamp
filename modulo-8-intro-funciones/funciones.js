/*Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */
function siempreTrue (){
    return true;
}
console.log(siempreTrue())

// setTimeout(function(){
//     console.log("Hola soy una promesa");
//   }, 5000)
const miPromesa = new Promise((resolve, reject)=>{
    if(true){
        setTimeout(() => {
         resolve()
        }, 5000);
        
    }else{
        reject()
    }
})
miPromesa
    .then(()=> console.log("Hola soy una promesa"))
    .catch(()=> console.log('ERROR'))

// Una función generadora de índices pares automáticos 
function* generaIdPar(){
    let id = 0;
    while (true) {
         yield id+=2;
    }
}    
const gen = generaIdPar();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
