/*Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;) */
// const mySet = new Set();

// mySet.add('Sofia');
// mySet.add('Milena');
// mySet.add('Manuel');
// console.log(mySet)
// mySet.add('Manuel');
// console.log(mySet)
// mySet.add('Javascript');
// console.log(mySet)
const family = ['Milena', 'Sofia', 'Manuel']
console.log(family)
const mySet = new Set(family)
mySet.add('Manuel')
mySet.add('Javascript')
console.log(mySet)
