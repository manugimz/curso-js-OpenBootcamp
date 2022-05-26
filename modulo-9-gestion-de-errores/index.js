/*Crea un nuevo proyecto de Node
- Instala la dependencia Winston
- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch */
const logger = require('./logger')
// logger.info('msj informativo')
// logger.debug('llamada  debug')
// logger.warn('msj de advertencia')
// logger.error('esto es un ERROR!')
const sumar = ((a,b)=>{
if(typeof a && typeof b === 'number'){
    return a+b;
}
    throw new Error('el valor debe ser tipo number');
})
//Registra el error en un archivo a través de un try...catch
try {
    const miSuma = sumar(4,'7');
    console.log(miSuma)
} catch (e) {
    console.error('ha fallado, no te desanimes!! sigue intentando')
} finally {console.log('si lo hiciste bien felicidades!! Pero si has fallado no te rindas!! tú puedes lograrlo!!')}