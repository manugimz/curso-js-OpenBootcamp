/*- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde */
import chalk from 'chalk';

console.log(chalk.green('Hello world!'));