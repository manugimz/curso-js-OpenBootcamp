const parrafos  = document.querySelectorAll(".parrafo");
const secciones  = document.querySelectorAll(".seccion");

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log(`Estoy arrastrando el ${parrafo.innerText} de los parrafos`)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 150, 150)
    })
    parrafo.addEventListener("dragend", () => {
        // console.log(`Eh terminado el arrastre`)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        console.log('dragover')
    })

    seccion.addEventListener("drop", event => {
        console.log('drop')
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id :", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo);
    })
    })

const papelera = document.querySelector(".papelera");
 papelera.addEventListener("dragover", event => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
 })
 papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id")
    document.getElementById(id_parrafo).remove()
 })

