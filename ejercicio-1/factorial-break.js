//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let nro = 20;
result = 1;
let i = 1;
while(i <= nro){
    if(i > 10){
        break;
    }
    result *=i;
    i++;
}
console.log(result);