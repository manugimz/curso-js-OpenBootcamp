/*
Enunciado del ejercicio:
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
 */
const misDatos = ['Manuel', 36, true, new Date('24 March 1986'),{
    libroFavorito : {
        titulo : 'Mi planta de naranja lima',
        autor : 'José Mauro de Vasconcelos',
        fecha : 'año 1968',
        url :'https://books.google.com.ar/books/about/Mi_planta_de_naranja_lima.html?id=Qx_sDwAAQBAJ&printsec=frontcover&source=kp_read_button&hl=es-419&redir_esc=y#v=onepage&q&f=false',
    }

}

]
console.log(misDatos);