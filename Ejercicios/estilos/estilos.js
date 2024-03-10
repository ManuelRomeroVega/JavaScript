// estilos.js

// var boton = document.getElementById("modifica").
// boton.addEventListener("click", modifica);

document.getElementById("modifica").addEventListener("click", modifica);

function modifica() {
    var h1 = document.querySelector("h1");

    // modifico propiedades CSS
    h1.style.color = "green"
    // propiedad CSS con guión:
    h1.style.borderBottom = "red 6px double";
    h1.style.backgroundColor ="yellow";
    
    // uso de clases y estilos: ese estilo modifica el tamaño
    h1.className = "importante";

}
