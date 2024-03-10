// dom-012.js
function colorVerde() {
  this.style.color = "green";
}
var parrafos = document.querySelectorAll('p');
for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].onclick = colorVerde;
}