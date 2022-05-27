/*xCrea un nuevo proyecto de Node
x- Configura el proyecto para utilizar los módulos de ES6
x- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
x- En el entrypoint index.js, importa el módulo controller.js
x- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde */
import { suma, multiplica } from "./controller.js";
const multiplicacionDeSuma = multiplica(suma(1,2), suma(4,5));
console.log(multiplicacionDeSuma)
// const miSuma = suma(3,5);
// console.log(`El resultado de la suma es ${miSuma}`)
// const miMultiplicacion = multiplica(3,5);
// console.log(`El resultado de la multiplicacion es ${miMultiplicacion}`)
