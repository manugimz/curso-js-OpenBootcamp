/*Crea un archivo JS que contenga las siguientes líneas

x- Una variable que contenga la lista de la compra (mínimo 5 elementos)
x- Modifica la lista de la compra y añádele "Aceite de Girasol"
x- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
x- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
x- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
x- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
x- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
x- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
x- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/
const listaDelSuper = ['Carne', 'Queso', 'Fideo', 'Arroz', 'Atún']
listaDelSuper.push('Aceite de Girasol');
listaDelSuper.pop();
const listaDePeliculas = [
    {titulo : 'Gladiador', director : 'Ridley Scott', fecha : new Date ('18 May 2000')},
    {titulo : 'iron man', director : 'Jon Favreau', fecha : new Date ('30 April 2008')},
    {titulo : 'Avengers', director : 'Anthony Russo', fecha : new Date ('26 April 2019')}
]
const peliculaMasNueva = listaDePeliculas.filter((obj) => obj.fecha > new Date('1 January 2010'))
const directores = listaDePeliculas.map((value) => `${value.director}`);
const tituloDePeliculas = listaDePeliculas.map((value) => `${value.titulo}`);
const concatListas = directores.concat(tituloDePeliculas);
const spreadDirectorYpeliculas = [...directores, ...tituloDePeliculas];
console.log('listaDelSuper', listaDelSuper)
console.log('listaDePeliculas', listaDePeliculas)
console.log('peliculaMasNueva', peliculaMasNueva)
console.log('directores', directores)
console.log('tituloDePeliculas', tituloDePeliculas)
console.log('concatListas', concatListas)
console.log('spreadDirectorYpeliculas', spreadDirectorYpeliculas)