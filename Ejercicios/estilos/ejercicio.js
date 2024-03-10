// ejercicio.js

document.getElementById("modParrafos").addEventListener("click", cambiaParrafos);

function cambiaParrafos() {
    // alert("test")
    var lista = document.querySelectorAll("p");

    for ( let i = 0;    i < lista.length;   i++ ){
        lista[i].style.color = "green" ;
        lista[i].style.fontStyle = "italic";
    }

}
