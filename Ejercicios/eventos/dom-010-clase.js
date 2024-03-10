// file: dom-010-clase.js

function displayDate() {
  document.getElementById("demo").innerHTML += "<br>" + Date();
}

function verde() {
  document.getElementById("demo").style.color = "green";
}

function negro() {
  document.getElementById("demo").style.color = "black";
}

function tamAleatorio() {
  document.getElementById("demo").style.fontSize = Math.random() * 50 + "px";
}

//Con propiedades del element
document.getElementById("botonHora").onclick = displayDate;

// con addEventListener
document.getElementById("botonHoraOtro").addEventListener("click", displayDate);
//  => Podemos añadir más de una función al mismo evento
document.getElementById("botonHoraOtro").addEventListener("click", tamAleatorio);

// podemos añadir otros eventos al mismo botón
document.getElementById("botonHoraOtro").addEventListener("focus", verde);
document.getElementById("botonHoraOtro").addEventListener("blur", negro);


// podemos eliminar eventos. En este caso usamos  función anónima
document.getElementById("botonBorraEvento").onclick = function() {
  document.getElementById("botonHoraOtro").removeEventListener("click", displayDate);
};