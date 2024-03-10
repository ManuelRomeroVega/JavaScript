// Varias formas de acceder a los inputs del formulario
// a) acceder a cada input con referencia individual 
// b) referencia al formulario (mostramos 3 formas distintas) 
//   y desde el formulario a a los inputs.

function checkForm0() {
  var pwd1 = document.getElementById("pwd1");
  var pwd2 = document.getElementById("pwd2");
  if (pwd1.value != pwd2.value) {
    alert("Error: clave y confirmación deben ser iguales");
    return false;
  }
  alert("Clave correcta: " + pwd1.value);
  return true;
}

function checkForm1() {
  var form = document.getElementById("formulario");
  if (form.pwd1.value != form.pwd2.value) {
    alert("Error: clave y confirmación deben ser iguales");
    return false;
  }
  alert("Clave correcta: " + form.pwd1.value);
  return true;
}

// form es objeto predefinido, array de formularios
function checkForm2() {
  var form = document.forms[0];
  if (form.pwd1.value != form.pwd2.value) {
    alert("Error: clave y confirmación deben ser iguales");
    return false;
  }
  alert("Clave correcta: " + form.pwd1.value);
  return true;
}

// se le pasa la referencia al formulario como parámetro
// necesita que la llamada en el  formulario incluya el objeto this
//   onsubmit="return checkForm3(this);
function checkForm3(form) {
  if (form.pwd1.value != form.pwd2.value) {
    alert("Error: clave y confirmación deben ser iguales");
    // form.pwd1.focus(); // Devuelve foco al input
    return false;
  }
  alert("Clave correcta: " + form.pwd1.value);
  return true;
}
