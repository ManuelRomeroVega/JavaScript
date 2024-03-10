// file: dom-011.js

// borrar el último parrafo de la sección
function borraUltimo() {
  var ultimo = document.querySelector("section p:last-child");
  if (ultimo != null)
    ultimo.remove(); // ultimo.parentNode.removeChild(ultimo);
}

// ojo a parentesis en HTML, sin paréntesis en JS..
document.getElementById("borrar").onclick = borraUltimo;
// otra opción para asociar el evento
//document.getElementById("borrar").addEventListener("click", borraUltimo);



// EJERCICIO
// añadir código para que el botón inserta cree un nuevo párrafo 
// y lo inserte al principio de la sección.
// hacerlo de las DISTINTAS formas vistas..


