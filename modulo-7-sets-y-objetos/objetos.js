/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

x- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

x- Una variable que obtenga tu edad a partir del objeto anterior

o- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor */
let datosPersonales = {
    Nombre : 'Manuel',
    Apellido : 'Gimenez',
    Edad : 36,
    Altura : 1.70,
    isDeveloper : true
}
//  let miEdad = datosPersonales.Edad;
//  console.log(miEdad)
const prop = 'Edad'
console.log(datosPersonales[prop]);
let arrayMisDatosYobjAmigos = [{
    ...datosPersonales
    },
    {
        Nombre : 'Sergio',
        Apellido : 'Saban',
        Edad : 33,
        Altura : 1.73,
        isDeveloper : false
    },
    {
        Nombre : 'Cesar',
        Apellido : 'Sanchez',
        Edad : 38,
        Altura : 1.77,
        isDeveloper : false
    }

]
console.log(arrayMisDatosYobjAmigos)
let mayorAmenor = arrayMisDatosYobjAmigos.sort((a,b) => b.Edad - a.Edad);
console.log(mayorAmenor)



