/*Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal */
let nombre = "Manuel";
let apellido = "Gimenez";
let estudiante = ` estudiante ${nombre} ${apellido}`;
let estudianteMayus = `${estudiante.toUpperCase()}`;
let estudianteMinus =`${estudiante.toLowerCase()}`;
let cantidadDeLetras = `${estudiante.length}`;
let primerLetraDelNombre = `${nombre.slice(0,1)}`;
let ultimaLetraDelApellido = `${apellido.slice(`${apellido.length -1}`)}`;
let eliminaEspacios = `${estudiante.trim()}`;
let estaContenido = `${estudiante.includes(`${nombre}`)}`;
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(cantidadDeLetras);
console.log(primerLetraDelNombre);
console.log(ultimaLetraDelApellido);
console.log(eliminaEspacios);
console.log(estaContenido);

const doubleQuotes = "comillas dobles";

const singleQuotes = "comillas simples";

const backticks = "comillas invertidas";


 
